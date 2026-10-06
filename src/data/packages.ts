import type { TravelPackage } from "@/types/package";

export const packages: TravelPackage[] = [
  {
    id: "pkg-chopta-001",
    title: "Chopta Tungnath & Chandrashila",
    slug: "chopta-tungnath-chandrashila",
    type: "domestic",
    destination: "Chopta",
    location: "Uttarakhand, India",
    route: "Delhi to Delhi",
    days: 5,
    nights: 4,
    price: 6499,
    pricingOptions: [
      {
        label: "Delhi to Delhi",
        quad: 6499,
        triple: 6999,
        dual: 7499,
      },
    ],
    shortDescription:
      "A Himalayan escape combining Chopta, Tungnath, Chandrashila and Deoria Tal.",
    description:
      "Travel from Delhi to Chopta via Devprayag, trek to Tungnath Temple and Chandrashila, explore Deoria Tal and enjoy a scenic camping experience in Uttarakhand.",
    coverImage: "/images/optimized/packages/chopta-tungnath.jpg.webp",
    coverImageAlt:
      "Scenic Himalayan mountain landscape near Chopta and Tungnath",
    gallery: [],
    highlights: [
      "Tungnath Temple trek",
      "Chandrashila trek",
      "Deoria Tal trek",
      "Devprayag en route",
      "Bonfire and music",
    ],
    inclusions: [
      "Stay in Swiss camp",
      "Meals: 2 breakfasts and 2 dinners",
      "Professional guide",
      "Bonfire and music",
      "Sightseeing",
      "Tempo Traveller or bus",
      "Camping in Chopta",
      "Travel insurance",
      "24/7 customer support",
    ],
    exclusions: [
      "Lunch on all days",
      "Train and flight charges",
      "Adventure sports activities",
      "Food during travelling time",
      "Entry tickets",
      "5% GST",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        day: 1,
        title: "Depart for Chopta",
        description:
          "Arrive at the Delhi pickup point and begin the overnight journey to Chopta by AC Traveller, bus or taxi. Dinner during the journey is self-paid.",
      },
      {
        day: 2,
        title: "Arrival Chopta via Devprayag",
        description:
          "Reach Devprayag, freshen up and have breakfast. Enjoy the Sangam of Bhagirathi and Alaknanda, continue to Chopta, check in at the campsite and enjoy the mountain surroundings. Dinner and overnight stay at Chopta.",
      },
      {
        day: 3,
        title: "Tungnath Temple & Chandrashila Trek",
        description:
          "After breakfast, trek to Tungnath and continue towards Chandrashila. Return to Chopta in the evening for bonfire, music, dinner and overnight stay.",
      },
      {
        day: 4,
        title: "Deoria Tal Trek",
        description:
          "After breakfast, check out and head to Sari village. Trek to Deoria Tal and return by noon before departing towards Delhi or Haridwar.",
      },
      {
        day: 5,
        title: "Welcome Delhi",
        description:
          "Reach back with memorable experiences and conclude the trip.",
      },
    ],
    featured: true,
    status: "active",
    createdAt: "2026-10-05",
    updatedAt: "2026-10-05",
  },

  {
    id: "pkg-udaipur-002",
    title: "Udaipur & Mount Abu Escape",
    slug: "udaipur-mount-abu-escape",
    type: "domestic",
    destination: "Udaipur & Mount Abu",
    location: "Rajasthan, India",
    route: "Delhi to Delhi",
    days: 5,
    nights: 4,
    price: 6499,
    pricingOptions: [
      {
        label: "Delhi to Delhi",
        quad: 6499,
        triple: 6999,
        dual: 7499,
      },
    ],
    shortDescription:
      "Royal Udaipur, beautiful lakes and a refreshing Mount Abu day excursion.",
    description:
      "Experience Udaipur's palaces, lakes and heritage attractions along with a scenic Mount Abu excursion before returning to Delhi.",
    coverImage: "/images/optimized/packages/udaipur-mount-abu.jpg.webp",
    coverImageAlt:
      "City Palace and Lake Pichola in Udaipur at golden hour",
    gallery: [],
    highlights: [
      "City Palace",
      "Fateh Sagar Lake",
      "Mount Abu excursion",
      "Nakki Lake",
      "Dilwara Jain Temples",
    ],
    inclusions: [
      "Delhi to Delhi travel by cab, tempo or bus",
      "2 nights stay at Udaipur",
      "2 breakfasts",
      "2 dinners",
      "Complete sightseeing",
      "Welcome drink",
      "Tour guide",
      "Soft music night",
      "24/7 customer support",
    ],
    exclusions: [
      "Extra meals or stays not mentioned in inclusions",
      "Travel insurance and personal expenses",
      "Entry fees and optional activity tickets unless included",
      "Extra vehicle cost due to forced circumstances",
      "Anything not mentioned in inclusions",
      "5% GST",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Udaipur",
        description:
          "Board the Traveller in Delhi in the evening and begin the overnight journey to Udaipur.",
      },
      {
        day: 2,
        title: "Udaipur Sightseeing",
        description:
          "Reach Udaipur, check in and visit attractions such as Jag Mandir, Fateh Sagar Lake, City Palace and Bagore Ki Haveli. Dinner and overnight stay.",
      },
      {
        day: 3,
        title: "Mount Abu Sightseeing",
        description:
          "After breakfast, drive to Mount Abu. Visit Nakki Lake, Dilwara Jain Temples and Toad Rock, then return to Udaipur for the night.",
      },
      {
        day: 4,
        title: "Udaipur Sightseeing & Depart Delhi",
        description:
          "Visit the Vintage Car Museum, Eklingji Temple, Doodh Talai Musical Garden, Jaisamand Lake and Mansapurna Karni Mata Temple before departing for Delhi.",
      },
      {
        day: 5,
        title: "Reach Delhi",
        description:
          "Reach Delhi in the morning and conclude the trip with memorable experiences.",
      },
    ],
    featured: true,
    status: "active",
    sourceNote:
      "The supplied brochure contains a conflicting '6 Nights / 7 Days' short-itinerary label; the detailed itinerary itself runs from Day 1 to Day 5, so this record uses 4 Nights / 5 Days.",
    createdAt: "2026-10-05",
    updatedAt: "2026-10-05",
  },

  {
    id: "pkg-mcleod-003",
    title: "McLeod Ganj, Dharamshala & Triund",
    slug: "mcleodganj-dharamshala-triund",
    type: "domestic",
    destination: "McLeod Ganj & Dharamshala",
    location: "Himachal Pradesh, India",
    route: "Delhi to Delhi",
    days: 5,
    nights: 4,
    price: 6499,
    pricingOptions: [
      {
        label: "Delhi to Delhi",
        quad: 6499,
        triple: 6999,
        dual: 7499,
      },
    ],
    shortDescription:
      "Dharamshala sightseeing, a Triund trek and the relaxed atmosphere of McLeod Ganj.",
    description:
      "Travel to Dharamshala, explore local attractions, trek to Triund and discover McLeod Ganj before the overnight return to Delhi.",
    coverImage: "/images/optimized/packages/mcleodganj-triund.jpg.webp",
    coverImageAlt:
      "Trekkers overlooking the mountain landscape at Triund near McLeod Ganj",
    gallery: [],
    highlights: [
      "Dharamshala sightseeing",
      "Triund trek",
      "Bhagsunath",
      "Dalai Lama Temple",
      "Bonfire and music",
    ],
    inclusions: [
      "Stay in hotel",
      "Meals: 2 breakfasts and 2 dinners",
      "Professional guide",
      "Bonfire and music",
      "Tempo Traveller or Volvo",
      "Sightseeing",
      "Camping during the trek",
      "24/7 customer support",
    ],
    exclusions: [
      "Extra meals and stays outside inclusions",
      "Travel insurance and personal expenses",
      "Entry fees and optional activity tickets unless included",
      "Extra vehicle costs during forced circumstances",
      "Anything not mentioned in inclusions",
      "5% GST",
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure from Delhi",
        description:
          "Arrive at the pickup point in Delhi and begin the overnight journey to Dharamshala.",
      },
      {
        day: 2,
        title: "Dharamshala Local Sightseeing",
        description:
          "Arrive in Dharamshala, check in and visit Cricket Stadium, Tea Gardens, Mall Road and Dal Lake. Dinner and overnight stay at the hotel.",
      },
      {
        day: 3,
        title: "Triund Trek",
        description:
          "After breakfast, head towards Bhagsunath, meet the trek guide and trek to Triund. Enjoy mountain views, camp stay, dinner, bonfire and music.",
      },
      {
        day: 4,
        title: "McLeod Ganj Sightseeing & Departure",
        description:
          "Trek back, explore McLeod Ganj including Dal Lake, Dalai Lama Temple and St. John / St. James church area, then depart for Delhi overnight.",
      },
      {
        day: 5,
        title: "Welcome Delhi",
        description:
          "Reach Delhi with memorable experiences and conclude the trip.",
      },
    ],
    featured: true,
    status: "active",
    sourceNote:
      "The supplied brochure's short-itinerary labels mention desert/Jaisalmer items, while the detailed day-wise itinerary is for Dharamshala, Triund and McLeod Ganj. This record follows the detailed day-wise itinerary.",
    createdAt: "2026-10-05",
    updatedAt: "2026-10-05",
  },

  {
    id: "pkg-jaisalmer-004",
    title: "Jaisalmer Desert Experience",
    slug: "jaisalmer-desert-experience",
    type: "domestic",
    destination: "Jaisalmer",
    location: "Rajasthan, India",
    route: "Delhi / Gurugram to Delhi",
    days: 5,
    nights: 4,
    price: 9999,
    pricingOptions: [
      {
        label: "Delhi to Delhi",
        quad: 9999,
        triple: 10499,
        dual: 10999,
      },
    ],
    shortDescription:
      "Desert camping, safari, Longewala, Tanot Temple and the Golden City of Jaisalmer.",
    description:
      "Discover the Thar Desert through a premium desert camp, camel or jeep safari, traditional Rajasthani experiences and iconic Jaisalmer sightseeing.",
    coverImage: "/images/optimized/packages/jaisalmer-desert.jpg.webp",
    coverImageAlt:
      "Camel ride across the Jaisalmer desert at sunset",
    gallery: [],
    highlights: [
      "Desert camping",
      "Camel or Jeep Safari",
      "Longewala War Memorial",
      "Tanot Mata Temple",
      "Jaisalmer Fort",
      "Gadisar Lake",
    ],
    inclusions: [
      "Stay in premium camp",
      "Meals: 2 breakfasts and 2 dinners",
      "Bonfire and music",
      "Sightseeing",
      "Tempo Traveller or bus",
      "Camping in Jaisalmer",
      "24/7 customer support",
    ],
    exclusions: [
      "Extra meals or stays not mentioned in inclusions",
      "Travel insurance and personal expenses",
      "Entry fees and optional activity tickets unless included",
      "Extra vehicle costs during forced circumstances",
      "Anything not mentioned in inclusions",
      "5% GST",
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure",
        description:
          "Arrive at the Delhi/Gurugram pickup point and begin the overnight journey to Jaisalmer.",
      },
      {
        day: 2,
        title: "Desert Camping & Safari",
        description:
          "Arrive in Jaisalmer, check in at the desert camp, enjoy a camel or jeep safari as per package inclusion, watch the sunset, enjoy Rajasthani folk performances and dinner.",
      },
      {
        day: 3,
        title: "Longewala & Tanot Temple",
        description:
          "After breakfast, visit Longewala War Memorial and Tanot Mata Temple, enjoying the Thar Desert landscapes en route. Overnight stay at the desert camp.",
      },
      {
        day: 4,
        title: "Jaisalmer Fort & Gadisar Lake",
        description:
          "After breakfast, check out and visit Jaisalmer Fort and Gadisar Lake before departing from Jaisalmer.",
      },
      {
        day: 5,
        title: "Welcome Delhi",
        description:
          "Reach back with unforgettable memories and conclude the trip.",
      },
    ],
    featured: true,
    status: "active",
    createdAt: "2026-10-05",
    updatedAt: "2026-10-05",
  },

  {
    id: "pkg-manali-solang-005",
    title: "Manali & Solang Valley Escape",
    slug: "manali-solang-valley-escape",
    type: "domestic",
    destination: "Manali & Solang Valley",
    location: "Himachal Pradesh, India",
    route: "Delhi to Delhi",
    days: 5,
    nights: 4,
    price: 5999,
    pricingOptions: [
      {
        label: "Delhi to Delhi",
        quad: 5999,
        triple: 6599,
        dual: 6999,
      },
    ],
    shortDescription:
      "A value-packed Manali trip with local sightseeing, Solang Valley, Atal Tunnel and Kasol.",
    description:
      "Explore Manali's local attractions, enjoy the adventure atmosphere of Solang Valley and Atal Tunnel, then continue towards Kasol before returning to Delhi.",
    coverImage: "/images/optimized/packages/manali-solang.jpg.webp",
    coverImageAlt:
      "Paragliding above the mountains in Solang Valley near Manali",
    gallery: [],
    highlights: [
      "Manali local sightseeing",
      "Solang Valley",
      "Atal Tunnel",
      "Kasol",
      "Bonfire and music",
    ],
    inclusions: [
      "2 nights stay",
      "Meals: 2 breakfasts and 2 dinners",
      "Professional guide",
      "Bonfire and music",
      "Sightseeing",
      "24/7 customer support",
      "Travel insurance",
    ],
    exclusions: [
      "Lunch on all days",
      "Train and flight charges",
      "Adventure sports activities",
      "Food during travelling time",
      "Entry tickets",
      "5% GST",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure",
        description:
          "Arrive at the Delhi pickup point and begin the overnight journey to Manali.",
      },
      {
        day: 2,
        title: "Local Sightseeing",
        description:
          "Check in and explore Hadimba Devi Temple, Vashisht Hot Water Spring, Tibetan Monastery and Mall Road. Dinner, bonfire/music and overnight stay.",
      },
      {
        day: 3,
        title: "Solang Valley & Atal Tunnel",
        description:
          "After breakfast, proceed to Solang Valley and Atal Tunnel if permits allow. Optional adventure activities are self-paid. Return to the hotel for dinner and overnight stay.",
      },
      {
        day: 4,
        title: "Kasol Sightseeing & Departure",
        description:
          "Check out and travel towards Kasol. Optional rafting and paragliding are self-paid. Explore Kullu, Kasol Market and Manikaran before departing overnight for Delhi.",
      },
      {
        day: 5,
        title: "Welcome Delhi",
        description:
          "Reach Delhi with memorable experiences and conclude the trip.",
      },
    ],
    featured: true,
    status: "active",
    sourceNote:
      "The supplied brochure includes a '5 Nights / 6 Days' short-itinerary label but the detailed itinerary runs from Day 1 through Day 5. This record follows the five-day detailed itinerary.",
    createdAt: "2026-10-05",
    updatedAt: "2026-10-05",
  },

  {
    id: "pkg-jibhi-006",
    title: "Jibhi & Tirthan Valley",
    slug: "jibhi-tirthan-valley",
    type: "domestic",
    destination: "Jibhi & Tirthan",
    location: "Himachal Pradesh, India",
    route: "Delhi to Delhi",
    days: 5,
    nights: 4,
    price: 6499,
    pricingOptions: [
      {
        label: "Delhi to Delhi",
        quad: 6499,
        triple: 6999,
        dual: 7499,
      },
    ],
    shortDescription:
      "A relaxed mountain journey through Jibhi, Jalori Pass, Serolsar Lake and Tirthan Valley.",
    description:
      "Enjoy Jibhi Waterfall, Mini Thailand, forest walks, Jalori Pass, Serolsar Lake and the scenic Tirthan Valley with a social group-travel experience.",
    coverImage: "/images/optimized/packages/jibhi-tirthan.jpg.webp",
    coverImageAlt:
      "River flowing through the green Tirthan Valley in Himachal Pradesh",
    gallery: [],
    highlights: [
      "Jibhi Waterfall",
      "Mini Thailand",
      "Jalori Pass",
      "Serolsar Lake",
      "Chhoie Waterfall",
      "Tirthan Valley",
    ],
    inclusions: [
      "Delhi to Delhi AC Semi-Sleeper Volvo Bus or Tempo Traveller",
      "Local Tempo Traveller or cab as required",
      "2 nights accommodation on sharing basis in Jibhi/Banjar",
      "Experienced Trip Captain",
      "Bonfire on one night if weather permits",
      "4 meals: 2 breakfasts and 2 dinners",
      "Driver allowance, tolls, parking and state taxes",
    ],
    exclusions: [
      "Extra meals and stays outside inclusions",
      "Travel insurance and personal expenses",
      "Entry fees and optional activity tickets unless included",
      "Snow-chain or 4x4 vehicle cost if required",
      "Extra costs due to forced circumstances",
      "Anything not mentioned in inclusions",
      "5% GST",
    ],
    itinerary: [
      {
        day: 1,
        title: "Depart to Jibhi",
        description:
          "Assemble at the Delhi boarding point, meet the Trip Captain and begin the overnight journey to Jibhi.",
      },
      {
        day: 2,
        title: "Jibhi Arrival & Local Sightseeing",
        description:
          "Visit Jibhi Waterfall and Mini Thailand if time permits, check in, relax, enjoy a forest walk and conclude the day with dinner and bonfire/music.",
      },
      {
        day: 3,
        title: "Jalori Pass & Serolsar Lake",
        description:
          "Drive to Jalori Pass, hike to Himalayan viewpoints and trek to Serolsar Lake. Optional Raghupur Fort can be considered depending on conditions and time.",
      },
      {
        day: 4,
        title: "Chhoie Waterfall & Depart Delhi",
        description:
          "Check out, drive towards Gushaini, trek to Chhoie Waterfall and later start the overnight journey back to Delhi.",
      },
      {
        day: 5,
        title: "Delhi Arrival",
        description:
          "Reach Delhi in the morning and conclude the trip.",
      },
    ],
    featured: true,
    status: "active",
    createdAt: "2026-10-05",
    updatedAt: "2026-10-05",
  },

  {
    id: "pkg-manali-kasol-007",
    title: "Manali, Rohtang & Kasol",
    slug: "manali-rohtang-kasol",
    type: "domestic",
    destination: "Manali & Kasol",
    location: "Himachal Pradesh, India",
    route: "Delhi to Delhi",
    days: 6,
    nights: 5,
    price: 6499,
    pricingOptions: [
      {
        label: "Delhi to Delhi",
        quad: 6499,
        triple: 6999,
        dual: 7499,
      },
    ],
    shortDescription:
      "Manali sightseeing, Rohtang, Atal Tunnel and the riverside charm of Kasol.",
    description:
      "Discover Manali, Rohtang Pass, Atal Tunnel, Solang Valley and Kasol with hotel stay, camp experience and sightseeing.",
    coverImage: "/images/optimized/packages/manali-kasol.jpg.webp",
    coverImageAlt:
      "Parvati River flowing through the forest near Kasol",
    gallery: [],
    highlights: [
      "Manali local sightseeing",
      "Rohtang Pass",
      "Atal Tunnel",
      "Solang Valley",
      "Kasol",
      "Manikaran",
    ],
    inclusions: [
      "Stay in 3-star premium hotel",
      "Meals: 3 breakfasts and 3 dinners",
      "Professional guide",
      "Bonfire and music",
      "Sightseeing",
      "Tempo Traveller or bus",
      "Camping in Kasol",
      "Travel insurance",
      "24/7 customer support",
    ],
    exclusions: [
      "Lunch on all days",
      "Train and flight charges",
      "Adventure sports activities",
      "Food during travelling time",
      "Entry tickets",
      "5% GST",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        day: 1,
        title: "Depart to Manali",
        description:
          "Arrive at the Delhi pickup point and begin the overnight journey to Manali.",
      },
      {
        day: 2,
        title: "Manali Local Sightseeing",
        description:
          "Explore Hadimba Devi Temple, Manu Temple, Club House and Vashisht Hot Water Springs. Return to the hotel for overnight stay.",
      },
      {
        day: 3,
        title: "Rohtang Pass, Atal Tunnel & Solang",
        description:
          "Travel towards Rohtang Pass subject to road and permit conditions, with possible stops at Atal Tunnel and Solang Valley. Optional adventure activities are self-paid.",
      },
      {
        day: 4,
        title: "Manali to Kasol",
        description:
          "Check out, travel towards Kasol via Kullu and optional adventure activity points, then check in at the camp for dinner, bonfire/music and overnight stay.",
      },
      {
        day: 5,
        title: "Kasol Sightseeing & Depart Delhi",
        description:
          "Explore Kasol Market, Manikaran Gurudwara, Choj/Chough Valley and the Parvati River area before beginning the overnight journey to Delhi.",
      },
      {
        day: 6,
        title: "Welcome Delhi",
        description:
          "Reach Delhi with memorable experiences and conclude the trip.",
      },
    ],
    featured: true,
    status: "active",
    createdAt: "2026-10-05",
    updatedAt: "2026-10-05",
  },

  {
    id: "pkg-kashmir-008",
    title: "Kashmir Explorer",
    slug: "kashmir-explorer",
    type: "domestic",
    destination: "Kashmir",
    location: "Jammu & Kashmir, India",
    route: "Delhi to Delhi / Jammu to Jammu",
    days: 8,
    nights: 7,
    price: 14999,
    pricingOptions: [
      {
        label: "Delhi to Delhi",
        quad: 15999,
        triple: 16999,
        dual: 17999,
      },
      {
        label: "Jammu to Jammu",
        quad: 14999,
        triple: 15999,
        dual: 16999,
      },
    ],
    shortDescription:
      "Pahalgam, Gulmarg, Sonamarg, Srinagar and a Dal Lake houseboat experience.",
    description:
      "A complete Kashmir journey covering Pahalgam, Gulmarg, Sonamarg, Srinagar and Dal Lake, with hotel stays, sightseeing and a houseboat experience.",
    coverImage: "/images/optimized/packages/kashmir-explorer.jpg.webp",
    coverImageAlt:
      "Shikara boats on Dal Lake in Srinagar, Kashmir",
    gallery: [],
    highlights: [
      "Pahalgam sightseeing",
      "Gulmarg",
      "Sonamarg",
      "Srinagar sightseeing",
      "Dal Lake houseboat",
      "Complimentary Shikara ride",
    ],
    inclusions: [
      "Delhi to Jammu and Jammu to Delhi by AC bus",
      "Jammu to Jammu travel by Traveller or cab",
      "3 nights stay at Srinagar hotel",
      "1 night stay at Pahalgam hotel",
      "1 night stay at houseboat/resort in Dal Lake",
      "Standard hotel category",
      "Bonfire and music",
      "5 breakfasts and 5 dinners",
      "Sightseeing as per itinerary",
      "Complimentary 1-hour Shikara ride once during the tour",
    ],
    exclusions: [
      "5% GST",
      "Airfare or train fare",
      "Meals other than those included",
      "Expenses caused by delays, cancellations or forced circumstances",
      "Personal expenses",
      "Guide and entrance fees during sightseeing",
      "Cable Car / Pony Ride in Gulmarg, Pahalgam and Sonamarg",
      "Union taxi expenses",
      "Adventure activities",
      "Luggage offloading",
      "Heaters and mineral water in hotels",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Jammu",
        description:
          "Arrive at the Delhi pickup point and begin the overnight journey towards Jammu in an AC Sleeper Bus.",
      },
      {
        day: 2,
        title: "Jammu to Pahalgam",
        description:
          "Arrive in Jammu and transfer to Pahalgam. Check in, relax and enjoy dinner and overnight stay.",
      },
      {
        day: 3,
        title: "Pahalgam Sightseeing",
        description:
          "Explore Pahalgam and optional attractions such as Betaab Valley, Aru Valley and Chandanwari. Later drive to Srinagar for dinner and overnight stay.",
      },
      {
        day: 4,
        title: "Gulmarg Sightseeing",
        description:
          "Travel towards Tangmarg and Gulmarg. Optional Gondola, horse riding, snow biking and union-taxi sightseeing are self-paid. Return to Srinagar.",
      },
      {
        day: 5,
        title: "Sonamarg Sightseeing",
        description:
          "Visit Sonamarg with en-route attractions and optional Thajiwas Glacier / pony experiences. Return to Srinagar in the evening.",
      },
      {
        day: 6,
        title: "Srinagar Sightseeing",
        description:
          "Explore Srinagar attractions and transfer to Dal Lake for a houseboat stay and Shikara experience.",
      },
      {
        day: 7,
        title: "Srinagar to Jammu",
        description:
          "After breakfast, depart for Jammu and continue towards Delhi by AC Sleeper Bus.",
      },
      {
        day: 8,
        title: "Welcome Delhi",
        description:
          "Arrive in Delhi in the morning and conclude the Kashmir journey.",
      },
    ],
    featured: true,
    status: "active",
    sourceNote:
      "The supplied brochure's short-itinerary label says 5 Nights / 6 Days, while the detailed itinerary contains Day 1 through Day 8. This record follows the detailed eight-day itinerary.",
    createdAt: "2026-10-05",
    updatedAt: "2026-10-05",
  },

  {
    id: "pkg-kedarnath-009",
    title: "Kedarnath Yatra",
    slug: "kedarnath-yatra",
    type: "domestic",
    destination: "Kedarnath",
    location: "Uttarakhand, India",
    route: "Delhi / Haridwar to Delhi",
    days: 5,
    nights: 4,
    price: 7999,
    pricingOptions: [
      {
        label: "Camp at Kedarnath",
        quad: 7999,
        triple: 8499,
        dual: 8999,
      },
      {
        label: "Dormitory at Kedarnath",
        quad: 8499,
        triple: 8999,
        dual: 9499,
      },
      {
        label: "Hotel at Kedarnath",
        quad: 9499,
        triple: 9999,
        dual: 10499,
      },
    ],
    shortDescription:
      "A spiritual journey to Kedarnath with Guptkashi/Phata stay and the Himalayan temple trek.",
    description:
      "Travel through Uttarakhand to Guptkashi or Phata, trek from Gaurikund to Kedarnath, attend temple darshan and return with a complete yatra experience.",
    coverImage: "/images/optimized/packages/kedarnath-yatra.jpg.webp",
    coverImageAlt:
      "Kedarnath Temple surrounded by the Himalayan mountains",
    gallery: [],
    highlights: [
      "Kedarnath Temple",
      "Devprayag",
      "Rudraprayag",
      "Kedarnath trek",
      "Guptkashi / Phata stay",
    ],
    inclusions: [
      "Travel by AC Tempo/Cab; AC will be off in mountains",
      "Hotel stay subject to room availability",
      "2 nights stay in Guptkashi/Phata",
      "1 night stay in Kedarnath in Camp/Dormitory/Dharamshala as booked",
      "3 breakfasts and 3 dinners",
      "Yatra e-pass subject to availability",
      "Tour guide for Tempo Traveller groups",
      "Sightseeing as per itinerary",
      "Trekking",
    ],
    exclusions: [
      "5% GST",
      "Extra meals during travel",
      "Anything not mentioned in inclusions",
      "Personal expenses",
      "Train or airfare unless specified",
      "Entrance fees, permits, camera fees and guide charges",
      "Optional rides and additional sightseeing",
      "Sonprayag to Gaurikund expense",
      "Trekking accessories",
      "Hot water bucket in Kedarnath",
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure",
        description:
          "Start from Delhi/Haridwar and travel towards Phata/Guptkashi. Ganga Aarti in Haridwar may be covered if time allows.",
      },
      {
        day: 2,
        title: "Arrive Phata / Guptkashi",
        description:
          "Cover Devprayag, Dhari Devi Temple and Rudraprayag en route. Reach the hotel, have dinner and stay overnight.",
      },
      {
        day: 3,
        title: "Trek to Kedarnath Temple",
        description:
          "Travel towards Sitapur/Gaurikund and begin the trek to Kedarnath. Reach the top for dinner and overnight stay in the booked accommodation category.",
      },
      {
        day: 4,
        title: "Darshan & Trek Down",
        description:
          "Attend Kedarnath darshan in the morning, trek back towards Gaurikund and return to Phata/Guptkashi for dinner and overnight stay.",
      },
      {
        day: 5,
        title: "Return to Delhi",
        description:
          "After breakfast, depart towards Haridwar/Delhi and conclude the yatra.",
      },
    ],
    featured: true,
    status: "active",
    sourceNote:
      "The supplied short-itinerary label says 5 Nights / 6 Days, while the detailed itinerary provided runs from Day 1 to Day 5. This record follows the detailed five-day sequence.",
    createdAt: "2026-10-05",
    updatedAt: "2026-10-05",
  },

  {
    id: "pkg-do-dham-010",
    title: "Do Dham Yatra",
    slug: "do-dham-yatra",
    type: "domestic",
    destination: "Kedarnath & Badrinath",
    location: "Uttarakhand, India",
    route: "Delhi / Haridwar to Delhi",
    days: 6,
    nights: 5,
    price: 11999,
    pricingOptions: [
      {
        label: "Camp at Kedarnath",
        quad: 11999,
        triple: 12499,
        dual: 12999,
      },
      {
        label: "Dormitory at Kedarnath",
        quad: 12999,
        triple: 13499,
        dual: 13999,
      },
      {
        label: "Dharamshala at Kedarnath",
        quad: 13999,
        triple: 14999,
        dual: 15999,
      },
    ],
    shortDescription:
      "A combined Kedarnath and Badrinath pilgrimage through the Garhwal Himalayas.",
    description:
      "Complete the Do Dham journey with Kedarnath trek, overnight stays in Guptkashi/Phata and Badrinath, sightseeing and guided yatra assistance.",
    coverImage: "/images/optimized/packages/do-dham-yatra.jpg.webp",
    coverImageAlt:
      "Badrinath temple area with snow-capped Himalayan mountains",
    gallery: [],
    highlights: [
      "Kedarnath Dham",
      "Badrinath Dham",
      "Devprayag",
      "Guptkashi / Phata",
      "Kedarnath trek",
      "Evening Aarti",
    ],
    inclusions: [
      "Transfers and travel in AC Tempo/Taxi Traveller; AC off in mountains",
      "Hotel stay subject to room availability",
      "4 breakfasts and 4 dinners",
      "Yatra e-pass",
      "Coordinator assistance",
      "Sightseeing and trekking",
      "Guide support for Kedarnath trek",
      "Kedarnath accommodation according to booked category",
    ],
    exclusions: [
      "5% GST",
      "Extra meals during travel",
      "Anything not included in inclusions",
      "Personal expenses",
      "Train or airfare unless specified",
      "Entrance fees, permits and camera fees",
      "Optional rides and additional sightseeing",
      "Sonprayag to Gaurikund expense",
      "Trekking accessories",
      "Hot water bucket in Kedarnath",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi / Haridwar to Sonprayag Area",
        description:
          "Start from Delhi/Haridwar and travel towards Sonprayag / Guptkashi / Phata. Ganga Aarti may be covered if time permits.",
      },
      {
        day: 2,
        title: "Arrive Guptkashi / Phata",
        description:
          "Travel through Devprayag and Rudraprayag, reach Guptkashi/Phata, check in, have dinner and stay overnight.",
      },
      {
        day: 3,
        title: "Trek to Kedarnath",
        description:
          "Proceed towards Gaurikund and trek to Kedarnath. Reach the dham for dinner and overnight stay in the booked category.",
      },
      {
        day: 4,
        title: "Kedarnath Darshan & Trek Down",
        description:
          "Attend darshan, trek down to Gaurikund and return towards Sonprayag/Guptkashi for dinner and overnight stay.",
      },
      {
        day: 5,
        title: "Depart to Badrinath",
        description:
          "After breakfast, proceed towards Badrinath, cover sightseeing on the way, check in and attend evening Aarti. Dinner and overnight stay.",
      },
      {
        day: 6,
        title: "Badrinath to Delhi / Haridwar",
        description:
          "After breakfast, depart towards Delhi/Haridwar via Devprayag. Rishikesh Ganga Aarti may be covered if time permits.",
      },
    ],
    featured: true,
    status: "active",
    createdAt: "2026-10-05",
    updatedAt: "2026-10-05",
  },

  {
    id: "pkg-char-dham-011",
    title: "Char Dham Yatra",
    slug: "char-dham-yatra",
    type: "domestic",
    destination: "Yamunotri, Gangotri, Kedarnath & Badrinath",
    location: "Uttarakhand, India",
    route: "Delhi / Haridwar to Delhi",
    days: 10,
    nights: 9,
    price: 17999,
    pricingOptions: [
      {
        label: "Camp at Kedarnath",
        quad: 17999,
        triple: 18499,
        dual: 19999,
      },
      {
        label: "Dormitory at Kedarnath",
        quad: 18999,
        triple: 19499,
        dual: 20499,
      },
      {
        label: "Dharamshala at Kedarnath",
        quad: 19999,
        triple: 20499,
        dual: 21999,
      },
    ],
    shortDescription:
      "The complete Uttarakhand Char Dham circuit covering Yamunotri, Gangotri, Kedarnath and Badrinath.",
    description:
      "A comprehensive Himalayan pilgrimage through Barkot, Yamunotri, Uttarkashi, Gangotri, Guptkashi/Phata, Kedarnath and Badrinath.",
    coverImage: "/images/optimized/packages/char-dham-yatra.jpg.webp",
    coverImageAlt:
      "Majestic Himalayan mountains in Gangotri, Uttarakhand",
    gallery: [],
    highlights: [
      "Yamunotri Dham",
      "Gangotri Dham",
      "Kedarnath Dham",
      "Badrinath Dham",
      "Uttarkashi",
      "Guptkashi / Phata",
    ],
    inclusions: [
      "Travel by AC Tempo/Cab; AC off in mountains",
      "Hotel stay subject to room availability",
      "2 nights in Barkot/Naugaon",
      "2 nights in Uttarkashi",
      "2 nights in Guptkashi/Phata",
      "1 night in Kedarnath in booked category",
      "1 night in Joshimath",
      "8 breakfasts and 8 dinners",
      "Yatra e-pass subject to availability",
      "Tour guide for Tempo Traveller groups",
      "Sightseeing as per itinerary",
      "Trekking",
      "Dormitory and camp may have common washrooms in Kedarnath",
    ],
    exclusions: [
      "5% GST",
      "Extra meals during travel",
      "Anything not mentioned in inclusions",
      "Personal expenses",
      "Train or airfare unless specified",
      "Entrance fees, permits, camera fees and guide charges",
      "Optional rides and additional sightseeing",
      "Sonprayag to Gaurikund expense",
      "Trekking accessories",
      "Hot water bucket in Kedarnath",
    ],
    itinerary: [
      {
        day: 1,
        title: "Haridwar to Naugaon / Barkot",
        description:
          "Start from Delhi/Haridwar and travel towards Naugaon/Barkot. Ganga Aarti in Haridwar may be covered if time allows.",
      },
      {
        day: 2,
        title: "Arrive Naugaon / Barkot",
        description:
          "Reach Barkot/Naugaon, check in to the hotel, have dinner and take rest.",
      },
      {
        day: 3,
        title: "Barkot – Yamunotri – Barkot",
        description:
          "Travel to Jankichatti/Phoolchatti and trek towards Yamunotri. Visit the temple and nearby sacred points before returning to Barkot/Naugaon.",
      },
      {
        day: 4,
        title: "Barkot to Uttarkashi",
        description:
          "Travel to Uttarkashi, check in and visit the famous Vishwanath Temple before dinner and overnight stay.",
      },
      {
        day: 5,
        title: "Uttarkashi – Gangotri – Uttarkashi",
        description:
          "Drive to Gangotri through Himalayan landscapes and Harsil region. Visit Gangotri Temple and return to Uttarkashi for dinner and overnight stay.",
      },
      {
        day: 6,
        title: "Uttarkashi to Guptkashi / Phata",
        description:
          "Travel from Uttarkashi towards Guptkashi/Phata, passing Himalayan river valleys. Check in, have dinner and stay overnight.",
      },
      {
        day: 7,
        title: "Guptkashi / Phata to Kedarnath",
        description:
          "Travel towards Sonprayag/Gaurikund and begin the Kedarnath trek. Reach the dham for overnight stay in the booked accommodation category.",
      },
      {
        day: 8,
        title: "Kedarnath to Guptkashi / Phata",
        description:
          "Attend morning darshan, trek down and return to Guptkashi/Phata for dinner and overnight stay.",
      },
      {
        day: 9,
        title: "Guptkashi to Badrinath / Joshimath",
        description:
          "After breakfast, depart towards Badrinath/Joshimath, enjoy sightseeing en route and stay overnight.",
      },
      {
        day: 10,
        title: "Badrinath to Delhi / Haridwar",
        description:
          "Visit Badrinath for darshan, cover Mana Village if time permits and depart towards Haridwar/Delhi.",
      },
    ],
    featured: true,
    status: "active",
    sourceNote:
      "The supplied Char Dham material shows an '8 Nights / 9 Days' heading but the detailed itinerary runs from Day 1 through Day 10. This record uses the detailed ten-day itinerary.",
    createdAt: "2026-10-05",
    updatedAt: "2026-10-05",
  },
];
