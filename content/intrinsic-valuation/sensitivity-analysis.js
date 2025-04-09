import React from 'react';
import VisualAid from '../../components/VisualAid';
import FormulaDisplay from '../../components/FormulaDisplay';
import ComparisonTable from '../../components/ComparisonTable';
import ProcessFlow from '../../components/ProcessFlow';
import ChartDisplay from '../../components/ChartDisplay';
import KeyConcept from '../../components/KeyConcept';
import CaseStudy from '../../components/CaseStudy';
import PracticeQuestion from '../../components/PracticeQuestion';

const sensitivityAnalysisContent = () => {
  return (
    <div className="content-container">
      <KeyConcept
        title="Sensitivity Analysis"
        concept="Sensitivity Analysis is a technique used to determine how different values of independent variables affect a dependent variable under specific conditions, helping to assess the impact of uncertainty on valuation outcomes."
        explanation="Sensitivity analysis examines how changes in key inputs and assumptions affect valuation results, providing insight into which variables have the greatest impact on a company's value. This analysis is crucial for understanding the robustness of valuation conclusions and identifying the most critical value drivers. In DCF valuation, sensitivity analysis typically focuses on variables such as the discount rate (WACC), terminal growth rate, revenue growth, profit margins, and capital expenditure requirements. By systematically varying these inputs and observing the resulting changes in enterprise value or equity value, analysts can quantify the degree of uncertainty in their valuation and establish a defensible valuation range."
        importance="Sensitivity analysis is essential in investment banking as it transforms a single-point valuation estimate into a more realistic and defensible valuation range. When preparing pitch books or fairness opinions, you'll need to demonstrate how changes in key assumptions affect valuation outcomes. During M&A advisory, sensitivity analysis helps identify the most critical negotiation points and value drivers. For IPO pricing, it provides a framework for establishing the offering range. In client presentations, you'll need to explain which variables have the greatest impact on value and why. Strong understanding of sensitivity analysis demonstrates your ability to think critically about valuation uncertainties, which is highly valued in investment banking interviews and on the job."
        examples={[
          "One-variable sensitivity tables showing how enterprise value changes with different discount rates",
          "Two-variable sensitivity matrices examining the combined effect of terminal growth rate and EBITDA margin",
          "Tornado charts highlighting the relative impact of different variables on valuation outcomes",
          "Scenario analysis examining valuation under specific combinations of assumptions (base, upside, downside cases)"
        ]}
      />
      
      <VisualAid title="Sensitivity Analysis Approaches" type="concept">
        <div className="sensitivity-approaches">
          <div className="approach-item mb-4">
            <h4>1. One-Variable Sensitivity Tables</h4>
            <p>Examine how changes in a single variable affect valuation outcomes, holding all other variables constant.</p>
            <ul>
              <li><strong>Common Variables:</strong> WACC, terminal growth rate, revenue growth, EBITDA margin</li>
              <li><strong>Implementation:</strong> Create a table with different values of the variable and corresponding valuation results</li>
              <li><strong>Advantages:</strong> Simple to create and interpret; Clearly isolates the impact of a single variable</li>
              <li><strong>Limitations:</strong> Ignores interactions between variables; May oversimplify complex relationships</li>
              <li><strong>Example:</strong> Table showing enterprise value at WACC rates ranging from 8% to 12% in 0.5% increments</li>
            </ul>
          </div>
          
          <div className="approach-item mb-4">
            <h4>2. Two-Variable Sensitivity Matrices</h4>
            <p>Analyze how two variables simultaneously affect valuation outcomes.</p>
            <ul>
              <li><strong>Common Combinations:</strong> WACC vs. terminal growth rate; Revenue growth vs. EBITDA margin</li>
              <li><strong>Implementation:</strong> Create a matrix with one variable on each axis and valuation results in the cells</li>
              <li><strong>Advantages:</strong> Captures interaction effects between two key variables; Provides more comprehensive view</li>
              <li><strong>Limitations:</strong> More complex to interpret; Still holds other variables constant</li>
              <li><strong>Example:</strong> Matrix showing enterprise value at different combinations of WACC (rows) and terminal growth rate (columns)</li>
            </ul>
          </div>
          
          <div className="approach-item mb-4">
            <h4>3. Tornado Charts</h4>
            <p>Visually rank variables by their impact on valuation outcomes.</p>
            <ul>
              <li><strong>Implementation:</strong> Vary each input by a consistent percentage (e.g., ±10%) and measure impact on value</li>
              <li><strong>Visualization:</strong> Horizontal bar chart with variables ranked by impact magnitude</li>
              <li><strong>Advantages:</strong> Clearly identifies most influential variables; Provides visual prioritization</li>
              <li><strong>Limitations:</strong> Typically uses symmetric variations which may not reflect realistic ranges</li>
              <li><strong>Example:</strong> Chart showing that a 10% change in EBITDA margin affects value more than a 10% change in CapEx</li>
            </ul>
          </div>
          
          <div className="approach-item mb-4">
            <h4>4. Scenario Analysis</h4>
            <p>Evaluate valuation under specific combinations of assumptions representing coherent scenarios.</p>
            <ul>
              <li><strong>Common Scenarios:</strong> Base case, upside case, downside case, management case</li>
              <li><strong>Implementation:</strong> Develop complete set of internally consistent assumptions for each scenario</li>
              <li><strong>Advantages:</strong> Provides realistic view of potential outcomes; Captures interdependencies between variables</li>
              <li><strong>Limitations:</strong> Limited number of scenarios can be practically analyzed; Subjective scenario definition</li>
              <li><strong>Example:</strong> Downside case with lower growth, compressed margins, and higher capital requirements</li>
            </ul>
          </div>
          
          <div className="approach-item">
            <h4>5. Monte Carlo Simulation</h4>
            <p>Use probability distributions for key inputs to generate a distribution of valuation outcomes.</p>
            <ul>
              <li><strong>Implementation:</strong> Define probability distributions for key variables and run thousands of simulations</li>
              <li><strong>Outputs:</strong> Probability distribution of valuation outcomes; Confidence intervals</li>
              <li><strong>Advantages:</strong> Comprehensive view of uncertainty; Accounts for variable interactions; Provides probability estimates</li>
              <li><strong>Limitations:</strong> Complex to implement; Requires statistical expertise; Dependent on distribution assumptions</li>
              <li><strong>Example:</strong> Simulation showing 80% confidence interval for equity value between $400M and $600M</li>
            </ul>
          </div>
        </div>
      </VisualAid>
      
      <FormulaDisplay
        title="Valuation Sensitivity to Discount Rate"
        formula="ΔV/V ≈ -D × ΔWACC"
        variables={[
          { symbol: "ΔV/V", description: "Percentage change in valuation" },
          { symbol: "D", description: "Duration (a measure of time-weighted cash flows, similar to bond duration)" },
          { symbol: "ΔWACC", description: "Absolute change in discount rate" }
        ]}
        example="A company with a duration of 15 years experiences a 0.5% increase in its discount rate (WACC). The approximate percentage change in valuation would be: ΔV/V ≈ -15 × 0.005 = -0.075 or -7.5%. This means the company's value would decrease by approximately 7.5% due to the 0.5% increase in WACC."
        notes="This approximation formula demonstrates the inverse relationship between discount rates and valuation. Companies with longer durations (those with more of their value in distant cash flows) are more sensitive to discount rate changes. Growth companies typically have longer durations than mature companies because more of their value comes from cash flows further in the future. The formula is most accurate for small changes in discount rates. For larger changes, direct recalculation of the DCF model is necessary for precise results."
      />
      
      <FormulaDisplay
        title="Terminal Value Sensitivity to Growth and Discount Rates"
        formula="TV = FCF_t × (1 + g) / (WACC - g)"
        variables={[
          { symbol: "TV", description: "Terminal Value" },
          { symbol: "FCF_t", description: "Free Cash Flow in the terminal year" },
          { symbol: "g", description: "Terminal growth rate" },
          { symbol: "WACC", description: "Weighted Average Cost of Capital" }
        ]}
        example="A company has a terminal year free cash flow of $50 million, a WACC of 10%, and a terminal growth rate of 3%. The terminal value would be: TV = $50M × (1 + 0.03) / (0.10 - 0.03) = $51.5M / 0.07 = $735.7M. If the terminal growth rate increases to 3.5%, the terminal value becomes: TV = $50M × (1 + 0.035) / (0.10 - 0.035) = $51.75M / 0.065 = $796.2M, an increase of 8.2%."
        notes="The terminal value formula (Gordon Growth Model) is highly sensitive to the relationship between WACC and growth rate. As the growth rate approaches the discount rate, the denominator approaches zero and the terminal value approaches infinity. This mathematical property explains why small changes in assumptions can lead to large changes in valuation. In practice, the terminal growth rate should not exceed the long-term growth rate of the economy (typically 2-3% in developed markets). The sensitivity increases as the gap between WACC and g narrows, making high-growth companies particularly sensitive to these assumptions."
      />
      
      <ComparisonTable
        title="Sensitivity Analysis by Industry"
        headers={["Industry", "Most Sensitive Variables", "Typical Sensitivity Ranges", "Key Considerations"]}
        rows={[
          [
            "Technology",
            "Revenue growth, R&D expenditure, Terminal growth rate",
            "WACC: 9-13%, Terminal growth: 3-5%, Revenue CAGR: 10-30%",
            "High growth rates make terminal value extremely sensitive to assumptions; Product lifecycle and obsolescence risk; Network effects can create winner-take-all dynamics"
          ],
          [
            "Consumer Retail",
            "Same-store sales growth, Gross margin, Store expansion rate",
            "WACC: 8-11%, Terminal growth: 2-3%, SSS growth: 1-5%",
            "Seasonality affects working capital sensitivity; Store economics drive overall valuation; E-commerce penetration impacts long-term growth assumptions"
          ],
          [
            "Financial Services",
            "Net interest margin, Loan loss provisions, Regulatory capital",
            "WACC: 9-12%, Terminal growth: 2-3%, NIM: 2-4%",
            "Interest rate sensitivity critical for banks; Credit cycle impacts on loan losses; Regulatory changes can significantly affect capital requirements"
          ],
          [
            "Healthcare",
            "Reimbursement rates, R&D pipeline success, Patent expiration",
            "WACC: 8-12%, Terminal growth: 3-4%, Margin compression: 0-200bps",
            "Binary outcomes for drug approvals; Regulatory and pricing pressure risks; Demographic tailwinds for long-term growth"
          ],
          [
            "Energy",
            "Commodity prices, Reserve replacement, Production costs",
            "WACC: 10-14%, Terminal growth: 1-2%, Oil price: $40-80/barrel",
            "Commodity price cycles drive extreme sensitivity; Reserve life and replacement cost; Energy transition risks to terminal value"
          ],
          [
            "Industrials",
            "Capacity utilization, Input costs, Economic cycle timing",
            "WACC: 9-12%, Terminal growth: 2-3%, Margin cyclicality: ±300bps",
            "Economic cyclicality affects mid-cycle normalization; Capital intensity drives CapEx sensitivity; Global trade and tariff considerations"
          ],
          [
            "Telecommunications",
            "ARPU, Churn rate, Network CapEx",
            "WACC: 7-10%, Terminal growth: 1-3%, ARPU change: ±5%",
            "High fixed costs create operating leverage sensitivity; Technology upgrade cycles drive CapEx timing; Regulatory changes impact pricing power"
          ]
        ]}
        description="Effective sensitivity analysis must be tailored to industry-specific value drivers and risk factors. The most critical variables differ significantly across sectors, reflecting different business models, capital intensity, growth profiles, and regulatory environments. This table highlights the key sensitivities to consider when valuing companies in different industries."
      />
      
      <ProcessFlow
        title="Conducting Comprehensive Sensitivity Analysis"
        steps={[
          {
            title: "Identify Key Value Drivers",
            description: "Determine which variables have the greatest potential impact on valuation outcomes.",
            details: "Review the DCF model structure to identify all major inputs. Categorize variables by type (operational, financial, valuation-specific). Consider industry-specific value drivers. Analyze historical volatility of key metrics. Consult with industry experts to identify critical uncertainties. Prioritize variables that are both impactful and uncertain."
          },
          {
            title: "Define Reasonable Ranges",
            description: "Establish realistic ranges for each key variable based on historical data and future expectations.",
            details: "Analyze historical performance to establish baseline variability. Research industry benchmarks and competitor performance. Consider analyst forecasts and management guidance. Assess macroeconomic factors that might influence ranges. Define asymmetric ranges when appropriate (e.g., more downside than upside potential). Document rationale for selected ranges to support credibility."
          },
          {
            title: "Perform One-Variable Sensitivity Analysis",
            description: "Analyze how changes in individual variables affect valuation outcomes.",
            details: "Create sensitivity tables for each key variable. Use consistent increments across the defined range. Calculate percentage change in value for each increment. Identify variables with disproportionate impact. Determine threshold values where valuation conclusions might change. Visualize results with line charts or waterfall diagrams."
          },
          {
            title: "Develop Two-Variable Sensitivity Matrices",
            description: "Examine how pairs of variables jointly affect valuation outcomes.",
            details: "Identify logical variable pairs with potential interactions. Create matrices with one variable on each axis. Calculate valuation for each combination of values. Use conditional formatting to highlight patterns. Focus on WACC vs. terminal growth rate as a standard analysis. Consider revenue growth vs. margin as another key combination."
          },
          {
            title: "Create Tornado Chart Analysis",
            description: "Rank variables by their relative impact on valuation.",
            details: "Define consistent variation percentage for all variables (e.g., ±10%). Calculate valuation impact of each variable's variation. Rank variables from highest to lowest impact. Create horizontal bar chart with variables sorted by impact. Use different colors for positive and negative impacts. Analyze results to identify the most critical value drivers."
          },
          {
            title: "Develop Coherent Scenarios",
            description: "Create internally consistent combinations of assumptions representing specific scenarios.",
            details: "Define 3-5 core scenarios (e.g., base, upside, downside). Ensure logical consistency of assumptions within each scenario. Consider correlations between variables. Develop narrative descriptions for each scenario. Calculate complete valuation for each scenario. Assign subjective probabilities if appropriate for weighted valuation."
          },
          {
            title: "Interpret Results and Establish Valuation Range",
            description: "Synthesize sensitivity analyses to determine a defensible valuation range.",
            details: "Identify the most impactful variables from all analyses. Determine realistic bounds for these critical variables. Establish valuation range based on reasonable combinations of assumptions. Consider scenario probabilities in range determination. Ensure range width reflects genuine uncertainty while remaining credible. Prepare clear visualization of key sensitivities for client presentation."
          }
        ]}
        description="This systematic approach to sensitivity analysis ensures a comprehensive understanding of valuation uncertainties and value drivers. The process balances analytical rigor with practical business judgment to develop defensible valuation ranges that acknowledge the inherent uncertainty in financial projections and valuation parameters."
      />
      
      <ChartDisplay
        title="Enterprise Value Sensitivity to WACC and Terminal Growth"
        chartType="heatmap"
        imageUrl="/images/wacc-growth-sensitivity.png"
        description="This heat map illustrates how enterprise value changes with different combinations of WACC and terminal growth rate. The diagonal pattern demonstrates that as the gap between WACC and growth rate narrows, valuation increases exponentially. This visualization highlights why these two parameters are typically the most critical sensitivity factors in DCF valuation."
      />
      
      <CaseStudy
        title="Sensitivity Analysis in Software Company Valuation"
        scenario="You're an investment banking analyst working on a DCF valuation for CloudSoft, a SaaS company with $100 million in revenue growing at 25% annually. The company has a 20% EBITDA margin expected to expand to 30% over the next five years as it scales. The base case DCF yields an enterprise value of $1.2 billion using a 12% WACC and 4% terminal growth rate. Your managing director has asked you to prepare a comprehensive sensitivity analysis to understand the robustness of this valuation and identify the most critical value drivers."
        questions={[
          "Which variables should be included in the sensitivity analysis for this SaaS company?",
          "What ranges would be appropriate for these variables?",
          "How would you structure and present the sensitivity analysis?",
          "What insights would you expect to gain from this analysis?"
        ]}
        analysis={
          <div>
            <p><strong>Key Variables for Sensitivity Analysis:</strong></p>
            <p>For a SaaS company like CloudSoft, the most relevant variables include:</p>
            <ul>
              <li><strong>Valuation Parameters:</strong>
                <ul>
                  <li>WACC (cost of capital)</li>
                  <li>Terminal growth rate</li>
                  <li>Terminal EBITDA multiple (alternative terminal value method)</li>
                </ul>
              </li>
              <li><strong>Operational Metrics:</strong>
                <ul>
                  <li>Revenue growth rate (near-term and long-term)</li>
                  <li>EBITDA margin expansion trajectory</li>
                  <li>Sales & marketing efficiency (CAC payback period)</li>
                  <li>Customer retention/churn rate</li>
                </ul>
              </li>
              <li><strong>Capital Requirements:</strong>
                <ul>
                  <li>Capital expenditure as percentage of revenue</li>
                  <li>Working capital requirements</li>
                </ul>
              </li>
            </ul>
            
            <p><strong>Appropriate Ranges for Key Variables:</strong></p>
            <ul>
              <li><strong>WACC:</strong> 10-14% (±2% from base case)
                <ul>
                  <li>Reflects uncertainty in risk-free rates and equity risk premiums</li>
                  <li>Accounts for potential changes in CloudSoft's risk profile as it matures</li>
                </ul>
              </li>
              <li><strong>Terminal Growth Rate:</strong> 3-5% (±1% from base case)
                <ul>
                  <li>Upper bound reflects strong SaaS sector growth prospects</li>
                  <li>Lower bound acknowledges potential market saturation and competition</li>
                </ul>
              </li>
              <li><strong>Revenue Growth Rate:</strong>
                <ul>
                  <li>Near-term (Years 1-3): 20-30% (±5% from base case)</li>
                  <li>Long-term (Years 4-5): 15-25% (wider range reflecting greater uncertainty)</li>
                </ul>
              </li>
              <li><strong>Terminal EBITDA Margin:</strong> 25-35% (±5% from target margin)
                <ul>
                  <li>Upper bound based on best-in-class SaaS companies</li>
                  <li>Lower bound reflecting potential competitive pressure on pricing</li>
                </ul>
              </li>
              <li><strong>Terminal EBITDA Multiple:</strong> 12-18x (industry range for mature SaaS companies)
                <ul>
                  <li>Alternative terminal value method to cross-check Gordon Growth approach</li>
                </ul>
              </li>
            </ul>
            
            <p><strong>Sensitivity Analysis Structure and Presentation:</strong></p>
            <ol>
              <li><strong>One-Variable Sensitivity Tables:</strong>
                <ul>
                  <li>WACC sensitivity: 10.0% to 14.0% in 0.5% increments</li>
                  <li>Terminal growth sensitivity: 3.0% to 5.0% in 0.25% increments</li>
                  <li>Revenue growth sensitivity: Varying CAGR by ±5% in 1% increments</li>
                  <li>Terminal margin sensitivity: 25% to 35% in 1% increments</li>
                </ul>
              </li>
              <li><strong>Two-Variable Sensitivity Matrices:</strong>
                <ul>
                  <li>Primary matrix: WACC (rows) vs. Terminal growth rate (columns)</li>
                  <li>Secondary matrix: Revenue growth (rows) vs. Terminal EBITDA margin (columns)</li>
                  <li>Use conditional formatting with color gradients to highlight patterns</li>
                </ul>
              </li>
              <li><strong>Tornado Chart:</strong>
                <ul>
                  <li>Show impact of ±10% change in each key variable</li>
                  <li>Rank variables by magnitude of impact on enterprise value</li>
                  <li>Use different colors for positive and negative impacts</li>
                </ul>
              </li>
              <li><strong>Scenario Analysis:</strong>
                <ul>
                  <li>Base Case: Current assumptions ($1.2B enterprise value)</li>
                  <li>Upside Case: Higher growth, faster margin expansion, lower WACC</li>
                  <li>Downside Case: Slower growth, margin pressure, higher WACC</li>
                  <li>Management Case: Based on company's internal projections</li>
                  <li>Present complete set of assumptions and resulting valuations for each scenario</li>
                </ul>
              </li>
            </ol>
            
            <p><strong>Expected Insights from Analysis:</strong></p>
            <ul>
              <li><strong>Valuation Range Determination:</strong>
                <ul>
                  <li>Likely range of $900M-$1.5B based on reasonable variations in key assumptions</li>
                  <li>Identification of threshold values where valuation conclusions might change</li>
                </ul>
              </li>
              <li><strong>Critical Value Drivers:</strong>
                <ul>
                  <li>Ranking of variables by impact (likely led by revenue growth and WACC)</li>
                  <li>Understanding of which operational metrics management should prioritize</li>
                </ul>
              </li>
              <li><strong>Risk Assessment:</strong>
                <ul>
                  <li>Quantification of downside risk under pessimistic scenarios</li>
                  <li>Identification of specific risks with greatest valuation impact</li>
                </ul>
              </li>
              <li><strong>Strategic Implications:</strong>
                <ul>
                  <li>Insights into trade-offs between growth investment and profitability</li>
                  <li>Guidance on which operational metrics create most shareholder value</li>
                </ul>
              </li>
            </ul>
          </div>
        }
        conclusion="The sensitivity analysis reveals that CloudSoft's valuation is most sensitive to revenue growth assumptions and WACC, with a reasonable enterprise value range of $900 million to $1.5 billion. The WACC vs. terminal growth matrix shows that a 1% decrease in WACC (to 11%) combined with a 0.5% increase in terminal growth (to 4.5%) would increase the valuation by approximately 25% to $1.5 billion. Conversely, a 1% increase in WACC (to 13%) combined with a 0.5% decrease in terminal growth (to 3.5%) would decrease the valuation by approximately 20% to $960 million. The tornado chart confirms that revenue growth has the largest impact on valuation, followed by WACC, terminal EBITDA margin, and terminal growth rate. This suggests that CloudSoft's management should prioritize growth initiatives over margin expansion in the near term to maximize value. The scenario analysis indicates that the downside case ($800 million) represents a 33% decrease from the base case, while the upside case ($1.6 billion) represents a 33% increase, demonstrating relatively symmetric risk-reward profile. Overall, the $1.2 billion base case valuation appears reasonable but highly dependent on the company's ability to maintain its strong growth trajectory."
        takeaways={[
          "SaaS company valuations are particularly sensitive to revenue growth assumptions and WACC",
          "The relationship between WACC and terminal growth rate creates exponential sensitivity as they converge",
          "Margin expansion trajectory is a critical value driver for scaling SaaS businesses",
          "Comprehensive sensitivity analysis should include both valuation parameters and operational metrics",
          "Scenario analysis provides a more intuitive way to communicate valuation ranges to clients and management"
        ]}
      />
      
      <PracticeQuestion
        question={{
          question: "A company's base case DCF valuation yields an enterprise value of $500 million using a WACC of 10% and terminal growth rate of 2%. If the WACC increases to 11% and all other assumptions remain the same, the enterprise value decreases to $450 million. If instead the terminal growth rate decreases to 1% (keeping WACC at 10%), the enterprise value decreases to $460 million. Calculate the enterprise value if both changes occur simultaneously (WACC = 11% and terminal growth rate = 1%).",
          solution: "Step 1: Calculate the percentage change in enterprise value for each variable change individually\n\nFor WACC increase from 10% to 11%:\nPercentage change = ($450M - $500M) / $500M = -$50M / $500M = -10%\n\nFor terminal growth decrease from 2% to 1%:\nPercentage change = ($460M - $500M) / $500M = -$40M / $500M = -8%\n\nStep 2: Determine if the effects are approximately additive\n\nIf the effects were perfectly additive, the combined percentage change would be:\n-10% + (-8%) = -18%\nAnd the resulting enterprise value would be:\n$500M × (1 - 0.18) = $500M × 0.82 = $410M\n\nHowever, DCF sensitivity effects are not perfectly additive due to the non-linear relationship between variables, particularly between WACC and terminal growth rate.\n\nStep 3: Calculate the actual combined effect\n\nThe more accurate approach is to recognize that the relationship between WACC and terminal growth is captured in the Gordon Growth Model for terminal value:\nTV = FCF_t × (1 + g) / (WACC - g)\n\nWhen both variables change, there is an interaction effect. The percentage changes cannot simply be added.\n\nLet's calculate the approximate combined effect using the Gordon Growth Model relationships:\n\nBase case: g = 2%, WACC = 10%, denominator = 10% - 2% = 8%\nCase 1: g = 2%, WACC = 11%, denominator = 11% - 2% = 9% (12.5% increase in denominator)\nCase 2: g = 1%, WACC = 10%, denominator = 10% - 1% = 9% (12.5% increase in denominator)\nCombined case: g = 1%, WACC = 11%, denominator = 11% - 1% = 10% (25% increase in denominator)\n\nSince terminal value is inversely proportional to this denominator, and terminal value typically represents a large portion of total enterprise value, we can estimate that the combined effect would be greater than the sum of individual effects.\n\nThe combined effect would reduce enterprise value to approximately:\n$500M × (1 / 1.25) = $500M × 0.8 = $400M\n\nThis is lower than the $410M estimated by simply adding the percentage changes.",
          explanation: "This question tests your understanding of how different variables interact in DCF sensitivity analysis. The solution demonstrates that the effects of changing multiple variables simultaneously are not simply additive due to the non-linear relationships in DCF models, particularly in the terminal value calculation. The Gordon Growth Model formula (TV = FCF_t × (1 + g) / (WACC - g)) shows that WACC and terminal growth rate interact in the denominator, creating a compounding effect when both change. This interaction effect is why two-variable sensitivity matrices are important in DCF analysis—they capture these non-linear relationships that one-variable sensitivity tables miss. In practice, you would recalculate the full DCF model with both changes to get the precise answer, but understanding the interaction effect allows for reasonable approximation.",
          keyTakeaways: [
            "DCF sensitivity effects are not perfectly additive due to non-linear relationships between variables",
            "The interaction between WACC and terminal growth rate is particularly important due to their relationship in the Gordon Growth Model",
            "Two-variable sensitivity matrices are necessary to capture interaction effects between key variables",
            "The combined effect of adverse changes in both WACC and terminal growth rate is typically worse than the sum of individual effects",
            "Understanding these interactions is critical for comprehensive sensitivity analysis in DCF valuation"
          ]
        }}
        difficulty="medium"
      />
      
      <PracticeQuestion
        question={{
          question: "As an investment banking analyst, you're preparing a sensitivity analysis for a manufacturing company valuation. The base case DCF yields an enterprise value of $800 million. You've been asked to create a comprehensive sensitivity analysis to support a fairness opinion for a potential sale at $900 million. Develop a detailed plan for this sensitivity analysis, including which variables to test, appropriate ranges, presentation formats, and how you would interpret the results to assess the fairness of the offer.",
          hint: "Consider both financial and operational variables specific to manufacturing companies, and how to structure the analysis to provide meaningful insights about valuation fairness.",
          solution: "Comprehensive Sensitivity Analysis Plan for Manufacturing Company Valuation\n\n1. Key Variables Selection and Ranges\n\n   A. Valuation Parameters:\n      - WACC: 8.0% to 12.0% in 0.5% increments (base case likely 10%)\n      - Terminal growth rate: 1.0% to 3.0% in 0.25% increments (base case likely 2%)\n      - Terminal EBITDA multiple: 6.0x to 9.0x in 0.5x increments (alternative approach)\n\n   B. Operational Metrics:\n      - Revenue growth: Base case ±3% in 1% increments\n      - EBITDA margin: Base case ±2% in 0.5% increments\n      - Working capital as % of revenue: Base case ±1% in 0.25% increments\n\n   C. Manufacturing-Specific Variables:\n      - CapEx as % of revenue: Base case ±2% in 0.5% increments\n      - Capacity utilization: Base case ±10% in 2.5% increments\n      - Raw material costs: Base case ±15% in 5% increments\n\n2. Analysis Structure and Presentation\n\n   A. One-Variable Sensitivity Tables:\n      - Create individual tables for each key variable\n      - Show enterprise value and percentage change from base case\n      - Highlight threshold values where EV crosses $900M offer price\n      - Include implied multiples (EV/EBITDA, EV/Revenue) at each value\n\n   B. Two-Variable Sensitivity Matrices:\n      - Primary matrix: WACC vs. Terminal growth rate\n      - Secondary matrices:\n        * Revenue growth vs. EBITDA margin\n        * CapEx vs. Capacity utilization\n      - Use conditional formatting with color gradients\n      - Highlight cells where EV exceeds $900M offer price\n\n   C. Tornado Chart Analysis:\n      - Show impact of ±10% change in each variable\n      - Rank variables by magnitude of impact on enterprise value\n      - Calculate percentage change in EV for each variable\n      - Use different colors for positive and negative impacts\n\n   D. Scenario Analysis:\n      - Base Case: Current assumptions ($800M enterprise value)\n      - Upside Case: Higher growth, improved margins, optimized capacity\n      - Downside Case: Lower growth, margin pressure, higher capital intensity\n      - Industry Downturn Case: Recession-level performance\n      - Recovery Case: Post-downturn recovery trajectory\n      - Present complete set of assumptions and resulting valuations\n\n   E. Probability-Weighted Analysis:\n      - Assign subjective probabilities to each scenario\n      - Calculate probability-weighted enterprise value\n      - Show probability required for weighted value to equal offer price\n\n3. Fairness Assessment Framework\n\n   A. Quantitative Metrics:\n      - Percentage of sensitivity outcomes above/below offer price\n      - Premium to base case valuation (12.5% = $900M vs. $800M)\n      - Implied multiples vs. trading comparables and precedent transactions\n      - Probability-weighted valuation vs. offer price\n\n   B. Qualitative Considerations:\n      - Cyclicality of manufacturing sector and current position in cycle\n      - Company-specific risks and opportunities not captured in model\n      - Strategic value to potential acquirer (synergies, market access)\n      - Certainty of cash offer vs. execution risks of standalone plan\n\n4. Interpretation and Recommendations\n\n   A. Valuation Range Determination:\n      - Establish reasonable valuation range based on sensitivity analysis\n      - Identify most likely scenarios and their implied values\n      - Position $900M offer within this range (percentile ranking)\n\n   B. Key Value Driver Analysis:\n      - Identify variables with greatest impact on valuation\n      - Assess management's ability to influence these drivers\n      - Evaluate historical performance on critical metrics\n\n   C. Risk Assessment:\n      - Quantify downside scenarios and their likelihood\n      - Identify specific risks with greatest valuation impact\n      - Compare risk-adjusted standalone value to certain offer value\n\n   D. Fairness Opinion Support:\n      - Synthesize quantitative and qualitative factors\n      - Develop clear narrative around valuation range and offer price\n      - Prepare supporting exhibits highlighting key sensitivity analyses\n      - Articulate specific conditions under which offer would be considered fair",
          explanation: "This question tests your ability to design a comprehensive sensitivity analysis for a specific industry context and apply it to a practical valuation problem. In investment banking, sensitivity analysis is not just a mechanical exercise but a critical tool for developing and supporting valuation opinions. The solution demonstrates how to select relevant variables for a manufacturing company, determine appropriate ranges, structure the analysis in multiple complementary formats, and interpret the results in the context of a fairness opinion. The approach balances quantitative rigor with qualitative judgment, recognizing that fairness is ultimately a matter of reasoned opinion rather than mathematical certainty. The analysis framework is designed to provide a defensible basis for that opinion by thoroughly exploring the range of reasonable valuation outcomes and positioning the offer price within that context.",
          keyTakeaways: [
            "Effective sensitivity analysis must be tailored to industry-specific value drivers and risks",
            "Manufacturing companies require particular focus on capacity utilization, capital expenditure, and raw material costs",
            "A comprehensive approach combines one-variable tables, two-variable matrices, tornado charts, and scenario analysis",
            "Fairness assessment requires both quantitative metrics and qualitative considerations",
            "The percentage of sensitivity outcomes above/below the offer price provides a useful quantitative fairness metric",
            "Probability-weighted analysis helps balance optimistic and pessimistic scenarios in the final assessment",
            "Sensitivity analysis for fairness opinions should explicitly highlight the conditions under which the offer would be considered fair"
          ]
        }}
        difficulty="hard"
      />
    </div>
  );
};

export default sensitivityAnalysisContent;
