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
        title="Working Capital Management"
        concept="Working Capital is the difference between a company's current assets and current liabilities, representing the capital available for day-to-day operations and a key indicator of short-term financial health."
        explanation="Working capital management involves optimizing the balance between current assets (cash, accounts receivable, inventory) and current liabilities (accounts payable, short-term debt) to ensure operational efficiency while maintaining adequate liquidity. Effective working capital management aims to minimize the cash conversion cycle—the time between paying for inputs and receiving cash from sales—while ensuring sufficient resources to meet operational needs and unexpected demands."
        importance="In investment banking, understanding working capital is crucial for multiple aspects of financial analysis and advisory. When valuing companies, working capital requirements directly impact cash flow projections and enterprise value. During M&A due diligence, analyzing working capital trends helps identify potential issues or opportunities for operational improvement. In LBO scenarios, optimizing working capital can be a significant value creation lever by releasing trapped cash. When advising on capital structure, working capital needs influence appropriate debt levels and financing strategies. During client presentations, you'll need to explain working capital dynamics and their impact on business performance. Strong working capital analysis demonstrates your understanding of operational finance, which is highly valued in investment banking interviews and on the job."
        examples={[
          "A retailer improving inventory management to reduce days inventory outstanding and free up cash",
          "A manufacturer negotiating extended payment terms with suppliers to increase days payable outstanding",
          "A service company implementing stricter collection policies to reduce days sales outstanding",
          "A seasonal business securing a revolving credit facility to manage working capital fluctuations"
        ]}
      />
      
      <VisualAid title="Working Capital Components" type="concept">
        <div className="working-capital-components">
          <div className="component-item mb-4">
            <h4>1. Current Assets</h4>
            <p>Resources expected to be converted to cash or used within one year.</p>
            <ul>
              <li><strong>Cash and Cash Equivalents:</strong> Immediately available funds and highly liquid short-term investments</li>
              <li><strong>Accounts Receivable:</strong> Amounts owed by customers for goods or services delivered</li>
              <li><strong>Inventory:</strong> Raw materials, work-in-progress, and finished goods</li>
              <li><strong>Prepaid Expenses:</strong> Payments made in advance for future expenses</li>
              <li><strong>Marketable Securities:</strong> Short-term investments that can be quickly converted to cash</li>
              <li><strong>Other Current Assets:</strong> Any other assets expected to be converted to cash within a year</li>
            </ul>
          </div>
          
          <div className="component-item mb-4">
            <h4>2. Current Liabilities</h4>
            <p>Obligations due within one year.</p>
            <ul>
              <li><strong>Accounts Payable:</strong> Amounts owed to suppliers for goods or services received</li>
              <li><strong>Short-term Debt:</strong> Loans and other obligations due within one year</li>
              <li><strong>Current Portion of Long-term Debt:</strong> Principal payments on long-term debt due within one year</li>
              <li><strong>Accrued Expenses:</strong> Expenses incurred but not yet paid</li>
              <li><strong>Deferred Revenue:</strong> Payments received for goods or services not yet delivered</li>
              <li><strong>Income Taxes Payable:</strong> Taxes owed but not yet paid</li>
              <li><strong>Other Current Liabilities:</strong> Any other obligations due within a year</li>
            </ul>
          </div>
          
          <div className="component-item mb-4">
            <h4>3. Working Capital Calculation</h4>
            <p>The difference between current assets and current liabilities.</p>
            <ul>
              <li><strong>Gross Working Capital:</strong> Total current assets</li>
              <li><strong>Net Working Capital:</strong> Current Assets - Current Liabilities</li>
              <li><strong>Working Capital Ratio:</strong> Current Assets ÷ Current Liabilities</li>
              <li><strong>Positive Working Capital:</strong> Current Assets {'>'} Current Liabilities (typical for most businesses)</li>
              <li><strong>Negative Working Capital:</strong> Current Liabilities {'>'} Current Assets (can be sustainable for certain business models)</li>
            </ul>
          </div>
          
          <div className="component-item">
            <h4>4. Operating Working Capital</h4>
            <p>Working capital directly related to operations, excluding financial items.</p>
            <ul>
              <li><strong>Operating Current Assets:</strong> Accounts Receivable + Inventory + Prepaid Expenses</li>
              <li><strong>Operating Current Liabilities:</strong> Accounts Payable + Accrued Expenses + Deferred Revenue</li>
              <li><strong>Operating Working Capital:</strong> Operating Current Assets - Operating Current Liabilities</li>
              <li><strong>Non-Operating Working Capital:</strong> Cash + Marketable Securities - Short-term Debt</li>
              <li><strong>Total Working Capital:</strong> Operating Working Capital + Non-Operating Working Capital</li>
            </ul>
          </div>
        </div>
      </VisualAid>
      
      <FormulaDisplay
        title="Cash Conversion Cycle"
        formula="CCC = DSO + DIO - DPO"
        variables={[
          { symbol: "CCC", description: "Cash Conversion Cycle (days)" },
          { symbol: "DSO", description: "Days Sales Outstanding = (Accounts Receivable × 365) ÷ Revenue" },
          { symbol: "DIO", description: "Days Inventory Outstanding = (Inventory × 365) ÷ Cost of Goods Sold" },
          { symbol: "DPO", description: "Days Payable Outstanding = (Accounts Payable × 365) ÷ Purchases" }
        ]}
        example="A company has the following metrics: DSO = 45 days, DIO = 60 days, DPO = 30 days. Its Cash Conversion Cycle would be: 45 + 60 - 30 = 75 days. This means the company has 75 days between paying suppliers and collecting from customers, during which it needs to finance its working capital."
        notes="The Cash Conversion Cycle measures how long cash is tied up in working capital. A shorter CCC is generally better, indicating more efficient working capital management. Companies can reduce their CCC by collecting receivables faster (lower DSO), optimizing inventory levels (lower DIO), or extending payment terms with suppliers (higher DPO). Different industries have different typical CCC ranges based on their business models. Some retailers and e-commerce companies achieve negative CCC by selling products before paying suppliers."
      />
      
      <FormulaDisplay
        title="Working Capital Investment"
        formula="ΔWC = (Current Assets₂ - Current Assets₁) - (Current Liabilities₂ - Current Liabilities₁)"
        variables={[
          { symbol: "ΔWC", description: "Change in Working Capital" },
          { symbol: "Current Assets₂", description: "Current Assets at the end of the period" },
          { symbol: "Current Assets₁", description: "Current Assets at the beginning of the period" },
          { symbol: "Current Liabilities₂", description: "Current Liabilities at the end of the period" },
          { symbol: "Current Liabilities₁", description: "Current Liabilities at the beginning of the period" }
        ]}
        example="A company starts the year with $200M in current assets and $120M in current liabilities. At year-end, it has $250M in current assets and $140M in current liabilities. The change in working capital would be: ($250M - $200M) - ($140M - $120M) = $50M - $20M = $30M. This represents an investment of $30M in working capital during the year, which reduces free cash flow."
        notes="Working capital investment is a key component of cash flow analysis. An increase in working capital (positive ΔWC) represents cash used in the business and reduces free cash flow. A decrease in working capital (negative ΔWC) represents cash released from the business and increases free cash flow. Growing businesses typically require additional working capital investment to support higher sales volumes. In financial modeling, working capital is often projected as a percentage of revenue to estimate future working capital requirements."
      />
      
      <ComparisonTable
        title="Working Capital Strategies by Industry"
        headers={["Industry", "Typical Working Capital Profile", "Key Strategies", "Considerations"]}
        rows={[
          [
            "Retail",
            "Moderate to negative working capital; High inventory; Low receivables; High payables",
            "Inventory optimization through demand forecasting; Supplier financing programs; Efficient store replenishment systems; Cash management for high-volume transactions",
            "Seasonal fluctuations require careful planning; Inventory obsolescence risk; Balance between product availability and working capital efficiency"
          ],
          [
            "Manufacturing",
            "High working capital; Moderate to high inventory; Moderate receivables; Moderate payables",
            "Just-in-time inventory systems; Vendor-managed inventory; Standardized payment terms; Production planning optimization; Supply chain financing",
            "Raw material price volatility; Production lead times; Balance between operational efficiency and working capital optimization; Global supply chain complexities"
          ],
          [
            "Technology/Software",
            "Low working capital; Low inventory; Moderate receivables; Moderate payables; High deferred revenue",
            "Subscription-based revenue models; Advance payment incentives; Electronic invoicing and payments; Outsourced manufacturing for hardware",
            "Rapid growth can strain working capital; Balance between customer-friendly terms and cash flow needs; Managing deferred revenue recognition"
          ],
          [
            "Healthcare/Pharmaceuticals",
            "High working capital; High inventory; High receivables; Moderate payables",
            "Consignment inventory models; Automated reordering systems; Specialized receivables management; Group purchasing organizations",
            "Regulatory requirements affecting inventory; Complex reimbursement systems; Long collection cycles; Patient payment challenges"
          ],
          [
            "Construction/Engineering",
            "Very high working capital; Low inventory; Very high receivables; Moderate payables; High work-in-progress",
            "Progress billing; Performance bonds; Subcontractor payment management; Project-based cash flow forecasting; Supply chain financing",
            "Project delays impact cash flow; Retention payments; Contract terms heavily influence working capital; Seasonal factors in some segments"
          ]
        ]}
        description="Working capital strategies must be tailored to industry-specific business models and challenges. Effective working capital management requires understanding these industry dynamics and implementing appropriate strategies to optimize the cash conversion cycle while maintaining operational efficiency."
      />
      
      <ProcessFlow
        title="Working Capital Optimization Process"
        steps={[
          {
            title: "Assess Current Working Capital Performance",
            description: "Analyze existing working capital metrics and identify improvement opportunities.",
            details: "Calculate key working capital ratios (CCC, DSO, DIO, DPO). Benchmark against industry peers and best practices. Identify specific areas of underperformance. Quantify the potential cash flow impact of improvements. Evaluate seasonal patterns and cyclical trends."
          },
          {
            title: "Optimize Accounts Receivable",
            description: "Implement strategies to accelerate customer payments and reduce DSO.",
            details: "Review and standardize customer payment terms. Implement early payment incentives and late payment penalties. Improve invoicing accuracy and timeliness. Enhance collections processes and resources. Consider factoring or receivables financing for problematic accounts. Implement electronic invoicing and payment systems."
          },
          {
            title: "Enhance Inventory Management",
            description: "Reduce inventory levels while maintaining appropriate service levels.",
            details: "Implement demand forecasting and inventory planning systems. Adopt just-in-time or lean inventory practices where appropriate. Identify and address slow-moving or obsolete inventory. Optimize safety stock levels based on lead times and demand variability. Consider vendor-managed inventory for key items. Implement ABC analysis to focus on high-value inventory items."
          },
          {
            title: "Optimize Accounts Payable",
            description: "Extend payment terms with suppliers without damaging relationships.",
            details: "Review and standardize supplier payment terms. Negotiate extended payment terms with key suppliers. Implement supply chain financing programs. Optimize payment timing to capture early payment discounts when advantageous. Centralize procurement to leverage buying power. Develop strategic supplier relationships with win-win payment structures."
          },
          {
            title: "Implement Cash Management Strategies",
            description: "Enhance visibility and control over cash flows.",
            details: "Centralize cash management functions. Implement cash pooling across business units. Optimize banking relationships and fee structures. Develop robust cash forecasting processes. Implement treasury management systems. Establish clear policies for excess cash investment."
          },
          {
            title: "Align Incentives and Metrics",
            description: "Ensure organizational alignment around working capital goals.",
            details: "Incorporate working capital metrics into performance evaluations. Establish clear working capital targets by department. Implement cross-functional working capital committees. Provide regular reporting on working capital performance. Educate employees about the importance of working capital management. Celebrate and reward working capital improvements."
          },
          {
            title: "Monitor and Continuously Improve",
            description: "Track performance and refine working capital strategies.",
            details: "Establish regular working capital review meetings. Develop detailed working capital dashboards and KPIs. Conduct root cause analysis of deviations from targets. Implement continuous improvement initiatives. Adjust strategies based on changing business conditions. Benchmark against evolving industry best practices."
          }
        ]}
        description="This systematic approach to working capital optimization can release significant cash from operations while maintaining or improving business performance. In investment banking contexts, this process is often a key value creation lever in LBO scenarios or operational improvement initiatives."
      />
      
      <ChartDisplay
        title="Working Capital as a Percentage of Revenue by Industry"
        chartType="bar"
        imageUrl="/images/working-capital-by-industry.png"
        description="This chart illustrates how working capital requirements vary significantly across industries, reflecting different business models and operational characteristics. Retail and technology often operate with negative working capital, while manufacturing, healthcare, and construction typically require substantial working capital investment."
      />
      
      <CaseStudy
        title="Working Capital Optimization: Manufacturing LBO"
        scenario="You're an investment banking analyst working on a potential LBO of ManufactureCo, a mid-sized industrial components manufacturer with $500M in annual revenue and $75M in EBITDA. The private equity client is attracted to the company's strong market position and stable cash flows but has identified working capital as a potential value creation opportunity. ManufactureCo's current working capital metrics include DSO of 65 days, DIO of 85 days, and DPO of 40 days, resulting in a cash conversion cycle of 110 days. Industry benchmarks suggest best-in-class performers achieve DSO of 45 days, DIO of 60 days, and DPO of 60 days."
        questions={[
          "What is the current working capital investment as a percentage of revenue?",
          "What would be the potential cash release from optimizing working capital to industry best practices?",
          "What specific strategies would you recommend to improve each component of working capital?",
          "How would working capital optimization impact the LBO returns?"
        ]}
        analysis={
          <div>
            <p><strong>Current Working Capital Investment:</strong></p>
            <p>To calculate working capital as a percentage of revenue:</p>
            <ul>
              <li>Daily Revenue = $500M ÷ 365 = $1.37M per day</li>
              <li>Accounts Receivable = DSO × Daily Revenue = 65 × $1.37M = $89.05M</li>
              <li>Assuming COGS is 60% of revenue, Daily COGS = $500M × 60% ÷ 365 = $0.82M per day</li>
              <li>Inventory = DIO × Daily COGS = 85 × $0.82M = $69.7M</li>
              <li>Accounts Payable = DPO × Daily COGS = 40 × $0.82M = $32.8M</li>
              <li>Net Operating Working Capital = A/R + Inventory - A/P = $89.05M + $69.7M - $32.8M = $125.95M</li>
              <li>Working Capital as % of Revenue = $125.95M ÷ $500M = 25.2%</li>
            </ul>
            
            <p><strong>Potential Cash Release:</strong></p>
            <p>If ManufactureCo achieved best-in-class working capital metrics:</p>
            <ul>
              <li>Optimized A/R = 45 × $1.37M = $61.65M (reduction of $27.4M)</li>
              <li>Optimized Inventory = 60 × $0.82M = $49.2M (reduction of $20.5M)</li>
              <li>Optimized A/P = 60 × $0.82M = $49.2M (increase of $16.4M)</li>
              <li>Optimized Net Working Capital = $61.65M + $49.2M - $49.2M = $61.65M</li>
              <li>Total Cash Release = $125.95M - $61.65M = $64.3M</li>
              <li>Optimized Working Capital as % of Revenue = 12.3% (reduction of 12.9 percentage points)</li>
            </ul>
            
            <p><strong>Recommended Strategies:</strong></p>
            <p>For Accounts Receivable (DSO) Reduction:</p>
            <ul>
              <li>Standardize payment terms across customers</li>
              <li>Implement electronic invoicing to reduce billing delays</li>
              <li>Offer early payment discounts for key customers</li>
              <li>Enhance collections processes with dedicated resources</li>
              <li>Consider factoring or supply chain financing options</li>
            </ul>
            
            <p>For Inventory (DIO) Reduction:</p>
            <ul>
              <li>Implement demand forecasting and inventory optimization software</li>
              <li>Adopt lean manufacturing principles to reduce work-in-progress</li>
              <li>Establish vendor-managed inventory for key components</li>
              <li>Conduct SKU rationalization to eliminate slow-moving items</li>
              <li>Implement cycle counting and improved inventory controls</li>
            </ul>
            
            <p>For Accounts Payable (DPO) Extension:</p>
            <ul>
              <li>Renegotiate payment terms with suppliers</li>
              <li>Implement a supply chain financing program</li>
              <li>Centralize procurement to leverage buying power</li>
              <li>Standardize payment processes and approval workflows</li>
              <li>Optimize payment timing to balance cash flow and discounts</li>
            </ul>
          </div>
        }
        conclusion="The working capital optimization opportunity represents a significant value creation lever for this LBO. The potential $64.3M cash release would have an immediate impact on the transaction by effectively reducing the purchase price. This one-time cash release represents approximately 85% of the company's annual EBITDA. Additionally, the ongoing benefits of improved working capital management would enhance free cash flow generation throughout the holding period, accelerating debt repayment and improving equity returns. Based on typical LBO structures, this working capital optimization alone could potentially increase the equity IRR by 3-5 percentage points, making it a critical component of the value creation plan."
        takeaways={[
          "Working capital optimization can create significant value in LBO scenarios through both one-time cash release and ongoing efficiency improvements",
          "Manufacturing companies typically have substantial working capital improvement opportunities due to complex supply chains and production processes",
          "A comprehensive approach addressing all three components of the cash conversion cycle (DSO, DIO, DPO) yields the best results",
          "Working capital improvements require cross-functional efforts spanning sales, operations, procurement, and finance",
          "In LBO modeling, working capital optimization should be explicitly factored into both entry valuation and exit multiple expectations"
        ]}
      />
      
      <PracticeQuestion
        question={{
          question: "A company reports the following financial information: Annual Revenue: $200M, COGS: $120M, Accounts Receivable: $25M, Inventory: $30M, Accounts Payable: $15M. Calculate the company's DSO, DIO, DPO, and Cash Conversion Cycle.",
          solution: "Step 1: Calculate the daily revenue and COGS\nDaily Revenue = Annual Revenue ÷ 365 = $200M ÷ 365 = $0.548M per day\nDaily COGS = Annual COGS ÷ 365 = $120M ÷ 365 = $0.329M per day\n\nStep 2: Calculate DSO (Days Sales Outstanding)\nDSO = Accounts Receivable ÷ Daily Revenue = $25M ÷ $0.548M = 45.6 days\n\nStep 3: Calculate DIO (Days Inventory Outstanding)\nDIO = Inventory ÷ Daily COGS = $30M ÷ $0.329M = 91.2 days\n\nStep 4: Calculate DPO (Days Payable Outstanding)\nDPO = Accounts Payable ÷ Daily COGS = $15M ÷ $0.329M = 45.6 days\n\nStep 5: Calculate the Cash Conversion Cycle\nCCC = DSO + DIO - DPO = 45.6 + 91.2 - 45.6 = 91.2 days",
          explanation: "The Cash Conversion Cycle of 91.2 days represents the time between when the company pays for its inventory and when it collects cash from customers. During this period, the company needs to finance its working capital. The relatively high CCC is primarily driven by the long inventory holding period (91.2 days), suggesting potential opportunities for inventory optimization. The company's DSO and DPO are balanced at 45.6 days each, indicating that the company collects from customers in the same timeframe that it pays suppliers.",
          keyTakeaways: [
            "The Cash Conversion Cycle measures how efficiently a company manages its working capital",
            "A high DIO relative to industry benchmarks often represents the largest working capital improvement opportunity",
            "Balanced DSO and DPO can indicate either good working capital management or missed opportunities to extend supplier payment terms",
            "Working capital metrics should be compared to industry benchmarks to identify improvement opportunities"
          ]
        }}
        difficulty="medium"
      />
      
      <PracticeQuestion
        question={{
          question: "As an investment banking analyst, you're working on a pitch for a retail client considering an acquisition. The target company has negative working capital of -$50M on $500M of annual revenue. The CFO of your client is concerned about this negative working capital position. How would you explain the implications of negative working capital in the retail context, and what additional information would you need to properly assess the target's working capital management?",
          hint: "Consider the typical working capital dynamics in retail businesses and how negative working capital might actually be advantageous in certain business models.",
          solution: "Explanation of Negative Working Capital in Retail:\n\nNegative working capital in retail is often a sign of operational efficiency rather than financial distress. In the retail business model, this typically occurs because:\n\n1. Inventory Turnover: Retailers sell products quickly, often before they have to pay suppliers\n\n2. Cash Sales: Many retailers receive immediate payment from customers while having extended payment terms with suppliers\n\n3. Efficient Supply Chain: Well-managed retailers optimize inventory levels while negotiating favorable supplier terms\n\n4. Scale Advantage: Larger retailers can leverage their buying power to negotiate extended payment terms\n\nThe target's negative working capital of -$50M on $500M revenue (-10%) is actually potentially positive, as it indicates the business is effectively being financed by suppliers and customers rather than requiring additional working capital investment.\n\nAdditional Information Needed:\n\n1. Working Capital Trend Analysis:\n   - Historical working capital as a percentage of revenue over 3-5 years\n   - Seasonality patterns in working capital requirements\n\n2. Component Breakdown:\n   - Detailed breakdown of inventory, receivables, and payables\n   - Days inventory outstanding, days sales outstanding, and days payable outstanding\n   - Comparison to industry benchmarks for each component\n\n3. Supplier Relationships:\n   - Payment terms with key suppliers\n   - Concentration of accounts payable among suppliers\n   - Sustainability of current payment terms\n   - Any supply chain financing programs in place\n\n4. Inventory Management:\n   - Inventory turnover by category\n   - Markdown rates and inventory obsolescence\n   - Seasonal inventory build patterns\n   - Inventory management systems and practices\n\n5. Customer Payment Terms:\n   - Breakdown of sales by payment method\n   - Credit card processing arrangements and fees\n   - Any customer financing programs\n\n6. Operational Factors:\n   - Store format and merchandising strategy\n   - E-commerce vs. brick-and-mortar mix\n   - Private label vs. branded merchandise mix\n\nWith this additional information, we could determine whether the negative working capital position represents a sustainable competitive advantage or potential risk, and how it might affect post-acquisition integration and financial planning.",
          explanation: "This question tests your understanding of working capital dynamics in different business contexts. In investment banking, it's crucial to recognize that negative working capital can be a positive attribute in certain business models, particularly retail. The ability to explain this concept to clients demonstrates your financial acumen and industry knowledge. When advising on acquisitions, understanding the target's working capital profile is essential for accurate valuation, transaction structuring, and post-acquisition planning. A sophisticated analysis goes beyond the simple calculation to examine sustainability, operational drivers, and strategic implications of the working capital position.",
          keyTakeaways: [
            "Negative working capital can be a sign of operational efficiency in retail businesses",
            "Working capital analysis must consider industry-specific business models and dynamics",
            "Detailed component analysis is essential to understand the drivers and sustainability of working capital patterns",
            "Working capital has significant implications for acquisition valuation and post-deal cash flow",
            "Effective client communication requires translating technical financial concepts into business implications"
          ]
        }}
        difficulty="hard"
      />
    </div>
  );
};

export default workingCapitalContent;
