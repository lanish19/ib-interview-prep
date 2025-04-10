# Investment Banking Interview Prep Project: Remaining Work and UI/UX Guidelines

## Bucket 1: Accounting

### Completed Submodules
- ✅ Income Statement (`income-statement.js`)
- ✅ Balance Sheet (`balance-sheet.js`)
- ✅ Cash Flow Statement (`cash-flow-statement.js`)
- ✅ Financial Statement Analysis (`financial-statement-analysis.js`)
- ✅ Working Capital (`working-capital.js`)

### Missing Submodules
- ❌ Financial Ratios
- ❌ Accounting Red Flags
- ❌ GAAP vs. IFRS

## Bucket 2: Valuation Principles

### Completed Submodules
- ✅ Valuation Fundamentals (`valuation-fundamentals.js`)
- ✅ Time Value of Money (`time-value-of-money.js`)
- ✅ Valuation Multiples (`valuation-multiples.js`)

### Missing Submodules
- ❌ Cost of Capital
- ❌ Terminal Value
- ❌ Valuation Adjustments
- ❌ Enterprise vs. Equity Value

## Bucket 3: Intrinsic Valuation (DCF)

### Completed Submodules
- ✅ DCF Fundamentals (`dcf-fundamentals.js`)
- ✅ Free Cash Flow Projections (`free-cash-flow-projections.js`)
- ✅ Sensitivity Analysis (`sensitivity-analysis.js`)

### Missing Submodules
- ❌ WACC Calculation
- ❌ Terminal Value Methods
- ❌ DCF Variations (FCFF, FCFE, DDM)
- ❌ Scenario Analysis

## Bucket 4: Relative Valuation (Comps)

### Completed Submodules
- ✅ Comparable Companies (`comparable-companies.js`)
- ✅ Trading Comps Analysis (`trading-comps-analysis.js`)

### Missing Submodules
- ❌ Precedent Transactions
- ❌ Industry-Specific Multiples
- ❌ Adjusting for Comparability
- ❌ Regression Analysis

## Bucket 5: Mergers & Acquisitions

### Completed Submodules
- ✅ M&A Fundamentals (`ma-fundamentals.js`)
- ✅ Deal Structures (`deal-structures.js`)

### Missing Submodules
- ❌ Synergies
- ❌ Accretion/Dilution Analysis
- ❌ Regulatory Considerations
- ❌ Post-Merger Integration

## Bucket 6: Leveraged Buyouts

### Completed Submodules
- ✅ LBO Fundamentals (`lbo-fundamentals.js`)
- ✅ LBO Model Mechanics (`lbo-model-mechanics.js`)
- ✅ LBO Returns Analysis (`lbo-returns-analysis.js`)

### Missing Submodules
- ❌ LBO Exit Strategies
- ❌ Debt Structures
- ❌ Management Incentives
- ❌ LBO Case Studies

## Bucket 7: Market Dynamics

### Completed Submodules
- ✅ Macroeconomic Indicators (`macroeconomic-indicators.js`)
- ✅ Interest Rates (`interest-rates.js`)

### Missing Submodules
- ❌ Foreign Exchange
- ❌ Yield Curve Analysis
- ❌ Commodity Markets
- ❌ Equity Market Indicators
- ❌ Credit Markets

## Bucket 8: Behavioral & Fit Questions

### Completed Submodules
- ✅ Tell Me About Yourself (`tell-me-about-yourself.js`)

### Missing Submodules
- ❌ Why Investment Banking
- ❌ Strengths and Weaknesses
- ❌ Deal Experience
- ❌ Leadership Examples
- ❌ Career Goals
- ❌ Cultural Fit Questions

## Summary of Implementation Status

