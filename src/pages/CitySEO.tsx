import { ArrowRight, Check, Star, MapPin, Phone, Clock, Mail, Globe, Search, TrendingUp, Users, Award, Zap, Target, Building2, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link, useParams } from "react-router-dom";
import { useState, useMemo } from "react";

// City data - easily extensible
const citiesData: Record<string, {
  name: string;
  state: string;
  slug: string;
  coordinates: { lat: number; lng: number };
  areas: string[];
  phone: string;
  address: string;
}> = {
  "new-york": {
    name: "New York",
    state: "NY",
    slug: "new-york",
    coordinates: { lat: 40.7128, lng: -74.0060 },
    areas: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island", "Hudson Valley", "Long Island", "Jersey City", "Newark", "White Plains"],
    phone: "(212) 555-0123",
    address: "350 5th Ave, New York, NY 10118"
  },
  "los-angeles": {
    name: "Los Angeles",
    state: "CA",
    slug: "los-angeles",
    coordinates: { lat: 34.0522, lng: -118.2437 },
    areas: ["Hollywood", "Beverly Hills", "Santa Monica", "Pasadena", "Glendale", "Long Beach", "Burbank", "West Hollywood", "Culver City", "Venice"],
    phone: "(310) 555-0123",
    address: "6801 Hollywood Blvd, Los Angeles, CA 90028"
  },
  "chicago": {
    name: "Chicago",
    state: "IL",
    slug: "chicago",
    coordinates: { lat: 41.8781, lng: -87.6298 },
    areas: ["Loop", "Lincoln Park", "Wicker Park", "River North", "West Loop", "Gold Coast", "Hyde Park", "Pilsen", "Wrigleyville", "Oak Park"],
    phone: "(312) 555-0123",
    address: "233 S Wacker Dr, Chicago, IL 60606"
  },
  "phoenix": {
    name: "Phoenix",
    state: "AZ",
    slug: "phoenix",
    coordinates: { lat: 33.4484, lng: -112.0740 },
    areas: ["Scottsdale", "Tempe", "Mesa", "Chandler", "Glendale", "Peoria", "Gilbert", "Surprise", "Prescott", "Flagstaff"],
    phone: "(602) 555-0123",
    address: "200 E Washington St, Phoenix, AZ 85004"
  },
  "philadelphia": {
    name: "Philadelphia",
    state: "PA",
    slug: "philadelphia",
    coordinates: { lat: 39.9526, lng: -75.1652 },
    areas: ["Center City", "Fishtown", "Northern Liberties", "South Street", "University City", "Manayunk", "Chestnut Hill", "Bala Cynwyd", "Cherry Hill", "King of Prussia"],
    phone: "(215) 555-0123",
    address: "1500 Market St, Philadelphia, PA 19102"
  },
  "san-antonio": {
    name: "San Antonio",
    state: "TX",
    slug: "san-antonio",
    coordinates: { lat: 29.4241, lng: -98.4936 },
    areas: ["Downtown", "River Walk", "Alamo Heights", "Pearl District", "Southtown", "Stone Oak", "The Medical Center", "West Side", "East Side", "New Braunfels"],
    phone: "(210) 555-0123",
    address: "203 S St Mary's St, San Antonio, TX 78205"
  },
  "san-diego": {
    name: "San Diego",
    state: "CA",
    slug: "san-diego",
    coordinates: { lat: 32.7157, lng: -117.1611 },
    areas: ["Gaslamp Quarter", "La Jolla", "North Park", "Hillcrest", "Pacific Beach", "Mission Valley", "Coronado", "Encinitas", "Carlsbad", "Del Mar"],
    phone: "(619) 555-0123",
    address: "600 B St, San Diego, CA 92101"
  },
  "dallas": {
    name: "Dallas",
    state: "TX",
    slug: "dallas",
    coordinates: { lat: 32.7767, lng: -96.7970 },
    areas: ["Downtown", "Uptown", "Deep Ellum", "Bishop Arts", "Katy Trail", "Lakewood", "Highland Park", "Addison", "Plano", "Richardson"],
    phone: "(214) 555-0123",
    address: "1900 Commerce St, Dallas, TX 75201"
  },
  "austin": {
    name: "Austin",
    state: "TX",
    slug: "austin",
    coordinates: { lat: 30.2672, lng: -97.7431 },
    areas: ["Downtown", "South Congress", "East Austin", "West Austin", "Domain", "Riverside", "Hyde Park", "Tarrytown", "Cedar Park", "Round Rock"],
    phone: "(512) 555-0123",
    address: "1100 Congress Ave, Austin, TX 78701"
  },
  "san-jose": {
    name: "San Jose",
    state: "CA",
    slug: "san-jose",
    coordinates: { lat: 37.3382, lng: -121.8863 },
    areas: ["Downtown", "Silicon Valley", "Palo Alto", "Mountain View", "Sunnyvale", "Santa Clara", "Campbell", "Cupertino", "San Mateo", "Fremont"],
    phone: "(408) 555-0123",
    address: "200 E Santa Clara St, San Jose, CA 95113"
  },
  "jacksonville": {
    name: "Jacksonville",
    state: "FL",
    slug: "jacksonville",
    coordinates: { lat: 30.3322, lng: -81.6557 },
    areas: ["Downtown", "Riverside", "Avondale", "San Marco", "Jacksonville Beach", "Atlantic Beach", "Ponte Vedra", "St. Augustine", "Orange Park", " Fleming Island"],
    phone: "(904) 555-0123",
    address: "117 W Duval St, Jacksonville, FL 32202"
  },
  "fort-worth": {
    name: "Fort Worth",
    state: "TX",
    slug: "fort-worth",
    coordinates: { lat: 32.7555, lng: -97.3308 },
    areas: ["Downtown", "Fort Worth Stockyards", "Cultural District", "Sundance Square", "West 7th", "Magnolia Green", "Arlington", "Keller", "Southlake", "Colleyville"],
    phone: "(817) 555-0123",
    address: "1000 Summit Ave, Fort Worth, TX 76102"
  },
  "columbus": {
    name: "Columbus",
    state: "OH",
    slug: "columbus",
    coordinates: { lat: 39.9612, lng: -82.9988 },
    areas: ["Downtown", "Short North", "German Village", "Clintonville", "Worthington", "Westerville", "Dublin", "Upper Arlington", "Grandview Heights", "Bexley"],
    phone: "(614) 555-0123",
    address: "90 E Broad St, Columbus, OH 43215"
  },
  "charlotte": {
    name: "Charlotte",
    state: "NC",
    slug: "charlotte",
    coordinates: { lat: 35.2271, lng: -80.8431 },
    areas: ["Uptown", "South End", "NoDa", "Myers Park", "Dilworth", "Cotswold", "East Charlotte", "SouthPark", "Ballantyne", "Concord"],
    phone: "(704) 555-0123",
    address: "600 E Trade St, Charlotte, NC 28202"
  },
  "san-francisco": {
    name: "San Francisco",
    state: "CA",
    slug: "san-francisco",
    coordinates: { lat: 37.7749, lng: -122.4194 },
    areas: ["Financial District", "SOMA", "Mission District", "Nob Hill", "Marina", "Pacific Heights", "Sunset", "Richmond", "Oakland", "Berkeley"],
    phone: "(415) 555-0123",
    address: "1 City Hall, San Francisco, CA 94102"
  },
  "indianapolis": {
    name: "Indianapolis",
    state: "IN",
    slug: "indianapolis",
    coordinates: { lat: 39.7684, lng: -86.1581 },
    areas: ["Downtown", "Mass Ave", "Fountain Square", "Broad Ripple", "Carmel", "Fishers", "Greenwood", "Zionsville", "Brownsburg", "Avon"],
    phone: "(317) 555-0123",
    address: "200 E Washington St, Indianapolis, IN 46204"
  },
  "seattle": {
    name: "Seattle",
    state: "WA",
    slug: "seattle",
    coordinates: { lat: 47.6062, lng: -122.3321 },
    areas: ["Downtown", "Capitol Hill", "Belltown", "South Lake Union", "University District", "Ballard", "West Seattle", "Bellevue", "Redmond", "Kirkland"],
    phone: "(206) 555-0123",
    address: "600 4th Ave, Seattle, WA 98104"
  },
  "denver": {
    name: "Denver",
    state: "CO",
    slug: "denver",
    coordinates: { lat: 39.7392, lng: -104.9903 },
    areas: ["Downtown", "LoDo", "Capitol Hill", "Highlands", "RiNo", "Washington Park", "Cherry Creek", "Boulder", "Aurora", "Lakewood"],
    phone: "(720) 555-0123",
    address: "1437 Bannock St, Denver, CO 80202"
  },
  "washington-dc": {
    name: "Washington",
    state: "DC",
    slug: "washington-dc",
    coordinates: { lat: 38.9072, lng: -77.0369 },
    areas: ["Downtown", "Georgetown", "Capitol Hill", "Dupont Circle", "Adams Morgan", "U Street", "Alexandria", "Arlington", "Bethesda", "Silver Spring"],
    phone: "(202) 555-0123",
    address: "1350 Pennsylvania Ave NW, Washington, DC 20004"
  },
  "boston": {
    name: "Boston",
    state: "MA",
    slug: "boston",
    coordinates: { lat: 42.3601, lng: -71.0589 },
    areas: ["Downtown", "Back Bay", "North End", "South End", "Cambridge", "Somerville", "Brookline", "Newton", "Quincy", "Salem"],
    phone: "(617) 555-0123",
    address: "City Hall Plaza, Boston, MA 02201"
  },
  "nashville": {
    name: "Nashville",
    state: "TN",
    slug: "nashville",
    coordinates: { lat: 36.1627, lng: -86.7816 },
    areas: ["Downtown", "Music Row", "Germantown", "East Nashville", "The Gulch", "12 South", "Green Hills", "Bellevue", "Franklin", "Murfreesboro"],
    phone: "(615) 555-0123",
    address: "100 1st Ave N, Nashville, TN 37201"
  },
  "baltimore": {
    name: "Baltimore",
    state: "MD",
    slug: "baltimore",
    coordinates: { lat: 39.2904, lng: -76.6122 },
    areas: ["Inner Harbor", "Fells Point", "Mount Vernon", "Hampden", "Canton", "Locust Point", "Columbia", "Towson", "Annapolis", "Bethesda"],
    phone: "(410) 555-0123",
    address: "100 N Holliday St, Baltimore, MD 21202"
  },
  "portland": {
    name: "Portland",
    state: "OR",
    slug: "portland",
    coordinates: { lat: 45.5152, lng: -122.6784 },
    areas: ["Downtown", "Pearl District", "NW 23rd", "Sellwood", "Alberta Arts", "Hawthorne", "Brooklyn", "Beaverton", "Lake Oswego", "Vancouver"],
    phone: "(503) 555-0123",
    address: "1221 SW 4th Ave, Portland, OR 97204"
  },
  "las-vegas": {
    name: "Las Vegas",
    state: "NV",
    slug: "las-vegas",
    coordinates: { lat: 36.1699, lng: -115.1398 },
    areas: ["Strip", "Downtown", "Summerlin", "Henderson", "Enterprise", "Paradise", "North Las Vegas", "Spring Valley", "Blue Diamond", "Laughlin"],
    phone: "(702) 555-0123",
    address: "495 S Main St, Las Vegas, NV 89101"
  },
  "miami": {
    name: "Miami",
    state: "FL",
    slug: "miami",
    coordinates: { lat: 25.7617, lng: -80.1918 },
    areas: ["Downtown", "Brickell", "Wynwood", "Design District", "Coral Gables", "South Beach", "Key Biscayne", "Coconut Grove", "Aventura", "Fort Lauderdale"],
    phone: "(305) 555-0123",
    address: "3500 Pan American Dr, Miami, FL 33133"
  },
  "atlanta": {
    name: "Atlanta",
    state: "GA",
    slug: "atlanta",
    coordinates: { lat: 33.7490, lng: -84.3880 },
    areas: ["Downtown", "Midtown", "Buckhead", "Virginia Highland", "Inman Park", "Old Fourth Ward", "Poncey-Highland", "Decatur", "Sandy Springs", "Alpharetta"],
    phone: "(404) 555-0123",
    address: "55 Trinity Ave SW, Atlanta, GA 30303"
  }
};

