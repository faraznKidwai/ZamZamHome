import React, { useState } from "react";
import "../../styles.css";
import TopBar from "./TopBar.jsx";
import TickerBar from "./TickerBar.jsx";

const NAV_TABS = [
  {
    id: "about",
    label: "About",
    href: "#about",
    title: "About Zamzam Capital",
    description:
      "Learn about our mission, Shariah advisory board, and our vision for ethical halal wealth generation.",
  },
  {
    id: "shariah",
    label: "Shariah Compliance",
    href: "#shariah-compliance",
    title: "Shariah Compliance Framework",
    description:
      "Our rigorous screening methodology follows Mufti Taqi Usmani (DB) criteria, endorsed by leading Islamic seminaries in India.",
  },
  {
    id: "halal-stocks",
    label: "Halal Stocks",
    href: "#halal-stocks",
    title: "Halal Stocks List",
    description:
      "Access our regularly updated list of Shariah-compliant NSE-listed stocks screened using our proprietary 3-stage process.",
  },
  {
    id: "stock-plans",
    label: "Stock Plans",
    href: "#stock-plans",
    title: "Premium Stock Recommendation Service",
    description:
      "Browse categorized equities meeting strict debt-to-market-cap and liquid asset thresholds with expert research support.",
  },
  {
    id: "smallcases",
    label: "smallcases",
    href: "#smallcases",
    title: "Managed Ideabaskets",
    description:
      "Invest instantly in diversified Shariah-vetted smallcases via your existing stockbroker account.",
  },
  {
    id: "screener",
    label: "Screener",
    href: "#screener",
    title: "Instant Financial Screener",
    description:
      "Type any NSE ticker name to query real-time Shariah conformity status using our screening algorithms.",
  },
  {
    id: "blog",
    label: "Blog",
    href: "#blog",
    title: "Insights & Market Analysis",
    description:
      "Read editorial write-ups, current Islamic finance breakdowns, and market commentary.",
  },
  {
    id: "tools",
    label: "Tools",
    href: "#tools",
    title: "Tools for financial needs",
    links: [
      { label: "Zakat Calculator", href: "#zakat-calc" },
      { label: "Position Size Calculator", href: "#position-calc" },
    ],
  },
];

export default function MainNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeUnderbar, setActiveUnderbar] = useState(null);

  return (
    <div className="Entirebar">
      <div className="upperitems">
        <TopBar />
        <TickerBar />
      </div>

      <nav className="zamzam-main-navbar sticky-top bg-white border-bottom shadow-sm">
        <div className="container d-flex align-items-center justify-content-between py-3">
          <div className="brand-logo-placeholder d-flex align-items-center justify-content-center">
            <a
              href="/"
              className="navbar-brand-logo d-flex align-items-center text-decoration-none"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV8qEniNDhbpmS4UTUHwJeVQCvq5oC9q2cIw&s"
                alt="Zamzam Capital Logo"
                className="img-fluid brand-logo-img"
                style={{
                  height: "auto",
                  maxHeight: "38px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </a>
          </div>

          <ul
            className="desktop-nav-menu d-none d-lg-flex align-items-center list-unstyled mb-0 gap-3"
            style={{ position: "relative" }}
          >
            {NAV_TABS.map((tab) => (
              <li
                key={tab.id}
                className="zamzam-nav-item-host"
                style={{ paddingBottom: "15px", marginBottom: "-15px" }}
                onMouseEnter={() => setActiveUnderbar(tab.id)}
                onMouseLeave={() => setActiveUnderbar(null)}
              >
                <a
                  href={tab.href}
                  className="nav-heading-link nav-static-link fw-semibold text-decoration-none"
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
                      width: "100vw",
                      marginLeft: "calc(-50vw + 50%)",
                      zIndex: 1000,
                    }}
                  >
                    <div className="container py-4 text-start">
                      <h5
                        className="underbar-title fw-bold text-dark mb-2"
                        style={{ fontSize: "16px" }}
                      >
                        {tab.title}
                      </h5>
                      {tab.links ? (
                        <div className="d-flex flex-wrap align-items-center gap-3 mt-3">
                          {tab.links.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.href}
                              className="btn zamzam-btn-outline px-3 py-2 fw-medium text-decoration-none"
                              style={{ fontSize: "14px" }}
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      ) : (
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
                      )}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="desktop-actions d-none d-lg-flex align-items-center gap-3">
            <a
              href="mailto:support@zamzam-capital.com"
              className="btn zamzam-btn-outline"
            >
              Halal Stocks List
            </a>
          </div>

          <button
            className="mobile-hamburger-trigger d-lg-none border-0 bg-transparent p-2"
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
                  className="border-0 bg-transparent fs-3 text-muted p-1 line-height-none"
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
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {tab.label}
                    </a>
                    {tab.links && (
                      <div className="ps-3 d-flex flex-column gap-2 my-1 border-start border-start-brand">
                        {tab.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.href}
                            className="nav-static-link py-1 text-muted text-decoration-none"
                            style={{ fontSize: "13px" }}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mobile-drawer-auth-actions d-flex flex-column gap-3 mt-5">
                <a
                  href="mailto:support@zamzam-capital.com"
                  className="btn zamzam-btn-outline"
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
