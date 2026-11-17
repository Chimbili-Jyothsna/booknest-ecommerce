import { useMemo, useState } from 'react'
import { ArrowUpRight, BookOpen, Instagram, Mail, Truck } from 'lucide-react'
import Header from './components/Header'
import Hero from './components/Hero'
import BookGrid from './components/BookGrid'
import CartDrawer from './components/CartDrawer'
import { books, categories } from './data/books'

export default function App() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All Books')
  const [sort, setSort] = useState('featured')
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const visibleBooks = useMemo(() => {
    let result = books.filter(book => {
      const matchesCategory = activeCategory === 'All Books' || book.category === activeCategory
      const term = search.trim().toLowerCase()
      const matchesSearch = !term || `${book.title} ${book.author} ${book.category}`.toLowerCase().includes(term)
      return matchesCategory && matchesSearch
    })
    if (sort === 'low') result = [...result].sort((a,b) => a.price - b.price)
    if (sort === 'high') result = [...result].sort((a,b) => b.price - a.price)
    if (sort === 'rating') result = [...result].sort((a,b) => b.rating - a.rating)
    return result
  }, [search, activeCategory, sort])

  const addToCart = book => setCart(current => {
    const existing = current.find(item => item.id === book.id)
    return existing ? current.map(item => item.id === book.id ? {...item, quantity: item.quantity + 1} : item) : [...current, {...book, quantity: 1}]
  })
  const changeQty = (id, delta) => setCart(current => current.map(item => item.id === id ? {...item, quantity: item.quantity + delta} : item).filter(item => item.quantity > 0))
  const removeItem = id => setCart(current => current.filter(item => item.id !== id))
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return <>
    <Header cartCount={cartCount} search={search} setSearch={setSearch} onCart={() => setCartOpen(true)}/>
    <main>
      <Hero onExplore={() => document.getElementById('books')?.scrollIntoView({behavior:'smooth'})}/>
      <div className="promise-strip"><div><BookOpen/><span>Curated with care</span></div><div><Truck/><span>Free delivery over ₹799</span></div><div><Mail/><span>A bookish note every week</span></div></div>
      <BookGrid books={visibleBooks} categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} sort={sort} setSort={setSort} onAdd={addToCart}/>
      <section className="about-band" id="about"><div><span className="eyebrow">A NOTE FROM US</span><h2>More than pages.<br/><em>A place to belong.</em></h2></div><p>At BookNest, we believe every great book opens a new door. We bring together thoughtful picks, beloved classics and fresh voices to make your next discovery a little easier.</p><a href="#books" aria-label="Browse books">Find your next read <ArrowUpRight size={17}/></a></section>
    </main>
    <footer className="footer"><a className="brand" href="#"><span className="brand-mark"><BookOpen size={20}/></span><span>book<span>nest</span></span></a><span>Made for the love of reading.</span><span>© 2026 BookNest</span><a href="#home" aria-label="Back to top"><Instagram size={17}/></a></footer>
    <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={cart} onChangeQty={changeQty} onRemove={removeItem}/>
  </>
}