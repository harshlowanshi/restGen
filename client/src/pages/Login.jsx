import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

const Login = () => {
  const navigate =useNavigate()
  const dispatch = useDispatch()
  const {user,isLoading ,isSuccess ,isError , message }=useSelector(state=>state.auth)
  const [formData,setFormdata]=useState({
    email:"",
    password:""
  })

  const {email,password}=formData

  const handleChange =(e)=>{
    setFormdata({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(loginUser(formData))
  }

  useEffect(()=>{
     if(user){
      navigate("/")
    }
    if(isError && message){
      toast.error(message,{position:"top-center"})
    }
  },[user,isError,message])

  if(isLoading){
    return(
      <Loader/>
    )
  }

  return (
  <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-slate-900 via-indigo-900/20 to-slate-900 animate-fade-in">
      <div className="w-full max-w-md animate-slide-in">
        <div className="bg-slate-800 border border-indigo-500/40 rounded-xl p-8 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500">
          <h1 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-center text-slate-300 mb-8 text-sm">
            Sign in to your account to continue
          </p>

          <form onSubmit={handleSubmit}  className="space-y-5">
            <div className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name='email'
                value={email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 bg-slate-700/50 border border-indigo-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 transition-all duration-300 hover:border-indigo-500/50"
                required
              />
            </div>

            <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Password
              </label>
              <input
                type="password"
                name='password'
                value={password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 bg-slate-700/50 border border-indigo-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 transition-all duration-300 hover:border-indigo-500/50"
                required
              />
            </div>

            <button
            onClick={handleSubmit}
              type="submit"
              className="w-full py-2.5 px-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-indigo-500/50 transform hover:scale-105 animate-slide-in"
              style={{ animationDelay: '0.3s' }}
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-indigo-500/20">
            <p className="text-center text-slate-400 text-sm">
              Don't have an account?{' '}
              <Link to={"/register"}
                className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors duration-300"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

