import { useEffect, useState } from 'react'
import { Outlet, useLocation, Link } from 'react-router'

const images = [
  '/login-1.png',
  '/login-2.png',
  '/login-3.png',
  '/login-4.jpeg',
]

export default function AuthLayout() {
  const location = useLocation()

  const [currentImage, setCurrentImage] = useState(0)

  const isSignup = location.pathname === '/signup'

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-screen overflow-hidden bg-white p-4 sm:p-5">
      <div className="flex h-full w-full">

        {/* IMAGE */}
        <div
          className={`relative h-full shrink-0 overflow-hidden rounded-[20px] transition-[width] duration-700 ease-in-out ${
            isSignup ? 'w-[45%]' : 'w-[70%]'
          }`}
        >
          {/* IMAGES */}
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[1500ms] ease-in-out ${
                index === currentImage
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
            />
          ))}

          {/* LOGO */}
          <div className="absolute left-6 top-6 z-10">
            {/* Strong white glow */}
            <div className="absolute -inset-8 rounded-full bg-white/95 blur-2xl" />

            <img
              src="/logo.png"
              alt="YAKAP Portal"
              className="relative h-20 w-auto"
            />
          </div>
        </div>

        {/* FORM AREA */}
        <div
          className={`flex h-full min-w-0 items-center justify-center transition-[width] duration-700 ease-in-out ${
            isSignup ? 'w-[55%]' : 'w-[30%]'
          }`}
        >
          <div className="flex h-full w-full max-w-[800px] flex-col justify-between px-8 py-8 sm:px-10 lg:px-12">

            { isSignup ? null : <div/> }

            {/* PAGE CONTENT */}
            <Outlet />

            {/* SIGN UP / LOGIN */}
            <p className="text-center text-sm">
              By continuing, you agree to our {' '}

              <Link to="/privacy-policy" className="font-semibold text-[var(--color-primary)] hover:underline tracking-tight">
                Privacy Policy
              </Link>

              {' '} and {' '}

              <Link to="/terms-of-service" className="font-semibold text-[var(--color-primary)] hover:underline tracking-tight">
                Terms of Service
              </Link>

              .
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}