import React from "react";
import NavBar from "./Components/NavigationBar/NavBar";
import HeroSection from "./Components/HeroSection";
import SocialMarquee from "./Components/SocialMarquee";
import Authority from "./Components/Authority";
import FounderSection from "./Components/FounderSection";
import InvestmentSchema from "./Components/SmallCase/InvestmentWork";
import ScreeningSection from "./Components/Screening";
import Screener from "./Components/Screener";
import Testimonials from "./Components/Testimonials";
import Insights from "./Components/Insights";
import KnowledgeCenter from "./Components/KnowledgeCenter";
import FAQs from "./Components/FAQs";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <HeroSection />
      <SocialMarquee />
      <Authority />
      <FounderSection />
      <InvestmentSchema />
      <ScreeningSection />
      <Screener />
      <Testimonials />
      <Insights />
      <KnowledgeCenter />
      <FAQs />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
