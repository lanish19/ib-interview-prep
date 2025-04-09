import React from 'react';
import VisualAid from '../../components/VisualAid';
import FormulaDisplay from '../../components/FormulaDisplay';
import ComparisonTable from '../../components/ComparisonTable';
import ProcessFlow from '../../components/ProcessFlow';
import ChartDisplay from '../../components/ChartDisplay';
import KeyConcept from '../../components/KeyConcept';
import CaseStudy from '../../components/CaseStudy';
import PracticeQuestion from '../../components/PracticeQuestion';

const incomeStatementContent = () => {
  return (
    <div className="content-container">
      <KeyConcept
        title="What is an Income Statement?"
        concept="The income statement (also called the profit and loss statement or P&L) is a financial statement that shows a company's revenues, expenses, and resulting profits or losses over a specific period (quarter or year). It provides information about a company's ability to generate profit by increasing revenue, reducing costs, or both."
        explanation="Unlike the balance sheet, which represents a single moment in time, the income statement covers a defined period and shows how profitable the company was during that time frame."
        importance="In investment banking, the income statement is crucial for valuation, financial modeling, and assessing a company's operational performance. It provides insights into revenue growth, profit margins, and earnings trends that drive company valuations and investment decisions.

Example: When analyzing Deere & Company (DE), investment bankers closely examine the income statement to understand the company's financial performance across its business segments. For instance, in 2024, Deere reported revenue of $51.64 billion with an operating income of $12.61 billion, representing a 24.4% operating margin. This analysis reveals that despite a 15.6% revenue decline from 2023 ($61.22 billion), Deere maintained strong profitability. Investment bankers would note the company's ability to generate substantial operating income even during cyclical downturns in the agricultural equipment market, highlighting its operational efficiency and cost management capabilities. This income statement analysis forms the foundation for valuation models, helping bankers advise on potential M&A opportunities, capital raising, or strategic alternatives for Deere."
        examples={[
          "Analyzing year-over-year revenue growth to assess company performance",
          "Evaluating EBITDA margins to compare operational efficiency across competitors",
          "Projecting future earnings as the basis for valuation models"
        ]}
      />
      
      <VisualAid title="Key Components" type="concept">
        <div className="key-components">
          <div className="component-item mb-4">
            <h4>Revenue (Top Line)</h4>
            <p>The total amount of money generated from sales of products or services before any expenses are deducted.</p>
            <ul>
              <li>May be broken down by business segment or product line</li>
              <li>Can include both operating revenue (from primary business activities) and non-operating revenue</li>
            </ul>
          </div>
          
          <div className="component-item mb-4">
            <h4>Cost of Goods Sold (COGS)</h4>
            <p>Direct costs attributable to the production of goods or services sold by the company.</p>
            <ul>
              <li>Includes raw materials, direct labor, and manufacturing overhead</li>
              <li>Does not include indirect costs like marketing, R&D, and administrative expenses</li>
            </ul>
          </div>
          
          <div className="component-item mb-4">
            <h4>Gross Profit</h4>
            <p>Revenue minus Cost of Goods Sold.</p>
            <ul>
              <li>Represents the profit from core production activities</li>
              <li>Gross margin (Gross Profit ÷ Revenue) is a key profitability metric</li>
            </ul>
          </div>
          
          <div className="component-item mb-4">
            <h4>Operating Expenses</h4>
            <p>Costs associated with running the business that are not directly tied to production.</p>
            <ul>
              <li>Includes Selling, General & Administrative (SG&A) expenses</li>
              <li>Research & Development (R&D) costs</li>
              <li>Depreciation and Amortization of assets</li>
            </ul>
          </div>
          
          <div className="component-item mb-4">
            <h4>Operating Income (EBIT)</h4>
            <p>Gross Profit minus Operating Expenses.</p>
            <ul>
              <li>Earnings Before Interest and Taxes</li>
              <li>Measures profitability from core business operations</li>
              <li>Operating margin (Operating Income ÷ Revenue) shows operational efficiency</li>
            </ul>
          </div>
          
          <div className="component-item mb-4">
            <h4>Interest Expense</h4>
            <p>Cost of borrowing money from lenders.</p>
            <ul>
              <li>Reflects the company's debt burden</li>
              <li>Deducted after operating income to separate operational and financing activities</li>
            </ul>
          </div>
          
          <div className="component-item mb-4">
            <h4>Income Before Taxes (EBT)</h4>
            <p>Operating Income minus Interest Expense, plus/minus other non-operating items.</p>
            <ul>
              <li>Includes non-operating income and expenses</li>
              <li>Last step before applying tax rate</li>
            </ul>
          </div>
          
          <div className="component-item mb-4">
            <h4>Income Tax Expense</h4>
            <p>Taxes payable on the company's taxable income.</p>
            <ul>
              <li>Based on statutory tax rates and tax planning strategies</li>
              <li>Effective tax rate may differ from statutory rate due to various factors</li>
            </ul>
          </div>
          
          <div className="component-item">
            <h4>Net Income (Bottom Line)</h4>
            <p>The final profit after all expenses, including taxes.</p>
            <ul>
              <li>Represents earnings available to shareholders</li>
              <li>Used to calculate Earnings Per Share (EPS)</li>
              <li>Net margin (Net Income ÷ Revenue) is a key profitability metric</li>
            </ul>
          </div>
        </div>
      </VisualAid>
      
      <FormulaDisplay
        title="EBITDA Calculation"
        formula="EBITDA = Net Income + Interest + Taxes + Depreciation + Amortization"
        variables={[
          { symbol: "EBITDA", description: "Earnings Before Interest, Taxes, Depreciation, and Amortization" },
          { symbol: "Net Income", description: "The bottom line profit after all expenses" },
          { symbol: "Interest", description: "Interest expense from debt financing" },
          { symbol: "Taxes", description: "Income tax expense" },
          { symbol: "Depreciation", description: "Allocation of tangible asset costs over useful life" },
          { symbol: "Amortization", description: "Allocation of intangible asset costs over useful life" }
        ]}
        example="If a company has Net Income of $10 million, Interest Expense of $5 million, Income Tax Expense of $4 million, Depreciation of $3 million, and Amortization of $2 million, its EBITDA would be: $10M + $5M + $4M + $3M + $2M = $24 million."
        notes="EBITDA is widely used in investment banking as a proxy for operating cash flow and for valuation purposes (e.g., EV/EBITDA multiple). It removes the effects of financing and accounting decisions, allowing for better comparability across companies."
      />
      
      <FormulaDisplay
        title="Earnings Per Share (EPS) Calculation"
        formula="EPS = (Net Income - Preferred Dividends) ÷ Weighted Average Shares Outstanding"
        variables={[
          { symbol: "EPS", description: "Earnings Per Share" },
          { symbol: "Net Income", description: "The bottom line profit after all expenses" },
          { symbol: "Preferred Dividends", description: "Dividends paid to preferred shareholders" },
          { symbol: "Weighted Average Shares Outstanding", description: "Average number of common shares during the period" }
        ]}
        example="If a company has Net Income of $100 million, Preferred Dividends of $5 million, and 50 million Weighted Average Shares Outstanding, its EPS would be: ($100M - $5M) ÷ 50M = $1.90 per share."
        notes={[
          "Basic EPS uses only the weighted average of outstanding common shares",
          "Diluted EPS includes the potential dilution from convertible securities and stock options",
          "EPS is a key input for the Price-to-Earnings (P/E) ratio, a common valuation metric"
        ]}
      />
      
      <ComparisonTable
        title="Common Profitability Metrics"
        headers={["Metric", "Formula", "What It Measures", "Typical Range"]}
        rows={[
          [
            "Gross Margin",
            "Gross Profit ÷ Revenue",
            "Profitability after direct production costs",
            "20-60% (varies widely by industry)"
          ],
          [
            "Operating Margin",
            "Operating Income ÷ Revenue",
            "Profitability from core business operations",
            "10-30% (varies widely by industry)"
          ],
          [
            "EBITDA Margin",
            "EBITDA ÷ Revenue",
            "Operating cash flow generation capacity",
            "15-40% (varies widely by industry)"
          ],
          [
            "Net Margin",
            "Net Income ÷ Revenue",
            "Overall profitability after all expenses",
            "5-20% (varies widely by industry)"
          ],
          [
            "Return on Assets (ROA)",
            "Net Income ÷ Average Total Assets",
            "Efficiency of asset utilization",
            "5-20% (higher is better)"
          ],
          [
            "Return on Equity (ROE)",
            "Net Income ÷ Average Shareholders' Equity",
            "Return generated on shareholders' investment",
            "10-30% (higher is better)"
          ]
        ]}
        description="These profitability metrics are derived from the income statement (sometimes in combination with the balance sheet) and are used to evaluate a company's financial performance from different perspectives."
      />
      
      <ProcessFlow
        title="Income Statement Analysis Process"
        steps={[
          {
            title: "Trend Analysis",
            description: "Examine how key line items have changed over time.",
            details: "Compare year-over-year and quarter-over-quarter growth rates for revenue, gross profit, operating income, and net income. Identify consistent trends or unusual fluctuations that require explanation."
          },
          {
            title: "Margin Analysis",
            description: "Evaluate profitability at different levels of the income statement.",
            details: "Calculate and track gross margin, operating margin, EBITDA margin, and net margin over time. Compare against industry benchmarks and competitors to assess relative performance."
          },
          {
            title: "Revenue Breakdown",
            description: "Analyze revenue composition and growth drivers.",
            details: "Break down revenue by business segment, product line, geography, or customer type if available. Identify which areas are driving growth or experiencing challenges."
          },
          {
            title: "Expense Analysis",
            description: "Examine the cost structure and expense trends.",
            details: "Analyze COGS, SG&A, R&D, and other expenses as percentages of revenue. Identify opportunities for cost optimization or areas of concern where expenses are growing faster than revenue."
          },
          {
            title: "Non-Recurring Items",
            description: "Isolate one-time or unusual items that affect comparability.",
            details: "Identify and adjust for restructuring charges, asset impairments, litigation settlements, gains/losses on asset sales, and other non-recurring items to understand the underlying operating performance."
          },
          {
            title: "Earnings Quality Assessment",
            description: "Evaluate the sustainability and quality of reported earnings.",
            details: "Analyze the gap between reported earnings and cash flow, the use of aggressive accounting policies, and the reliance on non-recurring gains to meet earnings targets."
          }
        ]}
        description="When analyzing an income statement in investment banking, analysts typically follow these steps to gain comprehensive insights into a company's financial performance:"
      />
      
      <ChartDisplay
        title="Income Statement Structure"
        chartType="flowchart"
        imageUrl="/images/income-statement-structure.png"
        description="This flowchart illustrates the structure of the income statement, showing how various components flow from revenue to net income."
        legend={[
          { color: "#4CAF50", label: "Revenue Components" },
          { color: "#F44336", label: "Expense Components" },
          { color: "#2196F3", label: "Profit Metrics" }
        ]}
      />
      
      <VisualAid title="Common Income Statement Adjustments" type="info">
        <div className="adjustments">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Non-Recurring Items</h4>
              <p>One-time events that distort the underlying operating performance.</p>
              <ul>
                <li>Restructuring charges</li>
                <li>Asset impairments</li>
                <li>Litigation settlements</li>
                <li>Gains/losses on asset sales</li>
                <li>M&A-related expenses</li>
              </ul>
            </div>
            
            <div className="col-md-6 mb-4">
              <h4>Stock-Based Compensation</h4>
              <p>Non-cash expense that affects reported earnings.</p>
              <ul>
                <li>Added back in adjusted EBITDA calculations</li>
                <li>Represents real economic cost despite being non-cash</li>
                <li>Varies significantly across industries and growth stages</li>
                <li>Can be substantial for technology and high-growth companies</li>
              </ul>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Operating Lease Adjustments</h4>
              <p>Accounting for leases as debt-like obligations.</p>
              <ul>
                <li>Capitalizing operating leases for comparability</li>
                <li>Adjusting rent expense to implied interest and depreciation</li>
                <li>Particularly important for retail, airlines, and restaurant companies</li>
                <li>Less relevant under new lease accounting standards (ASC 842)</li>
              </ul>
            </div>
            
            <div className="col-md-6 mb-4">
              <h4>Normalization Adjustments</h4>
              <p>Adjustments to reflect normal operating conditions.</p>
              <ul>
                <li>Normalizing for unusual weather impacts</li>
                <li>Adjusting for temporary supply chain disruptions</li>
                <li>Accounting for cyclical factors</li>
                <li>Normalizing for non-recurring customer gains or losses</li>
              </ul>
            </div>
          </div>
        </div>
      </VisualAid>
      
      <CaseStudy
        title="Income Statement Analysis Case Study: Technology Company"
        scenario="You are an investment banking analyst evaluating the income statement of a software-as-a-service (SaaS) company that is considering an IPO. The company has shown strong revenue growth but has yet to achieve consistent profitability. Your task is to analyze the income statement to assess the company's financial performance and prospects."
        questions={[
          "What key metrics would you focus on for a SaaS company?",
          "How would you evaluate the company's path to profitability?",
          "What adjustments might be necessary to understand the true operating performance?",
          "How would this analysis inform your IPO valuation approach?"
        ]}
        analysis={
          <div>
            <p>Key SaaS metrics analysis:</p>
            <ul>
              <li>Revenue Growth: 45% year-over-year, above the 30% benchmark for high-growth SaaS</li>
              <li>Gross Margin: 75%, in line with SaaS industry standards of 70-80%</li>
              <li>Customer Acquisition Cost (CAC): $15,000 per customer</li>
              <li>Lifetime Value (LTV): $75,000 per customer, yielding a healthy LTV/CAC ratio of 5.0x</li>
              <li>Net Revenue Retention: 115%, indicating strong expansion within existing customers</li>
            </ul>
            <p>Path to profitability assessment:</p>
            <ul>
              <li>Operating Loss: -20% of revenue, improved from -35% in the previous year</li>
              <li>Sales & Marketing: 45% of revenue, down from 55% as the company scales</li>
              <li>R&D: 30% of revenue, consistent with investment in product development</li>
              <li>G&A: 20% of revenue, higher than the 15% benchmark for efficient SaaS companies</li>
              <li>Projected break-even: Within 2 years based on current trajectory and operating leverage</li>
            </ul>
            <p>Key adjustments:</p>
            <ul>
              <li>Stock-Based Compensation: 10% of revenue, added back for adjusted EBITDA</li>
              <li>One-time litigation settlement: $2.5 million expense removed from adjusted figures</li>
              <li>Deferred Revenue Adjustment: Accounting for changes in contract duration</li>
              <li>Customer Acquisition Cost: Partially capitalized for adjusted profitability metrics</li>
            </ul>
          </div>
        }
        conclusion="Based on the income statement analysis, the SaaS company demonstrates strong fundamentals despite current GAAP losses. The 45% revenue growth, 75% gross margins, and improving operating margins indicate a clear path to profitability. The high LTV/CAC ratio of 5.0x and 115% net revenue retention suggest efficient customer acquisition and strong product-market fit. After adjusting for stock-based compensation and one-time items, the adjusted EBITDA margin is -5%, significantly better than the -20% GAAP operating margin. For IPO valuation, we would recommend using revenue multiples as the primary valuation method, with EV/Revenue multiples of 10-12x justified by the company's growth rate and improving unit economics. The company should position its IPO narrative around the strong growth, improving operating leverage, and clear path to profitability within 2 years."
        takeaways={[
          "SaaS companies require specialized metrics beyond traditional income statement analysis",
          "Growth and gross margin are typically more important than current profitability for high-growth SaaS",
          "Stock-based compensation is a significant expense for tech companies that affects reported earnings",
          "Operating leverage and improving efficiency metrics are key indicators of future profitability",
          "Public market investors increasingly focus on the path to profitability, not just growth"
        ]}
      />
      
      <VisualAid title="Common Interview Questions" type="note">
        <ol>
          <li className="mb-3">
            <strong>Walk me through the income statement.</strong>
            <p>The income statement starts with revenue (top line), which represents the total sales generated during the period. From revenue, we subtract cost of goods sold (COGS) to arrive at gross profit. Next, we deduct operating expenses such as selling, general & administrative (SG&A) expenses, research & development (R&D), and depreciation & amortization to calculate operating income or EBIT (Earnings Before Interest and Taxes). From operating income, we subtract interest expense and add interest income to get income before taxes. Finally, we deduct income tax expense to arrive at net income (bottom line), which represents the profit available to shareholders.</p>
          </li>
          <li className="mb-3">
            <strong>What's the difference between EBIT, EBITDA, and Net Income?</strong>
            <p>EBIT (Earnings Before Interest and Taxes) represents operating profit before financing costs and taxes, showing the company's ability to generate profit from its operations regardless of capital structure or tax environment. EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) further excludes non-cash depreciation and amortization expenses, providing a proxy for operating cash flow and allowing better comparability across companies with different asset bases. Net Income is the final profit after all expenses, including interest, taxes, depreciation, and amortization, representing the earnings available to shareholders. Each metric serves different analytical purposes: EBIT for operational performance, EBITDA for cash flow generation capacity, and Net Income for shareholder returns.</p>
          </li>
          <li className="mb-3">
            <strong>How would a $10 million increase in revenue flow through the income statement?</strong>
            <p>A $10 million increase in revenue would flow through the income statement as follows: Assuming a 60% gross margin, gross profit would increase by $6 million ($10M × 60%). If operating expenses are partially fixed and partially variable, operating income might increase by $4-5 million (assuming incremental operating margin of 40-50%). Interest expense would remain unchanged if no additional debt is required. Assuming a 25% tax rate, the additional pre-tax income of $4-5 million would result in $1-1.25 million more in taxes. Therefore, net income would increase by approximately $3-3.75 million. The exact impact depends on the company's cost structure, particularly the mix of fixed and variable costs, which determines the degree of operating leverage.</p>
          </li>
          <li className="mb-3">
            <strong>Why might a company's revenue be growing but its profitability declining?</strong>
            <p>A company's revenue might grow while profitability declines for several reasons: (1) Increasing competition leading to price pressure and margin compression; (2) Changing product mix toward lower-margin offerings; (3) Rising input costs (materials, labor) that cannot be fully passed on to customers; (4) Scaling inefficiencies where the cost structure isn't optimized for higher volumes; (5) Investments in growth initiatives (new markets, products) that haven't yet generated proportional returns; (6) Diminishing returns on marketing spend as the company targets less profitable customer segments; or (7) Loss of operating leverage if fixed costs are increasing faster than revenue. Analyzing the specific components of the income statement and their trends would help identify which factors are most responsible.</p>
          </li>
          <li>
            <strong>How do non-GAAP adjustments affect income statement analysis?</strong>
            <p>Non-GAAP adjustments affect income statement analysis by: (1) Removing one-time or non-recurring items to better reflect underlying operating performance; (2) Adding back non-cash expenses like stock-based compensation or amortization of intangibles to approximate cash earnings; (3) Normalizing for unusual events or accounting changes to improve period-to-period comparability; (4) Adjusting for acquisition-related expenses to show pro forma performance; and (5) Excluding restructuring charges to focus on ongoing business operations. While these adjustments can provide valuable insights, they require careful scrutiny as companies have discretion in what they exclude, potentially creating an overly optimistic picture. Best practice is to analyze both GAAP and non-GAAP metrics, understanding the nature and materiality of each adjustment.</p>
          </li>
        </ol>
      </VisualAid>
    </div>
  );
};

export default incomeStatementContent;
