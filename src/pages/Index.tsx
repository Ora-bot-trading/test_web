import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Roadmap } from "@/components/Roadmap";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead language={language} page="home" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
