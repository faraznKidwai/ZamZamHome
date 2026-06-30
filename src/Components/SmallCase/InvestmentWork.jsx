import React, { useState, useEffect, useRef } from "react";
import "../../styles.css";
import logo from "./smallcase.jfif";
import BrokerMarquee from "./BrokerMar";

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

  useEffect(() => {
    if (currentIndex >= originalLength) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, originalLength]);

  useEffect(() => {
    if (!isTransitioning && currentIndex === 0) {
      const resetTransitionTimer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(resetTransitionTimer);
    }
  }, [isTransitioning, currentIndex]);

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
          Explore Our Long-term Investment Strategies{" "}
        </h2>
        <p className="schema-subtext text-white max-w-600 mx-auto">
          Choose from our diverse range of Shariah-compliant portfolios tailored
          to different investment goals and risk profiles with transparent
          performance tracking.
        </p>
      </div>

      <div
        className="position-relative px-md-5 max-w-1200 mx-auto mb-2 slider-interactive-container"
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
      </div>

      {/* FIXED: Powered By Badge Block now replicates slider container boundaries with precise internal padding corrections */}
      <div className="max-w-1200 mx-auto mb-5 px-3 px-md-5">
        <div className="d-flex justify-content-end align-items-center pe-1">
          <a
            href="https://www.smallcase.com"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center text-decoration-none text-white transition-all small"
            style={{ fontSize: "0.85rem" }}
          >
            <span className="me-2 fw-medium text-white-50">powered by:</span>
            <img
              src={logo}
              alt="smallcase"
              style={{
                width: "90px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </a>
        </div>
      </div>

      <BrokerMarquee />
    </section>
  );
}