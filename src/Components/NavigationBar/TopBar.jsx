import React from "react";
import "../../styles.css";

export default function TopBar() {
  return (
    /* Removed d-none and d-md-flex so it stays visible everywhere, relying on flex utilities */
    <div className="zamzam-topbar-strip py-2 d-flex align-items-center">
      <div className="container d-flex flex-wrap justify-content-center align-items-center gap-2 gap-sm-3">
        <span className="topbar-item text-white text-center">
          SEBI Registered RA (INH000016199)
        </span>

        <span className="topbar-item text-white text-center">
          BSE Enlistment No: 6158
        </span>

        <a
          href="https://api.whatsapp.com/send/?phone=%2B918694010200&text=Hi%2C+please+let+me+know+more+about+your+products+on+Zamzam+Capital&type=phone_number&app_absent=0"
          className="topbar-link-item text-decoration-none text-white d-flex align-items-center gap-1"
          target="_blank"
          rel="noreferrer"
        >
          {/* Authentic clean WhatsApp vector path layout */}
          <svg
            className="topbar-icon-svg whatsapp-fill-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/0000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.714 1.456h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span>+91 8694010200</span>
        </a>

        <a
          href="mailto:info@zamzam-capital.com"
          className="topbar-link-item text-decoration-none text-white d-flex align-items-center gap-1"
        >
          <svg
            className="topbar-icon-svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/0000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          <span>info@zamzam-capital.com</span>
        </a>
      </div>
    </div>
  );
}
