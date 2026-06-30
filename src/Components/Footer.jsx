import React from "react";
import "../styles.css";

export default function CorporateFooter() {
  return (
    <footer className="zamzam-sebi-exact-footer py-5 px-3 px-md-5">
      <div className="container-fluid max-w-1200 mx-auto ">
        {/* ==================== UPPER SECTION: 3-COLUMN COMPLIANCE ADDRESS MATRIX ==================== */}
        {/* Added justify-content-center to balance columns cleanly on medium viewports */}
        <div className="row g-4 mb-4 exact-footer-grid justify-content-center text-center">
          {/* Column 1: Analyst Details */}
          <div className="col-lg-4 col-md-6 col-12">
            <h5 className="exact-grid-heading fw-bold mb-2">
              SEBI Registered Research Analyst Details:
            </h5>
            <p className="exact-grid-text m-0">
              Registration Name: Zamzam Capital
              <br />
              Type of Registration: Non-Individual
              <br />
              Registration No: INH000016199
              <br />
              Validity: Jun 12, 2024 – Perpetual
            </p>
            <p className="exact-grid-text mt-3 m-0">
              Principal Officer: Mr. Saif Ahmed
              <br />
              Email: po@zamzam-capital.com
              <br />
              Tel: +91 8694010200
            </p>
          </div>

          {/* Column 2: SEBI Office Address */}
          <div className="col-lg-4 col-md-6 col-12">
            <h5 className="exact-grid-heading fw-bold mb-2">
              SEBI Office Address:
            </h5>
            <p className="exact-grid-text m-0">
              7th Floor, 756-L, Anna Salai
              <br />
              Chennai – 600002, Tamil Nadu
              <br />
              Tel. Board: +91-44- 28880222 / 28526686
              <br />
              E-mail : sebisro@sebi.gov.in
            </p>
            <p className="exact-grid-text mt-3 m-0">
              Compliance Officer: Mr. Shafik Ahmed
              <br />
              Email: co@zamzam-capital.com
              <br />
              Tel: +91 8694010200
            </p>
          </div>

          {/* Column 3: Registered Address */}
          <div className="col-lg-4 col-md-6 col-12">
            <h5 className="exact-grid-heading fw-bold mb-2">
              Registered Address:
            </h5>
            <p className="exact-grid-text m-0">
              No. 6 Berlie Street
              <br />
              Langford Town
              <br />
              Shanthinagar
              <br />
              Bangalore – 560025, Karnataka
            </p>
            <p className="exact-grid-text mt-3 m-0">
              Grievance Officer: Mr. Shafik Ahmed
              <br />
              Email: go@zamzam-capital.com
              <br />
              Tel: +91 8694010200
            </p>
          </div>
        </div>

        <hr className="exact-footer-divider my-4" />

        {/* ==================== MIDDLE SECTION: DETAILED GRIEVANCE & MOBILE LINKS ==================== */}
        <div className="exact-compliance-narrative d-flex flex-column gap-3 mb-4">
          <p className="m-0">
            For any service related assistance or grievances, you can reach us
            at{" "}
            <a
              href="mailto:support@zamzam-capital.com"
              className="exact-text-link"
            >
              support@zamzam-capital.com
            </a>
            . We take minimum 15 working days to respond or to come up with the
            solution of your query. If you are unsatisfied with our response
            then you can escalate your issue to SEBI{" "}
            <a
              href="https://scores.sebi.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="exact-lime-link text-decoration-underline text-uppercase fw-bold"
            >
              SCORES
            </a>
            .
          </p>
          <p className="m-0">
            With regard to physical complaints, investors may send their
            complaints to: Office of Investor Assistance and Education,
            Securities and Exchange Board of India, SEBI Bhavan. Plot No. C4-A,
            ‘G’ Block, Bandra-Kurla Complex, Bandra (E), Mumbai – 400 051.
          </p>
          <p className="m-0">
            <a
              href="#"
              className="exact-lime-link text-decoration-underline fw-bold"
            >
              ODR Portal
            </a>{" "}
            could be accessed, if unsatisfied with the response. Your attention
            is drawn to the SEBI circular no.
            SEBI/HO/OIAE/OIAE_IAD-1/P/CIR/2023/131 dated July 31, 2023, on
            “Online Resolution of Disputes in the Indian Securities Market”.
          </p>
          <p className="m-0 exact-store-links">
            Google Play:{" "}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://play.google.com/store/search?q=sebi+scores&c=apps
            </a>{" "}
            (Or) Search for “SEBI SCORES” in Google Play Link to SEBI Scores App
            <br />
            Apple Store:{" "}
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://apps.apple.com/in/app/sebiscores/id1493257302
            </a>{" "}
            (Or) Search for “SEBI SCORES” in Apple App Store on website
          </p>
        </div>

        <hr className="exact-footer-divider my-4" />

        {/* ==================== REGULATORY DISCLAIMER / STANDARD WARNING WARNINGS ==================== */}
        <div className="exact-regulatory-disclaimers mb-5">
          <p className="m-0 mb-2">
            <span className="fw-bold fst-italic">Disclaimer:</span>{" "}
            “Registration granted by SEBI and certification from NISM in no way
            guarantee performance of the intermediary or provide any assurance
            of returns to investors.”
          </p>
          <p className="m-0">
            <span className="fw-bold fst-italic">Standard warning:</span>{" "}
            “Investment in securities market are subject to market risks. Read
            all the related documents carefully before investing.”
          </p>
        </div>
      </div>

      {/* ==================== LOWER SECTION: WHITE STRIP COMPLAINTS & INTERNAL LINKS BAR ==================== */}
      <div className="exact-bottom-white-bar py-4 text-center">
        <div className="container-fluid max-w-1200 mx-auto px-3">
          <p className="exact-utility-links m-0">
            © All Rights Reserved | <a href="#">Complaints Board</a> |{" "}
            <a href="#">Terms & Conditions</a> |{" "}
            <a href="#">Grievance Redressal Process</a> |{" "}
            <a href="#">Individual Code of Conduct</a> |{" "}
            <a href="#">Disclosure Advice</a>
          </p>
          <p className="exact-utility-links m-0 mt-2">
            <a href="#">Privacy Policy</a> | <a href="#">Internal Policy</a> |{" "}
            <a href="#">AML Policy</a> | <a href="#">Refund Policy</a> |{" "}
            <a href="#">Disclosure</a> | <a href="#">Disclaimer</a> |{" "}
            <a href="#">Investor Charter</a> | Zamzam Capital (#INH000016199)
          </p>
        </div>
      </div>
    </footer>
  );
}
