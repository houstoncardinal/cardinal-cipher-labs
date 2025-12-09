import { motion } from "framer-motion";

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
  return (
    <section className="py-16 bg-card border-y border-border relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Trusted By Industry Leaders
          </span>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-10 md:h-12 w-auto object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
