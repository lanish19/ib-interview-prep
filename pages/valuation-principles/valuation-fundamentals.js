import React from 'react';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import Sidebar from '../../components/Sidebar';
import Head from 'next/head';
import Flashcard from '../../components/Flashcard';

export default function ValuationFundamentals() {
  const flashcardData = [
    {
      question: "What is the Time Value of Money?",
      answer: "The concept that money available now is worth more than the same amount in the future due to its potential earning capacity.",
      explanation: "This is a fundamental principle in finance that forms the basis for concepts like discounted cash flow analysis.",
      category: "Basic Concept"
    },
    {
      question: "What is the formula for Present Value?",
      answer: "PV = FV / (1 + r)^n",
      explanation: "Where PV is Present Value, FV is Future Value, r is the discount rate, and n is the number of periods.",
      category: "Formula"
    },
    {
      question: "What is the difference between Enterprise Value and Equity Value?",
      answer: "Enterprise Value represents the total value of a company (debt + equity), while Equity Value represents only the value attributable to shareholders.",
      explanation: "The relationship can be expressed as: Enterprise Value = Equity Value + Net Debt - Cash & Cash Equivalents + Minority Interest + Preferred Stock.",
      category: "Valuation Concept"
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Valuation Fundamentals - Valuation Principles - Investment Banking Interview Prep</title>
        <meta name="description" content="Master the fundamental principles of valuation for investment banking interviews. Learn time value of money, risk and return, and key valuation methodologies." />
      </Head>
      
      <div className="container py-4">
        <Breadcrumb 
          items={[
            { label: 'Valuation Principles', href: '/valuation-principles' },
            { label: 'Valuation Fundamentals', href: '/valuation-principles/valuation-fundamentals' }
          ]} 
        />
        
        <div className="row mt-4">
          <div className="col-lg-3">
            <div className="sticky-top pt-3" style={{ top: '80px' }}>
              <Sidebar items={[
                { id: 'overview', label: 'Concept Overview', href: '#overview', completed: true },
                { id: 'principles', label: 'Key Principles', href: '#principles', completed: true },
                { id: 'methodologies', label: 'Valuation Methodologies', href: '#methodologies', completed: true },
                { id: 'practice', label: 'Practice Flashcards', href: '#practice', completed: true },
                { id: 'relevance', label: 'Relevance to IB', href: '#relevance', completed: true }
              ]} />
            </div>
          </div>
          
          <div className="col-lg-9">
            <h1>Valuation Fundamentals</h1>
            <p className="lead">
              Understanding the core principles of valuation is essential for any investment banking professional.
            </p>
            
            <section id="overview" className="mb-5">
              <h2>Concept Overview</h2>
              <p>
                Valuation is the process of determining the current worth of an asset or company. In investment banking, accurate valuation is crucial for advising clients on mergers and acquisitions, capital raising, and other financial transactions.
              </p>
              <p>
                The fundamental premise of valuation is that an asset's value is based on the future cash flows it is expected to generate, adjusted for time and risk.
              </p>
            </section>
            
            <section id="principles" className="mb-5">
              <h2>Key Principles</h2>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Time Value of Money</h5>
                  <p className="card-text">
                    The concept that money available now is worth more than the same amount in the future due to its potential earning capacity.
                  </p>
                  <div className="alert alert-info">
                    <strong>Key Formulas:</strong>
                    <ul className="mb-0">
                      <li>Future Value: FV = PV × (1 + r)^n</li>
                      <li>Present Value: PV = FV / (1 + r)^n</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Risk and Return</h5>
                  <p className="card-text">
                    The principle that higher risk investments should provide higher expected returns to compensate investors for taking on additional risk.
                  </p>
                  <p>
                    This relationship is fundamental to determining appropriate discount rates in valuation.
                  </p>
                </div>
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Going Concern</h5>
                  <p className="card-text">
                    The assumption that a company will continue to operate indefinitely, which affects how we value its assets and liabilities.
                  </p>
                </div>
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Intrinsic vs. Relative Value</h5>
                  <p className="card-text">
                    Intrinsic value is based on an asset's fundamental characteristics and expected cash flows, while relative value is based on how similar assets are priced in the market.
                  </p>
                </div>
              </div>
            </section>
            
            <section id="methodologies" className="mb-5">
              <h2>Valuation Methodologies</h2>
              <p>
                There are several approaches to valuation, each with its own strengths and limitations.
              </p>
              
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Methodology</th>
                      <th>Description</th>
                      <th>When to Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Discounted Cash Flow (DCF)</td>
                      <td>Values a company based on the present value of its projected future cash flows</td>
                      <td>
                        <ul>
                          <li>Stable, predictable cash flows</li>
                          <li>Long-term perspective</li>
                          <li>Detailed forecasts available</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Comparable Company Analysis</td>
                      <td>Values a company based on trading multiples of similar public companies</td>
                      <td>
                        <ul>
                          <li>Similar public companies exist</li>
                          <li>Market-based perspective</li>
                          <li>Quick analysis needed</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Precedent Transactions</td>
                      <td>Values a company based on multiples paid in previous M&A transactions</td>
                      <td>
                        <ul>
                          <li>M&A context</li>
                          <li>Control premium consideration</li>
                          <li>Similar transactions available</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Leveraged Buyout (LBO)</td>
                      <td>Values a company based on potential returns to a financial sponsor in an LBO scenario</td>
                      <td>
                        <ul>
                          <li>Financial sponsor perspective</li>
                          <li>Significant leverage potential</li>
                          <li>Strong, stable cash flows</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Asset-Based Valuation</td>
                      <td>Values a company based on the market value of its assets minus liabilities</td>
                      <td>
                        <ul>
                          <li>Asset-heavy businesses</li>
                          <li>Liquidation scenarios</li>
                          <li>Real estate or investment companies</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            <section id="practice" className="mb-5">
              <h2>Practice Flashcards</h2>
              <p>
                Test your understanding of valuation fundamentals with these flashcards.
              </p>
              
              <div className="mt-4">
                <Flashcard cards={flashcardData} onComplete={(results) => console.log('Flashcard session completed:', results)} />
              </div>
            </section>
            
            <section id="relevance" className="mb-5">
              <h2>Relevance to Investment Banking</h2>
              <p>
                Understanding valuation fundamentals is critical for investment bankers for several reasons:
              </p>
              
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">M&A Advisory</h5>
                  <p className="card-text">
                    Determining appropriate purchase prices and advising clients on whether a deal creates or destroys value.
                  </p>
                </div>
              </div>
              
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Capital Raising</h5>
                  <p className="card-text">
                    Determining appropriate pricing for equity and debt offerings.
                  </p>
                </div>
              </div>
              
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Fairness Opinions</h5>
                  <p className="card-text">
                    Providing independent assessments of whether transaction terms are fair from a financial perspective.
                  </p>
                </div>
              </div>
              
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Restructuring</h5>
                  <p className="card-text">
                    Assessing the value of different business units or assets to determine optimal restructuring strategies.
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
