import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeIndianRupee, Globe2, Headphones } from "lucide-react";
import { SiGoogle, SiTripadvisor, SiTrustpilot } from "react-icons/si";
import { FaFacebook } from "react-icons/fa6";

const benefits = [
  { icon: Globe2, title: "Handpicked Destinations", text: "From Himalayan trails to coastal escapes, discover destinations and experiences thoughtfully chosen for your journey." },
  { icon: BadgeIndianRupee, title: "Great Value, Clear Prices", text: "Plan with confidence with clear package prices, inclusions and travel options that work for your budget." },
  { icon: Headphones, title: "Personal Customer Support", text: "Get help with your itinerary, bookings and travel questions from a team that takes the time to understand your trip." },
];

export function WhyChooseCompany() {
  return (
    <section className="home-company home-container" aria-labelledby="company-heading">
      <div className="home-company-copy">
        <p className="home-eyebrow">Your Journey, Our Commitment</p>
        <h2 id="company-heading">Why You Choose <span>Our Company</span></h2>
        <p className="home-company-intro">From our handpicked destinations to personal travel planning, discover why travellers choose ExploreYatri for their next adventure.</p>
        <div className="home-company-benefits">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div className="home-company-benefit" key={title}>
              <span className="home-company-icon"><Icon size={25} strokeWidth={1.7} /></span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
        <Link href="/contact" className="home-company-link">Let&apos;s plan your journey <ArrowRight size={18} /></Link>
      </div>
      <div className="home-company-photo">
        <Image src="/images/optimized/packages/chopta-tungnath.jpg.webp" alt="Himalayan mountain scenery on a journey to Chopta and Tungnath" fill sizes="(max-width: 767px) 90vw, 45vw" />
        <div className="home-company-photo-caption"><MountainCaption /></div>
      </div>
    </section>
  );
}

function MountainCaption() {
  return <><span>Made for your kind of adventure</span><strong>Beautiful places.<br />Thoughtful journeys.</strong></>;
}

const platforms = [
  { name: "Tripadvisor", icon: SiTripadvisor, color: "#167f5d" },
  { name: "Google", icon: SiGoogle, color: "#4285f4" },
  { name: "Trustpilot", icon: SiTrustpilot, color: "#00856a" },
  { name: "Facebook", icon: FaFacebook, color: "#1877f2" },
];

export function ReviewPlatforms() {
  return (
    <section className="home-review-platforms" aria-labelledby="platform-heading">
      <Globe2 className="home-review-globe" aria-hidden="true" strokeWidth={.5} />
      <div className="home-container">
        <p className="home-eyebrow">Stories From The Journey</p>
        <h2 id="platform-heading">Don&apos;t Take Our Word For It.<br /><span>Customers</span> Say It Best.</h2>
        <p className="home-platform-intro">Every journey has a story. Explore traveller experiences and share yours with us.</p>
        <div className="home-platform-grid">
          {platforms.map(({ name, icon: Icon, color }) => (
            <div className="home-platform-card" key={name}>
              <div style={{ color }}><Icon size={27} aria-hidden="true" /><strong>{name}</strong></div>
              <span><span className="home-platform-stars" aria-hidden="true">★★★★★</span> Sample rating 5/5</span>
            </div>
          ))}
        </div>
        <p className="home-platform-sample">Sample review ratings shown for preview.</p>
        <a href="#traveller-reviews" className="home-company-link">Read traveller stories <ArrowRight size={18} /></a>
      </div>
    </section>
  );
}
