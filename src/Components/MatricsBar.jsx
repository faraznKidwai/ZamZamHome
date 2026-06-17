import React, { useState, useEffect } from "react";
import "../styles.css";

// Clean counter engine to stream numbers on first page load
function useAnimatedCounter(targetValue, durationMs = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeProgress * targetValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [targetValue, durationMs]);

  return count;
}

export default function MetricsDashboard() {
  const animatedYrs = useAnimatedCounter(12);
  const animatedInvestors = useAnimatedCounter(25000);
  const animatedStocks = useAnimatedCounter(1200);
  const animatedReports = useAnimatedCounter(2400);

  const formatComma = (num) => num.toLocaleString("en-US");

  return (
    <section className="py-5 matrix-card">
      <div className="container">
        <div className="row g-4">
          {/* CARD 1: EXPERIENCE */}
          <div className="col-xl-3 col-md-6 col-12">
            <div className="zamzam-strict-card p-4 rounded-4 d-flex flex-column justify-content-between h-100">
              <div className="card-top-row d-flex align-items-center gap-2 mb-4">
                <div className="strict-card-icon d-flex align-items-center justify-content-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                </div>
                <span className="strict-card-tag text-uppercase fw-bold">
                  Experience
                </span>
              </div>
              <div className="strict-card-value fw-extrabold">
                +{animatedYrs}Yrs
              </div>
            </div>
          </div>

          {/* CARD 2: INVESTORS */}
          <div className="col-xl-3 col-md-6 col-12">
            <div className="zamzam-strict-card p-4 rounded-4 d-flex flex-column justify-content-between h-100">
              <div className="card-top-row d-flex align-items-center gap-2 mb-4">
                <div className="strict-card-icon d-flex align-items-center justify-content-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <span className="strict-card-tag text-uppercase fw-bold">
                  Investors
                </span>
              </div>
              <div className="strict-card-value fw-extrabold">
                {formatComma(animatedInvestors)}+
              </div>
            </div>
          </div>

          {/* CARD 3: HALAL STOCKS */}
          <div className="col-xl-3 col-md-6 col-12">
            <div className="zamzam-strict-card p-4 rounded-4 d-flex flex-column justify-content-between h-100">
              <div className="card-top-row d-flex align-items-center gap-2 mb-4">
                <div className="strict-card-icon d-flex align-items-center justify-content-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <span className="strict-card-tag text-uppercase fw-bold">
                  Halal Stocks
                </span>
              </div>
              <div className="strict-card-value fw-extrabold">
                {formatComma(animatedStocks)}+
              </div>
            </div>
          </div>

          {/* CARD 4: RESEARCH REPORTS */}
          <div className="col-xl-3 col-md-6 col-12">
            <div className="zamzam-strict-card p-4 rounded-4 d-flex flex-column justify-content-between h-100">
              <div className="card-top-row d-flex align-items-center gap-2 mb-4">
                <div className="strict-card-icon d-flex align-items-center justify-content-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <span className="strict-card-tag text-uppercase fw-bold">
                  Research Reports
                </span>
              </div>
              <div className="strict-card-value fw-extrabold">
                {formatComma(animatedReports)}+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
