import React from "react";
import useStockTicker from "../../hooks/useStockTicker";
import "../../styles.css";

export default function TickerBar() {
  const { stocks } = useStockTicker();

  // Handle loading or empty states gracefully
  if (!stocks || stocks.length === 0) return null;

  // Render helper to avoid duplicating HTML markup blocks manually
  const renderTickerList = () => (
    <div className="ticker-track">
      {stocks.map((stock, index) => {
        const isPositive = stock.changePercent >= 0;
        const statusClass = isPositive ? "text-success" : "text-danger";

        return (
          <div key={`${stock.symbol}-${index}`} className="ticker-item">
            <span
              className={`status-dot ${
                isPositive ? "bg-success" : "bg-danger"
              }`}
            ></span>
            <span className={`ticker-name ${statusClass}`}>{stock.symbol}</span>
            <span className={`ticker-change ${statusClass}`}>
              {isPositive ? "+" : ""}
              {stock.changePercent}%
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="ticker-container">
      <div className="ticker-wrapper">
        {/* Track 1: The original viewing track */}
        {renderTickerList()}
        {/* Track 2: The mirror copy track that creates the illusion of infinite flow */}
        {renderTickerList()}
      </div>
    </div>
  );
}