// Services - same for all cities
const services = [
  { icon: Globe, title: "Web Design", key: "webDesign", features: ["Custom Website Design", "Responsive Mobile Design", "UX/UI Optimization", "Conversion Rate Optimization"] },
  { icon: Search, title: "SEO Services", key: "seo", features: ["Local SEO", "Google Business Profile", "On-Page SEO", "Citation Building"] },
  { icon: TrendingUp, title: "Digital Marketing", key: "marketing", features: ["PPC Advertising", "Social Media Marketing", "Email Marketing", "Content Marketing"] },
  { icon: Zap, title: "App Development", key: "app", features: ["iOS Development", "Android Development", "React Native", "App Store Optimization"] },
  { icon: Award, title: "Brand Identity", key: "brand", features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"] },
  { icon: Target, title: "Analytics & ROI", key: "analytics", features: ["Analytics Setup", "ROI Tracking", "Performance Reports", "A/B Testing"] }
];

const reasons = [
  { title: "Local Market Experts", description: "We understand your city's unique business landscape, competition, and customer behavior better than anyone." },
  { title: "Proven Results", description: "We've helped hundreds of businesses in your area achieve first-page rankings and significant growth." },
  { title: "High Client Retention", description: "Our long-term partnerships speak for themselves - most clients stay with us for years." },
  { title: "Fast Turnaround", description: "Most projects completed in 4-8 weeks with dedicated project management." },
  { title: "Transparent Pricing", description: "No hidden fees, detailed proposals, and flexible payment options." },
  { title: "Ongoing Support", description: "Our team provides continuous optimization and support long after launch." }
];

const caseStudies = [
  { industry: "Legal", title: "Law Firm SEO", metrics: [{ label: "Traffic", change: "+340%" }, { label: "Leads", change: "+458%" }, { label: "Rankings", change: "#1-3" }] },
  { industry: "Healthcare", title: "Medical Practice", metrics: [{ label: "Visibility", change: "+4350%" }, { label: "Patients", change: "+462%" }, { label: "Reviews", change: "+641%" }] },
  { industry: "E-Commerce", title: "Online Store", metrics: [{ label: "Revenue", change: "+641%" }, { label: "Conversions", change: "+300%" }, { label: "AOV", change: "+73%" }] },
  { industry: "Technology", title: "Startup Launch", metrics: [{ label: "Speed", change: "60% Faster" }, { label: "Users", change: "25K+" }, { label: "Funding", change: "$2.5M" }] }
];

const testimonials = [
  { name: "John D.", company: "Local Business", text: "Our leads tripled after working with them. Incredible results!", rating: 5 },
  { name: "Sarah M.", company: "Medical Practice", text: "Best investment we made for our practice. Highly recommend!", rating: 5 },
  { name: "Mike R.", company: "Law Firm", text: "Went from page 3 to #1 for our main keywords. Amazing!", rating: 5 },
  { name: "Lisa K.", company: "E-Commerce", text: "Sales increased by 500%. They truly understand local markets.", rating: 5 }
];

const faqs = [
  { question: "How much does web design cost?", answer: "Our web design packages start at $3,000 for small businesses and range up to $25,000+ for enterprise solutions. All packages include responsive design, SEO optimization, and a content management system." },
  { question: "How long does SEO take?", answer: "SEO typically shows significant results within 3-6 months. Most clients see first-page rankings within 4-6 months for competitive keywords." },
  { question: "Why choose a local agency?", answer: "A local agency understands your market, competition, and customer behavior. We can meet in person and provide city-specific insights that out-of-town agencies miss." },
  { question: "Do you offer ongoing services?", answer: "Yes! We offer monthly SEO and marketing packages starting at $1,500/month with no long-term contracts required." },
  { question: "Can you help my business rank on Google?", answer: "Absolutely! We've helped hundreds of businesses achieve first-page rankings through local SEO, Google Business optimization, and comprehensive digital strategies." },
  { question: "What industries do you work with?", answer: "We serve all industries including healthcare, legal, financial services, technology, retail, e-commerce, construction, real estate, restaurants, and professional services." }
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "340%", label: "Avg Traffic Increase" },
  { value: "24/7", label: "Support" }
];

