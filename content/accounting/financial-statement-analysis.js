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
        title="Financial Statement Analysis (FSA)"
        concept="Financial statement analysis involves evaluating a company's financial statements to assess its performance, financial health, and valuation potential."
        explanation="FSA combines multiple approaches: horizontal (trend) analysis compares financial data over time; vertical (common-size) analysis expresses items as a percentage of a base figure; ratio analysis evaluates profitability, liquidity, solvency, and efficiency; and cash flow analysis examines cash generation and usage. Together, these techniques provide a comprehensive view of a company's financial position and prospects."
        importance="Mastering FSA is essential for investment bankers to value companies, identify risks, and support deal structuring. It also prepares you to answer technical interview questions confidently."
        examples={[
          "Comparing revenue growth rates over 5 years",
          "Analyzing gross margin trends",
          "Calculating debt-to-equity and interest coverage ratios",
          "Assessing cash flow from operations vs. net income",
          "Benchmarking profitability against peers"
        ]}
      />

      <VisualAid title="Types of Financial Statement Analysis" type="concept">
        <div className="framework-name">
          <div className="framework-item mb-4">
            <h4>1. Horizontal (Trend) Analysis</h4>
            <p>Examines changes in financial statement items over multiple periods.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>2. Vertical (Common-Size) Analysis</h4>
            <p>Expresses each item as a percentage of a base figure (e.g., revenue or total assets).</p>
          </div>
          <div className="framework-item mb-4">
            <h4>3. Ratio Analysis</h4>
            <p>Calculates key financial ratios to assess profitability, liquidity, solvency, and efficiency.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>4. Cash Flow Analysis</h4>
            <p>Evaluates cash generation, usage, and sustainability.</p>
          </div>
        </div>
      </VisualAid>

      <FormulaDisplay
        title="Growth Rate Calculation"
        formula="(Current Period - Prior Period) / Prior Period"
        variables={[
          { symbol: "Current Period", description: "Most recent period value" },
          { symbol: "Prior Period", description: "Previous period value" }
        ]}
        example="($550M - $500M) / $500M = 10% growth"
        notes="Used in horizontal analysis to assess trends."
      />

      <FormulaDisplay
        title="Common-Size Percentage"
        formula="Line Item / Base Figure"
        variables={[
          { symbol: "Line Item", description: "Specific financial statement item" },
          { symbol: "Base Figure", description: "Revenue (income statement) or Total Assets (balance sheet)" }
        ]}
        example="$200M / $500M = 40%"
        notes="Used in vertical analysis to compare across companies or periods."
      />

      <FormulaDisplay
        title="Operating Cash Flow Ratio"
        formula="Cash Flow from Operations / Current Liabilities"
        variables={[
          { symbol: "CFO", description: "Cash flow from operating activities" },
          { symbol: "Current Liabilities", description: "Short-term obligations" }
        ]}
        example="$150M / $100M = 1.5"
        notes="Measures liquidity from cash generation."
      />

      <ProcessFlow
        title="Financial Statement Analysis Workflow"
        steps={[
          {
            title: "Gather Financial Statements",
            description: "Collect income statement, balance sheet, and cash flow statement.",
            details: "Ensure data is recent, accurate, and comparable."
          },
          {
            title: "Perform Horizontal Analysis",
            description: "Calculate growth rates over multiple periods.",
            details: "Identify trends and anomalies."
          },
          {
            title: "Conduct Vertical Analysis",
            description: "Express items as percentages of base figures.",
            details: "Compare cost structures and asset allocations."
          },
          {
            title: "Calculate Key Ratios",
            description: "Assess profitability, liquidity, solvency, efficiency.",
            details: "Benchmark against peers and industry norms."
          },
          {
            title: "Analyze Cash Flows",
            description: "Evaluate cash generation and usage.",
            details: "Identify sustainability and potential issues."
          },
          {
            title: "Synthesize Insights",
            description: "Combine findings to assess financial health and valuation.",
            details: "Prepare for interviews or client discussions."
          }
        ]}
        description="A systematic approach ensures thorough, insightful analysis."
      />

      <CaseStudy
        title="Financial Analysis of Company Y"
        scenario="Company Y has shown revenue growth from $400M to $500M over 3 years, but its net margin declined from 15% to 10%. Debt increased, and cash flow from operations lagged behind net income."
        questions={[
          "What do the trends in revenue and margins suggest?",
          "How does rising debt affect solvency?",
          "What concerns arise from cash flow lagging net income?"
        ]}
        analysis={
          <div>
            <p>Revenue growth is positive, but declining margins may indicate rising costs or pricing pressure. Increased debt raises financial risk, especially if interest coverage weakens. Lagging cash flow suggests earnings quality issues or working capital problems.</p>
            <p>Further analysis should focus on cost drivers, debt service capacity, and cash conversion cycle.</p>
          </div>
        }
        conclusion="A holistic view reveals both growth opportunities and financial risks, guiding valuation and investment decisions."
        takeaways={[
          "Look beyond revenue growth to profitability and cash flow.",
          "Assess leverage and debt service capacity.",
          "Identify trends and anomalies across statements.",
          "Use multiple techniques for a comprehensive view.",
          "Prepare to discuss insights clearly in interviews."
        ]}
      />

      <PracticeQuestion
        question={{
          question: "Explain the difference between horizontal and vertical analysis. How are they used in financial statement analysis?",
          hint: "Think about time periods and relative size.",
          solution: "Horizontal analysis compares financial data over multiple periods to identify trends. Vertical analysis expresses each item as a percentage of a base figure in a single period to assess structure. Both help identify strengths, weaknesses, and anomalies.",
          explanation: "Combining both techniques provides a richer understanding of financial performance.",
          keyTakeaways: [
            "Horizontal = trends over time.",
            "Vertical = structure in one period.",
            "Use both for comprehensive analysis.",
            "Identify growth, cost structure, and anomalies.",
            "Support valuation and investment decisions."
          ]
        }}
        difficulty="medium"
      />

      <PracticeQuestion
        question={{
          question: "A company’s revenue grew 15%, but its net income declined 5%. What might this indicate?",
          hint: "Consider margins and expenses.",
          solution: "Likely margin compression due to rising costs, pricing pressure, or increased expenses. Requires further analysis of cost structure and profitability.",
          explanation: "Revenue growth alone is insufficient; profitability trends matter.",
          keyTakeaways: [
            "Analyze both growth and margins.",
            "Declining profits amid growth is a red flag.",
            "Investigate cost drivers and pricing.",
            "Contextualize with industry trends.",
            "Prepare to discuss in interviews."
          ]
        }}
        difficulty="medium"
      />
    </div>
  );
};

export default financialStatementAnalysisContent;
