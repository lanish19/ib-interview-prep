import React from 'react';
import VisualAid from '../../components/VisualAid';
import FormulaDisplay from '../../components/FormulaDisplay';
import ProcessFlow from '../../components/ProcessFlow';
import KeyConcept from '../../components/KeyConcept';
import CaseStudy from '../../components/CaseStudy';
import PracticeQuestion from '../../components/PracticeQuestion';
import ChartDisplay from '../../components/ChartDisplay';

const LinkingTheThreeStatementsContent = () => (
  <div className="content-container">
    <KeyConcept
      title="Linking the Three Financial Statements"
      concept="The income statement, balance sheet, and cash flow statement are interconnected reports that together provide a comprehensive view of a company's financial health."
      explanation="Net income from the income statement flows into retained earnings on the balance sheet and is the starting point for the cash flow statement. Changes in balance sheet accounts affect cash flow through working capital adjustments. Investing and financing activities impact both the cash flow statement and the balance sheet. Understanding these linkages is essential for accurate financial modeling and analysis."
      importance="Mastering the connections between the statements allows analysts to build integrated financial models, trace the impact of transactions, and identify inconsistencies or errors. It is a fundamental skill tested in investment banking interviews and foundational for DCF, M&A, and LBO modeling."
      examples={[
        "Net income increases retained earnings on the balance sheet",
        "Depreciation reduces net income but is added back in cash flow",
        "Inventory purchases increase assets and reduce cash",
        "Debt issuance increases cash and liabilities",
        "Dividends reduce cash and retained earnings",
        "Changes in deferred revenue impact both cash flow and liabilities"
      ]}
    />

    <VisualAid title="How the Statements Link Together" type="concept">
      <div className="framework-name">
        <div className="framework-item mb-4">
          <h4>Income Statement to Balance Sheet</h4>
          <p>Net income flows into retained earnings within equity.</p>
        </div>
        <div className="framework-item mb-4">
          <h4>Income Statement to Cash Flow Statement</h4>
          <p>Net income is the starting point for cash flow from operations.</p>
        </div>
        <div className="framework-item mb-4">
          <h4>Balance Sheet to Cash Flow Statement</h4>
          <p>Changes in working capital accounts (e.g., AR, inventory, AP) adjust cash flow from operations.</p>
        </div>
        <div className="framework-item mb-4">
          <h4>Cash Flow to Ending Balance Sheet</h4>
          <p>Ending cash from the cash flow statement updates the cash balance on the balance sheet. Equity and liabilities also update based on retained earnings and financing activities.</p>
        </div>
      </div>
    </VisualAid>

    <VisualAid title="Common Non-Cash Adjustments" type="concept">
      <div className="framework-name">
        <div className="framework-item mb-4">
          <h4>Depreciation & Amortization</h4>
          <p>Reduces net income but added back to cash flow from operations.</p>
        </div>
        <div className="framework-item mb-4">
          <h4>Stock-Based Compensation</h4>
          <p>Non-cash expense that affects net income, added back in cash flow from operations.</p>
        </div>
        <div className="framework-item mb-4">
          <h4>Deferred Taxes</h4>
          <p>Result from differences between accounting and tax treatments. May be added back or subtracted in CFO.</p>
        </div>
      </div>
    </VisualAid>

    <VisualAid title="Working Capital Mechanics" type="concept">
      <div className="framework-name">
        <div className="framework-item mb-4">
          <h4>Accounts Receivable</h4>
          <p>Increase = use of cash, Decrease = source of cash. Reflects timing of customer collections.</p>
        </div>
        <div className="framework-item mb-4">
          <h4>Inventory</h4>
          <p>Increase = use of cash, Decrease = source of cash. Indicates production or purchasing behavior.</p>
        </div>
        <div className="framework-item mb-4">
          <h4>Accounts Payable</h4>
          <p>Increase = source of cash, Decrease = use of cash. Relates to payment timing to suppliers.</p>
        </div>
      </div>
    </VisualAid>

    <ChartDisplay
      title="Linkage of the Three Financial Statements"
      chartType="flowchart"
      imageUrl="/images/accounting/three-statements-linkage.png"
      description="This diagram visually summarizes how net income flows from the income statement to retained earnings on the balance sheet, how changes in working capital accounts affect cash flow, and how investing and financing activities impact both the cash flow statement and the balance sheet. It helps reinforce the circular, interconnected nature of the statements."
    />

    <FormulaDisplay
      title="Retained Earnings Calculation"
      formula="Beginning Retained Earnings + Net Income - Dividends"
      variables={[
        { symbol: "Beginning Retained Earnings", description: "Prior period retained earnings" },
        { symbol: "Net Income", description: "From income statement" },
        { symbol: "Dividends", description: "Cash paid to shareholders" }
      ]}
      example="$100M + $20M - $5M = $115M"
      notes="Links income statement profit to balance sheet equity."
    />

    <FormulaDisplay
      title="Cash Flow from Operations (Indirect Method)"
      formula="Net Income + Non-Cash Expenses ± Changes in Working Capital"
      variables={[
        { symbol: "Net Income", description: "From income statement" },
        { symbol: "Non-Cash Expenses", description: "Depreciation, amortization, impairments" },
        { symbol: "Changes in Working Capital", description: "Receivables, inventory, payables" }
      ]}
      example="$20M + $5M - $3M = $22M"
      notes="Adjusts net income to actual cash generated."
    />

    <ProcessFlow
      title="Building a Linked 3-Statement Model"
      steps={[
        {
          title: "Project Income Statement",
          description: "Forecast revenues, expenses, taxes, net income.",
          details: "Start with revenue drivers, then costs and margins."
        },
        {
          title: "Link Net Income to Balance Sheet",
          description: "Update retained earnings with projected net income.",
          details: "Retained Earnings = Prior + Net Income - Dividends."
        },
        {
          title: "Forecast Balance Sheet Items",
          description: "Project assets, liabilities, equity balances.",
          details: "Use assumptions for working capital, CapEx, debt."
        },
        {
          title: "Build Cash Flow Statement",
          description: "Start with net income, adjust for non-cash and working capital.",
          details: "Add investing and financing cash flows."
        },
        {
          title: "Check Model Integrity",
          description: "Ensure balance sheet balances, cash flows reconcile.",
          details: "Ending cash matches balance sheet cash."
        }
      ]}
      description="This process ensures all statements are dynamically linked and consistent."
    />

    <CaseStudy
      title="Tracing a Transaction Through the Statements"
      scenario="A company purchases $50M of equipment, financed with $20M cash and $30M debt."
      questions={[
        "How does this affect the balance sheet immediately?",
        "What is the impact on the cash flow statement?",
        "How will depreciation affect future statements?"
      ]}
      analysis={
        <div>
          <p><strong>Balance Sheet:</strong> PP&E increases $50M, cash decreases $20M, debt increases $30M.</p>
          <p><strong>Cash Flow:</strong> -$50M investing, +$30M financing, net -$20M cash.</p>
          <p><strong>Future:</strong> Depreciation reduces net income, added back in cash flow, reduces PP&E over time.</p>
        </div>
      }
      conclusion="This example shows how a single transaction flows through all three statements, affecting multiple line items."
      takeaways={[
        "Linkage ensures consistency across statements.",
        "Transactions impact multiple statements simultaneously.",
        "Understanding flow helps in modeling and analysis.",
        "Critical for interview questions and real-world work.",
        "Practice tracing transactions to build intuition."
      ]}
    />

    <PracticeQuestion
      question={{
        question: "If depreciation expense increases by $10, what is the impact on all three financial statements (assume 30% tax rate)?",
        hint: "Think about net income, cash flow, and assets.",
        solution: "Income Statement: Pre-tax income down $10, net income down $7. Cash Flow: Add back $10 depreciation, net cash up $3. Balance Sheet: PP&E down $10, retained earnings down $7, cash up $3.",
        explanation: "Depreciation is non-cash, reduces taxable income, and affects multiple statements.",
        keyTakeaways: [
          "Non-cash expenses reduce net income but not cash.",
          "Tax shield from depreciation increases cash flow.",
          "PP&E declines over time with depreciation.",
          "Retained earnings reflect net income impact.",
          "Linkage is critical for accurate modeling."
        ]
      }}
      difficulty="medium"
    />

    <PracticeQuestion
      question={{
        question: "A company issues $100M in new debt and uses $60M to buy equipment. What are the immediate impacts on the three statements?",
        hint: "Consider cash, assets, and liabilities.",
        solution: "Balance Sheet: Cash up $40M (net), PP&E up $60M, debt up $100M. Cash Flow: +$100M financing, -$60M investing, net +$40M. Income Statement: No immediate impact.",
        explanation: "Financing and investing activities affect cash and balance sheet, no immediate income effect.",
        keyTakeaways: [
          "Debt issuance increases cash and liabilities.",
          "CapEx increases assets, reduces cash.",
          "No immediate income statement impact.",
          "Cash flow statement reconciles sources and uses.",
          "Linkage shows full transaction impact."
        ]
      }}
      difficulty="medium"
    />
  </div>
);

export default LinkingTheThreeStatementsContent;
