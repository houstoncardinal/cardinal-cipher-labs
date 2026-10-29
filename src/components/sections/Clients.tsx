import { clientLogos } from "@/lib/case-studies";
import { Container } from "@/components/site/primitives";

export function Clients() {
  return (
    <div className="border-b border-border bg-background py-14">
      <Container>
        <p className="text-center text-sm font-medium text-muted-foreground">
          Trusted by organizations across healthcare, legal, finance, and construction
        </p>
        <ul className="mt-10 grid grid-cols-2 items-center gap-x-10 gap-y-10 sm:grid-cols-4 lg:grid-cols-7">
          {clientLogos.map((c) => (
            <li key={c.name} className="flex justify-center">
              <a href={c.url} target="_blank" rel="noopener noreferrer" aria-label={c.name}>
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  loading="lazy"
                  className="h-10 w-auto max-w-[140px] object-contain transition duration-300 hover:scale-105"
                />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
