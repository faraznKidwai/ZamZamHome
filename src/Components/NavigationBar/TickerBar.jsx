import React from "react";
import tickerData from "../../data/TickerData.json";
import "../../styles.css";

export default function TickerBar() {
  return (
    <div className="ticker-container">
      <div className="ticker-wrapper">
        {/* We duplicate the data for a seamless infinite loop animation */}
        {[...tickerData, ...tickerData].map((stock, index) => {
          const isPositive = stock.changePercent >= 0;
          const statusClass = isPositive ? "text-success" : "text-danger";

          return (
            <div key={`${stock.id}-${index}`} className="ticker-item">
              <span
                className={`status-dot ${
                  isPositive ? "bg-success" : "bg-danger"
                }`}
              ></span>
              <span className={`ticker-name ${statusClass}`}>{stock.name}</span>
              <span className={`ticker-change ${statusClass}`}>
                {isPositive ? "+" : ""}
                {stock.changePercent}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
