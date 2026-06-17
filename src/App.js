import React from "react";
import NavBar from "./Components/NavigationBar/NavBar";
import HeroSection from "./Components/HeroSection";
import SocialMarquee from "./Components/SocialMarquee";
import Authority from "./Components/Authority";
import InvestmentSchema from "./Components/SmallCase/InvestmentWork";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="app-container">
      <NavBar />
      <HeroSection />
      <SocialMarquee />
      <Authority />
      <InvestmentSchema />
    </div>
  );
}

export default App;
