import React from "react";
import "../styles.css";

export default function FounderSection() {
  return (
    <section className="zz-founder-section py-5">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-4 col-md-5 col-12 text-center text-md-start">
            <div className="founder-photo-frame mx-auto mx-md-0">
              <div className="founder-photo-placeholder d-flex align-items-center justify-content-center">
                <span className="founder-initials fw-bold">SA</span>
              </div>
            </div>
            <h3 className="founder-name fw-bold mt-3 mb-1">Saif Ahmed</h3>
            <p className="founder-title text-muted mb-0">
              Founder &amp; Managing Partner
            </p>
          </div>

          <div className="col-lg-8 col-md-7 col-12">
            <span className="authority-pill d-inline-block mb-3 text-uppercase fw-bold">
              Leadership
            </span>
            <blockquote className="founder-quote mb-0">
              <p className="founder-quote-text mb-3">
                &ldquo;So far only the rich have had access to the right
                financial products. We are changing that by ensuring every
                investor has dedicated experts to help them grow wealth
                ethically — without compromising their faith.&rdquo;
              </p>
              <footer className="founder-quote-footer text-muted">
                — Saif Ahmed, Founder &amp; Managing Partner, Zamzam Capital
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