// Generate comprehensive schemas for any city
const generateSchemas = (cityKey: string) => {
  const city = citiesData[cityKey];
  if (!city) return [];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://visitcardinal.com/${city.slug}-seo#localbusiness`,
    "name": `Cardinal Consulting - ${city.name} Web Design & SEO`,
    "alternateName": `Cardinal ${city.name}`,
    "description": `${city.name}, ${city.state}'s premier web design and SEO agency. Custom websites, local SEO, and digital marketing services for ${city.name} businesses.`,
    "url": `https://visitcardinal.com/${city.slug}-seo`,
    "telephone": city.phone,
    "email": "hunain@visitcardinal.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": city.address,
      "addressLocality": city.name,
      "addressRegion": city.state,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.coordinates.lat,
      "longitude": city.coordinates.lng
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "127" },
    "areaServed": city.areas.map(area => ({
      "@type": "City", name: area, "containedInPlace": { "@type": "State", name: city.state }
    })),
    "sameAs": ["https://www.facebook.com/visitcardinal", "https://www.linkedin.com/company/visitcardinal", "https://www.instagram.com/visitcardinal"]
  };

  const serviceSchema = [
    `Web Design ${city.name}`, `SEO ${city.name}`, `Digital Marketing ${city.name}`,
    `Web Development ${city.name}`, `App Development ${city.name}`, `Brand Identity ${city.name}`
  ].map(service => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service,
    "provider": { "@id": `https://visitcardinal.com/${city.slug}-seo#localbusiness` },
    "areaServed": { "@type": "City", name: city.name, "containedInPlace": { "@type": "State", name: city.state } }
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", text: faq.answer }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", position: 1, "name": "Home", "item": "https://visitcardinal.com" },
      { "@type": "ListItem", position: 2, "name": `${city.name} Web Design & SEO`, "item": `https://visitcardinal.com/${city.slug}-seo` }
    ]
  };

  return [localBusinessSchema, ...serviceSchema, faqSchema, breadcrumbSchema];
};

