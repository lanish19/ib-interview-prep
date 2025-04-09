import React from 'react';
import VisualAid from '../../components/VisualAid';
import FormulaDisplay from '../../components/FormulaDisplay';
import ComparisonTable from '../../components/ComparisonTable';
import ProcessFlow from '../../components/ProcessFlow';
import ChartDisplay from '../../components/ChartDisplay';
import KeyConcept from '../../components/KeyConcept';
import CaseStudy from '../../components/CaseStudy';
import PracticeQuestion from '../../components/PracticeQuestion';

const balanceSheetContent = () => {
  return (
    <div className="content-container">
      <KeyConcept
        title="What is a Balance Sheet?"
        concept="The balance sheet is one of the three fundamental financial statements that provides a snapshot of a company's financial position at a specific point in time, showing what the company owns (assets), what it owes (liabilities), and the residual interest of shareholders (equity)."
        explanation="Unlike the income statement which covers a period of time, the balance sheet represents the financial position on a specific date. It follows the fundamental accounting equation: Assets = Liabilities + Shareholders' Equity, which must always be in balance."
        importance="In investment banking, the balance sheet is crucial for assessing a company's financial health, liquidity, solvency, and capital structure. It provides essential inputs for valuation models, credit analysis, and transaction structuring.

Example: When analyzing Deere & Company (DE), investment bankers examine the balance sheet to evaluate the company's financial position and capital allocation strategy. As of 2024, Deere reported total assets of $107.32 billion, with $15.81 billion in property, plant, and equipment, reflecting its capital-intensive manufacturing operations. The company's total liabilities stood at $84.48 billion, including $43.23 billion in long-term debt, indicating significant leverage that requires careful monitoring. This balance sheet analysis helps investment bankers assess Deere's debt capacity, working capital efficiency, and overall financial flexibility when advising on potential strategic transactions. For instance, the substantial asset base provides collateral for debt financing, while the existing leverage influences the company's ability to fund acquisitions or return capital to shareholders through dividends and share repurchases."
        examples={[
          "Analyzing a company's debt capacity for a leveraged buyout",
          "Assessing working capital requirements for a merger integration",
          "Evaluating a company's ability to fund capital expenditures or acquisitions"
        ]}
      />
      
      <VisualAid title="Balance Sheet Structure" type="concept">
        <div className="balance-sheet-structure">
          <div className="structure-item mb-4">
            <h4>Assets</h4>
            <p>Resources owned or controlled by a company that are expected to provide future economic benefits.</p>
            <ul>
              <li><strong>Current Assets:</strong> Expected to be converted to cash or used within one year (cash, accounts receivable, inventory)</li>
              <li><strong>Non-Current Assets:</strong> Long-term investments and resources (property, plant & equipment, intangible assets, goodwill)</li>
              <li>Listed in order of liquidity, with the most liquid assets first</li>
            </ul>
          </div>
          
          <div className="structure-item mb-4">
            <h4>Liabilities</h4>
            <p>Obligations that the company owes to external parties.</p>
            <ul>
              <li><strong>Current Liabilities:</strong> Due within one year (accounts payable, short-term debt, current portion of long-term debt)</li>
              <li><strong>Non-Current Liabilities:</strong> Obligations due beyond one year (long-term debt, deferred tax liabilities, pension obligations)</li>
              <li>Listed in order of maturity, with the shortest-term obligations first</li>
            </ul>
          </div>
          
          <div className="structure-item">
            <h4>Shareholders' Equity</h4>
            <p>The residual interest in the assets after deducting liabilities, representing owners' claims on the company.</p>
            <ul>
              <li><strong>Contributed Capital:</strong> Funds invested by shareholders (common stock, additional paid-in capital)</li>
              <li><strong>Retained Earnings:</strong> Accumulated profits not distributed to shareholders</li>
              <li><strong>Treasury Stock:</strong> Company's own shares that have been repurchased (negative component)</li>
              <li><strong>Accumulated Other Comprehensive Income:</strong> Gains and losses not shown on the income statement</li>
            </ul>
          </div>
        </div>
      </VisualAid>
      
      <FormulaDisplay
        title="Fundamental Accounting Equation"
        formula="Assets = Liabilities + Shareholders' Equity"
        variables={[
          { symbol: "Assets", description: "Resources owned or controlled by the company" },
          { symbol: "Liabilities", description: "Obligations owed to external parties" },
          { symbol: "Shareholders' Equity", description: "Residual interest of owners in the assets" }
        ]}
        example="If a company has $100 million in assets and $60 million in liabilities, then shareholders' equity must be $40 million."
        notes="This equation must always balance, which is why the statement is called a 'balance sheet'. Any transaction that affects the balance sheet will change at least two components to maintain this equality."
      />
      
      <FormulaDisplay
        title="Working Capital Formula"
        formula="Working Capital = Current Assets - Current Liabilities"
        variables={[
          { symbol: "Current Assets", description: "Assets expected to be converted to cash within one year" },
          { symbol: "Current Liabilities", description: "Obligations due within one year" }
        ]}
        example="If a company has $50 million in current assets and $30 million in current liabilities, its working capital is $20 million."
        notes={[
          "Positive working capital indicates short-term financial health",
          "Negative working capital may indicate liquidity problems",
          "Some business models (e.g., certain retailers) can operate efficiently with negative working capital"
        ]}
      />
      
      <ComparisonTable
        title="Current vs. Non-Current Items"
        headers={["Category", "Current Items", "Non-Current Items"]}
        rows={[
          [
            "Assets",
            "Cash and cash equivalents, Short-term investments, Accounts receivable, Inventory, Prepaid expenses",
            "Property, plant & equipment, Intangible assets, Goodwill, Long-term investments, Deferred tax assets"
          ],
          [
            "Liabilities",
            "Accounts payable, Short-term debt, Current portion of long-term debt, Accrued expenses, Unearned revenue",
            "Long-term debt, Bonds payable, Deferred tax liabilities, Pension obligations, Lease liabilities"
          ],
          [
            "Time Horizon",
            "Expected to be converted to cash or settled within one year or operating cycle",
            "Expected to provide benefits or require settlement beyond one year"
          ],
          [
            "Relevance for Analysis",
            "Liquidity assessment, Short-term solvency, Working capital management",
            "Long-term solvency, Capital structure, Investment capacity"
          ],
          [
            "Key Ratios",
            "Current ratio, Quick ratio, Cash ratio, Working capital turnover",
            "Debt-to-equity ratio, Debt-to-EBITDA, Interest coverage ratio, Fixed asset turnover"
          ]
        ]}
        description="The balance sheet distinguishes between current and non-current items based on their time horizon, which is crucial for different types of financial analysis."
      />
      
      <ProcessFlow
        title="How Transactions Affect the Balance Sheet"
        steps={[
          {
            title: "Asset Purchase with Cash",
            description: "Buying equipment with cash.",
            details: "Increases one asset (Equipment) and decreases another asset (Cash). Total assets remain unchanged."
          },
          {
            title: "Asset Purchase with Debt",
            description: "Buying equipment with a loan.",
            details: "Increases an asset (Equipment) and increases a liability (Loan Payable). Total assets and total liabilities both increase by the same amount."
          },
          {
            title: "Revenue Generation",
            description: "Earning revenue from customers.",
            details: "Initially increases an asset (Cash or Accounts Receivable) and increases equity (through Retained Earnings). Revenue flows through the income statement to the balance sheet via retained earnings."
          },
          {
            title: "Expense Payment",
            description: "Paying operating expenses.",
            details: "Decreases an asset (Cash) and decreases equity (through Retained Earnings). Expenses flow through the income statement to the balance sheet via retained earnings."
          },
          {
            title: "Debt Repayment",
            description: "Repaying a loan.",
            details: "Decreases an asset (Cash) and decreases a liability (Loan Payable). Total assets and total liabilities both decrease by the same amount."
          },
          {
            title: "Equity Issuance",
            description: "Issuing new shares to investors.",
            details: "Increases an asset (Cash) and increases equity (Common Stock and Additional Paid-in Capital). Total assets and total equity both increase by the same amount."
          },
          {
            title: "Dividend Payment",
            description: "Distributing profits to shareholders.",
            details: "Decreases an asset (Cash) and decreases equity (Retained Earnings). Total assets and total equity both decrease by the same amount."
          }
        ]}
        description="Every business transaction affects the balance sheet in a way that maintains the fundamental accounting equation (A = L + E). Understanding these effects is crucial for financial analysis and modeling."
      />
      
      <ChartDisplay
        title="Typical Balance Sheet Composition by Industry"
        chartType="bar"
        imageUrl="/images/balance-sheet-by-industry.png"
        description="This chart illustrates how balance sheet compositions typically vary across different industries, reflecting their business models and capital requirements."
        legend={[
          { color: "#4CAF50", label: "Current Assets" },
          { color: "#2196F3", label: "Non-Current Assets" },
          { color: "#FFC107", label: "Current Liabilities" },
          { color: "#F44336", label: "Non-Current Liabilities" },
          { color: "#9C27B0", label: "Shareholders' Equity" }
        ]}
      />
      
      <VisualAid title="Key Balance Sheet Items and Their Significance" type="info">
        <div className="balance-sheet-items">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Cash and Cash Equivalents</h4>
              <p>The most liquid assets, including currency, bank deposits, and short-term investments.</p>
              <ul>
                <li>Indicates immediate liquidity and financial flexibility</li>
                <li>Too much may suggest inefficient capital allocation</li>
                <li>Too little may indicate liquidity risk</li>
                <li>Critical for assessing ability to weather downturns</li>
              </ul>
            </div>
            
            <div className="col-md-6 mb-4">
              <h4>Accounts Receivable</h4>
              <p>Amounts owed to the company by customers for goods or services delivered.</p>
              <ul>
                <li>Reflects credit extended to customers</li>
                <li>Growing faster than revenue may indicate collection problems</li>
                <li>Analyzed using days sales outstanding (DSO) metric</li>
                <li>Subject to allowance for doubtful accounts</li>
              </ul>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Inventory</h4>
              <p>Goods held for sale or materials used in production.</p>
              <ul>
                <li>Represents capital tied up in unsold products</li>
                <li>Efficiency measured by inventory turnover ratio</li>
                <li>Subject to obsolescence and write-downs</li>
                <li>Valuation methods (FIFO, LIFO, weighted average) affect reported value</li>
              </ul>
            </div>
            
            <div className="col-md-6 mb-4">
              <h4>Property, Plant & Equipment (PP&E)</h4>
              <p>Long-term tangible assets used in operations.</p>
              <ul>
                <li>Reflects capital intensity of the business</li>
                <li>Subject to depreciation over useful life</li>
                <li>Net PP&E (after accumulated depreciation) shown on balance sheet</li>
                <li>Capital expenditures increase PP&E</li>
              </ul>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Goodwill and Intangible Assets</h4>
              <p>Non-physical assets including acquired goodwill, patents, trademarks, and customer relationships.</p>
              <ul>
                <li>Goodwill represents premium paid in acquisitions</li>
                <li>Subject to impairment testing, not regular amortization</li>
                <li>Other intangibles typically amortized over useful life</li>
                <li>Can represent significant value in knowledge-based businesses</li>
              </ul>
            </div>
            
            <div className="col-md-6 mb-4">
              <h4>Debt (Short-term and Long-term)</h4>
              <p>Borrowed funds that must be repaid with interest.</p>
              <ul>
                <li>Key component of capital structure</li>
                <li>Maturity profile affects refinancing risk</li>
                <li>Interest rates and covenants impact financial flexibility</li>
                <li>Current portion of long-term debt shown in current liabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </VisualAid>
      
      <CaseStudy
        title="Balance Sheet Analysis Case Study: Retail Company"
        scenario="You are an investment banking analyst evaluating the balance sheet of a mid-sized retail company as part of a potential acquisition by your client, a private equity firm. The company operates 200 stores across the United States and has been experiencing declining same-store sales but maintains positive overall growth through new store openings."
        questions={[
          "What key balance sheet metrics would you analyze to assess the company's financial health?",
          "How would you evaluate the company's working capital management?",
          "What potential red flags might you look for in the balance sheet?",
          "How would the balance sheet analysis inform your valuation approach?"
        ]}
        analysis={
          <div>
            <p>Key balance sheet metrics and findings:</p>
            <ul>
              <li>Liquidity Ratios: Current ratio of 1.2x is below the industry average of 1.8x, suggesting potential liquidity constraints</li>
              <li>Leverage Ratios: Debt-to-EBITDA of 3.5x is elevated compared to peers at 2.0-2.5x</li>
              <li>Asset Efficiency: Inventory turnover of 4.0x is below the industry average of 6.0x, indicating potential inventory management issues</li>
              <li>Return Metrics: Return on assets of 5% is declining and below the industry average of 8%</li>
            </ul>
            <p>Working capital analysis:</p>
            <ul>
              <li>Days Sales Outstanding (DSO): 12 days, in line with industry norms for retail</li>
              <li>Days Inventory Outstanding (DIO): 91 days, significantly higher than the industry average of 60 days</li>
              <li>Days Payable Outstanding (DPO): 45 days, slightly below industry average of 50 days</li>
              <li>Cash Conversion Cycle: 58 days (91 + 12 - 45), indicating inefficient working capital management compared to industry average of 22 days</li>
            </ul>
            <p>Red flags identified:</p>
            <ul>
              <li>Rising inventory levels (+15% year-over-year) despite declining same-store sales (-3%)</li>
              <li>Significant portion of PP&E is fully depreciated (75% depreciation rate), suggesting potential underinvestment in store maintenance</li>
              <li>Operating lease obligations not on balance sheet represent significant off-balance sheet liabilities</li>
              <li>Goodwill represents 40% of total assets, potentially overstated given declining performance</li>
            </ul>
          </div>
        }
        conclusion="The balance sheet analysis reveals several concerns about the retail company's financial health. The elevated inventory levels relative to sales suggest potential obsolescence risk and working capital inefficiency. The high leverage and declining returns on assets indicate deteriorating financial performance. The aging store base (implied by the high depreciation rate) suggests potential future capital expenditure requirements that could strain cash flows. These findings would inform our valuation approach by: (1) applying a discount to the comparable company multiples, (2) incorporating working capital normalization adjustments, (3) modeling higher capital expenditure requirements in the DCF analysis, and (4) conducting impairment testing on goodwill. We would recommend that our private equity client proceed with caution and focus due diligence on inventory quality, lease obligations, and store-level profitability."
        takeaways={[
          "Balance sheet analysis provides critical insights beyond income statement metrics",
          "Working capital efficiency is particularly important in retail businesses",
          "Off-balance sheet liabilities can significantly impact valuation and risk assessment",
          "Historical trends in balance sheet metrics often reveal issues before they appear in the income statement",
          "Balance sheet structure should be evaluated relative to industry norms and business model requirements"
        ]}
      />
      
      <VisualAid title="Common Interview Questions" type="note">
        <ol>
          <li className="mb-3">
            <strong>What are the three main components of a balance sheet?</strong>
            <p>The three main components are: (1) Assets, which represent resources owned or controlled by the company that are expected to provide future economic benefits; (2) Liabilities, which are obligations that the company owes to external parties; and (3) Shareholders' Equity, which represents the residual interest in the assets after deducting liabilities. These components are related through the fundamental accounting equation: Assets = Liabilities + Shareholders' Equity, which must always be in balance.</p>
          </li>
          <li className="mb-3">
            <strong>How does the balance sheet relate to the other financial statements?</strong>
            <p>The balance sheet is interconnected with the other financial statements: (1) The income statement's net income flows into the balance sheet through retained earnings, increasing shareholders' equity; (2) The cash flow statement explains the change in the cash balance on the balance sheet between two periods; (3) The statement of shareholders' equity provides a detailed reconciliation of the changes in the equity section of the balance sheet. Together, these statements provide a comprehensive view of a company's financial position and performance.</p>
          </li>
          <li className="mb-3">
            <strong>What does negative working capital indicate about a company?</strong>
            <p>Negative working capital (current liabilities exceeding current assets) can indicate: (1) Potential liquidity problems and inability to meet short-term obligations; (2) Aggressive working capital management, which can be efficient in certain business models; (3) Strong bargaining power with suppliers, allowing for extended payment terms; or (4) A business model with minimal inventory and upfront customer payments, such as subscription services or certain retailers. The interpretation depends on the industry, business model, and trends over time. Companies like Amazon and Walmart have successfully operated with negative working capital due to their inventory turnover and supplier relationships.</p>
          </li>
          <li className="mb-3">
            <strong>How would a $10 million inventory write-down affect the balance sheet and income statement?</strong>
            <p>A $10 million inventory write-down would: (1) Reduce assets on the balance sheet by decreasing the inventory account by $10 million; (2) Reduce shareholders' equity by $10 million through the impact on retained earnings; (3) Appear as an expense on the income statement, reducing pre-tax income by $10 million; and (4) Reduce tax liability, partially offsetting the impact on net income and retained earnings. The fundamental accounting equation remains balanced as both assets and equity decrease by the same amount (adjusted for tax effects). This non-cash expense would be added back in the operating section of the cash flow statement.</p>
          </li>
          <li>
            <strong>How does goodwill arise on the balance sheet, and how is it treated?</strong>
            <p>Goodwill arises when a company acquires another business for more than the fair value of its identifiable net assets. It represents the premium paid for factors like brand value, customer relationships, and synergies. On the balance sheet: (1) Goodwill is recorded as a non-current asset; (2) Unlike most assets, goodwill is not amortized but is tested annually for impairment; (3) If the carrying value exceeds the fair value, an impairment charge reduces goodwill and net income; (4) Goodwill impairments are non-reversible under US GAAP; and (5) Goodwill is excluded from most return on asset calculations and tangible book value metrics.</p>
          </li>
        </ol>
      </VisualAid>
    </div>
  );
};

export default balanceSheetContent;
