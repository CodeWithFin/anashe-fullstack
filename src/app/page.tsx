import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Collection } from "@/components/Collection";
import { Philosophy } from "@/components/Philosophy";
import { Testimonials } from "@/components/Testimonials";
import { ClinicalResults } from "@/components/ClinicalResults";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Enhanced Hero Background */}
      <div className="absolute top-0 inset-x-0 h-[110vh] -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-neutral-950/20 z-10"></div>
        <img 
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/02a526d3-7d39-4227-9509-97fb6468a9a3_3840w.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-70 animate-pulse-slow object-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/10 via-neutral-950/40 to-neutral-950 z-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-neutral-950/0 to-transparent z-20"></div>
      </div>

      <section className="min-h-[92vh] overflow-hidden text-white relative">
        <Header />
        <Hero />
      </section>

      <Collection />
      <Philosophy />
      <Testimonials />
      <ClinicalResults />
      <Footer />
    </main>
  );
}
