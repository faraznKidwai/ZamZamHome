import React, { useState } from "react";
import "../styles.css";

const FAQ_ITEMS = [
  {
    q: "What is Shariah compliance?",
    a: "Shariah compliance refers to the adherence to Islamic law or Shariah principles, particularly in finance and investment. It ensures investments align with Islamic ethical standards, excluding businesses involved in forbidden (Haram) activities like alcohol, gambling, or conventional financial services, and not excessively burdened with debt.",
  },
  {
    q: "Is the Stock Market Halal in Islam?",
    a: "Yes, investing in the stock market can be Halal—provided you follow Islamic investment principles related to trading and Shariah screening criteria developed by a competent Shariah Board. At Zamzam Capital, we offer our followers a thoroughly vetted Halal Stock List to help you invest with confidence.",
  },
  {
    q: "What are the Halal stocks available for Trading or Investment in India?",
    a: "Our list of Halal stocks in India is updated semi-annually by Zamzam Capital based on financial performance and compliance with Shariah screening criteria. We conduct a 3-level screening process and in the third level check for various qualitative criteria that is not picked up by financial screening.",
  },
  {
    q: "Is trading options Halal in Islam?",
    a: "No, trading options (F&O) is not considered Halal as they do not conform to the key principles of Islamic investments. This is due to the speculative nature (gharar) of options contracts. At Zamzam Capital, we do not include derivatives, futures, or options in our Halal investment framework.",
  },
  {
    q: "How do I invest in Shariah compliant stocks in India?",
    a: "To invest in Shariah compliant stocks in India, start by referring to a verified Halal stocks list, such as the one curated by Zamzam Capital. Open a demat account with a reliable broker and choose stocks by referring to our Halal stocks list after conducting your own research.",
  },
  {
    q: "Where can I find a list of Halal mutual funds available for the Indian share market?",
    a: "As a SEBI Registered Research Analyst, our focus is on offering you Shariah compliant direct stock picks and model portfolios. We recommend you analyze any mutual fund that calls itself Shariah compliant very strictly and review their component stock list against our Halal stock list.",
  },
  {
    q: "What makes a stock Shariah compliant?",
    a: "A Shariah compliant stock must be from a business with a Halal primary activity, maintain acceptable levels of debt, impure income, non-compliant investments, illiquid assets, and liquidity, and avoid promoting non-Sharia compliant activities. Our screening criteria follows the methodology of Mufti Taqi Usmani (DB).",
  },
  {
    q: "Is intraday trading Halal or Haram?",
    a: "Intraday trading is not Halal, as it typically involves buying and selling shares without taking constructive possession, which is against Shariah principles. Halal trading requires ownership transfer and cannot be speculative or based on leverage.",
  },
  {
    q: "Can non-Muslims invest in Halal stocks?",
    a: "Absolutely. Halal stocks follow ethical business practices, avoid high-risk instruments, and focus on real economic value. This makes them attractive not just to Muslims, but also to ESG and socially responsible investors.",
  },
  {
    q: "How often is the Halal stock list updated?",
    a: "Our Halal stocks list is updated twice a year—on March 31st and September 30th—based on the financial reports of NSE-listed companies. We also provide ad-hoc updates for newly listed IPOs through our Telegram and Instagram channels.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="zz-faq-section py-5" id="faq">
      <div className="container max-w-800 mx-auto">
        <h2 className="faq-section-title text-center fw-extrabold mb-5">
          FAQs
        </h2>

        <div className="faq-accordion d-flex flex-column gap-2">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                className={`faq-item rounded-3 ${
                  isOpen ? "faq-item-open" : ""
                }`}
                key={idx}
              >
                <button
                  className="faq-question w-100 d-flex align-items-center justify-content-between gap-3 border-0 bg-transparent text-start"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text fw-semibold">
                    {idx + 1}. {item.q}
                  </span>
                  <span className="faq-toggle-icon flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer px-3 pb-3">
                    <p className="mb-0 text-muted">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
