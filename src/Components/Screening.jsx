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
    label: "GREEN – HALAL",
    desc: "Passes business, financial ratio, and quantitative checks. Safe to invest.",
  },
  {
    className: "status-doubtful",
    label: "DOUBTFUL",
    desc: "A stock is either Halal or Non-Halal — not in between.",
    rejected: true,
    overlayText: "ZamZam believes in clarity not doubtfulness",
  },
  {
    className: "status-haram",
    label: "RED – NOT HALAL",
    desc: "Fails Shariah check. Avoid investing.",
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

          <div className="screening-status-column">
            {STATUS_BOXES.map((box) => (
              <div
                className={`screening-status-box ${box.className} ${
                  box.rejected ? "status-rejected" : ""
                }`}
                key={box.label}
              >
                <h4 className="status-box-label fw-bold mb-2">{box.label}</h4>
                <p className="status-box-desc mb-0">{box.desc}</p>

                {/* Modern overlay container instead of an absolute text-decoration strike line */}
                {box.rejected && box.overlayText && (
                  <div className="status-disabled-overlay">
                    <span className="status-overlay-message">
                      {box.overlayText}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
