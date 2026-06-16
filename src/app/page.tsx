import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Booking } from "@/components/sections/booking";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-luxury-background">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Booking />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
