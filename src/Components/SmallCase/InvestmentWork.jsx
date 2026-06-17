import React from "react";
import "../../styles.css";

export default function InvestmentSchema() {
  return (
    /* Changed 'bg-white' to 'schema-bg-light' to apply the exact light green background fill */
    <section className="zamzam-schema-section py-5 schema-bg-light">
      {/* SECTION HEADER BLOCK */}
      <div className="container mb-5">
        {/* Title updated to combine white text with schematic green highlighting */}
        <h2 className="schema-main-heading fw-extrabold mb-3 text-start ">
          Is <span className="brand-text-green">Zam Zam</span> small case
          <br className="d-none d-md-block" /> suitable for you?
        </h2>
        <p className="schema-subtext text-start mb-0">
          ZamZam strategies are a good fit for you if you are looking for
          following 4 factors. <br />
        </p>
      </div>

      {/* CORE 4-FACTOR CHANNELS GRID */}
      <div className="container">
        <div className="row g-4">
          {/* CARD 1: LONG TERM WEALTH CREATION */}
          <div className="col-xl-3 col-md-6 col-12">
            <div className="schema-strict-card inverted-variant p-4 rounded-4 h-100 d-flex flex-column align-items-start text-start">
              <div className="schema-icon-wrapper mb-4 d-flex align-items-center justify-content-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <h3 className="schema-card-title fw-bold mb-2">
                Long term wealth creation
              </h3>
              <p className="schema-card-desc mb-0">
                Best for your long term goals like financial freedom, children's
                future, house, retirement.
              </p>
            </div>
          </div>

          {/* CARD 2: CONSISTENTLY BEATING BENCHMARKS */}
          <div className="col-xl-3 col-md-6 col-12">
            <div className="schema-strict-card inverted-variant p-4 rounded-4 h-100 d-flex flex-column align-items-start text-start">
              <div className="schema-icon-wrapper mb-4 d-flex align-items-center justify-content-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <h3 className="schema-card-title fw-bold mb-2">
                Consistently beating benchmarks
              </h3>
              <p className="schema-card-desc mb-0">
                Strategies work to outperform benchmarks on both upside as well
                as downside in long run.
              </p>
            </div>
          </div>

          {/* CARD 3: FEW MINUTES OF EFFORT */}
          <div className="col-xl-3 col-md-6 col-12">
            <div className="schema-strict-card inverted-variant p-4 rounded-4 h-100 d-flex flex-column align-items-start text-start">
              <div className="schema-icon-wrapper mb-4 d-flex align-items-center justify-content-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="schema-card-title fw-bold mb-2">
                Few minutes of effort every week/ month
              </h3>
              <p className="schema-card-desc mb-0">
                No need to follow the market movements constantly. Your
                rebalance work is done in just a few minutes.
              </p>
            </div>
          </div>

          {/* CARD 4: DEDICATED SUPPORT */}
          <div className="col-xl-3 col-md-6 col-12">
            <div className="schema-strict-card inverted-variant p-4 rounded-4 h-100 d-flex flex-column align-items-start text-start">
              <div className="schema-icon-wrapper mb-4 d-flex align-items-center justify-content-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="schema-card-title fw-bold mb-2">
                Having a dedicated support
              </h3>
              <p className="schema-card-desc mb-0">
                We strive to have an exceptional support for all our
                subscribers. Our team is just an email away.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* CENTERED DOUBT CALLOUT BLOCK */}
      <div className="text-center mt-5 pt-3">
        <h4 className="schema-doubt-title fw-extrabold mb-3">
          Still have doubts?
        </h4>
        <p className="schema-doubt-lead mb-4">Contact us directly anytime</p>

        <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
          {/* WhatsApp Channel Link */}
          <a
            href="https://wa.me/your_number"
            target="_blank"
            rel="noopener noreferrer"
            className="schema-action-link d-flex align-items-center gap-2 fw-bold text-decoration-none"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.704 1.456h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>

          {/* Direct Voice Call Option */}
          <a
            href="tel:+910000000000"
            className="schema-action-link d-flex align-items-center gap-2 fw-bold text-decoration-none"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
