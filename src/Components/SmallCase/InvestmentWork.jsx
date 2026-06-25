import React, { useState, useEffect, useRef } from "react";
import "../../styles.css";

const SMALLCASES = [
  {
    scid: "ZMZMSB_0002",
    title: "Zamzam Shariah Nifty 50 Smart Beta smallcase by Zamzam Capital",
  },
  {
    scid: "ZMZMNM_0001",
    title: "Zamzam Shariah New India Theme smallcase by Zamzam Capital",
  },
  {
    scid: "ZMZMSB_0001",
    title: "Zamzam Shariah Leaders Smart Beta smallcase by Zamzam Capital",
  },
  {
    scid: "ZMZMTR_0001",
    title: "Zamzam Shariah Infra Tracker smallcase by Zamzam Capital",
  },
];

function SmallcaseEmbedCard({ scid, title }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const p = document.createElement("p");
    p.className = "sc-embed";
    p.setAttribute("data-smallcase", "true");
    p.setAttribute("data-cta", "view");
    p.setAttribute("data-cardsize", "big");
    p.setAttribute("data-scid", scid);
    p.style.maxWidth = "100%";
    p.style.minHeight = "300px";
    p.style.display = "flex";
    p.style.alignItems = "stretch";
    p.style.justifyContent = "center";
    p.innerText = title;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.smallcase.com/embed/assets/embed.js";

    containerRef.current.appendChild(p);
    containerRef.current.appendChild(script);
  }, [scid, title]);

  return (
    <div className="bg-white rounded-4 p-3 shadow-sm h-100">
      <div ref={containerRef} className="w-100 smallcase-embed-wrapper" />
    </div>
  );
}

export default function InvestmentSchema() {
  const originalLength = SMALLCASES.length;
  const extendedSlides = [...SMALLCASES, ...SMALLCASES.slice(0, 2)];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const autoPlayRef = useRef(null);

  // Dynamically calculate screen size for accurate layout shifting
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesToScroll = isMobile ? 100 : 50;

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      if (prev === 0) {
        setIsTransitioning(false);
        return originalLength - 1;
      }
      return prev - 1;
    });
  };
  // Listen for the slide transition finishing to cleanly snap loops behind the scenes
  useEffect(() => {
    if (currentIndex >= originalLength) {
      // FIX: Changed from 6000ms to 600ms to match the 0.6s CSS animation speed perfectly
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, originalLength]);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [currentIndex, isMobile]);

  return (
    <section
      id="smallcases"
      className="zamzam-schema-section py-5 schema-bg-corporate-green text-center text-white"
    >
      <div className="container mb-5">
        <h2 className="schema-main-heading fw-extrabold mb-3 text-white">
          Choose Your Long-Term Investment Strategy with Our Model Portfolios{" "}
        </h2>
        <p className="schema-subtext text-white max-w-600 mx-auto">
          Each basket is carefully constructed by our research team with proven
          strategies, strict Shariah compliance, and transparent performance
          tracking.
        </p>
      </div>

      <div
        className="position-relative px-md-5 max-w-1200 mx-auto mb-5 slider-interactive-container"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        <button
          className="zz-slider-nav-btn prev-arrow"
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          className="zz-slider-nav-btn next-arrow"
          onClick={handleNext}
          aria-label="Next slide"
        >
          ›
        </button>

        <div className="zz-slider-viewport overflow-hidden">
          <div
            className="zz-slider-track"
            style={{
              display: "flex",
              transform: `translate3d(-${
                currentIndex * slidesToScroll
              }%, 0, 0)`,
              transition: isTransitioning
                ? "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                : "none",
            }}
          >
            {extendedSlides.map((item, idx) => (
              <div
                className="zz-slide-item-v1"
                key={`sc-slide-${item.scid}-${idx}`}
                style={{
                  flex: isMobile ? "0 0 100%" : "0 0 50%",
                  padding: "0 12px",
                  boxSizing: "border-box",
                }}
              >
                <SmallcaseEmbedCard scid={item.scid} title={item.title} />
              </div>
            ))}
          </div>
        </div>
        {/* Powered By Badge (Bottom Right Alignment Block) */}
        <div className="d-flex justify-content-end align-items-center mt-3 pe-md-2">
          <a
            href="https://zamzamcapital.smallcase.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center text-decoration-none text-white hover-opacity-100 transition-all small"
            style={{ fontSize: "0.85rem" }}
          >
            <span className="me-2 fw-medium">powered by</span>
            <img
              src="data:image/png;base64,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"
              alt="smallcase"
              style={{
                height: "40px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
