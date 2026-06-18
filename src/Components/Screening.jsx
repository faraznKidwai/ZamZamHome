import React from 'react';
import '../styles.css'; // Importing our styled track below

export default function ScreeningSection() {
  return (
    <section class="zz-suitability-section">
      <div className="zz-suitability-container">
        
        {/* Header Block with Orange Contrast Token */}
        <div className="zz-suitability-header">
          <h2 className="suitability-main-title">
           Our strict screening framework
          </h2>
          <p className="suitability-subtext">
            ZamZam strategies are a good fit for you if you are looking for the following 3 factors.
          </p>
        </div>

        {/* 3-Column Horizontal Rectangle Grid Frame */}
        <div className="zz-suitability-grid">
          
          {/* Card 1: Wealth Creation */}
          <div className="suitability-card">
            <div className="card-icon-wrapper">
                01
            </div>
            <h3 className="card-title">Core business filter</h3>
            <p className="card-desc">
              Best for your long term goals like financial freedom, children's future, house, retirement.
            </p>
          </div>

          {/* Card 2: Micro Effort */}
          <div className="suitability-card">
            <div className="card-icon-wrapper">
             02
            </div>
            <h3 className="card-title">Debt to asset ratio</h3>
            <p className="card-desc">
              No need to follow the market movements constantly. Your rebalance work is done in just a few minutes.
            </p>
          </div>

          {/* Card 3: Dedicated Support */}
          <div className="suitability-card">
            <div className="card-icon-wrapper">
             03
             </div>
            <h3 className="card-title">Liquid Asset Rule</h3>
            <p className="card-desc">
              We strive to have an exceptional support for all our subscribers. Our team is just an email away.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}