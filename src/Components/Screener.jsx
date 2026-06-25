import React from "react";
import "../styles.css";

export default function StockScreenerModule() {
  const stockList = [
    {
      ticker: "RELIANCE",
      name: "Reliance Industries Limited",
      status: "Non-Halal",
    },
    {
      ticker: "ABFRL",
      name: "Aditya Birla Fashion and Retail Limited",
      status: "Halal",
    },
    {
      ticker: "HINDALCO",
      name: "Hindalco Industries Limited",
      status: "Halal",
    },
    {
      ticker: "TCS",
      name: "Tata Consultancy Services Limited",
      status: "Non-Halal",
    },
  ];

  const handleScreenerRedirect = () => {
    window.open(
      "https://screener.zamzam-capital.com/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      className="zz-screener-hero-section py-5 px-3 px-md-5"
      id="screener"
    >
      <div className="container-fluid max-w-1200 mx-auto">
        <div className="row g-4 align-items-center reverse-mobile-layout">
          <div className="col-lg-6 col-12 text-start d-flex flex-column justify-content-center order-1 mobile-top-center">
            <span className="screener-mini-pill-tag fw-bold text-uppercase tracking-wider mb-3">
              Halal Stock Screener
            </span>
            <h2 className="screener-main-title fw-extrabold text-white mb-3">
              Know if your stocks are Shariah-compliant?
            </h2>
            <p className="screener-support-desc text-white-50 mb-4">
              Check the Shariah status of over 2,000 NSE-listed stocks (greater
              than 500 Cr market cap.) screened as per Zamzam Capital&apos;s
              Shariah screening criteria using our unique 3-stage screening
              process. Filter by sector, industry, stock name or ticker. Updated
              for Mainboard IPOs and updated entirely every 6 months.
            </p>
            <button
              className="btn btn-screener-action py-2.5 px-4 rounded-3 fw-bold text-white d-inline-flex align-items-center justify-content-center gap-2 text-nowrap"
              onClick={handleScreenerRedirect}
            >
              Open Screener
              <span className="screener-btn-arrow">→</span>
            </button>
          </div>

          <div className="col-lg-6 col-12 order-2 mobile-bottom-stack">
            <div className="screener-preview-card p-4 rounded-4">
              <div className="d-flex flex-column gap-3">
                {stockList.map((stock, index) => {
                  const isHalal = stock.status === "Halal";
                  const statusBadgeClass = isHalal
                    ? "status-halal-clean"
                    : "status-nonhalal-alert";

                  return (
                    <div
                      key={`stock-preview-${stock.ticker}-${index}`}
                      className="stock-ticker-row px-3 py-2.5 rounded-3 d-flex align-items-center justify-content-between"
                    >
                      <div className="d-flex align-items-center gap-3 overflow-hidden me-2">
                        <span className="stock-short-ticker fw-extrabold text-white">
                          {stock.ticker}
                        </span>
                        <span className="stock-full-name text-white-50 text-truncate small">
                          {stock.name}
                        </span>
                      </div>
                      <span
                        className={`stock-compliance-badge px-3 py-1 rounded-pill fw-bold text-center ${statusBadgeClass}`}
                      >
                        {stock.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
