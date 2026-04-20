import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Building2, User, Mail, Phone, ArrowRight, Loader2, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function OnboardingPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    hospital_name: '',
    admin_name: '',
    admin_email: '',
    admin_phone: '',
    org_type: 'Hospital'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      // Pointing to the VORQARD Backend API
      const response = await fetch('http://localhost:8000/api/v1/onboarding/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setSuccess(true)
      } else {
        const err = await response.json()
        alert(err.detail || "Signup failed. Please try again.")
      }
    } catch (error) {
      alert("Could not connect to the server. Please check your connection.")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center section-padding">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-card rounded-3xl border-2 border-primary/20 p-10 text-center shadow-xl"
        >
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="text-3xl font-black mb-4 tracking-tight">Check your Email</h1>
          <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
            We've sent a verification link to <span className="text-foreground font-bold">{formData.admin_email}</span>. 
            Please click the link to set up your password and activate your hospital dashboard.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            Return to Home <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Content Side */}
        <motion.div
           initial={{ opacity: 0, x: -40 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles size={14} /> Transform your Practice
          </div>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
            Global Standard <br/>
            <span className="text-gradient-brand">Onboarding</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-lg">
            Join the elite circle of digital-first healthcare providers. Automated workflows, AI diagnostics, and seamless multi-tenant security await you.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
               <div className="mt-1 w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={14} strokeWidth={3} />
               </div>
               <div>
                  <h4 className="font-bold text-foreground">Instant Provisioning</h4>
                  <p className="text-muted-foreground text-sm">Your private workspace ready in under 60 seconds.</p>
               </div>
            </div>
            <div className="flex gap-4 items-start">
               <div className="mt-1 w-6 h-6 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={14} strokeWidth={3} />
               </div>
               <div>
                  <h4 className="font-bold text-foreground">Enterprise Security</h4>
                  <p className="text-muted-foreground text-sm">HIPAA-ready multi-tenant data isolation protocol.</p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-card rounded-[2.5rem] border-2 border-border p-8 lg:p-12 shadow-2xl relative">
            <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-2xl font-bold text-sm shadow-xl shadow-primary/20">
               STEP 1 OF 2
            </div>

            <h3 className="text-2xl font-bold mb-8">Setup Organization</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest pl-1">Organization Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-primary transition-colors">
                    <Building2 size={18} />
                  </div>
                  <input 
                    required 
                    name="hospital_name"
                    value={formData.hospital_name}
                    onChange={handleChange}
                    className="w-full bg-muted/30 border-2 border-border focus:border-primary rounded-2xl pl-12 pr-4 py-4 focus:outline-none transition-all"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest pl-1">Admin Name</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-primary transition-colors">
                        <User size={18} />
                      </div>
                      <input 
                        required 
                        name="admin_name"
                        value={formData.admin_name}
                        onChange={handleChange}
                        className="w-full bg-muted/30 border-2 border-border focus:border-primary rounded-2xl pl-12 pr-4 py-4 focus:outline-none transition-all"
                        placeholder=""
                      />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest pl-1">Org Type</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-primary transition-colors">
                        <Building2 size={18} />
                      </div>
                      <select 
                        name="org_type"
                        value={formData.org_type}
                        onChange={handleChange}
                        className="w-full bg-muted/30 border-2 border-border focus:border-primary rounded-2xl pl-12 pr-4 py-4 focus:outline-none transition-all appearance-none font-bold"
                      >
                         <option value="Organization">Organization</option>
                         <option value="Hospital">Hospital</option>
                         <option value="Clinic">Clinic</option>
                         <option value="Diagnostic Lab">Diagnostic Lab</option>
                         <option value="Pharmacy">Pharmacy</option>
                      </select>
                    </div>
                 </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest pl-1">Business Email</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-primary transition-colors">
                        <Mail size={18} />
                      </div>
                      <input 
                        required 
                        type="email"
                        name="admin_email"
                        value={formData.admin_email}
                        onChange={handleChange}
                        className="w-full bg-muted/30 border-2 border-border focus:border-primary rounded-2xl pl-12 pr-4 py-4 focus:outline-none transition-all"
                        placeholder=""
                      />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest pl-1">Phone</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-primary transition-colors">
                        <Phone size={18} />
                      </div>
                      <input 
                        required 
                        name="admin_phone"
                        value={formData.admin_phone}
                        onChange={handleChange}
                        className="w-full bg-muted/30 border-2 border-border focus:border-primary rounded-2xl pl-12 pr-4 py-4 focus:outline-none transition-all"
                        placeholder=""
                      />
                    </div>
                 </div>
              </div>

              <div className="pt-4">
                <button 
                  disabled={loading}
                  className="w-full gradient-primary text-white rounded-2xl py-4 font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:scale-100 shadow-xl shadow-primary/20 overflow-hidden relative"
                >
                  <AnimatePresence mode="wait">
                    {loading ? (
                      <motion.div 
                        key="loading"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                         <Loader2 className="w-5 h-5 animate-spin" /> Finalizing Protocol...
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="ready"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                         Initiate Registration <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
                <p className="text-center text-[11px] text-muted-foreground mt-4">
                   By continuing, you agree to Vorqard's <Link to="/terms" className="underline hover:text-primary">Terms of Service</Link> and <Link to="/privacy" className="underline hover:text-primary">Data Protection Policy</Link>.
                </p>
              </div>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
