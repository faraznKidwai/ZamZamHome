import React from "react";
import "../../styles.css";

const BROKERS = [
  {
    name: "Zerodha",
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" fill="#247ec3" />
        <path d="M11 11h6a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4h-6z" fill="#fff" />
        <rect x="11" y="11" width="4" height="11" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Groww",
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" fill="#00d09c" />
        <path
          d="M9 19c2-3 4-5 7-5s5 2 7 5"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M13 15c1.5-2 3.5-3 6-3"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "Upstox",
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" fill="#3f216b" />
        <text
          x="16"
          y="20"
          fill="#fff"
          fontSize="11"
          fontWeight="bold"
          textAnchor="middle"
          fontFamily="sans-serif"
        >
          up
        </text>
      </svg>
    ),
  },
  {
    name: "Angel One",
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" fill="#1c56ec" />
        <path d="M16 8l7 12H9z" fill="#fff" opacity="0.3" />
        <path d="M16 11l5 8H11z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "HDFC Sec",
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" fill="#004c8f" />
        <rect
          x="10"
          y="10"
          width="12"
          height="12"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
        />
        <rect x="14" y="14" width="4" height="4" fill="#ff0000" />
      </svg>
    ),
  },
  {
    name: "SBI Sec",
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" fill="#440066" />
        <circle
          cx="16"
          cy="16"
          r="7"
          fill="none"
          stroke="#00bfff"
          strokeWidth="3"
        />
        <rect x="14" y="19" width="4" height="5" fill="#440066" />
      </svg>
    ),
  },
  {
    name: "Paytm Money",
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" fill="#0f4fa8" />
        <path d="M16 8l7 7-7 7-7-7z" fill="#fff" />
        <text
          x="16"
          y="18"
          fill="#0f4fa8"
          fontSize="8"
          fontWeight="bold"
          textAnchor="middle"
        >
          ₹
        </text>
      </svg>
    ),
  },
  {
    name: "AxisDirect",
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" fill="#ae1c59" />
        <path d="M16 8l7 13h-4l-3-6-3 6H9z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Kotak Sec",
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" fill="#16325c" />
        <circle
          cx="12"
          cy="16"
          r="5"
          fill="none"
          stroke="#e61a22"
          strokeWidth="2.5"
        />
        <circle
          cx="20"
          cy="16"
          r="5"
          fill="none"
          stroke="#fff"
          strokeWidth="2.5"
        />
      </svg>
    ),
  },
  {
    name: "HDFC SKY",
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" fill="#2b59ff" />
        <path
          d="M9 20c2-4 5-6 7-6s5 2 7 6"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />
        <path
          d="M11 15c2-3 4-4 5-4s3 1 5 4"
          fill="none"
          stroke="#79b3ff"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    name: "5paisa",
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" fill="#9e0b0f" />
        <path
          d="M11 21V11h5a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-5"
          fill="none"
          stroke="#fff"
          strokeWidth="2.5"
        />
      </svg>
    ),
  },
  {
    name: "ICICI Direct",
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" fill="#df4d12" />
        <text
          x="16"
          y="21"
          fill="#fff"
          fontSize="15"
          fontWeight="bold"
          fontStyle="italic"
          textAnchor="middle"
          fontFamily="Georgia"
        >
          i
        </text>
      </svg>
    ),
  },
  {
    name: "Motilal Oswal",
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" fill="#1b1c64" />
        <text
          x="16"
          y="19"
          fill="#fff"
          fontSize="10"
          fontWeight="bold"
          textAnchor="middle"
        >
          mo
        </text>
      </svg>
    ),
  },
  {
    name: "IIFL Capital",
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" fill="#c38827" />
        <path d="M16 8l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Dhan",
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" fill="#128755" />
        <text
          x="16"
          y="21"
          fill="#fff"
          fontSize="13"
          fontWeight="bold"
          textAnchor="middle"
          fontFamily="sans-serif"
        >
          ध
        </text>
      </svg>
    ),
  },
  {
    name: "Nuvama",
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" fill="#0c4294" />
        <circle
          cx="16"
          cy="16"
          r="6"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />
        <path
          d="M16 6v4M16 22v4M6 16h4M22 16h4"
          stroke="#fff"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    name: "Alice Blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" fill="#002244" />
        <circle
          cx="16"
          cy="16"
          r="6"
          fill="none"
          stroke="#00ff66"
          strokeWidth="2"
        />
        <circle
          cx="16"
          cy="16"
          r="3"
          fill="none"
          stroke="#0099ff"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    name: "FundzBazar",
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" fill="#052c65" />
        <circle cx="13" cy="14" r="3" fill="#ff6600" />
        <circle cx="20" cy="14" r="3" fill="#fff" />
        <path d="M11 20q5 4 10 0" fill="none" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Trustline",
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" fill="#0080ff" />
        <rect x="10" y="10" width="5" height="5" fill="#fff" />
        <rect x="17" y="10" width="5" height="5" fill="#fff" />
        <rect x="10" y="17" width="5" height="5" fill="#fff" />
        <rect x="17" y="17" width="5" height="5" fill="#fff" />
      </svg>
    ),
  },
];

export default function BrokerMarquee() {
  const renderBrokerList = () => (
    <div className="marquee-track">
      {BROKERS.map((broker, idx) => (
        <div className="broker-badge" key={`${broker.name}-${idx}`}>
          <div className="broker-icon-wrapper">{broker.icon}</div>
          <span className="broker-name">{broker.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="broker-section-layout py-2 bg-white border-top border-bottom">
      {/* Stationary Left Side Label Header */}
      <div className="marquee-stationary-label">Supported Brokers</div>

      {/* Scroll Window Area */}
      <div className="broker-marquee-container">
        <div className="marquee-wrapper">
          {renderBrokerList()}
          {renderBrokerList()}
        </div>
      </div>
    </div>
  );
}
