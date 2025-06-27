import { motion } from 'framer-motion'
import { useFavorites } from '../context/FavoritesContext'
import { PageContainer } from '../components/PageContainer'

const dummyDeals = [
  {
    id: 1,
    title: "Smart 4K TV",
    price: 499.99,
    originalPrice: 799.99,
    image: "https://placehold.co/600x400?text=Smart+TV",
    description: "55-inch 4K Ultra HD Smart LED TV"
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 79.99,
    originalPrice: 149.99,
    image: "https://placehold.co/600x400?text=Headphones",
    description: "Noise Cancelling Bluetooth Headphones"
  },
  {
    id: 3,
    title: "Coffee Maker",
    price: 39.99,
    originalPrice: 69.99,
    image: "https://placehold.co/600x400?text=Coffee+Maker",
    description: "12-Cup Programmable Coffee Maker"
  },
  {
    id: 4,
    title: "Gaming Console",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://placehold.co/600x400?text=Gaming+Console",
    description: "Next-gen Gaming Console with Controller"
  }
]

export function Deals() {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

  const handleFavoriteClick = (deal) => {
    if (isFavorite(deal.id)) {
      removeFromFavorites(deal.id)
    } else {
      addToFavorites(deal)
    }
  }

  const calculateDiscount = (original, current) => {
    return Math.round(((original - current) / original) * 100)
  }

  return (
    <PageContainer title="Today's Hot Deals">
      <div className="card-grid">
        {dummyDeals.map((deal) => (
          <motion.div
            key={deal.id}
            className="deal-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <img src={deal.image} alt={deal.title} className="deal-image" />
            <div className="deal-content">
              <h2 className="deal-title">{deal.title}</h2>
              <p className="deal-description">{deal.description}</p>
              <div className="deal-price-container">
                <span className="deal-price">${deal.price}</span>
                <span className="deal-original-price">${deal.originalPrice}</span>
                <span className="deal-discount">
                  {calculateDiscount(deal.originalPrice, deal.price)}% OFF
                </span>
              </div>
              <button
                className={`favorite-button ${isFavorite(deal.id) ? 'is-favorite' : ''}`}
                onClick={() => handleFavoriteClick(deal)}
              >
                {isFavorite(deal.id) ? '❤️ Remove' : '🤍 Favorite'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </PageContainer>
  )
}
