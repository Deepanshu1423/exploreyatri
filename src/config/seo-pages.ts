export const seoPages = {
  "/": {
    title: "Domestic & International Holiday Packages",
    description: "Plan memorable domestic and international holidays with ExploreYatri. Explore Himalayan escapes, handpicked packages and trips customized around you.",
  },
  "/packages": {
    title: "Holiday Packages & Customized Tours",
    description: "Explore holiday packages with clear prices, itineraries and inclusions. Find mountain escapes, pilgrimage tours and personalized travel with ExploreYatri.",
  },
  "/packages/domestic": {
    title: "India Holiday Packages & Domestic Tours",
    description: "Discover India tour packages for Manali, Kashmir, Jibhi, Rajasthan and Uttarakhand. Compare itineraries, stays and starting prices with ExploreYatri.",
  },
  "/packages/international": {
    title: "International Holidays & Custom Travel Planning",
    description: "Plan your international holiday with ExploreYatri. Share your destination, dates and budget for a personalized itinerary and travel assistance.",
  },
  "/destinations": {
    title: "India Travel Destinations & Holiday Ideas",
    description: "Discover Kashmir, Manali, Jibhi, Kedarnath, Udaipur and Jaisalmer. Explore destination guides and holiday packages for your next journey with ExploreYatri.",
  },
  "/gallery": {
    title: "Travel Gallery & Traveller Memories",
    description: "Browse ExploreYatri travel photos and videos from mountain escapes and group journeys. Find inspiration for your next holiday through traveller memories.",
  },
  "/blogs": {
    title: "Travel Blogs, Destination Guides & Holiday Tips",
    description: "Read ExploreYatri destination guides and practical holiday tips. Explore Kashmir, international trip planning and ideas for your next travel adventure.",
  },
  "/about": {
    title: "About Us, Our Founder & Travel Team",
    description: "Meet ExploreYatri and founder Vansh Jain. Learn about our approach to customized holidays, group travel, personal support and memorable travel experiences.",
  },
  "/contact": {
    title: "Contact Us & Plan Your Next Trip",
    description: "Contact ExploreYatri to plan a customized holiday. Share your destination, travel dates and budget, or speak with our travel team by phone and WhatsApp.",
  },
} as const;

export type SeoPagePath = keyof typeof seoPages;
