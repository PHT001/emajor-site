import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Univers from "@/components/Univers";
import ServicesHome from "@/components/ServicesHome";
import Confiance from "@/components/Confiance";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Univers />
        <ServicesHome />
        <Confiance />
      </main>
      <Footer />
    </>
  );
}
