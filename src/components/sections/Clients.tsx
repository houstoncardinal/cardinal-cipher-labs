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
    <section ref={ref} className="py-20 lg:py-28 relative overflow-hidden bg-white">
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-500 font-medium">
            Trusted By Industry Leaders
          </span>
        </motion.div>

        {/* Infinite scroll container */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex gap-20 items-center"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            {/* Double the logos for seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <motion.a
                key={`${client.name}-${index}`}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 group relative"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                />
                
                {/* Subtle shadow on hover */}
                <motion.div
                  className="absolute inset-0 bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