| Bucket | Total Submodules | Completed | Missing | Completion % |
|--------|------------------|-----------|---------|--------------|
| Accounting | 8 | 5 | 3 | 62.5% |
| Valuation Principles | 7 | 3 | 4 | 42.9% |
| Intrinsic Valuation | 7 | 3 | 4 | 42.9% |
| Relative Valuation | 6 | 2 | 4 | 33.3% |
| Mergers & Acquisitions | 6 | 2 | 4 | 33.3% |
| Leveraged Buyouts | 7 | 3 | 4 | 42.9% |
| Market Dynamics | 7 | 2 | 5 | 28.6% |
| Behavioral & Fit Questions | 7 | 1 | 6 | 14.3% |
| **TOTAL** | **55** | **21** | **34** | **38.2%** |

## Additional Features to Implement

1. **Mock Interview Module**
   - Interactive interview simulation with common questions
   - Feedback mechanism for user responses
   - Timer functionality for realistic interview conditions
   - Option to record and review responses

2. **Additional Practice Problems**
   - More complex case studies for each knowledge area
   - Timed technical exercises with solutions
   - Progressive difficulty levels (beginner to advanced)
   - Industry-specific problem sets

3. **Interactive Financial Models**
   - Embedded spreadsheet functionality for hands-on practice
   - Pre-built templates for common modeling exercises
   - Step-by-step model building tutorials
   - Model validation and error checking

4. **Progress Tracking System**
   - User account functionality to track completion
   - Knowledge assessment quizzes
   - Personalized study recommendations
   - Performance analytics dashboard

5. **Resource Library**
   - Curated external resources (articles, videos)
   - Downloadable templates and cheat sheets
   - Glossary of investment banking terms
   - Industry research reports

## UI/UX Guidelines for Consistent Implementation

### Component Structure

Each submodule should follow this consistent structure pattern:

```jsx
import React from 'react';
import VisualAid from '../../components/VisualAid';
import FormulaDisplay from '../../components/FormulaDisplay';
import ComparisonTable from '../../components/ComparisonTable';
import ProcessFlow from '../../components/ProcessFlow';
import ChartDisplay from '../../components/ChartDisplay';
import KeyConcept from '../../components/KeyConcept';
import CaseStudy from '../../components/CaseStudy';
import PracticeQuestion from '../../components/PracticeQuestion';

const submoduleNameContent = () => {
  return (
    <div className="content-container">
      <KeyConcept
        title="Concept Title"
        concept="Brief one-sentence definition"
        explanation="Detailed explanation paragraph"
        importance="Why this concept matters in investment banking"
        examples={[
          "Example 1",
          "Example 2",
          "Example 3",
          "Example 4"
        ]}
      />
      
      {/* Additional components as needed */}
    </div>
  );
};

export default submoduleNameContent;
```

### Page Structure

Each page file should follow this consistent pattern:

```jsx
import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import submoduleNameContent from '../../content/bucket-name/submodule-name';

export default function SubmoduleName() {
  const moduleData = {
    title: "Submodule Title",
    bucket: "Bucket Name",
    bucketSlug: "bucket-name",
    overview: "Brief overview sentence that appears at the top of the page",
    content: submoduleNameContent()
  };

  return (
    <Layout>
      <Head>
        <title>Submodule Title | Investment Banking Interview Prep</title>
        <meta name="description" content="Brief SEO description" />
      </Head>
      
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
```

### Component Usage Guidelines

#### 1. KeyConcept Component

Always use this as the first component in each submodule to introduce the main concept:

```jsx
<KeyConcept
  title="Concept Title"
  concept="Brief one-sentence definition (30-50 words)"
  explanation="Detailed explanation (150-300 words)"
  importance="Why this matters in investment banking (100-200 words)"
  examples={[
    "Example 1",
    "Example 2",
    "Example 3",
    "Example 4"
  ]}
/>
```

#### 2. VisualAid Component

Use for conceptual frameworks and structured information:

