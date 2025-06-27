import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageContainer } from '../components/PageContainer'

export function NotFound() {
  return (
    <PageContainer title="Page Not Found">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="empty-state"
      >
        <h2>404 - Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="button" style={{ display: 'inline-block', marginTop: '1rem' }}>
          Return Home
        </Link>
      </motion.div>
    </PageContainer>
  )
}
