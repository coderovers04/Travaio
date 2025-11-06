import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import LogoImg from '../../travaio_nobg.png'

export default function Header() {
  const { token, user, logout } = useAuth()
  const nav = useNavigate()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const goto = (target) => {
    if (target.startsWith('#')) {
      const id = target.replace('#', '')
      if (location.pathname === '/') {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        nav('/' + target)
      }
      setMobileOpen(false)
    } else {
      nav(target)
      setMobileOpen(false)
    }
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-teal-800 flex items-center justify-center overflow-hidden">
              <img src={LogoImg} alt="Travaio" className="w-10 h-10 object-contain" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-teal-600">Travaio</h1>
              <p className="text-xs text-gray-600">Because Peace of Mind Should Travel Too</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => goto('/')} className="text-gray-700 hover:text-teal-600">Home</button>
            <button onClick={() => goto('#services')} className="text-gray-700 hover:text-teal-600">Services</button>
            <button onClick={() => goto('#safety')} className="text-gray-700 hover:text-teal-600">Safety Features</button>
            <button onClick={() => goto('/about')} className="text-gray-700 hover:text-teal-600">About</button>
            <button onClick={() => goto('/contact')} className="text-gray-700 hover:text-teal-600">Contact</button>
            {token && <button onClick={() => goto('/dashboard')} className="text-gray-700 hover:text-teal-600">Dashboard</button>}
          </nav>

          <div className="flex items-center space-x-2">
            {token ? (
              <>
                <span className="hidden sm:inline text-sm text-gray-700 mr-2">{user?.name || user?.email}</span>
                <button onClick={() => { logout(); nav('/login') }} className="bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-800 text-sm">Logout</button>
              </>
            ) : (
              <>
                <button onClick={() => goto('/login')} className="text-gray-700 hover:text-teal-500 px-4 py-2 rounded-lg">Login</button>
                <button onClick={() => goto('/signup')} className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600">Sign Up</button>
              </>
            )}
            <button className="md:hidden w-9 h-9 flex items-center justify-center" onClick={() => setMobileOpen((v) => !v)}>
              <span className="sr-only">Toggle menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-700">
                <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6.75a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm.75 6a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <button onClick={() => goto('/')} className="text-left px-2 py-2 rounded hover:bg-gray-50">Home</button>
              <button onClick={() => goto('#services')} className="text-left px-2 py-2 rounded hover:bg-gray-50">Services</button>
              <button onClick={() => goto('#safety')} className="text-left px-2 py-2 rounded hover:bg-gray-50">Safety Features</button>
              <button onClick={() => goto('/about')} className="text-left px-2 py-2 rounded hover:bg-gray-50">About</button>
              <button onClick={() => goto('/contact')} className="text-left px-2 py-2 rounded hover:bg-gray-50">Contact</button>
              {token && <button onClick={() => goto('/dashboard')} className="text-left px-2 py-2 rounded hover:bg-gray-50">Dashboard</button>}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

