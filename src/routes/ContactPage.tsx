import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return

    setStatus("sending")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStatus("success")
      setForm({ name: "", email: "", phone: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <>
      <section className="hero-gradient-bg section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">Contact</span>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Let's{" "}
              <span className="text-gradient-brand">Connect</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Have questions about Vorqard? Want a demo? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="mb-6 text-2xl font-bold">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name *</label>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email *</label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  maxLength={20}
                  value={form.phone}
                  onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                  placeholder="+91 9876543210"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message *</label>
                <textarea
                  id="message"
                  required
                  maxLength={1000}
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20 resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-xl gradient-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
              >
                {status === "sending" ? "Sending..." : <>Send Message <Send size={16} /></>}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 rounded-xl bg-secondary p-4 text-sm text-primary">
                  <CheckCircle2 size={18} /> Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 rounded-xl bg-destructive/10 p-4 text-sm text-destructive">
                  <AlertCircle size={18} /> Something went wrong. Please try again.
                </div>
              )}
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2 className="mb-6 text-2xl font-bold">Get in touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl gradient-primary p-3 text-primary-foreground"><Mail size={20} /></div>
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <a href="mailto:support@vorqard.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">support@vorqard.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-xl gradient-primary p-3 text-primary-foreground"><Phone size={20} /></div>
                <div>
                  <p className="font-medium text-sm">Phone</p>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-xl gradient-primary p-3 text-primary-foreground"><MapPin size={20} /></div>
                <div>
                  <p className="font-medium text-sm">Address</p>
                  <p className="text-sm text-muted-foreground">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-input overflow-hidden bg-muted/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8860266446467!2d72.87944961524658!3d19.076092587155628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce4e0000001!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
