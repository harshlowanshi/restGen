import React, { useState } from 'react'

const Register = ({ onRegister, onToggleLogin }) => {
     const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onRegister();
    }, 500);
  };
  return (
      <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900 animate-fade-in">
      <div className="w-full mt-4 max-w-md animate-slide-in">
        <div className="bg-slate-800 border border-emerald-500/40 rounded-xl p-8 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
          <h1 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
            Create Account
          </h1>
          <p className="text-center text-slate-300 mb-8 text-sm">
            Join us and start building
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-2.5 bg-slate-700/50 border border-emerald-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-300 hover:border-emerald-500/50"
                required
              />
            </div>

            <div className="animate-slide-in" style={{ animationDelay: '0.15s' }}>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 bg-slate-700/50 border border-emerald-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-300 hover:border-emerald-500/50"
                required
              />
            </div>

            <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 bg-slate-700/50 border border-emerald-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-300 hover:border-emerald-500/50"
                required
              />
            </div>

            <div className="animate-slide-in" style={{ animationDelay: '0.25s' }}>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 bg-slate-700/50 border border-emerald-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-300 hover:border-emerald-500/50"
                required
              />
            </div>

            {error && (
              <p className="text-rose-400 text-sm font-medium animate-scale-in">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105 animate-slide-in"
              style={{ animationDelay: '0.3s' }}
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-emerald-500/20">
            <p className="text-center text-slate-400 text-sm">
              Already have an account?{' '}
              <button
                onClick={onToggleLogin}
                className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors duration-300"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

