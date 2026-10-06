import Image from "next/image";
import { Mountain, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/config/site";
import "./founder.css";

export function FounderCard() {
  const phone = siteConfig.phone.replace(/\D/g, "");
  const message = encodeURIComponent("Hello ExploreYatri, I would like to plan a trip.");

  return (
    <section className="founder-section" aria-labelledby="founder-heading">
      <div className="founder-section-heading">
        <p>The People Behind The Journey</p>
        <h2 id="founder-heading">Meet Our Founder</h2>
      </div>
      <article className="founder-card">
        <div className="founder-photo">
          <Image src="/images/vansh-jain-founder.png" alt="Vansh Jain sitting on a rocky overlook in the Himalayas" fill sizes="(max-width: 767px) 95vw, 760px" className="founder-image" />
          <div className="founder-photo-shade" />
          <div className="founder-badges">
            <span className="founder-owner-badge">Owner &amp; Founder</span>
            <span className="founder-travel-badge"><Mountain size={18} />Travel Entrepreneur</span>
          </div>
          <div className="founder-identity">
            <h3>Vansh Jain</h3>
            <p>Founder &amp; CEO</p>
          </div>
        </div>
        <div className="founder-content">
          <p className="founder-description">
            Founder of Exploreyatri, focused on building seamless, reliable, and
            value-driven travel experiences across India and international
            destinations. Leading the brand across business development, sales,
            operations, partnerships, and customer experience.
          </p>
          <div className="founder-specialty">
            <strong>Specialty:</strong>
            <span>Travel Business Strategy &amp; Experience Design</span>
          </div>
          <div className="founder-actions">
            <a href={`tel:+${phone}`} className="founder-call"><Phone size={23} />Call Now</a>
            <a href={`https://wa.me/${phone}?text=${message}`} className="founder-whatsapp" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={25} />WhatsApp</a>
          </div>
        </div>
      </article>
    </section>
  );
}
