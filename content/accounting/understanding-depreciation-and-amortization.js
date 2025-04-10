import React from 'react';
import VisualAid from '../../components/VisualAid';
import FormulaDisplay from '../../components/FormulaDisplay';
import ComparisonTable from '../../components/ComparisonTable';
import ProcessFlow from '../../components/ProcessFlow';
import KeyConcept from '../../components/KeyConcept';
import CaseStudy from '../../components/CaseStudy';
import PracticeQuestion from '../../components/PracticeQuestion';

const UnderstandingDepreciationAndAmortizationContent = () => (
  <div className="content-container">
    <KeyConcept
      title="Understanding Depreciation and Amortization"
      concept="Depreciation and amortization are non-cash expenses that allocate the cost of tangible (depreciation) and intangible (amortization) assets over their useful lives."
      explanation="Depreciation applies to physical assets like buildings and equipment, reflecting wear and tear or obsolescence. Amortization applies to intangible assets with finite lives, like patents or copyrights. These expenses reduce net income but are added back in cash flow calculations because they don't involve actual cash outflows. Different methods (straight-line, accelerated) affect the timing of expense recognition."
      importance="Understanding D&A is crucial for accurate financial modeling, valuation (especially EBITDA calculations), and tax analysis. It impacts profitability, asset values, and cash flow projections."
      examples={[
        "Straight-line depreciation of a machine over 10 years",
        "Accelerated depreciation for tax benefits",
        "Amortization of a patent over its legal life",
        "Impact of D&A on EBITDA and free cash flow",
        "Distinguishing D&A from capital expenditures"
      ]}
    />

    <VisualAid title="Depreciation vs. Amortization" type="concept">
      <div className="framework-name">
        <div className="framework-item mb-4">
          <h4>Depreciation</h4>
          <p>Applies to tangible assets (PP&E).</p>
          <p>Reflects physical wear and tear or obsolescence.</p>
        </div>
        <div className="framework-item mb-4">
          <h4>Amortization</h4>
          <p>Applies to intangible assets with finite lives (patents, copyrights).</p>
          <p>Reflects the consumption of economic benefits over time.</p>
        </div>
      </div>
    </VisualAid>

    <VisualAid title="Impact of D&A on Financial Statements" type="concept">
      <div className="framework-name">
        <div className="framework-item mb-4">
          <h4>Income Statement</h4>
          <p>D&A expense reduces operating income and net income.</p>
        </div>
        <div className="framework-item mb-4">
          <h4>Balance Sheet</h4>
          <p>Accumulated D&A reduces the net book value of assets.</p>
          <p>Lower net income reduces retained earnings.</p>
        </div>
        <div className="framework-item mb-4">
          <h4>Cash Flow Statement</h4>
          <p>D&A is added back to net income in the operating section (non-cash).</p>
        </div>
      </div>
    </VisualAid>

    <ComparisonTable
      title="Depreciation Methods Comparison"
      headers={["Method", "Expense Pattern", "Complexity", "Common Use"]}
      rows={[
        ["Straight-Line", "Constant expense each year", "Simple", "Most common for book purposes"],
        ["Declining Balance", "Higher expense in early years", "Moderate", "Tax purposes (accelerated)"],
        ["Units of Production", "Expense based on usage", "Moderate", "Assets with variable usage"]
      ]}
      description="The choice of depreciation method affects the timing of expense recognition and reported profitability."
    />

    <FormulaDisplay
      title="Straight-Line Depreciation"
      formula="(Cost - Salvage Value) / Useful Life"
      variables={[
        { symbol: "Cost", description: "Initial asset purchase price" },
        { symbol: "Salvage Value", description: "Estimated residual value" },
        { symbol: "Useful Life", description: "Expected years of use" }
      ]}
      example="($100k - $20k) / 5 years = $16k/year"
      notes="Allocates cost evenly over the asset's life."
    />

    <FormulaDisplay
      title="Double Declining Balance Depreciation"
      formula="(2 / Useful Life) × Book Value at Beginning of Year"
      variables={[
        { symbol: "Useful Life", description: "Expected years of use" },
        { symbol: "Book Value", description: "Cost minus accumulated depreciation" }
      ]}
      example="Year 1: (2/5) * $100k = $40k. Year 2: (2/5) * ($100k - $40k) = $24k."
      notes="Accelerated method; higher expense initially. Cannot depreciate below salvage value."
    />

    <FormulaDisplay
      title="EBITDA Calculation"
      formula="Net Income + Interest + Taxes + Depreciation + Amortization"
      variables={[
        { symbol: "Net Income", description: "Bottom line profit" },
        { symbol: "Interest", description: "Interest expense" },
        { symbol: "Taxes", description: "Income tax expense" },
        { symbol: "D&A", description: "Depreciation and Amortization expense" }
      ]}
      example="$50M + $10M + $15M + $20M = $95M EBITDA"
      notes="Common valuation metric that excludes non-cash D&A and financing/tax effects."
    />

    <ProcessFlow
      title="Selecting a Depreciation Method"
      steps={[
        {
          title: "Estimate Useful Life",
          description: "Determine the expected period of economic benefit.",
          details: "Consider physical wear, technological obsolescence, legal limits."
        },
        {
          title: "Estimate Salvage Value",
          description: "Project the asset's residual value at end of life.",
          details: "Often assumed to be zero for simplicity."
        },
        {
          title: "Choose Method",
          description: "Select method reflecting asset's usage pattern (straight-line, accelerated, units of production).",
          details: "Consider impact on financial reporting and taxes."
        },
        {
          title: "Calculate Annual Expense",
          description: "Apply the chosen formula consistently.",
          details: "Record expense and update accumulated depreciation."
        }
      ]}
      description="Choosing an appropriate method ensures expenses are matched with asset usage."
    />

    <CaseStudy
      title="D&A Impact on Valuation"
      scenario="Company A uses straight-line depreciation, Company B uses accelerated. Both have identical assets and operations. Company B reports lower net income initially due to higher depreciation."
      questions={[
        "How does this affect P/E ratios?",
        "How does this affect EV/EBITDA ratios?",
        "Which valuation metric is more comparable?"
      ]}
      analysis={
        <div>
          <p>Company B will have a higher P/E ratio initially due to lower earnings. EV/EBITDA ratios should be more comparable because EBITDA adds back D&A, neutralizing the impact of different depreciation methods.</p>
          <p>Analysts often prefer EV/EBITDA for comparing companies with different capital structures or depreciation policies.</p>
        </div>
      }
      conclusion="Understanding D&A is crucial for selecting appropriate valuation multiples and making valid comparisons."
      takeaways={[
        "Different D&A methods affect net income.",
        "EBITDA neutralizes D&A differences.",
        "Choose valuation metrics carefully.",
        "Adjustments may be needed for comparability.",
        "Explain D&A impact clearly in interviews."
      ]}
    />

    <PracticeQuestion
      question={{
        question: "A company buys equipment for $1M with a 5-year life and $100k salvage value. Calculate Year 1 depreciation using straight-line and double declining balance.",
        hint: "Apply the formulas for each method.",
        solution: "Straight-Line: ($1M - $100k) / 5 = $180k. Double Declining: (2/5) * $1M = $400k.",
        explanation: "Accelerated methods front-load depreciation expense compared to straight-line.",
        keyTakeaways: [
          "Apply formulas correctly.",
          "Understand different expense patterns.",
          "Consider impact on taxes and reported income.",
          "Book value declines faster with accelerated methods.",
          "Be ready to calculate in interviews."
        ]
      }}
      difficulty="medium"
    />

    <PracticeQuestion
      question={{
        question: "Why is depreciation added back when calculating cash flow from operations?",
        hint: "Consider cash vs. non-cash expenses.",
        solution: "Depreciation is a non-cash expense that reduces net income but doesn't involve an actual cash outflow. Adding it back adjusts net income to better reflect cash generated from operations.",
        explanation: "Cash flow statement focuses on actual cash movements.",
        keyTakeaways: [
          "D&A is non-cash.",
          "Reduces net income but not cash.",
          "Added back in CFO calculation (indirect method).",
          "Distinguishes earnings from cash generation.",
          "Fundamental concept for cash flow analysis."
        ]
      }}
      difficulty="medium"
    />
  </div>
);

export default UnderstandingDepreciationAndAmortizationContent;
