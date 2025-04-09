import React from 'react';
import Layout from '../components/Layout';
import KnowledgeBucketCard from '../components/KnowledgeBucketCard';
import Head from 'next/head';

export default function Home() {
  const knowledgeBuckets = [
    {
      id: 'accounting',
      title: 'Accounting',
      description: 'Master the fundamentals of financial statements, accounting principles, and financial analysis essential for investment banking interviews.',
      modules: [
        { id: 'income-statement', title: 'Income Statement' },
        { id: 'balance-sheet', title: 'Balance Sheet' },
        { id: 'cash-flow-statement', title: 'Cash Flow Statement' },
        { id: 'financial-ratios', title: 'Financial Ratios' },
        { id: 'accounting-principles', title: 'Accounting Principles' },
        { id: 'financial-statement-analysis', title: 'Financial Statement Analysis' },
        { id: 'working-capital', title: 'Working Capital' },
        { id: 'advanced-accounting-topics', title: 'Advanced Accounting Topics' }
      ]
    },
    {
      id: 'valuation-principles',
      title: 'Valuation Principles',
      description: 'Learn the core concepts and methodologies of valuation that form the foundation of investment banking analysis.',
      modules: [
        { id: 'valuation-fundamentals', title: 'Valuation Fundamentals' },
        { id: 'time-value-of-money', title: 'Time Value of Money' },
        { id: 'cost-of-capital', title: 'Cost of Capital' },
        { id: 'terminal-value', title: 'Terminal Value' },
        { id: 'valuation-multiples', title: 'Valuation Multiples' },
        { id: 'enterprise-vs-equity-value', title: 'Enterprise vs. Equity Value' },
        { id: 'sensitivity-analysis', title: 'Sensitivity Analysis' },
        { id: 'valuation-best-practices', title: 'Valuation Best Practices' }
      ]
    },
    {
      id: 'intrinsic-valuation',
      title: 'Intrinsic Valuation (DCF)',
      description: 'Develop expertise in Discounted Cash Flow analysis, the most fundamental intrinsic valuation methodology in investment banking.',
      modules: [
        { id: 'dcf-fundamentals', title: 'DCF Fundamentals' },
        { id: 'forecasting-cash-flows', title: 'Forecasting Cash Flows' },
        { id: 'wacc-calculation', title: 'WACC Calculation' },
        { id: 'terminal-value-approaches', title: 'Terminal Value Approaches' },
        { id: 'dcf-variations', title: 'DCF Variations' },
        { id: 'sensitivity-scenario-analysis', title: 'Sensitivity & Scenario Analysis' },
        { id: 'advanced-dcf-topics', title: 'Advanced DCF Topics' },
        { id: 'dcf-case-studies', title: 'DCF Case Studies' }
      ]
    },
    {
      id: 'relative-valuation',
      title: 'Relative Valuation (Comps)',
      description: 'Master the art of comparable companies and precedent transactions analysis, essential tools for market-based valuation.',
      modules: [
        { id: 'comparable-companies', title: 'Comparable Companies Analysis' },
        { id: 'precedent-transactions', title: 'Precedent Transactions Analysis' },
        { id: 'selecting-appropriate-comps', title: 'Selecting Appropriate Comps' },
        { id: 'valuation-multiples-analysis', title: 'Valuation Multiples Analysis' },
        { id: 'adjusting-for-differences', title: 'Adjusting for Differences' },
        { id: 'football-field-analysis', title: 'Football Field Analysis' },
        { id: 'industry-specific-multiples', title: 'Industry-Specific Multiples' },
        { id: 'comps-case-studies', title: 'Comps Case Studies' }
      ]
    },
    {
      id: 'mergers-acquisitions',
      title: 'Mergers & Acquisitions (M&A)',
      description: 'Understand the strategic, financial, and process aspects of mergers and acquisitions from an investment banking perspective.',
      modules: [
        { id: 'ma-fundamentals', title: 'M&A Fundamentals' },
        { id: 'deal-structures', title: 'Deal Structures' },
        { id: 'valuation-considerations', title: 'Valuation Considerations' },
        { id: 'accretion-dilution-analysis', title: 'Accretion/Dilution Analysis' },
        { id: 'synergy-analysis', title: 'Synergy Analysis' },
        { id: 'transaction-process', title: 'Transaction Process' },
        { id: 'regulatory-considerations', title: 'Regulatory Considerations' },
        { id: 'ma-case-studies', title: 'M&A Case Studies' }
      ]
    },
    {
      id: 'leveraged-buyouts',
      title: 'Leveraged Buyouts (LBO)',
      description: 'Develop proficiency in LBO analysis, understanding how financial sponsors evaluate and structure leveraged transactions.',
      modules: [
        { id: 'lbo-fundamentals', title: 'LBO Fundamentals' },
        { id: 'lbo-model-structure', title: 'LBO Model Structure' },
        { id: 'debt-structures', title: 'Debt Structures' },
        { id: 'returns-analysis', title: 'Returns Analysis' },
        { id: 'exit-strategies', title: 'Exit Strategies' },
        { id: 'lbo-candidates', title: 'LBO Candidates' },
        { id: 'sponsor-considerations', title: 'Sponsor Considerations' },
        { id: 'lbo-case-studies', title: 'LBO Case Studies' }
      ]
    },
    {
      id: 'market-dynamics',
      title: 'Market Dynamics',
      description: 'Gain insights into capital markets, economic indicators, and industry trends that influence investment banking activities.',
      modules: [
        { id: 'macroeconomic-indicators', title: 'Macroeconomic Indicators' },
        { id: 'capital-markets-overview', title: 'Capital Markets Overview' },
        { id: 'equity-markets', title: 'Equity Markets' },
        { id: 'debt-markets', title: 'Debt Markets' },
        { id: 'industry-analysis', title: 'Industry Analysis' },
        { id: 'market-cycles', title: 'Market Cycles' },
        { id: 'global-market-considerations', title: 'Global Market Considerations' },
        { id: 'current-market-trends', title: 'Current Market Trends' }
      ]
    },
    {
      id: 'behavioral-questions',
      title: 'Behavioral & Fit Questions',
      description: 'Prepare for the critical behavioral and fit aspects of investment banking interviews that assess your suitability for the role.',
      modules: [
        { id: 'tell-me-about-yourself', title: 'Tell Me About Yourself' },
        { id: 'why-investment-banking', title: 'Why Investment Banking' },
        { id: 'why-our-firm', title: 'Why Our Firm' },
        { id: 'strengths-and-weaknesses', title: 'Strengths and Weaknesses' },
        { id: 'leadership-examples', title: 'Leadership Examples' },
        { id: 'teamwork-scenarios', title: 'Teamwork Scenarios' },
        { id: 'handling-challenges', title: 'Handling Challenges' },
        { id: 'career-goals', title: 'Career Goals' }
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Investment Banking Interview Prep</title>
        <meta name="description" content="Comprehensive preparation platform for investment banking interviews" />
      </Head>
      
      <div className="container mt-5">
        <div className="jumbotron bg-light p-5 rounded">
          <h1 className="display-4">Investment Banking Interview Preparation</h1>
          <p className="lead">
            Master the technical and behavioral aspects of investment banking interviews with our comprehensive preparation platform.
          </p>
          <hr className="my-4" />
          <p>
            Explore eight core knowledge areas essential for success in investment banking interviews, from accounting fundamentals to advanced valuation techniques.
          </p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#knowledge-buckets" role="button">Start Learning</a>
          </p>
        </div>

        <section id="knowledge-buckets" className="my-5">
          <h2 className="text-center mb-4">Knowledge Buckets</h2>
          <div className="row">
            {knowledgeBuckets.map((bucket) => (
              <div className="col-md-6 col-lg-4 mb-4" key={bucket.id}>
                <KnowledgeBucketCard 
                  id={bucket.id}
                  title={bucket.title}
                  description={bucket.description}
                  modules={bucket.modules}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="my-5 p-5 bg-light rounded">
          <h2 className="text-center mb-4">Why This Platform?</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <h3 className="h5 card-title">Comprehensive Coverage</h3>
                  <p className="card-text">
                    Eight core knowledge areas with detailed explanations, practice questions, and interactive tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <h3 className="h5 card-title">Practical Application</h3>
                  <p className="card-text">
                    Real-world examples, case studies, and interactive calculators to apply concepts to actual scenarios.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <h3 className="h5 card-title">Interview-Focused</h3>
                  <p className="card-text">
                    Content specifically designed to prepare you for the questions you'll face in investment banking interviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
