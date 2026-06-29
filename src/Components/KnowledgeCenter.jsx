import React from "react";
import "../styles.css";

const RESOURCES = [
  {
    num: "01",
    title: "Introduction to Islamic Finance by Mufti Taqi Usmani (DB)",
    desc: "The most comprehensive and authentic book on the subject by one of the top Shariah scholars of our times.",
    action: "Download PDF (1.1 MB)",
    href: "#",
    type: "pdf",
  },
  {
    num: "02",
    title:
      "A Primer on Islamic Finance by The Research Foundation of CFA Institute",
    desc: "A detailed introduction to Islamic finance covering basic concepts, products, and Shariah standards in different countries.",
    action: "Download PDF (1.1 MB)",
    href: "#",
    type: "pdf",
  },
  {
    num: "03",
    title: "The Definitive Guide to Halal Investing in India by Zamzam Capital",
    desc: "A detailed overview of the current status of Shariah-compliant investments available in the Indian market.",
    action: "Download PDF (1.1 MB)",
    href: "#",
    type: "pdf",
  },
  {
    num: "04",
    title: "Zamzam Capital Guide to Shariah Screening Criteria for Stocks",
    desc: "A presentation detailing the key guidelines & financial ratios followed by Zamzam Capital to construct its Halal Stocks List.",
    action: "Download PDF (1.1 MB)",
    href: "#",
    type: "pdf",
  },
  {
    num: "05",
    title: "Zamzam Capital Zakat Calculator",
    desc: "Calculate your Zakat online with Zamzam Capital's easy-to-use Zakat Calculator.",
    action: "Open Calculator",
    href: "https://zamzam-capital.com/zakat-calculator/",
    type: "calc",
  },
  {
    num: "06",
    title: "Zamzam Capital Position Size Calculator",
    desc: "Calculate the right quantity of a stock to buy based on your capital, portfolio risk boundaries and stop-loss levels.",
    action: "Open Calculator",
    href: "https://zamzam-capital.com/positon-size-calculator",
    type: "calc",
  },
];

const VIDEOS = [
  {
    id: "-OjKbz_P-tQ",
    title: "Halal Investment Options Available in India Today?",
  },
  {
    id: "h03DeDA8wtc",
    title: "Save Yourself From Haram Ponzi Schemes",
  },
  {
    id: "ihonfqu2y8M",
    title:
      "Shariah Stock Screening: How are Shariah Screening Ratios Derived? Stock Market Fiqh - Pt 1",
  },
  {
    id: "iI0LD8wPS_g",
    title:
      "Zamzam Capital: Shariah Compliant Stocks Screener | Our Screening Process for Halal Stocks is Unique",
  },
  {
    id: "kbrRJ0QLJbk",
    title: "Basic Principles of Islamic Investments",
  },
  {
    id: "-rnZkYLG_5g",
    title:
      "Shariah Stock Screening: How are Shariah Screening Ratios Derived? Stock Market Fiqh - Pt 1",
  },
];

export default function KnowledgeCenter() {
  return (
    <section className="zz-knowledge-section py-5" id="tools">
      <div className="container">
        <div className="mb-5">
          <h2 className="authority-main-heading fw-extrabold mb-2">
            Free Books, Guides &amp; Calculators
          </h2>
        </div>

        <div className="d-flex flex-column gap-3 mb-5">
          {RESOURCES.map((item) => (
            <div
              className="knowledge-resource-card rounded-4 p-4"
              key={item.num}
            >
              <div className="row align-items-center g-3">
                <div className="col-auto">
                  <span className="knowledge-num fw-bold">{item.num}</span>
                </div>
                <div className="col">
                  <h3 className="knowledge-resource-title fw-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="knowledge-resource-desc text-muted mb-0">
                    {item.desc}
                  </p>
                </div>
                <div className="col-lg-auto">
                  <a
                    href={item.href}
                    target={item.type === "calc" ? "_blank" : "_self"}
                    rel={item.type === "calc" ? "noopener noreferrer" : ""}
                    className="btn text-white fw-semibold text-nowrap"
                    style={
                      item.type === "pdf"
                        ? { backgroundColor: "#000000", color: "#ffffff" }
                        : { backgroundColor: "#16a34a", color: "#ffffff" }
                    }
                  >
                    {item.action}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="knowledge-vault-block pt-4">
          <h3 className="authority-main-heading fw-extrabold mb-2 text-center">
            From the Zamzam Capital YouTube Channel
          </h3>
          <p className="authority-subtext mx-auto text-center mb-4 text-nowrap d-none d-md-block">
            We don&apos;t just invest — we also educate. Here are some of our
            most valuable insights and resources.
          </p>
          <p className="authority-subtext mx-auto text-center mb-4 d-block d-md-none">
            We don&apos;t just invest — we also educate. Here are some of our
            most valuable insights and resources.
          </p>

          <div className="row g-4">
            {VIDEOS.map((video, idx) => (
              <div
                className="col-lg-4 col-md-6 col-12"
                key={`${video.id}-${idx}`}
              >
                <div className="vault-video-card rounded-4 overflow-hidden">
                  <div className="vault-video-embed ratio ratio-16x9">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="vault-video-caption p-3 d-flex align-items-start gap-2">
                    <svg
                      className="vault-yt-icon flex-shrink-0"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#FF0000"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span className="small fw-medium">{video.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Centering Wrapper Container with Top Margin Spacing */}
        <div className="d-flex justify-content-center mt-5">
          <a
            href="https://www.youtube.com/@zamzamcapital"
            target="_blank"
            rel="noopener noreferrer"
            className="yt-see-more-btn"
          >
            <span style={{ marginRight: "8px", fontSize: "12px" }}>▶</span>
            See more videos
          </a>
        </div>
      </div>
    </section>
  );
}
