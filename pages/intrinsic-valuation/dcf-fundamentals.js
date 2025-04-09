import React from 'react';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import Sidebar from '../../components/Sidebar';
import Head from 'next/head';
import FinancialCalculator from '../../components/FinancialCalculator';

export default function DCFFundamentals() {
  return (
    <Layout>
      <Head>
        <title>DCF Fundamentals - Intrinsic Valuation - Investment Banking Interview Prep</title>
        <meta name="description" content="Master Discounted Cash Flow (DCF) analysis for investment banking interviews. Learn DCF methodology, forecasting techniques, and terminal value calculations." />
      </Head>
      
      <div className="container py-4">
        <Breadcrumb 
          items={[
            { label: 'Intrinsic Valuation', href: '/intrinsic-valuation' },
            { label: 'DCF Fundamentals', href: '/intrinsic-valuation/dcf-fundamentals' }
          ]} 
        />
        
        <div className="row mt-4">
          <div className="col-lg-3">
            <div className="sticky-top pt-3" style={{ top: '80px' }}>
              <Sidebar items={[
                { id: 'overview', label: 'Concept Overview', href: '#overview', completed: true },
                { id: 'methodology', label: 'DCF Methodology', href: '#methodology', completed: true },
                { id: 'calculator', label: 'DCF Calculator', href: '#calculator', completed: true },
                { id: 'interview', label: 'Interview Questions', href: '#interview', completed: true },
                { id: 'relevance', label: 'Relevance to IB', href: '#relevance', completed: true }
              ]} />
            </div>
          </div>
          
          <div className="col-lg-9">
            <h1>DCF Fundamentals</h1>
            <p className="lead">
              Discounted Cash Flow (DCF) analysis is a cornerstone of intrinsic valuation in investment banking.
            </p>
            
            <section id="overview" className="mb-5">
              <h2>Concept Overview</h2>
              <p>
                Discounted Cash Flow (DCF) analysis is a valuation method that estimates the value of an investment based on its expected future cash flows. It applies the concept of the time value of money to determine the present value of projected future cash flows.
              </p>
              <p>
                DCF is considered an "intrinsic" valuation method because it focuses on a company's fundamental ability to generate cash rather than relative market valuations.
              </p>
              <div className="alert alert-primary">
                <strong>Key Principle:</strong> The value of a company today is equal to the sum of all its future cash flows, discounted back to present value.
              </div>
            </section>
            
            <section id="methodology" className="mb-5">
              <h2>DCF Methodology</h2>
              <p>
                A typical DCF analysis involves several key steps:
              </p>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">1. Forecast Free Cash Flows</h5>
                  <p className="card-text">
                    Project the company's unlevered free cash flows (UFCF) for a specific forecast period, typically 5-10 years.
                  </p>
                  <div className="alert alert-info">
                    <strong>UFCF Formula:</strong> EBIT × (1 - Tax Rate) + Depreciation & Amortization - Capital Expenditures - Increase in Net Working Capital
                  </div>
                </div>
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">2. Calculate Terminal Value</h5>
                  <p className="card-text">
                    Estimate the value of all cash flows beyond the explicit forecast period using either:
                  </p>
                  <ul>
                    <li><strong>Perpetuity Growth Method:</strong> TV = UFCF<sub>n+1</sub> ÷ (WACC - g)</li>
                    <li><strong>Exit Multiple Method:</strong> TV = EBITDA<sub>n</sub> × Terminal Multiple</li>
                  </ul>
                  <p>Where:</p>
                  <ul>
                    <li>TV = Terminal Value</li>
                    <li>UFCF<sub>n+1</sub> = Unlevered Free Cash Flow in the first year after the forecast period</li>
                    <li>WACC = Weighted Average Cost of Capital</li>
                    <li>g = Perpetuity growth rate</li>
                    <li>EBITDA<sub>n</sub> = EBITDA in the final forecast year</li>
                  </ul>
                </div>
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">3. Determine Discount Rate</h5>
                  <p className="card-text">
                    Calculate the Weighted Average Cost of Capital (WACC) to reflect the company's capital structure and risk profile.
                  </p>
                  <div className="alert alert-info">
                    <strong>WACC Formula:</strong> WACC = (E/V × R<sub>e</sub>) + (D/V × R<sub>d</sub> × (1 - T))
                  </div>
                  <p>Where:</p>
                  <ul>
                    <li>E = Market value of equity</li>
                    <li>D = Market value of debt</li>
                    <li>V = Total market value (E + D)</li>
                    <li>R<sub>e</sub> = Cost of equity</li>
                    <li>R<sub>d</sub> = Cost of debt</li>
                    <li>T = Corporate tax rate</li>
                  </ul>
                </div>
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">4. Discount Cash Flows to Present Value</h5>
                  <p className="card-text">
                    Apply the discount rate to convert future cash flows and terminal value to present value.
                  </p>
                  <div className="alert alert-info">
                    <strong>PV Formula:</strong> PV = FV ÷ (1 + r)<sup>n</sup>
                  </div>
                  <p>Where:</p>
                  <ul>
                    <li>PV = Present Value</li>
                    <li>FV = Future Value</li>
                    <li>r = Discount rate (WACC)</li>
                    <li>n = Number of periods</li>
                  </ul>
                </div>
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">5. Calculate Enterprise Value and Equity Value</h5>
                  <p className="card-text">
                    Sum the present values to determine Enterprise Value, then adjust to find Equity Value.
                  </p>
                  <div className="alert alert-info">
                    <strong>Enterprise Value:</strong> Sum of PV of forecast cash flows and PV of terminal value
                  </div>
                  <div className="alert alert-info">
                    <strong>Equity Value:</strong> Enterprise Value - Net Debt + Cash & Cash Equivalents - Minority Interest - Preferred Stock
                  </div>
                </div>
              </div>
            </section>
            
            <section id="calculator" className="mb-5">
              <h2>DCF Calculator</h2>
              <p>
                Use this interactive calculator to practice DCF valuation with different inputs.
              </p>
              
              <div className="mt-4">
                <FinancialCalculator calculatorType="dcf" />
              </div>
            </section>
            
            <section id="interview" className="mb-5">
              <h2>Common Interview Questions</h2>
              <p>
                Be prepared to answer these frequently asked DCF-related questions in investment banking interviews.
              </p>
              
              <div className="accordion" id="dcfQuestions">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What are the advantages and disadvantages of DCF analysis?
                    </button>
                  </h3>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#dcfQuestions">
                    <div className="accordion-body">
                      <strong>Advantages:</strong>
                      <ul>
                        <li>Based on fundamental cash flow generation rather than market sentiment</li>
                        <li>Considers the time value of money</li>
                        <li>Provides detailed analysis of value drivers</li>
                        <li>Not directly affected by temporary market conditions</li>
                      </ul>
                      <strong>Disadvantages:</strong>
                      <ul>
                        <li>Highly sensitive to input assumptions (growth rates, discount rates, etc.)</li>
                        <li>Difficult to accurately forecast cash flows far into the future</li>
                        <li>Terminal value often represents a large portion of the total value</li>
                        <li>Complex and time-consuming compared to multiple-based methods</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Why do we use WACC as the discount rate in DCF analysis?
                    </button>
                  </h3>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#dcfQuestions">
                    <div className="accordion-body">
                      <p>
                        We use WACC as the discount rate in DCF analysis because:
                      </p>
                      <ul>
                        <li>It represents the company's overall cost of capital, reflecting both equity and debt financing</li>
                        <li>It accounts for the different costs and tax treatments of various funding sources</li>
                        <li>It matches the unlevered free cash flows being discounted, which are available to all capital providers</li>
                        <li>It incorporates the company's risk profile and capital structure into the valuation</li>
                      </ul>
                      <p>
                        Since unlevered free cash flows are available to all providers of capital (both debt and equity), we need a discount rate that reflects the required return of all investors, weighted by their contribution to the company's capital structure.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      How do you determine an appropriate terminal growth rate?
                    </button>
                  </h3>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#dcfQuestions">
                    <div className="accordion-body">
                      <p>
                        Determining an appropriate terminal growth rate involves considering:
                      </p>
                      <ul>
                        <li><strong>Long-term GDP growth:</strong> Terminal growth typically shouldn't exceed the long-term GDP growth rate of the company's primary markets (usually 2-3% in developed economies)</li>
                        <li><strong>Industry growth prospects:</strong> Mature industries might grow below GDP, while emerging industries might temporarily grow above GDP</li>
                        <li><strong>Inflation expectations:</strong> Terminal growth should at least account for long-term inflation</li>
                        <li><strong>Competitive position:</strong> Companies with sustainable competitive advantages might support slightly higher growth rates</li>
                        <li><strong>Reinvestment requirements:</strong> Higher growth requires higher reinvestment, which affects free cash flow</li>
                      </ul>
                      <p>
                        In practice, terminal growth rates typically range from 1-3% for most companies, with 2% being a common assumption for stable businesses in developed markets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section id="relevance" className="mb-5">
              <h2>Relevance to Investment Banking</h2>
              <p>
                DCF analysis is essential in investment banking for several reasons:
              </p>
              
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">M&A Advisory</h5>
                  <p className="card-text">
                    DCF helps determine appropriate purchase prices and evaluate whether a transaction creates shareholder value.
                  </p>
                </div>
              </div>
              
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Fairness Opinions</h5>
                  <p className="card-text">
                    DCF provides an independent assessment of a company's intrinsic value to determine if transaction terms are fair.
                  </p>
                </div>
              </div>
              
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Strategic Planning</h5>
                  <p className="card-text">
                    DCF helps evaluate different strategic alternatives by quantifying their impact on company value.
                  </p>
                </div>
              </div>
              
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Pitch Books</h5>
                  <p className="card-text">
                    DCF analysis is a standard component of investment banking pitch books to demonstrate valuation expertise.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
