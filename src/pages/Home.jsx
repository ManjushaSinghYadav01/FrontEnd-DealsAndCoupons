import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubscribe = (e) => {
    e.preventDefault()
    // TODO: Implement newsletter subscription
    alert('Thanks for subscribing! You will receive our best deals soon.')
    setEmail('')
  }

  const handleCategoryClick = (category) => {
    navigate('/deals', { state: { category } })
  }

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Find Incredible Deals & Save Big! 🚀</h1>
          <p className="hero-text">
            Discover thousands of discounts from your favorite brands. Join our community
            of smart shoppers and never miss out on amazing deals!
          </p>
          <a href="/deals" className="cta-button">Start Saving Now</a>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=600&q=80" 
            alt="Shopping Deals"
          />
        </div>
      </section>

      <section className="features-section">
        <h2>Why Smart Shoppers Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🔥</span>
            <h3>Exclusive Deals</h3>
            <p>Access to premium deals and flash sales before anyone else</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💰</span>
            <h3>Massive Savings</h3>
            <p>Save up to 70% off on your favorite brands and products</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h3>Lightning Fast</h3>
            <p>Real-time updates on new deals and price drops</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🎯</span>
            <h3>Smart Recommendations</h3>
            <p>Personalized deals based on your interests and preferences</p>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <h2>Explore Popular Categories</h2>
        <div className="categories-grid">
          <div 
            className="category-card electronics"
            onClick={() => handleCategoryClick('electronics')}
          >
            <h3>Electronics</h3>
            <p>Up to 40% off</p>
          </div>
          <div 
            className="category-card fashion"
            onClick={() => handleCategoryClick('fashion')}
          >
            <h3>Fashion</h3>
            <p>Up to 60% off</p>
          </div>
          <div 
            className="category-card home"
            onClick={() => handleCategoryClick('home')}
          >
            <h3>Home & Living</h3>
            <p>Up to 50% off</p>
          </div>
          <div 
            className="category-card beauty"
            onClick={() => handleCategoryClick('beauty')}
          >
            <h3>Beauty & Care</h3>
            <p>Up to 45% off</p>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <h2>Get the Best Deals First!</h2>
        <p>
          Subscribe to our newsletter and receive exclusive deals, early access to sales,
          and personalized recommendations right in your inbox.
        </p>
        <form onSubmit={handleSubscribe} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="subscribe-button">
            Subscribe Now
          </button>
        </form>
      </section>
    </div>
  )
}
