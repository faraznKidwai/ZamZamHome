import React, { useEffect } from "react";

export const smallcasesData = [
  {
    scid: "ZMZMSB_0001",
    name: "Zamzam Shariah Leaders Smart Beta",
    desc: 'Ride the "India Story" with this portfolio that contains leaders from India\'s top growing sectors.',
    volatility: "High Volatility",
    returnsLabel: "3Y Returns",
    returnsVal: "34.20%",
    minInvest: "₹ 75,548.00",
    updateFreq: "Monthly",
    functionalTitle: "High-Alpha Quantitative Shariah Screener",
    subtitle:
      "Best for aggressive investors looking for long-term compounding and index-beating returns.",
    icon: "🚢",
  },
  {
    scid: "ZMZMNM_0001",
    name: "Zamzam Shariah New India Theme",
    desc: "Targeting next-generation manufacturing, technology, and structural infrastructure tailwinds.",
    volatility: "High Volatility",
    returnsLabel: "2Y Returns",
    returnsVal: "28.90%",
    minInvest: "₹ 45,210.00",
    updateFreq: "Weekly",
    functionalTitle: "Emerging National Growth Horizons Portfolio",
    subtitle:
      "Best for investors targeting next-generation manufacturing, technology, and infra tailwinds.",
    icon: "🚀",
  },
  {
    scid: "ZMZMSB_0002",
    name: "Zamzam Shariah Nifty 50 Smart Beta",
    desc: "A factor-optimized core portfolio offering high structural stability with minimized tracking error.",
    volatility: "Low Volatility",
    returnsLabel: "5Y Returns",
    returnsVal: "18.42%",
    minInvest: "₹ 15,000.00",
    updateFreq: "Quarterly",
    functionalTitle: "Large-Cap Factor Optimized Core Engine",
    subtitle:
      "Best for conservative equity allocation demanding high stability with minimized tracking error.",
    icon: "🛡️",
  },
  {
    scid: "ZMZMTR_0001",
    name: "Zamzam Shariah Infra Tracker",
    desc: "Aligning with heavy public developmental spending and cyclical sector tactical momentum.",
    volatility: "High Volatility",
    returnsLabel: "1Y Returns",
    returnsVal: "22.10%",
    minInvest: "₹ 32,400.00",
    updateFreq: "Monthly",
    functionalTitle: "Structural Capital Expenditure Momentum Fund",
    subtitle:
      "Best for cyclical sector tactical exposure aligning with heavy public developmental spending.",
    icon: "🏗️",
  },
];

export const triggerSmallcaseAction = (scid) => {
  window.open(
    `https://www.smallcase.com/smallcase/${scid}`,
    "_blank",
    "noopener,noreferrer"
  );
};

export default function SmallcaseBridge() {
  useEffect(() => {
    if (
      window.smallcaseEmbed &&
      typeof window.smallcaseEmbed.init === "function"
    ) {
      window.smallcaseEmbed.init();
      return;
    }
    let coreScript = document.getElementById("smc-embed-core-engine");
    if (!coreScript) {
      coreScript = document.createElement("script");
      coreScript.id = "smc-embed-core-engine";
      coreScript.src = "https://www.smallcase.com/embed/assets/embed.js";
      coreScript.async = true;
      document.body.appendChild(coreScript);
    }
  }, []);

  return <div id="hidden-embed-pool" style={{ display: "none" }} />;
}
