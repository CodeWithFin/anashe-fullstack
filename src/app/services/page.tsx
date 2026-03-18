import Link from "next/link";
import { ArrowRight, FlaskConical, Sparkles, Stethoscope } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const services = [
  {
    title: "Skin Consultation",
    summary:
      "A guided 1:1 session to assess your skin goals, current routine, and product compatibility.",
    detail: "45 mins · Virtual or in-studio",
    icon: Stethoscope,
  },
  {
    title: "Routine Design",
    summary:
      "Personalized AM/PM routine built around your skin type, sensitivity profile, and climate.",
    detail: "Custom 30-day plan",
    icon: Sparkles,
  },
  {
    title: "Ingredient Review",
    summary:
      "Bring your current products and get a full ingredient compatibility and layering review.",
    detail: "Science-backed recommendations",
    icon: FlaskConical,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-400/10 via-neutral-950/0 to-transparent" />
      </div>

      <section className="relative border-b border-white/10">
        <Header />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-12 pt-6 sm:pb-16 sm:pt-10">
          <p className="uppercase tracking-[0.18em] text-xs text-white/60 font-sans">ANASHE Services</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bricolage font-semibold tracking-tighter leading-[1.05] max-w-3xl">
            Professional skin services tailored to your routine.
          </h1>
          <p className="mt-4 max-w-2xl text-white/80 font-sans text-base sm:text-lg">
            Get expert guidance to choose products, simplify your ritual, and improve results over time.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-10 sm:py-14">
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="rounded-3xl border-gradient before:rounded-3xl bg-white/[0.03] p-6"
                style={{ backdropFilter: "blur(6px) saturate(1.1)" }}
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 border-gradient before:rounded-2xl">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h2 className="mt-4 text-2xl font-bricolage font-semibold tracking-tight">{service.title}</h2>
                <p className="mt-3 text-sm text-white/75 leading-relaxed font-sans">{service.summary}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.14em] text-emerald-200 font-sans">{service.detail}</p>
                <Link href="#" className="mt-5 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition font-sans">
                  Book Service
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-12 sm:pb-16">
        <div className="rounded-3xl border-gradient before:rounded-3xl bg-white/[0.03] p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/60 font-sans">Need Product Support?</p>
            <h3 className="mt-2 text-3xl sm:text-4xl font-bricolage font-semibold tracking-tight">Start with a free routine check.</h3>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-neutral-900 px-6 py-3 text-sm font-medium hover:bg-white/90 transition font-sans"
          >
            Explore Shop
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
