import React, { useState } from "react";
import "../../styles.css";
import TopBar from "./TopBar.jsx";
import TickerBar from "./TickerBar.jsx";

export default function MainNavbar() {
  // Mobile off-canvas drawer visibility state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Tracks which heading has its underbar open on desktop (null means closed)
  const [activeUnderbar, setActiveUnderbar] = useState(null);

  return (
    <div className="Entirebar">
      <div className="upperitems">
        <TopBar />
        <TickerBar />
      </div>

      <nav className="zamzam-main-navbar sticky-top bg-white border-bottom shadow-sm">
        <div className="container d-flex align-items-center justify-content-between py-3">
          {/* ========================================================
            BRAND LOGO SECTION
            ======================================================== */}
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

          {/* ========================================================
            NEW CENTERED NAVBAR HEADINGS (Desktop)
            ======================================================== */}
          <ul className="desktop-nav-menu d-none d-lg-flex align-items-center list-unstyled mb-0 gap-4">
            {/* Tab 1: About */}
            <li
              className="zamzam-nav-item-host"
              onMouseEnter={() => setActiveUnderbar("about")}
              onMouseLeave={() => setActiveUnderbar(null)}
            >
              <a
                href="#about"
                className="nav-heading-link fw-semibold text-decoration-none"
              >
                About
              </a>

              {/* SAMPLE UNDERBAR FOR ABOUT */}
              {activeUnderbar === "about" && (
                <div className="zamzam-fullwidth-underbar border-bottom shadow-sm">
                  <div className="container py-4">
                    <h5 className="underbar-title">About Zamzam Capital</h5>
                    <p className="underbar-text">
                      Learn about our mission, Shariah advisory board, and our
                      vision for ethical halal wealth generation.
                    </p>
                  </div>
                </div>
              )}
            </li>

            {/* Tab 2: Shariah Compliance */}
            <li
              className="zamzam-nav-item-host"
              onMouseEnter={() => setActiveUnderbar("compliance")}
              onMouseLeave={() => setActiveUnderbar(null)}
            >
              <a
                href="#compliance"
                className="nav-heading-link fw-semibold text-decoration-none"
              >
                Shariah Compliance
              </a>

              {/* SAMPLE UNDERBAR FOR SHARIAH COMPLIANCE */}
              {activeUnderbar === "compliance" && (
                <div className="zamzam-fullwidth-underbar border-bottom shadow-sm">
                  <div className="container py-4">
                    <h5 className="underbar-title">
                      Shariah Compliance Framework
                    </h5>
                    <p className="underbar-text">
                      Explore our comprehensive 5-step screening architecture
                      and purification calculation methodologies.
                    </p>
                  </div>
                </div>
              )}
            </li>

            {/* Tab 3: Halal Stocks */}
            <li
              className="zamzam-nav-item-host"
              onMouseEnter={() => setActiveUnderbar("stocks")}
              onMouseLeave={() => setActiveUnderbar(null)}
            >
              <a
                href="#halal-stocks"
                className="nav-heading-link fw-semibold text-decoration-none"
              >
                Halal Stocks
              </a>

              {/* SAMPLE UNDERBAR FOR HALAL STOCKS */}
              {activeUnderbar === "stocks" && (
                <div className="zamzam-fullwidth-underbar border-bottom shadow-sm">
                  <div className="container py-4">
                    <h5 className="underbar-title">Halal Stocks List</h5>
                    <p className="underbar-text">
                      Browse categorized equities meeting strict
                      debt-to-market-cap and liquid asset thresholds.
                    </p>
                  </div>
                </div>
              )}
            </li>

            {/* Tab 4: Trading Plans */}
            <li
              className="zamzam-nav-item-host"
              onMouseEnter={() => setActiveUnderbar("plans")}
              onMouseLeave={() => setActiveUnderbar(null)}
            >
              <a
                href="#trading-plans"
                className="nav-heading-link fw-semibold text-decoration-none"
              >
                Trading Plans
              </a>

              {/* SAMPLE UNDERBAR FOR TRADING PLANS */}
              {activeUnderbar === "plans" && (
                <div className="zamzam-fullwidth-underbar border-bottom shadow-sm">
                  <div className="container py-4">
                    <h5 className="underbar-title">Premium Access Tiers</h5>
                    <p className="underbar-text">
                      Choose between monthly and annual plans to unlock expert
                      screening insights and alerts.
                    </p>
                  </div>
                </div>
              )}
            </li>

            {/* Tab 5: smallcases */}
            <li
              className="zamzam-nav-item-host"
              onMouseEnter={() => setActiveUnderbar("smallcases")}
              onMouseLeave={() => setActiveUnderbar(null)}
            >
              <a
                href="#smallcases"
                className="nav-heading-link fw-semibold text-decoration-none"
              >
                smallcases
              </a>

              {/* SAMPLE UNDERBAR FOR SMALLCASES */}
              {activeUnderbar === "smallcases" && (
                <div className="zamzam-fullwidth-underbar border-bottom shadow-sm">
                  <div className="container py-4">
                    <h5 className="underbar-title">Managed Ideabaskets</h5>
                    <p className="underbar-text">
                      Invest instantly in diversified Shariah-vetted smallcases
                      via your existing stockbroker account.
                    </p>
                  </div>
                </div>
              )}
            </li>

            {/* Tab 6: Halal Screener */}
            <li
              className="zamzam-nav-item-host"
              onMouseEnter={() => setActiveUnderbar("screener")}
              onMouseLeave={() => setActiveUnderbar(null)}
            >
              <a
                href="#screener"
                className="nav-heading-link fw-semibold text-decoration-none"
              >
                Halal Screener
              </a>

              {/* SAMPLE UNDERBAR FOR HALAL SCREENER */}
              {activeUnderbar === "screener" && (
                <div className="zamzam-fullwidth-underbar border-bottom shadow-sm">
                  <div className="container py-4">
                    <h5 className="underbar-title">
                      Instant Financial Screener
                    </h5>
                    <p className="underbar-text">
                      Type any global ticker name to query real-time conformity
                      algorithms dynamically.
                    </p>
                  </div>
                </div>
              )}
            </li>

            {/* Tab 7: Blog */}
            <li
              className="zamzam-nav-item-host"
              onMouseEnter={() => setActiveUnderbar("blog")}
              onMouseLeave={() => setActiveUnderbar(null)}
            >
              <a
                href="#blog"
                className="nav-heading-link fw-semibold text-decoration-none"
              >
                Blog
              </a>

              {/* SAMPLE UNDERBAR FOR BLOG */}
              {activeUnderbar === "blog" && (
                <div className="zamzam-fullwidth-underbar border-bottom shadow-sm">
                  <div className="container py-4">
                    <h5 className="underbar-title">
                      Insights & Market Analysis
                    </h5>
                    <p className="underbar-text">
                      Read editorial write-ups, current Islamic finance
                      breakdowns, and market commentary.
                    </p>
                  </div>
                </div>
              )}
            </li>
          </ul>

          {/* ========================================================
            DESKTOP ACTION CTAs
            ======================================================== */}
          <div className="desktop-actions d-none d-lg-flex align-items-center gap-3">
            <a href="#login" className="btn zamzam-btn-outline">
              Halal Stocks List
            </a>
            <a
              href="https://zamzamcapital.smallcase.com/"
              className="btn zamzam-btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Smallcase
            </a>
          </div>

          {/* ========================================================
            MOBILE HAMBURGER TRIGGER
            ======================================================== */}
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

        {/* ========================================================
          MOBILE INTERACTIVE SLIDEOUT OFF-CANVAS BACKDROP DRAWERS
          ======================================================== */}
        {isMobileMenuOpen && (
          <div
            className="mobile-drawer-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div
              className="mobile-drawer-content p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Header Layout block */}
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

              {/* Mobile Vertical Headings Stream */}
              <div className="mobile-accordion-stack d-flex flex-column gap-3">
                <a
                  href="#about"
                  className="accordion-static-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#compliance"
                  className="accordion-static-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Shariah Compliance
                </a>
                <a
                  href="#halal-stocks"
                  className="accordion-static-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Halal Stocks
                </a>
                <a
                  href="#trading-plans"
                  className="accordion-static-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Trading Plans
                </a>
                <a
                  href="#smallcases"
                  className="accordion-static-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  smallcases
                </a>
                <a
                  href="#screener"
                  className="accordion-static-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Halal Screener
                </a>
                <a
                  href="#blog"
                  className="accordion-static-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </a>
              </div>

              {/* Mobile Authentication Call-To-Actions Container */}
              <div className="mobile-drawer-auth-actions d-flex flex-column gap-3 mt-5">
                <a
                  href="#login"
                  className="btn zamzam-btn-outline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Halal Stocks List
                </a>
                <a
                  href="https://zamzamcapital.smallcase.com/"
                  className="btn zamzam-btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Smallcase
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