```jsx
<VisualAid title="Framework Title" type="concept">
  <div className="framework-name">
    <div className="framework-item mb-4">
      <h4>1. Section Title</h4>
      <p>Brief description of this section.</p>
      <ul>
        <li><strong>Subsection:</strong>
          <ul>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
        </li>
        {/* Additional subsections */}
      </ul>
    </div>
    {/* Additional framework items */}
  </div>
</VisualAid>
```

#### 3. FormulaDisplay Component

Use for mathematical formulas and financial calculations:

```jsx
<FormulaDisplay
  title="Formula Title"
  formula="Mathematical formula with proper notation"
  variables={[
    { symbol: "Symbol1", description: "Description of first variable" },
    { symbol: "Symbol2", description: "Description of second variable" },
    { symbol: "Symbol3", description: "Description of third variable" }
  ]}
  example="Step-by-step calculation example with numbers"
  notes="Additional context or limitations of the formula (100-200 words)"
/>
```

#### 4. ComparisonTable Component

Use for comparing different approaches, methods, or concepts:

```jsx
<ComparisonTable
  title="Comparison Title"
  headers={["Column 1", "Column 2", "Column 3", "Column 4", "Column 5"]}
  rows={[
    [
      "Row 1, Col 1",
      "Row 1, Col 2",
      "Row 1, Col 3",
      "Row 1, Col 4",
      "Row 1, Col 5"
    ],
    [
      "Row 2, Col 1",
      "Row 2, Col 2",
      "Row 2, Col 3",
      "Row 2, Col 4",
      "Row 2, Col 5"
    ],
    // Additional rows
  ]}
  description="Explanation of what this comparison shows and key takeaways (100-150 words)"
/>
```

#### 5. ProcessFlow Component

Use for step-by-step processes or methodologies:

```jsx
<ProcessFlow
  title="Process Title"
  steps={[
    {
      title: "Step 1 Title",
      description: "Brief description of this step (30-50 words)",
      details: "Detailed explanation with specific actions and considerations (100-200 words)"
    },
    {
      title: "Step 2 Title",
      description: "Brief description of this step (30-50 words)",
      details: "Detailed explanation with specific actions and considerations (100-200 words)"
    },
    // Additional steps
  ]}
  description="Overview of the entire process and its importance (100-150 words)"
/>
```

#### 6. ChartDisplay Component

Use for visual representations of data or concepts:

```jsx
<ChartDisplay
  title="Chart Title"
  chartType="line" // or "bar", "pie", "waterfall", etc.
  imageUrl="/images/chart-image.png"
  description="Explanation of what this chart shows and key insights (100-150 words)"
/>
```

#### 7. CaseStudy Component

Use for applied examples and analysis:

```jsx
<CaseStudy
  title="Case Study Title"
  scenario="Detailed description of the business situation (150-300 words)"
  questions={[
    "Question 1 about the case?",
    "Question 2 about the case?",
    "Question 3 about the case?",
    "Question 4 about the case?"
  ]}
  analysis={
    <div>
      <p><strong>Analysis Section Title:</strong></p>
      <p>Detailed analysis paragraph.</p>
      <ul>
        <li><strong>Key Point 1:</strong>
          <ul>
            <li>Supporting detail</li>
            <li>Supporting detail</li>
            <li>Supporting detail</li>
          </ul>
        </li>
        {/* Additional analysis points */}
      </ul>
    </div>
  }
  conclusion="Summary of key findings and recommendations (150-250 words)"
  takeaways={[
    "Key takeaway 1",
    "Key takeaway 2",
    "Key takeaway 3",
    "Key takeaway 4",
    "Key takeaway 5"
  ]}
/>
```

#### 8. PracticeQuestion Component

Use for interview-style questions with solutions:

```jsx
<PracticeQuestion
  question={{
    question: "Detailed interview question (100-200 words)",
    hint: "Optional hint for approaching the problem",
    solution: "Step-by-step solution with calculations and reasoning (200-400 words)",
    explanation: "Explanation of why this approach works and what interviewers look for (100-200 words)",
    keyTakeaways: [
      "Key learning point 1",
      "Key learning point 2",
      "Key learning point 3",
      "Key learning point 4",
      "Key learning point 5"
    ]
  }}
  difficulty="medium" // or "easy", "hard"
/>
```

