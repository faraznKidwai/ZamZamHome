import React from "react";
import "../styles.css";

const STEPS = [
  {
    step: "STAGE 1",
    title: "Business Sector Check",
    question:
      "Is the company’s main business sector or industry (> 50%) Halal?",
    details: [
      "Non - Halal: & finance, investments, insurance, alcohol, impermissible entertainment, pork, gambling and tobacco",
      "HALAL: Everything Else",
    ],
  },
  {
    step: "STAGE 2",
    title: "Financial Ratio Check",
    question:
      "For companies that pass stage 1, all these five (5) financial ratios need to be satisfied in order to pass to the next stage",
    details: [
      { label: "Interest-bearing debt", value: "< 33% of total assets" },
      { label: "Non-compliant investments", value: "< 33% of total assets" },
      { label: "Non-halal revenue", value: "< 5% of total revenue" },
      { label: "Non-liquid assets", value: "≥ 20% of total assets" },
      { label: "Market capitalization", value: "> net liquid assets" },
    ],
  },
  {
    step: "STAGE 3",
    title: "Quantitative Screening Check",
    question:
      "Our key differentiator as we look deeper into every company that reaches this stage to spot any meaningful activity that can be considered Shariah non-compliant. Example: That’s why Reliance, Wipro, Infosys, defence stocks such as MAZDOCK, PARAS, GRSE, etc. are excluded from our Halal list.",
  },
];

const STATUS_BOXES = [
  {
    className: "status-halal",
    header: "Halal (Green)",
    desc: "Company passes our 3-stage screening in all parameters with no doubt or discrepancy. When in doubt or if information is not available we choose the safer side and do not risk falling into Haram.",
  },
  {
    className: "status-doubtful",
    header: "Doubtful (Yellow)",
    desc: "This text will be blurred out visually by the structural layout overlay block sitting on top of it.",
    hasOverlay: true,
    overlayText:
      "Zamzam Capital believes in giving clarity in Shariah status, not creating further doubt in the minds of its audience.",
  },
  {
    className: "status-haram",
    header: "Non Halal (Red)",
    desc: "Company fails Shariah compliance either at the business sector stage or by failing at least one of our 6 financial ratio screens. The Company could also be given a non-Halal status if it fails at final step of qualitative screening even after passing the previous two stages.",
  },
];

export default function ScreeningSection() {
  return (
    <section className="zz-suitability-section" id="shariah-compliance">
      <div className="zz-suitability-container">
        <div className="zz-suitability-header">
          <h2 className="suitability-main-title">
            Our Strict Shariah Screening Framework
          </h2>
          <p className="suitability-subtext">
            Our commitment to follow strict Shariah compliance in our stock
            screening, selection and purification criteria is a salient feature
            of our overall approach.
          </p>
        </div>

        <div className="zz-screening-infographic">
          {/* LEFT COLUMN: STEPS */}
          <div className="screening-steps-column">
            {STEPS.map((item) => (
              <div className="screening-step-card" key={item.step}>
                <span className="screening-step-label fw-bold">
                  {item.step}
                </span>
                <h3 className="screening-step-title fw-bold">{item.title}</h3>
                {item.question && (
                  <p className="screening-step-question fw-semibold mb-2">
                    {item.question}
                  </p>
                )}
                {Array.isArray(item.details) &&
                  item.details.map((detail, idx) =>
                    typeof detail === "string" ? (
                      <p className="screening-step-detail mb-1" key={idx}>
                        {detail}
                      </p>
                    ) : (
                      <div
                        className="screening-ratio-row d-flex justify-content-between gap-2 mb-1"
                        key={idx}
                      >
                        <span className="screening-step-detail">
                          {detail.label}
                        </span>
                        <span className="screening-ratio-value fw-bold">
                          {detail.value}
                        </span>
                      </div>
                    )
                  )}
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: DYNAMIC DATA STATUS CARDS */}
          <div className="screening-status-column">
            {STATUS_BOXES.map((box, index) => (
              <div
                className={`screening-status-box ${box.className}`}
                key={index}
              >
                {/* 1. HEADER: Placed at the top layer with explicit inline z-index context */}
                <span
                  className={`status-box-header ${
                    box.hasOverlay
                      ? "text-decoration-line-through opacity-50"
                      : ""
                  }`}
                  style={{ position: "relative", zIndex: 3 }}
                >
                  {box.header}
                </span>

                {/* 2. BODY CONTENT: Wrapped to isolate the blur boundaries */}
                <div
                  className="status-body-wrap"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <p className="status-box-desc">{box.desc}</p>

                  {/* Conditional Rendering for the Blur Layer */}
                  {box.hasOverlay && (
                    <div className="status-disabled-overlay">
                      <p className="status-overlay-message">
                        {box.overlayText}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
