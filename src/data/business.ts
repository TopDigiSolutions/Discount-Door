export const business = {
  name: "Discount Door Mechanic LLC",
  shortName: "Discount Door Mechanic",
  phoneDisplay: "(832) 382-3142",
  phoneHref: "tel:+18323823142",
  email: "discountdoormechanic@yahoo.com",
  owner: "Damion",
  mapsProfile: "https://maps.app.goo.gl/CHVwCaq8GJcH8BMx6",
  region: "Greater Houston Area, TX",
  hours: [
    { d: "Daily service", h: "Call for availability" },
    { d: "Same-day calls", h: "Often available" },
    { d: "After hours", h: "Call or text" },
  ],
  rating: 5.0,
  reviewCount: 30,
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "reviews", label: "Reviews" },
  { id: "areas", label: "Areas" },
  { id: "gallery", label: "Gallery" },
  { id: "map", label: "Map" },
  { id: "contact", label: "Contact" },
];

export type Service = {
  id: string;
  no: string;
  title: string;
  summary: string;
  points: string[];
  icon: string;
};

export const services: Service[] = [
  {
    id: "springs",
    no: "01",
    title: "Broken Spring Replacement",
    summary: "Torsion and extension springs replaced with the right size for your door, then balanced and safety-tested before we leave.",
    points: ["Torsion and extension springs", "Matching drums, brackets and hardware", "Door balance and travel test"],
    icon: "spring",
  },
  {
    id: "openers",
    no: "02",
    title: "Garage Door Opener Repair",
    summary: "Motors, gears, chains, belts, rails, sensors, wall controls and logic boards diagnosed clearly and repaired without unnecessary replacement.",
    points: ["Motor, gear and sprocket repair", "Chain, belt and rail adjustment", "Wall control and sensor troubleshooting"],
    icon: "opener",
  },
  {
    id: "installation",
    no: "03",
    title: "New Opener Installation",
    summary: "From standard trolley openers to clean wall-mount upgrades, we install the right system and explain every control before we go.",
    points: ["New opener supply and installation", "Wall-mount and smart opener upgrades", "Remote, keypad and app setup"],
    icon: "install",
  },
  {
    id: "cables",
    no: "04",
    title: "Cables, Brackets and Fixtures",
    summary: "Frayed cables, bent support brackets, worn bottom fixtures and loose hardware handled before a small issue becomes a dropped door.",
    points: ["Lift cable replacement", "Support bracket and bottom fixture repair", "Hardware tightened and secured"],
    icon: "cable",
  },
  {
    id: "rollers",
    no: "05",
    title: "Rollers, Hinges and Track Work",
    summary: "Grinding, shaking and loud travel usually have a mechanical cause. We replace worn rollers, repair hinges and bring the track back into line.",
    points: ["Quiet nylon roller replacement", "Hinges, struts and end bearings", "Track realignment and reinforcement"],
    icon: "roller",
  },
  {
    id: "tuneup",
    no: "06",
    title: "Tune-Up and Safety Inspection",
    summary: "A complete lubrication, tension check and safety inspection with practical notes on what to fix now and what can wait.",
    points: ["Lube, tension and limit adjustments", "Force and auto-reverse testing", "Clear options for the next repair"],
    icon: "tuneup",
  },
  {
    id: "offtrack",
    no: "07",
    title: "Off-Track and Impact Repair",
    summary: "Backed into the door or knocked it off track? We safely reset the door, repair the damage and explain the most cost-effective path forward.",
    points: ["Off-track door reset", "Impact and panel repair", "Track, cable and roller inspection"],
    icon: "door",
  },
  {
    id: "sensors",
    no: "08",
    title: "Sensors, Remotes and Keypads",
    summary: "Photo-eye alignment, remote programming, keypad setup and safety reversal issues resolved with a quick, practical diagnosis.",
    points: ["Photo-eye alignment", "Remote and keypad programming", "Smart control setup"],
    icon: "remote",
  },
];

export const process = [
  { step: "01", title: "Call or send a photo", body: "You get a direct response from the Discount Door Mechanic team. Tell us what the door is doing or send a quick photo or video of the problem." },
  { step: "02", title: "Get clear options", body: "We explain the cause in plain language and give you practical choices. Customers mention the honest explanations and fair prices for a reason." },
  { step: "03", title: "Schedule the fastest fit", body: "Same-day and next-day appointments are often available across Houston and surrounding areas, including after-hours help when possible." },
  { step: "04", title: "Repair, test and tidy up", body: "The door is repaired, adjusted and tested before the job is complete. If something needs a follow-up, we stand behind the work and communicate clearly." },
];

export const differentiators = [
  { icon: "tag", title: "Fair prices by design", body: "The work is priced to make sense for homeowners, with the value and savings customers call out in their reviews." },
  { icon: "video", title: "Clear explanations", body: "Damion walks customers through what failed, what can wait and what each repair option will do." },
  { icon: "truck", title: "Fast response", body: "Same-day repairs, quick callbacks and after-hours help are part of the service when the schedule allows." },
  { icon: "shield", title: "No hidden charges", body: "You get a straightforward price before the work starts, not a surprise total at the end of the visit." },
  { icon: "handshake", title: "Options, not pressure", body: "When there is more than one good path, you hear the options and choose what works for your home and budget." },
  { icon: "owner", title: "Follow-through", body: "Customers report responsive communication, return visits when needed and work that keeps the door running quietly." },
];

