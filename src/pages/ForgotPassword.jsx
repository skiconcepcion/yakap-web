import { Mail } from 'lucide-react'


export default function ForgotPassword() {

  return (
    <div>

      {/* FORGOT PASSWORD HEADER */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold leading-sm tracking-tight">
          Forgot Password?
        </h2>

        <p className="text-center text-sm mt-1 text-[var(--color-gray-dark)]">
          Enter the email address associated with your account<br/>to receive temporary password.
        </p>
      </div>


      {/* FORGOT PASSWORD FORM */}
      <form className="space-y-6">

        {/* EMAIL */}
        <div>
          <label htmlFor="email" className="mb-1 block text-xs font-semibold">
            Email Adress
          </label>

          <div className="group relative">
            <Mail size={18} strokeWidth={2} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-gray-dark)] group-focus-within:text-[var(--color-primary)]"/>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="juandelacruz@gmail.com"
              className="w-full rounded-lg bg-[var(--color-gray-light)] py-4 pl-11 pr-4 text-sm outline-none transition focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>
        </div>


        {/* SUBMIT BUTTON*/}
        <button
          type="submit"
          className="w-full rounded-xl bg-[var(--color-primary)] py-4 text-sm font-semibold text-white shadow-md transition hover:bg-[var(--color-secondary)] mt-1"
        >
          Send Email
        </button>
      </form>
    </div>
  )
}