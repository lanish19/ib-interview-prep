import React from 'react';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import Sidebar from '../../components/Sidebar';
import Head from 'next/head';
import Quiz from '../../components/Quiz';

export default function IncomeStatement() {
  const quizQuestions = [
    {
      question: "Which of the following is NOT typically found on an income statement?",
      answers: [
        "Revenue",
        "Cost of Goods Sold",
        "Cash and Cash Equivalents",
        "Operating Expenses"
      ],
      correctAnswer: 2,
      explanation: "Cash and Cash Equivalents are balance sheet items, not income statement items. The income statement shows revenues, expenses, and profits over a period of time, while the balance sheet shows assets, liabilities, and equity at a specific point in time."
    },
    {
      question: "What is the formula for Gross Profit?",
      answers: [
        "Revenue - Operating Expenses",
        "Revenue - Cost of Goods Sold",
        "Revenue - Total Expenses",
        "Operating Income - Taxes"
      ],
      correctAnswer: 1,
      explanation: "Gross Profit is calculated as Revenue minus Cost of Goods Sold (COGS). It represents the profit a company makes after deducting the costs directly associated with making and selling its products, but before deducting operating expenses, interest, and taxes."
    },
    {
      question: "EBITDA stands for:",
      answers: [
        "Earnings Before Interest, Taxes, Depreciation, and Amortization",
        "Earnings Before Income Tax, Dividends, and Adjustments",
        "Equity Before Interest, Taxes, and Debt Allocation",
        "Earnings Before Internal Transfers and Debt Arrangements"
      ],
      correctAnswer: 0,
      explanation: "EBITDA stands for Earnings Before Interest, Taxes, Depreciation, and Amortization. It's a measure of a company's overall financial performance and is used as an alternative to net income in some circumstances."
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Income Statement - Accounting - Investment Banking Interview Prep</title>
        <meta name="description" content="Master the income statement for investment banking interviews. Learn key components, analysis techniques, and common interview questions." />
      </Head>
      
      <div className="container py-4">
        <Breadcrumb 
          items={[
            { label: 'Accounting', href: '/accounting' },
            { label: 'Income Statement', href: '/accounting/income-statement' }
          ]} 
        />
        
        <div className="row mt-4">
          <div className="col-lg-3">
            <div className="sticky-top pt-3" style={{ top: '80px' }}>
              <Sidebar items={[
                { id: 'overview', label: 'Concept Overview', href: '#overview', completed: true },
                { id: 'components', label: 'Key Components', href: '#components', completed: true },
                { id: 'analysis', label: 'Analysis Techniques', href: '#analysis', completed: true },
                { id: 'practice', label: 'Practice Questions', href: '#practice', completed: true },
                { id: 'relevance', label: 'Relevance to IB', href: '#relevance', completed: true }
              ]} />
            </div>
          </div>
          
          <div className="col-lg-9">
            <h1>Income Statement</h1>
            <p className="lead">
              The income statement is one of the three main financial statements used to assess a company's financial performance over a specific accounting period.
            </p>
            
            <section id="overview" className="mb-5">
              <h2>Concept Overview</h2>
              <p>
                The income statement, also known as the profit and loss statement (P&L), shows a company's revenues, costs, and expenses over a specific period (quarter or year). It provides information about a company's ability to generate profit by increasing revenue, reducing costs, or both.
              </p>
              <p>
                Unlike the balance sheet, which represents a single moment in time, the income statement covers a defined period and shows how profitable the company was during that time frame.
              </p>
            </section>
            
            <section id="components" className="mb-5">
              <h2>Key Components</h2>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Revenue (Top Line)</h5>
                  <p className="card-text">
                    The total amount of money generated from sales of products or services before any expenses are deducted.
                  </p>
                  <ul>
                    <li>May be broken down by business segment or product line</li>
                    <li>Can include both operating revenue (from primary business activities) and non-operating revenue</li>
                  </ul>
                </div>
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Cost of Goods Sold (COGS)</h5>
                  <p className="card-text">
                    Direct costs attributable to the production of goods or services sold by the company.
                  </p>
                  <ul>
                    <li>Includes raw materials, direct labor, and manufacturing overhead</li>
                    <li>Does not include indirect costs like marketing, R&D, and administrative expenses</li>
                  </ul>
                </div>
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Gross Profit</h5>
                  <p className="card-text">
                    Revenue minus Cost of Goods Sold.
                  </p>
                  <div className="alert alert-info">
                    <strong>Formula:</strong> Gross Profit = Revenue - COGS
                  </div>
                </div>
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Operating Expenses</h5>
                  <p className="card-text">
                    Expenses incurred in the normal course of business, excluding COGS.
                  </p>
                  <ul>
                    <li>Selling, General & Administrative (SG&A) expenses</li>
                    <li>Research & Development (R&D)</li>
                    <li>Depreciation & Amortization</li>
                    <li>Other operating expenses</li>
                  </ul>
                </div>
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Operating Income (EBIT)</h5>
                  <p className="card-text">
                    Earnings Before Interest and Taxes, also known as Operating Profit.
                  </p>
                  <div className="alert alert-info">
                    <strong>Formula:</strong> Operating Income = Gross Profit - Operating Expenses
                  </div>
                </div>
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Non-Operating Items</h5>
                  <p className="card-text">
                    Income or expenses not related to core business operations.
                  </p>
                  <ul>
                    <li>Interest income or expense</li>
                    <li>Investment gains or losses</li>
                    <li>One-time gains or charges</li>
                  </ul>
                </div>
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Income Before Tax (EBT)</h5>
                  <p className="card-text">
                    Operating Income plus or minus Non-Operating Items.
                  </p>
                </div>
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Income Tax Expense</h5>
                  <p className="card-text">
                    Taxes levied on the company's taxable income.
                  </p>
                </div>
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Net Income (Bottom Line)</h5>
                  <p className="card-text">
                    The final profit or loss after all revenues, expenses, and taxes.
                  </p>
                  <div className="alert alert-info">
                    <strong>Formula:</strong> Net Income = Income Before Tax - Income Tax Expense
                  </div>
                </div>
              </div>
            </section>
            
            <section id="analysis" className="mb-5">
              <h2>Analysis Techniques</h2>
              <p>
                Investment bankers analyze income statements to assess a company's profitability, operational efficiency, and overall financial health.
              </p>
              
              <h5 className="mt-4">Common Margin Analysis</h5>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Margin</th>
                      <th>Formula</th>
                      <th>What It Tells You</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Gross Margin</td>
                      <td>Gross Profit / Revenue</td>
                      <td>Efficiency in production and pricing power</td>
                    </tr>
                    <tr>
                      <td>Operating Margin</td>
                      <td>Operating Income / Revenue</td>
                      <td>Operational efficiency and profitability</td>
                    </tr>
                    <tr>
                      <td>Net Profit Margin</td>
                      <td>Net Income / Revenue</td>
                      <td>Overall profitability after all expenses</td>
                    </tr>
                    <tr>
                      <td>EBITDA Margin</td>
                      <td>EBITDA / Revenue</td>
                      <td>Operational profitability before non-cash expenses</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h5 className="mt-4">Year-over-Year (YoY) Analysis</h5>
              <p>
                Comparing income statement items across different periods to identify trends and growth rates.
              </p>
              <div className="alert alert-success">
                <strong>Example:</strong> If a company's revenue grew from $100M to $120M year-over-year, the growth rate would be 20%.
              </div>
              
              <h5 className="mt-4">Common Size Analysis</h5>
              <p>
                Expressing each line item as a percentage of revenue to facilitate comparisons across companies of different sizes.
              </p>
              <div className="alert alert-success">
                <strong>Example:</strong> If COGS is $60M and revenue is $100M, COGS would represent 60% of revenue in a common size income statement.
              </div>
            </section>
            
            <section id="practice" className="mb-5">
              <h2>Practice Questions</h2>
              <p>
                Test your understanding of income statements with these practice questions.
              </p>
              
              <div className="mt-4">
                <Quiz questions={quizQuestions} onComplete={(results) => console.log('Quiz completed:', results)} />
              </div>
            </section>
            
            <section id="relevance" className="mb-5">
              <h2>Relevance to Investment Banking</h2>
              <p>
                Understanding income statements is crucial for investment bankers for several reasons:
              </p>
              
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Valuation</h5>
                  <p className="card-text">
                    Income statement metrics like EBITDA are key inputs for valuation methodologies such as comparable company analysis and DCF.
                  </p>
                </div>
              </div>
              
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Financial Modeling</h5>
                  <p className="card-text">
                    Projecting future income statements is a fundamental part of financial modeling for M&A, LBO, and other transaction analyses.
                  </p>
                </div>
              </div>
              
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Due Diligence</h5>
                  <p className="card-text">
                    Analyzing historical income statements helps identify trends, risks, and opportunities during transaction due diligence.
                  </p>
                </div>
              </div>
              
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Pitch Books</h5>
                  <p className="card-text">
                    Income statement analysis is often included in pitch books to demonstrate understanding of a client's business and financial performance.
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
