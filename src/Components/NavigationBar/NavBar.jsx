import React, { useState } from "react";
import "../../styles.css";
import TopBar from "./TopBar.jsx";
import TickerBar from "./TickerBar.jsx";

const NAV_TABS = [
  {
    id: "about",
    label: "About",
    href: "#about",
    title: "Who We Are",
    description:
      "Learn about our mission, vision & the strong experience of our leadership team.",
    isSmallCaps: true,
  },
  {
    id: "shariah",
    label: "Shariah Compliance",
    href: "#shariah-compliance",
    title: "shariah Compliance Framework",
    description:
      "Discover our unique 3-stage Shariah screening criteria approved by top Islamic institutions.",
    isSmallCaps: true,
  },
  {
    id: "halal-stocks",
    label: "Halal Stocks",
    href: "#halal-stocks",
    title: "Halal Stocks List",
    description:
      "View our latest Halal stocks list letter signed by members of our Shariah Board.",
    isSmallCaps: true,
  },
  {
    id: "stock-plans",
    label: "Stock Plans",
    href: "#stock-plans",
    title: "Swing Trading Plans",
    description:
      "Trade using our premium stock recommendation plans covering small, mid and large-cap stocks.",
    isSmallCaps: true,
  },
  {
    id: "smallcases",
    label: "smallcases",
    href: "#smallcases",
    title: "Managed Model Portfolios",
    description:
      "Invest for the long-term through our smallcase portfolios as per your preferred theme or sector for a flat subscription fee.",
    isSmallCaps: true,
  },
  {
    id: "screener",
    label: "Halal Screener",
    href: "#screener",
    title: "Shariah compliance status",
    description:
      "Check the latest Shariah compliance status for any stock in our screening universe including the latest mainboard IPOs.",
    isSmallCaps: true,
  },
  {
    id: "blog",
    label: "Blog",
    href: "#blog",
    title: "Insights & Market Analysis",
    description:
      "Gain valuable insights into Shariah compliant investments and Islamic finance in India.",
    isSmallCaps: true,
  },
  {
    id: "tools",
    label: "Tools",
    href: "#tools",
    title: "Our Knowledge Hub",
    description:
      "Benefit from our free books, guides, videos & proprietary calculators to aid your trading and Shariah compliance.",
    isSmallCaps: true,
    isToolsDropdown: true, // Unique flag to render the interactive layout with buttons
  },
  {
    id: "Contact",
    label: "Contact",
    href: "https://zamzam-capital.com/contact/",
    title: "CONTACT US DIRECTLY",
    description: "We aim to respond to your queries within a 24-hour period",
    isSmallCaps: true,
  },
];

function renderFormattedTitle(text) {
  if (!text) return "";
  const keywords = ["I", "Islamic", "Halal", "Shariah"];
  return text.split(/(\s+)/).map((word, index) => {
    const cleanWord = word.trim();
    if (!cleanWord) return word;
    if (keywords.includes(cleanWord)) {
      return <span key={index}>{cleanWord}</span>;
    }
    return (
      <span
        key={index}
        style={{ fontVariant: "small-caps", textTransform: "lowercase" }}
      >
        {cleanWord.charAt(0).toUpperCase() + cleanWord.slice(1)}
      </span>
    );
  });
}

