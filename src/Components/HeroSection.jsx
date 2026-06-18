import React, { useState, useEffect } from "react";
import "../styles.css";
import Hero from "./Hero.png";

// Reusable micro-counter engine component
function CountUp({ endValue, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    // Extract numbers out of any string format passed (e.g., "5" from "5Cr +")
    const finalNumber = parseInt(endValue.replace(/[^0-9]/g, ""), 10);

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);

      // Smooth easeOutQuad pacing curve
      const easeOutProgress = progressPercentage * (2 - progressPercentage);

      setCount(Math.floor(easeOutProgress * finalNumber));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [endValue, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="zamzam-hero-viewport d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* ========================================================
             LEFT SIDE DESIGN (60% Screen Space Allocation)
             ======================================================== */}
          <div className="col-lg-7 col-12 mb-4 mb-lg-0">
            <div className="hero-left-content">
              <div className="hero-badge-pill mb-3">
                <span className="badge-pill-text text-uppercase fw-bold">
                  INDIA’S NO.1 SHARIAH-COMPLIANT RESEARCH ANALYST FIRM
                </span>
              </div>

              <h1 className="hero-main-title fw-extrabold mb-4">
                Grow Your Wealth Ethically <br />{" "}
                <span className="brand-text-green">and Reach Your Goals</span>{" "}
                <br />
                Without Compromising Your Faith.
              </h1>

              {/* Details Bullet Points */}
              <ul className="hero-checkmark-list list-unstyled mb-4 d-flex flex-column gap-3">
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

              {/* 3-Button Array Arrangement */}
              <div className="hero-action-triple-set d-flex flex-wrap gap-3 mb-5">
                <a
                  href="https://full-stack-excell-tamp.vercel.app/"
                  className="btn zamzam-btn-outline py-3 px-4"
                >
                  Explore Screener
                </a>
                <a href="#pricing" className="btn zamzam-btn-outline py-3 px-4">
                  View Trading Plans
                </a>
                <a
                  href="https://zamzamcapital.smallcase.com/"
                  className="btn zamzam-btn-outline py-3 px-4"
                >
                  Browse smallcases
                </a>
              </div>

              {/* ========================================================
                 METRICS INLINE ROW (Animated Counter State Engines)
                 ======================================================== */}
              <div className="hero-metrics-inline-row d-flex flex-wrap align-items-center gap-4 gap-sm-5 pt-4">
                <div className="metric-inline-item">
                  <div className="metric-large-number fw-bold text-dark">
                    <CountUp endValue="1800" suffix="+" />
                  </div>
                  <div className="metric-sub-label text-muted fw-medium mt-1">
                    Stocks Screened
                  </div>
                </div>

                <div className="metric-inline-item">
                  <div className="metric-large-number fw-bold text-dark">
                    ₹<CountUp endValue="5" suffix="Cr +" />
                  </div>
                  <div className="metric-sub-label text-muted fw-medium mt-1">
                    Assets Managed
                  </div>
                </div>

                <div className="metric-inline-item">
                  <div className="metric-large-number fw-bold text-dark">
                    <CountUp endValue="98" suffix="%" />
                  </div>
                  <div className="metric-sub-label text-muted fw-medium mt-1">
                    Client Satisfaction
                  </div>
                </div>

                <div className="metric-inline-item">
                  <div className="metric-large-number fw-bold text-dark">
                    <CountUp endValue="5000" suffix="+" />
                  </div>
                  <div className="metric-sub-label text-muted fw-medium mt-1">
                    Investor Community
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
             CENTER GAP (5% Buffer Zone)
             ======================================================== */}
          <div className="col-lg-1 d-none d-lg-block"></div>

          {/* ========================================================
             RIGHT SIDE DESIGN (Replacing modules with clean framing image)
             ======================================================== */}
          <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center">
            <div className="hero-image-wrapper position-relative w-100">
              {/* Optional absolute brand element accent ring behind your upcoming image asset */}
              <div className="hero-image-decorative-backdrop"></div>
              <img
                src={Hero}
                alt="Zamzam Capitals Dashboard Showcase"
                className="hero-frame-asset img-fluid rounded-4 shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
