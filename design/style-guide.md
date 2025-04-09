# Investment Banking Interview Prep Website - Style Guide

## Brand Identity

### Logo
- Primary logo: Simple, professional wordmark "IB Interview Prep" with a subtle financial chart icon
- Color variations: Dark blue on white background, white on dark blue background
- Minimum size: 120px width to maintain legibility

### Brand Voice
- Professional but accessible
- Confident and authoritative without being intimidating
- Educational and supportive
- Clear and concise explanations of complex topics

## Color Palette

### Primary Colors
- **Primary Blue** (#0d6efd): Used for primary buttons, links, and key UI elements
- **Dark Blue** (#0a4bb3): Used for hover states and secondary elements
- **Light Blue** (#e6f0ff): Used for backgrounds, highlights, and secondary UI elements

### Secondary Colors
- **Dark Gray** (#212529): Primary text color
- **Medium Gray** (#6c757d): Secondary text, borders, and inactive elements
- **Light Gray** (#f8f9fa): Page backgrounds, cards, and containers

### Accent Colors
- **Success Green** (#198754): Used for correct answers, completion indicators
- **Warning Yellow** (#ffc107): Used for highlighting important information, medium difficulty
- **Danger Red** (#dc3545): Used for errors, alerts, and high difficulty indicators
- **Info Teal** (#0dcaf0): Used for tips, hints, and informational content

## Typography

### Fonts
- **Primary Font**: Roboto
  - Regular (400) for body text
  - Medium (500) for emphasis
  - Bold (700) for headings
  - Light (300) for large display text
- **Monospace Font**: Roboto Mono
  - Used for code snippets, formulas, and financial calculations

### Type Scale
- **Display 1**: 48px/3rem (Homepage hero, major section headers)
- **Heading 1**: 36px/2.25rem (Page titles)
- **Heading 2**: 30px/1.875rem (Section headers)
- **Heading 3**: 24px/1.5rem (Sub-section headers)
- **Heading 4**: 20px/1.25rem (Card titles, important content headers)
- **Heading 5**: 18px/1.125rem (Minor section headers)
- **Body Large**: 18px/1.125rem (Featured content, introductions)
- **Body**: 16px/1rem (Standard body text)
- **Body Small**: 14px/0.875rem (Secondary information, captions)
- **Caption**: 12px/0.75rem (Metadata, footnotes)

### Text Styles
- **Line Height**:
  - 1.2 for headings
  - 1.5 for body text
  - 1.7 for small text
- **Paragraph Spacing**: 1.5rem (24px) between paragraphs
- **Link Styles**: Underlined on hover, primary blue color

## UI Components

### Buttons
- **Primary Button**:
  - Background: Primary Blue
  - Text: White
  - Border: None
  - Hover: Dark Blue
  - Border-radius: 4px
  - Padding: 0.5rem 1.5rem
- **Secondary Button**:
  - Background: White
  - Text: Primary Blue
  - Border: 1px solid Primary Blue
  - Hover: Light Blue background
  - Border-radius: 4px
  - Padding: 0.5rem 1.5rem
- **Tertiary Button**:
  - Background: Transparent
  - Text: Primary Blue
  - Border: None
  - Hover: Light Blue background
  - Border-radius: 4px
  - Padding: 0.5rem 1.5rem

### Cards
- **Standard Card**:
  - Background: White
  - Border: None
  - Border-radius: 8px
  - Box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
  - Padding: 1.5rem
  - Margin-bottom: 1.5rem
- **Knowledge Bucket Card**:
  - Same as Standard Card
  - Hover: Slight elevation (transform: translateY(-5px))
  - Transition: transform 0.3s ease
- **Practice Question Card**:
  - Border-left: 4px solid (color varies by difficulty)
  - Background: White
  - Border-radius: 8px (except left side)
  - Padding: 1.5rem

### Form Elements
- **Text Input**:
  - Border: 1px solid Medium Gray
  - Border-radius: 4px
  - Padding: 0.5rem 0.75rem
  - Focus: Border color Primary Blue, light blue shadow
- **Dropdown**:
  - Same styling as Text Input
  - Custom chevron icon
- **Checkbox/Radio**:
  - Custom styling with Primary Blue for selected state
  - Animated transitions

### Navigation
- **Main Navigation**:
  - Background: White
  - Text: Dark Gray
  - Active/Hover: Primary Blue
  - Box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)
- **Sidebar Navigation**:
  - Background: Light Gray
  - Text: Dark Gray
  - Active: Primary Blue background, White text
  - Hover: Light Blue background
- **Breadcrumbs**:
  - Text: Medium Gray
  - Separator: Custom chevron icon
  - Current Page: Dark Gray, non-clickable

### Progress Indicators
- **Progress Bar**:
  - Track: Light Gray
  - Fill: Primary Blue
  - Border-radius: 4px
  - Height: 8px
- **Completion Badge**:
  - Circle with checkmark
  - Background: Success Green
  - Icon: White checkmark

### Difficulty Indicators
- **Easy**: Success Green dot or tag
- **Medium**: Warning Yellow dot or tag
- **Hard**: Danger Red dot or tag

## Iconography
- **Style**: Outlined, consistent stroke width
- **Size**: 
  - 24px for navigation and UI elements
  - 20px for inline with text
  - 48px+ for feature icons
- **Common Icons**:
  - Knowledge buckets (unique icon for each)
  - Navigation (home, search, user)
  - Actions (download, share, bookmark)
  - Indicators (check, warning, info)

## Spacing System
- **Base Unit**: 4px
- **Scale**:
  - xs: 4px (0.25rem)
  - sm: 8px (0.5rem)
  - md: 16px (1rem)
  - lg: 24px (1.5rem)
  - xl: 32px (2rem)
  - xxl: 48px (3rem)
  - xxxl: 64px (4rem)

## Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1199px
- **Desktop**: 1200px+

## Animation & Transitions
- **Duration**: 
  - Fast: 150ms (micro-interactions)
  - Medium: 300ms (standard transitions)
  - Slow: 500ms (emphasis animations)
- **Easing**: 
  - Standard: ease-in-out
  - Entrance: ease-out
  - Exit: ease-in
- **Usage**:
  - Hover states
  - Page transitions
  - Loading states
  - Revealing/hiding content

## Accessibility Guidelines
- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Focus States**: Visible focus indicators for keyboard navigation
- **Text Size**: Minimum 16px for body text
- **Touch Targets**: Minimum 44px × 44px for interactive elements on mobile
- **Screen Reader Support**: Proper ARIA labels and semantic HTML

## Image Guidelines
- **Hero Images**: 1600px × 600px
- **Card Images**: 800px × 600px
- **Thumbnails**: 400px × 300px
- **Format**: WebP with JPEG fallback
- **Style**: Professional, finance-themed imagery
- **Charts/Diagrams**: Clear labels, consistent color scheme

## Code and Formula Styling
- **Background**: Light gray (#f8f9fa)
- **Text**: Dark gray with syntax highlighting for code
- **Border**: Left border in primary blue
- **Font**: Roboto Mono
- **Padding**: 1rem
- **Border-radius**: 4px
