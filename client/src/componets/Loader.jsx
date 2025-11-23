import React from 'react'
import { useSelector } from 'react-redux'

const Loader = () => {
        const {user,isLoading ,isSuccess ,isError , message }=useSelector(state=>state.auth)
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-card border border-border rounded-lg p-8 text-center animate-scale-in">
        <div className="flex justify-center mb-4">
          <div className="relative w-16 h-16">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-500 border-r-purple-500 animate-spin"></div>

            {/* Middle rotating ring with offset */}
            <div
              className="absolute inset-2 rounded-full border-4 border-transparent border-b-pink-500 border-l-emerald-500 animate-spin"
              style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
            ></div>

            {/* Inner pulsing dot */}
            <div className="absolute inset-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse"></div>
          </div>
        </div>

        {/* Loading text */}
        <p className="text-foreground font-semibold">{!user ? "":"Generating API data..."}</p>

        <div className="mt-4 flex justify-center gap-1">
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></span>
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
          <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
        </div>
      </div>
    </div>
  )
}

export default Loader
