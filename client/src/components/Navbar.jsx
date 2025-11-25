import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logOutUser } from '../features/auth/authSlice'

const Navbar = ({ currentPage }) => {
  const navigate = useNavigate()
  const dispatch=useDispatch()
    const {user}=useSelector(state=>state.auth)

    const logout =()=>{
navigate("/login")
dispatch(logOutUser())
    }


    return (
   <nav className="bg-slate-900 backdrop-blur border-b border-indigo-500/20 sticky top-0 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to={'/'} className="text-2xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#46EDD5] via-[#46EDD5] to-[#46EDD5] cursor-pointer ">
          RestGen
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <Link to={"/login"}
                // onClick={() => onNavigate('login')}
                className={`px-6  py-[0.2em] rounded-lg border border-white  font-medium transition-all duration-300 transform hover:scale-105 ${
                  currentPage === 'login'
                    ? 'bg-indigo-500/30 text-indigo-300 border border-indigo-500 animate-scale-in'
                    : 'text-slate-300 hover:text-indigo-300 border border-transparent hover:border-indigo-500/50'
                }`}
              >
                Login
              </Link>
              <Link to={"/register"}
                className={`px-6 py-[0.2em]  border border-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
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
              <Link to={"/"}
                className={`px-4 py-[0.2em] rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  currentPage === 'dashboard'
                    ? 'bg-indigo-500/30 text-indigo-300 border border-indigo-500 animate-scale-in'
                    : 'text-slate-300 hover:text-indigo-300 border border-white hover:border-indigo-500/50'
                }`}
              >
                Dashboard
              </Link>
              <button
              onClick={()=>logout()}
                className="px-3 py-[0.2em] text-slate-200 border border-rose-500/30 rounded-lg hover:bg-rose-500/10 hover:text-rose-300 transition-all duration-300 font-medium cursor-pointer transform hover:scale-105"
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
