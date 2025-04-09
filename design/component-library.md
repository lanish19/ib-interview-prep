# Investment Banking Interview Prep Website - Component Library

This document outlines the reusable UI components that will be implemented across the website to ensure consistency, maintainability, and a cohesive user experience.

## Navigation Components

### MainNavbar
- **Purpose**: Primary site navigation
- **Features**:
  - Responsive design (expands on desktop, collapses to hamburger on mobile)
  - Dropdown menus for knowledge buckets
  - Search functionality
  - Highlight for active section
- **Props**:
  - `currentPage`: String to highlight active nav item
  - `transparent`: Boolean for homepage transparent overlay version

### Sidebar
- **Purpose**: Sub-navigation within knowledge buckets
- **Features**:
  - Collapsible sections
  - Progress indicators
  - Sticky positioning on desktop
  - Collapses to top tabs on mobile
- **Props**:
  - `items`: Array of navigation items
  - `currentItem`: String for active item
  - `progress`: Object with completion data

### Breadcrumbs
- **Purpose**: Show navigation path and allow quick return to parent pages
- **Features**:
  - Responsive (truncates on smaller screens)
  - Custom separator icon
- **Props**:
  - `paths`: Array of path objects with labels and URLs

### ProgressBar
- **Purpose**: Visual indicator of completion progress
- **Features**:
  - Animated fill
  - Percentage display option
  - Color variants (default, success)
- **Props**:
  - `value`: Number (0-100)
  - `showPercentage`: Boolean
  - `variant`: String

## Content Components

### KnowledgeBucketCard
- **Purpose**: Display knowledge bucket on homepage and directory
- **Features**:
  - Icon display
  - Title and description
  - Progress indicator
  - Hover animation
- **Props**:
  - `title`: String
  - `description`: String
  - `icon`: String/Component
  - `progress`: Number
  - `link`: String

### SubModuleCard
- **Purpose**: Display sub-modules within a knowledge bucket
- **Features**:
  - Title and brief description
  - Completion status
  - Difficulty indicator
- **Props**:
  - `title`: String
  - `description`: String
  - `completed`: Boolean
  - `difficulty`: String (easy, medium, hard)
  - `link`: String

### ConceptExplanation
- **Purpose**: Present educational content with clear structure
- **Features**:
  - Title and introduction
  - Expandable sections
  - Visual aids integration
  - Key points highlighting
- **Props**:
  - `title`: String
  - `introduction`: String
  - `sections`: Array of content sections
  - `keyPoints`: Array of strings

### PracticeQuestion
- **Purpose**: Display interview questions with optional solutions
- **Features**:
  - Question text
  - Difficulty indicator
  - Toggleable solution
  - Hint system
- **Props**:
  - `question`: String
  - `difficulty`: String
  - `solution`: String
  - `hints`: Array of strings
  - `category`: String

### MathFormula
- **Purpose**: Display financial formulas and equations
- **Features**:
  - Formatted mathematical notation
  - Copy functionality
  - Expandable explanation
- **Props**:
  - `formula`: String
  - `explanation`: String
  - `variables`: Object with variable definitions

### CodeBlock
- **Purpose**: Display code snippets or calculation examples
- **Features**:
  - Syntax highlighting
  - Copy to clipboard
  - Line numbers option
- **Props**:
  - `code`: String
  - `language`: String
  - `showLineNumbers`: Boolean

### VisualAid
- **Purpose**: Display diagrams, charts, and visual explanations
- **Features**:
  - Responsive sizing
  - Zoom capability
  - Caption and attribution
- **Props**:
  - `image`: String (path)
  - `caption`: String
  - `alt`: String
  - `zoomable`: Boolean

## Interactive Components

### Calculator
- **Purpose**: Interactive financial calculators (DCF, LBO, etc.)
- **Features**:
  - Input fields with validation
  - Real-time calculation
  - Result visualization
  - Save/export functionality
- **Props**:
  - `calculatorType`: String
  - `defaultValues`: Object
  - `showExplanation`: Boolean

### QuizModule
- **Purpose**: Self-assessment quizzes
- **Features**:
  - Multiple question types (multiple choice, fill-in-blank)
  - Immediate feedback
  - Score tracking
  - Review mode
- **Props**:
  - `questions`: Array of question objects
  - `timeLimit`: Number (optional)
  - `shuffleQuestions`: Boolean

### FlashcardDeck
- **Purpose**: Study key concepts and definitions
- **Features**:
  - Flip animation
  - Swipe navigation
  - Spaced repetition option
  - Progress tracking
- **Props**:
  - `cards`: Array of card objects
  - `shuffled`: Boolean
  - `trackProgress`: Boolean

