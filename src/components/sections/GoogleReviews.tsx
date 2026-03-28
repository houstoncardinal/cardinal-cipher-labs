import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Marcus T.",
    role: "Owner, Houston Legal Group",
    rating: 5,
    text: "Cardinal redesigned our law firm site and our inbound calls doubled within 60 days. The SEO work they did is phenomenal — we're ranking #1 for our top keywords.",
    date: "March 2026",
  },
  {
    name: "Priya S.",
    role: "CEO, MedTech Houston",
    rating: 5,
    text: "We needed a HIPAA-compliant patient portal fast. Cardinal delivered in 6 weeks, ahead of schedule. The attention to detail and communication throughout was top-tier.",
    date: "February 2026",
  },
  {
    name: "Derek W.",
    role: "Founder, Westchase Realty Group",
    rating: 5,
    text: "Our Wix site was killing our business. Cardinal built us a custom site and within 3 months we were generating 4x more leads organically. Best investment we've made.",
    date: "January 2026",
  },
  {
    name: "Anita R.",
    role: "Director, ClearLedger Solutions",
    rating: 5,
    text: "The team is incredibly responsive and talented. Our new site looks stunning and the SEO retainer has us on page 1 for every keyword we care about.",
    date: "December 2025",
  },
  {
    name: "James O.",
    role: "VP Marketing, AxiomIO",
    rating: 5,
    text: "Cardinal built our enterprise platform on time and on budget — something we couldn't say about the two agencies we tried before them. Highly recommended.",
    date: "November 2025",
  },
  {
    name: "Sofia M.",
    role: "Owner, BluTouch Pools & Spas",
    rating: 5,
    text: "We went from page 5 to page 1 on Google for 'custom pool builder Houston' in under 90 days. The SEO results speak for themselves.",
    date: "October 2025",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
}

export function GoogleReviews() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-serif font-bold text-gray-900">4.9</span>
            <span className="text-gray-500 text-sm">· 127 Google Reviews</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
            What Houston Clients Say
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Real results for real Houston businesses. Read our verified Google reviews.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col"
            >
              <Quote className="w-6 h-6 text-red-200 mb-3 flex-shrink-0" />
              <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1">"{review.text}"</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-gray-500 text-xs">{review.role}</p>
                </div>
                <div className="text-right">
                  <Stars count={review.rating} />
                  <p className="text-gray-400 text-xs mt-1">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://g.page/r/cardinal-consulting-houston/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            View all reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
