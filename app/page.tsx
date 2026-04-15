import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Univers from "@/components/Univers";
import ServicesHome from "@/components/ServicesHome";
import Offers from "@/components/Offers";
import Confiance from "@/components/Confiance";
import Arrondissements from "@/components/Arrondissements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatbotFAQ from "@/components/ChatbotFAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Univers />
        <ServicesHome />
        <Offers />
        <Confiance />
        <Arrondissements />
        <Contact />
      </main>
      <Footer />
      <ChatbotFAQ />
    </>
  );
}
