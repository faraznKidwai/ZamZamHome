import React from "react";
import "../../styles.css";

const BROKERS = [
  {
    name: "Zerodha",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main left/bottom blue block with a rounded top-left corner */}
        <path
          d="M 10 90 
             L 10 38 
             A 28 28 0 0 1 38 10 
             L 47 10 
             C 68 25, 78 50, 78 90 
             Z"
          fill="#387ed1"
        />

        {/* Small top-right blue accent piece */}
        <path
          d="M 59 10 
             L 90 10 
             L 90 44 
             C 87 31, 75 19, 59 10 
             Z"
          fill="#387ed1"
        />
      </svg>
    ),
  },
  {
    name: "Groww",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base Circle (Mint Green / Bottom half) */}
        <circle cx="50" cy="50" r="50" fill="#00d09c" />

        {/* Upper Half (Blue) shaped by the wave path */}
        <path
          d="M 0 50 
             A 50 50 0 0 1 100 50 
             L 100 25
             C 80 45, 70 60, 57 53
             C 46 47, 40 45, 36 47
             C 23 55, 12 65, 0 71 
             Z"
          fill="#5367ff"
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
      <svg
        width="24"
        height="24"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Set uniform style for rounded corner triangles */}
        <g
          fill="#2456FF"
          stroke="#2456FF"
          strokeWidth="2"
          strokeLinejoin="round"
        >
          {/* Row 1 (Top) */}
          <polygon points="35,32 47,32 41,41" />

          {/* Row 2 */}
          <polygon points="25,45 37,45 31,54" />
          <polygon points="45,45 57,45 51,54" />

          {/* Row 3 */}
          <polygon points="15,58 27,58 21,67" />
          <polygon points="35,58 47,58 41,67" />
          <polygon points="55,58 67,58 61,67" />

          {/* Row 4 (Bottom) */}
          <polygon points="5,71  17,71 11,80" />
          <polygon points="25,71 37,71 31,80" />
          <polygon points="45,71 57,71 51,80" />
          <polygon points="65,71 77,71 71,80" />
        </g>

        {/* The main right slanted pillar with perfectly matched proportions and sharp edges */}
        <polygon points="44,6 35,16 82,88 95,88" fill="#2456FF" />
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
      <svg
        width="24"
        height="24"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Sky Blue Triangle */}
        <polygon points="50,5 96,73 4,73" fill="#00baf2" />

        {/* Foreground Deep Navy Triangle (Shifted Downwards) */}
        <polygon points="48,27 96,93 0,93" fill="#1d366d" />

        {/* Center White Indian Rupee Symbol (₹) */}
        <g
          stroke="#ffffff"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Top Horizontal Bar */}
          <line x1="39" y1="52" x2="57" y2="52" />
          {/* Middle Horizontal Bar */}
          <line x1="39" y1="59" x2="55" y2="59" />
          {/* The Curved R-shape and Slanted Leg */}
          <path d="M 43 52 C 55 52, 55 68, 43 68 L 56 82" fill="none" />
          {/* Vertical Stem */}
          <line x1="43" y1="52" x2="43" y2="68" />
        </g>
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
      <svg
        width="24"
        height="24"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base shape: A squircle/rounded square with a linear blue gradient */}
        <rect width="100" height="100" rx="35" fill="url(#hdfcSkyGradient)" />

        {/* The cutout "S" / Lightning path */}
        <path
          d="M78 15 L24.5 48 C18.5 51.5 22 59 28 58 L54 53.5 L22 79.5 L73 47 C79 43 75.5 36.5 69.5 37 L46.5 39 L78 15 Z"
          fill="#ffffff"
        />

        <defs>
          <linearGradient
            id="hdfcSkyGradient"
            x1="50"
            y1="0"
            x2="50"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#4A90E2" />
            <stop offset="100%" stopColor="#0046D5" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "5paisa",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Deep Red Circle Base */}
        <circle cx="50" cy="50" r="50" fill="#9e0b0f" />

        {/* Silver Coin Overlay (Diagonal Slice across the left/bottom) */}
        <g>
          {/* Coin Background Body */}
          <path
            d="M -5 105 
               L -5 32 
               C 25 24, 60 40, 91 82 
               L 55 105 
               Z"
            fill="url(#coinSilver)"
          />

          {/* Embossed Inner Ridge / Rim Arc */}
          <path
            d="M -5 36 
               C 22 29, 54 44, 82 82"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            fill="none"
          />

          {/* Styled Embossed Numeral '5' */}
          <path
            d="M 5 62 
               L 32 55 
               C 40 53, 49 57, 45 66 
               C 42 72, 32 82, 21 84 
               L 15 85
               M 10 52 
               L 5 62"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Shadow layer for '5' depth */}
          <path
            d="M 6 63 
               L 33 56 
               C 41 54, 50 58, 46 67 
               C 43 73, 33 83, 22 85"
            stroke="#4a4a4a"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.3"
            fill="none"
          />
        </g>

        {/* Metallic Silver Gradient Definition */}
        <defs>
          <linearGradient
            id="coinSilver"
            x1="0"
            y1="30"
            x2="60"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#E6E6E6" />
            <stop offset="35%" stopColor="#AEB2B5" />
            <stop offset="70%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#8C9093" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "ICICI Direct",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Solid Orange Canvas */}
        <rect width="100" height="100" fill="#f58220" />

        {/* The White Outer Halo/Border */}
        <ellipse
          cx="54"
          cy="50"
          rx="26"
          ry="38"
          transform="rotate(-22 54 50)"
          fill="#ffffff"
        />

        {/* The Central Tilted Maroon Oval */}
        <ellipse
          cx="54"
          cy="50"
          rx="22"
          ry="34"
          transform="rotate(-22 54 50)"
          fill="#7a1c1c"
        />

        {/* The stylized 'i' body (Swooping up from the bottom-left border) */}
        <path
          d="M 32 80 
             C 30 70, 36 50, 48 42 
             C 54 38, 56 40, 52 44 
             C 46 52, 42 66, 46 76 
             C 48 80, 44 84, 38 84 
             C 35 84, 33 82, 32 80 Z"
          fill="#ffffff"
        />

        {/* The distinct oval dot of the 'i' at the top right */}
        <ellipse
          cx="61"
          cy="28"
          rx="6"
          ry="8"
          transform="rotate(-15 61 28)"
          fill="#ffffff"
        />
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
      <svg
        width="24"
        height="24"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Orange Circle Base */}
        <circle cx="50" cy="50" r="48" fill="#f36f21" />

        {/* The Geometric Interlocking Sri Yantra Pattern */}
        <g
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinejoin="miter"
          fill="none"
        >
          {/* 1. Large Central Upward Triangle */}
          <polygon points="50,15 85,73 15,73" />

          {/* 2. Large Central Downward Triangle */}
          <polygon points="50,85 85,27 15,27" />

          {/* 3. Medium Upward Triangle (Shifted Down) */}
          <polygon points="50,28 78,78 22,78" />

          {/* 4. Medium Downward Triangle (Shifted Up) */}
          <polygon points="50,72 78,22 22,22" />

          {/* 5. Inner Upward Triangle */}
          <polygon points="50,38 70,68 30,68" />

          {/* 6. Inner Downward Triangle */}
          <polygon points="50,62 70,32 30,32" />

          {/* 7. Core Small Upward Triangle */}
          <polygon points="50,44 61,61 39,61" />

          {/* 8. Core Small Downward Triangle */}
          <polygon points="50,56 61,39 39,39" />

          {/* Outer Lateral Connecting Horizontal Base Lines to lock the facet look */}
          <line x1="12" y1="41" x2="88" y2="41" />
          <line x1="12" y1="59" x2="88" y2="59" />
          <line x1="22" y1="50" x2="78" y2="50" />
        </g>

        {/* Central Bindu (Dot) */}
        <circle cx="50" cy="50" r="2" fill="#ffffff" />
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
      <svg
        width="24"
        height="24"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Deep Navy/Black Canvas Background */}
        <rect width="100" height="100" fill="#00072d" />

        <g strokeWidth="16" strokeLinecap="square" fill="none">
          {/* White Downward-Facing Arc (Bottom-Left) */}
          <path
            d="M 15 82 
               A 21 21 0 0 1 57 82"
            stroke="#ffffff"
          />

          {/* Coral Red Upward-Facing Arc (Top-Right) */}
          <path
            d="M 43 18 
               A 21 21 0 0 0 85 18"
            stroke="#f0544c"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Alice Blue",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rotated and skewed container to handle the natural 3D tilt of the rings */}
        <g transform="translate(50,50) rotate(-25) scale(1, 0.5) translate(-50,-50)">
          {/* Outer Blue Ring Segments */}
          <path
            d="M 15 50 A 40 40 0 0 1 85 25"
            stroke="#2b72c4"
            strokeWidth="10"
            strokeLinecap="square"
            fill="none"
          />
          <path
            d="M 85 50 A 40 40 0 0 1 15 75"
            stroke="#2b72c4"
            strokeWidth="10"
            strokeLinecap="square"
            fill="none"
          />

          {/* Inner Green Ring */}
          <circle
            cx="50"
            cy="50"
            r="26"
            stroke="#43b043"
            strokeWidth="9"
            fill="none"
          />

          {/* Center Dark Blue Pointer Wedge */}
          <path d="M 30 60 L 52 50 L 34 40 Z" fill="#124191" />
        </g>
      </svg>
    ),
  },
  {
    name: "FundzBazar",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base Dark Blue Background */}
        <rect width="100" height="100" fill="#104c92" />

        {/* Inner White Circle */}
        <circle cx="50" cy="50" r="46" fill="#ffffff" />

        {/* The Blue Elephant Shape */}
        <path
          d="M 10 74 
             C 10 65, 12 52, 22 44 
             C 28 39, 32 40, 34 46 
             C 40 46, 44 40, 52 40 
             C 58 40, 58 36, 61 36
             C 63 36, 63 46, 60 49
             C 64 42, 73 42, 72 52
             C 71 58, 66 62, 59 62
             C 65 67, 65 74, 57 74
             C 55 74, 54 78, 54 84
             L 48 84
             L 48 76
             C 41 72, 30 68, 22 76
             C 18 80, 18 84, 18 88
             L 13 88
             C 11 84, 10 80, 10 74 Z"
          fill="#104c92"
        />

        {/* The Elephant's White Eye Arc/Circle */}
        <circle cx="62" cy="46" r="3" fill="#ffffff" />
        <path
          d="M 59 47 C 58 53, 62 57, 62 57"
          stroke="#ffffff"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Stack of Three Orange Circles (Coins) on the back */}
        <g fill="#f16522">
          {/* Large Bottom Circle */}
          <circle cx="39" cy="42" r="9" />
          {/* Medium Middle Circle */}
          <circle cx="39" cy="24" r="6" />
          {/* Small Top Circle */}
          <circle cx="39" cy="11" r="3.5" />
        </g>
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