export default function MainNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeUnderbar, setActiveUnderbar] = useState(null);

  const halalListBtnStyle = {
    fontSize: "13px",
    padding: "6px 14px",
    backgroundColor: "#0fa978",
    color: "#ffffff",
    border: "1px solid #0fa978",
    transition: "all 0.2s ease-in-out",
  };

  const handleBtnMouseEnter = (e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "#0fa978";
  };

  const handleBtnMouseLeave = (e) => {
    e.target.style.backgroundColor = "#0fa978";
    e.target.style.color = "#ffffff";
  };

  return (
    <div className="Entirebar">
      <div className="upperitems">
        <TopBar />
        <TickerBar />
      </div>

      <nav
        className="zamzam-main-navbar sticky-top bg-white border-bottom shadow-sm"
        style={{ position: "relative" }}
      >
        <div
          className="container d-flex align-items-center justify-content-between py-0"
          style={{ height: "70px" }}
        >
          <div className="brand-logo-placeholder d-flex align-items-center">
            <a
              href="/"
              className="navbar-brand-logo d-flex align-items-center text-decoration-none"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV8qEniNDhbpmS4UTUHwJeVQCvq5oC9q2cIw&s"
                alt="Zamzam Capital Logo"
                className="img-fluid brand-logo-img"
                style={{
                  height: "38px",
                  maxHeight: "38px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </a>
          </div>

          <ul
            className="desktop-nav-menu d-none d-lg-flex align-items-stretch list-unstyled mb-0 gap-3"
            style={{
              height: "100%",
            }}
          >
            {NAV_TABS.map((tab) => (
              <li
                key={tab.id}
                className="zamzam-nav-item-host d-flex align-items-center"
                style={{
                  height: "100%",
                }}
                onMouseEnter={() => setActiveUnderbar(tab.id)}
                onMouseLeave={() => setActiveUnderbar(null)}
              >
                <a
                  href={tab.href}
                  className="nav-heading-link nav-static-link fw-semibold text-decoration-none d-flex align-items-center"
                  style={{ fontSize: "17px", height: "100%" }}
                >
                  {tab.label}
                </a>

                {activeUnderbar === tab.id && (
                  <div
                    className="zamzam-fullwidth-underbar border-bottom shadow-sm bg-white"
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: "100%",
                      width: "100%",
                      zIndex: 1000,
                    }}
                  >
                    <div className="container py-4 text-start">
                      <div className="row align-items-center">
                        {/* Text and context details column */}
                        <div
                          className={
                            tab.isToolsDropdown ? "col-lg-8" : "col-12"
                          }
                        >
                          <h5
                            className="underbar-title fw-bold text-dark mb-2"
                            style={{ fontSize: "16px" }}
                          >
                            {tab.isSmallCaps
                              ? renderFormattedTitle(tab.title)
                              : tab.title}
                          </h5>
                          <p
                            className="underbar-text text-muted mb-0"
                            style={{
                              fontSize: "14px",
                              maxWidth: "600px",
                              lineHeight: "1.5",
                            }}
                          >
                            {tab.description}
                          </p>
                        </div>

                        {/* Interactive dual-button overlay actions injected exclusively back into the Tools tab container */}
                        {tab.isToolsDropdown && (
                          <div className="col-lg-4 d-flex justify-content-lg-end gap-3 mt-3 mt-lg-0">
                            <a
                              href="#calculators"
                              className="btn fw-medium text-decoration-none rounded d-inline-flex align-items-center"
                              style={{
                                fontSize: "13px",
                                padding: "8px 16px",
                                backgroundColor: "#0fa978",
                                color: "#ffffff",
                                border: "1px solid #0fa978",
                                transition: "all 0.2s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#0c8e64";
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "#0fa978";
                              }}
                            >
                              Our Calculators
                            </a>
                            <a
                              href="#knowledge-hub"
                              className="btn fw-medium text-decoration-none rounded d-inline-flex align-items-center"
                              style={{
                                fontSize: "13px",
                                padding: "8px 16px",
                                backgroundColor: "transparent",
                                color: "#0fa978",
                                border: "1px solid #0fa978",
                                transition: "all 0.2s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.backgroundColor =
                                  "rgba(15, 169, 120, 0.05)";
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "transparent";
                              }}
                            >
                              Free Guides
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="desktop-actions d-none d-lg-flex align-items-center gap-3">
            <a
              href="mailto:support@zamzam-capital.com"
              className="btn fw-medium text-decoration-none rounded d-inline-flex align-items-center"
              style={halalListBtnStyle}
              onMouseEnter={handleBtnMouseEnter}
              onMouseLeave={handleBtnMouseLeave}
            >
              Halal Stocks List
            </a>
          </div>

          <button
            className="mobile-hamburger-trigger d-lg-none border-0 bg-transparent p-2 align-self-center"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Toggle navigation overlay drawer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0fa978"
              strokeWidth="2.5"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div
            className="mobile-drawer-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div
              className="mobile-drawer-content p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="drawer-header d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom">
                <span className="fw-bold brand-text-green fs-5">
                  Menu Navigation
                </span>
                <button
                  className="border-0 bg-transparent fs-3 text-muted p-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  &times;
                </button>
              </div>

              <div className="mobile-accordion-stack d-flex flex-column gap-2">
                {NAV_TABS.map((tab) => (
                  <div key={tab.id}>
                    <a
                      href={tab.href}
                      className="nav-static-link d-block py-2 text-decoration-none"
                      style={{ fontSize: "16px" }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {tab.label}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mobile-drawer-auth-actions d-flex flex-column gap-3 mt-5">
                <a
                  href="mailto:support@zamzam-capital.com"
                  className="btn text-center text-decoration-none rounded"
                  style={{ ...halalListBtnStyle, width: "100%" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Halal Stocks List
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
