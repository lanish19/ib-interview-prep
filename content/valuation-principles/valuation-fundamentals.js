import React from 'react';
import VisualAid from '../../components/VisualAid';
import FormulaDisplay from '../../components/FormulaDisplay';
import ComparisonTable from '../../components/ComparisonTable';
import ProcessFlow from '../../components/ProcessFlow';
import ChartDisplay from '../../components/ChartDisplay';
import KeyConcept from '../../components/KeyConcept';
import CaseStudy from '../../components/CaseStudy';
import PracticeQuestion from '../../components/PracticeQuestion';

const valuationFundamentalsContent = () => {
  return (
    <div className="content-container">
      <KeyConcept
        title="Valuation Fundamentals"
        concept="Valuation is the process of determining the current worth of an asset, company, or liability. In investment banking, valuation is a core function that underpins advisory services for mergers and acquisitions, capital raising, and strategic decision-making."
        explanation="Valuation combines quantitative analysis with qualitative judgment to estimate what an asset is worth. While there are established methodologies, valuation is both an art and a science, requiring careful consideration of a company's financial performance, growth prospects, risk profile, and market conditions."
        importance="In investment banking, accurate valuation is critical for: determining transaction prices in M&A deals, pricing securities in capital markets transactions, advising on corporate restructuring, and supporting strategic decision-making by corporate clients.

Example: When valuing Deere & Company (DE), investment bankers would apply multiple valuation methodologies to determine a comprehensive value range. Using market approach, they would note Deere's EV/EBITDA multiple of approximately 12.8x (as of 2025), comparing it to industry peers to assess relative value. Through income approach, bankers would develop a DCF model incorporating Deere's cyclical agricultural equipment business, projecting future cash flows based on the company's $51.64 billion revenue and 24.4% operating margin. They would consider Deere's strong market position, technological innovations in precision agriculture, and global footprint when determining growth rates and terminal value. This multi-faceted valuation approach would provide clients with a robust framework for making strategic decisions regarding potential transactions involving Deere, whether for acquisition, divestiture, or capital raising purposes."
        examples={[
          "Determining the offer price for an acquisition target",
          "Establishing the IPO price range for a company going public",
          "Evaluating whether a company should divest a business unit",
          "Assessing the impact of strategic alternatives on shareholder value"
        ]}
      />
      
      <VisualAid title="Valuation Approaches" type="concept">
        <div className="valuation-approaches">
          <div className="approach-item mb-4">
            <h4>1. Income Approach</h4>
            <p>Values an asset based on the present value of expected future economic benefits.</p>
            <ul>
              <li><strong>Discounted Cash Flow (DCF):</strong> Forecasts future cash flows and discounts them to present value</li>
              <li><strong>Dividend Discount Model:</strong> Values equity based on expected future dividends</li>
              <li><strong>Adjusted Present Value (APV):</strong> Separates operating value from financing effects</li>
              <li>Strengths: Forward-looking, captures growth and risk explicitly</li>
              <li>Weaknesses: Highly sensitive to assumptions, subjective inputs</li>
            </ul>
          </div>
          
          <div className="approach-item mb-4">
            <h4>2. Market Approach</h4>
            <p>Values an asset based on pricing metrics from comparable companies or transactions.</p>
            <ul>
              <li><strong>Comparable Companies Analysis:</strong> Uses trading multiples of similar public companies</li>
              <li><strong>Precedent Transactions Analysis:</strong> Uses multiples from similar M&A transactions</li>
              <li><strong>Key Multiples:</strong> EV/EBITDA, P/E, EV/Revenue, P/B</li>
              <li>Strengths: Market-based, reflects current investor sentiment, relatively simple</li>
              <li>Weaknesses: Requires truly comparable companies, affected by market inefficiencies</li>
            </ul>
          </div>
          
          <div className="approach-item">
            <h4>3. Asset Approach</h4>
            <p>Values a company based on the fair market value of its assets minus liabilities.</p>
            <ul>
              <li><strong>Book Value:</strong> Assets minus liabilities on the balance sheet</li>
              <li><strong>Adjusted Book Value:</strong> Book value with assets/liabilities adjusted to market value</li>
              <li><strong>Liquidation Value:</strong> Expected proceeds if assets were sold and liabilities settled</li>
              <li>Strengths: Tangible, based on existing assets, useful for asset-heavy businesses</li>
              <li>Weaknesses: Ignores going concern value, overlooks intangible assets and growth potential</li>
            </ul>
          </div>
        </div>
      </VisualAid>
      
      <FormulaDisplay
        title="Time Value of Money"
        formula="PV = FV / (1 + r)^n"
        variables={[
          { symbol: "PV", description: "Present Value" },
          { symbol: "FV", description: "Future Value" },
          { symbol: "r", description: "Discount Rate (required rate of return)" },
          { symbol: "n", description: "Number of periods" }
        ]}
        example="If you expect to receive $110 one year from now and your required rate of return is 10%, the present value would be: $110 / (1 + 0.10)^1 = $100."
        notes="The time value of money is a fundamental concept in finance that recognizes a dollar today is worth more than a dollar in the future because of its earning potential. This principle underlies all valuation methodologies."
      />
      
      <FormulaDisplay
        title="Perpetuity Value"
        formula="PV = CF / r"
        variables={[
          { symbol: "PV", description: "Present Value" },
          { symbol: "CF", description: "Constant Cash Flow" },
          { symbol: "r", description: "Discount Rate" }
        ]}
        example="If a company is expected to generate $5 million in free cash flow annually in perpetuity, and the discount rate is 10%, the present value would be: $5M / 0.10 = $50 million."
        notes="A perpetuity assumes a constant stream of cash flows that continues indefinitely. This formula is often used in terminal value calculations for DCF models."
      />
      
      <FormulaDisplay
        title="Growing Perpetuity Value"
        formula="PV = CF / (r - g)"
        variables={[
          { symbol: "PV", description: "Present Value" },
          { symbol: "CF", description: "Cash Flow in first period" },
          { symbol: "r", description: "Discount Rate" },
          { symbol: "g", description: "Growth Rate (must be less than r)" }
        ]}
        example="If a company is expected to generate $5 million in free cash flow in the first year, growing at 3% annually in perpetuity, and the discount rate is 10%, the present value would be: $5M / (0.10 - 0.03) = $5M / 0.07 = $71.4 million."
        notes="The growing perpetuity formula is commonly used for terminal value calculations in DCF models, assuming a constant growth rate forever. The growth rate must be less than the discount rate for the formula to be valid."
      />
      
      <ComparisonTable
        title="Valuation Multiples Comparison"
        headers={["Multiple", "Formula", "When to Use", "Limitations"]}
        rows={[
          [
            "EV/EBITDA",
            "Enterprise Value / EBITDA",
            "Most widely used in investment banking; good for comparing companies with different capital structures and depreciation policies",
            "Ignores capital expenditure requirements; not suitable for companies with negative or near-zero EBITDA"
          ],
          [
            "P/E",
            "Price per Share / Earnings per Share",
            "Commonly used for profitable companies; easily understood by investors",
            "Affected by capital structure and non-operating items; not useful for unprofitable companies"
          ],
          [
            "EV/Revenue",
            "Enterprise Value / Revenue",
            "Useful for high-growth companies, unprofitable companies, or companies in turnaround situations",
            "Ignores profitability differences; can lead to overvaluation of high-revenue, low-margin businesses"
          ],
          [
            "P/B",
            "Price per Share / Book Value per Share",
            "Useful for financial institutions and asset-heavy businesses",
            "Book value may not reflect true market value of assets; less relevant for companies with significant intangible assets"
          ],
          [
            "EV/EBIT",
            "Enterprise Value / EBIT",
            "Accounts for different depreciation policies while still reflecting capital intensity",
            "Still affected by different accounting policies for amortization; not suitable for companies with negative EBIT"
          ]
        ]}
        description="Valuation multiples are ratios that relate a company's market value to a specific financial metric. They are widely used in relative valuation approaches."
      />
      
      <ProcessFlow
        title="Valuation Process in Investment Banking"
        steps={[
          {
            title: "Understand the Business",
            description: "Develop a thorough understanding of the company and its industry.",
            details: "Analyze the business model, competitive position, industry dynamics, growth drivers, and risks. Review historical financial performance and key operating metrics. Identify value drivers and potential red flags."
          },
          {
            title: "Select Appropriate Methodologies",
            description: "Choose valuation approaches based on the company's characteristics.",
            details: "Consider factors such as industry, stage of development, profitability, growth profile, and purpose of the valuation. Typically use multiple methodologies to triangulate value."
          },
          {
            title: "Gather and Analyze Data",
            description: "Collect and process relevant financial and market information.",
            details: "Compile historical financial statements, analyst forecasts, industry reports, and market data. Identify comparable companies and relevant precedent transactions."
          },
          {
            title: "Develop Projections",
            description: "Create financial forecasts for the DCF analysis.",
            details: "Project revenue, margins, capital expenditures, working capital, and other key items. Ensure internal consistency and alignment with industry trends and company strategy."
          },
          {
            title: "Apply Valuation Methodologies",
            description: "Execute the selected valuation approaches.",
            details: "Perform DCF analysis, comparable companies analysis, precedent transactions analysis, and other relevant methodologies. Calculate appropriate multiples and apply them to the subject company."
          },
          {
            title: "Determine Value Range",
            description: "Synthesize results into a defensible valuation range.",
            details: "Reconcile values from different methodologies, considering their relative strengths and weaknesses. Develop a valuation range rather than a single point estimate to reflect uncertainty."
          },
          {
            title: "Perform Sensitivity Analysis",
            description: "Test how changes in key assumptions affect the valuation.",
            details: "Identify the most impactful variables and test reasonable ranges for each. Create scenarios (base, upside, downside) to understand potential outcomes."
          },
          {
            title: "Prepare Valuation Materials",
            description: "Document the analysis and conclusions.",
            details: "Create presentation materials that clearly communicate the valuation approach, key assumptions, results, and sensitivity analysis. Anticipate and address potential questions or challenges."
          }
        ]}
        description="The valuation process in investment banking follows a structured approach to ensure thorough analysis and defensible conclusions."
      />
      
      <ChartDisplay
        title="Football Field Valuation Chart"
        chartType="range"
        imageUrl="/images/football-field-chart.png"
        description="A 'football field' chart is a common way to present valuation ranges from different methodologies in investment banking. It provides a visual representation of how values from different approaches compare."
        legend={[
          { color: "#4CAF50", label: "DCF Analysis" },
          { color: "#2196F3", label: "Comparable Companies" },
          { color: "#FFC107", label: "Precedent Transactions" },
          { color: "#F44336", label: "LBO Analysis" },
          { color: "#9C27B0", label: "Research Analyst Targets" }
        ]}
      />
      
      <VisualAid title="Key Valuation Concepts" type="info">
        <div className="valuation-concepts">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Enterprise Value vs. Equity Value</h4>
              <p><strong>Enterprise Value (EV):</strong> The total value of a company, including both debt and equity.</p>
              <p><strong>Equity Value:</strong> The value attributable to shareholders after accounting for debt and cash.</p>
              <p><strong>Relationship:</strong> Equity Value = Enterprise Value - Net Debt (where Net Debt = Debt - Cash)</p>
              <p><strong>When to Use:</strong> Use EV for multiples that relate to the entire business (EV/EBITDA, EV/Revenue); use Equity Value for multiples that relate to shareholders (P/E, P/B).</p>
            </div>
            
            <div className="col-md-6 mb-4">
              <h4>Discount Rate Determination</h4>
              <p><strong>WACC (Weighted Average Cost of Capital):</strong> The blended cost of a company's debt and equity financing, weighted by their proportions in the capital structure.</p>
              <p><strong>CAPM (Capital Asset Pricing Model):</strong> Used to determine the cost of equity (COE = Risk-free rate + Beta × Equity risk premium).</p>
              <p><strong>Risk Adjustments:</strong> Additional premiums may be added for company-specific risks, size, country risk, etc.</p>
              <p><strong>Typical Range:</strong> WACC typically ranges from 7-15% for established companies in developed markets.</p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Terminal Value</h4>
              <p><strong>Definition:</strong> The value of a business beyond the explicit forecast period in a DCF model.</p>
              <p><strong>Methods:</strong></p>
              <ul>
                <li><strong>Perpetuity Growth Method:</strong> TV = FCF_n+1 / (WACC - g)</li>
                <li><strong>Exit Multiple Method:</strong> TV = EBITDA_n × Terminal Multiple</li>
              </ul>
              <p><strong>Importance:</strong> Often represents 60-80% of total DCF value, making it a critical assumption.</p>
            </div>
            
            <div className="col-md-6 mb-4">
              <h4>Control Premium and Minority Discount</h4>
              <p><strong>Control Premium:</strong> Additional value paid to acquire a controlling stake in a company, typically 20-40% above the market price.</p>
              <p><strong>Minority Discount:</strong> Reduction in value for non-controlling interests due to limited influence over company decisions.</p>
              <p><strong>Application:</strong> Comparable companies analysis typically yields minority values, while precedent transactions often reflect control values.</p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Liquidity Discount</h4>
              <p><strong>Definition:</strong> Reduction in value for investments that cannot be easily sold or converted to cash.</p>
              <p><strong>Typical Range:</strong> 10-35% depending on factors such as:</p>
              <ul>
                <li>Time and cost to liquidate</li>
                <li>Uncertainty about the time to liquidation</li>
                <li>Size of the interest relative to the whole</li>
                <li>Prospects for a public offering or sale</li>
              </ul>
              <p><strong>Application:</strong> Applied when valuing private companies or restricted securities.</p>
            </div>
            
            <div className="col-md-6 mb-4">
              <h4>Synergies in M&A Valuation</h4>
              <p><strong>Types of Synergies:</strong></p>
              <ul>
                <li><strong>Cost Synergies:</strong> Reduced operating expenses, economies of scale</li>
                <li><strong>Revenue Synergies:</strong> Cross-selling, new market access, enhanced product offerings</li>
                <li><strong>Financial Synergies:</strong> Tax benefits, lower cost of capital, improved debt capacity</li>
              </ul>
              <p><strong>Valuation Impact:</strong> Creates a gap between "standalone value" and "strategic value" that influences transaction pricing and negotiation dynamics.</p>
            </div>
          </div>
        </div>
      </VisualAid>
      
      <CaseStudy
        title="Valuation Case Study: Technology Company Acquisition"
        scenario="You are an investment banking analyst advising a large technology company (the Acquirer) on the potential acquisition of a high-growth software company (the Target). The Target generates $100 million in annual revenue with 25% EBITDA margins and has been growing at 30% annually. Your task is to determine an appropriate valuation range for the Target."
        questions={[
          "What valuation methodologies would you use for this high-growth technology company?",
          "How would you select appropriate comparable companies?",
          "What key assumptions would drive your DCF valuation?",
          "How would you incorporate synergies into your valuation analysis?"
        ]}
        analysis={
          <div>
            <p><strong>Valuation Methodologies:</strong></p>
            <ul>
              <li><strong>DCF Analysis:</strong> Primary methodology given the Target's high growth and evolving margins</li>
              <li><strong>Comparable Companies Analysis:</strong> Using public software companies with similar growth and margin profiles</li>
              <li><strong>Precedent Transactions Analysis:</strong> Examining recent acquisitions in the software sector</li>
              <li><strong>EV/Revenue Multiple:</strong> Common for high-growth software companies, especially with strong SaaS metrics</li>
            </ul>
            
            <p><strong>Comparable Companies Selection:</strong></p>
            <ul>
              <li>Identified 10 public software companies with:</li>
              <li>Revenue growth rates of 20-40%</li>
              <li>EBITDA margins of 15-35%</li>
              <li>Similar business models (SaaS/subscription)</li>
              <li>Overlapping end markets</li>
              <li>Trading at EV/Revenue multiples of 8-12x and EV/EBITDA multiples of 25-35x</li>
            </ul>
            
            <p><strong>DCF Key Assumptions:</strong></p>
            <ul>
              <li><strong>Forecast Period:</strong> 10 years given high growth profile</li>
              <li><strong>Revenue Growth:</strong> 30% initially, gradually declining to 5% by year 10</li>
              <li><strong>EBITDA Margin:</strong> Expanding from 25% to 35% as the business scales</li>
              <li><strong>Capital Expenditures:</strong> 5% of revenue, declining to 3% in terminal period</li>
              <li><strong>Working Capital:</strong> 5% of incremental revenue</li>
              <li><strong>WACC:</strong> 12% reflecting the Target's risk profile</li>
              <li><strong>Terminal Growth Rate:</strong> 3%, aligned with long-term GDP growth</li>
              <li><strong>Terminal Multiple:</strong> 15x EBITDA as alternative terminal value method</li>
            </ul>
            
            <p><strong>Synergy Analysis:</strong></p>
            <ul>
              <li><strong>Cost Synergies:</strong> $10 million annually from eliminating duplicate functions</li>
              <li><strong>Revenue Synergies:</strong> 5% incremental growth from cross-selling opportunities</li>
              <li><strong>Tax Synergies:</strong> $5 million NPV from tax structure optimization</li>
              <li><strong>Integration Costs:</strong> $20 million over two years</li>
              <li><strong>Net Synergy Value:</strong> $75-100 million (present value)</li>
            </ul>
          </div>
        }
        conclusion="Based on our comprehensive valuation analysis, we recommend a valuation range of $800 million to $1 billion for the Target on a standalone basis, representing 8-10x EV/Revenue and 32-40x EV/EBITDA. The DCF analysis yields a midpoint value of $900 million, which aligns with the comparable companies analysis (median 9x EV/Revenue) and recent precedent transactions (median 9.5x EV/Revenue). Including the estimated $75-100 million in synergy value, the strategic value to the Acquirer could reach $875-1,100 million. We recommend an initial offer in the lower half of the standalone range ($800-900 million) with room to increase based on due diligence findings and negotiation dynamics. The transaction would be accretive to the Acquirer's growth profile and could be structured with 70% cash and 30% stock to align incentives with the Target's management team, who will be essential for post-merger integration and continued growth."
        takeaways={[
          "High-growth technology companies are often valued based on revenue multiples rather than earnings multiples",
          "DCF analysis requires careful consideration of the convergence from high growth to sustainable long-term growth",
          "Comparable companies selection is critical and should focus on similar business models and growth profiles",
          "Synergies can significantly impact strategic value but should be risk-adjusted and phased in over time",
          "Valuation is ultimately a range rather than a point estimate, providing flexibility in negotiation"
        ]}
      />
      
      <VisualAid title="Common Interview Questions" type="note">
        <ol>
          <li className="mb-3">
            <strong>What are the main valuation methodologies, and when would you use each?</strong>
            <p>The three main valuation methodologies are: (1) Income Approach (DCF), which is forward-looking and best for companies with predictable cash flows and when detailed projections are available; (2) Market Approach (Comparable Companies and Precedent Transactions), which is useful when there are good comparable companies or transactions and provides market-based validation; and (3) Asset Approach, which is appropriate for asset-heavy businesses or liquidation scenarios. In practice, investment bankers typically use multiple methodologies to triangulate value, with DCF and comparable companies analysis being the most common. The choice depends on the company's characteristics, data availability, industry norms, and the purpose of the valuation.</p>
          </li>
          <li className="mb-3">
            <strong>What's the difference between Enterprise Value and Equity Value?</strong>
            <p>Enterprise Value (EV) represents the total value of a company's operations to all stakeholders (equity holders, debt holders, preferred shareholders, etc.), while Equity Value represents the value attributable to common shareholders only. The relationship is: Equity Value = Enterprise Value - Net Debt + Value of Non-Operating Assets - Value of Claims Senior to Common Equity. When using multiples, it's critical to maintain consistency: enterprise value multiples (EV/EBITDA, EV/Revenue) use metrics available to all stakeholders, while equity value multiples (P/E, P/B) use metrics available to equity holders only. This distinction is particularly important in M&A, where the acquirer typically assumes the target's debt obligations.</p>
          </li>
          <li className="mb-3">
            <strong>How do you calculate WACC, and what factors affect it?</strong>
            <p>WACC (Weighted Average Cost of Capital) is calculated as: WACC = (E/V × Re) + (D/V × Rd × (1-T)), where E is equity value, D is debt value, V is total value (E+D), Re is cost of equity, Rd is cost of debt, and T is the tax rate. The cost of equity is typically calculated using CAPM: Re = Rf + β(Rm - Rf), where Rf is the risk-free rate, β is the company's beta, and (Rm - Rf) is the equity risk premium. Factors affecting WACC include: capital structure (debt/equity mix), business risk (reflected in beta), interest rates, tax rates, and market risk premiums. A lower WACC increases present value in DCF models, resulting in higher valuations.</p>
          </li>
          <li className="mb-3">
            <strong>Why might different valuation methodologies yield different results?</strong>
            <p>Different valuation methodologies often yield different results because: (1) They rely on different inputs and assumptions (DCF depends on projections and discount rates, while comps depend on market multiples); (2) They capture different aspects of value (DCF captures intrinsic value based on future cash flows, while market approaches reflect current investor sentiment); (3) Market inefficiencies may cause public companies to trade above or below intrinsic value; (4) Comparable companies may have different growth profiles, margins, or risk characteristics; (5) Precedent transactions may include control premiums or synergies; and (6) Timing differences can be significant during market volatility. These differences are why investment bankers typically present a valuation range rather than a single point estimate.</p>
          </li>
          <li>
            <strong>How would you value a company with negative earnings?</strong>
            <p>For companies with negative earnings, appropriate valuation approaches include: (1) EV/Revenue multiples, which are useful for high-growth companies prioritizing scale over profitability; (2) DCF analysis with projections showing a path to profitability; (3) EV/Gross Profit or EV/Contribution Margin to focus on unit economics rather than bottom-line results; (4) Comparable companies at similar stages of development; (5) Precedent transactions involving pre-profit companies; and (6) Asset-based approaches for distressed scenarios. Key considerations include the reason for negative earnings (growth investments vs. fundamental business issues), the timeline to profitability, cash runway, and industry-specific metrics (e.g., customer acquisition costs, lifetime value, monthly recurring revenue for subscription businesses).</p>
          </li>
        </ol>
      </VisualAid>
    </div>
  );
};

export default valuationFundamentalsContent;
