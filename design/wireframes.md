# Investment Banking Interview Prep Website - Wireframes

## Overview
This document outlines the wireframes and UI design approach for the Investment Banking Interview Preparation website. The design focuses on creating an intuitive, professional, and engaging learning experience that helps users master the eight core knowledge buckets required for investment banking interviews.

## Design Principles
1. **Professional Aesthetic** - Clean, corporate design that reflects the investment banking industry
2. **Intuitive Navigation** - Clear pathways to content with minimal clicks
3. **Progressive Disclosure** - Information presented in logical, digestible chunks
4. **Responsive Design** - Fully functional across desktop, tablet, and mobile devices
5. **Visual Hierarchy** - Important content and actions clearly emphasized
6. **Consistent Layout** - Predictable patterns to reduce cognitive load

## Color Scheme
- **Primary**: #0d6efd (Blue) - Conveys professionalism and trust
- **Secondary**: #6c757d (Gray) - Provides balance and sophistication
- **Accent**: #ffc107 (Yellow) - Highlights important elements and calls to action
- **Background**: #f8f9fa (Light Gray) - Creates a clean, readable canvas
- **Text**: #212529 (Dark Gray) - Ensures readability and reduces eye strain

## Typography
- **Headings**: Roboto Bold - Clear, modern, and authoritative
- **Body Text**: Roboto Regular - Highly readable across devices
- **Code/Formulas**: Roboto Mono - Clear distinction for technical content

## Page Wireframes

### 1. Homepage
```
+-----------------------------------------------+
|                   NAVBAR                      |
+-----------------------------------------------+
|                                               |
|              HERO SECTION                     |
|     [Headline, Subheading, CTA Button]        |
|                                               |
+-----------------------------------------------+
|                                               |
|           KNOWLEDGE BUCKETS GRID              |
|    [8 cards with icons, titles, descriptions] |
|                                               |
+-----------------------------------------------+
|                                               |
|           WHY PREPARE WITH US                 |
|    [3 columns with key benefits]              |
|                                               |
+-----------------------------------------------+
|                                               |
|           TESTIMONIALS/STATS                  |
|                                               |
+-----------------------------------------------+
|                   FOOTER                      |
+-----------------------------------------------+
```

### 2. Knowledge Bucket Landing Page
```
+-----------------------------------------------+
|                   NAVBAR                      |
+-----------------------------------------------+
|                                               |
|              BUCKET HEADER                    |
|     [Title, Description, Progress Bar]        |
|                                               |
+-----------------------------------------------+
|                                               |
|           SUB-MODULES GRID                    |
|    [Cards for each sub-module with            |
|     title, brief description, progress]       |
|                                               |
+-----------------------------------------------+
|                                               |
|           RELATED RESOURCES                   |
|                                               |
+-----------------------------------------------+
|                   FOOTER                      |
+-----------------------------------------------+
```

### 3. Sub-Module Page
```
+-----------------------------------------------+
|                   NAVBAR                      |
+-----------------------------------------------+
|                                               |
|              BREADCRUMB NAV                   |
+-----------------------------------------------+
|                                               |
|           SUB-MODULE HEADER                   |
|     [Title, Learning Objectives]              |
|                                               |
+-----------------------------------------------+
|                |                              |
|                |                              |
|   SIDEBAR      |     CONTENT AREA            |
|   [Navigation  |     [Concept Overview,       |
|    within      |      Why This Matters,       |
|    sub-module] |      Visual Aids,            |
|                |      Practice Problems]      |
|                |                              |
|                |                              |
+----------------+------------------------------+
|                                               |
|           NAVIGATION BUTTONS                  |
|     [Previous, Next Sub-Module]               |
|                                               |
+-----------------------------------------------+
|                   FOOTER                      |
+-----------------------------------------------+
```

### 4. Practice Questions Page
```
+-----------------------------------------------+
|                   NAVBAR                      |
+-----------------------------------------------+
|                                               |
|              PRACTICE HEADER                  |
|     [Title, Filters, Search]                  |
|                                               |
+-----------------------------------------------+
|                |                              |
|                |                              |
|   FILTERS      |     QUESTIONS LIST           |
|   [Knowledge   |     [Question cards with     |
|    Buckets,    |      difficulty, category,   |
|    Difficulty, |      preview text]           |
|    Question    |                              |
|    Types]      |                              |
|                |                              |
+----------------+------------------------------+
|                                               |
|           PAGINATION                          |
|                                               |
+-----------------------------------------------+
|                   FOOTER                      |
+-----------------------------------------------+
```

### 5. Individual Question Page
```
+-----------------------------------------------+
|                   NAVBAR                      |
+-----------------------------------------------+
|                                               |
|              BREADCRUMB NAV                   |
+-----------------------------------------------+
|                                               |
|           QUESTION HEADER                     |
|     [Title, Difficulty, Category]             |
|                                               |
+-----------------------------------------------+
|                                               |
|           QUESTION CONTENT                    |
|                                               |
+-----------------------------------------------+
|                                               |
|           HINT SECTION (Collapsible)          |
|                                               |
+-----------------------------------------------+
|                                               |
|           SOLUTION (Toggleable)               |
|                                               |
+-----------------------------------------------+
|                                               |
|           RELATED QUESTIONS                   |
|                                               |
+-----------------------------------------------+
|                   FOOTER                      |
+-----------------------------------------------+
```

### 6. Interactive Calculator/Tool Page
```
+-----------------------------------------------+
|                   NAVBAR                      |
+-----------------------------------------------+
|                                               |
|              TOOL HEADER                      |
|     [Title, Description, Instructions]        |
|                                               |
+-----------------------------------------------+
|                                               |
|           INPUT SECTION                       |
|     [Form fields, sliders, dropdowns]         |
|                                               |
+-----------------------------------------------+
|                                               |
|           CALCULATION BUTTON                  |
|                                               |
+-----------------------------------------------+
|                                               |
|           RESULTS DISPLAY                     |
|     [Visualizations, tables, explanations]    |
|                                               |
+-----------------------------------------------+
|                                               |
|           RELATED CONCEPTS                    |
|                                               |
+-----------------------------------------------+
|                   FOOTER                      |
+-----------------------------------------------+
```

## Responsive Design Considerations

### Desktop (1200px+)
- Full navigation visible
- Multi-column layouts for content grids
- Side-by-side layout for sub-module pages

### Tablet (768px - 1199px)
- Condensed navigation with dropdown for knowledge buckets
- 2-column grid for knowledge buckets
- Sidebar collapses to top navigation on sub-module pages

### Mobile (< 768px)
- Hamburger menu for all navigation
- Single column layouts
- Sequential presentation of all content sections
- Fixed bottom navigation for sub-module progression

## Interactive Elements

### Progress Tracking
- Progress bars for each knowledge bucket
- Checkmarks for completed sub-modules
- Bookmark functionality for continuing later

### Practice Question Interactions
- Reveal/hide solutions
- Interactive calculators for quantitative problems
- Note-taking capability

### Navigation Aids
- Sticky navigation for long-form content
- "Back to top" buttons
- Breadcrumb trails for deep navigation

## Next Steps
1. Create detailed mockups for each page type
2. Develop component library based on these wireframes
3. Implement responsive CSS using Bootstrap framework
4. Create interactive prototypes for user testing
