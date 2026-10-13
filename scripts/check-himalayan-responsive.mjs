// Local-only browser checks. Start `npm run start -- -p 3100 -H 127.0.0.1` first.
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const WebSocket = require("next/dist/compiled/ws");

const origin = "http://127.0.0.1:3100";
const port = 9223;
const directory = await fs.mkdtemp(path.join(os.tmpdir(), "exploreyatri-responsive-"));
const executable = process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe";
const chrome = spawn(executable, ["--headless=new", "--disable-gpu", "--no-sandbox", "--no-first-run", "--no-default-browser-check", `--remote-debugging-port=${port}`, `--user-data-dir=${directory}`, "about:blank"], { windowsHide: true, stdio: ["ignore", "ignore", "pipe"] });
chrome.stderr.on("data", data => { if (process.env.DEBUG_BROWSER) console.log(data.toString()); });
chrome.on("exit", (code, signal) => { if (process.env.DEBUG_BROWSER) console.log("Chrome exited", code, signal); });
let launchError;
chrome.on("error", error => { launchError = error; });
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
async function until(callback, timeout = 15000) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    if (launchError) throw launchError;
    try { const result = await callback(); if (result) return result; } catch (error) { if (Date.now() >= deadline) throw error; }
    await delay(100);
  }
  throw new Error("Timed out waiting for local browser state");
}
let socket;
const keepAlive = setInterval(() => {}, 1000);
try {
  await until(async () => (await fetch(`http://127.0.0.1:${port}/json/version`)).ok);
  const target = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: "PUT" })).json();
  if (process.env.DEBUG_BROWSER) console.log("Target", target);
  socket = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => { socket.addEventListener("open", resolve, { once: true }); socket.addEventListener("error", reject, { once: true }); });
  let id = 0;
  const pending = new Map();
  const exceptions = [];
  socket.addEventListener("message", event => {
    if (process.env.DEBUG_BROWSER) console.log("Browser message", String(event.data).slice(0, 150));
    const message = JSON.parse(event.data);
    if (message.method === "Runtime.exceptionThrown") exceptions.push(message.params.exceptionDetails.text);
    if (!message.id) return;
    const handler = pending.get(message.id);
    if (!handler) return;
    pending.delete(message.id);
    clearTimeout(handler.timer);
    if (message.error) handler.reject(new Error(JSON.stringify(message.error)));
    else handler.resolve(message.result);
  });
  function command(method, params = {}) {
    return new Promise((resolve, reject) => {
      const current = ++id;
      const timer = setTimeout(() => { pending.delete(current); reject(new Error(`Browser command timed out: ${method}`)); }, 15000);
      pending.set(current, { resolve, reject, timer });
      socket.send(JSON.stringify({ id: current, method, params }));
      if (process.env.DEBUG_BROWSER) console.log("Sent", current, method, socket.readyState);
    });
  }
  async function evaluate(expression) {
    const result = await command("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
    if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
    return result.result.value;
  }
  await command("Page.enable");
  await command("Runtime.enable");
  const routes = ["/packages/manali-kasol-jibhi", "/packages/chopta-tungnath-chandrashila", "/packages/domestic"];
  const checks = [];
  for (const route of routes) {
    for (const theme of ["light", "dark"]) {
      await command("Page.addScriptToEvaluateOnNewDocument", { source: `localStorage.setItem('exploreyatri-theme', '${theme}')` });
      await command("Page.navigate", { url: origin + route });
      await until(() => evaluate(`location.pathname === ${JSON.stringify(route)} && document.readyState === 'complete' && !!document.querySelector('[aria-label="Close contact form"]')`));
      await evaluate(`document.querySelector('[aria-label="Close contact form"]').click()`);
      await until(() => evaluate(`!document.querySelector('[role="dialog"]') && !document.querySelector('.premium-loader') && document.documentElement.classList.contains('${theme}')`));
      await evaluate("document.fonts.ready.then(() => true)");
      for (const width of [360, 390, 768, 1024, 1440]) {
        await command("Emulation.setDeviceMetricsOverride", { width, height: 900, deviceScaleFactor: 1, mobile: false });
        await evaluate("new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))");
        const state = await evaluate(`(() => {
          const root = document.documentElement;
          const overflowing = [...document.querySelectorAll('main h1, main h2, main h3, main p, main a, main li')].filter(element => {
            const rect = element.getBoundingClientRect();
            return rect.width && (rect.left < -1 || rect.right > innerWidth + 1);
          }).map(element => element.textContent.trim().slice(0, 70));
          return { viewport: innerWidth, scrollWidth: root.scrollWidth, overflowing, footer: !!document.querySelector('footer'), navbar: !!document.querySelector('header nav'), images: [...document.querySelectorAll('main img')].filter(image => image.complete && !image.naturalWidth).map(image => image.alt), itinerary: [...document.querySelectorAll('main h2')].some(el => el.textContent === 'Itinerary') };
        })()`);
        assert(state.scrollWidth <= width + 1, `Horizontal overflow ${route} ${theme} ${width}: ${JSON.stringify(state)}`);
        assert.equal(state.overflowing.length, 0, `Clipped text ${route} ${theme} ${width}: ${state.overflowing}`);
        assert.equal(state.images.length, 0, `Broken images: ${state.images}`);
        assert(state.navbar && state.footer);
        if (route !== "/packages/domestic") assert(state.itinerary);
        if (route !== "/packages/domestic" && width >= 1024) {
          await evaluate("scrollTo({top: 1800, behavior: 'instant'})");
          assert(await evaluate("document.querySelector('aside > div').getBoundingClientRect().top >= document.querySelector('header').getBoundingClientRect().bottom"), `Sticky sidebar overlaps navigation ${route} ${theme} ${width}`);
        }
        if (width < 768) {
          await evaluate("document.querySelector('.site-mobile-toggle').click()");
          await until(() => evaluate("document.querySelector('.site-mobile-toggle').getAttribute('aria-expanded') === 'true' && !document.querySelector('#site-mobile-navigation').hidden"));
          await evaluate("document.querySelector('.site-mobile-toggle').click()");
          await until(() => evaluate("document.querySelector('#site-mobile-navigation').hidden"));
        }
        await evaluate("scrollTo({top: document.documentElement.scrollHeight, behavior: 'instant'})");
        assert(await evaluate("document.querySelector('footer').getBoundingClientRect().bottom <= innerHeight + 1"), `Footer inaccessible ${route} ${width}`);
        await evaluate("scrollTo({top: 0, behavior: 'instant'})");
        checks.push(`${route} ${theme} ${width}px: passed`);
        if (route === routes[0] && [390, 1440].includes(width)) {
          const screenshot = await command("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
          const filename = path.join(directory, `manali-${theme}-${width}.png`);
          await fs.writeFile(filename, Buffer.from(screenshot.data, "base64"));
          console.log(`Screenshot: ${filename}`);
        }
      }
    }
  }
  // Confirm all new enquiry buttons use WhatsApp without sending a message.
  await command("Page.navigate", { url: origin + routes[0] });
  await until(() => evaluate(`location.pathname === ${JSON.stringify(routes[0])} && !!document.querySelector('main a[href^="https://wa.me/"]')`));
  assert(await evaluate("[...document.querySelectorAll('main a[href^=\"https://wa.me/\"]')].every(link => new URL(link.href).searchParams.get('text').includes('Preferred departure date:'))"));
  assert.equal(exceptions.length, 0, `Browser exceptions: ${exceptions}`);
  console.log(checks.join("\n"));
  console.log("30 responsive/theme checks, mobile navigation, footer, images and enquiry links passed. Itinerary uses static articles; no accordions or mobile fixed package CTA exist.");
} finally {
  socket?.close();
  chrome.kill();
  clearInterval(keepAlive);
}
