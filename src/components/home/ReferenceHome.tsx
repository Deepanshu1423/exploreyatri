import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BedDouble, Building2, Headphones, Heart, MapPinned, Mountain, Mouse, Plane, ShieldCheck, Star, TreePalm, Leaf } from "lucide-react";
import { packages } from "@/data/packages";
import { ReviewPlatforms, WhyChooseCompany } from "./HomeExtras";

const destinations = [
  { name: "Himachal", image: "/images/optimized/packages/manali-solang.jpg.webp", href: "/destinations/manali", icon: Mountain },
  { name: "Uttarakhand", image: "/images/optimized/packages/chopta-tungnath.jpg.webp", href: "/packages/chopta-tungnath-chandrashila", icon: Mountain },
  { name: "Kashmir", image: "/images/optimized/packages/kashmir-explorer.jpg.webp", href: "/destinations/kashmir", icon: Leaf },
  { name: "Goa", image: "/images/optimized/home-goa-sunset.png.webp", href: "/contact?destination=Goa", icon: TreePalm },
  { name: "International", image: "/images/optimized/home-santorini.png.webp", href: "/packages/international", icon: Plane },
  { name: "Honeymoon", image: "/images/optimized/home-mountain-sunrise.png.webp", href: "/contact?trip=honeymoon", icon: Heart },
];
const reasons = [
  { icon: ShieldCheck, title: "Clear Travel Planning", description: "Transparent details & inclusions" },
  { icon: Building2, title: "Handpicked Experiences", description: "Thoughtfully planned journeys" },
  { icon: BedDouble, title: "Stays & Transport", description: "Comfort throughout your trip" },
  { icon: MapPinned, title: "Customized Itineraries", description: "Trips as per your needs" },
  { icon: Headphones, title: "Personal Trip Support", description: "We’re here to help you" },
];
const reviews = [
  { name: "Rahul S.", trip: "Kashmir Trip", initials: "RS", text: "The itinerary was well planned and the overall travel experience was smooth and enjoyable." },
  { name: "Priya G.", trip: "Manali Trip", initials: "PG", text: "A comfortable trip with good planning and helpful support throughout the journey." },
  { name: "Aman K.", trip: "Jaisalmer Trip", initials: "AK", text: "The desert experience and sightseeing plan were nicely organized and easy to follow." },
];
function SectionTitle({ label, title, href, link }: { label: string; title: string; href: string; link: string }) {
  return <div className="home-section-heading"><div><p className="home-eyebrow">{label}</p><h2>{title}</h2></div><Link href={href}>{link}<ArrowRight size={17} /></Link></div>;
}
export function ReferenceHome() {
  const featured = ["manali-solang-valley-escape", "jibhi-tirthan-valley"].map(slug => packages.find(item => item.slug === slug)!);
  return <main className="reference-home">
    <section className="home-hero" aria-labelledby="home-heading">
      <Image className="home-hero-photo" src="/images/optimized/home-mountain-sunrise.png.webp" alt="Backpacker looking over a Himalayan mountain valley at sunrise" fill preload sizes="100vw" />
      <div className="home-hero-shade" />
      <div className="home-container home-hero-content"><p className="home-handwriting">Your Next Adventure Awaits</p><h1 id="home-heading">Travel More.<br />Explore Better.<br /><span>Remember Forever.</span></h1><p className="home-hero-description">Handpicked domestic &amp; international<br className="home-desktop-break" /> journeys designed around you.</p><div className="home-hero-actions"><Link href="/packages" className="home-button">Explore Trips <ArrowRight size={20} /></Link><Link href="/contact" className="home-button home-button-outline">Plan My Trip</Link></div></div>
      <a href="#popular-destinations" className="home-scroll"><Mouse size={28} strokeWidth={1.4} /><span>Scroll Down</span></a>
    </section>
    <section id="popular-destinations" className="home-container home-destinations">
      <SectionTitle label="Popular Destinations" title="Where Do You Want To Go?" href="/destinations" link="View All Destinations" />
      <div className="home-destination-grid">{destinations.map(destination => <Link href={destination.href} className="home-destination-card" key={destination.name}><Image src={destination.image} alt={destination.name} fill sizes="(max-width: 600px) 33vw, 17vw" /><div className="home-destination-shade" /><div className="home-destination-caption"><destination.icon size={30} strokeWidth={1.5} /><h3>{destination.name}</h3></div></Link>)}</div>
    </section>
    <section className="home-container home-packages">
      <SectionTitle label="Trending Trips" title="Most Loved Packages" href="/packages" link="View All Packages" />
      <div className="home-package-grid">{featured.map(item => <article key={item.slug} className="home-package-card"><Link href={`/packages/${item.slug}`} className="home-package-photo"><Image src={item.coverImage} alt={item.coverImageAlt} fill sizes="(max-width: 600px) 90vw, 33vw" /><span>{item.nights}N / {item.days}D</span></Link><div className="home-package-info"><h3><Link href={`/packages/${item.slug}`}>{item.slug.startsWith("manali") ? "Manali – Solang Valley" : "Jibhi – Tirthan Valley"}</Link></h3><p>{item.route}</p><div className="home-package-bottom"><div><small>Starting from</small><strong>₹{item.price.toLocaleString("en-IN")}</strong><span> / person</span></div><Link href={`/packages/${item.slug}`}>View Details <ArrowRight size={15} /></Link></div></div></article>)}
        <article className="home-package-card"><Link href="/contact?destination=Goa" className="home-package-photo"><Image src="/images/optimized/home-goa-sunset.png.webp" alt="Palm-lined beach at sunset" fill sizes="(max-width: 600px) 90vw, 33vw" /><span>Custom Trip</span></Link><div className="home-package-info"><h3><Link href="/contact?destination=Goa">Goa Getaway</Link></h3><p>Sun, sand &amp; your perfect escape</p><div className="home-package-bottom"><div><small>Tailored to you</small><strong className="home-quote-price">On request</strong></div><Link href="/contact?destination=Goa">Plan Trip <ArrowRight size={15} /></Link></div></div></article>
      </div>
    </section>
    <section className="home-confidence"><div className="home-confidence-shade" /><div className="home-container"><p className="home-eyebrow">Why ExploreYatri?</p><h2>Travel With Confidence</h2><div className="home-reason-grid">{reasons.map(reason => <div className="home-reason" key={reason.title}><span className="home-reason-icon"><reason.icon size={38} strokeWidth={1.4} /></span><h3>{reason.title}</h3><p>{reason.description}</p></div>)}</div></div></section>
    <ReviewPlatforms />
    <section className="home-container home-reviews" id="traveller-reviews"><SectionTitle label="Real Stories" title="What Our Travellers Say" href="/contact" link="Share Your Experience" /><div className="home-review-grid">{reviews.map(review => <article className="home-review" key={review.name}><div className="home-review-avatar" aria-hidden="true">{review.initials}</div><div><div className="home-stars" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={15} fill="currentColor" strokeWidth={0} />)}</div><blockquote>“{review.text}”</blockquote><p className="home-review-name">– {review.name}</p><p className="home-review-trip">{review.trip}</p></div></article>)}</div><p className="home-sample-note">Sample traveller experiences</p></section>
    <section className="home-cta"><div className="home-container"><div><h2>Plan Your Next Journey</h2><p>Tell us where you want to go.<br />We’ll take care of the rest.</p></div><Link href="/contact" className="home-button">Plan My Trip <ArrowRight size={19} /></Link></div></section>
    <WhyChooseCompany />
  </main>;
}
