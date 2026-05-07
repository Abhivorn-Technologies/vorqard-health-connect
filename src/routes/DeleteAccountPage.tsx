import { motion } from 'framer-motion'
import { useState } from 'react'
import { CheckCircle2, Mail, Globe, AlertTriangle, ShieldCheck, Clock } from 'lucide-react'
import emailjs from "@emailjs/browser"

export default function DeleteAccountPage() {
  // Initialize EmailJS (using same keys as contact page)
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "");

  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    accountType: "Patient",
    reason: ""
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.fullName || !form.mobile || !form.email) return

    setStatus("sending")

    try {
      // Reusing EmailJS setup. You might want to use a specific template for deletion requests.
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        {
          name: form.fullName,
          email: form.email,
          phone: form.mobile,
          message: `ACCOUNT DELETION REQUEST\n\nAccount Type: ${form.accountType}\nReason: ${form.reason || "Not provided"}`,
          title: `Account Deletion Request - ${form.fullName}`,
          to_name: "Vorqard Support",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ""
      );
      setStatus("success")
      setForm({ fullName: "", mobile: "", email: "", accountType: "Patient", reason: "" })
    } catch (error) {
      console.error("Deletion Request Error:", error)
      setStatus("error")
    }
  }

  return (
    <>
      <section className="hero-gradient-bg section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Delete Your Vorqard Account</h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              You can request deletion of your Vorqard account and associated personal information using the form below.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column: Info */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-2xl font-bold mb-4">About Account Deletion</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>At Vorqard, we respect your privacy and your right to control your personal data.</p>
                  <p>If you wish to permanently delete your Vorqard account, you may submit a deletion request through this page.</p>
                  <p>Once your request is verified, your account will be deactivated and your personal information will be removed from our active systems.</p>
                </div>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <ShieldCheck className="text-destructive" size={20} /> What Will Be Deleted
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Profile information</li>
                    <li>• Login credentials</li>
                    <li>• Contact information</li>
                    <li>• Uploaded personal documents</li>
                    <li>• Appointment history linked to your account</li>
                    <li>• Notification preferences</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Clock className="text-primary" size={20} /> What May Be Retained
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Certain medical, billing, and compliance-related records may be retained for a limited period as required by healthcare regulations, fraud prevention, legal obligations, and security purposes.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-destructive/10 border border-destructive/20 p-6">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <AlertTriangle className="text-destructive" size={20} /> Before You Delete
                </h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• You may lose access to your medical records and appointment history.</li>
                  <li>• Deleted accounts cannot be recovered.</li>
                  <li>• Some hospital-generated records may remain with the respective healthcare provider.</li>
                </ul>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-2xl border border-border bg-card">
                <div className="flex-1">
                  <h4 className="font-bold mb-1">Deletion Processing Time</h4>
                  <p className="text-sm text-muted-foreground">Account deletion requests are generally processed within 7 working days.</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Request Account Deletion</h2>
                
                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Request Submitted Successfully</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your account deletion request has been submitted successfully.<br /><br />
                      Our team will review and process your request within 7 working days.
                    </p>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="mt-8 text-primary font-semibold hover:underline"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Full Name</label>
                      <input
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) => setForm(p => ({ ...p, fullName: e.target.value }))}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium">Registered Mobile Number</label>
                        <input
                          type="tel"
                          required
                          value={form.mobile}
                          onChange={(e) => setForm(p => ({ ...p, mobile: e.target.value }))}
                          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium">Registered Email Address</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
                          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Account Type</label>
                      <select
                        value={form.accountType}
                        onChange={(e) => setForm(p => ({ ...p, accountType: e.target.value }))}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      >
                        <option>Patient</option>
                        <option>Doctor</option>
                        <option>Hospital</option>
                        <option>Pharmacy</option>
                        <option>Lab</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Reason for Deletion (Optional)</label>
                      <textarea
                        rows={4}
                        value={form.reason}
                        onChange={(e) => setForm(p => ({ ...p, reason: e.target.value }))}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        placeholder="Tell us why you want to delete your account"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full rounded-xl gradient-primary py-4 font-bold text-primary-foreground shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                    >
                      {status === "sending" ? "Processing..." : "Submit Deletion Request"}
                    </button>
                    
                    {status === "error" && (
                      <p className="text-sm text-destructive text-center mt-2">Something went wrong. Please try again or contact support.</p>
                    )}
                  </form>
                )}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
                  <div className="rounded-xl bg-primary/10 p-2 text-primary"><Mail size={20} /></div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email Support</p>
                    <a href="mailto:support@vorqard.com" className="text-sm font-semibold hover:text-primary">support@vorqard.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
                  <div className="rounded-xl bg-primary/10 p-2 text-primary"><Globe size={20} /></div>
                  <div>
                    <p className="text-xs text-muted-foreground">Official Website</p>
                    <a href="https://www.vorqard.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-primary">www.vorqard.com</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-sm text-muted-foreground italic">
            Vorqard is committed to protecting user privacy and maintaining secure healthcare data practices.
          </p>
        </div>
      </section>
    </>
  )
}
