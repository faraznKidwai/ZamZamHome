import React from "react";
import "../styles.css";

const STEPS = [
  {
    step: "STAGE 1",
    title: "Business Sector Check",
    question:
      "Is the company’s main business sector or industry (> 50%) Halal?",
    details: [
      "Non-Halal sectors: Banking & finance, investments, insurance, alcohol, impermissible entertainment, pork, gambling and tobacco",
      "Halal sectors: Everything else",
    ],
  },
  {
    step: "STAGE 2",
    title: "Financial Ratio Check",
    question:
      "For companies that pass stage 1, all these five (5) financial ratios need to be satisfied in order to pass to the next stage:",
    details: [
      { label: "Interest-bearing debt", value: "< 33% of total assets" },
      { label: "Non-compliant investments", value: "< 33% of total assets" },
      { label: "Non-Halal revenue", value: "< 5% of total revenue" },
      { label: "Non-liquid assets", value: "≥ 20% of total assets" },
      { label: "Market capitalization", value: "> net liquid assets" },
    ],
  },
  {
    step: "STAGE 3",
    title: "Qualitative Screening Check",
    question:
      "Our key differentiator - we look deeper into every company that reaches this stage to spot any business activity that can be considered as Shariah non-compliant. This is the reason why RELIANCE, WIPRO, INFY, defence stocks such as MAZDOCK, PARAS, GRSE, some sugar companies, etc. are excluded from our Halal stocks list.",
    isUnboldedQuestion: true,
  },
];

const STATUS_BOXES = [
  {
    className: "status-halal",
    header: "Halal (Green)",
    desc: "Company passes our 3-stage screening in all parameters with no doubt or discrepancy. When in doubt or if information is not available, we choose the safer side and do not risk falling into Haram.",
  },
  {
    className: "status-doubtful",
    header: "DOUBTFUL/MUTE (YELLOW)",
    desc: "This text will be blurred out visually by the structural layout overlay block sitting on top of it.",
    hasOverlay: true,
    overlayText:
      "A stock is either Halal or Non-Halal! Zamzam Capital believes in giving clarity about Shariah status, not in creating further doubts in the minds of its audience.",
  },
  {
    className: "status-haram",
    header: "NON-HALAL (Red)",
    desc: "Company fails Shariah compliance either at the business sector stage or by failing at least one of our five (5) financial ratio screens. The Company could also be given a non-Halal status if it fails at the final step of qualitative screening (stage 3).",
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
                  <p
                    className={`screening-step-question mb-2 ${
                      item.isUnboldedQuestion ? "fw-normal" : "fw-semibold"
                    }`}
                  >
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
          <div className="screening-status-column d-flex flex-column">
            {STATUS_BOXES.map((box, index) => (
              <div
                className={`screening-status-box pb-5 pb-lg-4 ${box.className}`}
                key={index}
              >
                {/* 1. HEADER */}
                <span
                  className="status-box-header"
                  style={{ position: "relative", zIndex: 3 }}
                >
                  {box.header}
                </span>

                {/* 2. BODY CONTENT */}
                <div
                  className="status-body-wrap"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    textAlign: "left",
                  }}
                >
                  <p className="status-box-desc">{box.desc}</p>

                  {/* Conditional Rendering for Yellow Box Blur Layer */}
                  {box.hasOverlay && (
                    <div className="status-disabled-overlay px-4 py-3">
                      <p className="status-overlay-message fw-normal text-start">
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
