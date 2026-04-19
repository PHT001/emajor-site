import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExpertiseDomains from "@/components/ExpertiseDomains";
import Installations from "@/components/Installations";
import Process from "@/components/Process";
import WhyChoose from "@/components/WhyChoose";
import FAQ from "@/components/FAQ";
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
          <ExpertiseDomains />
        </Reveal>
        <Reveal>
          <Installations />
        </Reveal>
        <Reveal>
          <Process />
        </Reveal>
        <Reveal>
          <WhyChoose />
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