export const areas = [
  { city: "Houston", zone: "Harris County" }, { city: "Katy", zone: "Harris County" }, { city: "Cypress", zone: "Harris County" },
  { city: "Spring", zone: "Harris County" }, { city: "The Woodlands", zone: "Montgomery County" }, { city: "Tomball", zone: "Harris County" },
  { city: "Sugar Land", zone: "Fort Bend County" }, { city: "Missouri City", zone: "Fort Bend County" }, { city: "Richmond", zone: "Fort Bend County" },
  { city: "Rosenberg", zone: "Fort Bend County" }, { city: "Fulshear", zone: "Fort Bend County" }, { city: "Stafford", zone: "Fort Bend County" },
  { city: "Pearland", zone: "Brazoria County" }, { city: "League City", zone: "Galveston County" }, { city: "Friendswood", zone: "Galveston County" },
  { city: "Clear Lake", zone: "Harris County" }, { city: "Webster", zone: "Harris County" }, { city: "Seabrook", zone: "Harris County" },
  { city: "Pasadena", zone: "Harris County" }, { city: "Deer Park", zone: "Harris County" }, { city: "Baytown", zone: "Harris County" },
  { city: "Humble", zone: "Harris County" }, { city: "Kingwood", zone: "Harris County" }, { city: "Atascocita", zone: "Harris County" },
  { city: "Conroe", zone: "Montgomery County" }, { city: "Magnolia", zone: "Montgomery County" }, { city: "Montgomery", zone: "Montgomery County" },
  { city: "New Caney", zone: "Montgomery County" }, { city: "Huntsville", zone: "Walker County" }, { city: "Alvin", zone: "Brazoria County" },
  { city: "Manvel", zone: "Brazoria County" }, { city: "Fresno", zone: "Fort Bend County" }, { city: "Rendell", zone: "Fort Bend County" },
  { city: "Bellaire", zone: "Harris County" }, { city: "Klein", zone: "Harris County" }, { city: "Jersey Village", zone: "Harris County" },
  { city: "Hockley", zone: "Harris County" }, { city: "Waller", zone: "Waller County" }, { city: "Hempstead", zone: "Waller County" },
  { city: "Texas City", zone: "Galveston County" }, { city: "La Marque", zone: "Galveston County" }, { city: "Dickinson", zone: "Galveston County" },
  { city: "Santa Fe", zone: "Galveston County" },
];

export type Review = { name: string; meta: string; when: string; text: string; response?: string; featured?: boolean };

