import { useEffect, useState } from 'react'

const images = [
  '/login-1.png',
  '/login-2.png',
  '/login-3.png',
]

function Login() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white p-6 md:p-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-[1400px] overflow-hidden rounded-[24px]">

        {/* LEFT IMAGE SECTION */}
        <div className="relative hidden w-[70%] overflow-hidden lg:block">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
                index === currentImage
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
            />
          ))}

          {/* Optional dark overlay */}
          <div className="absolute inset-0 bg-black/5" />
        </div>

        {/* RIGHT LOGIN SECTION */}
        <div className="flex w-full items-center justify-center px-8 sm:px-12 lg:w-[30%] lg:px-12">
          <div className="w-full max-w-[320px]">

            {/* LOGO */}
            <div className="mb-16 flex justify-center">
              <img
                src="/logo-alt.png"
                alt="YAKAP Portal"
                className="h-10 w-auto"
              />
            </div>

            {/* HEADING */}
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#252525]">
                Welcome Back
              </h2>

              <p className="mt-2 text-sm text-[#252525]">
                Sign in to access YAKAP Dashboard
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-6">

              {/* USERNAME */}
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-xs font-semibold text-[#252525]"
                >
                  Username
                </label>

                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  className="w-full rounded-xl bg-[#f5f5f6] px-4 py-4 text-sm text-[#252525] outline-none transition focus:ring-2 focus:ring-[#4f7658]/30"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-xs font-semibold text-[#252525]"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-xl bg-[#f5f5f6] px-4 py-4 pr-12 text-sm text-[#252525] outline-none transition focus:ring-2 focus:ring-[#4f7658]/30"
                  />

                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-[#4d7657] py-4 text-sm font-semibold text-white shadow-md transition hover:bg-[#416649] active:scale-[0.99]"
              >
                Login to Account
              </button>
            </form>

            {/* SIGN UP */}
            <p className="mt-20 text-center text-xs text-[#252525]">
              Don't have an account?{' '}
              <a
                href="/signup"
                className="font-semibold text-[#4d7657] hover:underline"
              >
                Sign Up
              </a>
            </p>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Login