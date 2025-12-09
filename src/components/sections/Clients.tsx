import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const clients = [
  { name: "ABQ MRI", logo: "/clients/abqmri.png", url: "https://www.abqmri.com/" },
  { name: "APN Clinic", logo: "/clients/apnclinic.png", url: "https://www.apnclinic.com/" },
  { name: "United CCR", logo: "/clients/ccr.jpg", url: "https://www.unitedccr.com/" },
  { name: "ClearLedger", logo: "/clients/clearledger.png", url: "https://www.yourclearledger.com/" },
  { name: "HougenPros", logo: "/clients/hougenpros.png", url: "https://www.hougenpros.com/" },
  { name: "IAC Centers", logo: "/clients/iac.png", url: "https://www.injuryassistancecenters.com/" },
  { name: "Reactivate Dallas", logo: "/clients/reactivate.png", url: "https://www.reactivatedallas.com/" },
  { name: "HOU Inc", logo: "/clients/houinc.png", url: "https://www.houinc.com/" },
];

export function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-24 relative overflow-hidden">
      {/* Premium divider */}
      <div className="section-divider mb-20" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Trusted By Industry Leaders
          </span>
        </motion.div>

        {/* Infinite scroll container */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {/* Double the logos for seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <motion.a
                key={`${client.name}-${index}`}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 group relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-10 md:h-12 w-auto object-contain opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Premium divider */}
      <div className="section-divider mt-20" />
    </section>
  );
}
