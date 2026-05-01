import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import ExpertiseDomains from "@/components/ExpertiseDomains";
import Installations from "@/components/Installations";
import MissionsQuotidiennes from "@/components/MissionsQuotidiennes";
import GalerieTeaser from "@/components/GalerieTeaser";
import Process from "@/components/Process";
import WhyChoose from "@/components/WhyChoose";
import FAQ from "@/components/FAQ";
import TarifsDeplacement from "@/components/TarifsDeplacement";
import Reveal from "@/components/Reveal";
import { HomeCTA } from "@/components/CTASection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reveal>
          <ClientLogos />
        </Reveal>
        <ExpertiseDomains />
        <Reveal>
          <Installations />
        </Reveal>
        <Reveal>
          <MissionsQuotidiennes />
        </Reveal>
        <Reveal>
          <GalerieTeaser />
        </Reveal>
        <Reveal>
          <Process />
        </Reveal>
        <WhyChoose />
        <Reveal>
          <TarifsDeplacement />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
        <Reveal>
          <HomeCTA />
        </Reveal>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
