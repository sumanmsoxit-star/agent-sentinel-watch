

# In-App Project Documentation Page

## Overview
Add a comprehensive, print-friendly "/docs" page to the application that serves as a complete academic project report. The page will contain all the content needed for a B.Tech final year project report following the format conventions used in Andhra Pradesh universities (JNTU/AU/SVU style).

## What Will Be Built

A single new page (`src/pages/DocsPage.tsx`) accessible via a "Docs" nav link, containing the following sections organized as numbered chapters:

### Chapter Structure

1. **Title Page** - Project title, university name placeholder, student details placeholder, department, year
2. **Certificate / Declaration / Acknowledgements** - Placeholder text blocks the student can customize
3. **Abstract** - Summary of the AAIDC system, its purpose, and key contributions
4. **Table of Contents** - Clickable section links using HTML anchor IDs
5. **Chapter 1: Introduction** - Background, problem statement, objectives, scope of the project
6. **Chapter 2: Literature Review** - Overview of agentic AI, incident detection, LLM tool augmentation
7. **Chapter 3: System Architecture** - Architecture diagram (rendered as styled HTML/CSS boxes with arrows), module breakdown, technology stack table
8. **Chapter 4: System Design**
   - Data flow diagram (styled HTML)
   - Agent execution flow diagram
   - Incident scoring formula with explanation
   - Severity classification table
   - Database/store schema description
9. **Chapter 5: Implementation**
   - Module descriptions with code snippets:
     - Agent Execution Engine
     - Tool Registry (Calculator)
     - Execution Tracing System
     - Incident Scoring Engine
     - Memory Store
     - AI Integration (Edge Function)
   - API endpoint documentation table
   - UI screenshots guidance (placeholder image areas)
10. **Chapter 6: Testing & Results**
    - Test cases table (sample scenarios with expected vs actual)
    - Sample experimental results dataset
    - Performance metrics explanation
11. **Chapter 7: Conclusion & Future Work**
12. **References / Bibliography**
13. **Glossary of Terms** - Technical terminology definitions

### Design Features
- Print-optimized CSS: `@media print` styles with page breaks between chapters, hidden navigation, A4-sized layout
- A "Print Report" button at the top of the page
- Academic serif font (Georgia/Times) for the documentation content, contrasting with the app's tech theme
- Clean white background for the docs page itself (readable on print)
- Numbered headings, proper margins, and academic formatting

## Technical Details

### New Files
- `src/pages/DocsPage.tsx` - The main documentation page component (large, self-contained)

### Modified Files
- `src/App.tsx` - Add route `/docs`
- `src/components/AppLayout.tsx` - Add "Docs" nav item with a BookOpen icon

### Architecture Diagrams
Since we cannot use images, diagrams will be built as styled HTML/CSS box-and-arrow layouts that render well both on screen and in print. These will cover:
- System architecture (3-tier: Frontend, Edge Functions, AI Gateway)
- Agent execution pipeline (step-by-step flow)
- Data flow between modules

### Print Stylesheet
Additional CSS in `src/index.css` for `@media print` rules:
- Hide the app header/nav
- Set white background, dark text
- Force page breaks before each chapter heading
- Size content to A4 proportions

