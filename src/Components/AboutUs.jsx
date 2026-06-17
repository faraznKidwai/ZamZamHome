import React, { useState, useEffect, useRef } from "react";
import "../styles.css";

export default function AboutUsSection() {
  const [currentState, setCurrentState] = useState(1); // 1 = Founder, 2 = Sharia/Core
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoCycleRef = useRef(null);

  const resetTimer = () => {
    if (autoCycleRef.current) clearInterval(autoCycleRef.current);
    autoCycleRef.current = setInterval(() => {
      toggleState();
    }, 30000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (autoCycleRef.current) clearInterval(autoCycleRef.current);
    };
  }, [currentState]);

  const toggleState = () => {
    setCurrentState((prev) => (prev === 1 ? 2 : 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    if (autoCycleRef.current) clearInterval(autoCycleRef.current);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diffX = touchStartX.current - touchEndX.current;
    if (Math.abs(diffX) > 50) {
      toggleState();
    } else {
      resetTimer();
    }
  };

  return (
    <section className="zamzam-about-section py-5 bg-white">
      <div className="container position-relative">
        {/* MANUAL CONTROLS */}
        <button
          className="about-nav-arrow arrow-left d-flex align-items-center justify-content-center"
          onClick={toggleState}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          className="about-nav-arrow arrow-right d-flex align-items-center justify-content-center"
          onClick={toggleState}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* PRIMARY FIXED VIEWPORT WINDOW */}
        <div
          className="about-view-window rounded-4 overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`about-sliding-track ${
              currentState === 2 ? "shift-active" : ""
            }`}
          >
            {/* ==========================================
                STATE 1: FOUNDER SCREEN
               ========================================== */}
            <div className="about-full-state">
              {/* Left Screen Half (50%) */}
              <div className="about-half-panel position-relative panel-media">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Saif Ahmad - Founder & CEO"
                  className="about-asset-img"
                />
                <div className="founder-overlay-badge d-flex flex-column justify-content-center px-4">
                  <h5 className="fw-bold text-white mb-0">Saif Ahmad</h5>
                  <p className="badge-subtitle mb-0">
                    Founder & CEO, Zamzam Capitals
                  </p>
                </div>
              </div>

              {/* Right Screen Half (50%) */}
              <div className="about-half-panel p-4 p-md-5 d-flex flex-column justify-content-center bg-light-mint">
                <span className="about-mini-tag text-uppercase fw-bold mb-2">
                  Leadership
                </span>
                <h2 className="about-panel-heading fw-extrabold mb-4">
                  Our Founder
                </h2>
                <p className="about-lorem-text mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

            {/* ==========================================
                STATE 2: SHARIA BOARD & MISSIONS SCREEN
               ========================================== */}
            <div className="about-full-state">
              {/* Left Screen Half (50%) -> Horizontal Subdivisions */}
              <div className="about-half-panel d-flex flex-column bg-white">
                <div className="core-half-panel p-4 p-md-5 d-flex flex-column justify-content-center border-bottom">
                  <h4 className="core-title fw-extrabold mb-2 text-uppercase">
                    Our Vision
                  </h4>
                  <p className="core-desc mb-0">
                    To pioneer an institutional ethical marketplace where
                    premium data-driven financial strategies remain radically
                    accessible, empowering investors to scale wealth while
                    adhering strictly to principled values.
                  </p>
                </div>
                <div className="core-half-panel p-4 p-md-5 d-flex flex-column justify-content-center bg-light-mint">
                  <h4 className="core-title fw-extrabold mb-2 text-uppercase">
                    Our Mission
                  </h4>
                  <p className="core-desc mb-0">
                    Eliminating structural information asymmetry by merging
                    automated algorithmic quantitative asset screens with
                    certified, multi-step Sharia audits to ensure complete
                    financial safety and peak baseline returns.
                  </p>
                </div>
              </div>

              {/* Right Screen Half (50%) */}
              <div className="about-half-panel position-relative panel-media">
                <img
                  src=""
                  alt="Zamzam Capitals Sharia Board"
                  className="about-asset-img"
                />
                <div className="sharia-overlay-title p-4">
                  <h3 className="fw-extrabold text-white mb-0 text-uppercase">
                    Our Sharia Board
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
