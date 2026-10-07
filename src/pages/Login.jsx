import { useState } from 'react'
import { Link } from 'react-router'
import { Eye, EyeOff } from 'lucide-react'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div>
      {/* MAIN LOGIN CONTENT */}
      <div>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold leading-sm tracking-tight">
            Welcome Back
          </h2>

          <p className="text-center text-sm mt-1 text-[var(--color-gray-dark)]">
            Don't have an account?{' '}

            <Link to="/signup" className="font-semibold text-[var(--color-primary)] hover:underline">
              Register Now
            </Link>
          </p>
        </div>

        <form className="space-y-6">

          {/* USERNAME */}
          <div>
            <label htmlFor="username" className="mb-1 block text-xs font-semibold">
              Username
            </label>

            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              className="w-full rounded-lg bg-[var(--color-gray-light)] px-4 py-4 text-sm outline-none transition focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label htmlFor="password" className="mb-1 block text-xs font-semibold">
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full rounded-lg bg-[var(--color-gray-light)] px-4 py-4 pr-12 text-sm outline-none transition focus:ring-2 focus:ring-[var(--color-primary)]"
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
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full rounded-xl bg-[var(--color-primary)] py-4 text-sm font-semibold text-white shadow-md transition hover:bg-[var(--color-primary-hover)] mt-1"
          >
            Login to Account
          </button>
        </form>
      </div>
    </div>
  )
}