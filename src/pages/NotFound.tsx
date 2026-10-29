import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Container, Eyebrow } from "@/components/site/primitives";
import { services } from "@/lib/services-catalog";

const NotFound = () => (
  <>
    <SEOHead title="Page not found" description="The page you were looking for doesn't exist." noindex />
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[72px]">
        <Container className="py-16 lg:py-24">
          <Eyebrow className="mb-6">404</Eyebrow>
          <h1 className="max-w-3xl font-display text-4xl leading-tight text-foreground md:text-6xl">We couldn't find that page.</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            It may have moved, or the link may be out of date. Here are a few good places to go next.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/" className="inline-flex h-12 items-center gap-2 bg-ink px-6 font-semibold text-ink-foreground transition-colors hover:bg-primary">
              Go to the homepage <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex h-12 items-center gap-2 border border-foreground px-6 font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background">
              Contact us
            </Link>
          </div>
          <div className="mt-12 border-t border-border pt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Our services</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={s.path} className="font-medium text-foreground hover:text-primary">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  </>
);

export default NotFound;