export const reviews: Review[] = [
  { name: "KINGEATGREEDY Official", meta: "Local Guide · 47 reviews · 6 photos", when: "a month ago", text: "They have amazing prices, the work is even better. I highly recommend. Great customer service. I reached out to other companies and prices were outrageous, Damion really saved me a lot of money.", response: "Thank you so much for the great review and recommendation!", featured: true },
  { name: "Lisa Williams Whitley", meta: "5 reviews", when: "2 months ago", text: "Great customer service. The gentleman that repaired my garage door did an excellent job. He was very professional and knowledgeable. I recommend their service to anyone with a garage door that needs to be repaired.", response: "Thank you for the kind words. We appreciate you trusting Discount Door Mechanic with your repair.", featured: true },
  { name: "Teear Lang", meta: "12 reviews", when: "2 months ago", text: "Quick and efficient service. I mistakenly backed into my garage and dented it badly, and I could not get it to open. They were there in no time to save the day. The cost was lower than I expected.", response: "We truly appreciate your support. Thanks again for trusting us with the repair.", featured: true },
  { name: "Chef Jayla", meta: "1 review", when: "2 months ago", text: "My garage door kept jamming and finally got stuck. I needed assistance right away and DDM was on the job quickly. They fixed the problem and now my garage door is in top-notch condition.", response: "We appreciate your support. Thank you for choosing Discount Door Mechanic.", featured: true },
  { name: "Michael Miller", meta: "5 reviews", when: "2 months ago", text: "Damion was very polite and friendly. He explained step by step what he was doing. He came out the same day and fixed my garage door. Very, very good prices.", response: "Thank you for trusting Discount Door Mechanic with all your garage door needs.", featured: true },
  { name: "Mark G Clayton I", meta: "12 reviews", when: "a month ago", text: "True professional, on time, great work, great prices. My garage door is working great and quietly. What more can you ask for? I have found my garage door guy.", response: "Thank you for trusting Discount Door Mechanic. We really appreciate you.", featured: true },
  { name: "Camille Davis", meta: "14 reviews", when: "a month ago", text: "Damion did an amazing job repairing my garage door in under 30 minutes. I would highly recommend Discount Door Mechanic for all your repairs and upgrades.", response: "Thank you for the 5-star review and recommendation. It was a pleasure helping with your garage door repair.", featured: true },
  { name: "Thandie Mkandawire", meta: "Local Guide · 19 reviews", when: "a month ago", text: "Damion did an amazing job. Very honest. He gave different options to choose from and was very clear in explaining everything. Definitely recommend him.", response: "We appreciate your kind words. We are glad the options and explanation helped you choose what worked best." },
  { name: "William Cortes", meta: "5 reviews", when: "2 months ago", text: "Great experience all around. He was very helpful when explaining things that will support my garage door in the long run.", response: "Thank you William for trusting Discount Door Mechanic LLC with your garage door." },
  { name: "Cristian Ascencio", meta: "5 reviews", when: "5 months ago", text: "Great service, responsible and good communication. He came back to service the garage door when it was dysfunctional again at no additional cost.", response: "Thank you for choosing Discount Door Mechanic. We are always a phone call away." },
  { name: "Kori Luckey", meta: "12 reviews", when: "a month ago", text: "Great garage door man. I called him and he came right out. Very knowledgeable with affordable prices. 10/10 definitely recommend.", response: "Thank you! We appreciate the recommendation." },
  { name: "Jeremy Lee", meta: "Local Guide · 34 reviews · 9 photos", when: "a week ago", text: "Perfect service provider after hours for my garage door that I managed to throw off track.", response: "Thanks Jeremy. We were more than happy to serve one of our neighbors here in Katy." },
  { name: "Tamar Roque", meta: "3 reviews · 1 photo", when: "2 months ago", text: "Great customer service, fast and affordable. Great price assessment and a great price.", response: "Thank you for trusting Discount Door Mechanic with your garage door needs." },
  { name: "Anthony Nicholson", meta: "15 reviews", when: "a week ago", text: "Damion repaired my garage door opener within a couple of hours. I thought it would cost an extraordinary amount, but he was very fair and went the extra mile to purchase the new device.", response: "Thank you for trusting Discount Door Mechanic. We are only a phone call away if you ever need us." },
  { name: "Mary Nguyen", meta: "4 reviews · 3 photos", when: "2 months ago", text: "Absolutely recommend Damion with Discount Door Mechanic. He explained everything throughout the installation of our new wall-mount garage door opener. Good quality and honest work.", response: "Thank you for trusting us with your wall-mount opener installation in League City." },
  { name: "Enrique Lores", meta: "5 reviews", when: "2 months ago", text: "Excellent, fast service with no hidden charges. 100% recommended. The best price and the best service with a guarantee.", response: "We believe in fast, no-hidden-charge service and appreciate your trust." },
  { name: "Weymar Cortes", meta: "6 reviews", when: "2 months ago", text: "The overall service was great. Everything was well explained and communicated. The job was done quickly and made to look easy. 100% recommending to friends and family.", response: "Thank you for trusting Discount Door Mechanic. Keeping customers informed every step of the way matters to us." },
  { name: "Cynecia Breaux", meta: "Local Guide · 11 reviews · 4 photos", when: "21 hours ago", text: "Phenomenal service. Very professional and straightforward, with cost effectiveness, quality and efficiency built into the approach. I would definitely recommend them.", featured: true },
  { name: "Anthony", meta: "4 reviews", when: "a week ago", text: "I called Damian after my door would not open. He replaced my spring several years back, and I like to support honest businesses. A couple of hours later I was back in business with a new opener.", featured: true },
  { name: "Walter", meta: "6 reviews", when: "2 weeks ago", text: "Excellent work, friendly and positive experience. I would definitely use them again." },
];

export const faqs = [
  { q: "Can you come out the same day?", a: "Often, yes. Several customers mention same-day and quick after-hours service. Call or text with the issue and your city and we will share the fastest real appointment available." },
  { q: "Do you offer affordable options instead of pushing a replacement?", a: "Yes. Damion explains what failed and gives you practical options. If a repair is safe and worthwhile, we will say so. If replacement makes more sense, you will know why before spending anything." },
  { q: "What if a car backed into my garage door?", a: "Stop forcing the door and give us a call. We can inspect the panels, track, rollers, cables and opener, then explain whether an adjustment, repair or replacement is the most cost-effective route." },
  { q: "Do you repair openers and install new ones?", a: "Yes. We repair common opener problems and install new standard, wall-mount and smart garage door openers, including remotes, keypads and app controls." },
  { q: "Are there hidden charges?", a: "No hidden charges is part of the promise. We communicate the price and scope before work begins, so you can make a confident decision without pressure." },
  { q: "What areas around Houston do you cover?", a: "Houston and surrounding communities including Katy, Cypress, Sugar Land, Richmond, Rosenberg, Pearland, League City, Friendswood, Spring, The Woodlands and many more. If your city is not listed, call anyway." },
];

export const stats = [
  { value: 5.0, suffix: "", decimals: 1, label: "Google rating", note: "5-star service customers talk about" },
  { value: 30, suffix: "+", decimals: 0, label: "Recent reviews", note: "Fast, fair and professional" },
  { value: 40, suffix: "+", decimals: 0, label: "Houston-area cities", note: "From Katy to League City" },
  { value: 0, suffix: "", display: "$0", decimals: 0, label: "Hidden charges", note: "Straightforward quotes before work" },
];