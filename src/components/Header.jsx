import { BookOpen, Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header({ cartCount, search, setSearch, onCart }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#" aria-label="BookNest home"><span className="brand-mark"><BookOpen size={21}/></span><span>book<span>nest</span></span></a>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#books" onClick={() => setMenuOpen(false)}>Browse books</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Our story</a>
        </nav>
        <div className="header-actions">
          <label className="header-search"><Search size={17}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search books..." aria-label="Search books"/></label>
          <button className="icon-button cart-button" onClick={onCart} aria-label={`Open cart, ${cartCount} items`}><ShoppingBag size={20}/><span className="cart-count">{cartCount}</span></button>
          <button className="icon-button menu-button" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
        </div>
      </div>
    </header>
  )
}