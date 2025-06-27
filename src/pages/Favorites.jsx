import { motion } from 'framer-motion'
import { useFavorites } from '../context/FavoritesContext'
import { PageContainer } from '../components/PageContainer'

export function Favorites() {
  const { favorites, removeFromFavorites } = useFavorites()

  const calculateDiscount = (original, current) => {
    return Math.round(((original - current) / original) * 100)
  }

  return (
    <PageContainer title="Your Favorite Deals">
      {favorites.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="empty-state"
        >
          <h2>No favorites yet!</h2>
          <p>Start adding deals to your favorites to see them here.</p>
        </motion.div>
      ) : (
        <div className="card-grid">
          {favorites.map((deal) => (
            <motion.div
              key={deal.id}
              className="deal-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
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
                  className="favorite-button is-favorite"
                  onClick={() => removeFromFavorites(deal.id)}
                >
                  ❤️ Remove
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </PageContainer>
  )
}