### JSX Syntax Guidelines

1. **Special Characters**: Always escape special characters in JSX:
   - For greater than: `{'>'}`
   - For less than: `{'<'}`
   - For other special characters: Use appropriate JSX escaping

2. **Nested Lists**: Maintain consistent indentation for nested lists:
   ```jsx
   <ul>
     <li><strong>Main Point:</strong>
       <ul>
         <li>Subpoint 1</li>
         <li>Subpoint 2</li>
       </ul>
     </li>
   </ul>
   ```

3. **Styling Classes**: Use Bootstrap classes for consistent styling:
   - `mb-4` for margin-bottom spacing
   - `container` for main containers
   - `row` and `col-*` for grid layouts
   - `card` for content cards

### Content Guidelines

1. **Depth and Breadth**: Each submodule should contain:
   - 1 KeyConcept component
   - 1-2 VisualAid components
   - 1-2 FormulaDisplay components (if applicable)
   - 0-1 ComparisonTable components
   - 1 ProcessFlow component
   - 0-1 ChartDisplay components
   - 1 CaseStudy component
   - 1-2 PracticeQuestion components

2. **Content Length**:
   - Total content should be approximately 3,000-5,000 words per submodule
   - Balance text with visual elements and structured components
   - Ensure comprehensive coverage while maintaining readability

3. **Language Style**:
   - Professional but accessible language
   - Define technical terms when first introduced
   - Use concrete examples to illustrate abstract concepts
   - Maintain consistent terminology throughout

4. **Visual Consistency**:
   - Use similar depth of detail across similar components
   - Maintain consistent formatting for lists, tables, and code blocks
   - Ensure proper spacing between components (use mb-4 class)

## File Naming and Organization

1. **Content Files**:
   - Location: `/content/[bucket-name]/[submodule-name].js`
   - Naming: Use kebab-case for all filenames
   - Export: Default export of a function returning JSX

2. **Page Files**:
   - Location: `/pages/[bucket-name]/[submodule-name].js`
   - Naming: Match content file names exactly
   - Import: Import corresponding content file

3. **Image Files**:
   - Location: `/public/images/[bucket-name]/[descriptive-name].png`
   - Naming: Use descriptive names that indicate content
   - Format: Prefer PNG for charts and diagrams, JPG for photos

## Development Workflow

1. **Creating New Submodules**:
   - Copy an existing content file as a template
   - Update all content while maintaining component structure
   - Create corresponding page file
   - Update navigation if necessary

2. **Testing**:
   - Test navigation to ensure new pages are accessible
   - Verify all components render correctly
   - Check for JSX syntax errors (especially with special characters)
   - Ensure responsive design works on different screen sizes

3. **Building**:
   - Run `npm run build` to verify no build errors
   - Address any warnings or errors before finalizing

## Common Issues and Solutions

1. **JSX Syntax Errors**:
   - Special characters like `>`, `<`, `&` must be escaped in JSX
   - Use `{'>'}`, `{'<'}`, `{'&'}` instead of literal characters

2. **Module Import Errors**:
   - Node.js modules like 'fs' cannot be used in client-side code
   - Use client-side alternatives or move server-side code to API routes

3. **Component Prop Validation**:
   - Ensure all required props are provided to components
   - Check prop types match expected values (strings, arrays, objects)

4. **Image Loading Issues**:
   - Verify image paths are correct (should start with `/images/`)
   - Ensure images are placed in the public directory
   - Use appropriate image formats and optimize for web

5. **Navigation Problems**:
   - Update BucketTemplate.js when adding new submodules
   - Ensure consistent URL structure with kebab-case
   - Verify links use Next.js Link component for client-side navigation
