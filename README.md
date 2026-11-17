# BookNest — Responsive eCommerce Bookstore

A responsive bookstore frontend built with React, Vite and CSS. This project is designed as a portfolio/learning exercise for demonstrating an agentic development workflow with IBM Bob.

## Features
- Responsive desktop, tablet and mobile layout
- Search books by title or author
- Filter by category
- Sort by featured, price and rating
- Add/remove books and change cart quantities
- Cart subtotal and item count
- Mobile navigation and accessible labels
- Mock data; no backend, authentication or payment processing

## Tech stack
- React 18
- Vite
- JavaScript
- CSS Grid and Flexbox
- Lucide React icons

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (normally http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Suggested IBM Bob agentic workflow
1. Open this folder in IBM Bob.
2. Use **Plan** mode to inspect the project and request a review of the component structure, responsive strategy and accessibility.
3. Review and approve the plan before implementation changes.
4. Use **Agent** mode to ask Bob to improve one scoped area at a time (for example: add wishlist persistence, improve mobile menu, or add unit tests).
5. Ask Bob to run `npm run build`, inspect errors and summarize changes.
6. Manually verify search, filters, cart math and the responsive breakpoints in Chrome DevTools.
7. Review the generated diff before accepting changes; do not claim tests passed unless you ran them.

### Example prompt for IBM Bob — Plan mode
> Review this BookNest React/Vite project as a senior frontend engineer. Do not edit files yet. Explain the component architecture, data flow, responsive breakpoints, accessibility gaps, and a prioritized improvement plan. Identify risks and propose test cases. Wait for approval.

### Example prompt for IBM Bob — Agent mode
> Implement the approved improvement plan. Keep the existing visual design and use reusable React components. Make changes in small, reviewable steps. Run `npm run build`, fix any errors, and summarize the files changed and manual checks I should perform.

## Project structure
```text
src/
  components/
    Header.jsx
    Hero.jsx
    BookCard.jsx
    BookGrid.jsx
    CartDrawer.jsx
  data/
    books.js
  App.jsx
  main.jsx
  styles.css
```

## Notes
- Book cover images load from Unsplash Source URLs and require an internet connection.
- Product/catalogue/cart data is local mock data. Cart state resets when the page is refreshed.
- This is a frontend demo only. No real checkout or payment is enabled.
