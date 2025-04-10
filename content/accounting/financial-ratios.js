import React from 'react';
import VisualAid from '../../components/VisualAid';
import FormulaDisplay from '../../components/FormulaDisplay';
import ComparisonTable from '../../components/ComparisonTable';
import ProcessFlow from '../../components/ProcessFlow';
import ChartDisplay from '../../components/ChartDisplay';
import KeyConcept from '../../components/KeyConcept';
import CaseStudy from '../../components/CaseStudy';
import PracticeQuestion from '../../components/PracticeQuestion';

const financialRatiosContent = () => {
  return (
    <div className="content-container">
      <KeyConcept
        title="Financial Ratios"
        concept="Financial ratios are quantitative metrics derived from a company's financial statements that provide insights into profitability, liquidity, solvency, efficiency, and valuation. They enable analysts to assess performance, compare companies, and identify trends."
        explanation="Financial ratios distill complex financial data into comparable metrics. They help evaluate a company's ability to generate profits, meet short-term obligations, manage debt, utilize assets efficiently, and determine relative valuation. Ratios are essential tools for investment bankers to benchmark companies, identify strengths and weaknesses, and support valuation and deal structuring."
        importance="Mastering financial ratios is crucial in investment banking. They underpin comparable company analysis, credit assessments, and due diligence. Understanding how to calculate, interpret, and contextualize ratios allows bankers to provide actionable insights, identify red flags, and communicate effectively with clients and stakeholders."
        examples={[
          "Gross Margin, Operating Margin, Net Profit Margin",
          "Current Ratio, Quick Ratio, Cash Ratio",
          "Debt-to-Equity, Debt-to-EBITDA, Interest Coverage",
          "Asset Turnover, Inventory Turnover, Days Sales Outstanding",
          "Price-to-Earnings, EV/EBITDA, Price-to-Book"
        ]}
      />

      <VisualAid title="Categories of Financial Ratios" type="concept">
        <div className="framework-name">
          <div className="framework-item mb-4">
            <h4>1. Profitability Ratios</h4>
            <p>Measure a company's ability to generate earnings relative to revenue, assets, or equity.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>2. Liquidity Ratios</h4>
            <p>Assess a company's ability to meet short-term obligations.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>3. Solvency Ratios</h4>
            <p>Evaluate a company's long-term financial stability and debt management.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>4. Efficiency Ratios</h4>
            <p>Indicate how effectively a company utilizes its assets and manages operations.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>5. Valuation Ratios</h4>
            <p>Help determine a company's relative value compared to peers or historical norms.</p>
          </div>
        </div>
      </VisualAid>

      <VisualAid title="DuPont Analysis Framework" type="concept">
        <div className="framework-name">
          <div className="framework-item mb-4">
            <h4>Return on Equity (ROE) Breakdown</h4>
            <p>ROE = Net Profit Margin × Asset Turnover × Equity Multiplier</p>
            <ul>
              <li><strong>Net Profit Margin:</strong> Profitability</li>
              <li><strong>Asset Turnover:</strong> Efficiency</li>
              <li><strong>Equity Multiplier:</strong> Financial leverage</li>
            </ul>
            <p>This decomposition helps identify drivers of shareholder returns and areas for improvement.</p>
          </div>
        </div>
      </VisualAid>

      <FormulaDisplay
        title="Profitability Ratios"
        formula=""
        variables={[]}
        example=""
        notes=""
      />
      <FormulaDisplay
        title="Gross Margin"
        formula="(Revenue - Cost of Goods Sold) / Revenue"
        variables={[
          { symbol: "Revenue", description: "Total sales or income generated" },
          { symbol: "COGS", description: "Direct costs of goods or services sold" }
        ]}
        example="If Revenue = $500M and COGS = $300M, Gross Margin = ($500M - $300M) / $500M = 40%"
        notes="Indicates how efficiently a company produces goods relative to sales. Higher margins suggest better cost control or pricing power."
      />
      <FormulaDisplay
        title="Operating Margin"
        formula="Operating Income / Revenue"
        variables={[
          { symbol: "Operating Income", description: "Earnings before interest and taxes (EBIT)" },
          { symbol: "Revenue", description: "Total sales or income generated" }
        ]}
        example="Operating Income = $100M, Revenue = $500M, Operating Margin = $100M / $500M = 20%"
        notes="Reflects profitability from core operations before financing and taxes."
      />
      <FormulaDisplay
        title="Net Profit Margin"
        formula="Net Income / Revenue"
        variables={[
          { symbol: "Net Income", description: "Profit after all expenses and taxes" },
          { symbol: "Revenue", description: "Total sales or income generated" }
        ]}
        example="Net Income = $60M, Revenue = $500M, Net Margin = $60M / $500M = 12%"
        notes="Shows overall profitability after all expenses."
      />

      <FormulaDisplay
        title="Liquidity Ratios"
        formula=""
        variables={[]}
        example=""
        notes=""
      />
      <FormulaDisplay
        title="Current Ratio"
        formula="Current Assets / Current Liabilities"
        variables={[
          { symbol: "Current Assets", description: "Assets convertible to cash within a year" },
          { symbol: "Current Liabilities", description: "Obligations due within a year" }
        ]}
        example="Current Assets = $200M, Current Liabilities = $100M, Current Ratio = 2.0"
        notes="Measures short-term liquidity; >1 generally indicates ability to cover obligations."
      />
      <FormulaDisplay
        title="Quick Ratio"
        formula="(Current Assets - Inventory) / Current Liabilities"
        variables={[
          { symbol: "Current Assets", description: "Assets convertible to cash within a year" },
          { symbol: "Inventory", description: "Stock of goods held for sale" },
          { symbol: "Current Liabilities", description: "Obligations due within a year" }
        ]}
        example="($200M - $50M) / $100M = 1.5"
        notes="A stricter liquidity measure excluding inventory."
      />

      <FormulaDisplay
        title="Solvency Ratios"
        formula=""
        variables={[]}
        example=""
        notes=""
      />
      <FormulaDisplay
        title="Debt-to-Equity Ratio"
        formula="Total Debt / Total Equity"
        variables={[
          { symbol: "Total Debt", description: "Short-term + long-term interest-bearing debt" },
          { symbol: "Total Equity", description: "Shareholders' equity" }
        ]}
        example="$150M / $100M = 1.5"
        notes="Higher ratios indicate greater leverage and financial risk."
      />
      <FormulaDisplay
        title="Interest Coverage Ratio"
        formula="EBIT / Interest Expense"
        variables={[
          { symbol: "EBIT", description: "Earnings before interest and taxes" },
          { symbol: "Interest Expense", description: "Cost of debt financing" }
        ]}
        example="$100M / $20M = 5.0"
        notes="Indicates ability to meet interest payments; lower values suggest higher risk."
      />

      <FormulaDisplay
        title="Efficiency Ratios"
        formula=""
        variables={[]}
        example=""
        notes=""
      />
      <FormulaDisplay
        title="Asset Turnover"
        formula="Revenue / Average Total Assets"
        variables={[
          { symbol: "Revenue", description: "Total sales or income generated" },
          { symbol: "Average Total Assets", description: "Average assets during the period" }
        ]}
        example="$500M / $400M = 1.25"
        notes="Measures how efficiently assets generate revenue."
      />
      <FormulaDisplay
        title="Inventory Turnover"
        formula="COGS / Average Inventory"
        variables={[
          { symbol: "COGS", description: "Cost of goods sold" },
          { symbol: "Average Inventory", description: "Average inventory during the period" }
        ]}
        example="$300M / $100M = 3.0"
        notes="Higher turnover suggests efficient inventory management."
      />

      <FormulaDisplay
        title="Valuation Ratios"
        formula=""
        variables={[]}
        example=""
        notes=""
      />
      <FormulaDisplay
        title="Price-to-Earnings (P/E) Ratio"
        formula="Share Price / Earnings per Share (EPS)"
        variables={[
          { symbol: "Share Price", description: "Market price per share" },
          { symbol: "EPS", description: "Net income per share" }
        ]}
        example="$50 / $5 = 10x"
        notes="Indicates how much investors are willing to pay per dollar of earnings."
      />
      <FormulaDisplay
        title="Enterprise Value to EBITDA (EV/EBITDA)"
        formula="Enterprise Value / EBITDA"
        variables={[
          { symbol: "Enterprise Value", description: "Market cap + debt - cash" },
          { symbol: "EBITDA", description: "Earnings before interest, taxes, depreciation, amortization" }
        ]}
        example="$1B / $200M = 5x"
        notes="Common valuation multiple for comparing companies regardless of capital structure."
      />

      <ComparisonTable
        title="Financial Ratios Across Industries"
        headers={["Industry", "Profitability", "Liquidity", "Leverage", "Efficiency", "Valuation"]}
        rows={[
          ["Retail", "Low-Medium", "Medium", "Low-Medium", "High", "Low P/E"],
          ["Tech", "High", "High", "Low", "Medium", "High P/E"],
          ["Utilities", "Medium", "High", "High", "Low", "Low-Medium P/E"],
          ["Financials", "Variable", "High", "High", "Medium", "Variable"],
          ["Manufacturing", "Medium", "Medium", "Medium", "Medium", "Medium P/E"]
        ]}
        description="Different industries have characteristic financial profiles. For example, tech firms often have high profitability and valuation multiples, while retail has high efficiency but lower margins. Context is key when interpreting ratios."
      />

      <ProcessFlow
        title="Ratio Analysis Workflow"
        steps={[
          {
            title: "Gather Financial Statements",
            description: "Collect income statement, balance sheet, and cash flow statement.",
            details: "Ensure data is recent, accurate, and comparable across periods or companies."
          },
          {
            title: "Calculate Key Ratios",
            description: "Compute relevant ratios across categories.",
            details: "Use consistent formulas and double-check calculations for accuracy."
          },
          {
            title: "Benchmark Against Peers",
            description: "Compare ratios to industry averages and competitors.",
            details: "Identify outliers, trends, and relative strengths or weaknesses."
          },
          {
            title: "Interpret Results",
            description: "Analyze what the ratios reveal about financial health.",
            details: "Consider context, business model, and recent developments."
          },
          {
            title: "Formulate Insights",
            description: "Develop conclusions and recommendations.",
            details: "Use ratio analysis to support valuation, credit assessment, or strategic advice."
          }
        ]}
        description="A systematic approach to ratio analysis ensures thorough, consistent, and insightful financial evaluation."
      />

      <CaseStudy
        title="Applying Financial Ratios: Company X"
        scenario="Company X is a mid-sized manufacturing firm with $500M revenue, $300M COGS, $100M operating expenses, $20M interest expense, and $20M tax expense. Total assets are $400M, equity is $100M, and total debt is $150M."
        questions={[
          "Calculate gross, operating, and net margins.",
          "Assess liquidity using current and quick ratios.",
          "Evaluate leverage with debt-to-equity and interest coverage.",
          "Analyze efficiency via asset turnover and inventory turnover.",
          "Interpret valuation multiples if share price is $50 and EPS is $5."
        ]}
        analysis={
          <div>
            <p><strong>Profitability:</strong> Gross Margin = 40%, Operating Margin = 20%, Net Margin = 12%</p>
            <p><strong>Liquidity:</strong> Assume current assets $200M, inventory $50M, current liabilities $100M → Current Ratio = 2.0, Quick Ratio = 1.5</p>
            <p><strong>Leverage:</strong> Debt/Equity = 1.5, Interest Coverage = 5x</p>
            <p><strong>Efficiency:</strong> Asset Turnover = 1.25, Inventory Turnover = 3.0</p>
            <p><strong>Valuation:</strong> P/E = 10x</p>
          </div>
        }
        conclusion="Company X demonstrates solid profitability and liquidity, moderate leverage, efficient asset use, and reasonable valuation. Further analysis would consider trends, peer benchmarks, and qualitative factors."
        takeaways={[
          "Ratios provide a snapshot but require context.",
          "Compare across time and peers for insights.",
          "Use multiple ratios for a holistic view.",
          "Understand limitations and accounting nuances.",
          "Integrate ratio analysis into broader financial assessment."
        ]}
      />

      <PracticeQuestion
        question={{
          question: "A company has sales of $500M, COGS of $300M, operating expenses of $100M, interest expense of $20M, and tax expense of $20M. Calculate gross margin, operating margin, and net margin.",
          hint: "Work down the income statement step by step.",
          solution: "Gross Margin = ($500M - $300M) / $500M = 40%. Operating Margin = ($500M - $300M - $100M) / $500M = 20%. Net Margin = ($500M - $300M - $100M - $20M - $20M) / $500M = 12%.",
          explanation: "Margins reveal profitability at different stages. Gross margin shows production efficiency, operating margin includes overhead, and net margin reflects all expenses.",
          keyTakeaways: [
            "Calculate margins sequentially.",
            "Margins provide layered profitability insights.",
            "Compare margins across companies and time.",
            "Consider industry norms.",
            "Margins are influenced by business model and cost structure."
          ]
        }}
        difficulty="medium"
      />

      <PracticeQuestion
        question={{
          question: "Using DuPont analysis, a company has a net margin of 8%, asset turnover of 1.2, and an equity multiplier of 2.5. Calculate ROE and interpret the result.",
          hint: "Multiply the three components.",
          solution: "ROE = 8% × 1.2 × 2.5 = 24%.",
          explanation: "DuPont analysis breaks ROE into profitability, efficiency, and leverage components, helping identify drivers of shareholder returns.",
          keyTakeaways: [
            "ROE is a key measure of shareholder value creation.",
            "DuPont decomposition clarifies underlying drivers.",
            "High ROE can result from high margins, efficient asset use, or leverage.",
            "Assess sustainability of each component.",
            "Use DuPont to guide strategic improvements."
          ]
        }}
        difficulty="medium"
      />
    </div>
  );
};

export default financialRatiosContent;
