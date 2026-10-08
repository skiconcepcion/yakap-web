import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { MoveLeft } from 'lucide-react'

const images = [
  '/login-1.png',
  '/login-2.png',
  '/login-3.png',
  '/login-4.jpeg',
]

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'acceptance', label: 'Acceptance of Terms' },
  { id: 'eligibility', label: 'Eligibility and Account Registration' },
  { id: 'use', label: 'Use of the YAKAP Portal' },
  { id: 'orders-payments-transactions', label: 'Orders, Payments, and Transactions' },
  { id: 'user-responsibilities', label: 'User Responsibilities' },
  { id: 'intellectual-property', label: 'Intellectual Property' },
  { id: 'third-party', label: 'Third-Party Services' },
  { id: 'suspension', label: 'Suspension and Termination' },
  { id: 'disclaimers', label: 'Disclaimers and Limitations of Liability' },
  { id: 'changes', label: 'Changes to These Terms' },
  { id: 'governing-law', label: 'Governing Law' },
  { id: 'contact', label: 'How to Contact Us' },
]

export default function TermsOfService() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white p-4 sm:p-5">
      <div className="mx-auto w-full max-w-[1400px]">

        {/* HERO IMAGE */}
        <div className="mx-auto relative h-[280px] overflow-hidden rounded-[20px] sm:h-[340px] lg:h-[400px] w-full max-w-[1200px]">

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

          {/* BACK BUTTON */}
          <Link to="/" className="absolute left-6 top-6 z-10 flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-[var(--color-secondary)] hover:shadow-md">
            <MoveLeft size={18} strokeWidth={2} className="pointer-events-none"/>
            Back
          </Link>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Terms of Service
            </h1>

            <p className="mt-2 text-md font-medium text-white">
              LAST UPDATE: October 08, 2026
            </p>
          </div>

        </div>


        {/* CONTENT + TABLE OF CONTENTS */}
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-12 px-4 py-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:px-8">

          {/* RIGHT — TABLE OF CONTENTS */}
          <aside className="order-first lg:order-last lg:sticky lg:top-8 lg:self-start">
            <div className="border-l border-gray-200 pl-6">
              <h3 className="text-sm font-bold">
                Table of Contents
              </h3>

              <nav className="mt-4">
                <ul className="space-y-1">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="block rounded-md px-3 py-2 text-sm text-[var(--color-gray-dark)] transition-colors hover:bg-gray-50 hover:text-[var(--color-primary)]">
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* LEFT — POLICY CONTENT */}
          <main className="order-last min-w-0 lg:order-first">

            {/* INTRODUCTION */}
            <section id="introduction" className="scroll-mt-8">
              <h2 className="text-2xl font-bold">
                Introduction
              </h2>

              <div className="mt-4 space-y-4 leading-7">
                <p>
                  These Terms of Service (“Terms”) govern your access to and use of the
                  YAKAP Portal Web App. By accessing, registering for, or using the YAKAP Portal,
                  you acknowledge that you have read, understood, and agree to be bound by these Terms.
                  These Terms establish the rules, conditions, and responsibilities that apply to your
                  use of the website, its features, services, and functionalities (collectively, our “Platforms”).
                </p>

                <p>
                  Please note that these Terms only pertain to your use of the YAKAP Portal
                  and the information and/or functionalities offered on the Platform.
                </p>

                <p>
                  This Terms describes:
                </p>

                <ul className="pl-8 space-y-2">
                  <li>A. Acceptance of Terms</li>
                  <li>B. Eligibility and Account Registration</li>
                  <li>C. Use of the YAKAP Portal</li>
                  <li>D. Orders, Payments, and Transactions</li>
                  <li>E. User Responsibilities</li>
                  <li>F. Intellectual Property</li>
                  <li>G. Third-Party Services</li>
                  <li>H. Suspension and Termination</li>
                  <li>I. Disclaimers and Limitations of Liability</li>
                  <li>J. Changes to These Terms</li>
                  <li>K. Governing Law</li>
                  <li>L. How to Contact Us</li>
                </ul>
              </div>
            </section>


            {/* INFORMATION WE COLLECT */}
            <section id="acceptance" className="mt-12 scroll-mt-8">
              <h2 className="text-2xl font-bold">
                A. ACCEPTANCE OF TERMS
              </h2>

              <div className="mt-4 space-y-4 leading-7">
                <p>
                  By accessing or using the YAKAP Portal Web App, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms of Service (“Terms”),
                  as well as any applicable policies and guidelines referenced herein.
                  If you do not agree with these Terms, you should not access or use the YAKAP Portal.
                </p>

                <p>
                  These Terms apply to all users who access or use the YAKAP Portal, including
                  registered users and other authorized users. Your continued use of the Platform
                  following any updates to these Terms constitutes your acceptance of the revised Terms.
                </p>
              </div>
            </section>


            {/* INFORMATION WE COLLECT */}
            <section id="eligibility" className="mt-12 scroll-mt-8">
              <h2 className="text-2xl font-bold">
                B. ELIGIBILITY AND ACCOUNT REGISTRATION
              </h2>

              <div className="mt-4 space-y-4 leading-7">
                <p>
                  Access to certain features and functionalities of the YAKAP Portal may require you
                  to create and maintain an account. You agree to provide accurate, complete, and up-to-date
                  information during registration and to keep such information updated when necessary.
                </p>

                <p>
                  You are responsible for maintaining the confidentiality of your account credentials
                  and for all activities conducted through your account. You must not share your account
                  credentials with unauthorized individuals or allow others to access your account.
                </p>

                <p>
                  If you believe that your account has been accessed or used without authorization,
                  you should promptly notify the appropriate YAKAP Portal administrator.
                </p>

                <p>
                  We reserve the right to restrict, suspend, or terminate accounts that contain
                  inaccurate information, are used improperly, or otherwise violate these Terms.
                </p>
              </div>
            </section>


            {/* INFORMATION WE COLLECT */}
            <section id="use" className="mt-12 scroll-mt-8">
              <h2 className="text-2xl font-bold">
                C. USE OF THE YAKAP PORTAL
              </h2>

              <div className="mt-4 space-y-4 leading-7">
                <p>
                  The YAKAP Portal is intended to provide users with access to its available services,
                  information, account features, transactions, and other authorized functionalities.
                </p>

                <p>
                  You agree to use the Platform only for lawful and legitimate purposes and in
                  accordance with these Terms. You must not use the Platform in any manner that may
                  interfere with its operation, compromise its security, or negatively affect other users.
                </p>

                <p>
                  You must not attempt to gain unauthorized access to any account, system, database,
                  or functionality of the YAKAP Portal. You must also not introduce malicious software,
                  conduct unauthorized automated activities, or otherwise attempt to disrupt or compromise the Platform.
                </p>
              </div>
            </section>


            {/* INFORMATION WE COLLECT */}
            <section id="orders-payments-transactions" className="mt-12 scroll-mt-8">
              <h2 className="text-2xl font-bold">
                D. ORDERS, PAYMENTS, AND TRANSACTIONS
              </h2>

              <div className="mt-4 space-y-4 leading-7">
                <p>
                  The YAKAP Portal may allow users to submit quotations, orders, payment information,
                  payment documents, and other transaction-related information through the Platform.
                </p>

                <p>
                  You are responsible for reviewing the details of your transactions before submitting them and
                  for ensuring that all information and documents provided are accurate, complete, and authentic.
                </p>

                <p>
                  Submission of an order or transaction does not necessarily constitute final acceptance
                  or confirmation. Orders, payments, quotations, and other transactions may be subject
                  to verification, approval, availability, and applicable policies.
                </p>

                <p>
                  Any payment information or proof of payment submitted through the Platform must be truthful
                  and must correspond to the transaction for which it is provided. We reserve the right to review,
                  reject, suspend, or cancel transactions where information is incomplete, inaccurate,
                  unauthorized, or reasonably suspected to be fraudulent.
                </p>
              </div>
            </section>


            {/* INFORMATION WE COLLECT */}
            <section id="user-responsibilities" className="mt-12 scroll-mt-8">
              <h2 className="text-2xl font-bold">
                E. USER RESPONSIBILITIES
              </h2>

              <div className="mt-4 space-y-4 leading-7">
                <p>
                  When using the YAKAP Portal, you are responsible for:
                </p>

                <ul className="pl-8 space-y-2">
                  <li>1. Providing accurate and complete information;</li>
                  <li>2. Maintaining the security of your account credentials;</li>
                  <li>3. Reviewing transaction and account information before submitting or confirming it;</li>
                  <li>4. Uploading only authentic and authorized documents;</li>
                  <li>5. Using the Platform in accordance with applicable laws and regulations;</li>
                  <li>6. Maintaining the confidentiality of information made available to you through the Platform; and</li>
                  <li>7. Promptly reporting suspected unauthorized access, security issues, or misuse of your account.</li>
                </ul>
              </div>
            </section>


            {/* INFORMATION WE COLLECT */}
            <section id="intellectual-property" className="mt-12 scroll-mt-8">
              <h2 className="text-2xl font-bold">
                F. INTELLECTUAL PROPERTY
              </h2>

              <div className="mt-4 space-y-4 leading-7">
                <p>
                  The YAKAP Portal and its content, including but not limited to its design, interface, text,
                  graphics, logos, trademarks, software, databases, and other materials, are owned by or licensed
                  to the organization operating the Platform and are protected by applicable intellectual property laws.
                </p>

                <p>
                  You may access and use the Platform only for its intended purposes. You may not reproduce, modify,
                  distribute, publish, transmit, sell, or otherwise exploit any portion of the Platform or its content
                  without prior authorization, except where permitted by applicable law.
                </p>

                <p>
                  Nothing in these Terms grants you ownership or any other rights to the Platform or its intellectual
                  property beyond the limited right to use the Platform in accordance with these Terms.
                </p>
              </div>
            </section>


            {/* INFORMATION WE COLLECT */}
            <section id="third-party" className="mt-12 scroll-mt-8">
              <h2 className="text-2xl font-bold">
                G. THIRD-PARTY SERVICES
              </h2>

              <div className="mt-4 space-y-4 leading-7">
                <p>
                  The YAKAP Portal may use or provide access to third-party services, platforms,
                  applications, or content to support certain features or functionalities.
                </p>

                <p>
                  Third-party services may be governed by their own terms of service and privacy policies.
                  We are not responsible for the policies, availability, security, or practices of
                  third-party services that are outside our control.
                </p>

                <p>
                  Your use of any third-party service through or in connection with the YAKAP Portal may
                  therefore be subject to the applicable terms and policies of that third party.
                </p>
              </div>
            </section>


            {/* INFORMATION WE COLLECT */}
            <section id="suspension" className="mt-12 scroll-mt-8">
              <h2 className="text-2xl font-bold">
                H. SUSPENSION AND TERMINATION
              </h2>

              <div className="mt-4 space-y-4 leading-7">
                <p>
                  We reserve the right to suspend, restrict, or terminate your access to the
                  YAKAP Portal, in whole or in part, when reasonably necessary, including when you
                  violate these Terms, engage in unauthorized or fraudulent activities,
                  misuse the Platform, or pose a security or operational risk.
                </p>

                <p>
                  We may also restrict or terminate access when required by applicable law,
                  regulation, or legitimate operational requirements.
                </p>

                <p>
                  If your account or access is terminated, you must cease using the Platform
                  and must not attempt to regain access through unauthorized means.
                </p>

                <p>
                  Termination of access does not affect any rights, obligations, or responsibilities
                  that arose before termination or that are intended to survive termination under these Terms.
                </p>
              </div>
            </section>


            {/* INFORMATION WE COLLECT */}
            <section id="disclaimers" className="mt-12 scroll-mt-8">
              <h2 className="text-2xl font-bold">
                I. DISCLAIMERS AND LIMITATIONS OF LIABILITY
              </h2>

              <div className="mt-4 space-y-4 leading-7">
                <p>
                  The YAKAP Portal is provided for its intended business and operational purposes.
                  While we make reasonable efforts to maintain the accuracy, security, availability,
                  and functionality of the Platform, we do not guarantee that the Platform will always
                  be available, uninterrupted, error-free, or free from security vulnerabilities.
                </p>

                <p>
                  The Platform may occasionally be unavailable due to maintenance, technical issues,
                  system updates, connectivity problems, or circumstances beyond our reasonable control.
                </p>

                <p>
                  To the extent permitted by applicable law, we shall not be responsible for losses
                  or damages arising from unauthorized access caused by circumstances beyond our reasonable
                  control, interruptions to the Platform, or a user's failure to comply with these Terms.
                </p>

                <p>
                  Nothing in these Terms is intended to exclude or limit any liability
                  that cannot legally be excluded or limited under applicable law.
                </p>
              </div>
            </section>


            {/* INFORMATION WE COLLECT */}
            <section id="changes" className="mt-12 scroll-mt-8">
              <h2 className="text-2xl font-bold">
                J. CHANGES TO THESE TERMS
              </h2>

              <div className="mt-4 space-y-4 leading-7">
                <p>
                  We may update or modify these Terms from time to time to reflect changes to the
                  YAKAP Portal, our services, operational practices, or applicable laws and regulations.
                </p>

                <p>
                  When changes are made, the updated Terms will be posted on this page together with
                  a revised “Last Updated” date. Your continued use of the YAKAP Portal after the updated
                  Terms become effective constitutes your acknowledgment and acceptance of the changes.
                </p>

                <p>
                  We encourage you to review these Terms periodically to remain informed
                  about the conditions governing your use of the Platform.
                </p>
              </div>
            </section>


            {/* INFORMATION WE COLLECT */}
            <section id="governing-law" className="mt-12 scroll-mt-8">
              <h2 className="text-2xl font-bold">
                K. GOVERNING LAW
              </h2>

              <div className="mt-4 space-y-4 leading-7">
                <p>
                  These Terms shall be governed by and interpreted in accordance with the applicable
                  laws of the Republic of the Philippines, without regard to its conflict-of-law principles.
                </p>

                <p>
                  Any disputes arising from or relating to your use of the YAKAP Portal or these Terms
                  shall be subject to the applicable laws, rules, and regulations of the Republic of
                  the Philippines and the appropriate courts or authorities with jurisdiction.
                </p>
              </div>
            </section>


            {/* INFORMATION WE COLLECT */}
            <section id="contact" className="mt-12 scroll-mt-8">
              <h2 className="text-2xl font-bold">
                L, HOW TO CONTACT US
              </h2>

              <div className="mt-4 space-y-4 leading-7">
                <p>
                  If you have questions, concerns, or requests regarding these Terms of Service
                  or your use of the YAKAP Portal, you may contact the organization or authorized
                  administrator through the official contact information provided on the Platform.
                </p>

                <p>
                  We encourage users to contact us promptly regarding any concerns involving
                  their account, transactions, unauthorized access, or suspected misuse of the YAKAP Portal.
                </p>
              </div>
            </section>

          </main>
        </div>


        {/* FOOTER */}
        <div className="py-8 text-center">
          <p className="text-sm text-[var(--color-gray-dark)]">
            <Link to="/" className="group relative font-semibold text-[var(--color-primary)]">
              Go Back to Login Page
              <span className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[var(--color-primary)] transition-transform duration-200 ease-out group-hover:scale-x-100"/>
            </Link>
          </p>
        </div>

      </div>
    </div>
  )
}