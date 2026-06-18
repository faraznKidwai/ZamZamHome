import React from "react";
import { triggerSmallcaseAction } from "./SmallcaseBridge";

export function SmallcaseReplicaCard({ item, hideFooter = false }) {
  const volClass = item.volatility.toLowerCase().includes("high")
    ? "high-vol"
    : "low-vol";

  return (
    <div className="sc-replica-card text-start bg-white rounded-3 shadow-sm d-flex flex-column justify-content-between h-100">
      <div className="p-4 pb-3">
        {/* Header Block */}
        <div className="d-flex gap-3 align-items-start mb-3">
          <div className="sc-card-icon-frame d-flex align-items-center justify-content-center rounded-3">
            {item.icon}
          </div>
          <div>
            <h4 className="sc-card-title fw-bold text-dark m-0">{item.name}</h4>
            <p className="sc-card-desc text-muted mt-1 mb-0">{item.desc}</p>
          </div>
        </div>

        {/* Info Rows */}
        <div className="row g-2 align-items-center mb-4">
          <div className="col-5">
            <span className={`sc-vol-badge ${volClass}`}>
              <span className="bullet">●</span> {item.volatility}
            </span>
          </div>
          <div className="col-3 text-center">
            <div className="sc-metric-label text-muted">
              {item.returnsLabel}
            </div>
            <div className="sc-metric-val text-success fw-bold">
              {item.returnsVal}
            </div>
          </div>
          <div className="col-4 text-end">
            <button
              className="btn btn-outline-primary btn-sm rounded-2 px-3 fw-semibold spec-perf-btn"
              onClick={() => triggerSmallcaseAction(item.scid)}
            >
              See Performance
            </button>
          </div>
        </div>

        {/* Creator Specs Block */}
        <div className="row text-start pt-2 border-top border-light">
          <div className="col-4">
            <div className="sc-metric-label text-muted">Created by</div>
            <div className="sc-author-val fw-bold text-dark">
              Zamzam Capital
            </div>
          </div>
          <div className="col-4">
            <div className="sc-metric-label text-muted">Portfolio update</div>
            <div className="sc-author-val fw-bold text-dark">
              {item.updateFreq}
            </div>
          </div>
          <div className="col-4 text-end">
            <div className="sc-metric-label text-muted">Min. investment</div>
            <div className="sc-author-val fw-bold text-dark">
              {item.minInvest}
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally rendered footer banner based on parent layout rules */}
      {!hideFooter && (
        <div className="sc-card-footer bg-light px-4 py-3 border-top d-flex align-items-center justify-content-between rounded-bottom-3">
          <p className="sc-footer-disclaimer text-muted m-0">
            smallcases are portfolios of stocks or ETFs, weighted intelligently
            to track a theme, strategy or objective
          </p>
          <button
            className="btn btn-primary fw-bold px-4 py-2 text-nowrap"
            onClick={() => triggerSmallcaseAction(item.scid)}
          >
            View smallcase
          </button>
        </div>
      )}
    </div>
  );
}
