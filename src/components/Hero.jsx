import { ArrowRight, Sparkles } from 'lucide-react'
export default function Hero({ onExplore }) {
  return <section className="hero" id="home">
    <div className="hero-copy">
      <div className="eyebrow"><Sparkles size={14}/> YOUR NEXT CHAPTER STARTS HERE</div>
      <h1>Stories worth<br/><em>staying up for.</em></h1>
      <p>Thoughtful reads, fresh perspectives and timeless stories — find the book that feels like it was written just for you.</p>
      <button className="primary-button" onClick={onExplore}>Explore the collection <ArrowRight size={17}/></button>
      <div className="hero-note"><span className="avatar-stack"><i>R</i><i>M</i><i>A</i></span><span><b>Loved by readers</b><small>Join our reading community</small></span></div>
    </div>
    <div className="hero-art" aria-label="Books arranged on a warm reading table">
      <div className="art-circle"></div>
      <div className="floating-note">A little more<br/>wonder, daily ✳</div>
      <img className="hero-book hero-book-one" src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=85" alt="Featured book cover"/>
      <img className="hero-book hero-book-two" src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=85" alt="A book from the collection"/>
      <div className="art-caption">THE JOY OF A GOOD BOOK</div>
    </div>
  </section>
}