import { SlidersHorizontal } from 'lucide-react'
import BookCard from './BookCard'
export default function BookGrid({ books, categories, activeCategory, setActiveCategory, sort, setSort, onAdd }) {
  return <section className="catalog section-wrap" id="books">
    <div className="section-heading"><div><span className="eyebrow">THE BOOKSHELF</span><h2>Find your next <em>favourite.</em></h2><p>Handpicked reads for curious minds and open hearts.</p></div><div className="sort-control"><SlidersHorizontal size={16}/><select value={sort} onChange={e => setSort(e.target.value)} aria-label="Sort books"><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="rating">Top rated</option></select></div></div>
    <div className="category-row" aria-label="Filter by category">{categories.map(c => <button key={c} onClick={() => setActiveCategory(c)} className={activeCategory === c ? 'category-chip active' : 'category-chip'}>{c}</button>)}</div>
    {books.length ? <div className="book-grid">{books.map(book => <BookCard key={book.id} book={book} onAdd={onAdd}/>)}</div> : <div className="empty-results"><span>☁</span><h3>No books found</h3><p>Try another title or category.</p></div>}
  </section>
}