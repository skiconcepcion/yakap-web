import { useEffect, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const images = [
  '/login-1.png',
  '/login-2.png',
  '/login-3.png',
]

export default function Login() {
  const [currentImage, setCurrentImage] = useState(0)
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-screen overflow-hidden bg-white p-4 sm:p-5">
      <div className="flex h-full w-full overflow-hidden">


        {/* LEFT IMAGE SECTION */}
        <div className="relative hidden h-full w-[70%] overflow-hidden rounded-[20px] lg:block">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[1500ms] ease-in-out ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>


        {/* RIGHT LOGIN SECTION */}
        <div className="flex h-full w-full items-center justify-center px-6 sm:px-10 lg:w-[30%] lg:px-12">
          <div className="flex h-full w-full max-w-[320px] flex-col justify-between py-12">

            {/* LOGO */}
            <div className="flex justify-center">
              <img src="/logo-alt.png" alt="YAKAP Portal" className="h-7 w-auto"/>
            </div>

            {/* MAIN LOGIN CONTENT */}
            <div>
              <div className="mb-14 text-center">
                <h2 className="text-3xl font-bold leading-sm tracking-tight">
                  Welcome Back
                </h2>

                <p className="mt-2 text-md text-[var(--color-gray-dark)] leading-none">
                  Sign in to access YAKAP Dashboard
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="mb-1 block text-xs font-semibold"
                  >
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

                <div>
                  <label
                    htmlFor="password"
                    className="mb-1 block text-xs font-semibold"
                  >
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
                      aria-label={
                        showPassword ? 'Hide password' : 'Show password'
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={20} strokeWidth={2} />
                      ) : (
                        <Eye size={20} strokeWidth={2} />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-xl bg-[var(--color-primary)] py-4 text-sm font-semibold text-white shadow-md transition hover:bg-[var(--color-primary-hover)]"
                >
                  Login to Account
                </button>
              </form>
            </div>

            {/* SIGN UP */}
            <p className="text-center text-sm">
              Don't have an account?{' '}
              <a href="/signup" className="font-semibold text-[var(--color-primary)] hover:underline">
                Sign Up
              </a>
            </p>

          </div>
        </div>

      </div>
    </div>
  )
}