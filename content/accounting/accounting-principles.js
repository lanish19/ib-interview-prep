import React from 'react';
import VisualAid from '../../components/VisualAid';
import FormulaDisplay from '../../components/FormulaDisplay';
import ComparisonTable from '../../components/ComparisonTable';
import ProcessFlow from '../../components/ProcessFlow';
import ChartDisplay from '../../components/ChartDisplay';
import KeyConcept from '../../components/KeyConcept';
import CaseStudy from '../../components/CaseStudy';
import PracticeQuestion from '../../components/PracticeQuestion';

const accountingPrinciplesContent = () => {
  return (
    <div className="content-container">
      <KeyConcept
        title="Fundamental Accounting Principles"
        concept="Accounting principles are standardized guidelines that govern how companies record, report, and interpret financial transactions. They ensure consistency, comparability, and transparency in financial statements."
        explanation="Core accounting principles include the accrual basis (recognizing revenues and expenses when earned/incurred, not when cash changes hands), the matching principle (aligning expenses with related revenues), revenue recognition (defining when revenue is earned), conservatism (erring on the side of caution in uncertain situations), consistency (applying the same methods over time), and materiality (focusing on information that influences decisions). These principles form the foundation of Generally Accepted Accounting Principles (GAAP) in the U.S. and International Financial Reporting Standards (IFRS) globally."
        importance="Understanding accounting principles is essential for investment bankers to analyze financial statements accurately, adjust for differences across companies, and identify potential red flags. Mastery of these concepts enables effective financial modeling, valuation, and due diligence."
        examples={[
          "Accrual basis: recording sales revenue when goods are shipped, not when cash is received",
          "Matching: recognizing cost of goods sold in the same period as related sales",
          "Conservatism: writing down inventory when market value drops below cost",
          "Consistency: using the same depreciation method year over year",
          "Materiality: expensing a $500 printer rather than capitalizing it"
        ]}
      />

      <VisualAid title="Hierarchy of Accounting Principles" type="concept">
        <div className="framework-name">
          <div className="framework-item mb-4">
            <h4>1. Accrual Basis</h4>
            <p>Recognize revenues and expenses when earned/incurred, not when cash is exchanged.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>2. Matching Principle</h4>
            <p>Match expenses to the revenues they help generate in the same period.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>3. Revenue Recognition</h4>
            <p>Recognize revenue when control of goods/services transfers to the customer.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>4. Conservatism</h4>
            <p>When in doubt, understate assets/income and overstate liabilities/expenses.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>5. Consistency</h4>
            <p>Apply the same accounting methods over time for comparability.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>6. Materiality</h4>
            <p>Focus on information that would influence decision-making.</p>
          </div>
        </div>
      </VisualAid>

      <VisualAid title="The Accounting Cycle" type="concept">
        <div className="framework-name">
          <div className="framework-item mb-4">
            <h4>Step 1: Transaction Occurs</h4>
            <p>Economic event takes place (sale, purchase, etc.).</p>
          </div>
          <div className="framework-item mb-4">
            <h4>Step 2: Journal Entry</h4>
            <p>Record transaction in the journal using double-entry bookkeeping.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>Step 3: Posting to Ledger</h4>
            <p>Transfer journal entries to the general ledger accounts.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>Step 4: Trial Balance</h4>
            <p>Summarize ledger balances to check for errors.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>Step 5: Adjusting Entries</h4>
            <p>Make accruals, deferrals, and other adjustments.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>Step 6: Financial Statements</h4>
            <p>Prepare income statement, balance sheet, and cash flow statement.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>Step 7: Closing Entries</h4>
            <p>Reset temporary accounts for the next period.</p>
          </div>
        </div>
      </VisualAid>

      <FormulaDisplay
        title="Revenue Recognition Timing"
        formula="Recognize revenue when control transfers, not necessarily when cash is received"
        variables={[]}
        example="A software company sells a 3-year subscription for $30,000 upfront. Revenue is recognized as $10,000 per year over 3 years, not all at once."
        notes="Follows ASC 606 / IFRS 15 five-step model: identify contract, identify obligations, determine price, allocate price, recognize revenue."
      />

      <FormulaDisplay
        title="Straight-Line Depreciation"
        formula="(Cost - Salvage Value) / Useful Life"
        variables={[
          { symbol: "Cost", description: "Initial asset purchase price" },
          { symbol: "Salvage Value", description: "Estimated residual value at end of life" },
          { symbol: "Useful Life", description: "Expected years of use" }
        ]}
        example="($100,000 - $20,000) / 5 years = $16,000 annual depreciation"
        notes="Depreciation method choice affects timing of expense recognition under matching principle."
      />

      <FormulaDisplay
        title="Inventory Valuation Methods"
        formula=""
        variables={[]}
        example=""
        notes="Choice of FIFO, LIFO, or Weighted Average affects COGS and inventory valuation, especially during inflation."
      />

      <ComparisonTable
        title="GAAP vs. IFRS: Key Differences"
        headers={["Topic", "GAAP (U.S.)", "IFRS (International)"]}
        rows={[
          ["Inventory Costing", "Allows LIFO and FIFO", "LIFO prohibited, FIFO and Weighted Average allowed"],
          ["Revaluation of Assets", "Generally not allowed", "Permitted for some assets"],
          ["Development Costs", "Expensed as incurred", "Can be capitalized if criteria met"],
          ["Impairment Losses", "Reversal prohibited", "Reversal allowed under certain conditions"],
          ["Revenue Recognition", "ASC 606 five-step model", "IFRS 15 five-step model (very similar)"],
          ["Lease Accounting", "ASC 842, most leases on balance sheet", "IFRS 16, most leases on balance sheet"]
        ]}
        description="While GAAP and IFRS share many similarities, key differences can impact financial statement comparability and require adjustments in analysis."
      />

      <ProcessFlow
        title="The Accounting Cycle"
        steps={[
          {
            title: "Record Transactions",
            description: "Capture economic events in journals.",
            details: "Use double-entry bookkeeping to ensure balance."
          },
          {
            title: "Post to Ledger",
            description: "Transfer journal entries to ledger accounts.",
            details: "Organize by account for summarization."
          },
          {
            title: "Prepare Trial Balance",
            description: "Summarize ledger balances.",
            details: "Check for errors before adjustments."
          },
          {
            title: "Adjust Entries",
            description: "Make accruals, deferrals, estimates.",
            details: "Ensure revenues and expenses are matched properly."
          },
          {
            title: "Generate Financial Statements",
            description: "Prepare income statement, balance sheet, cash flow.",
            details: "Based on adjusted trial balance."
          },
          {
            title: "Close Temporary Accounts",
            description: "Reset revenue and expense accounts.",
            details: "Prepare for the next accounting period."
          }
        ]}
        description="Following the accounting cycle ensures accurate, consistent, and complete financial reporting."
      />

      <CaseStudy
        title="Revenue Recognition in Software Company"
        scenario="A SaaS company sells a 3-year subscription for $30,000 upfront. Historically, it recognized all revenue immediately, but new standards require revenue to be spread over the service period."
        questions={[
          "How should revenue be recognized under ASC 606 / IFRS 15?",
          "What are the financial statement impacts of immediate vs. deferred recognition?",
          "How does this affect key ratios and valuation?"
        ]}
        analysis={
          <div>
            <p>Under new standards, revenue is recognized evenly over 3 years ($10,000/year). Immediate recognition would overstate initial revenue and net income, distorting profitability and growth metrics.</p>
            <p>Deferring revenue smooths earnings, improves comparability, and aligns with service delivery.</p>
            <p>Key ratios like profit margin and revenue growth are more accurate with proper recognition, aiding valuation and investment decisions.</p>
          </div>
        }
        conclusion="Proper revenue recognition ensures financial statements reflect economic reality, supporting better analysis and decision-making."
        takeaways={[
          "Revenue recognition timing significantly impacts reported results.",
          "New standards aim to align revenue with service delivery.",
          "Misapplication can mislead investors and analysts.",
          "Understanding principles helps identify aggressive accounting.",
          "Adjustments may be needed for comparability."
        ]}
      />

      <PracticeQuestion
        question={{
          question: "Explain the difference between accrual basis accounting and cash basis accounting. Why is accrual basis preferred under GAAP and IFRS?",
          hint: "Consider timing of revenue and expense recognition.",
          solution: "Accrual basis recognizes revenues and expenses when earned/incurred, regardless of cash flow. Cash basis recognizes when cash is received/paid. Accrual basis provides a more accurate picture of financial performance and position, aligning with economic activity.",
          explanation: "Accrual accounting better matches revenues with related expenses, improving comparability and decision usefulness.",
          keyTakeaways: [
            "Accrual basis aligns accounting with economic reality.",
            "Cash basis can distort profitability and financial health.",
            "GAAP and IFRS require accrual accounting for public companies.",
            "Understanding timing differences is crucial for analysis.",
            "Adjustments may be needed when comparing to cash basis data."
          ]
        }}
        difficulty="medium"
      />

      <PracticeQuestion
        question={{
          question: "A company capitalizes $10M of software development costs, amortized over 5 years. Another expenses $10M immediately. How does this affect their financial statements in Year 1?",
          hint: "Consider impact on net income, assets, and cash flow.",
          solution: "Company A reports $2M amortization expense, higher net income, and higher assets. Company B reports $10M expense, lower net income, and no asset. Cash flow is the same if both pay $10M cash.",
          explanation: "Capitalization smooths expenses over time, increasing short-term profits and assets. Expensing reduces profits immediately.",
          keyTakeaways: [
            "Capitalization vs. expensing affects timing of expenses.",
            "Impacts profitability, asset base, and ratios.",
            "Important to understand for comparability and valuation.",
            "Aggressive capitalization can inflate earnings.",
            "Adjustments may be needed in analysis."
          ]
        }}
        difficulty="medium"
      />
    </div>
  );
};

export default accountingPrinciplesContent;
