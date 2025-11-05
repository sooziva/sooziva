"use client"

import { useEffect, useState } from "react"
import emailjs from "emailjs-com"

export default function Home() {
  const [scrollOpacity, setScrollOpacity] = useState(1)
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    user_name: "",
    user_number: "",
    user_email: "",
  })
  const [status, setStatus] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = 300
      const opacity = Math.max(0, 1 - scrolled / maxScroll)
      setScrollOpacity(opacity)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("Sending...")

    emailjs
      .send(
        "service_366srlb", // replace with your EmailJS Service ID
        "template_mz0qx5l", // replace with your EmailJS Template ID
        formData,
        "bybwHcsEJugC6T3gR" // replace with your EmailJS Public Key
      )
      .then(() => {
        setStatus("Thank you! You’ll be notified soon 🎉")
        setFormData({ user_name: "", user_number: "", user_email: "" })
      })
      .catch((err) => {
        console.error(err)
        setStatus("Something went wrong. Please try again.")
      })
  }

return (
<main className="bg-background">
      {/* Full Screen Hero */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("/sooziva.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          {/* Subtitle */}
          <p className="text-sm tracking-widest text-white/70 uppercase mb-8 font-light">Coming Soon</p>

          {/* Main Heading */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tighter text-white mb-6 font-serif max-w-5xl text-balance">
            Soo Ziva
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-12 font-light">
            Crafting faces & Redefining your presence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button
              onClick={() => setIsOpen(true)}
              className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all"
            >
              Notify Me
            </button>
            <a
  href="https://buukmenow.com/b/ziva-by-ekay-1310" // 🔹 Replace with your real link
  target="_blank"                // opens in a new tab
  rel="noopener noreferrer"      // security best practice
  className="px-8 py-3 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-all inline-block"
>
  Learn More
</a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          style={{ opacity: scrollOpacity }}
        >
          <p className="text-white/60 text-xs uppercase tracking-widest mb-3">Scroll to explore</p>
          <div className="w-6 h-10 border border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white text-gray-900 rounded-2xl p-8 w-80 relative shadow-lg">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-500 text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center">Get Notified!</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                value={formData.user_name}
                onChange={handleChange}
                className="border rounded-md p-2"
                required
              />
              <input
                type="tel"
                name="user_number"
                placeholder="Phone Number"
                value={formData.user_number}
                onChange={handleChange}
                className="border rounded-md p-2"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                value={formData.user_email}
                onChange={handleChange}
                className="border rounded-md p-2"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
            <p className="text-center text-sm mt-3">{status}</p>
          </div>
        </div>
      )}
  
      {/* About Section */}
      {/* <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl sm:text-6xl font-light font-serif mb-6 text-foreground">Crafted with Purpose</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              At Soo Ziva, we believe beauty is a form of self-expression. Every product is carefully formulated with
              premium ingredients and designed to celebrate your unique beauty.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We're committed to creating transformative beauty experiences that inspire confidence and authenticity.
            </p>
          </div>
          <div
            className="w-full aspect-square rounded-lg overflow-hidden"
            style={{
              backgroundImage:
                "url(/placeholder.svg?height=600&width=600&query=luxury%20makeup%20products%20arrangement%20aesthetic)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </section> */}

      {/* Values Section */}
      {/* <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-light font-serif mb-16 text-foreground text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Quality",
                description: "Every formula is crafted with luxury ingredients and rigorous testing standards.",
              },
              {
                title: "Sustainability",
                description: "We care for the planet with eco-conscious packaging and ethical sourcing.",
              },
              {
                title: "Inclusivity",
                description: "Beauty for everyone. Our collections celebrate diverse skin tones and preferences.",
              },
            ].map((value, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">{value.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Newsletter Section */}
      {/* <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-light font-serif mb-6 text-foreground">Be First to Know</h2>
          <p className="text-lg text-foreground/70 mb-10">
            Join our exclusive list for early access, special launches, and beauty insights.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-input border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-accent/50"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="border-t border-border bg-background/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-serif text-2xl font-light mb-4 text-foreground">Soo Ziva</h3>
              <p className="text-foreground/60 text-sm">Redefine your beauty journey.</p>
            </div>
            {[
              {
                title: "Shop",
                links: ["Makeup", "Skincare", "Accessories"],
              },
              {
                title: "Company",
                links: ["About", "Sustainability", "Careers"],
              },
              {
                title: "Support",
                links: ["Contact", "FAQ", "Shipping"],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h4 className="font-semibold mb-4 text-foreground text-sm uppercase tracking-wide">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href="#" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center text-foreground/60 text-sm">
            <p>&copy; 2025 Soo Ziva. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                TikTok
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Pinterest
              </a>
            </div>
          </div>
        </div>
      </footer> */}
    </main>
  )
}
