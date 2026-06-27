import React from "react";
import "../styles.css";

const TESTIMONIALS = [
  {
    quote:
      "I have been investing through Zamzam Capital’s Momentum Plan, and the experience has been excellent. The plan helped me stay consistent, avoid emotional decisions and achieve steady returns. I have seen steady results and would recommend it to anyone seeking a very well-organized structured equity strategy.",
    name: "Irfan Yusuf Sayyed",
    role: "Entrepreneur, Mumbai",
    initials: "IY",
  },
  {
    quote:
      "I found the Shariah-based smallcase option to be such an easy way to get started in this domain, even for a novice like me. I just need to keep track of the rebalancing dates, which requires only a few minutes of my time. I can definitely see that the stocks have performed well through all the ups and downs of the market. Thank you for providing this platform!",
    name: "Samshed Begum",
    role: "AI Architect, Bangalore",
    initials: "SB",
  },
  {
    quote:
      "Highly recommended. I have not only saved my capital but keep making good profits. Even in the most difficult market situation I am not worried as I know that Zamzam Capital market experts will guide me through this difficult phase and I will not be losing my capital (which is very important). I am with this plan almost a year and I am very much satisfied,and the support is always there from Saif bhai for any queries or doubts. In a nutshell I would say that I have found my path for halal investments in the share market and to earn good profits.  Thank you Zamzam Capital team and a special thanks to Saif bhai to bring this platform for retail investors like me.",
    name: "Mohammed Sami Bhati",
    role: "Structural Engineer, Saudi Arabia",
    initials: "MSB",
  },
  {
    quote:
      "My experience with Zamzam Capital has been excellent. Earlier, I invested through mutual funds, where I could not clearly see the underlying stocks. With Zamzam Capital's smallcase portfolios, I can directly own and track Shariah-compliant stocks, which gives me greater transparency and confidence. Their Shariah Screener is also very useful for monitoring compliance. Overall, they have made Halal investing simple and accessible for me. JazakAllah Khair.",
    name: "Afif Ahmad",
    role: "Software Developer, Noida",
    initials: "AA",
  },
  {
    quote:
      "I am delighted to see the availability in the market of brand new Shariah compliant investment strategies from Zamzam Capital, which have also delivered a positive outcome for me personally. I deeply thank them for this wonderful opportunity to invest in their smallcase portfolios and wish them good luck for their future strategies.",
    name: "Mohammed Muteeb Samad",
    role: "Travel Agent, Hyderabad",
    initials: "MMS",
  },
  {
    quote:
      "I like the research done for the stocks they have chosen for their smallcase portfolios and also the returns we are getting. I am truly satisfied.",
    name: "Zoheb Qamar Ali Khan",
    role: "IT Professional, Mumbai",
    initials: "ZQAK",
  },
  {
    quote:
      "I have been associated with Zamzam Capital for over a year now and have greatly benefited from their stock recommendation services. As a Muslim investor, navigating the stock market requires adhering to specific Shariah compliance criteria, and Zamzam Capital makes this process seamless. Beyond their excellent research, they have always answered all my queries promptly, providing the clarity needed to invest with peace of mind. Their initiative to publish the Shariah-compliant stock list for free on their website is a massive service to the community. I strongly believe that if Halal options are made easily available, people will naturally move away from non-Halal products. Zamzam Capital is empowering the community to come forward, invest in equity, and finally be a part of India’s success story.",
    name: "Mohiuddin Nizami",
    role: "Sr. Software Engineer, Hyderabad",
    initials: "MN",
  },
  {
    quote:
      "I like Zamzam Capital’s smallcases very much. I have trust in them given my long relationship with Zamzam Capital. Since I am getting more than expected returns, I now regret and wish I had invested a larger amount in their smallcases. Thus, now I have decided to disinvest in my mutual fund investments and transfer my funds to their smallcase portfolios.",
    name: "Anwar Momin",
    role: "Businessman, Latur (Maharashtra)",
    initials: "AM",
  },
  {
    quote:
      "I have found Zamzam Capital’s smallcase product to be good and up to the mark. They provide timely updates, for example, the immediate rebalance they issued recently for exiting from Reliance Industries in our smallcase, immediately after it was declared as non-compliant in their latest Halal list was much appreciated. Even though I have only recently subscribed to their smallcases, the results even with all the market fluctuations and negative news have been good. I look forward to a long association with them.",
    name: "Jameeludeen",
    role: "Private Sector, Viluppuram (Tamil Nadu)",
    initials: "J",
  },
  {
    quote:
      "I've been using the Momentum plan for the past 4 months, and it's now my main way of picking stocks. As a Muslim investor, it really helps me with two big things: making sure my investments stay Halal and giving me a clear plan on when to buy/sell. It's much more than just a filter, the team clearly puts a lot of thought into their strategy, and I've seen some good, steady results so far. I'm really happy with the service. It's a great choice for anyone who wants to grow their savings without compromising their Islamic values.",
    name: "Syed Murtuza Hashmi",
    role: "Physician, Hyderabad",
    initials: "SMH",
  },
  {
    quote:
      "My overall experience investing through Zamzam Capital’s smallcase portfolios has been exceptional. What I like most is how simple and accessible they have made ethical investing without compromising on returns. Today, even when the broader market is underperforming, Zamzam’s smallcases have done the exact opposite—surpassing expectations and staying way out front in terms of returns. Given these fantastic results, the peace of mind, and the excellent support, I highly recommend Zamzam Capital to anyone looking for authentic Shariah-compliant and ethical investment options.",
    name: "Ashad Al Haq",
    role: "Public Sector, Khairagarh(Chhattisgarh)",
    initials: "AAH",
  },
  {
    quote:
      "I’ve been part of the annual Zamzam Capital Momentum Plan and genuinely appreciate the structured way breakout calls are shared. The entries, exits, and targets are clearly defined from the beginning, along with proper stop-loss levels, which makes execution much easier. As the trend progresses, timely updates are provided to trail targets and adjust stop-loss, helping manage trades systematically rather than emotionally. Many of the picks have shown strong follow-through. Another important aspect for me is that I don’t have to worry about halal screening, as the recommendations focus on halal stocks and Shariah-compliant investment opportunities in India. That gives additional peace of mind.",
    name: "Mohammed Mushtaq Momen",
    role: "IT Professional, Saudi Arabia",
    initials: "MMM",
  },
  {
    quote:
      "First of all, I thank almighty Allah and Zamzam Capital for their guidance to invest in Halal investment portfolios through smallcase. Zamzam Capital's response towards any queries was quick and they give good guidance. Though I started investing late, I hope in future to invest in their other model portfolios also. I look forward to them releasing single sector smallcase portfolios, e.g. automobile/pharma and also any other future worthy investment plans from Zamzam Capital’s team.",
    name: "Khaleel Ahmed",
    role: "Businessman, Mangalore",
    initials: "KA",
  },
  {
    quote:
      "For a long time, I struggled to find Halal, Shariah-based investments and then while searching, I found SEBI-registered Zamzam Capital on YouTube, where they post Shariah-compliant stocks and informative videos related to Shariah-based investing in the share market. That’s where my journey started. I have been with Zamzam Capital for 4–5 months now, and the experience has been EXCELLENT. They share stocks with clear ENTRY, TARGET, and STOPLOSS levels mentioned upfront, with solid reasoning only for Shariah-compliant picks, and it’s easy to follow. This helps me stay consistent and avoid emotional decisions. My risk management has improved a lot since I started following them (Momentum Plan). Highly recommended for anyone looking for Halal wealth building, and I would like to continue this relationship further.",
    name: "Syed Naushad Ali",
    role: "Businessman, Anantapur (Andhra Pradesh)",
    initials: "SNA",
  },
  {
    quote:
      "The Zamzam team is doing great job in research work and is making good moves and only getting better with time. I have noticed how their stock recommendations have performed resiliently even during the tough market conditions and you all are doing an excellent job in suggesting companies. I have benefited a lot following your advice; may Allah SWT grant your team the means to reach and benefit maximum people who are left behind from financial independence, merely because of lack of proper knowledge and unavailability of authentic sources of Islamic investments.",
    name: "Salma Ghouse",
    role: "Housewife, UAE",
    initials: "SG",
  },
  {
    quote:
      "I have been using Zamzam Capital’s services for a while now, and I am extremely impressed with their dedication to Shariah-compliant investing. Their rigorous screening process gives me complete peace of mind, knowing my portfolio aligns strictly with Islamic principles. On top of their ethical framework, their market expertise is outstanding. The trading calls they provide are incredibly timely and precise, complete with clear entry price ranges, realistic targets, and strict stop-loss levels. Highly recommended for any investor looking for ethical, well-researched, and actionable market guidance.",
    name: "Mohammed Ajmal",
    role: "IT Professional, Noida",
    initials: "MA",
  },
];
export default function Testimonials() {
  const dualStream = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="zz-testimonials-section py-5">
      <div className="container text-center mb-4">
        <span className="authority-pill d-inline-block mb-3 text-uppercase fw-bold">
          Testimonials
        </span>
        <h2 className="authority-main-heading fw-extrabold mb-3">
          Trusted by <span className="brand-text-green">5,000+</span> Investors
          in India &amp; Abroad
        </h2>
        <p className="authority-subtext mx-auto">
          Hear from our community of ethical investors who have transformed
          their financial futures with Zamzam Capital.
        </p>
      </div>

      <div className="zz-testimonial-marquee-viewport overflow-hidden">
        <div className="zz-testimonial-marquee-track">
          {dualStream.map((item, idx) => (
            <div className="zz-testimonial-card" key={`testimonial-${idx}`}>
              <div className="testimonial-quote-icon brand-text-green mb-3">
                &ldquo;
              </div>
              <p className="testimonial-text mb-4">{item.quote}</p>
              <div className="d-flex align-items-center gap-3">
                <div className="testimonial-avatar">{item.initials}</div>
                <div className="text-start">
                  <div className="testimonial-name fw-bold">{item.name}</div>
                  <div className="testimonial-role text-muted small">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
