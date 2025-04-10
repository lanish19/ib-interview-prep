import React from 'react';
import VisualAid from '../../components/VisualAid';
import FormulaDisplay from '../../components/FormulaDisplay';
import ComparisonTable from '../../components/ComparisonTable';
import ProcessFlow from '../../components/ProcessFlow';
import ChartDisplay from '../../components/ChartDisplay';
import KeyConcept from '../../components/KeyConcept';
import CaseStudy from '../../components/CaseStudy';
import PracticeQuestion from '../../components/PracticeQuestion';

const advancedAccountingTopicsContent = () => {
  return (
    <div className="content-container">
      <KeyConcept
        title="Advanced Accounting Topics"
        concept="Advanced accounting topics include complex areas such as deferred taxes, lease accounting, goodwill and intangible assets, equity method investments, and net operating losses (NOLs)."
        explanation="These topics involve nuanced accounting treatments that significantly impact financial statements, valuation, and deal structuring. Mastery of these areas is essential for sophisticated financial analysis and interview success."
        importance="Understanding advanced topics enables investment bankers to adjust financials accurately, identify risks, and communicate insights effectively. It also prepares you for technical interview questions on complex accounting issues."
        examples={[
          "Deferred tax assets/liabilities from timing differences",
          "Capital vs. operating leases and their impact",
          "Goodwill impairment testing post-acquisition",
          "Equity method vs. consolidation for investments",
          "Valuing and utilizing NOLs in M&A"
        ]}
      />

      <VisualAid title="Deferred Taxes Overview" type="concept">
        <div className="framework-name">
          <div className="framework-item mb-4">
            <h4>Deferred Tax Assets (DTAs)</h4>
            <p>Future tax benefits from deductible temporary differences or NOLs.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>Deferred Tax Liabilities (DTLs)</h4>
            <p>Future tax obligations from taxable temporary differences.</p>
          </div>
        </div>
      </VisualAid>

      <VisualAid title="Lease Accounting Overview" type="concept">
        <div className="framework-name">
          <div className="framework-item mb-4">
            <h4>Finance (Capital) Leases</h4>
            <p>Recognize asset and liability; interest and depreciation expenses.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>Operating Leases</h4>
            <p>Recognize right-of-use asset and liability; single lease expense.</p>
          </div>
        </div>
      </VisualAid>

      <VisualAid title="Goodwill and Intangibles" type="concept">
        <div className="framework-name">
          <div className="framework-item mb-4">
            <h4>Goodwill</h4>
            <p>Excess purchase price over fair value of net identifiable assets in acquisitions.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>Other Intangibles</h4>
            <p>Patents, trademarks, customer relationships; amortized over useful life.</p>
          </div>
        </div>
      </VisualAid>

      <VisualAid title="Equity Method vs. Consolidation" type="concept">
        <div className="framework-name">
          <div className="framework-item mb-4">
            <h4>Equity Method</h4>
            <p>20-50% ownership; recognize share of net income, adjust investment account.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>Consolidation</h4>
            <p>{'>'}50% ownership; combine all assets, liabilities, revenues, expenses.</p>
          </div>
        </div>
      </VisualAid>

      <FormulaDisplay
        title="Deferred Tax Calculation"
        formula="Temporary Difference × Tax Rate"
        variables={[
          { symbol: "Temporary Difference", description: "Difference between book and tax basis" },
          { symbol: "Tax Rate", description: "Applicable corporate tax rate" }
        ]}
        example="$200,000 × 25% = $50,000 deferred tax liability"
        notes="DTAs arise from deductible differences; DTLs from taxable differences."
      />

      <FormulaDisplay
        title="Lease Present Value"
        formula="Sum of (Lease Payment / (1 + r)^t)"
        variables={[
          { symbol: "Lease Payment", description: "Periodic payment amount" },
          { symbol: "r", description: "Discount rate (incremental borrowing rate)" },
          { symbol: "t", description: "Payment period" }
        ]}
        example="$1M / (1+5%)^1 + $1M / (1+5%)^2 + ... ≈ Present Value"
        notes="Used to recognize lease liability and right-of-use asset."
      />

      <FormulaDisplay
        title="Goodwill Calculation"
        formula="Purchase Price - Fair Value of Net Identifiable Assets"
        variables={[
          { symbol: "Purchase Price", description: "Total consideration paid" },
          { symbol: "Fair Value of Net Assets", description: "Assets minus liabilities acquired" }
        ]}
        example="$500M - $350M = $150M goodwill"
        notes="Goodwill is tested annually for impairment."
      />

      <FormulaDisplay
        title="Equity Method Income Recognition"
        formula="Ownership % × Investee Net Income"
        variables={[
          { symbol: "Ownership %", description: "Investor's percentage stake" },
          { symbol: "Investee Net Income", description: "Earnings of the investee company" }
        ]}
        example="30% × $20M = $6M income recognized"
        notes="Dividends reduce investment carrying value."
      />

      <FormulaDisplay
        title="NOL Tax Benefit"
        formula="NOL × Tax Rate"
        variables={[
          { symbol: "NOL", description: "Net operating loss carryforward" },
          { symbol: "Tax Rate", description: "Applicable corporate tax rate" }
        ]}
        example="$100M × 21% = $21M deferred tax asset"
        notes="Subject to realization assessment and limitations."
      />

      <ProcessFlow
        title="Deferred Tax Recognition"
        steps={[
          {
            title: "Identify Temporary Differences",
            description: "Compare book vs. tax basis of assets/liabilities.",
            details: "Determine if differences are taxable or deductible."
          },
          {
            title: "Calculate Deferred Taxes",
            description: "Multiply differences by tax rate.",
            details: "Record DTAs or DTLs accordingly."
          },
          {
            title: "Assess Realizability",
            description: "Evaluate if DTAs will be used.",
            details: "Apply valuation allowance if needed."
          }
        ]}
        description="Proper deferred tax accounting ensures accurate tax expense and balance sheet presentation."
      />

      <ProcessFlow
        title="Goodwill Impairment Testing"
        steps={[
          {
            title: "Assign Goodwill to Reporting Units",
            description: "Allocate based on business segments.",
            details: "Identify cash-generating units."
          },
          {
            title: "Estimate Fair Value",
            description: "Use DCF or market multiples.",
            details: "Compare to carrying value."
          },
          {
            title: "Recognize Impairment",
            description: "If carrying > fair value, write down goodwill.",
            details: "Impairment reduces net income."
          }
        ]}
        description="Impairment testing ensures goodwill reflects true economic value."
      />

      <CaseStudy
        title="Deferred Taxes and NOLs in M&A"
        scenario="Company A acquires Company B with $200M NOLs and $50M DTAs. Post-acquisition, Company A expects $40M annual taxable income."
        questions={[
          "How do NOLs and DTAs affect deal value?",
          "What are the limitations on NOL utilization?",
          "How should deferred taxes be accounted for?"
        ]}
        analysis={
          <div>
            <p>NOLs provide future tax savings, increasing deal value. However, Section 382 may limit annual usage, reducing immediate benefit. DTAs must be assessed for realizability; a valuation allowance may be needed if future profits are uncertain.</p>
            <p>Proper accounting ensures accurate valuation and post-deal financials.</p>
          </div>
        }
        conclusion="Tax attributes significantly impact M&A valuation and require careful analysis."
        takeaways={[
          "Assess value and limitations of tax assets.",
          "Understand deferred tax accounting in deals.",
          "Consider impact on cash flows and valuation.",
          "Prepare to discuss in interviews with examples.",
          "Tax issues are critical in advanced accounting."
        ]}
      />

      <PracticeQuestion
        question={{
          question: "Explain the difference between deferred tax assets and liabilities. Provide examples.",
          hint: "Think about timing differences.",
          solution: "DTAs arise from deductible differences (e.g., NOLs, warranty reserves). DTLs arise from taxable differences (e.g., accelerated tax depreciation). DTAs reduce future taxes; DTLs increase them.",
          explanation: "Deferred taxes align book and tax timing differences.",
          keyTakeaways: [
            "Identify sources of deferred taxes.",
            "Understand impact on financials.",
            "Assess realizability of DTAs.",
            "Discuss confidently in interviews.",
            "Adjust models accordingly."
          ]
        }}
        difficulty="medium"
      />

      <PracticeQuestion
        question={{
          question: "A company acquires another for $500M. The fair value of net identifiable assets is $350M. Calculate goodwill and explain its treatment.",
          hint: "Use goodwill formula.",
          solution: "Goodwill = $500M - $350M = $150M. Goodwill is not amortized but tested annually for impairment.",
          explanation: "Goodwill reflects premium paid; impairment reduces net income.",
          keyTakeaways: [
            "Calculate goodwill accurately.",
            "Understand impairment process.",
            "Discuss impact on financials.",
            "Consider in valuation and modeling.",
            "Prepare for interview questions."
          ]
        }}
        difficulty="medium"
      />
    </div>
  );
};

export default advancedAccountingTopicsContent;
