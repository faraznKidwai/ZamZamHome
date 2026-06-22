import React from "react";
import "../styles.css";

const STEPS = [
  {
    step: "STEP 1",
    title: "Business Activity Check",
    question: "Is the main business halal?",
    details: [
      "HALAL: Tech, healthcare, education, logistics",
      "HARAM: Alcohol, gambling, pork, interest-based banks",
    ],
  },
  {
    step: "STEP 2",
    title: "Financial Ratio Check (AAOIFI)",
    details: [
      { label: "Interest-bearing debt", value: "< 33% of total assets" },
      { label: "Non-compliant investments", value: "< 33% of total assets" },
      { label: "Non-halal revenue", value: "< 5% of total revenue" },
    ],
  },
  {
    step: "STEP 3",
    title: "Quantitative Screening Check",
    details: [
      { label: "Non-liquid assets", value: "≥ 20% of total assets" },
      {
        label: "Market cap vs net liquid assets",
        value: "Market cap > net liquid assets",
      },
      { label: "Qualitative review", value: "Manual scholar verification" },
    ],
  },
];

const STATUS_BOXES = [
  {
    className: "status-halal",
    header: "Halal (Green)",
    desc: "Company passes all business operations and financial ratio screens smoothly.",
  },
  {
    className: "status-doubtful",
    header: "Doubtful (Yellow)",
    desc: "This text will be blurred out visually by the structural layout overlay block sitting on top of it.",
    hasOverlay: true,
    overlayText: "ZamZam believes in giving clarity, not doubtfulness.",
  },
  {
    className: "status-haram",
    header: "Haram (Red)",
    desc: "Company fails essential structural thresholds or core activities rely heavily on interest.",
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
