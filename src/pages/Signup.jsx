import { useState } from 'react'
import { Link } from 'react-router'
import { ChevronDown, ChevronRight, Eye, EyeOff } from 'lucide-react'

export default function Signup() {
  const [password, setPassword] = useState('')
  const [facility, setFacility] = useState('')
  const [department, setDepartment] = useState('')

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)


  /* FACILITIES HELPERS */
  const facilities = {
    'facility-a': {
      name: 'Facility A (Hospital)',
      departments: [
        'Pharmacy',
        'Laboratory',
        'Consultation',
      ],
    },

    'facility-b': {
      name: 'Facility B (Stand-alone Pharmacy)',
      departments: [],
    },

    'facility-c': {
      name: 'Facility C (Stand-alone Laboratory)',
      departments: [],
    },
  }

  const selectedFacility = facilities[facility]

  const handleFacilityChange = (e) => {
    const value = e.target.value
    setFacility(value)
    setDepartment('')
  }

  
  /* PASSWORD HELPERS */
  const getPasswordStrength = (password) => {
    let score = 0

    if (password.length >= 8) score++
    if (/[A-Z]/.test(password)) score++
    if (/[0-9]/.test(password)) score++
    if (/[^A-Za-z0-9]/.test(password)) score++

    return score
  }

  const passwordStrength = getPasswordStrength(password)
  const strengthLabel = ['Weak', 'Fair', 'Good', 'Strong'][passwordStrength - 1] || 'Very Weak'


  return (
    <div>

      {/* SIGNUP HEADER */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold leading-sm tracking-tight">
          Create Account
        </h2>

        <p className="text-center text-sm mt-1 text-[var(--color-gray-dark)]">
          Already have an account?{' '}

          <Link to="/" className="group relative font-semibold text-[var(--color-primary)]">
            Login to Account
            <span className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[var(--color-primary)] transition-transform duration-200 ease-out group-hover:scale-x-100"/>
          </Link>
        </p>
      </div>


      {/* SIGNUP FORM */}
      <form className="space-y-6">

        {/* EMAIL + USERNAME */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-xs font-semibold">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg bg-[var(--color-gray-light)] px-4 py-4 text-sm outline-none transition focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div>
            <label htmlFor="username"  className="mb-1 block text-xs font-semibold">
              Username
            </label>

            <input
              id="username"
              name="username"
              type="text"
              placeholder="Create your username"
              className="w-full rounded-lg bg-[var(--color-gray-light)] px-4 py-4 text-sm outline-none transition focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-number" className="mb-1 block text-xs font-semibold">
              Contact Number
            </label>

            <input
              id="contact-number"
              name="contact-number"
              type="tel"
              placeholder="Enter your contact number"
              className="w-full rounded-lg bg-[var(--color-gray-light)] px-4 py-4 text-sm outline-none transition focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>
        </div>

        {/* FACILITY + DEPARTMENT */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="facility" className="mb-1 block text-xs font-semibold">
              Facility
            </label>

            <div className="relative">
              <select
                id="facility"
                name="facility"
                value={facility}
                onChange={handleFacilityChange}
                className="w-full appearance-none rounded-lg bg-[var(--color-gray-light)] px-4 py-4 pr-11 text-sm outline-none transition focus:ring-2 focus:ring-[var(--color-primary)]"
              >
                <option value="" disabled>
                  Select a facility
                </option>

                {Object.entries(facilities).map(([value, data]) => (
                  <option key={value} value={value}>
                    {data.name}
                  </option>
                ))}
              </select>

              <ChevronDown
                size={18}
                strokeWidth={2}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-gray-dark)]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="department" className="mb-1 block text-xs font-semibold">
              Department
            </label>

            <div className="relative">
              <select
                id="department"
                name="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                disabled={ !facility || !selectedFacility || selectedFacility.departments.length === 0 }
                className={`w-full appearance-none rounded-lg px-4 py-4 pr-11 text-sm outline-none transition focus:ring-2 focus:ring-[var(--color-primary)] ${
                  !facility || !selectedFacility || selectedFacility.departments.length === 0 ? 'cursor-not-allowed bg-gray-100 text-gray-400' : 'bg-[var(--color-gray-light)]'
                }`}
              >
                <option value="" disabled>
                  {!facility
                    ? 'Select a facility first'
                    : selectedFacility.departments.length === 0
                      ? 'No departments available'
                      : 'Select a department'}
                </option>

                {selectedFacility?.departments.map((departmentName) => (
                  <option key={departmentName} value={departmentName}>
                    {departmentName}
                  </option>
                ))}
              </select>

              <ChevronDown
                size={18}
                strokeWidth={2}
                className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 ${
                  !facility || !selectedFacility || selectedFacility.departments.length === 0 ? 'text-gray-400' : 'text-[var(--color-gray-dark)]'
                }`}
              />
            </div>
          </div>
        </div>

        {/* PASSWORD + CONFIRM PASSWORD */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="password" className="mb-1 block text-xs font-semibold">
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg bg-[var(--color-gray-light)] px-4 py-4 text-sm outline-none transition focus:ring-2 focus:ring-[var(--color-primary)]"
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

            <div className="mt-2 flex items-center justify-between gap-4">
              <div className="flex flex-1 gap-1.5">
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                      bar <= passwordStrength
                        ? passwordStrength === 1
                          ? 'bg-red-500'
                          : passwordStrength === 2
                            ? 'bg-orange-500'
                            : passwordStrength === 3
                              ? 'bg-yellow-500'
                              : 'bg-[var(--color-primary)]'
                        : 'bg-[var(--color-gray-dark)]'
                    }`}
                  />
                ))}
              </div>

              <span
                className={`min-w-[90px] text-right text-xs font-medium transition-colors duration-300 ${
                  passwordStrength === 1
                    ? 'text-red-500'
                    : passwordStrength === 2
                      ? 'text-orange-500'
                      : passwordStrength === 3
                        ? 'text-yellow-500'
                        : passwordStrength === 4
                          ? 'text-green-500'
                          : 'text-[var(--color-gray-dark)]'
                }`}
              >
                {password ? strengthLabel : 'Password'}
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="confirm-password" className="mb-1 block text-xs font-semibold">
              Confirm Password
            </label>

            <div className="relative">
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                placeholder="Confirm your password"
                className="w-full rounded-lg bg-[var(--color-gray-light)] px-4 py-4 text-sm outline-none transition focus:ring-2 focus:ring-[var(--color-primary)]"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-[var(--color-primary)]"
                aria-label={ showConfirmPassword ? 'Hide password' : 'Show password' }
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} strokeWidth={2} />
                ) : (
                  <Eye size={20} strokeWidth={2} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="mt-1 flex w-full items-center justify-center gap-1 rounded-xl bg-[var(--color-primary)] py-4 text-sm font-semibold text-white shadow-md transition hover:bg-[var(--color-primary-hover)]"
        >
          Create Account
          <ChevronRight size={18} strokeWidth={3} className="pointer-events-none"/>
        </button>  

      </form>
    </div>
  )
}