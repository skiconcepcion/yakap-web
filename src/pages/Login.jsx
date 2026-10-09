import { useState } from 'react'
import { Link } from 'react-router'
import { Eye, EyeOff, UserRound, Lock } from 'lucide-react'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)


  return (
    <div>

      {/* LOGIN HEADER */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold leading-sm tracking-tight">
          Welcome Back
        </h2>

        <p className="text-sm mt-1 text-[var(--color-gray-dark)]">
          Don't have an account?{' '}

          <Link to="/signup" className="group relative font-semibold text-[var(--color-primary)]">
            Register Now
            <span className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[var(--color-primary)] transition-transform duration-200 ease-out group-hover:scale-x-100"/>
          </Link>
        </p>
      </div>


      {/* LOGIN FORM */}
      <form className="space-y-6">

        {/* USERNAME */}
        <div>
          <label htmlFor="username" className="mb-1 block text-xs font-semibold">
            Username
          </label>

          <div className="group relative">
            <UserRound size={18} strokeWidth={2} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-gray-dark)] group-focus-within:text-[var(--color-primary)]"/>

            <input
              id="username"
              name="username"
              type="text"
              placeholder="juandelacruz"
              className="w-full rounded-lg bg-[var(--color-gray-light)] py-4 pl-11 pr-4 text-sm outline-none transition focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div>
          <label htmlFor="password" className="mb-1 block text-xs font-semibold">
            Password
          </label>

          <div className="group relative">
            <Lock size={18} strokeWidth={2} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-gray-dark)] group-focus-within:text-[var(--color-primary)]"/>

            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              className="w-full rounded-lg bg-[var(--color-gray-light)] py-4 pl-11 pr-4 text-sm outline-none transition focus:ring-2 focus:ring-[var(--color-primary)]"
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-[var(--color-primary)]"
              aria-label={ showPassword ? 'Hide password' : 'Show password' }
            >
              {showPassword ? (
                <EyeOff size={20} strokeWidth={2} />
              ) : (
                <Eye size={20} strokeWidth={2} />
              )}
            </button>
          </div>

          <div className="mt-3 text-end">
            <p className="text-xs text-[var(--color-gray-dark)]">
              <Link to="/forgot-password" className="group relative font-semibold text-[var(--color-primary)]">
                Forgot Password?
                <span className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[var(--color-primary)] transition-transform duration-200 ease-out group-hover:scale-x-100"/>
              </Link>
            </p>
          </div>
        </div>

        {/* SUBMIT BUTTON*/}
        <button
          type="submit"
          className="w-full rounded-xl bg-[var(--color-primary)] py-4 text-sm font-semibold text-white shadow-md transition hover:bg-[var(--color-secondary)] mt-1"
        >
          Login to Account
        </button>
      </form>
    </div>
  )
}