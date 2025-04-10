import React from 'react';
import VisualAid from '../../components/VisualAid';
import FormulaDisplay from '../../components/FormulaDisplay';
import ComparisonTable from '../../components/ComparisonTable';
import ProcessFlow from '../../components/ProcessFlow';
import KeyConcept from '../../components/KeyConcept';
import CaseStudy from '../../components/CaseStudy';
import PracticeQuestion from '../../components/PracticeQuestion';

const RevenueRecognitionContent = () => (
  <div className="content-container">
    <KeyConcept
      title="Revenue Recognition"
      concept="Revenue recognition is a fundamental accounting principle dictating when and how revenue should be recorded on the income statement, ensuring it reflects the transfer of goods or services to customers."
      explanation="Under ASC 606 and IFRS 15, revenue recognition follows a five-step model: 1) Identify the contract(s) with a customer. 2) Identify the performance obligations in the contract. 3) Determine the transaction price. 4) Allocate the transaction price to the performance obligations. 5) Recognize revenue when (or as) the entity satisfies a performance obligation. This ensures revenue is recognized in a way that depicts the transfer of promised goods or services to customers in an amount that reflects the consideration to which the entity expects to be entitled."
      importance="Proper revenue recognition is critical for accurate financial reporting, comparability, and assessing a company's true economic performance. Misapplication can lead to earnings manipulation and mislead investors. Investment bankers must understand these rules for accurate modeling, valuation, and due diligence."
      examples={[
        "Recognizing software subscription revenue over the contract term",
        "Recognizing revenue for a construction project based on percentage of completion",
        "Allocating transaction price in bundled sales (e.g., hardware + service)",
        "Accounting for variable consideration (rebates, discounts)",
        "Deferred revenue for upfront payments before service delivery"
      ]}
    />

    <VisualAid title="The 5-Step Revenue Recognition Model" type="concept">
      <div className="framework-name">
        <div className="framework-item mb-4">
          <h4>Step 1: Identify Contract</h4>
          <p>Agreement between two or more parties creating enforceable rights and obligations.</p>
        </div>
        <div className="framework-item mb-4">
          <h4>Step 2: Identify Performance Obligations</h4>
          <p>Distinct promises to transfer goods or services to the customer.</p>
        </div>
        <div className="framework-item mb-4">
          <h4>Step 3: Determine Transaction Price</h4>
          <p>Amount of consideration expected in exchange for goods/services.</p>
        </div>
        <div className="framework-item mb-4">
          <h4>Step 4: Allocate Price</h4>
          <p>Allocate transaction price to each performance obligation based on standalone selling prices.</p>
        </div>
        <div className="framework-item mb-4">
          <h4>Step 5: Recognize Revenue</h4>
          <p>Recognize revenue when (or as) performance obligations are satisfied.</p>
        </div>
      </div>
    </VisualAid>

    <VisualAid title="Point-in-Time vs. Over-Time Recognition" type="concept">
      <div className="framework-name">
        <div className="framework-item mb-4">
          <h4>Over Time Recognition</h4>
          <p>Recognize revenue gradually if: customer simultaneously receives/consumes benefits, entity's performance creates/enhances an asset the customer controls, or performance doesn't create an asset with alternative use and entity has right to payment.</p>
          <p>Examples: Subscription services, long-term construction contracts.</p>
        </div>
        <div className="framework-item mb-4">
          <h4>Point in Time Recognition</h4>
          <p>Recognize revenue when control transfers if criteria for over-time recognition are not met. Indicators of control transfer include: right to payment, legal title, physical possession, risks/rewards of ownership, customer acceptance.</p>
          <p>Examples: Retail sales, product shipments.</p>
        </div>
      </div>
    </VisualAid>

    <VisualAid title="Deferred Revenue Mechanics" type="concept">
      <div className="framework-name">
        <div className="framework-item mb-4">
          <h4>Upfront Payment Received</h4>
          <p>Company receives cash before delivering goods/services.</p>
          <p>Journal Entry: Dr. Cash, Cr. Deferred Revenue (Liability)</p>
        </div>
        <div className="framework-item mb-4">
          <h4>Service Delivered / Obligation Satisfied</h4>
          <p>Company fulfills its promise over time or at a point in time.</p>
          <p>Journal Entry: Dr. Deferred Revenue, Cr. Revenue</p>
        </div>
        <div className="framework-item mb-4">
          <h4>Balance Sheet Impact</h4>
          <p>Deferred Revenue represents an obligation to deliver future goods/services.</p>
        </div>
      </div>
    </VisualAid>

    <FormulaDisplay
      title="Transaction Price Allocation"
      formula="Allocate based on Relative Standalone Selling Prices"
      variables={[
        { symbol: "Standalone Selling Price (SSP)", description: "Price at which an entity would sell a promised good or service separately to a customer." }
      ]}
      example="Bundle price $120. Product A SSP $100, Product B SSP $50. Total SSP $150. Allocate: A = $120 * (100/150) = $80; B = $120 * (50/150) = $40."
      notes="Ensures revenue is allocated proportionally to the value delivered in each performance obligation."
    />

    <FormulaDisplay
      title="Percentage-of-Completion (Input Method)"
      formula="Revenue = (Costs Incurred / Total Estimated Costs) × Total Contract Revenue"
      variables={[
        { symbol: "Costs Incurred", description: "Cumulative costs to date" },
        { symbol: "Total Estimated Costs", description: "Total expected costs for the project" },
        { symbol: "Total Contract Revenue", description: "Total price of the contract" }
      ]}
      example="($15M / $40M) × $50M = $18.75M revenue recognized in Year 1."
      notes="Common method for recognizing revenue over time for long-term projects based on effort expended."
    />

    <ProcessFlow
      title="Applying the 5-Step Revenue Recognition Model"
      steps={[
        {
          title: "Step 1: Identify Contract",
          description: "Confirm existence of a valid contract with commercial substance.",
          details: "Assess criteria like approval, identifiable rights, payment terms, probability of collection."
        },
        {
          title: "Step 2: Identify Performance Obligations",
          description: "Determine distinct goods or services promised.",
          details: "A good/service is distinct if customer can benefit from it on its own or with other resources, and it's separately identifiable from other promises."
        },
        {
          title: "Step 3: Determine Transaction Price",
          description: "Calculate expected consideration, considering variable amounts, financing components, non-cash consideration, and payments to customers.",
          details: "Estimate variable consideration reliably."
        },
        {
          title: "Step 4: Allocate Price",
          description: "Allocate transaction price to each distinct performance obligation.",
          details: "Use relative standalone selling prices; estimate if not directly observable."
        },
        {
          title: "Step 5: Recognize Revenue",
          description: "Recognize revenue when (or as) performance obligations are satisfied.",
          details: "Determine if recognition should be over time or at a point in time based on control transfer."
        }
      ]}
      description="This systematic process ensures revenue is recognized appropriately under ASC 606/IFRS 15."
    />

    <CaseStudy
      title="Revenue Recognition for a SaaS Company"
      scenario="A SaaS company signs a 2-year contract for $24,000, paid upfront. The contract includes software access (recognized over time) and a one-time setup service (recognized upon completion). Standalone price for software is $1,000/month, setup is $2,000."
      questions={[
        "Identify performance obligations.",
        "Allocate the transaction price.",
        "How is revenue recognized over the contract term?"
      ]}
      analysis={
        <div>
          <p><strong>Obligations:</strong> 1) Software access (24 months), 2) Setup service.</p>
          <p><strong>Allocation:</strong> Total SSP = ($1,000 * 24) + $2,000 = $26,000. Allocate $24,000 price: Software = $24k * (24k/26k) ≈ $22,154; Setup = $24k * (2k/26k) ≈ $1,846.</p>
          <p><strong>Recognition:</strong> Recognize $1,846 when setup is done. Recognize $22,154 / 24 ≈ $923 per month over 2 years for software access.</p>
        </div>
      }
      conclusion="Proper allocation and timing are crucial for SaaS revenue recognition, impacting deferred revenue and reported earnings."
      takeaways={[
        "Identify all distinct performance obligations.",
        "Allocate price based on relative standalone values.",
        "Recognize revenue as obligations are satisfied.",
        "Deferred revenue is common in subscription models.",
        "Understand impact on financial modeling and valuation."
      ]}
    />

    <PracticeQuestion
      question={{
        question: "A company receives a $12,000 upfront payment for a 1-year service contract starting Jan 1. How much revenue is recognized by June 30?",
        hint: "Consider over-time recognition.",
        solution: "Revenue is recognized evenly over the 12-month term. By June 30 (6 months), revenue recognized = ($12,000 / 12 months) * 6 months = $6,000.",
        explanation: "For services provided over time, revenue is recognized proportionally.",
        keyTakeaways: [
          "Match revenue recognition with service delivery.",
          "Upfront payments create deferred revenue.",
          "Deferred revenue is recognized as revenue over time.",
          "Crucial for subscription and service businesses.",
          "Impacts income statement and balance sheet."
        ]
      }}
      difficulty="medium"
    />

    <PracticeQuestion
      question={{
        question: "Why is understanding revenue recognition important for investment banking analysts?",
        hint: "Think about analysis, valuation, and due diligence.",
        solution: "It's critical for accurate financial modeling, comparing companies (adjusting for different policies), assessing earnings quality, identifying red flags (aggressive recognition), and performing due diligence in M&A.",
        explanation: "Revenue is a key driver of value; its proper recognition is fundamental to analysis.",
        keyTakeaways: [
          "Revenue quality matters as much as quantity.",
          "Different policies impact comparability.",
          "Aggressive recognition is a major red flag.",
          "Essential for accurate forecasting and valuation.",
          "Key topic in due diligence and interviews."
        ]
      }}
      difficulty="medium"
    />
  </div>
);

export default RevenueRecognitionContent;
