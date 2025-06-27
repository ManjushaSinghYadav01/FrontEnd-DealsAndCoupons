import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'

export function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError('All fields are required.')
      return
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    setLoading(true)
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password
        })
      })
      if (!response.ok) {
        const data = await response.json()
        setError(data.message || 'Registration failed.')
        setLoading(false)
        return
      }
      // Registration successful, redirect to login
      setLoading(false)
      navigate('/login')
    } catch (err) {
      setError('Server error. Please try again later.')
      setLoading(false)
    }
  }

  return (
    <PageContainer title="Register">
      <form className="auth-form" onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="password" type="password" placeholder="Create Password" value={form.password} onChange={handleChange} />
        <input name="confirmPassword" type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} />
        {error && <div className="auth-error">{error}</div>}
        <button type="submit" className="button" disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
      </form>
    </PageContainer>
  )
}
