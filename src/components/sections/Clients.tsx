import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const clients = [
  { name: "ABQ MRI", logo: "/clients/abqmri.png", url: "https://www.abqmri.com/" },
  { name: "APN Clinic", logo: "/clients/apnclinic.png", url: "https://www.apnclinic.com/" },
  { name: "United CCR", logo: "/clients/ccr.jpg", url: "https://www.unitedccr.com/" },
  { name: "ClearLedger", logo: "/clients/clearledger.png", url: "https://www.yourclearledger.com/" },
  { name: "HougenPros", logo: "/clients/hougenpros.png", url: "https://www.hougenpros.com/" },
  { name: "IAC Centers", logo: "/clients/iac.png", url: "https://www.injuryassistancecenters.com/" },
  { name: "HOU Inc", logo: "/clients/houinc.png", url: "https://www.houinc.com/" },
];

export function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 lg:py-20 relative overflow-hidden bg-gradient-to-b from-white via-neutral-50/50 to-white">
      {/* Elegant top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="text-[11px] tracking-[0.35em] uppercase text-neutral-400 font-light">
            Trusted By Industry Leaders
          </span>
        </motion.div>

        {/* Infinite scroll container */}
        <div className="relative">
          {/* Refined fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex gap-24 items-center"
            animate={{ x: [0, -1050] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {/* Double the logos for seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <motion.a
                key={`${client.name}-${index}`}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 group relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-10 md:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-500 ease-out"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Elegant bottom border */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
    </section>
  );
}
