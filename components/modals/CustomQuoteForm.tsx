"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

type Props = {
  onClose?: () => void
}

export default function CustomQuoteForm({ onClose }: Props) {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
      source: "Custom Quote Modal",
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error("Failed")

      setSuccess(true)
      form.reset()

      setTimeout(() => {
        onClose?.()
        router.push("/thank-you")
      }, 1200)
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900">
          Get a Custom Quote
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Tell us what you need — we’ll get back within 24 hours
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <input
          name="name"
          required
          placeholder="Your Name"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Phone */}
        <input
          name="phone"
          type="tel"
          required
          placeholder="Phone Number"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Service */}
        <select
          name="service"
          required
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm
          bg-white text-gray-700
          focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">What service are you looking for?</option>
          <option>Prototype Manufacturing</option>
          <option>Tool Design</option>
          <option>Precision CNC Machining</option>
          <option>Refurbishment Services</option>
          <option>Sheet Metal & Fabrication</option>
          <option>Industrial Products (Valves/Dampers)</option>
          <option>Other / Custom Enquiry</option>
        </select>

        {/* Message */}
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your requirement"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}

        {success && (
          <p className="text-sm text-green-600">
            Submitted successfully! Redirecting…
          </p>
        )}

        {/* CTA */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-blue-500 py-3.5 font-semibold
          text-white transition hover:bg-blue-500 hover:shadow-lg
          disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Get My Custom Quote"}
        </button>

        {/* Trust line */}
        <p className="text-center text-xs text-gray-400">
          No spam • Clear pricing • Honest recommendations
        </p>
      </form>
    </div>
  )
}
