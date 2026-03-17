"use client"

import { useState } from "react"
import emailjs from "emailjs-com"

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_number: "",
    user_email: "",
    user_message: "",
  })

  const [status, setStatus] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setStatus("Sending...")

    emailjs
      .send("service_366srlb", "template_mz0qx5l", formData, "bybwHcsEJugC6T3gR")
      .then(() => {
        setStatus("Details submitted successfully. Thank you!")
        setIsSubmitted(true)
        setFormData({
          user_name: "",
          user_number: "",
          user_email: "",
          user_message: "",
        })
      })
      .catch((err) => {
        console.error(err)
        setStatus("Something went wrong. Please try again.")
      })
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-black/5 p-8 text-center">
          <h1 className="text-3xl font-light font-serif mb-3 text-gray-900">Thank You</h1>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Your details have been submitted successfully. We’ll be in touch soon.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-black/5 p-6 sm:p-10">
        <div className="mb-4 text-center">
          <div className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-1.5 text-xs tracking-[0.25em] uppercase text-gray-700">
            E.M.A · Expert Makeup Academy
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-light font-serif mb-2 text-center text-gray-900">
          Registration
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mb-8 text-center">
          Fill in your details below so we can personalise your experience for E.M.A.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="user_name" className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                required
                value={formData.user_name}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/70"
                placeholder="Enter your full name"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="user_number" className="text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="user_number"
                name="user_number"
                type="tel"
                required
                value={formData.user_number}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/70"
                placeholder="e.g. +44 1234 567890"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="user_email" className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="user_email"
              name="user_email"
              type="email"
              required
              value={formData.user_email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/70"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="user_message" className="text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="user_message"
              name="user_message"
              rows={4}
              required
              value={formData.user_message}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/70 resize-none"
              placeholder="Type your message here."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-colors"
          >
            Submit Details
          </button>
        </form>

        {status && <p className="mt-4 text-center text-sm text-gray-700">{status}</p>}
      </div>
    </main>
  )
}

