import React from "react";
import "../styles.css";
import Saif from "./SaifA.jpeg";

export default function FounderSection() {
  return (
    <section className="zz-founder-section py-5">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-4 col-md-5 col-12 text-center text-md-start">
            <div className="col-lg-4 col-md-5 col-12 text-center text-md-start">
              {/* 1. Removed the .founder-photo-frame and .founder-photo-placeholder divs entirely */}
              {/* 2. Added standard Bootstrap classes to the image */}
              <img
                src={Saif}
                alt="Saif Ahmad"
                className="img-fluid mx-auto d-block"
                style={{ maxWidth: "300px" }} // Keeps the original size limit while being free-floating
              />
            </div>
            <h3 className="founder-name fw-bold mt-3 mb-1">Saif Ahmed</h3>
            <p className="founder-title text-muted mb-0">
              Founder &amp; Managing Partner
            </p>
          </div>

          <div className="col-lg-8 col-md-7 col-12">
            <span className="authority-pill d-inline-block mb-3 text-uppercase fw-bold">
              Leadership Quote
            </span>
            <blockquote className="founder-quote mb-0">
              <p className="founder-quote-text mb-3">
                &ldquo;Wealth creation should never come at a cost of one's
                ethical values. At Zamzam Capital, we bridge this gap between
                financial excellence and Shariah integrity.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
