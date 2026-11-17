import { Heart, ShoppingBag, Star } from 'lucide-react'
import { useState } from 'react'
export default function BookCard({ book, onAdd }) {
  const [liked, setLiked] = useState(false)
  return <article className="book-card">
    <div className="cover-wrap" style={{ background: book.color }}>
      {book.badge && <span className="book-badge">{book.badge}</span>}
      <button className={liked ? 'wish-button liked' : 'wish-button'} onClick={() => setLiked(v => !v)} aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}><Heart size={17} fill={liked ? 'currentColor' : 'none'}/></button>
      <img src={book.cover} alt={`Cover artwork for ${book.title}`} loading="lazy" onError={e => { e.currentTarget.style.opacity = 0 }}/>
    </div>
    <div className="book-info">
      <span className="book-category">{book.category}</span>
      <h3>{book.title}</h3>
      <p className="book-author">by {book.author}</p>
      <div className="book-meta"><span className="rating"><Star size={13} fill="currentColor"/> {book.rating}</span><span className="price">₹{book.price.toLocaleString('en-IN')} <del>₹{book.oldPrice}</del></span></div>
      <button className="add-button" onClick={() => onAdd(book)}><ShoppingBag size={15}/> Add to cart</button>
    </div>
  </article>
}