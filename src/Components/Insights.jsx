import React from "react";
import "../styles.css";

const ARTICLES = [
  {
    tag: "INVESTING",
    readTime: "12 min read",
    title: "Halal Shares vs Conventional Shares - Key Differences",
    excerpt:
      "If you are a Muslim investor, navigating Indian stock market it's very important for you to understand the difference between halal and conventional shares.",
    href: "https://zamzam-capital.com/blog/halal-shares-vs-conventional-shares-what-muslim-investors-need-to-know/",
  },
  {
    tag: "ISLAMIC FINANCE",
    readTime: "8 min read",
    title: "How to Build Halal Stock Portfolio in India - Step by Step Guide",
    excerpt:
      "If you are a looking to build wealth without compromising your faith but don't know where to start, this guide is for you.",
    href: "https://zamzam-capital.com/blog/how-to-build-a-halal-stock-portfolio-in-india-step-by-step/",
  },
  {
    tag: "ECONOMY",
    readTime: "6 min read",
    title: "Shariah Investing vs ESG: What's the Difference?",
    excerpt:
      "Even though both Shariah investing and ESG investing are ethics driven, they are not the same. Find out thier key differences in this article.",
    href: "https://zamzam-capital.com/blog/shariah-investing-vs-esg-whats-the-difference/",
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
