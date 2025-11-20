import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ currentPage, onNavigate, isAuthenticated, onLogout }) => {
  return (
   <nav className="bg-slate-900 backdrop-blur border-b border-indigo-500/20 sticky top-0 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-pulse-glow">
          DataAPI
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          {!isAuthenticated ? (
            <>
              <Link to={"/login"}
                // onClick={() => onNavigate('login')}
                className={`px-8  py-1 rounded-lg border border-white  font-medium transition-all duration-300 transform hover:scale-105 ${
                  currentPage === 'login'
                    ? 'bg-indigo-500/30 text-indigo-300 border border-indigo-500 animate-scale-in'
                    : 'text-slate-300 hover:text-indigo-300 border border-transparent hover:border-indigo-500/50'
                }`}
              >
                Login
              </Link>
              <Link to={"/register"}
                onClick={() => onNavigate('register')}
                className={`px-6 py-1  border border-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  currentPage === 'register'
                    ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-500 animate-scale-in'
                    : 'text-slate-300 hover:text-emerald-300 border border-transparent hover:border-emerald-500/50'
                }`}
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link to={"/dashboard"}
                onClick={() => onNavigate('dashboard')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  currentPage === 'dashboard'
                    ? 'bg-indigo-500/30 text-indigo-300 border border-indigo-500 animate-scale-in'
                    : 'text-slate-300 hover:text-indigo-300 border border-transparent hover:border-indigo-500/50'
                }`}
              >
                Dashboard
              </Link>
              <button
                onClick={onLogout}
                className="px-4 py-2 text-slate-200 border border-rose-500/30 rounded-lg hover:bg-rose-500/10 hover:text-rose-300 transition-all duration-300 font-medium transform hover:scale-105"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
