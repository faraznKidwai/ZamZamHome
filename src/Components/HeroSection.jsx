import React, { useState, useEffect, useRef } from "react";
import "../styles.css";

// 1. Updated Scroll-Triggered CountUp Component
function CountUp({ endValue, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    let startTime = null;
    let animationFrameId = null;
    const finalNumber = parseInt(endValue.replace(/[^0-9]/g, ""), 10);

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      const easeOutProgress = progressPercentage * (2 - progressPercentage);

      setCount(Math.floor(easeOutProgress * finalNumber));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    // Create intersection observer to delay execution until the element is scrolled into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationFrameId = requestAnimationFrame(animate);
          observer.unobserve(entry.target); // Unobserve immediately after trigger so it runs once
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [endValue, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

// 2. Interactive Card Layout Schema
const HERO_INTERACTIVE_CARDS = [
  {
    targetId: "#shariah-compliance",
    iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    frontTitle: "I want to Learn Investing",
    backTitle: "Check out ZamZam tools and knowledge bases",
    backAction: "Explore Knowledge Hub →",
  },
  {
    targetId: "#pricing",
    iconPath: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    frontTitle: "I want to start Shariah Trading",
    backTitle: "Unlock premium halal signals and asset plans",
    backAction: "View Trading Plans →",
  },
  {
    targetId: "#shariah-compliance",
    iconPath:
      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.952 11.952 0 01-7.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    frontTitle: "Verify My Custom Portfolio",
    backTitle: "Run deep quantitative checks on your equities",
    backAction: "Open Strict Screener →",
  },
];

// 3. Complete Primary Hero Component Section
export default function HeroSection() {
  return (
    <section className="zamzam-hero-viewport d-flex align-items-center">
      <div className="container">
        {/* UPPER ROW: Houses Copy Text & the Interactive Cards side-by-side */}
        <div className="row align-items-stretch mb-5">
          {/* LEFT: Text, Headings, and Checkmarks */}
          <div className="col-lg-7 col-12 d-flex flex-column justify-content-center">
            <div className="hero-badge-pill mb-3">
              <span className="badge-pill-text text-uppercase fw-bold">
                INDIA’S NO.1 SHARIAH-COMPLIANT RESEARCH ANALYST FIRM
              </span>
            </div>

            <h1 className="hero-main-title fw-extrabold mb-4">
              Grow Your Wealth Ethically <br />
              <span className="brand-text-green">
                and Reach Your Goals
              </span>{" "}
              <br />
              Without Compromising Your Faith.
            </h1>

            <ul className="hero-checkmark-list list-unstyled mb-0 d-flex flex-column gap-3">
              <li className="d-flex align-items-start gap-2">
                <span className="checkmark-icon-wrapper">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className="checkmark-item-text">
                  <strong> Discover halal stocks </strong>as per our strict
                  Shariah screening criteria
                </span>
              </li>
              <li className="d-flex align-items-start gap-2">
                <span className="checkmark-icon-wrapper">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className="checkmark-item-text">
                  <strong>Trade in halal stocks </strong> using one of our
                  trading plans
                </span>
              </li>
              <li className="d-flex align-items-start gap-2">
                <span className="checkmark-icon-wrapper">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className="checkmark-item-text">
                  <strong> Invest in long-term </strong> Shariah-compliant
                  smallcase portfolios
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT: Perfectly scaled card stack matching left text boundaries exactly */}
          <div className="col-lg-5 col-12 mt-4 mt-lg-0">
            <div className="cards-equidistant-container">
              {HERO_INTERACTIVE_CARDS.map((card, index) => (
                <a
                  href={card.targetId}
                  className="zz-3d-flip-anchor"
                  key={index}
                >
                  <div className="zz-flip-card-inner">
                    {/* FRONT FACE */}
                    <div className="zz-flip-face zz-flip-front d-flex align-items-center">
                      <div className="panel-icon-box front-icon-box d-flex align-items-center justify-content-center me-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d={card.iconPath} />
                        </svg>
                      </div>
                      <div className="card-typography-block">
                        <h4 className="interactive-card-title m-0">
                          {card.frontTitle}
                        </h4>
                      </div>
                      <div className="card-accent-chevron ms-auto">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </div>
                    </div>

                    {/* BACK FACE */}
                    <div className="zz-flip-face zz-flip-back d-flex align-items-center">
                      <div className="card-typography-block w-100">
                        <p className="interactive-card-desc mb-2 fw-semibold">
                          {card.backTitle}
                        </p>
                        <span className="action-hint-label fw-bold">
                          {card.backAction}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* LOWER ROW: Centered Upscaled Metrics Section */}
        <div className="row">
          <div className="col-12">
            <div className="hero-metrics-inline-row d-flex flex-wrap align-items-center justify-content-center gap-4 gap-sm-5 pt-4 text-center">
              <div className="metric-inline-item">
                <div className="metric-large-number fw-extrabold text-dark custom-metric-size">
                  <CountUp endValue="1800" suffix="+" />
                </div>
                <div className="metric-sub-label text-muted fw-semibold mt-1 custom-label-size">
                  Stocks Screened
                </div>
              </div>

              <div className="metric-inline-item">
                <div className="metric-large-number fw-extrabold text-dark custom-metric-size">
                  ₹<CountUp endValue="5" suffix="Cr +" />
                </div>
                <div className="metric-sub-label text-muted fw-semibold mt-1 custom-label-size">
                  Assets Managed
                </div>
              </div>

              <div className="metric-inline-item">
                <div className="metric-large-number fw-extrabold text-dark custom-metric-size">
                  <CountUp endValue="98" suffix="%" />
                </div>
                <div className="metric-sub-label text-muted fw-semibold mt-1 custom-label-size">
                  Client Satisfaction
                </div>
              </div>

              <div className="metric-inline-item">
                <div className="metric-large-number fw-extrabold text-dark custom-metric-size">
                  <CountUp endValue="5000" suffix="+" />
                </div>
                <div className="metric-sub-label text-muted fw-semibold mt-1 custom-label-size">
                  Investor Community
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
