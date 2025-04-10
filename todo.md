# TODO: Investment Banking Prep Website Expansion (Revised for Depth)

## 1. Overall Goal

Expand the Next.js website by adding new, **highly detailed, in-depth, and engaging** sub-module pages for Knowledge Buckets 2 through 8, based on the provided outlines and detailed `.txt` notes. Ensure new pages meet a high standard of quality and comprehensiveness, aiming for **content comparable in depth and length (e.g., ~3000+ words or equivalent detail) to the most thorough existing pages (like `income-statement`)**. New pages must be interactive and maintain strict consistency with the existing UI/UX and coding patterns.

## 2. Core Principles & Requirements

* **Content Depth & Quality:** This is paramount. Each new page MUST be **thorough, comprehensive, and detailed**, going significantly beyond simple definitions. Aim for content depth and length comparable to the existing `content/accounting/income-statement.js` page. Extract *all* relevant details, nuances, examples, and explanations from the `.txt` notes. **Avoid shallow or brief content.** The goal is substantial, educational material (target ~3000+ words or equivalent detail per page).
* **Engagement:** Content should be presented in an engaging manner. Leverage existing interactive components (e.g., `Quiz`, `KeyConcept`, `FormulaDisplay`, `ComparisonTable`, `PracticeQuestion`, `CaseStudy`, `VisualAid`, `ProcessFlow`) creatively to break up text, reinforce learning, and maintain user interest.
* **Content Source:** All content for new pages MUST be derived **solely and exhaustively** from the corresponding `BUCKET [X]_[NAME].txt` files provided by the user. Maximize the use of the provided text.
* **Consistency:** Maintain the exact UI/UX, layout, styling (Tailwind CSS/SCSS), and component usage patterns established in the existing site, particularly mirroring the `income-statement` example. Use the `Layout` and `SubModuleTemplate` components.
* **Structure:** Adhere to the established project structure:
    * Pages: `pages/<bucket-slug>/<sub-module-slug>.js`
    * Content: `content/<bucket-slug>/<sub-module-slug>.js`
    * Reusable Components: `components/`
* **Navigation:** Update all necessary navigation elements (`Sidebar.js`, Bucket landing pages) to include links to the new sub-modules.

## 3. Project Structure Overview

* `pages/`: Contains Next.js page files.
    * `pages/<bucket-slug>/`: Folder for each main knowledge bucket.
        * `pages/<bucket-slug>/<sub-module-slug>.js`: Individual page file for each sub-module. **(New files to be created here)**
    * `pages/<bucket-slug>.js`: Landing page for each bucket, listing sub-modules. **(Files to be updated here)**
* `content/`: Contains the **detailed content** and component structure for each sub-module page.
    * `content/<bucket-slug>/`: Folder for each main knowledge bucket.
        * `content/<bucket-slug>/<sub-module-slug>.js`: Content file corresponding to a sub-module page. **(New files to be created here - focus on depth)**
* `components/`: Contains reusable React components (`Layout.js`, `SubModuleTemplate.js`, `Sidebar.js`, `Quiz.js`, `KeyConcept.js`, etc.). **(Sidebar.js needs updates)**
* `styles/`: Contains global styles (`globals.scss`).

## 4. Detailed Workflow (Per Sub-Module)

Follow these steps iteratively for **each** new sub-module listed in Section 9:

1.  **Create Files:**
    * Create the page file: `pages/<bucket-slug>/<sub-module-slug>.js`
    * Create the content file: `content/<bucket-slug>/<sub-module-slug>.js`
    * *(Use kebab-case for slugs based on the user's provided sub-module titles).*
2.  **Populate Content File (`content/.../*.js`) - EMPHASIZE DEPTH:**
    * Open the relevant `BUCKET [X]_[NAME].txt` file.
    * Locate the section corresponding to the current sub-module.
    * **Extract and Elaborate:** Parse the text content (Concept Overview, Why This Matters, Interview Questions, Practice Problems, Visual Aid Suggestions, Relevance) meticulously. Structure it within the `.js` file, **expanding on the notes where necessary to ensure comprehensive explanations and achieve the desired depth (~3000+ words or equivalent detail).** Flesh out concepts with detailed examples, nuances, and context drawn from the notes.
    * **Use Components Strategically:** Import and use the existing interactive components (`KeyConcept`, `FormulaDisplay`, `ComparisonTable`, `ProcessFlow`, `ChartDisplay`, `VisualAid`, `CaseStudy`, `PracticeQuestion`, `Quiz`) within the content file's exported React component. Use these components not just to present, but to **elaborate and deepen understanding**.
        * Use multiple `<KeyConcept>` blocks for different facets of a topic.
        * Provide detailed explanations within `<VisualAid>` components, not just lists.
        * Expand on `PracticeQuestion` solutions with step-by-step reasoning.
        * Elaborate significantly within `<CaseStudy>` analysis and conclusions.
        * Ensure `Quiz` explanations are thorough.
    * Export a default React functional component containing this **detailed and component-rich** JSX content.

3.  **Populate Page File (`pages/.../*.js`):**
    * Import `React`, `Layout` from `../../components/Layout`, `SubModuleTemplate` from `../../components/SubModuleTemplate`, and the newly created **detailed** content component (e.g., `import ModuleContent from '../../content/<bucket-slug>/<sub-module-slug>';`).
    * Define a `moduleData` object containing:
        * `title`: The user-provided title for the sub-module.
        * `bucket`: The name of the bucket (e.g., "Valuation Principles").
        * `bucketSlug`: The slug for the bucket (e.g., "valuation-principles").
        * `overview`: A brief sentence describing the sub-module (can be adapted from the notes).
        * `content`: `<ModuleContent />` (pass the imported **detailed** content component).
    * Return the `Layout` component wrapping the `SubModuleTemplate` component, passing the `moduleData` object as a prop (ensure `<Head>` includes relevant title/description).
        ```jsx
        // ... imports ...
        import ModuleContent from '../../content/valuation-principles/fundamental-concepts-of-valuation'; // Example import
        import Head from 'next/head';

        export default function SubModuleName() { // e.g., FundamentalConceptsOfValuation
          const moduleData = {
            title: 'The Fundamental Concepts of Valuation', // User-provided title
            bucket: 'Valuation Principles',
            bucketSlug: 'valuation-principles',
            overview: 'Introduces the core ideas, purpose, and fundamental mechanics behind valuing a company in investment banking.', // Adapt from notes
            content: <ModuleContent />, // This component contains the detailed (~3000+ words) content
          };

          return (
            <Layout>
              <Head>
                 <title>{moduleData.title} - {moduleData.bucket} - IB Prep</title>
                 <meta name="description" content={`In-depth guide to ${moduleData.title.toLowerCase()} covering core principles, applications, and interview insights for investment banking.`} />
              </Head>
              <SubModuleTemplate moduleData={moduleData} />
            </Layout>
          );
        }
        ```
4.  **Update Navigation:**
    * **Bucket Landing Page (`pages/<bucket-slug>.js`):** Add a new object representing the sub-module to the `modules` array within the main bucket object definition. Ensure `id` (slug), `title`, and `description` are included.
    * **Sidebar (`components/Sidebar.js`):**
        * Add the new sub-module `{ id: '<sub-module-slug>', title: '<Sub-Module Title>' }` to the correct `case` within the `getModules` function.
        * **Crucially:** Update the `moduleExists` function to return `true` for the newly added sub-module within its specific bucket.
5.  **Review and Verify:**
    * Run the development server (`npm run dev`).
    * Navigate to the new page.
    * Check for:
        * **Content Depth and Accuracy:** Does the content thoroughly cover the topic as outlined in the notes? Is it detailed and comprehensive (~3000+ words target)?
        * Correct rendering and functionality of all components.
        * Engaging presentation.
        * Consistent styling and layout.
        * Correct navigation elements (breadcrumbs, sidebar, bucket page link).
        * No console errors.

## 5. File Naming Conventions

* Use **kebab-case** for all URL slugs and corresponding file/folder names (e.g., `valuation-principles`, `intrinsic-vs-relative-valuation.js`).
* Use **PascalCase** for React component names (e.g., `FundamentalConceptsOfValuation` for the page component function name).

## 6. Content File (`content/.../*.js`) Structure - FOCUS ON DETAIL

* The file should `import React` and any necessary components (`KeyConcept`, `Quiz`, `VisualAid`, etc.).
* It should define and `export default` a single React functional component.
* This component returns JSX that structures the sub-module's content using the imported interactive/display components. **This is where the bulk of the detailed content (~3000+ words) resides.**
* Extract *all* relevant information from the user-provided `.txt` notes, **elaborating and explaining concepts thoroughly** within the JSX structure and component props. Don't just list points; explain them in detail.

```jsx
// Example Structure Emphasis: content/valuation-principles/fundamental-concepts-of-valuation.js
import React from 'react';
import KeyConcept from '../../components/KeyConcept';
import VisualAid from '../../components/VisualAid';
import Quiz from '../../components/Quiz';
import FormulaDisplay from '../../components/FormulaDisplay';
import PracticeQuestion from '../../components/PracticeQuestion';
// ... other necessary component imports

const FundamentalConceptsContent = () => {
  // Define quiz questions based on notes
  const quizQuestions = [
    {
      question: "What is the fundamental goal of valuing a company?",
      options: [
        "To determine its current market capitalization.",
        "To assess if its market value aligns with its intrinsic or implied value.",
        "To calculate its historical earnings growth rate.",
        "To predict its short-term stock price movements."
      ],
      correctAnswer: 1,
      explanation: "The core goal is to determine intrinsic value and compare it to market value to inform investment or advisory decisions, assessing if a company is under, over, or fairly valued."
    },
    {
      question: "Why is valuation important even for public companies with known market caps?",
      options: [
        "Market cap is often inaccurate.",
        "Valuation helps predict future dividends.",
        "Market value may not reflect intrinsic value due to market inefficiencies or sentiment.",
        "It's required by accounting standards."
      ],
      correctAnswer: 2,
      explanation: "Market capitalization reflects the current market price, which can be influenced by short-term factors or sentiment. Valuation analysis aims to determine a company's fundamental worth, which might differ significantly, revealing potential investment opportunities or mispricings."
    }
    // ... more questions extracted and elaborated from notes
  ];

  const practiceProblems = [
      {
          question: "If a company has a stable free cash flow of $10 million per year, a discount rate of 10%, and a long-term growth rate of 2%, calculate its approximate value using the perpetuity growth formula.",
          solution: (
              <div>
                  <p><strong>Formula:</strong> Value = Cash Flow / (Discount Rate - Growth Rate)</p>
                  <p><strong>Calculation:</strong></p>
                  <ul className="list-disc list-inside">
                      <li>Cash Flow (CF) = $10 million</li>
                      <li>Discount Rate (r) = 10% or 0.10</li>
                      <li>Growth Rate (g) = 2% or 0.02</li>
                      <li>Value = $10M / (0.10 - 0.02)</li>
                      <li>Value = $10M / 0.08</li>
                      <li>Value = $125 million</li>
                  </ul>
                  <p><strong>Explanation:</strong> This simplified perpetuity growth model provides a rough estimate of value for a stable business with modest, constant growth. It assumes the $10M cash flow grows at 2% forever, and discounts that stream at 10%. A key limitation is the assumption of constant rates indefinitely, which rarely holds perfectly in reality.</p>
              </div>
          )
      },
      {
          question: "Company A has a market capitalization of $500 million. Your DCF analysis suggests an intrinsic value of $700 million. What might explain this difference, and what investment recommendation might follow?",
          solution: (
              <div>
                  <p>The $200 million (or 40%) difference between the market value ($500M) and the implied intrinsic value ($700M) suggests the market may be undervaluing Company A. Potential explanations include:</p>
                  <ul className="list-disc list-inside">
                      <li><strong>Market Oversight:</strong> The market might be overlooking future growth opportunities, potential margin improvements, or strategic advantages that your analysis captures.</li>
                      <li><strong>Optimistic Assumptions:</strong> Your DCF assumptions (e.g., growth rates, discount rate, terminal value) might be more optimistic than the market consensus. It's crucial to critically review these assumptions.</li>
                      <li><strong>Information Asymmetry:</strong> You might have access to non-public information or insights (e.g., through due diligence) that the broader market lacks.</li>
                      <li><strong>Temporary Factors:</strong> The market might be undervaluing the company due to temporary negative sentiment, sector rotation, or macroeconomic concerns unrelated to the company's long-term fundamentals.</li>
                  </ul>
                  <p><strong>Investment Recommendation:</strong></p>
                  <p>If you are confident in the robustness and reasonableness of your DCF analysis and assumptions, the discrepancy suggests a potential "Buy" recommendation, as the stock appears significantly undervalued. However, before making such a recommendation, it's essential to:</p>
                  <ul className="list-disc list-inside">
                      <li>Perform sensitivity analysis on key DCF assumptions (growth rate, WACC, terminal multiple).</li>
                      <li>Compare your projections to analyst consensus estimates to understand points of divergence.</li>
                      <li>Consider qualitative factors and risks not fully captured in the model.</li>
                      <li>Ensure the analysis isn't based on overly aggressive or unsubstantiated assumptions.</li>
                  </ul>
              </div>
          )
      }
      // ... more practice problems
  ];


  return (
    <div className="space-y-8">
      {/* Introduction Section - Elaborate beyond just the overview */}
      <p className="text-lg leading-relaxed">
        Valuation lies at the heart of investment banking and corporate finance. It's the analytical process of determining the current worth of an asset or a company. Whether advising on a merger, acquisition, capital raise, or investment decision, understanding a company's value – and what drives that value – is paramount. This module introduces the fundamental concepts underpinning all valuation work, exploring why we value companies and the core principles that link a company's financial performance to its overall worth.
      </p>

      <KeyConcept
        title="Core Idea of Valuation"
        concept="Valuation aims to determine a company's intrinsic or implied value to assess if its current market value is appropriate."
        explanation="In essence, valuation seeks to answer the question: 'What is this company truly worth?' This intrinsic value, derived through rigorous financial analysis, is then compared to the company's current market value (for public companies, this is the market capitalization; for private companies, it might be a recent transaction price or offer). The goal is to identify whether the company is undervalued (intrinsic > market), overvalued (intrinsic < market), or fairly valued (intrinsic ≈ market) by the market."
        importance="This comparison forms the basis for critical financial decisions. For investors, it signals potential buy or sell opportunities. For companies, it informs strategic choices like acquisitions, divestitures, or share buybacks. For investment bankers, it's the foundation of advice provided to clients on M&A transactions (fair pricing), capital raising (IPO pricing, debt capacity), and financial restructuring."
        examples={['An analyst calculates Apple\'s intrinsic value per share is $200 based on DCF, while it trades at $180, suggesting it might be undervalued.', 'A PE firm values a target company at $500M based on LBO analysis, helping them decide on a maximum bid price.']}
      />

      <KeyConcept
        title="Intrinsic Value vs. Market Value"
        concept="Intrinsic value is an analytical estimate of worth based on fundamentals, while market value is the price observed in the market."
        explanation="Intrinsic value is derived from analyzing a company's fundamentals – its cash flow generation potential, growth prospects, risk profile, and asset base. Common methods to estimate intrinsic value include Discounted Cash Flow (DCF) analysis. Market value, on the other hand, is the value assigned by the market through trading (market capitalization = share price × shares outstanding). It reflects the collective perception and sentiment of investors, which can sometimes diverge from fundamental value due to short-term factors, noise, or behavioral biases."
        importance="The potential divergence between intrinsic and market value is what creates opportunities for investors and necessitates valuation analysis. If markets were always perfectly efficient, market value would always equal intrinsic value, and valuation analysis would be less critical. Investment banking advice often revolves around exploiting or understanding these potential differences."
      />


      <FormulaDisplay
          title="Fundamental Valuation Formula (Perpetuity Growth Model)"
          formula="Company Value = Cash Flow / (Discount Rate – Cash Flow Growth Rate)"
          explanation={
            <div className="space-y-2">
              <p>This formula, also known as the Gordon Growth Model, provides a simplified theoretical basis for valuation, particularly for stable companies with constant growth expectations.</p>
              <p><strong>Cash Flow (CF):</strong> Represents the expected cash flow generated by the company in the next period available to all investors (often Free Cash Flow to Firm - FCFF).</p>
              <p><strong>Discount Rate (r):</strong> The required rate of return for investors, reflecting the riskiness of the cash flows (often the Weighted Average Cost of Capital - WACC).</p>
              <p><strong>Cash Flow Growth Rate (g):</strong> The expected constant rate at which the cash flows will grow indefinitely (in perpetuity).</p>
            </div>
          }
          example={
             <div>
               <p><strong>Example Calculation:</strong></p>
               <p>If a company generates $10M in stable annual cash flow (CF), has a discount rate (r) of 10%, and is expected to grow cash flows at 2% (g) perpetually:</p>
               <p>Value = $10M / (0.10 - 0.02) = $10M / 0.08 = $125M</p>
             </div>
          }
          notes={
             <div className="space-y-2">
               <p><strong>Limitations:</strong></p>
               <ul className="list-disc list-inside">
                 <li>Assumes constant growth forever, which is unrealistic for most companies.</li>
                 <li>Highly sensitive to inputs (small changes in 'r' or 'g' significantly impact value).</li>
                 <li>Requires growth rate 'g' to be less than the discount rate 'r'.</li>
                 <li>Difficult to apply to companies with unstable cash flows or high growth phases.</li>
               </ul>
               <p>Despite its limitations, this formula conceptually illustrates the core drivers of value: higher cash flows and growth increase value, while higher risk (discount rate) decreases value.</p>
             </div>
           }
       />

      <VisualAid title="Common Interview Questions - In Depth" type="faq">
         {/* Example for one question */}
         <div className="mb-6 p-4 border rounded-lg shadow-sm">
             <h6 className="font-semibold text-lg mb-2">1. Conceptual: What is the fundamental goal of valuing a company?</h6>
             <p className="text-sm text-gray-600 mb-2"><strong>Why Interviewers Ask This:</strong> To check your basic understanding of the purpose behind valuation exercises.</p>
             <p className="mb-2"><strong>Guidance on Answering:</strong> Start with the core idea: determining intrinsic value. Then, explain the comparison to market value. Finally, link it to decision-making (investment, M&A advice). Show you understand it's about informing actions, not just calculating a number.</p>
             <p className="italic bg-gray-50 p-2 rounded"><strong>Example Snippet:</strong> "The fundamental goal is to determine a company's intrinsic value based on its fundamentals, like cash flows, growth, and risk. This intrinsic value is then compared to its current market value to assess if it's undervalued, overvalued, or fairly priced, ultimately informing investment decisions or strategic advice in areas like M&A."</p>
         </div>
         {/* Repeat structure for other questions from notes */}
         <div className="mb-6 p-4 border rounded-lg shadow-sm">
             <h6 className="font-semibold text-lg mb-2">2. Conceptual: Why is it important to perform valuation analysis even for publicly traded companies with readily available market capitalizations?</h6>
              <p className="text-sm text-gray-600 mb-2"><strong>Why Interviewers Ask This:</strong> Tests understanding of market efficiency limitations and the difference between price and value.</p>
              <p className="mb-2"><strong>Guidance on Answering:</strong> Acknowledge market cap reflects current price but emphasize that price can deviate from fundamental (intrinsic) value due to market sentiment, short-term factors, or information gaps. Valuation aims to uncover this potential difference.</p>
              <p className="italic bg-gray-50 p-2 rounded"><strong>Example Snippet:</strong> "While market cap shows the current trading price, it doesn't always reflect a company's true intrinsic value. Markets aren't perfectly efficient; sentiment or short-term news can cause mispricings. Valuation analysis digs into fundamentals to estimate that intrinsic value, potentially revealing investment opportunities or confirming if the market price is justified."</p>
         </div>
         <div className="mb-6 p-4 border rounded-lg shadow-sm">
             <h6 className="font-semibold text-lg mb-2">3. Conceptual: Can you explain the basic principle that links a company's cash flow, growth rate, and discount rate to its value?</h6>
              <p className="text-sm text-gray-600 mb-2"><strong>Why Interviewers Ask This:</strong> Checks grasp of the core theoretical relationship in valuation (often referencing the perpetuity model implicitly).</p>
              <p className="mb-2"><strong>Guidance on Answering:</strong> Explain that value is the present value of future cash flows. Higher cash flows and higher growth increase future cash flows, thus increasing present value. A higher discount rate (reflecting higher risk) reduces the present value of those future cash flows. Mention the formula conceptually: Value = CF / (r - g).</p>
              <p className="italic bg-gray-50 p-2 rounded"><strong>Example Snippet:</strong> "The core principle is that a company's value is derived from the present value of the cash flows it's expected to generate in the future. Higher expected cash flows and faster growth rates increase this future stream, boosting value. Conversely, a higher discount rate, which reflects the riskiness of those cash flows, reduces their present value, thus lowering the company's overall value. It's a balance between expected returns and the risk involved."</p>
         </div>
         {/* Add detailed guidance for other questions: 4. Application: Difference between market value and implied value? 5. Advanced: Situations where intrinsic differs significantly from market? 6. Conceptual: Point of valuation in IB context? */}
      </VisualAid>

      {/* Practice Problems Section */}
      <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-3">Practice Problems</h3>
          {practiceProblems.map((problem, index) => (
              <PracticeQuestion
                  key={index}
                  question={problem.question}
                  solution={problem.solution}
               />
           ))}
      </div>


      {/* Visual Aid Suggestions Section */}
       <VisualAid title="Visualizing Valuation Concepts" type="idea">
         <p>To better understand these concepts, consider these visualizations (based on suggestions in notes):</p>
         <ul className="list-disc list-inside space-y-2">
             <li><strong>Relationship Diagram:</strong> A diagram showing Cash Flow, Growth Rate, and Discount Rate as inputs flowing into a central "Company Value" box, illustrating their positive or negative influence.</li>
             <li><strong>Comparison Chart:</strong> A table comparing how different valuation methods (DCF, Comps, Precedents) might yield different value ranges for the same company, highlighting their different perspectives (intrinsic vs. relative).</li>
             <li><strong>Decision Tree:</strong> A flowchart showing how valuation analysis informs various investment banking activities like M&A advice (Is the target price fair?), Capital Raising (What's a reasonable IPO range?), or Restructuring (What's the value of different divisions?).</li>
         </ul>
         <p>(Note: These are conceptual descriptions; actual charts would be created based on specific data).</p>
       </VisualAid>

      {/* Quiz Section */}
      <Quiz questions={quizQuestions} />

      {/* Relevance to IB Roles Section */}
      <VisualAid title="Relevance to Investment Banking Roles" type="career">
        <p className="mb-3">Understanding the fundamental concepts of valuation is not just academic; it's absolutely critical for success in investment banking. Here's a deeper look at why:</p>
        <ul className="list-disc list-inside space-y-2">
            <li><strong>Core Job Function:</strong> As highlighted in the notes, valuing companies is a primary task for analysts and associates. Whether advising on mergers, acquisitions, IPOs, or restructuring, determining value is central to the advice provided.</li>
            <li><strong>Client Conversations:</strong> Bankers must confidently explain valuation methodologies, assumptions, and results to clients (CEOs, CFOs, Boards). A strong conceptual grasp builds credibility and facilitates effective communication.</li>
            <li><strong>Deal Execution:</strong> Valuation analysis directly informs negotiation strategy (e.g., setting offer prices, defending sale prices), deal structuring, and fairness opinions.</li>
            <li><strong>Internal Discussions:</strong> You'll constantly discuss valuation with senior bankers, industry groups, and capital markets teams. A shared understanding of core principles is essential for efficient collaboration.</li>
            <li><strong>Interview Gatekeeper:</strong> As the notes emphasize, valuation is one of the first technical areas tested in interviews. Demonstrating a solid grasp of these fundamental concepts is often a prerequisite for moving forward in the hiring process. It signals you possess the foundational knowledge needed to learn the more complex aspects of the job.</li>
        </ul>
        <p className="mt-3">Think of valuation as the language of finance within investment banking. Fluency in its fundamental concepts allows you to understand deal rationales, assess opportunities, communicate effectively, and ultimately provide valuable advice.</p>
      </VisualAid>

      {/* Concluding Section - Summarize key takeaways */}
      <p className="text-lg leading-relaxed mt-8 border-t pt-4">
        In summary, the fundamental concepts of valuation revolve around estimating a company's intrinsic worth based on its ability to generate future cash flows, considering growth prospects and risk. This analytical estimate is then compared against market values to inform strategic and investment decisions. While simple formulas provide a basic framework, real-world valuation requires nuanced application of various methodologies, careful assumption-setting, and a deep understanding of the business being valued – concepts explored further in subsequent modules.
      </p>

    </div>
  );
};

export default FundamentalConceptsContent;
```

## 7. Component Usage Guidelines

* Prioritize using the existing components found in `components/`.
* Map content types from the `.txt` notes to appropriate components, using them as vehicles for delivering detailed explanations.
* Combine components with detailed paragraphs of text to ensure comprehensiveness. Don't rely solely on components to convey all information.
* For `ChartDisplay` or complex `VisualAid` suggestions in the notes, provide detailed textual descriptions and explanations of what the visual would show, even if the image isn't created yet.

## 8. Do's and Don'ts

* **DO:** Prioritize content depth, detail, and comprehensiveness above all else (Target ~3000+ words).
* **DO:** Elaborate on the `.txt` notes to achieve the required depth.
* **DO:** Use interactive components to enhance engagement with the detailed content.
* **DO:** Strictly follow file structure, naming, and styling consistency.
* **DO:** Update all navigation elements (`Sidebar.js`, bucket pages).
* **DO:** Test thoroughly, focusing on content completeness and accuracy.
* **DON'T:** Create short, shallow, or superficial content. This is the main constraint.
* **DON'T:** Simply copy-paste notes without structuring and elaborating.
* **DON'T:** Introduce new libraries without discussion.
* **DON'T:** Hardcode content in page files.
* **DON'T:** Forget `moduleExists` updates in `Sidebar.js`.

## 9. List of New Sub-Modules to Add

### Bucket 2: Valuation Principles
* The Fundamental Concepts of Valuation
* Overview of Major Valuation Methodologies
* Intrinsic vs. Relative Valuation
* Enterprise Value and Equity Value - Fundamental Building Blocks
* Understanding Valuation Multiples - The Basics
* Common Enterprise Value Multiples
* Common Equity Value Multiples
* Connecting Valuation Multiples to Underlying Fundamentals
* Applying Valuation Multiples - Public Comparables
* Applying Valuation Multiples - Precedent Transactions
* Discounted Cash Flow (DCF) Analysis - Core Principles
* Discounted Cash Flow (DCF) Analysis - Projecting Free Cash Flow
* Discounted Cash Flow (DCF) Analysis - Determining the Discount Rate (WACC)
* Discounted Cash Flow (DCF) Analysis - Calculating Terminal Value
* Putting It All Together - From Enterprise Value to Equity Value and Share Price
* Strengths and Weaknesses of Different Valuation Methodologies (Deep Dive)
* Industry-Specific Valuation Considerations
* Private Company Valuation Considerations
* Sensitivity Analysis and Scenario Analysis in Valuation
* Reconciliation of Valuation Methodologies - The "Football Field”

### Bucket 3: Intrinsic Valuation (DCF)
* The Fundamental Principle and Purpose of DCF Analysis
* Free Cash Flow and Projections
* Discount Rate and WACC
* Calculating Terminal Value - Capturing Value Beyond the Projection Period
* Moving from Enterprise Value to Equity Value
* Sensitivity Analysis and Scenario Analysis
* Strengths and Limitations of DCF Analysis
* Industry-Specific DCF Considerations
* Advanced DCF Concepts
* DCF in Practice - Implementation and Interpretation

### Bucket 4: Relative Valuation (Comps)
* Introduction to the Philosophy of Relative Valuation
* Differentiating Trading Comps and Transaction Comps
* The Trading Comps Process - A Bird's Eye View
* The Importance of Operational Benchmarking in Peer Selection
* Understanding Key Enterprise Value Multiples
* Understanding Key Equity Value Multiples
* Calculating Multiples - The Interplay of Value and Value Drivers
* Diving into Enterprise Value Calculation - The "Bridge"
* Calculating Diluted Equity Value - Accounting for Dilution
* Understanding and Calculating Net Debt
* The Art of "Scrubbing" Financial Data - Normalizing Earnings
* Benchmarking Multiples - Understanding the Range and Identifying Outliers
* Applying Multiples to the Target - Arriving at an Implied Valuation Range
* Interpreting the Output - Understanding Drivers of Valuation Differences
* Introduction to Precedent Transaction Analysis - Looking Back at Deals
* Selecting Comparable Transactions - Key Considerations
* Data Sources for Precedent Transaction Analysis - Uncovering Deal Details
* Calculating Multiples and Premiums in Precedent Transactions
* Interpreting Precedent Transaction Multiples - The Context of the Deal

### Bucket 5: Mergers & Acquisitions (M&A)
* Defining the M&A Landscape
* The Strategic Rationale Behind M&A
* The "Fuzzy" Side of M&A Rationale
* The M&A Deal Process (Sell-Side and Buy-Side)
* Key M&A Documents and Agreements
* Funding the Deal: The Form of Consideration
* The Mechanics of EPS Accretion and Dilution
* Merger Modeling: Building the Foundation
* Sources & Uses and Purchase Price Allocation
* Combining the Financial Statements: Pro Forma Analysis
* Synergies: The Promise of "2 + 2 = 5"
* Beyond EPS: Other Ways to Evaluate M&A Deals
* The Perils of M&A: Why Deals Fail
* Deal Structure: Stock vs. Asset vs. 338(h)(10)
* Purchase Price and the Impact on Balance Sheet
* Special Topics: Hostile Takeovers and Tender Offers
* Advanced M&A Considerations

### Bucket 6: Leveraged Buyouts (LBO)
* The Essence of a Leveraged Buyout
* Why Leveraged Buyouts Work: The Magic of Leverage
* The Key Players in the LBO Game
* Finding the Right Fit: Characteristics of an Ideal LBO Target
* Structuring the Deal: Sources of Funds
* Diving into Debt: The Different Tranches
* The Sources & Uses Schedule: Balancing the Equation
* Setting Up a Simple LBO Model (Paper LBO)
* Projecting Financial Statements and Debt Repayment in an LBO
* The Cost of Borrowing: Interest Expense
* Managing Cash Flow: The Cash Flow Sweep Mechanism
* The Exit Strategy: Cashing Out the Investment
* Gauging Profitability: Calculating the Internal Rate of Return (IRR)
* Measuring Returns: The Multiple of Money (MoM)
* The Exit Multiple: Predicting the Sale Price
* Sensitivity Analysis: Stress-Testing the Assumptions
* Boosting Returns: Operational Improvements and Strategic Moves
* Dividends in the Holding Period: Dividend Recaps
* Aligning Interests: Management Incentives
* Differences Between M&A and LBOs
* Advanced LBO Concepts (Optional but Good to Know)

### Bucket 7: General Market Dynamics (Bonds, Currencies, etc.)
* Foundational Fixed Income Concepts (Bond Defined, Key Terms)
* Core Bond Characteristics (Face Value, Coupon Rate, Maturity)
* The Inverse Relationship Between Bond Prices and Yields
* Bond Pricing Mechanics (Net Present Value)
* Different Measures of Bond Yield (Coupon, Current, YTM)
* Factors Influencing Bond Prices (Coupon, Rates, Creditworthiness)
* Bond Ratings and Default Risk (Investment Grade vs. Junk)
* Types of Bonds: Treasury Notes and Bonds
* Types of Bonds: Corporate Bonds vs. Consumer Loans
* The Yield Curve and Its Implications
* Special Bond Features: Callable and Putable Bonds
* Special Bond Features: Convertible Bonds
* Special Bond Features: Perpetual and Zero-Coupon Bonds
* Introduction to Foreign Exchange Rates (Spot and Forward)
* Factors Influencing Currency Exchange Rates
* Basic Derivatives: Options (Calls and Puts - Conceptual)
* Basic Derivatives: Futures and Forwards (Conceptual)
* Introduction to Market Correlation and Diversification
* Macroeconomic Indicators and Market Impact
* Central Banks and Monetary Policy

### Bucket 8: Behavioral & Fit Questions
* Personal Background / The "Story" Questions
* Motivation and Fit for Finance / Investment Banking
* Firm-Specific Questions
* Strengths and Weaknesses
* Past Experiences and Behavioral Situations (using STAR)
* Teamwork and Leadership
* Handling Challenges, Failures, and Stress
* Goals and Aspirations
* Personal Interests and "Elevator Test" Questions
* Questions for the Interviewer
