import React from 'react';
import VisualAid from '../../components/VisualAid';
import FormulaDisplay from '../../components/FormulaDisplay';
import ComparisonTable from '../../components/ComparisonTable';
import ProcessFlow from '../../components/ProcessFlow';
import ChartDisplay from '../../components/ChartDisplay';
import KeyConcept from '../../components/KeyConcept';
import CaseStudy from '../../components/CaseStudy';
import PracticeQuestion from '../../components/PracticeQuestion';

const timeValueOfMoneyContent = () => {
  return (
    <div className="content-container">
      <KeyConcept
        title="Time Value of Money"
        concept="The Time Value of Money (TVM) is the principle that a sum of money is worth more now than the same sum will be at a future date due to its potential earning capacity."
        explanation="The time value of money is a fundamental financial concept based on the premise that money available today is worth more than the same amount in the future because of its potential to earn returns through investment. This concept forms the foundation for discounting future cash flows to present value in valuation methodologies. TVM accounts for the opportunity cost of capital—the return that could be earned by investing money elsewhere at a similar risk level. The concept is implemented through various calculations including present value, future value, net present value, and internal rate of return."
        importance="Understanding the time value of money is absolutely essential in investment banking as it underpins virtually all valuation methodologies. When performing Discounted Cash Flow (DCF) analysis, you're applying TVM principles to determine the present value of projected future cash flows. When evaluating investment opportunities or acquisition targets, TVM helps determine whether expected returns exceed the cost of capital. During LBO analysis, TVM concepts are used to calculate investor returns based on entry and exit values. In client presentations, you'll need to explain how the timing of cash flows affects valuation. Strong understanding of TVM demonstrates your grasp of finance fundamentals, which is highly valued in investment banking interviews and on the job."
        examples={[
          "Discounting future cash flows to present value in a DCF valuation",
          "Calculating the future value of investments with compound interest",
          "Determining loan payments that equate to a specific present value",
          "Comparing investment alternatives with different cash flow timing"
        ]}
      />
      
      <VisualAid title="Time Value of Money Concepts" type="concept">
        <div className="tvm-concepts">
          <div className="concept-item mb-4">
            <h4>1. Present Value (PV)</h4>
            <p>The current worth of a future sum of money or stream of cash flows given a specified rate of return.</p>
            <ul>
              <li><strong>Single Sum:</strong> PV = FV / (1 + r)^n</li>
              <li><strong>Annuity:</strong> PV = PMT × [1 - 1/(1 + r)^n] / r</li>
              <li><strong>Growing Annuity:</strong> PV = PMT / (r - g) × [1 - ((1 + g)/(1 + r))^n]</li>
              <li><strong>Perpetuity:</strong> PV = PMT / r</li>
              <li><strong>Growing Perpetuity:</strong> PV = PMT / (r - g)</li>
              <li>Used in DCF valuation to determine the current value of future cash flows</li>
            </ul>
          </div>
          
          <div className="concept-item mb-4">
            <h4>2. Future Value (FV)</h4>
            <p>The value of an asset or cash at a specified date in the future based on an assumed growth rate.</p>
            <ul>
              <li><strong>Single Sum:</strong> FV = PV × (1 + r)^n</li>
              <li><strong>Annuity:</strong> FV = PMT × [(1 + r)^n - 1] / r</li>
              <li><strong>Growing Annuity:</strong> More complex formula involving summation</li>
              <li>Used to project investment growth or future liability values</li>
              <li>Demonstrates the power of compound interest over time</li>
            </ul>
          </div>
          
          <div className="concept-item mb-4">
            <h4>3. Net Present Value (NPV)</h4>
            <p>The difference between the present value of cash inflows and the present value of cash outflows over a period of time.</p>
            <ul>
              <li>NPV = Initial Investment + Σ [CF_t / (1 + r)^t]</li>
              <li>Positive NPV indicates value creation; negative NPV indicates value destruction</li>
              <li>Used to evaluate investment opportunities and capital budgeting decisions</li>
              <li>Accounts for both the magnitude and timing of cash flows</li>
            </ul>
          </div>
          
          <div className="concept-item mb-4">
            <h4>4. Internal Rate of Return (IRR)</h4>
            <p>The discount rate that makes the net present value of all cash flows from a particular project equal to zero.</p>
            <ul>
              <li>0 = Initial Investment + Σ [CF_t / (1 + IRR)^t]</li>
              <li>Represents the annualized effective compounded return rate</li>
              <li>Used to evaluate and compare investment opportunities</li>
              <li>Higher IRR generally indicates a more desirable investment</li>
              <li>Has limitations when cash flows change sign multiple times</li>
            </ul>
          </div>
          
          <div className="concept-item">
            <h4>5. Discount Rate Determination</h4>
            <p>The rate used to discount future cash flows to present value, reflecting risk and opportunity cost.</p>
            <ul>
              <li><strong>Risk-Free Rate:</strong> Typically based on government bond yields</li>
              <li><strong>Risk Premium:</strong> Additional return required for taking on risk</li>
              <li><strong>WACC:</strong> Weighted Average Cost of Capital for a firm</li>
              <li><strong>CAPM:</strong> Capital Asset Pricing Model for equity returns</li>
              <li>Higher discount rates result in lower present values</li>
              <li>Proper discount rate selection is critical for accurate valuation</li>
            </ul>
          </div>
        </div>
      </VisualAid>
      
      <FormulaDisplay
        title="Present Value of a Single Cash Flow"
        formula="PV = FV / (1 + r)^n"
        variables={[
          { symbol: "PV", description: "Present Value" },
          { symbol: "FV", description: "Future Value" },
          { symbol: "r", description: "Discount rate (per period)" },
          { symbol: "n", description: "Number of periods" }
        ]}
        example="If you expect to receive $1,000 in 5 years and the appropriate discount rate is 8% per year, the present value would be: PV = $1,000 / (1 + 0.08)^5 = $1,000 / 1.4693 = $680.58. This means that receiving $680.58 today is equivalent to receiving $1,000 in 5 years, assuming an 8% discount rate."
        notes="The present value formula illustrates that money received in the future is worth less than the same amount received today. The discount rate reflects both the time preference for money and the risk associated with waiting to receive the cash flow. Higher discount rates (reflecting higher risk or opportunity cost) result in lower present values. This basic formula is the building block for more complex valuation models like DCF analysis."
      />
      
      <FormulaDisplay
        title="Present Value of an Annuity"
        formula="PV = PMT × [1 - 1/(1 + r)^n] / r"
        variables={[
          { symbol: "PV", description: "Present Value" },
          { symbol: "PMT", description: "Payment per period" },
          { symbol: "r", description: "Discount rate (per period)" },
          { symbol: "n", description: "Number of periods" }
        ]}
        example="If a company is expected to generate $100,000 in free cash flow annually for the next 5 years, and the discount rate is 10%, the present value of this cash flow stream would be: PV = $100,000 × [1 - 1/(1 + 0.10)^5] / 0.10 = $100,000 × [1 - 0.6209] / 0.10 = $100,000 × 0.3791 / 0.10 = $379,100. This represents the value today of receiving $100,000 annually for 5 years."
        notes="The annuity formula is particularly useful in valuation when projecting a series of relatively stable cash flows. It's more efficient than discounting each cash flow individually. In DCF analysis, this formula might be used for the explicit forecast period before applying a terminal value. The formula assumes cash flows occur at the end of each period (ordinary annuity). For cash flows at the beginning of each period (annuity due), multiply the result by (1 + r)."
      />
      
      <FormulaDisplay
        title="Present Value of a Growing Perpetuity (Gordon Growth Model)"
        formula="PV = CF₁ / (r - g)"
        variables={[
          { symbol: "PV", description: "Present Value" },
          { symbol: "CF₁", description: "Cash flow in the first period" },
          { symbol: "r", description: "Discount rate" },
          { symbol: "g", description: "Growth rate (must be less than r)" }
        ]}
        example="If a company is expected to generate $10 million in free cash flow next year, growing at 3% annually forever, and the appropriate discount rate is 9%, the present value would be: PV = $10M / (0.09 - 0.03) = $10M / 0.06 = $166.67M. This formula is commonly used to calculate terminal value in DCF analysis."
        notes="The Gordon Growth Model is widely used for terminal value calculations in DCF analysis, representing the value of all cash flows beyond the explicit forecast period. The formula is mathematically valid only when g < r (the growth rate must be less than the discount rate). The difference (r - g) represents the 'net discount rate' after accounting for growth. The formula is sensitive to small changes in inputs, particularly when r and g are close to each other. In practice, terminal growth rates are typically set at or below long-term GDP growth rates (usually 2-3%)."
      />
      
      <ComparisonTable
        title="Time Value of Money Applications in Investment Banking"
        headers={["Application", "TVM Concept Used", "Implementation", "Key Considerations"]}
        rows={[
          [
            "DCF Valuation",
            "Present Value, Growing Perpetuity",
            "Discount projected cash flows to present value; Apply Gordon Growth Model for terminal value",
            "Appropriate discount rate selection; Realistic growth assumptions; Explicit forecast period length; Terminal value sensitivity"
          ],
          [
            "LBO Analysis",
            "IRR, Multiple of Money",
            "Calculate returns based on entry price, exit value, and interim cash flows; Determine maximum sustainable debt load",
            "Exit timing impact on returns; Debt paydown schedule; Cash flow available for debt service; Sensitivity to exit multiple"
          ],
          [
            "M&A Accretion/Dilution",
            "Present Value, EPS Impact",
            "Compare present value of synergies to acquisition premium; Project combined EPS impact over time",
            "Synergy realization timeline; Financing structure; Integration costs; Pro forma capital structure"
          ],
          [
            "Capital Structure Advisory",
            "NPV, WACC Optimization",
            "Evaluate impact of different capital structures on firm value; Balance tax shield benefits against financial distress costs",
            "Tax shield value; Credit rating implications; Financial flexibility; Industry-specific considerations"
          ],
          [
            "Project Finance",
            "NPV, IRR, Payback Period",
            "Evaluate project viability based on discounted cash flows; Structure financing to match project cash flow profile",
            "Project-specific risks; Construction period financing; Operating period cash flow stability; Refinancing considerations"
          ]
        ]}
        description="Time value of money concepts are applied across virtually all investment banking activities, forming the foundation for valuation, transaction analysis, and strategic advisory. Understanding these applications and their nuances is essential for effective financial analysis and client advice."
      />
      
      <ProcessFlow
        title="Applying Time Value of Money in DCF Valuation"
        steps={[
          {
            title: "Project Future Cash Flows",
            description: "Forecast the company's free cash flows for the explicit forecast period.",
            details: "Develop detailed financial projections for 5-10 years. Project revenue growth based on market analysis and company strategy. Forecast margins considering industry trends and company-specific factors. Model capital expenditures and depreciation. Project changes in working capital requirements. Calculate unlevered free cash flow for each forecast year."
          },
          {
            title: "Determine the Appropriate Discount Rate",
            description: "Calculate the Weighted Average Cost of Capital (WACC) to reflect the company's risk profile.",
            details: "Estimate the cost of equity using CAPM (Risk-free rate + Beta × Equity risk premium). Calculate the after-tax cost of debt based on the company's credit profile. Determine the target capital structure (weights of debt and equity). Compute WACC = (Weight of Equity × Cost of Equity) + (Weight of Debt × After-tax Cost of Debt). Consider adjustments for company-specific or country-specific risk factors."
          },
          {
            title: "Calculate Present Value of Explicit Forecast Period",
            description: "Discount each year's projected cash flow to present value.",
            details: "Apply the present value formula to each year's projected free cash flow: PV = CF_t / (1 + WACC)^t. Sum the present values to determine the cumulative value of the explicit forecast period. Consider mid-year convention if appropriate (discounting as if cash flows occur mid-year)."
          },
          {
            title: "Calculate Terminal Value",
            description: "Estimate the value of all cash flows beyond the explicit forecast period.",
            details: "Apply the Gordon Growth Model: Terminal Value = Final Year FCF × (1 + g) / (WACC - g). Alternatively, use the exit multiple approach: Terminal Value = Final Year EBITDA × Selected Multiple. Ensure the terminal growth rate is reasonable (typically at or below long-term GDP growth). Discount the terminal value to present value: PV of TV = TV / (1 + WACC)^n."
          },
          {
            title: "Calculate Enterprise Value",
            description: "Sum the present values to determine the company's total enterprise value.",
            details: "Enterprise Value = PV of Explicit Forecast Period + PV of Terminal Value. Perform sensitivity analysis on key inputs (WACC, terminal growth rate, exit multiple). Consider scenario analysis for different strategic outcomes. Compare results to other valuation methodologies (comparable companies, precedent transactions)."
          },
          {
            title: "Derive Equity Value",
            description: "Adjust enterprise value for non-operating items to arrive at equity value.",
            details: "Subtract net debt (debt minus cash) from enterprise value. Adjust for other non-operating items (pension liabilities, non-controlling interests, etc.). Account for off-balance sheet items if material. Divide by fully diluted shares outstanding to calculate per share value."
          },
          {
            title: "Interpret Results and Develop Recommendations",
            description: "Analyze the valuation results to inform investment decisions or strategic advice.",
            details: "Compare the DCF value to current market value (if publicly traded). Identify key value drivers and sensitivities. Develop strategic recommendations based on valuation insights. Prepare clear presentation of methodology and results for clients. Address potential questions or challenges to the valuation approach."
          }
        ]}
        description="This process demonstrates how time value of money principles are applied in practice to value a company using the Discounted Cash Flow methodology. Each step involves careful consideration of financial theory and practical implementation to arrive at a defensible valuation."
      />
      
      <ChartDisplay
        title="Impact of Discount Rate on Present Value"
        chartType="line"
        imageUrl="/images/discount-rate-impact.png"
        description="This chart illustrates how the present value of $1,000 received in various future years decreases as the discount rate increases. The steeper curves for longer time periods demonstrate that the impact of the discount rate is magnified over time, highlighting the importance of appropriate discount rate selection in long-term valuation."
      />
      
      <CaseStudy
        title="Time Value of Money in M&A Valuation"
        scenario="You're an investment banking analyst working on a potential acquisition of TechTarget, a software company with strong growth prospects but currently negative free cash flow. Your client, a strategic buyer, is considering paying $500 million for TechTarget, representing a 25% premium to its current market capitalization. TechTarget is projected to generate negative free cash flow for the next two years as it invests heavily in growth, but then positive and rapidly growing cash flows thereafter. Your task is to determine whether the acquisition price is justified based on the time value of money principles applied to projected future cash flows."
        questions={[
          "How would you approach valuing a company with near-term negative cash flows?",
          "What discount rate would be appropriate for this valuation?",
          "How would you determine the terminal value for a high-growth technology company?",
          "How would you incorporate the strategic value of the acquisition beyond the standalone cash flows?"
        ]}
        analysis={
          <div>
            <p><strong>Valuation Approach for Near-Term Negative Cash Flows:</strong></p>
            <p>For a company with near-term negative cash flows but strong future prospects, a DCF approach remains appropriate but requires careful consideration:</p>
            <ul>
              <li>Develop detailed projections for an extended explicit forecast period (e.g., 7-10 years instead of the typical 5)</li>
              <li>Model the transition from negative to positive cash flow, capturing the inflection point</li>
              <li>Ensure the model reflects decreasing growth rates as the company matures</li>
              <li>Consider using a multi-stage DCF with different growth assumptions for different periods</li>
              <li>Validate projections against industry benchmarks and comparable company trajectories</li>
            </ul>
            
            <p><strong>Appropriate Discount Rate Determination:</strong></p>
            <p>For a high-growth software company like TechTarget, the discount rate should reflect its risk profile:</p>
            <ul>
              <li>Calculate WACC using comparable public software companies' betas</li>
              <li>Consider applying a small company premium (1-3%) if TechTarget is smaller than peers</li>
              <li>Adjust for company-specific risks such as customer concentration or technology obsolescence</li>
              <li>For software companies, typical WACCs range from 9-14% depending on size, growth stage, and business model</li>
              <li>Consider using a higher discount rate for the early negative cash flow years to reflect their greater uncertainty</li>
            </ul>
            
            <p><strong>Terminal Value Determination:</strong></p>
            <p>For a high-growth technology company, terminal value calculation requires careful consideration:</p>
            <ul>
              <li>Use the Gordon Growth Model with a conservative long-term growth rate (e.g., 3-4%)</li>
              <li>Alternatively, apply an exit multiple based on comparable mature software companies (e.g., EV/EBITDA of 12-15x)</li>
              <li>Ensure the terminal year represents a "normalized" state with sustainable margins and growth</li>
              <li>Perform sensitivity analysis on both approaches to establish a valuation range</li>
              <li>Consider the company's competitive position and barriers to entry when assessing long-term sustainability</li>
            </ul>
            
            <p><strong>Incorporating Strategic Value:</strong></p>
            <p>Beyond standalone cash flows, strategic value can be incorporated through:</p>
            <ul>
              <li>Modeling revenue synergies (cross-selling opportunities, expanded market access)</li>
              <li>Quantifying cost synergies (operational efficiencies, elimination of redundancies)</li>
              <li>Assessing technology or talent acquisition value</li>
              <li>Considering defensive value (preventing a competitor from acquiring the target)</li>
              <li>Evaluating time-to-market advantages versus internal development</li>
              <li>Discounting synergy cash flows at a higher rate to reflect execution risk</li>
            </ul>
          </div>
        }
        conclusion="Based on the time value of money analysis, the $500 million acquisition price could be justified despite TechTarget's near-term negative cash flows. The DCF valuation suggests that the present value of TechTarget's future cash flows, including both the explicit forecast period and terminal value, exceeds the proposed acquisition price when strategic synergies are included. The analysis highlights the importance of looking beyond short-term financial performance and considering the long-term value creation potential. However, the valuation is sensitive to assumptions about the timing and magnitude of the cash flow inflection point, long-term growth rates, and synergy realization. Given these sensitivities, the acquisition should proceed only if the acquirer has high confidence in its ability to execute the growth strategy and realize projected synergies."
        takeaways={[
          "Time value of money principles remain applicable even for companies with near-term negative cash flows",
          "Extended forecast periods may be necessary to capture the full value creation potential of high-growth companies",
          "Terminal value typically represents a significant portion of total value for growth companies, requiring careful consideration of long-term assumptions",
          "Strategic value and synergies can materially impact acquisition valuations but should be discounted appropriately for execution risk",
          "Sensitivity analysis is essential when valuing companies with uncertain cash flow trajectories"
        ]}
      />
      
      <PracticeQuestion
        question={{
          question: "A company is expected to generate the following free cash flows: Year 1: -$10M, Year 2: $5M, Year 3: $15M, Year 4: $25M, Year 5: $30M. After Year 5, cash flows are expected to grow at 3% perpetually. If the appropriate discount rate is 12%, calculate the present value of these cash flows.",
          solution: "Step 1: Calculate the present value of each explicit forecast year's cash flow\n\nPV Year 1 = -$10M / (1 + 0.12)^1 = -$10M / 1.12 = -$8.93M\nPV Year 2 = $5M / (1 + 0.12)^2 = $5M / 1.2544 = $3.99M\nPV Year 3 = $15M / (1 + 0.12)^3 = $15M / 1.4049 = $10.68M\nPV Year 4 = $25M / (1 + 0.12)^4 = $25M / 1.5735 = $15.89M\nPV Year 5 = $30M / (1 + 0.12)^5 = $30M / 1.7623 = $17.02M\n\nSum of explicit forecast period PVs = -$8.93M + $3.99M + $10.68M + $15.89M + $17.02M = $38.65M\n\nStep 2: Calculate the terminal value using the Gordon Growth Model\n\nTerminal Value = Year 5 FCF × (1 + g) / (r - g)\nTerminal Value = $30M × (1 + 0.03) / (0.12 - 0.03)\nTerminal Value = $30.9M / 0.09 = $343.33M\n\nStep 3: Calculate the present value of the terminal value\n\nPV of Terminal Value = $343.33M / (1 + 0.12)^5 = $343.33M / 1.7623 = $194.82M\n\nStep 4: Calculate the total present value\n\nTotal PV = Sum of explicit forecast period PVs + PV of Terminal Value\nTotal PV = $38.65M + $194.82M = $233.47M",
          explanation: "This question tests your ability to apply time value of money principles in a DCF valuation context. The solution demonstrates how to handle negative cash flows, discount each year's cash flow appropriately, and calculate terminal value using the Gordon Growth Model. Note that the terminal value ($343.33M) represents a significant portion of the total value ($233.47M in present value terms), which is typical in DCF valuations. This highlights the importance of carefully considering terminal value assumptions. The calculation also shows how the present value impact of near-term cash flows (even negative ones) is greater than more distant cash flows due to the time value of money.",
          keyTakeaways: [
            "DCF valuation can accommodate negative cash flows in early years if followed by positive cash flows later",
            "Each cash flow must be discounted based on its timing using the appropriate discount rate",
            "Terminal value typically represents a large portion of total value in DCF analysis",
            "The Gordon Growth Model requires that the growth rate be less than the discount rate",
            "Time value of money principles show that distant cash flows contribute less to present value than near-term cash flows"
          ]
        }}
        difficulty="medium"
      />
      
      <PracticeQuestion
        question={{
          question: "As an investment banking analyst, you're advising a client on two potential acquisition targets. Both targets require an initial investment of $100 million and are expected to generate the following cash flows (in millions): Target A: Year 1: $20, Year 2: $30, Year 3: $40, Year 4: $50, Year 5: $60. Target B: Year 1: $50, Year 2: $45, Year 3: $40, Year 4: $35, Year 5: $30. If your client's cost of capital is 10%, which target would you recommend based on NPV and IRR, and why might these metrics lead to different conclusions?",
          hint: "Consider how the timing of cash flows affects NPV and IRR differently.",
          solution: "Step 1: Calculate the NPV for each target\n\nTarget A NPV:\nNPV = -$100M + $20M/(1.10)¹ + $30M/(1.10)² + $40M/(1.10)³ + $50M/(1.10)⁴ + $60M/(1.10)⁵\nNPV = -$100M + $18.18M + $24.79M + $30.05M + $34.15M + $37.25M\nNPV = -$100M + $144.42M = $44.42M\n\nTarget B NPV:\nNPV = -$100M + $50M/(1.10)¹ + $45M/(1.10)² + $40M/(1.10)³ + $35M/(1.10)⁴ + $30M/(1.10)⁵\nNPV = -$100M + $45.45M + $37.19M + $30.05M + $23.90M + $18.62M\nNPV = -$100M + $155.21M = $55.21M\n\nStep 2: Calculate the IRR for each target\n\nTarget A IRR is the rate that makes:\n-$100M + $20M/(1+IRR)¹ + $30M/(1+IRR)² + $40M/(1+IRR)³ + $50M/(1+IRR)⁴ + $60M/(1+IRR)⁵ = 0\n\nUsing financial calculator or Excel: Target A IRR = 24.5%\n\nTarget B IRR is the rate that makes:\n-$100M + $50M/(1+IRR)¹ + $45M/(1+IRR)² + $40M/(1+IRR)³ + $35M/(1+IRR)⁴ + $30M/(1+IRR)⁵ = 0\n\nUsing financial calculator or Excel: Target B IRR = 30.0%\n\nStep 3: Compare and analyze the results\n\nTarget A: NPV = $44.42M, IRR = 24.5%\nTarget B: NPV = $55.21M, IRR = 30.0%\n\nBased on both NPV and IRR, Target B is superior. It has a higher NPV ($55.21M vs. $44.42M) and a higher IRR (30.0% vs. 24.5%).\n\nHowever, it's worth noting why these metrics might sometimes lead to different conclusions:\n\n1. Cash Flow Timing: Target B has larger cash flows in earlier years, while Target A has larger cash flows in later years. IRR tends to favor investments with earlier cash flows because it implicitly assumes reinvestment at the IRR rate. NPV uses the cost of capital as the reinvestment rate, which is typically more conservative.\n\n2. Project Scale: If the targets had different initial investment amounts, NPV would measure absolute value creation while IRR would measure percentage returns, potentially leading to different rankings.\n\n3. Non-Conventional Cash Flows: If either project had cash flow sign changes beyond the initial investment (e.g., negative cash flows in later years), IRR might produce multiple solutions or no solution at all.\n\nIn this case, both metrics point to Target B, but the recommendation should also consider strategic fit, risk factors, and potential synergies beyond the quantitative analysis.",
          explanation: "This question tests your understanding of time value of money applications in investment decision-making. In investment banking, you'll frequently need to evaluate and compare investment opportunities using NPV and IRR. The solution demonstrates how to calculate these metrics and interpret the results. While both metrics point to the same conclusion in this case, it's important to understand that NPV and IRR can sometimes lead to different rankings due to their different underlying assumptions. NPV is generally considered the theoretically superior metric because it uses a more realistic reinvestment rate assumption (the cost of capital) and directly measures value creation in absolute terms.",
          keyTakeaways: [
            "NPV measures absolute value creation in currency terms, while IRR measures percentage returns",
            "The timing of cash flows significantly impacts both NPV and IRR calculations",
            "Earlier cash flows are more valuable than later cash flows of the same amount due to the time value of money",
            "IRR implicitly assumes reinvestment at the IRR rate, while NPV assumes reinvestment at the cost of capital",
            "When NPV and IRR lead to different conclusions, NPV is generally the preferred metric for value maximization"
          ]
        }}
        difficulty="hard"
      />
    </div>
  );
};

export default timeValueOfMoneyContent;
