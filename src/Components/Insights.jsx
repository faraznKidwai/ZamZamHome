import React from "react";
import "../styles.css";

const ARTICLES = [
  {
    tag: "INVESTING",
    readTime: "12 min read",
    title: "The Complete Guide to Halal Investing in India",
    excerpt:
      "A comprehensive overview of Shariah-compliant equity investing, screening criteria, and portfolio construction strategies for Indian markets.",
    href: "#blog",
  },
  {
    tag: "ISLAMIC FINANCE",
    readTime: "8 min read",
    title: "Understanding Shariah Screening for Stocks",
    excerpt:
      "Learn how business activity checks, financial ratios, and purification rules determine whether a stock qualifies as Halal.",
    href: "#blog",
  },
  {
    tag: "ECONOMY",
    readTime: "6 min read",
    title: "Market Outlook: Halal Sectors to Watch",
    excerpt:
      "Expert analysis on emerging sectors aligned with Islamic finance principles and their potential for ethical wealth creation.",
    href: "#blog",
  },
];

export default function Insights() {
  return (
    <section className="zz-insights-section py-5 bg-white" id="blog">
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3 mb-4">
          <div>
            <span className="authority-pill d-inline-block mb-3 text-uppercase fw-bold">
              Knowledge HUB
            </span>
            <h2 className="authority-main-heading fw-extrabold mb-2">
              Learn Halal Investing
            </h2>
            <p className="authority-subtext mb-0">
              Expert analysis and educational content on Shariah-compliant
              finance &amp; investments.
            </p>
          </div>
          <a
            href="#blog"
            className="insights-view-all fw-semibold text-decoration-none"
          >
            View all articles →
          </a>
        </div>

        <div className="row g-4">
          {ARTICLES.map((article) => (
            <div className="col-lg-4 col-md-6 col-12" key={article.tag}>
              <a
                href={article.href}
                className="insights-card text-decoration-none h-100 d-block"
              >
                <div className="insights-card-body p-4 rounded-4 h-100">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="insights-tag fw-bold">{article.tag}</span>
                    <span className="insights-read-time text-muted small">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="insights-title fw-bold mb-2">
                    {article.title}
                  </h3>
                  <p className="insights-excerpt text-muted mb-0">
                    {article.excerpt}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
