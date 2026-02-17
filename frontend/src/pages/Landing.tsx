import { Link } from "react-router-dom";
import { BarChart3, TrendingUp, Users, Zap, PieChart, FileText, ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { features, pricingPlans, testimonials } from "@/data/mockData";

const featureIcons = [TrendingUp, Users, Zap, FileText, PieChart, BarChart3];

const HeroSection = () => (
  <section className="relative overflow-hidden">
    <div className="hero-gradient absolute inset-0" />
    <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-32 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-card animate-fade-in">
        <Zap className="h-3.5 w-3.5 text-primary" />
        Trusted by 2,000+ brands worldwide
      </div>
      <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-foreground opacity-0 animate-fade-up md:text-7xl" style={{ animationDelay: "0.1s" }}>
        Sponsorship Analytics{" "}
        <span className="text-gradient">Made Simple</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
        Track influencer campaigns, measure ROI, and optimize your sponsorship strategy — all from one powerful dashboard.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 opacity-0 animate-fade-up sm:flex-row" style={{ animationDelay: "0.4s" }}>
        <Button variant="hero" size="lg" asChild>
          <Link to="/register">Get Started Free <ArrowRight className="ml-1 h-4 w-4" /></Link>
        </Button>
        <Button variant="hero-outline" size="lg" asChild>
          <Link to="/login">View Demo</Link>
        </Button>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="bg-card py-24">
    <div className="mx-auto max-w-6xl px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">Everything You Need</h2>
        <p className="mt-3 text-muted-foreground">Powerful tools to manage and optimize every sponsorship campaign.</p>
      </div>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => {
          const Icon = featureIcons[i];
          return (
            <div key={feature.title} className="group rounded-xl border border-border bg-background p-6 transition-all duration-200 hover:shadow-card-hover hover:border-primary/20">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section className="py-24">
    <div className="mx-auto max-w-6xl px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">Simple, Transparent Pricing</h2>
        <p className="mt-3 text-muted-foreground">Start free. Scale when you're ready.</p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <div key={plan.name} className={`relative rounded-2xl border p-8 transition-all duration-200 ${plan.highlighted ? "border-primary bg-card shadow-glow scale-[1.02]" : "border-border bg-card shadow-card hover:shadow-card-hover"}`}>
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-foreground">${plan.price}</span>
              <span className="text-muted-foreground">/mo</span>
            </div>
            <ul className="mt-8 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full" variant={plan.highlighted ? "hero" : "hero-outline"} asChild>
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="bg-card py-24">
    <div className="mx-auto max-w-6xl px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">Loved by Marketers</h2>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-xl border border-border bg-background p-6">
            <div className="flex gap-1 text-chart-5">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">{t.avatar}</div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left">
      <div className="flex items-center gap-2">
        <BarChart3 className="h-6 w-6 text-primary" />
        <span className="text-lg font-bold text-foreground">Sponsorlytics</span>
      </div>
      <p className="text-sm text-muted-foreground">© 2024 Sponsorlytics. All rights reserved.</p>
    </div>
  </footer>
);

const Navbar = () => (
  <nav className="fixed top-0 z-50 w-full border-b border-border/50 glass">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
      <Link to="/" className="flex items-center gap-2">
        <BarChart3 className="h-6 w-6 text-primary" />
        <span className="text-lg font-bold text-foreground">Sponsorlytics</span>
      </Link>
      <div className="hidden items-center gap-8 md:flex">
        <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
        <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/login">Sign in</Link>
        </Button>
        <Button variant="hero" size="sm" asChild>
          <Link to="/register">Get Started</Link>
        </Button>
      </div>
    </div>
  </nav>
);

const Landing = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <div id="features"><FeaturesSection /></div>
    <div id="pricing"><PricingSection /></div>
    <TestimonialsSection />
    <Footer />
  </div>
);

export default Landing;
