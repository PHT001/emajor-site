import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Segments from "@/components/Segments";
import Particuliers from "@/components/Particuliers";
import Services from "@/components/Services";
import Offers from "@/components/Offers";
import Arrondissements from "@/components/Arrondissements";
import Info from "@/components/Info";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatbotFAQ from "@/components/ChatbotFAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Segments />
        <Particuliers />
        <Services />
        <Offers />
        <Arrondissements />
        <Info />
        <Contact />
      </main>
      <Footer />
      <ChatbotFAQ />
    </>
  );
}
