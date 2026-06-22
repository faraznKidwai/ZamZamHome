import React, { useState, useEffect, useRef } from "react";
import SmallcaseBridge, {
  smallcasesData,
  triggerSmallcaseAction,
} from "./SmallcaseBridge";
import { SmallcaseReplicaCard } from "./SmallCard";
import "../../styles.css";
import ContactSection from "./Contact";

export default function InvestmentSchema() {
  // Clone data for continuous loop tracking
  const doubleData = [...smallcasesData, ...smallcasesData];
  const totalOriginalItems = smallcasesData.length;

  const [d1Index, setD1Index] = useState(0);
  const [d2Index, setD2Index] = useState(0);
  const [d1Transition, setD1Transition] = useState(true);
  const [d2Transition, setD2Transition] = useState(true);

  const d1Timer = useRef(null);
  const d2Timer = useRef(null);

  // --- Design 1: Continuous Infinite Loop Tracker ---
  const startD1AutoSlide = () => {
    clearInterval(d1Timer.current);
    d1Timer.current = setInterval(() => {
      handleD1Next();
    }, 8000);
  };

  const handleD1Next = () => {
    setD1Transition(true);
    setD1Index((prev) => prev + 1);
  };

  const handleD1Prev = () => {
    setD1Transition(true);
    setD1Index((prev) => (prev === 0 ? totalOriginalItems - 1 : prev - 1));
  };

  useEffect(() => {
    // When Design 1 slides past the last original item, snap back to the start without an animation flash
    if (d1Index >= totalOriginalItems) {
      const snapTimer = setTimeout(() => {
        setD1Transition(false);
        setD1Index(0);
      }, 6000); // Fired right after transition completes
      return () => clearTimeout(snapTimer);
    }
  }, [d1Index, totalOriginalItems]);

  // --- Design 2: Continuous Infinite Loop Tracker ---
  const startD2AutoSlide = () => {
    clearInterval(d2Timer.current);
    d2Timer.current = setInterval(() => {
      handleD2Next();
    }, 8000);
  };

  const handleD2Next = () => {
    setD2Transition(true);
    setD2Index((prev) => prev + 1);
  };

  const handleD2Prev = () => {
    setD2Transition(true);
    setD2Index((prev) => (prev === 0 ? totalOriginalItems - 1 : prev - 1));
  };

  useEffect(() => {
    if (d2Index >= totalOriginalItems) {
      const snapTimer = setTimeout(() => {
        setD2Transition(false);
        setD2Index(0);
      }, 6000);
      return () => clearTimeout(snapTimer);
    }
  }, [d2Index, totalOriginalItems]);

  useEffect(() => {
    startD1AutoSlide();
    startD2AutoSlide();
    return () => {
      clearInterval(d1Timer.current);
      clearInterval(d2Timer.current);
    };
  }, []);

  return (
    <section
      id="smallcases"
      className="zamzam-schema-section py-5 schema-bg-corporate-green text-center text-white"
    >
      <SmallcaseBridge />

      <div className="container mb-5">
        <h2 className="schema-main-heading fw-extrabold mb-2">
          Choose Your Investment Strategy
        </h2>
        <p className="schema-subtext opacity-75 max-w-600 mx-auto">
          Each basket is carefully constructed by our research team with proven
          strategies, strict Shariah compliance and transparent performance
          tracking
        </p>
      </div>

      <div className="position-relative px-md-5 max-w-1200 mx-auto mb-5">
        <button className="zz-slider-nav-btn prev-arrow" onClick={handleD1Prev}>
          ‹
        </button>
        <button className="zz-slider-nav-btn next-arrow" onClick={handleD1Next}>
          ›
        </button>

        <div className="zz-slider-viewport">
          <div
            className="zz-slider-track"
            style={{
              transform: `translate3d(-${d1Index * 50}%, 0, 0)`,
              transition: d1Transition
                ? "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                : "none",
            }}
          >
            {doubleData.map((item, idx) => (
              <div
                className="zz-slide-item-v1"
                key={`d1-card-${item.scid}-${idx}`}
              >
                <SmallcaseReplicaCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="position-relative px-md-5 max-w-800 mx-auto mb-5 mt-5">
        <button className="zz-slider-nav-btn prev-arrow" onClick={handleD2Prev}>
          ‹
        </button>
        <button className="zz-slider-nav-btn next-arrow" onClick={handleD2Next}>
          ›
        </button>

        <div className="zz-slider-viewport">
          <div
            className="zz-slider-track"
            style={{
              transform: `translate3d(-${d2Index * 100}%, 0, 0)`,
              transition: d2Transition
                ? "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                : "none",
            }}
          >
            {doubleData.map((item, idx) => (
              <div
                className="zz-slide-item-v2"
                key={`d2-card-${item.scid}-${idx}`}
              >
                <div className="bg-white rounded-4 p-4 shadow-lg text-center d-flex flex-column align-items-center">
                  {/* Item 1: Name of smallcase (Center-aligned) */}
                  <h2 className="design2-smallcase-name fw-extrabold mb-3 text-dark text-center w-100">
                    {item.name}
                  </h2>

                  {/* Item 2: Custom Embedded Replica Box */}
                  <div className="w-100 mb-4">
                    <SmallcaseReplicaCard item={item} hideFooter={true} />
                  </div>

                  {/* Item 3: Center-aligned Custom Title */}
                  <h3 className="design2-functional-title fw-bold text-success text-center mb-2 px-2 w-100">
                    {item.functionalTitle}
                  </h3>

                  {/* Item 4: Center-aligned Strategy Subtitle */}
                  <p className="design2-audience-subtitle text-muted text-center mb-4 px-3 max-w-600 w-100">
                    {item.subtitle}
                  </p>

                  {/* Item 5: View Smallcase Primary Action below subtitle */}
                  <button
                    className="btn btn-primary fw-bold px-5 py-2.5 rounded-3 shadow-sm btn-design2-action text-nowrap"
                    onClick={() => triggerSmallcaseAction(item.scid)}
                  >
                    View smallcase
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactSection />
    </section>
  );
}
