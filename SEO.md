# ExploreYatri SEO

The canonical production domain is **https://exploreyatri.com**. Shared business information lives in `src/config/site.ts`; static page titles and descriptions live in `src/config/seo-pages.ts`.

## Deployment configuration

Copy `.env.example` to `.env.local` for local configuration, or configure the values with your hosting provider before building:

```env
NEXT_PUBLIC_SITE_URL=https://exploreyatri.com
GOOGLE_SITE_VERIFICATION=
SITE_NOINDEX=false
```

`NEXT_PUBLIC_SITE_URL` should contain the preferred public origin, including HTTPS. Rebuild when changing it. If using `www`, use the same origin here and redirect the other host to it in your hosting settings. The default is the confirmed non-www domain above.

For Google Search Console verification, put only the HTML-tag verification token in `GOOGLE_SITE_VERIFICATION`, then rebuild. No credentials need to be added to source control.

Development, localhost origins, Vercel preview deployments and deployments with `SITE_NOINDEX=true` are not indexable. Their robots file blocks crawling and their sitemap is empty. For non-Vercel staging deployments, explicitly set `SITE_NOINDEX=true`. A public production build emits index/follow metadata and allows crawlers.

## What is generated

- `/robots.txt` references the canonical production sitemap.
- `/sitemap.xml` includes all public static pages, active packages/destinations and published blog posts, with detail-page image URLs and content update dates.
- Each page has its own title, description, canonical URL, Open Graph and Twitter preview. Query-string enquiry links canonicalize to the underlying page.
- `/share-image` generates a 1200×630 branded PNG. Detail pages use their own package/destination/article image.
- JSON-LD describes the organization, website, page hierarchy, visible listings, travel packages and published articles. Sample reviews are not presented as ratings in structured data.
- Unknown or unpublished detail pages return 404 with noindex. The favicon uses the existing ExploreYatri logo.

## Validation and launch

Run a production build and check its actual generated HTML and metadata files:

```sh
npm run build
npm run check:seo
```

Run the build while the dev server is stopped to avoid concurrent writes to Next.js build files. The SEO checker validates unique titles/canonicals, sitemap coverage, robots directives, social tags, one main heading per page, parseable JSON-LD and the generated social image. Use a public production build; the checker deliberately rejects noindex/staging output.

After deployment, confirm that `/robots.txt` and `/sitemap.xml` load on the live domain. Add the domain to Google Search Console, verify it and submit `/sitemap.xml`. Inspect representative homepage, package, destination and blog URLs. Test structured data using Google's Rich Results Test and validate other schema.org types with Schema Markup Validator.

Google may take time to crawl and index new content. Metadata and structured data do not guarantee rankings or rich results. Expand the short destination guides and blog articles with useful original information as the travel catalog grows.
