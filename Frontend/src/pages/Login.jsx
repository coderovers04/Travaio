import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { login as loginApi } from '../services/api'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const nav = useNavigate()
  const { login } = useAuth()
  const [form, setForm] = React.useState({ email: '', password: '' })
  const [msg, setMsg] = React.useState('')
  const [msgOk, setMsgOk] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    setMsg('Signing in...')
    setMsgOk(true)
    setLoading(true)
    try {
      const res = await loginApi(form)
      login(res.token, res.user)
      setMsg('Welcome back! Redirecting...')
      setMsgOk(true)
      setTimeout(() => nav('/dashboard'), 600)
    } catch (err) {
      setMsg(err.message || 'Login failed.')
      setMsgOk(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="login-container py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LOGIN CARD */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 max-w-md mx-auto w-full">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
              <p className="text-gray-600">Sign in to your Travaio account</p>
            </div>
            <form onSubmit={onSubmit} className="space-y-6" autoComplete="off">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="ri-mail-line w-5 h-5 flex items-center justify-center text-gray-400" />
                  </div>
                  <input
                    type="email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="ri-lock-line w-5 h-5 flex items-center justify-center text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    aria-label="Toggle password visibility"
                    className="password-toggle"
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    <i className={`${showPassword ? 'ri-eye-line' : 'ri-eye-off-line'} w-5 h-5 flex items-center justify-center`} />
                  </button>
                </div>
              </div>

              {/* Message / Errors */}
              <p className={`text-sm text-center h-5 ${msg ? '' : 'invisible'} ${msgOk ? 'text-green-600' : 'text-red-600'}`}>{msg || '.'}</p>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-3 px-6 text-lg font-semibold hover:bg-secondary transition-colors whitespace-nowrap rounded-lg disabled:opacity-70"
              >
                {loading ? (<span className="inline-flex items-center"><i className="ri-loader-4-line animate-spin mr-2" />Signing In...</span>) : 'Sign In'}
              </button>

              {/* Divider + Link */}
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  No account? <Link to="/signup" className="text-primary hover:text-secondary font-semibold transition-colors">Sign Up</Link>
                </p>
              </div>
            </form>
          </div>

          {/* FEATURES CARD */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 floating-card">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-shield-check-line text-white text-3xl" />
                </div>
                <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Quick Access Features</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3"><i className="ri-dashboard-line w-6 h-6 flex items-center justify-center" /><span>Personal travel dashboard</span></div>
                    <div className="flex items-center space-x-3"><i className="ri-notification-3-line w-6 h-6 flex items-center justify-center" /><span>Real-time safety alerts</span></div>
                    <div className="flex items-center space-x-3"><i className="ri-contacts-line w-6 h-6 flex items-center justify-center" /><span>Emergency contact management</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
