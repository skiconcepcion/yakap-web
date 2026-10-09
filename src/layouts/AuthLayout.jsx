import { useEffect, useState } from 'react'
import { Outlet, useLocation, Link } from 'react-router'
import { MoveLeft } from 'lucide-react'

const images = [
  '/login-1.png',
  '/login-2.png',
  '/login-3.png',
  '/login-4.jpeg',
]

export default function AuthLayout() {
  const { pathname } = useLocation()

  const [currentImage, setCurrentImage] = useState(0)

  const isSignup = pathname === '/signup'
  const isForgotPassword = pathname === '/forgot-password'
  const imageWidth = isForgotPassword ? 65 : isSignup ? 45 : 70

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])


  return (
    <div className="min-h-screen overflow-x-hidden bg-white p-4 sm:p-5">
      <div className="flex min-h-[calc(100vh-2rem)] w-full sm:min-h-[calc(100vh-2.5rem)]">

        {/* IMAGE */}
        <div style={{ width: `${imageWidth}%` }} className="relative min-h-[calc(100vh-2rem)] shrink-0 overflow-hidden rounded-[20px] transition-[width] duration-700 ease-in-out sm:min-h-[calc(100vh-2.5rem)]">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[1500ms] ease-in-out ${ index === currentImage ? 'opacity-100' : 'opacity-0' }`}
            />
          ))}

          {/* LOGO */}
          <div className="absolute left-6 top-6 z-10">
            <div className="absolute -inset-8 rounded-full bg-white/95 blur-2xl" />
            <img src="/logo.png" alt="YAKAP Portal" className="relative h-20 w-auto"/>
          </div>
        </div>

        {/* FORM AREA */}
        <div style={{ width: `${100 - imageWidth}%` }} className="flex min-w-0 shrink-0 items-center justify-center transition-[width] duration-700 ease-in-out">
          <div className="flex min-h-[calc(100vh-2rem)] w-full max-w-[800px] flex-col justify-between px-8 py-8 sm:min-h-[calc(100vh-2.5rem)] sm:px-10 lg:px-12">

            { isSignup ? null : <div /> }

            <Outlet />

            {/* PRIVACY AND TERMS */}
            { isForgotPassword                
                ? <div className="text-sm text-center">
                    <Link to="/" className="group inline-flex items-center justify-center gap-2 font-semibold text-[var(--color-primary)]">
                      <MoveLeft size={18} strokeWidth={3} className="shrink-0 transition-transform duration-200 group-hover:-translate-x-1"/>

                      <span className="relative">
                        Back to Login Page
                        <span className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[var(--color-primary)] transition-transform duration-200 ease-out group-hover:scale-x-100" />
                      </span>
                    </Link>
                  </div>

                : <p className="text-center text-sm">
                    By continuing, you agree to our{' '}

                    <Link to="/privacy-policy" className="group relative font-semibold text-[var(--color-primary)]">
                      Privacy Policy
                      <span className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[var(--color-primary)] transition-transform duration-200 ease-out group-hover:scale-x-100" />
                    </Link>

                    {' '}and{' '}

                    <Link to="/terms-of-service" className="group relative font-semibold text-[var(--color-primary)]">
                      Terms of Service
                      <span className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[var(--color-primary)] transition-transform duration-200 ease-out group-hover:scale-x-100" />
                    </Link>

                    .
                  </p>
            }
          </div>
        </div>

      </div>
    </div>
  )
}