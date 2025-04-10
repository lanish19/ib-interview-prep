import React from 'react';
import VisualAid from '../../components/VisualAid';
import FormulaDisplay from '../../components/FormulaDisplay';
import ComparisonTable from '../../components/ComparisonTable';
import ProcessFlow from '../../components/ProcessFlow';
import ChartDisplay from '../../components/ChartDisplay';
import KeyConcept from '../../components/KeyConcept';
import CaseStudy from '../../components/CaseStudy';
import PracticeQuestion from '../../components/PracticeQuestion';

const accountingRedFlagsContent = () => {
  return (
    <div className="content-container">
      <KeyConcept
        title="Accounting Red Flags"
        concept="Accounting red flags are warning signs in financial statements that may indicate aggressive accounting, manipulation, or potential fraud. Recognizing these is critical for analysts and bankers."
        explanation="Red flags can manifest as unusual revenue growth, inconsistent cash flows, aggressive capitalization of expenses, off-balance sheet items, sudden changes in accounting policies, or complex related-party transactions. They often signal risks that require deeper investigation."
        importance="Identifying red flags helps avoid overvaluing risky companies, supports better due diligence, and prepares you to discuss potential concerns in interviews. It demonstrates your ability to look beyond surface numbers and assess financial integrity."
        examples={[
          "Revenue growing faster than cash collections",
          "Large increases in receivables or inventory relative to sales",
          "Capitalizing routine expenses to inflate profits",
          "Unusual one-time gains boosting earnings",
          "Significant off-balance sheet liabilities"
        ]}
      />

      <VisualAid title="Categories of Accounting Red Flags" type="concept">
        <div className="framework-name">
          <div className="framework-item mb-4">
            <h4>1. Revenue Recognition Issues</h4>
            <p>Channel stuffing, bill-and-hold sales, or recognizing revenue prematurely.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>2. Aggressive Capitalization</h4>
            <p>Capitalizing expenses that should be expensed to inflate profits.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>3. Off-Balance Sheet Items</h4>
            <p>Use of special purpose entities or leases to hide liabilities.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>4. Working Capital Manipulation</h4>
            <p>Unusual increases in receivables or inventory relative to sales.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>5. Changes in Accounting Policies</h4>
            <p>Switching methods to boost earnings or hide losses.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>6. Related-Party Transactions</h4>
            <p>Complex deals with affiliates that obscure true economics.</p>
          </div>
        </div>
      </VisualAid>

      <FormulaDisplay
        title="Revenue Growth vs. Cash Collections"
        formula="Revenue Growth % - Cash Flow from Operations Growth %"
        variables={[
          { symbol: "Revenue Growth %", description: "Year-over-year revenue increase" },
          { symbol: "CFO Growth %", description: "Year-over-year cash flow from operations increase" }
        ]}
        example="Revenue grows 20%, but CFO grows only 5% → 15% gap, a potential red flag."
        notes="Large gaps may indicate aggressive revenue recognition or collection issues."
      />

      <FormulaDisplay
        title="Days Sales Outstanding (DSO)"
        formula="(Accounts Receivable / Revenue) × Number of Days"
        variables={[
          { symbol: "Accounts Receivable", description: "Uncollected sales" },
          { symbol: "Revenue", description: "Total sales over the period" },
          { symbol: "Number of Days", description: "Typically 365" }
        ]}
        example="($100M / $500M) × 365 ≈ 73 days"
        notes="Rising DSO may signal revenue recognition issues or collection problems."
      />

      <FormulaDisplay
        title="Capitalized Expenses Ratio"
        formula="Capitalized Expenses / Total Operating Expenses"
        variables={[
          { symbol: "Capitalized Expenses", description: "Costs added to assets instead of expensed" },
          { symbol: "Total Operating Expenses", description: "All period expenses before capitalization" }
        ]}
        example="$50M / $200M = 25%"
        notes="Unusually high ratios may indicate aggressive capitalization."
      />

      <ComparisonTable
        title="Aggressive vs. Conservative Accounting Practices"
        headers={["Area", "Aggressive", "Conservative"]}
        rows={[
          ["Revenue Recognition", "Recognize early, channel stuffing", "Recognize upon delivery"],
          ["Expense Capitalization", "Capitalize routine costs", "Expense immediately"],
          ["Inventory Valuation", "Use LIFO during inflation", "Use FIFO or write-downs"],
          ["Asset Impairment", "Delay recognition", "Impair promptly"],
          ["Off-Balance Sheet", "Use SPEs to hide debt", "Consolidate entities"],
          ["Reserves", "Understate allowances", "Adequate or conservative reserves"]
        ]}
        description="Aggressive accounting inflates earnings and assets, while conservative practices provide a more cautious view of financial health."
      />

      <ProcessFlow
        title="Detecting Accounting Red Flags"
        steps={[
          {
            title: "Analyze Revenue Trends",
            description: "Compare revenue growth to cash flow growth.",
            details: "Large gaps may indicate recognition issues."
          },
          {
            title: "Examine Working Capital",
            description: "Check receivables and inventory relative to sales.",
            details: "Unusual increases can signal manipulation."
          },
          {
            title: "Review Expense Treatment",
            description: "Look for high capitalization rates.",
            details: "Aggressive capitalization inflates profits."
          },
          {
            title: "Identify Off-Balance Sheet Items",
            description: "Search for unconsolidated entities or leases.",
            details: "Hidden liabilities increase risk."
          },
          {
            title: "Check Policy Changes",
            description: "Note any recent accounting method switches.",
            details: "May be used to manage earnings."
          },
          {
            title: "Investigate Related-Party Transactions",
            description: "Assess complexity and economic substance.",
            details: "Can obscure true financial position."
          }
        ]}
        description="A systematic approach helps uncover potential manipulation or risk areas."
      />

      <CaseStudy
        title="Accounting Scandal: Enron"
        scenario="Enron used special purpose entities (SPEs) to hide debt and inflate profits, misleading investors about its financial health."
        questions={[
          "What red flags were present in Enron's financials?",
          "How did off-balance sheet items distort Enron's statements?",
          "What lessons can analysts learn from this case?"
        ]}
        analysis={
          <div>
            <p>Enron's rapid revenue growth was not matched by cash flow. Large off-balance sheet liabilities were hidden via SPEs. Complex related-party transactions obscured true economics.</p>
            <p>Failure to consolidate entities and aggressive revenue recognition misled investors.</p>
            <p>Analysts should scrutinize off-balance sheet items, cash flow discrepancies, and related-party deals.</p>
          </div>
        }
        conclusion="Enron's collapse highlights the importance of detecting red flags early to avoid misjudging financial health."
        takeaways={[
          "Beware of rapid growth unsupported by cash flow.",
          "Investigate off-balance sheet arrangements.",
          "Understand related-party transactions.",
          "Aggressive accounting can mask real risks.",
          "Skepticism and thorough analysis are essential."
        ]}
      />

      <PracticeQuestion
        question={{
          question: "A company reports 30% revenue growth but only 5% growth in cash flow from operations. What might this discrepancy indicate?",
          hint: "Consider revenue recognition and collections.",
          solution: "The gap suggests possible aggressive revenue recognition or collection issues. It warrants further investigation into receivables and revenue policies.",
          explanation: "Sustainable growth should be supported by cash flow. Large gaps are a common red flag.",
          keyTakeaways: [
            "Compare revenue and cash flow growth.",
            "Large discrepancies may signal manipulation.",
            "Investigate underlying causes.",
            "Cash flow is harder to manipulate than revenue.",
            "Use multiple metrics for analysis."
          ]
        }}
        difficulty="medium"
      />

      <PracticeQuestion
        question={{
          question: "What are some common accounting red flags analysts should watch for?",
          hint: "Think about revenue, expenses, balance sheet, and disclosures.",
          solution: "Unusual revenue growth, rising receivables, aggressive capitalization, off-balance sheet items, sudden policy changes, and complex related-party transactions.",
          explanation: "These signs may indicate aggressive accounting or fraud risk.",
          keyTakeaways: [
            "Red flags require deeper investigation.",
            "No single metric tells the whole story.",
            "Context and trends matter.",
            "Combine quantitative and qualitative analysis.",
            "Skepticism is key in financial analysis."
          ]
        }}
        difficulty="medium"
      />
    </div>
  );
};

export default accountingRedFlagsContent;