interface CitySEOProps {
  cityKey?: string;
}

export function CitySEOPage() {
  const params = useParams<{ "city-seo": string }>();
  const cityKey = params["city-seo"] || "austin";
  
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const city = citiesData[cityKey];
  
  const schemas = useMemo(() => generateSchemas(cityKey), [cityKey]);
  
  // Fallback to Austin if city not found
  const displayCity = city || citiesData.austin;

  if (!city) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">City Not Found</h1>
          <Link to="/" className="text-red-600 hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${displayCity.name} Web Design & SEO Agency | #1 Rated ${displayCity.name} Digital Marketing | Cardinal Consulting`}
        description={`${displayCity.name}'s #1 web design and SEO agency. Custom websites, local SEO, and digital marketing that drive real results. Call for free consultation.`}
        keywords={[
          `web design ${displayCity.name}`, `${displayCity.name} SEO`, `${displayCity.name} website design`, `${displayCity.name} SEO company`,
          `${displayCity.name} digital marketing`, `${displayCity.name} web developer`, `${displayCity.name} SEO services`,
          `${displayCity.name} web design agency`, `best SEO ${displayCity.name}`, `${displayCity.name} local SEO`
        ]}
        schemas={schemas}
        url={`https://visitcardinal.com/${displayCity.slug}-seo`}
      />

      <div className="min-h-screen bg-white">
        <Header />

        <main>
          {/* HERO SECTION */}
          <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-red-50/60 blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-red-50/40 blur-3xl" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-2 mb-8"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-900">5.0 Rated — #1 Agency</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.1] mb-6"
              >
                {displayCity.name}'s Premier{' '}
                <span className="text-red-600">Web Design</span> &{' '}
                <span className="text-red-600">SEO</span> Agency
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg lg:text-xl text-gray-500 max-w-2xl mb-10"
              >
                We help {displayCity.name} businesses dominate search results and convert visitors into customers. 
                Trusted by businesses across the {displayCity.name} metro area.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                >
                  Get Free SEO Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                >
                  View Our Work
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center gap-6 text-sm text-gray-500"
              >
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />500+ Projects
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />98% Retention
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />24/7 Support
                </span>
              </motion.div>
            </div>
          </section>

          {/* STATS */}
          <section className="py-12 bg-gray-900">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl lg:text-5xl font-bold text-white font-serif mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section className="py-24 lg:py-28 bg-gray-50/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Our {displayCity.name} Services</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">
                  Everything {displayCity.name} Businesses Need
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-red-100 hover:shadow-xl transition-all group"
                  >
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-100 transition-colors">
                      <service.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-500 text-sm mb-5">Professional {service.title.toLowerCase()} services tailored for {displayCity.name} businesses.</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map(feature => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />{feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="inline-flex items-center gap-1 text-red-600 font-medium text-sm group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* WHY CHOOSE */}
          <section className="py-24 lg:py-28 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">
                  Why {displayCity.name} Businesses Choose Cardinal
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reasons.map((reason, i) => (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-8"
                  >
                    <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">{reason.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CASE STUDIES */}
          <section className="py-24 lg:py-28 bg-gray-50/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">
                  Proven Results
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {caseStudies.map((study, i) => (
                  <motion.div
                    key={study.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-8 border border-gray-100"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full">{study.industry}</span>
                      <h3 className="font-serif text-xl font-bold text-gray-900">{study.title}</h3>
                    </div>
                    <div className="space-y-3">
                      {study.metrics.map((metric, j) => (
                        <div key={j} className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{metric.label}</span>
                          <span className="text-green-600 text-sm font-bold">{metric.change}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICE AREAS */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-serif text-2xl lg:text-4xl text-gray-900 mb-4">
                  {displayCity.name} Areas We Serve
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3"
              >
                {displayCity.areas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-red-50 hover:border-red-100 hover:text-red-600 transition-colors cursor-default"
                  >
                    <MapPin className="w-3 h-3" />{area}
                  </span>
                ))}
              </motion.div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section className="py-24 lg:py-28 bg-gray-50/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">
                  What Clients Say
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {testimonials.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-6 border border-gray-100"
                  >
                    <div className="flex mb-3">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm mb-4">"{t.text}"</p>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                      <div className="text-gray-500 text-xs">{t.company}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 lg:py-28 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
              </motion.div>

              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 lg:py-28 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(220,38,38,0.3), transparent 50%)' }} />
            
            <div className="container mx-auto px-6 lg:px-12 relative text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Building2 className="w-12 h-12 text-red-500 mx-auto mb-6" />
                <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">
                  Ready to Dominate {displayCity.name} Search?
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                  Get your free SEO audit and custom strategy for your {displayCity.name} business today.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors"
                  >
                    Get Free SEO Audit
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={`tel:${displayCity.phone.replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call {displayCity.phone}
                  </a>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />{displayCity.address}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />Mon-Fri 9AM-6PM
                  </span>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default CitySEOPage;
