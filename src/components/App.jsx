import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import '../App.css'

function App() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser')
    setUser(currentUser ? JSON.parse(currentUser) : null)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    setUser(null)
    navigate('/')
  }

  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/" className="nav-brand">DealFinder</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/deals">Deals</Link>
          <Link to="/favorites">Favorites</Link>
          {!user ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <>
              <span style={{ color: '#fff', fontWeight: 500 }}>
                {user.name} | Wallet: {user.walletPoints} pts
              </span>
              <button className="button" style={{ marginLeft: 12 }} onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
      </nav>

      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="footer">
        <p>© 2025 DealFinder. All rights reserved.</p>
      </footer>

      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
        }}
      />
    </div>
  )
}

export default App
