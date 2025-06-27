import { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites')
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  const addToFavorites = (deal) => {
    if (favorites.some(fav => fav.id === deal.id)) {
      toast.error('Deal is already in favorites!')
      return
    }
    
    const newFavorites = [...favorites, deal]
    setFavorites(newFavorites)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
    toast.success('Added to favorites!')
  }

  const removeFromFavorites = (dealId) => {
    const newFavorites = favorites.filter(fav => fav.id !== dealId)
    setFavorites(newFavorites)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
    toast.success('Removed from favorites')
  }

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite: (dealId) => favorites.some(fav => fav.id === dealId)
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}
