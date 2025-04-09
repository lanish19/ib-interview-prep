import React from 'react';
import VisualAid from '../../components/VisualAid';
import FormulaDisplay from '../../components/FormulaDisplay';
import ComparisonTable from '../../components/ComparisonTable';
import ProcessFlow from '../../components/ProcessFlow';
import ChartDisplay from '../../components/ChartDisplay';
import KeyConcept from '../../components/KeyConcept';
import CaseStudy from '../../components/CaseStudy';
import PracticeQuestion from '../../components/PracticeQuestion';

const dcfFundamentalsContent = () => {
  return (
    <div className="content-container">
      <KeyConcept
        title="Discounted Cash Flow (DCF) Analysis"
        concept="Discounted Cash Flow (DCF) analysis is a valuation method that estimates the value of an investment based on its expected future cash flows, discounted to present value using an appropriate discount rate that reflects the time value of money and risk."
        explanation="DCF is considered an intrinsic valuation approach because it focuses on a company's fundamental ability to generate cash flows rather than relying on market comparables. It requires detailed projections of future performance and careful consideration of appropriate discount rates."
        importance="In investment banking, DCF analysis is a cornerstone valuation methodology used in M&A transactions, LBOs, capital raising, and strategic advisory. It provides a theoretically sound approach to valuation that can capture company-specific factors and long-term growth potential.

Example: When performing a DCF analysis for Deere & Company (DE), investment bankers would develop detailed cash flow projections reflecting the company's cyclical agricultural equipment business. Starting with Deere's 2024 revenue of $51.64 billion and operating margin of 24.4%, bankers would forecast future periods considering industry cycles, Deere's technological innovations in precision agriculture, and global market expansion opportunities. They would calculate Deere's WACC (typically 9-10% for industrial equipment manufacturers) based on its capital structure with $43.23 billion in long-term debt. For terminal value, they might apply a perpetuity growth rate of 2-3%, reflecting long-term agricultural equipment demand, or use an exit EV/EBITDA multiple of 10-12x. This DCF analysis would provide clients with an intrinsic valuation range for Deere, serving as a foundation for strategic decisions in potential M&A scenarios or capital allocation recommendations."
        examples={[
          "Determining the fair value of a target company in an M&A transaction",
          "Evaluating the potential returns of a leveraged buyout",
          "Assessing the impact of strategic alternatives on shareholder value",
          "Determining the intrinsic value of a company for IPO pricing"
        ]}
      />
      
      <VisualAid title="DCF Valuation Framework" type="concept">
        <div className="dcf-framework">
          <div className="framework-item mb-4">
            <h4>1. Forecast Period</h4>
            <p>The explicit period for which detailed financial projections are developed.</p>
            <ul>
              <li>Typically 5-10 years, depending on business predictability and industry dynamics</li>
              <li>Should extend until the business reaches a steady state with stable growth and margins</li>
              <li>Requires detailed projections of revenue, expenses, capital expenditures, and working capital</li>
              <li>Forecasts should reflect the company's strategic plan, industry trends, and competitive position</li>
            </ul>
          </div>
          
          <div className="framework-item mb-4">
            <h4>2. Terminal Value</h4>
            <p>The value of the business beyond the explicit forecast period, assuming perpetual operation.</p>
            <ul>
              <li><strong>Perpetuity Growth Method:</strong> TV = FCF<sub>n+1</sub> / (WACC - g)</li>
              <li><strong>Exit Multiple Method:</strong> TV = EBITDA<sub>n</sub> × Terminal Multiple</li>
              <li>Often represents 60-80% of total DCF value, making it a critical assumption</li>
              <li>Terminal growth rate typically ranges from inflation rate to long-term GDP growth (2-3%)</li>
            </ul>
          </div>
          
          <div className="framework-item mb-4">
            <h4>3. Discount Rate</h4>
            <p>The rate used to convert future cash flows to present value, reflecting risk and time value of money.</p>
            <ul>
              <li>Typically uses Weighted Average Cost of Capital (WACC) for enterprise DCF</li>
              <li>WACC incorporates both cost of equity (using CAPM) and after-tax cost of debt</li>
              <li>Higher discount rates for riskier businesses or cash flows</li>
              <li>Must align with the cash flow being discounted (unlevered FCF with WACC, levered FCF with cost of equity)</li>
            </ul>
          </div>
          
          <div className="framework-item">
            <h4>4. Present Value Calculation</h4>
            <p>Discounting all future cash flows (including terminal value) to arrive at present value.</p>
            <ul>
              <li>PV of Forecast Period: Sum of discounted free cash flows during explicit forecast period</li>
              <li>PV of Terminal Value: Terminal value discounted to present</li>
              <li>Enterprise Value = PV of Forecast Period + PV of Terminal Value</li>
              <li>Equity Value = Enterprise Value - Net Debt + Non-operating Assets</li>
            </ul>
          </div>
        </div>
      </VisualAid>
      
      <FormulaDisplay
        title="Free Cash Flow to Firm (FCFF) Calculation"
        formula="FCFF = EBIT × (1 - Tax Rate) + Depreciation & Amortization - Capital Expenditures - Increase in Net Working Capital"
        variables={[
          { symbol: "FCFF", description: "Free Cash Flow to Firm (unlevered free cash flow)" },
          { symbol: "EBIT", description: "Earnings Before Interest and Taxes" },
          { symbol: "Tax Rate", description: "Effective corporate tax rate" },
          { symbol: "Depreciation & Amortization", description: "Non-cash expenses that are added back" },
          { symbol: "Capital Expenditures", description: "Investments in long-term assets" },
          { symbol: "Increase in Net Working Capital", description: "Additional working capital required to support growth" }
        ]}
        example="If a company has EBIT of $100 million, a tax rate of 25%, depreciation and amortization of $30 million, capital expenditures of $40 million, and an increase in net working capital of $15 million, its FCFF would be: $100M × (1 - 0.25) + $30M - $40M - $15M = $75M + $30M - $40M - $15M = $50 million."
        notes="FCFF represents the cash available to all capital providers (both debt and equity) after accounting for operating expenses, taxes, and investments needed to sustain the business. It is the appropriate cash flow measure for enterprise value calculations using WACC as the discount rate."
      />
      
      <FormulaDisplay
        title="Weighted Average Cost of Capital (WACC)"
        formula="WACC = (E/V × Re) + (D/V × Rd × (1-T))"
        variables={[
          { symbol: "WACC", description: "Weighted Average Cost of Capital" },
          { symbol: "E", description: "Market value of equity" },
          { symbol: "D", description: "Market value of debt" },
          { symbol: "V", description: "Total market value (E + D)" },
          { symbol: "Re", description: "Cost of equity" },
          { symbol: "Rd", description: "Cost of debt" },
          { symbol: "T", description: "Corporate tax rate" }
        ]}
        example="If a company has a market value of equity of $800 million, market value of debt of $200 million, cost of equity of 12%, cost of debt of 5%, and a tax rate of 25%, its WACC would be: (800/1000 × 12%) + (200/1000 × 5% × (1-0.25)) = 9.6% + 0.75% = 10.35%."
        notes="WACC represents the average rate of return required by all of the company's investors, weighted by their relative contribution to the company's capital. It is the appropriate discount rate for unlevered free cash flows in a DCF analysis."
      />
      
      <FormulaDisplay
        title="Cost of Equity (CAPM)"
        formula="Re = Rf + β × (Rm - Rf)"
        variables={[
          { symbol: "Re", description: "Cost of equity" },
          { symbol: "Rf", description: "Risk-free rate (typically 10-year government bond yield)" },
          { symbol: "β", description: "Beta (measure of systematic risk relative to the market)" },
          { symbol: "Rm - Rf", description: "Equity risk premium (excess return of market over risk-free rate)" }
        ]}
        example="If the risk-free rate is 2%, the company's beta is 1.5, and the equity risk premium is 6%, the cost of equity would be: 2% + 1.5 × 6% = 2% + 9% = 11%."
        notes="The Capital Asset Pricing Model (CAPM) is the most commonly used method to estimate the cost of equity in investment banking. It assumes that investors require additional return (risk premium) for taking on additional risk, with beta measuring the company's sensitivity to market movements."
      />
      
      <ComparisonTable
        title="Terminal Value Methods Comparison"
        headers={["Method", "Formula", "Advantages", "Disadvantages"]}
        rows={[
          [
            "Perpetuity Growth",
            "TV = FCF_n+1 / (WACC - g)",
            "Theoretically sound, Captures long-term growth potential, Widely accepted in finance",
            "Highly sensitive to growth and discount rate assumptions, Requires stable growth state, Perpetual growth assumption may be unrealistic"
          ],
          [
            "Exit Multiple",
            "TV = EBITDA_n × Terminal Multiple",
            "Market-based approach, Less sensitive to long-term assumptions, Easier to communicate to clients",
            "Circular reference to current valuations, May perpetuate market inefficiencies, Requires appropriate comparable companies"
          ],
          [
            "Liquidation Value",
            "Net realizable value of assets minus liabilities",
            "Conservative approach, Useful for distressed companies, Provides valuation floor",
            "Ignores going concern value, Difficult to estimate asset liquidation values, Rarely used for healthy companies"
          ],
          [
            "Replacement Cost",
            "Cost to rebuild the business from scratch",
            "Practical for asset-heavy businesses, Considers physical capital requirements, Useful in specific industries",
            "Ignores intangible value and goodwill, Difficult to estimate accurately, Doesn't account for earning power"
          ]
        ]}
        description="Terminal value typically represents the majority of total DCF value, making the choice of methodology and assumptions critical to the valuation outcome."
      />
      
      <ProcessFlow
        title="DCF Analysis Process"
        steps={[
          {
            title: "Historical Analysis",
            description: "Analyze historical financial performance to inform projections.",
            details: "Review 3-5 years of historical financial statements. Calculate key metrics and trends: revenue growth, profit margins, capital intensity, working capital requirements, and tax rates. Identify drivers of performance and potential cyclicality."
          },
          {
            title: "Forecast Development",
            description: "Create detailed financial projections for the explicit forecast period.",
            details: "Project income statement, balance sheet, and cash flow statement for 5-10 years. Ensure internal consistency across financial statements. Incorporate management guidance, industry trends, and competitive dynamics. Consider multiple scenarios (base, upside, downside)."
          },
          {
            title: "Free Cash Flow Calculation",
            description: "Calculate unlevered free cash flows for each projection year.",
            details: "Start with EBIT and apply the tax rate to get NOPAT. Add back non-cash charges (D&A). Subtract capital expenditures and increases in net working capital. Ensure consistency with projected growth and capital requirements."
          },
          {
            title: "Discount Rate Determination",
            description: "Calculate the appropriate discount rate (typically WACC).",
            details: "Estimate cost of equity using CAPM (risk-free rate, beta, equity risk premium). Determine cost of debt based on company's credit profile and current market rates. Calculate WACC using target or industry-average capital structure. Consider adjustments for company-specific risks."
          },
          {
            title: "Terminal Value Calculation",
            description: "Estimate the value beyond the explicit forecast period.",
            details: "Select appropriate methodology (typically perpetuity growth or exit multiple). For perpetuity growth, use sustainable long-term growth rate (usually 2-3%). For exit multiple, select appropriate multiple based on comparable companies. Ensure terminal year represents a normalized, sustainable state."
          },
          {
            title: "Discounting and Valuation",
            description: "Discount all future cash flows to present value.",
            details: "Discount each forecast period cash flow using mid-year convention. Discount terminal value from the end of the forecast period. Sum the present values to arrive at enterprise value. Convert to equity value by subtracting net debt and adding non-operating assets."
          },
          {
            title: "Sensitivity Analysis",
            description: "Test how changes in key assumptions affect the valuation.",
            details: "Create sensitivity tables for key variables: WACC, terminal growth rate, terminal multiple, revenue growth, and margins. Develop scenarios to understand range of potential outcomes. Identify the most impactful variables to focus due diligence efforts."
          },
          {
            title: "Sanity Check and Triangulation",
            description: "Validate DCF results against other valuation methodologies.",
            details: "Compare implied valuation multiples to trading comparables and precedent transactions. Reconcile differences between valuation approaches. Ensure final valuation range is defensible and well-supported."
          }
        ]}
        description="A comprehensive DCF analysis in investment banking follows a structured process to ensure thorough analysis and defensible conclusions."
      />
      
      <ChartDisplay
        title="DCF Sensitivity Analysis"
        chartType="heatmap"
        imageUrl="/images/dcf-sensitivity-chart.png"
        description="This sensitivity analysis shows how the DCF valuation changes with different combinations of WACC and terminal growth rate assumptions."
        legend={[
          { color: "#4CAF50", label: "Higher Valuation" },
          { color: "#FFEB3B", label: "Moderate Valuation" },
          { color: "#F44336", label: "Lower Valuation" }
        ]}
      />
      
      <VisualAid title="Key DCF Considerations and Pitfalls" type="info">
        <div className="dcf-considerations">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Forecast Period Length</h4>
              <p>The explicit forecast period should be long enough for the company to reach a steady state.</p>
              <ul>
                <li>Too short: May not capture full value creation period</li>
                <li>Too long: Increases forecast uncertainty</li>
                <li>Industry-specific considerations: Cyclical industries may require longer periods</li>
                <li>Growth stage impact: Early-stage companies typically need longer forecast periods</li>
              </ul>
            </div>
            
            <div className="col-md-6 mb-4">
              <h4>Terminal Value Assumptions</h4>
              <p>Terminal value often represents 60-80% of total DCF value, making assumptions critical.</p>
              <ul>
                <li>Growth rate should not exceed long-term GDP growth (typically 2-3%)</li>
                <li>Terminal year should represent normalized, sustainable performance</li>
                <li>Consider using both perpetuity growth and exit multiple methods as cross-check</li>
                <li>Ensure capital expenditures and depreciation converge in terminal period</li>
              </ul>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Discount Rate Determination</h4>
              <p>The discount rate should appropriately reflect the riskiness of cash flows.</p>
              <ul>
                <li>Use current market data for risk-free rate and equity risk premium</li>
                <li>Consider company-specific risk factors in beta or as separate premium</li>
                <li>Ensure consistency between cash flow and discount rate currency</li>
                <li>Use target capital structure rather than current structure if significant changes are expected</li>
              </ul>
            </div>
            
            <div className="col-md-6 mb-4">
              <h4>Projection Consistency</h4>
              <p>Financial projections must be internally consistent and realistic.</p>
              <ul>
                <li>Revenue growth should align with market size, competitive position, and capacity</li>
                <li>Margin expansion should have clear operational drivers</li>
                <li>Capital expenditures should support projected growth</li>
                <li>Working capital requirements should align with business model and industry norms</li>
              </ul>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Common Pitfalls</h4>
              <p>Avoid these common errors in DCF analysis:</p>
              <ul>
                <li>Mismatch between cash flows and discount rate (e.g., levered cash flows with WACC)</li>
                <li>Inconsistent treatment of inflation in cash flows and discount rate</li>
                <li>Overly optimistic terminal growth rates</li>
                <li>Failing to normalize the terminal year</li>
                <li>Ignoring working capital requirements</li>
                <li>Inconsistent treatment of non-operating assets and liabilities</li>
              </ul>
            </div>
            
            <div className="col-md-6 mb-4">
              <h4>DCF Variations</h4>
              <p>Different DCF approaches for specific situations:</p>
              <ul>
                <li><strong>Adjusted Present Value (APV):</strong> Separates operating value from financing effects</li>
                <li><strong>Dividend Discount Model (DDM):</strong> Values equity directly based on expected dividends</li>
                <li><strong>Three-Stage DCF:</strong> Incorporates high growth, transition, and mature stages</li>
                <li><strong>Probability-Weighted DCF:</strong> Incorporates multiple scenarios with assigned probabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </VisualAid>
      
      <CaseStudy
        title="DCF Valuation Case Study: Manufacturing Company"
        scenario="You are an investment banking analyst valuing a mid-sized manufacturing company for a potential acquisition. The company generates $200 million in annual revenue with EBITDA margins of 15% and has been growing at 5% annually. The company operates in a mature industry with stable but modest growth prospects."
        questions={[
          "How would you structure the DCF analysis for this manufacturing company?",
          "What key assumptions would drive your valuation?",
          "How would you determine the appropriate discount rate?",
          "What sensitivity analyses would be most relevant?"
        ]}
        analysis={
          <div>
            <p><strong>DCF Structure:</strong></p>
            <ul>
              <li><strong>Forecast Period:</strong> 5 years (appropriate for mature industry with stable growth)</li>
              <li><strong>Terminal Value Method:</strong> Both perpetuity growth and exit multiple approaches</li>
              <li><strong>Cash Flow Measure:</strong> Unlevered free cash flow to firm</li>
              <li><strong>Discounting Approach:</strong> Mid-year convention to reflect continuous cash flow generation</li>
            </ul>
            
            <p><strong>Key Assumptions:</strong></p>
            <ul>
              <li><strong>Revenue Growth:</strong> 5% initially, gradually declining to 2% by year 5</li>
              <li><strong>EBITDA Margin:</strong> 15% initially, expanding to 16% by year 5 through operational efficiencies</li>
              <li><strong>Depreciation:</strong> 5% of revenue, aligned with historical patterns</li>
              <li><strong>Capital Expenditures:</strong> 6% of revenue initially, declining to 5% (maintenance level) by year 5</li>
              <li><strong>Working Capital:</strong> 15% of incremental revenue, consistent with industry norms</li>
              <li><strong>Terminal Growth Rate:</strong> 2%, aligned with long-term inflation expectations</li>
              <li><strong>Terminal EBITDA Multiple:</strong> 7.0x, based on trading multiples of mature manufacturing companies</li>
            </ul>
            
            <p><strong>Discount Rate Determination:</strong></p>
            <ul>
              <li><strong>Risk-Free Rate:</strong> 2.5% (10-year Treasury yield)</li>
              <li><strong>Beta:</strong> 1.2 (based on comparable companies)</li>
              <li><strong>Equity Risk Premium:</strong> 5.5% (current market estimate)</li>
              <li><strong>Cost of Equity:</strong> 2.5% + 1.2 × 5.5% = 9.1%</li>
              <li><strong>Pre-Tax Cost of Debt:</strong> 4.5% (based on company's credit profile)</li>
              <li><strong>Tax Rate:</strong> 25% (effective rate)</li>
              <li><strong>After-Tax Cost of Debt:</strong> 4.5% × (1 - 25%) = 3.4%</li>
              <li><strong>Target Capital Structure:</strong> 70% equity, 30% debt (industry average)</li>
              <li><strong>WACC:</strong> 70% × 9.1% + 30% × 3.4% = 7.4%</li>
            </ul>
            
            <p><strong>Sensitivity Analyses:</strong></p>
            <ul>
              <li><strong>WACC vs. Terminal Growth Rate:</strong> WACC range of 6.4-8.4%, terminal growth range of 1.5-2.5%</li>
              <li><strong>WACC vs. Terminal EBITDA Multiple:</strong> WACC range of 6.4-8.4%, terminal multiple range of 6.0-8.0x</li>
              <li><strong>Long-term EBITDA Margin vs. Revenue Growth:</strong> EBITDA margin range of 15-17%, revenue growth range of 3-7%</li>
              <li><strong>Capital Expenditure vs. Depreciation:</strong> To test impact of different reinvestment assumptions</li>
            </ul>
          </div>
        }
        conclusion="Based on our DCF analysis, we estimate the enterprise value of the manufacturing company to be in the range of $280-320 million, representing 9.3-10.7x current EBITDA. The base case DCF yields a value of $300 million using a WACC of 7.4% and terminal growth rate of 2.0%. Sensitivity analysis shows that the valuation is most sensitive to changes in the WACC and long-term EBITDA margin assumptions. The perpetuity growth method and exit multiple method produce consistent valuations when using a terminal EBITDA multiple of 7.0x. This valuation range is supported by comparable companies trading at 8.5-10.5x EBITDA and recent precedent transactions in the 9.0-11.0x range. Given the company's stable market position, operational efficiency initiatives, and modest growth prospects, we believe a valuation in the middle of this range would be appropriate for acquisition discussions."
        takeaways={[
          "DCF analysis for mature companies can use shorter forecast periods (5 years) compared to high-growth companies",
          "Terminal value assumptions are critical, with terminal growth rate not exceeding long-term inflation/GDP growth",
          "WACC calculation requires careful consideration of appropriate risk measures and capital structure",
          "Sensitivity analysis helps identify the most impactful variables and provides a valuation range rather than a single point estimate",
          "Cross-checking DCF results with market-based approaches (comparable companies and precedent transactions) provides validation"
        ]}
      />
      
      <VisualAid title="Common Interview Questions" type="note">
        <ol>
          <li className="mb-3">
            <strong>Walk me through a DCF analysis.</strong>
            <p>A DCF analysis involves several key steps: (1) Forecast future free cash flows for an explicit projection period (typically 5-10 years); (2) Calculate terminal value using either the perpetuity growth method or exit multiple method; (3) Determine the appropriate discount rate, usually the WACC; (4) Discount all future cash flows to present value; (5) Sum the present values to arrive at enterprise value; (6) Convert to equity value by subtracting net debt and adding non-operating assets; (7) Perform sensitivity analysis on key assumptions; and (8) Cross-check the DCF valuation against other methodologies like comparable companies analysis. The DCF is theoretically sound because it values a company based on its fundamental ability to generate cash flows rather than market comparables.</p>
          </li>
          <li className="mb-3">
            <strong>How do you calculate free cash flow to firm (FCFF)?</strong>
            <p>Free Cash Flow to Firm (FCFF) is calculated as: EBIT × (1 - Tax Rate) + Depreciation & Amortization - Capital Expenditures - Increase in Net Working Capital. Starting with EBIT ensures we capture the operating profit available to all capital providers before financing costs. We apply the tax rate to get NOPAT (Net Operating Profit After Tax), then add back non-cash expenses like depreciation and amortization. Finally, we subtract investments required to sustain the business: capital expenditures for long-term assets and additional working capital needed to support growth. FCFF represents the cash available to all investors (debt and equity) after accounting for operating expenses, taxes, and reinvestment needs.</p>
          </li>
          <li className="mb-3">
            <strong>Why might terminal value represent such a large portion of total DCF value?</strong>
            <p>Terminal value often represents 60-80% of total DCF value because: (1) The terminal value captures all cash flows from the end of the explicit forecast period to infinity, which is a much longer timeframe than the forecast period; (2) The time value of money means near-term cash flows contribute relatively less to present value than might be expected; (3) Many companies don't reach their steady state until the end of the forecast period, with higher growth and cash flow generation in later years; and (4) The mathematical impact of the perpetuity formula (CF/(r-g)) is significant, especially when the spread between discount rate and growth rate is small. This highlights the importance of careful terminal value assumptions, as small changes can dramatically impact the overall valuation.</p>
          </li>
          <li className="mb-3">
            <strong>How would you determine the appropriate discount rate for a DCF?</strong>
            <p>The appropriate discount rate for a DCF is typically the Weighted Average Cost of Capital (WACC), which represents the blended cost of a company's debt and equity financing. To calculate WACC: (1) Determine the cost of equity using CAPM (Rf + β × ERP), considering the appropriate risk-free rate, beta, and equity risk premium; (2) Calculate the after-tax cost of debt based on the company's credit profile and current market rates; (3) Weight these costs according to the target capital structure (typically using market values rather than book values); and (4) Consider adjustments for company-specific risks, size premium, or country risk if applicable. The discount rate should match the risk profile of the cash flows being discounted and be consistent in terms of inflation assumptions and currency.</p>
          </li>
          <li>
            <strong>What are the key limitations or drawbacks of DCF analysis?</strong>
            <p>Key limitations of DCF analysis include: (1) High sensitivity to assumptions, particularly terminal value and discount rate, where small changes can significantly impact valuation; (2) Forecasting difficulty, especially for companies with uncertain futures or volatile performance; (3) Subjectivity in key inputs like growth rates, margins, and discount rates, allowing for potential manipulation; (4) Complexity that can make it difficult to communicate to clients or management; (5) Challenges in capturing cyclicality or non-linear growth patterns; and (6) Potential disconnect from current market valuations during periods of market dislocation. Despite these limitations, DCF remains valuable when used alongside other methodologies and with appropriate sensitivity analysis to understand the range of potential outcomes.</p>
          </li>
        </ol>
      </VisualAid>
    </div>
  );
};

export default dcfFundamentalsContent;
