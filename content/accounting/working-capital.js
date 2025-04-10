import React from 'react';
import VisualAid from '../../components/VisualAid';
import FormulaDisplay from '../../components/FormulaDisplay';
import ComparisonTable from '../../components/ComparisonTable';
import ProcessFlow from '../../components/ProcessFlow';
import ChartDisplay from '../../components/ChartDisplay';
import KeyConcept from '../../components/KeyConcept';
import CaseStudy from '../../components/CaseStudy';
import PracticeQuestion from '../../components/PracticeQuestion';

const workingCapitalContent = () => {
  return (
    <div className="content-container">
      <KeyConcept
        title="Working Capital"
        concept="Working capital is the difference between a company's current assets and current liabilities, representing its short-term liquidity and operational efficiency."
        explanation="Key components of working capital include accounts receivable, inventory, accounts payable, and accrued expenses. Effective management ensures the company can meet short-term obligations while minimizing capital tied up in non-productive assets. Changes in working capital directly impact cash flow from operations and overall financial health."
        importance="Understanding working capital is crucial for investment bankers to assess liquidity, model cash flows, and identify operational risks or opportunities. It is a key driver in valuation, LBOs, and M&A due diligence."
        examples={[
          "Increasing receivables may signal collection issues",
          "High inventory can tie up cash and risk obsolescence",
          "Stretching payables improves cash but may strain supplier relations",
          "Negative working capital can be normal in retail but risky elsewhere",
          "Optimizing the cash conversion cycle improves liquidity"
        ]}
      />

      <VisualAid title="Working Capital Components" type="concept">
        <div className="framework-name">
          <div className="framework-item mb-4">
            <h4>Accounts Receivable</h4>
            <p>Money owed by customers; impacts cash inflow timing.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>Inventory</h4>
            <p>Goods held for sale; ties up cash until sold.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>Accounts Payable</h4>
            <p>Money owed to suppliers; managing payment terms affects cash outflow.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>Accrued Expenses</h4>
            <p>Expenses incurred but not yet paid; affect short-term obligations.</p>
          </div>
        </div>
      </VisualAid>

      <VisualAid title="Cash Conversion Cycle (CCC)" type="concept">
        <div className="framework-name">
          <div className="framework-item mb-4">
            <h4>Days Sales Outstanding (DSO)</h4>
            <p>Time to collect cash from customers.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>Days Inventory Outstanding (DIO)</h4>
            <p>Time inventory is held before sale.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>Days Payables Outstanding (DPO)</h4>
            <p>Time taken to pay suppliers.</p>
          </div>
          <div className="framework-item mb-4">
            <h4>Cash Conversion Cycle</h4>
            <p>DSO + DIO - DPO; measures time cash is tied up in operations.</p>
          </div>
        </div>
      </VisualAid>

      <FormulaDisplay
        title="Net Working Capital (NWC)"
        formula="Current Assets - Current Liabilities"
        variables={[
          { symbol: "Current Assets", description: "Assets convertible to cash within a year" },
          { symbol: "Current Liabilities", description: "Obligations due within a year" }
        ]}
        example="$200M - $150M = $50M"
        notes="Positive NWC indicates liquidity; negative may signal risk or efficiency depending on context."
      />

      <FormulaDisplay
        title="Current Ratio"
        formula="Current Assets / Current Liabilities"
        variables={[
          { symbol: "Current Assets", description: "Assets convertible to cash within a year" },
          { symbol: "Current Liabilities", description: "Obligations due within a year" }
        ]}
        example="$200M / $150M = 1.33"
        notes="Measures short-term liquidity; >1 generally preferred."
      />

      <FormulaDisplay
        title="Quick Ratio"
        formula="(Current Assets - Inventory) / Current Liabilities"
        variables={[
          { symbol: "Current Assets", description: "Assets convertible to cash within a year" },
          { symbol: "Inventory", description: "Goods held for sale" },
          { symbol: "Current Liabilities", description: "Obligations due within a year" }
        ]}
        example="($200M - $50M) / $150M = 1.0"
        notes="Stricter liquidity measure excluding inventory."
      />

      <FormulaDisplay
        title="Days Sales Outstanding (DSO)"
        formula="(Accounts Receivable / Revenue) × 365"
        variables={[
          { symbol: "Accounts Receivable", description: "Uncollected sales" },
          { symbol: "Revenue", description: "Total sales over the period" }
        ]}
        example="($75M / $500M) × 365 ≈ 55 days"
        notes="Higher DSO may indicate collection issues."
      />

      <FormulaDisplay
        title="Days Inventory Outstanding (DIO)"
        formula="(Inventory / COGS) × 365"
        variables={[
          { symbol: "Inventory", description: "Goods held for sale" },
          { symbol: "COGS", description: "Cost of goods sold" }
        ]}
        example="($100M / $300M) × 365 ≈ 122 days"
        notes="Higher DIO may indicate slow inventory turnover."
      />

      <FormulaDisplay
        title="Days Payables Outstanding (DPO)"
        formula="(Accounts Payable / COGS) × 365"
        variables={[
          { symbol: "Accounts Payable", description: "Unpaid supplier invoices" },
          { symbol: "COGS", description: "Cost of goods sold" }
        ]}
        example="($50M / $300M) × 365 ≈ 61 days"
        notes="Higher DPO improves cash flow but may strain suppliers."
      />

      <FormulaDisplay
        title="Cash Conversion Cycle (CCC)"
        formula="DSO + DIO - DPO"
        variables={[
          { symbol: "DSO", description: "Days Sales Outstanding" },
          { symbol: "DIO", description: "Days Inventory Outstanding" },
          { symbol: "DPO", description: "Days Payables Outstanding" }
        ]}
        example="55 + 122 - 61 = 116 days"
        notes="Shorter CCC improves liquidity; longer ties up cash."
      />

      <ProcessFlow
        title="Managing Working Capital"
        steps={[
          {
            title: "Accelerate Receivables",
            description: "Improve collections, offer discounts for early payment.",
            details: "Reduces DSO, improves cash inflow."
          },
          {
            title: "Optimize Inventory",
            description: "Balance stock levels to meet demand without excess.",
            details: "Reduces DIO, frees up cash."
          },
          {
            title: "Extend Payables",
            description: "Negotiate longer payment terms with suppliers.",
            details: "Increases DPO, improves cash retention."
          },
          {
            title: "Monitor Metrics",
            description: "Track working capital ratios regularly.",
            details: "Identify trends and areas for improvement."
          },
          {
            title: "Align with Strategy",
            description: "Balance liquidity needs with growth objectives.",
            details: "Avoid over-optimization that harms operations."
          }
        ]}
        description="Effective working capital management balances liquidity, profitability, and operational needs."
      />

      <CaseStudy
        title="Working Capital Optimization at RetailCo"
        scenario="RetailCo reduced DSO from 60 to 45 days, DIO from 100 to 80 days, and maintained DPO at 50 days."
        questions={[
          "How did these changes affect the cash conversion cycle?",
          "What impact did this have on cash flow?",
          "What risks might arise from these changes?"
        ]}
        analysis={
          <div>
            <p>CCC improved from 110 days (60+100-50) to 75 days (45+80-50), freeing up cash tied in operations. This improved liquidity and reduced financing needs.</p>
            <p>Risks include potential customer dissatisfaction from stricter collections and stockouts from lower inventory.</p>
          </div>
        }
        conclusion="Optimizing working capital improved RetailCo's cash flow but required careful management of customer and supplier relationships."
        takeaways={[
          "Shorter CCC improves liquidity.",
          "Balance efficiency with operational risks.",
          "Monitor working capital metrics regularly.",
          "Align management with business strategy.",
          "Discuss working capital in interviews with context."
        ]}
      />

      <PracticeQuestion
        question={{
          question: "Explain the cash conversion cycle and its components. Why is it important?",
          hint: "Think about receivables, inventory, and payables.",
          solution: "CCC = DSO + DIO - DPO. It measures how long cash is tied up in operations. Shorter CCC improves liquidity; longer ties up cash.",
          explanation: "Managing CCC is key to optimizing cash flow and operational efficiency.",
          keyTakeaways: [
            "CCC links working capital components.",
            "Shorter CCC improves cash flow.",
            "Balance efficiency with business needs.",
            "Monitor trends over time.",
            "Discuss CCC confidently in interviews."
          ]
        }}
        difficulty="medium"
      />

      <PracticeQuestion
        question={{
          question: "A company has DSO of 50 days, DIO of 90 days, and DPO of 40 days. Calculate the cash conversion cycle and interpret the result.",
          hint: "Use CCC formula.",
          solution: "CCC = 50 + 90 - 40 = 100 days. Cash is tied up for about 100 days before being converted back from sales.",
          explanation: "Shortening CCC improves liquidity; lengthening ties up cash.",
          keyTakeaways: [
            "Calculate CCC accurately.",
            "Interpret implications for liquidity.",
            "Identify ways to optimize.",
            "Contextualize with industry norms.",
            "Prepare to discuss in interviews."
          ]
        }}
        difficulty="medium"
      />
    </div>
  );
};

export default workingCapitalContent;
