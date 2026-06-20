import React from "react";
import "../styles.css";

const TESTIMONIALS = [
  {
    quote:
      "Working in finance, I have high standards for research quality. Zamzam Capital exceeds them. Their model portfolios are well-constructed, and their monthly reports are incredibly insightful.",
    name: "Ayesha Rahman",
    role: "Financial Analyst, Delhi",
    initials: "AR",
  },
  {
    quote:
      "Working in finance, I have high standards for research quality. Zamzam Capital exceeds them. Their model portfolios are well-constructed, and their monthly reports are incredibly insightful.",
    name: "Ayesha Rahman",
    role: "Financial Analyst, Delhi",
    initials: "AR",
  },
  {
    quote:
      "Working in finance, I have high standards for research quality. Zamzam Capital exceeds them. Their model portfolios are well-constructed, and their monthly reports are incredibly insightful.",
    name: "Ayesha Rahman",
    role: "Financial Analyst, Delhi",
    initials: "AR",
  },
];

export default function Testimonials() {
  const dualStream = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="zz-testimonials-section py-5">
      <div className="container text-center mb-4">
        <span className="authority-pill d-inline-block mb-3 text-uppercase fw-bold">
          Testimonials
        </span>
        <h2 className="authority-main-heading fw-extrabold mb-3">
          Trusted by{" "}
          <span className="brand-text-green">5,000+</span> Investors in India
          &amp; Abroad
        </h2>
        <p className="authority-subtext mx-auto">
          Hear from our community of ethical investors who have transformed their
          financial futures with Zamzam Capital.
        </p>
      </div>

      <div className="zz-testimonial-marquee-viewport overflow-hidden">
        <div className="zz-testimonial-marquee-track">
          {dualStream.map((item, idx) => (
            <div className="zz-testimonial-card" key={`testimonial-${idx}`}>
              <div className="testimonial-quote-icon brand-text-green mb-3">
                &ldquo;
              </div>
              <p className="testimonial-text mb-4">{item.quote}</p>
              <div className="d-flex align-items-center gap-3">
                <div className="testimonial-avatar">{item.initials}</div>
                <div className="text-start">
                  <div className="testimonial-name fw-bold">{item.name}</div>
                  <div className="testimonial-role text-muted small">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
