import React from 'react';
import VisualAid from '../../components/VisualAid';
import FormulaDisplay from '../../components/FormulaDisplay';
import ComparisonTable from '../../components/ComparisonTable';
import ProcessFlow from '../../components/ProcessFlow';
import ChartDisplay from '../../components/ChartDisplay';
import KeyConcept from '../../components/KeyConcept';
import CaseStudy from '../../components/CaseStudy';
import PracticeQuestion from '../../components/PracticeQuestion';

const financialStatementAnalysisContent = () => {
  return (
    <div className="content-container">
      <KeyConcept
        title="Financial Statement Analysis"
        concept="Financial Statement Analysis is the process of examining a company's financial statements to gain insights into its financial health, operational performance, and strategic position."
        explanation="Financial statement analysis involves examining the income statement, balance sheet, and cash flow statement to assess a company's profitability, liquidity, solvency, and efficiency. This analysis can be conducted through various techniques including ratio analysis, common-size analysis, trend analysis, and peer comparison. The goal is to develop a comprehensive understanding of a company's financial position and performance to inform investment decisions, credit assessments, or strategic recommendations."
        importance="In investment banking, financial statement analysis forms the foundation of nearly all valuation work, transaction advisory, and strategic recommendations. As an analyst, you'll need to quickly identify key financial trends, strengths, and weaknesses from a company's financial statements to support deal execution and client advice. During due diligence for M&A transactions, you'll analyze financial statements to identify potential risks or opportunities. When building financial models, your understanding of financial statement relationships ensures accurate projections. In client presentations, you'll need to clearly communicate financial insights to support strategic recommendations. Strong financial statement analysis skills demonstrate your ability to translate numbers into meaningful business insights, which is highly valued in investment banking interviews and on the job."
        examples={[
          "Analyzing profitability ratios to assess a company's earnings quality and sustainability",
          "Examining liquidity ratios to determine a company's ability to meet short-term obligations",
          "Evaluating leverage ratios to assess a company's debt burden and financial risk",
          "Conducting trend analysis to identify patterns in revenue growth, margin expansion, or working capital efficiency"
        ]}
      />
      
      <VisualAid title="Financial Statement Analysis Framework" type="concept">
        <div className="analysis-framework">
          <div className="framework-item mb-4">
            <h4>1. Profitability Analysis</h4>
            <p>Assessing a company's ability to generate earnings relative to its revenue, assets, and equity.</p>
            <ul>
              <li><strong>Gross Margin:</strong> Gross Profit ÷ Revenue</li>
              <li><strong>Operating Margin:</strong> Operating Income ÷ Revenue</li>
              <li><strong>Net Profit Margin:</strong> Net Income ÷ Revenue</li>
              <li><strong>Return on Assets (ROA):</strong> Net Income ÷ Average Total Assets</li>
              <li><strong>Return on Equity (ROE):</strong> Net Income ÷ Average Shareholders' Equity</li>
              <li><strong>Return on Invested Capital (ROIC):</strong> NOPAT ÷ Invested Capital</li>
            </ul>
          </div>
          
          <div className="framework-item mb-4">
            <h4>2. Liquidity Analysis</h4>
            <p>Evaluating a company's ability to meet short-term obligations and convert assets to cash.</p>
            <ul>
              <li><strong>Current Ratio:</strong> Current Assets ÷ Current Liabilities</li>
              <li><strong>Quick Ratio:</strong> (Cash + Short-term Investments + Accounts Receivable) ÷ Current Liabilities</li>
              <li><strong>Cash Ratio:</strong> (Cash + Short-term Investments) ÷ Current Liabilities</li>
              <li><strong>Operating Cash Flow Ratio:</strong> Operating Cash Flow ÷ Current Liabilities</li>
              <li><strong>Working Capital:</strong> Current Assets - Current Liabilities</li>
              <li><strong>Working Capital to Sales:</strong> Working Capital ÷ Revenue</li>
            </ul>
          </div>
          
          <div className="framework-item mb-4">
            <h4>3. Solvency Analysis</h4>
            <p>Assessing a company's long-term financial stability and ability to meet long-term obligations.</p>
            <ul>
              <li><strong>Debt-to-Equity Ratio:</strong> Total Debt ÷ Shareholders' Equity</li>
              <li><strong>Debt-to-Assets Ratio:</strong> Total Debt ÷ Total Assets</li>
              <li><strong>Interest Coverage Ratio:</strong> EBIT ÷ Interest Expense</li>
              <li><strong>Debt Service Coverage Ratio:</strong> EBITDA ÷ (Principal Repayments + Interest Payments)</li>
              <li><strong>Net Debt to EBITDA:</strong> (Total Debt - Cash) ÷ EBITDA</li>
              <li><strong>Fixed Charge Coverage Ratio:</strong> (EBIT + Lease Payments) ÷ (Interest Expense + Lease Payments)</li>
            </ul>
          </div>
          
          <div className="framework-item mb-4">
            <h4>4. Efficiency Analysis</h4>
            <p>Evaluating how effectively a company uses its assets and manages its operations.</p>
            <ul>
              <li><strong>Asset Turnover:</strong> Revenue ÷ Average Total Assets</li>
              <li><strong>Inventory Turnover:</strong> Cost of Goods Sold ÷ Average Inventory</li>
              <li><strong>Receivables Turnover:</strong> Revenue ÷ Average Accounts Receivable</li>
              <li><strong>Payables Turnover:</strong> Purchases ÷ Average Accounts Payable</li>
              <li><strong>Days Sales Outstanding (DSO):</strong> (Accounts Receivable × 365) ÷ Revenue</li>
              <li><strong>Days Inventory Outstanding (DIO):</strong> (Inventory × 365) ÷ Cost of Goods Sold</li>
              <li><strong>Days Payable Outstanding (DPO):</strong> (Accounts Payable × 365) ÷ Purchases</li>
              <li><strong>Cash Conversion Cycle:</strong> DSO + DIO - DPO</li>
            </ul>
          </div>
          
          <div className="framework-item">
            <h4>5. Growth Analysis</h4>
            <p>Assessing a company's historical growth rates and future growth potential.</p>
            <ul>
              <li><strong>Revenue Growth Rate:</strong> (Current Revenue - Prior Revenue) ÷ Prior Revenue</li>
              <li><strong>EBITDA Growth Rate:</strong> (Current EBITDA - Prior EBITDA) ÷ Prior EBITDA</li>
              <li><strong>Net Income Growth Rate:</strong> (Current Net Income - Prior Net Income) ÷ Prior Net Income</li>
              <li><strong>EPS Growth Rate:</strong> (Current EPS - Prior EPS) ÷ Prior EPS</li>
              <li><strong>Dividend Growth Rate:</strong> (Current Dividend - Prior Dividend) ÷ Prior Dividend</li>
              <li><strong>Sustainable Growth Rate:</strong> ROE × (1 - Dividend Payout Ratio)</li>
            </ul>
          </div>
        </div>
      </VisualAid>
      
      <FormulaDisplay
        title="DuPont Analysis"
        formula="ROE = Net Profit Margin × Asset Turnover × Equity Multiplier"
        variables={[
          { symbol: "ROE", description: "Return on Equity (Net Income ÷ Average Shareholders' Equity)" },
          { symbol: "Net Profit Margin", description: "Net Income ÷ Revenue" },
          { symbol: "Asset Turnover", description: "Revenue ÷ Average Total Assets" },
          { symbol: "Equity Multiplier", description: "Average Total Assets ÷ Average Shareholders' Equity" }
        ]}
        example="A company has a Net Profit Margin of 10%, Asset Turnover of 1.2, and Equity Multiplier of 2.5. Its ROE would be: 10% × 1.2 × 2.5 = 30%. This breakdown shows that the company's ROE is driven by moderate profitability, good asset efficiency, and significant financial leverage."
        notes="The DuPont Analysis breaks down ROE into three components, allowing analysts to understand the drivers of a company's return on equity. A high ROE can result from high profitability (Net Profit Margin), efficient asset use (Asset Turnover), high leverage (Equity Multiplier), or a combination of these factors. This decomposition helps identify specific areas for improvement or potential risks, such as excessive leverage. The expanded DuPont Analysis further breaks down Net Profit Margin into Tax Burden, Interest Burden, and Operating Margin for even deeper insights."
      />
      
      <FormulaDisplay
        title="Altman Z-Score"
        formula="Z = 1.2X₁ + 1.4X₂ + 3.3X₃ + 0.6X₄ + 1.0X₅"
        variables={[
          { symbol: "Z", description: "Altman Z-Score (bankruptcy prediction model)" },
          { symbol: "X₁", description: "Working Capital ÷ Total Assets" },
          { symbol: "X₂", description: "Retained Earnings ÷ Total Assets" },
          { symbol: "X₃", description: "EBIT ÷ Total Assets" },
          { symbol: "X₄", description: "Market Value of Equity ÷ Book Value of Total Liabilities" },
          { symbol: "X₅", description: "Sales ÷ Total Assets" }
        ]}
        example="A company has the following ratios: X₁ = 0.15, X₂ = 0.25, X₃ = 0.10, X₄ = 1.50, X₅ = 1.20. Its Z-Score would be: (1.2 × 0.15) + (1.4 × 0.25) + (3.3 × 0.10) + (0.6 × 1.50) + (1.0 × 1.20) = 0.18 + 0.35 + 0.33 + 0.90 + 1.20 = 2.96. This score falls in the 'gray zone' (1.81 to 2.99), indicating some financial distress risk but not immediate bankruptcy concern."
        notes="The Altman Z-Score is a predictive model for bankruptcy risk. Scores above 2.99 indicate a 'safe zone' with low bankruptcy risk. Scores between 1.81 and 2.99 represent a 'gray zone' with moderate risk. Scores below 1.81 indicate a 'distress zone' with high bankruptcy risk. While the model has limitations, particularly for service companies or emerging markets, it remains a useful screening tool in financial analysis. Modified versions exist for private companies and non-manufacturing businesses."
      />
      
      <ComparisonTable
        title="Financial Statement Analysis Techniques"
        headers={["Technique", "Description", "Applications", "Limitations"]}
        rows={[
          [
            "Ratio Analysis",
            "Calculation and interpretation of financial ratios to assess performance and financial health",
            "Evaluating profitability, liquidity, solvency, and efficiency; Comparing performance against benchmarks; Identifying trends over time",
            "Ratios can be manipulated through accounting choices; Industry differences affect appropriate benchmark levels; Point-in-time measures may miss seasonal variations"
          ],
          [
            "Common-Size Analysis",
            "Expressing financial statement items as percentages of a base figure (e.g., total assets or revenue)",
            "Normalizing financial statements for size differences; Identifying structural changes over time; Facilitating peer comparisons regardless of company size",
            "Doesn't capture absolute size differences; May obscure important absolute changes; Requires careful selection of appropriate base figures"
          ],
          [
            "Trend Analysis",
            "Examining financial data over multiple periods to identify patterns and trends",
            "Assessing growth trajectories; Identifying cyclical patterns; Evaluating the sustainability of financial performance",
            "Historical trends may not predict future performance; Requires sufficient historical data; Can be distorted by one-time events or accounting changes"
          ],
          [
            "Peer Comparison",
            "Benchmarking a company's financial metrics against similar companies",
            "Determining relative performance within an industry; Identifying competitive advantages or weaknesses; Setting appropriate performance targets",
            "Finding truly comparable peers can be challenging; Industry averages may not represent best practices; Different accounting policies can distort comparisons"
          ],
          [
            "Cash Flow Analysis",
            "Examining the sources and uses of cash to assess liquidity and financial flexibility",
            "Evaluating cash generation capacity; Assessing sustainability of dividends or debt service; Identifying potential liquidity issues",
            "Cash flow can be lumpy or seasonal; Requires understanding of normal business cycle; May miss contractual future obligations"
          ]
        ]}
        description="These complementary analytical techniques provide different perspectives on a company's financial performance and position. Investment bankers typically employ multiple techniques simultaneously to develop a comprehensive understanding of a company's financial health."
      />
      
      <ProcessFlow
        title="Financial Statement Analysis Process"
        steps={[
          {
            title: "Understand the Business and Industry",
            description: "Develop context for financial analysis by understanding the company's business model and industry dynamics.",
            details: "Research the company's products, services, and market position. Identify key industry trends, competitive dynamics, and regulatory factors. Understand the typical financial characteristics and KPIs for the industry. Consider macroeconomic factors that might impact the business."
          },
          {
            title: "Gather and Standardize Financial Information",
            description: "Collect and prepare financial data for analysis.",
            details: "Obtain at least 3-5 years of historical financial statements. Standardize statements to ensure consistency across periods. Adjust for one-time or non-recurring items. Normalize for accounting differences when comparing to peers. Create common-size statements for easier comparison."
          },
          {
            title: "Perform Ratio Analysis",
            description: "Calculate and interpret key financial ratios across multiple dimensions.",
            details: "Analyze profitability ratios (margins, returns). Evaluate liquidity ratios (current ratio, quick ratio). Assess solvency ratios (leverage, coverage). Examine efficiency ratios (turnover, cycle times). Calculate growth rates for key metrics."
          },
          {
            title: "Conduct Trend Analysis",
            description: "Identify patterns and trends in the company's financial performance over time.",
            details: "Track key metrics over multiple periods. Identify consistent trends or inflection points. Compare growth rates across different financial measures. Analyze margin expansion or contraction. Evaluate changes in capital structure and returns."
          },
          {
            title: "Benchmark Against Peers",
            description: "Compare the company's financial metrics to industry peers and benchmarks.",
            details: "Select appropriate peer companies for comparison. Calculate the same ratios for all peers. Determine the company's relative position within the peer group. Identify areas of outperformance or underperformance. Consider reasons for significant deviations from peer averages."
          },
          {
            title: "Integrate Qualitative Factors",
            description: "Incorporate non-financial information to provide context for the quantitative analysis.",
            details: "Consider management quality and track record. Evaluate corporate governance practices. Assess competitive positioning and market share trends. Review product pipeline or growth initiatives. Consider regulatory or legal issues."
          },
          {
            title: "Synthesize Findings and Draw Conclusions",
            description: "Develop a comprehensive assessment of the company's financial health and outlook.",
            details: "Identify key strengths and weaknesses in the financial profile. Assess the sustainability of current performance. Evaluate financial flexibility and resilience. Determine implications for valuation or credit quality. Develop recommendations based on the analysis."
          }
        ]}
        description="This systematic approach to financial statement analysis ensures a comprehensive evaluation of a company's financial health, performance trends, and competitive position, providing a solid foundation for investment recommendations, valuation work, or strategic advisory."
      />
      
      <ChartDisplay
        title="Financial Ratio Interpretation Framework"
        chartType="bar"
        imageUrl="/images/financial-ratio-framework.png"
        description="This framework illustrates how to interpret financial ratios in context, considering industry norms, company history, strategic goals, and peer benchmarks. Effective financial ratio analysis requires understanding what constitutes 'good' or 'concerning' levels for each metric within the specific business context."
      />
      
      <CaseStudy
        title="Financial Statement Analysis: Retail Sector M&A"
        scenario="You're an investment banking analyst working on a potential acquisition of RetailCo, a mid-sized specialty retailer, by a private equity client. RetailCo has shown revenue growth of 8% annually over the past three years, with EBITDA margins expanding from 12% to 15%. However, the company's debt has increased significantly, and its cash balance has declined despite the improved profitability. Your task is to analyze RetailCo's financial statements to identify potential risks or opportunities that might impact the acquisition decision and valuation."
        questions={[
          "What key financial ratios would you analyze to assess RetailCo's financial health?",
          "What might explain the disconnect between improved profitability and declining cash position?",
          "How would you evaluate whether RetailCo's current debt level is sustainable?",
          "What additional financial information would you request to complete your analysis?"
        ]}
        analysis={
          <div>
            <p><strong>Key Financial Ratios to Analyze:</strong></p>
            <ul>
              <li><strong>Profitability:</strong> Gross margin, EBITDA margin, net profit margin, ROE, ROIC</li>
              <li><strong>Liquidity:</strong> Current ratio, quick ratio, operating cash flow ratio</li>
              <li><strong>Solvency:</strong> Debt-to-EBITDA, interest coverage ratio, debt-to-equity</li>
              <li><strong>Efficiency:</strong> Inventory turnover, days inventory outstanding, cash conversion cycle</li>
              <li><strong>Growth:</strong> Same-store sales growth, new store productivity, e-commerce growth</li>
            </ul>
            
            <p><strong>Disconnect Between Profitability and Cash:</strong></p>
            <p>Several factors could explain this disconnect:</p>
            <ul>
              <li>Significant capital expenditures for store expansions or renovations</li>
              <li>Increasing inventory levels to support growth or due to slowing inventory turnover</li>
              <li>Lengthening accounts receivable collection periods (if applicable)</li>
              <li>Debt service requirements consuming operating cash flow</li>
              <li>Dividend payments or share repurchases returning capital to shareholders</li>
              <li>Acquisition of other businesses or brands</li>
            </ul>
            
            <p><strong>Evaluating Debt Sustainability:</strong></p>
            <ul>
              <li>Calculate leverage ratios: Debt-to-EBITDA, Net Debt-to-EBITDA</li>
              <li>Assess coverage ratios: Interest coverage, fixed charge coverage</li>
              <li>Review debt maturity profile to identify refinancing risks</li>
              <li>Analyze debt covenants and current compliance status</li>
              <li>Project future cash flows and debt service requirements</li>
              <li>Compare leverage metrics to industry benchmarks</li>
              <li>Evaluate the company's access to capital markets</li>
            </ul>
            
            <p><strong>Additional Financial Information to Request:</strong></p>
            <ul>
              <li>Detailed breakdown of debt structure, terms, and covenants</li>
              <li>Capital expenditure history and future plans</li>
              <li>Store-level performance metrics (same-store sales, store-level profitability)</li>
              <li>Detailed working capital analysis and trends</li>
              <li>Lease obligations and other off-balance sheet liabilities</li>
              <li>Customer and product profitability analysis</li>
              <li>Detailed breakdown of one-time vs. recurring expenses</li>
              <li>Management's financial projections and underlying assumptions</li>
            </ul>
          </div>
        }
        conclusion="Based on the financial statement analysis, RetailCo presents a mixed picture. The improving profitability metrics and consistent revenue growth are positive indicators, suggesting effective execution of the company's retail strategy. However, the increasing debt levels and declining cash position raise concerns about financial flexibility and sustainability. The disconnect between profitability and cash flow warrants deeper investigation, particularly regarding capital expenditure patterns, working capital management, and debt service requirements. For a private equity acquisition, understanding these dynamics is crucial for developing an appropriate valuation, structuring the transaction, and creating a post-acquisition value creation plan."
        takeaways={[
          "Financial statement analysis must go beyond surface-level metrics to identify underlying trends and potential risks",
          "In retail businesses, working capital management and capital expenditure patterns are particularly important to analyze",
          "Improving profitability without corresponding cash flow improvement may indicate unsustainable business practices",
          "Debt sustainability analysis is critical for acquisition targets, especially in capital-intensive industries like retail",
          "Effective financial statement analysis combines quantitative metrics with qualitative understanding of business dynamics"
        ]}
      />
      
      <PracticeQuestion
        question={{
          question: "A company has the following financial information: Revenue: $500M, Net Income: $50M, Total Assets: $400M, Shareholders' Equity: $200M. Calculate the company's ROA, ROE, Net Profit Margin, and Asset Turnover. Then, verify the DuPont identity (ROE = Net Profit Margin × Asset Turnover × Equity Multiplier).",
          solution: "Step 1: Calculate the individual ratios\n\nROA (Return on Assets) = Net Income ÷ Total Assets = $50M ÷ $400M = 12.5%\n\nROE (Return on Equity) = Net Income ÷ Shareholders' Equity = $50M ÷ $200M = 25%\n\nNet Profit Margin = Net Income ÷ Revenue = $50M ÷ $500M = 10%\n\nAsset Turnover = Revenue ÷ Total Assets = $500M ÷ $400M = 1.25\n\nEquity Multiplier = Total Assets ÷ Shareholders' Equity = $400M ÷ $200M = 2.0\n\nStep 2: Verify the DuPont identity\n\nROE = Net Profit Margin × Asset Turnover × Equity Multiplier\nROE = 10% × 1.25 × 2.0 = 25%\n\nThis matches our direct ROE calculation, confirming the DuPont identity.",
          explanation: "The DuPont analysis breaks down ROE into three components to help understand the drivers of a company's return on equity. In this case, the company's 25% ROE is driven by a 10% profit margin (good profitability), 1.25 asset turnover (efficient asset utilization), and 2.0 equity multiplier (moderate financial leverage). This decomposition provides more insight than looking at ROE alone. For example, if the company's ROE was primarily driven by high leverage rather than strong operational performance, it might indicate higher risk.",
          keyTakeaways: [
            "ROE can be decomposed into profitability, efficiency, and leverage components",
            "The DuPont analysis helps identify the specific drivers of a company's returns",
            "A high ROE driven primarily by leverage may indicate higher financial risk",
            "Companies in different industries typically have different ROE drivers (e.g., luxury goods companies often have high margins but lower turnover, while grocery stores typically have low margins but high turnover)"
          ]
        }}
        difficulty="medium"
      />
      
      <PracticeQuestion
        question={{
          question: "You're analyzing two companies in the same industry with the following financial metrics:\n\nCompany A: Revenue growth: 15%, EBITDA margin: 18%, Debt-to-EBITDA: 3.5x, Current ratio: 1.2, Inventory turnover: 6x\n\nCompany B: Revenue growth: 8%, EBITDA margin: 22%, Debt-to-EBITDA: 2.0x, Current ratio: 1.8, Inventory turnover: 8x\n\nAs an investment banking analyst, how would you compare these companies' financial health? Which company might command a higher valuation multiple, and why?",
          hint: "Consider the trade-offs between growth, profitability, financial risk, and operational efficiency.",
          solution: "Financial Health Comparison:\n\n1. Growth: Company A has stronger revenue growth (15% vs. 8%), indicating better top-line momentum and potentially greater market share gains.\n\n2. Profitability: Company B has a higher EBITDA margin (22% vs. 18%), demonstrating better operational efficiency and pricing power.\n\n3. Financial Risk: Company B has significantly lower leverage (Debt-to-EBITDA of 2.0x vs. 3.5x), indicating lower financial risk and greater debt capacity for future acquisitions or investments.\n\n4. Liquidity: Company B has a stronger current ratio (1.8 vs. 1.2), suggesting better short-term liquidity and financial flexibility.\n\n5. Operational Efficiency: Company B has higher inventory turnover (8x vs. 6x), indicating more efficient inventory management and potentially lower working capital requirements.\n\nValuation Multiple Assessment:\n\nThe appropriate valuation multiple depends on investor priorities and market conditions, but Company B would likely command a higher multiple for several reasons:\n\n1. Higher profitability (22% EBITDA margin) translates to more cash flow per dollar of revenue\n\n2. Lower financial risk provides greater stability and financial flexibility\n\n3. Better operational metrics suggest higher quality earnings and management effectiveness\n\n4. While growth is lower than Company A, 8% is still solid, and the quality of earnings is higher\n\nHowever, if the market is particularly focused on growth, Company A might be valued more highly despite its weaker financial profile. Additionally, the specific industry dynamics and future growth prospects would influence the valuation.\n\nIn most market environments, investors would likely apply a 1-2 turn premium to Company B's EV/EBITDA multiple compared to Company A, reflecting its stronger financial health and quality of earnings, despite the lower growth rate.",
          explanation: "This question tests your ability to synthesize multiple financial metrics into a cohesive assessment of company performance and value. In investment banking, you'll frequently need to compare companies across multiple dimensions to determine appropriate valuation multiples for comparable company analysis or to advise clients on potential acquisition targets. The analysis demonstrates that financial health is multidimensional, involving trade-offs between growth, profitability, risk, and efficiency. While high growth is valuable, it must be balanced against financial stability and earnings quality when determining appropriate valuation multiples.",
          keyTakeaways: [
            "Financial analysis requires balancing multiple metrics across different dimensions",
            "Higher growth doesn't always translate to higher valuation multiples if accompanied by greater financial risk",
            "Operational efficiency metrics provide insights into management effectiveness and earnings quality",
            "Lower leverage generally supports higher valuation multiples due to reduced financial risk",
            "The relative importance of different financial metrics varies by industry, market conditions, and investor preferences"
          ]
        }}
        difficulty="hard"
      />
    </div>
  );
};

export default financialStatementAnalysisContent;
