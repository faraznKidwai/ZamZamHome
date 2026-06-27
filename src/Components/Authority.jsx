import React from "react";
import "../styles.css";

export default function AuthoritySection() {
  return (
    <section className="zamzam-authority-section py-5 bg-white" id="about">
      <div className="container text-center mb-5">
        <h2 className="schema-main-heading authority-main-heading fw-extrabold mb-3 text-dark">
          The <span className="brand-text-green">Zamzam Capital</span> Ecosystem
        </h2>

        <p className="authority-subtext mx-auto">
          A holistic approach to ethical wealth creation
        </p>
      </div>

      <div className="container">
        <div className="row g-4">
          <div className="col-xl-3 col-md-6 col-12">
            <div className="authority-strict-card p-4 rounded-4 h-100 d-flex flex-column align-items-start text-start">
              <div className="strict-card-icon-frame mb-4 d-flex align-items-center justify-content-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="strict-card-title fw-bold mb-3">SEBI Regulated</h3>
              <p className="strict-card-desc mb-0">
                Fully licensed as a Research Analyst under SEBI (INH000016199),
                providing institutional-grade analysis, risk management &
                transparency.
              </p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 col-12">
            <div className="authority-strict-card p-4 rounded-4 h-100 d-flex flex-column align-items-start text-start">
              <div className="strict-card-icon-frame mb-4 d-flex align-items-center justify-content-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="strict-card-title fw-bold mb-3">
                Shariah Compliance
              </h3>
              <p className="strict-card-desc mb-0">
                Rigorous 3-stage screening process overseen by certified Shariah
                scholars. Every stock is manually verified for compliance.
              </p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 col-12">
            <div className="authority-strict-card p-4 rounded-4 h-100 d-flex flex-column align-items-start text-start">
              <div className="strict-card-icon-frame mb-4 d-flex align-items-center justify-content-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
              <h3 className="strict-card-title fw-bold mb-3">Deep Analytics</h3>
              <p className="strict-card-desc mb-0">
                Quantitative and qualitative analysis that goes beyond simple
                screening. Fundamental & technical research merged with Shariah
                compliant filters.
              </p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 col-12">
            <div className="authority-strict-card p-4 rounded-4 h-100 d-flex flex-column align-items-start text-start">
              <div className="strict-card-icon-frame mb-4 d-flex align-items-center justify-content-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="strict-card-title fw-bold mb-3">
                Model Portfolios
              </h3>
              <p className="strict-card-desc mb-0">
                Curated smallcase portfolios optimized through regular monthly &
                quarterly rebalancing, with a Systematic Investment Plan (SIP)
                facility designed for long-term investors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
