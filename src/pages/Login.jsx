import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'

export function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!form.email || !form.password) {
      setError('Both fields are required.')
      return
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find(u => u.email === form.email && u.password === form.password)
    if (!user) {
      setError('Invalid email or password.')
      return
    }
    localStorage.setItem('currentUser', JSON.stringify(user))
    navigate('/')
  }

  return (
    <PageContainer title="Login">
      <form className="auth-form" onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
        {error && <div className="auth-error">{error}</div>}
        <button type="submit" className="button">Login</button>
      </form>
    </PageContainer>
  )
}