### InteractiveChart
- **Purpose**: Manipulable financial charts
- **Features**:
  - Parameter adjustment
  - Real-time updates
  - Multiple visualization options
  - Export functionality
- **Props**:
  - `chartType`: String
  - `data`: Object/Array
  - `parameters`: Object of adjustable values
  - `options`: Object of display options

## Utility Components

### SearchBar
- **Purpose**: Site-wide content search
- **Features**:
  - Auto-suggestions
  - Filter by content type
  - Recent searches
  - Keyboard shortcuts
- **Props**:
  - `placeholder`: String
  - `filters`: Array of filter options
  - `onSearch`: Function

### FilterPanel
- **Purpose**: Filter content lists (questions, sub-modules)
- **Features**:
  - Multiple filter types (checkbox, range, dropdown)
  - Clear all option
  - Mobile-friendly collapse
- **Props**:
  - `filters`: Object of filter configurations
  - `activeFilters`: Object of current selections
  - `onFilterChange`: Function

### Pagination
- **Purpose**: Navigate through multi-page content
- **Features**:
  - Page numbers
  - Previous/next buttons
  - Items per page selector
- **Props**:
  - `currentPage`: Number
  - `totalPages`: Number
  - `onPageChange`: Function
  - `itemsPerPage`: Number

### NotificationBanner
- **Purpose**: Display system messages and alerts
- **Features**:
  - Multiple variants (info, success, warning, error)
  - Dismissible option
  - Auto-dismiss timer
- **Props**:
  - `message`: String
  - `variant`: String
  - `dismissible`: Boolean
  - `duration`: Number

## Form Components

### TextInput
- **Purpose**: Text entry fields
- **Features**:
  - Validation states
  - Helper text
  - Character counter
  - Icon integration
- **Props**:
  - `label`: String
  - `placeholder`: String
  - `value`: String
  - `onChange`: Function
  - `validation`: Object
  - `helperText`: String

### Dropdown
- **Purpose**: Selection from predefined options
- **Features**:
  - Search functionality for long lists
  - Multi-select option
  - Custom rendering of options
- **Props**:
  - `label`: String
  - `options`: Array
  - `value`: String/Array
  - `onChange`: Function
  - `searchable`: Boolean
  - `multiSelect`: Boolean

### Checkbox
- **Purpose**: Boolean or multiple selection
- **Features**:
  - Custom styling
  - Indeterminate state
  - Group management
- **Props**:
  - `label`: String
  - `checked`: Boolean
  - `onChange`: Function
  - `indeterminate`: Boolean

### RadioGroup
- **Purpose**: Single selection from options
- **Features**:
  - Custom styling
  - Horizontal or vertical layout
- **Props**:
  - `options`: Array
  - `value`: String
  - `onChange`: Function
  - `direction`: String

### Button
- **Purpose**: User actions and navigation
- **Features**:
  - Multiple variants (primary, secondary, tertiary)
  - Size options
  - Icon integration
  - Loading state
- **Props**:
  - `label`: String
  - `variant`: String
  - `size`: String
  - `icon`: Component
  - `loading`: Boolean
  - `onClick`: Function

## Layout Components

### Container
- **Purpose**: Consistent content width constraints
- **Features**:
  - Responsive width adjustments
  - Optional padding variants
- **Props**:
  - `fluid`: Boolean
  - `padding`: String

### Grid
- **Purpose**: Multi-column layouts
- **Features**:
  - Responsive column configuration
  - Gap control
  - Alignment options
- **Props**:
  - `columns`: Object (breakpoint-based)
  - `gap`: String/Number
  - `alignItems`: String

### Card
- **Purpose**: Content containers with consistent styling
- **Features**:
  - Header and footer options
  - Hover effects
  - Shadow variants
- **Props**:
  - `header`: String/Component
  - `footer`: String/Component
  - `hover`: Boolean
  - `shadow`: String

### Tabs
- **Purpose**: Organize content into selectable tabs
- **Features**:
  - Horizontal and vertical variants
  - Custom tab rendering
  - Animated transitions
- **Props**:
  - `tabs`: Array of tab objects
  - `activeTab`: String/Number
  - `onChange`: Function
  - `orientation`: String

### Accordion
- **Purpose**: Collapsible content sections
- **Features**:
  - Single or multiple open sections
  - Custom header rendering
  - Animated transitions
- **Props**:
  - `items`: Array of section objects
  - `allowMultiple`: Boolean
  - `defaultOpen`: Array/String

## Implementation Plan

1. Create base component library with styled-components or SCSS modules
2. Develop storybook documentation for each component
3. Implement responsive behavior for all components
4. Create theme provider for consistent styling
5. Build composite components from base components
6. Test all components for accessibility compliance
7. Optimize components for performance
8. Document usage patterns and best practices
