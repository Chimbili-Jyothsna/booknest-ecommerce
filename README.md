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
