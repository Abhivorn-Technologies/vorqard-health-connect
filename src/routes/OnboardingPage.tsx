import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Building2, User, Mail, Phone, ArrowRight, Loader2, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'

export default function OnboardingPage() {
  const [searchParams] = useSearchParams()
  const typeParam = searchParams.get('type')

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    hospital_name: '',
    admin_name: '',
    admin_email: '',
    admin_phone: '',
    org_type: ''
  })

  useEffect(() => {
    if (typeParam) {
      const typeMap: Record<string, string> = {
        'hospital': 'Hospital',
        'pharmacy': 'Pharmacy',
        'lab': 'Laboratory'
      }
      setFormData(prev => ({ ...prev, org_type: typeMap[typeParam] || '' }))
    }
  }, [typeParam])

  const [errors, setErrors] = useState({
    hospital_name: '',
    admin_name: '',
    org_type: '',
    admin_email: '',
    admin_phone: ''
  })

  const [countryCode, setCountryCode] = useState('+91')
  const [showCountryMenu, setShowCountryMenu] = useState(false)

  const countries = [
    { code: '+91', name: 'India', flag: 'in' },
    { code: '+1', name: 'USA', flag: 'us' },
    { code: '+44', name: 'UK', flag: 'gb' },
    { code: '+971', name: 'UAE', flag: 'ae' },
    { code: '+61', name: 'Australia', flag: 'au' },
    { code: '+65', name: 'Singapore', flag: 'sg' },
    { code: '+1', name: 'Canada', flag: 'ca' },
    { code: '+966', name: 'Saudi Arabia', flag: 'sa' },
    { code: '+49', name: 'Germany', flag: 'de' },
    { code: '+33', name: 'France', flag: 'fr' },
    { code: '+81', name: 'Japan', flag: 'jp' },
    { code: '+27', name: 'South Africa', flag: 'za' },
    { code: '+55', name: 'Brazil', flag: 'br' },
    { code: '+86', name: 'China', flag: 'cn' },
    { code: '+39', name: 'Italy', flag: 'it' },
    { code: '+34', name: 'Spain', flag: 'es' },
    { code: '+7', name: 'Russia', flag: 'ru' },
    { code: '+82', name: 'South Korea', flag: 'kr' },
    { code: '+52', name: 'Mexico', flag: 'mx' },
    { code: '+62', name: 'Indonesia', flag: 'id' },
    { code: '+90', name: 'Turkey', flag: 'tr' },
    { code: '+31', name: 'Netherlands', flag: 'nl' },
    { code: '+41', name: 'Switzerland', flag: 'ch' },
    { code: '+46', name: 'Sweden', flag: 'se' },
    { code: '+64', name: 'New Zealand', flag: 'nz' },
    { code: '+60', name: 'Malaysia', flag: 'my' },
    { code: '+66', name: 'Thailand', flag: 'th' },
    { code: '+84', name: 'Vietnam', flag: 'vn' },
    { code: '+63', name: 'Philippines', flag: 'ph' },
    { code: '+92', name: 'Pakistan', flag: 'pk' },
    { code: '+880', name: 'Bangladesh', flag: 'bd' },
    { code: '+94', name: 'Sri Lanka', flag: 'lk' },
    { code: '+20', name: 'Egypt', flag: 'eg' },
    { code: '+234', name: 'Nigeria', flag: 'ng' },
    { code: '+254', name: 'Kenya', flag: 'ke' },
    { code: '+212', name: 'Morocco', flag: 'ma' },
    { code: '+216', name: 'Tunisia', flag: 'tn' },
    { code: '+213', name: 'Algeria', flag: 'dz' },
    { code: '+251', name: 'Ethiopia', flag: 'et' },
    { code: '+233', name: 'Ghana', flag: 'gh' },
    { code: '+221', name: 'Senegal', flag: 'sn' },
    { code: '+256', name: 'Uganda', flag: 'ug' },
    { code: '+255', name: 'Tanzania', flag: 'tz' },
    { code: '+263', name: 'Zimbabwe', flag: 'zw' },
    { code: '+260', name: 'Zambia', flag: 'zm' },
    { code: '+264', name: 'Namibia', flag: 'na' },
    { code: '+267', name: 'Botswana', flag: 'bw' },
    { code: '+230', name: 'Mauritius', flag: 'mu' },
    { code: '+248', name: 'Seychelles', flag: 'sc' },
    { code: '+54', name: 'Argentina', flag: 'ar' },
    { code: '+56', name: 'Chile', flag: 'cl' },
    { code: '+57', name: 'Colombia', flag: 'co' },
    { code: '+51', name: 'Peru', flag: 'pe' },
    { code: '+58', name: 'Venezuela', flag: 've' },
    { code: '+593', name: 'Ecuador', flag: 'ec' },
    { code: '+591', name: 'Bolivia', flag: 'bo' },
    { code: '+595', name: 'Paraguay', flag: 'py' },
    { code: '+598', name: 'Uruguay', flag: 'uy' },
    { code: '+506', name: 'Costa Rica', flag: 'cr' },
    { code: '+507', name: 'Panama', flag: 'pa' },
    { code: '+502', name: 'Guatemala', flag: 'gt' },
    { code: '+1', name: 'Jamaica', flag: 'jm' },
    { code: '+351', name: 'Portugal', flag: 'pt' },
    { code: '+30', name: 'Greece', flag: 'gr' },
    { code: '+32', name: 'Belgium', flag: 'be' },
    { code: '+43', name: 'Austria', flag: 'at' },
    { code: '+45', name: 'Denmark', flag: 'dk' },
    { code: '+47', name: 'Norway', flag: 'no' },
    { code: '+358', name: 'Finland', flag: 'fi' },
    { code: '+353', name: 'Ireland', flag: 'ie' },
    { code: '+420', name: 'Czech Republic', flag: 'cz' },
    { code: '+48', name: 'Poland', flag: 'pl' },
    { code: '+36', name: 'Hungary', flag: 'hu' },
    { code: '+40', name: 'Romania', flag: 'ro' },
    { code: '+380', name: 'Ukraine', flag: 'ua' },
    { code: '+972', name: 'Israel', flag: 'il' },
    { code: '+962', name: 'Jordan', flag: 'jo' },
    { code: '+961', name: 'Lebanon', flag: 'lb' },
    { code: '+968', name: 'Oman', flag: 'om' },
    { code: '+965', name: 'Kuwait', flag: 'kw' },
    { code: '+974', name: 'Qatar', flag: 'qa' },
    { code: '+973', name: 'Bahrain', flag: 'bh' },
    { code: '+98', name: 'Iran', flag: 'ir' },
    { code: '+964', name: 'Iraq', flag: 'iq' },
    { code: '+93', name: 'Afghanistan', flag: 'af' },
    { code: '+977', name: 'Nepal', flag: 'np' },
    { code: '+95', name: 'Myanmar', flag: 'mm' },
    { code: '+855', name: 'Cambodia', flag: 'kh' },
    { code: '+856', name: 'Laos', flag: 'la' },
    { code: '+976', name: 'Mongolia', flag: 'mn' },
    { code: '+7', name: 'Kazakhstan', flag: 'kz' },
    { code: '+998', name: 'Uzbekistan', flag: 'uz' },
  ]

  const selectedCountry = countries.find(c => c.code === countryCode) || countries[0]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    // Clear error for this field when user starts typing
    setErrors(prev => ({ ...prev, [name]: '' }))
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const newErrors = {
      hospital_name: '',
      admin_name: '',
      org_type: '',
      admin_email: '',
      admin_phone: ''
    }

    // Organization Name Validation
    if (!formData.hospital_name.trim()) {
      newErrors.hospital_name = 'Organization name is required'
    } else if (!/^[a-zA-Z\s]*$/.test(formData.hospital_name)) {
      newErrors.hospital_name = 'Characters only'
    } else if (formData.hospital_name.length > 50) {
      newErrors.hospital_name = 'Maximum 50 characters allowed'
    }

    // Admin Name Validation
    if (!formData.admin_name.trim()) {
      newErrors.admin_name = 'Admin name is required'
    } else if (/\d/.test(formData.admin_name)) {
      newErrors.admin_name = 'Not allowed number'
    } else if (!/^[a-zA-Z\s]*$/.test(formData.admin_name)) {
      newErrors.admin_name = 'only characters'
    } else if (formData.admin_name.length > 50) {
      newErrors.admin_name = 'Maximum 50 characters allowed'
    }

    // Org Type Validation - Removed restriction
    newErrors.org_type = ''

    // Email Validation
    if (!formData.admin_email.trim()) {
      newErrors.admin_email = 'Email is required'
    } else if (!formData.admin_email.includes('@')) {
      newErrors.admin_email = 'Email must include @'
    }

    // Phone Validation
    if (!formData.admin_phone.trim()) {
      newErrors.admin_phone = 'Phone number is required'
    } else if (formData.admin_phone.length < 10 || formData.admin_phone.length > 15) {
      newErrors.admin_phone = 'Enter a valid phone number with country code'
    }

    setErrors(newErrors)
    
    if (Object.values(newErrors).some(err => err !== '')) return

    setLoading(true)
    try {
      const fullPhone = countryCode + formData.admin_phone
      // Pointing to the VORQARD Backend API via Environment Variables
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'
      const response = await fetch(`${apiBaseUrl}/api/v1/onboarding/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          platform_url: window.location.origin
        })
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
          <a 
            href={`${import.meta.env.VITE_DASHBOARD_URL || 'https://app.vorqard.com'}/login`} 
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
          >
            Return to Login <ArrowRight size={20} />
          </a>
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
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest pl-1">
                  Organization Name <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-primary transition-colors">
                    <Building2 size={18} />
                  </div>
                  <input 
                    name="hospital_name"
                    value={formData.hospital_name}
                    onChange={handleChange}
                    className={`w-full bg-muted/30 border-2 rounded-2xl pl-12 pr-4 py-4 focus:outline-none transition-all ${
                      errors.hospital_name 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-border focus:border-primary"
                    }`}
                    placeholder=""
                  />
                </div>
                {errors.hospital_name && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-[10px] font-bold uppercase tracking-wider pl-1 mt-1"
                  >
                    {errors.hospital_name}
                  </motion.p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest pl-1">
                      Admin Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-primary transition-colors">
                        <User size={18} />
                      </div>
                       <input 
                        name="admin_name"
                        value={formData.admin_name}
                        onChange={handleChange}
                        className={`w-full bg-muted/30 border-2 rounded-2xl pl-12 pr-4 py-4 focus:outline-none transition-all ${
                          errors.admin_name ? "border-red-500" : "border-border focus:border-primary"
                        }`}
                        placeholder=""
                      />
                    </div>
                    {errors.admin_name && <p className="text-red-500 text-[10px] font-bold mt-1 pl-1">{errors.admin_name}</p>}
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest pl-1">Org Type</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground transition-colors">
                        <Building2 size={18} />
                      </div>
                      <input 
                        disabled
                        value={formData.org_type || "Select Type"}
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl pl-12 pr-4 py-4 text-slate-500 font-bold cursor-not-allowed"
                      />
                    </div>
                 </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest pl-1">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-primary transition-colors">
                        <Mail size={18} />
                      </div>
                       <input 
                        name="admin_email"
                        value={formData.admin_email}
                        onChange={handleChange}
                        className={`w-full bg-muted/30 border-2 rounded-2xl pl-12 pr-4 py-4 focus:outline-none transition-all ${
                          errors.admin_email ? "border-red-500" : "border-border focus:border-primary"
                        }`}
                        placeholder=""
                      />
                    </div>
                    {errors.admin_email && <p className="text-red-500 text-[10px] font-bold mt-1 pl-1">{errors.admin_email}</p>}
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest pl-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className={`flex items-center gap-0 bg-muted/30 border-2 rounded-2xl transition-all ${
                      errors.admin_phone ? "border-red-500" : "border-border focus-within:border-primary"
                    }`}>
                      <div className="relative w-1/4 shrink-0">
                        <button
                          type="button"
                          onClick={() => setShowCountryMenu(!showCountryMenu)}
                          className="w-full h-full px-2 py-4 focus:outline-none flex items-center justify-center gap-2 font-normal text-sm transition-all border-r border-border/50"
                        >
                          <span style={{ color: '#000000' }}>{countryCode}</span>
                          <svg 
                            width="14" 
                            height="14" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="#000000" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            style={{ display: 'block', minWidth: '14px' }}
                            className={`transition-transform duration-300 ${showCountryMenu ? 'rotate-180' : ''}`}
                          >
                            <path d="m6 9 6 6 6-6"/>
                          </svg>
                        </button>

                        <AnimatePresence>
                          {showCountryMenu && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              className="absolute top-full left-0 mt-2 w-64 bg-card border-2 border-border rounded-2xl shadow-2xl z-[100] overflow-hidden"
                            >
                              <div className="max-h-56 overflow-y-auto p-1 custom-scrollbar">
                                <style>{`
                                  .custom-scrollbar::-webkit-scrollbar {
                                    width: 4px;
                                  }
                                  .custom-scrollbar::-webkit-scrollbar-track {
                                    background: transparent;
                                  }
                                  .custom-scrollbar::-webkit-scrollbar-thumb {
                                    background: #e2e8f0;
                                    border-radius: 10px;
                                  }
                                  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                                    background: #cbd5e1;
                                  }
                                `}</style>
                                {countries.map((c) => (
                                  <button
                                    key={`${c.name}-${c.code}`}
                                    type="button"
                                    onClick={() => {
                                      setCountryCode(c.code)
                                      setShowCountryMenu(false)
                                    }}
                                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors rounded-xl text-left"
                                  >
                                    <img 
                                      src={`https://flagcdn.com/w40/${c.flag}.png`} 
                                      alt={c.name}
                                      className="w-5 h-3.5 object-cover rounded-sm shadow-sm"
                                    />
                                    <div className="flex flex-col">
                                      <span className="text-xs font-bold">{c.name}</span>
                                      <span className="text-[10px] text-muted-foreground">{c.code}</span>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      
                      <div className="relative w-3/4">
                        <input 
                          name="admin_phone"
                          value={formData.admin_phone}
                          onChange={handleChange}
                          className="w-full bg-transparent border-none rounded-2xl pl-4 pr-4 py-4 focus:outline-none transition-all font-normal"
                          placeholder=""
                        />
                      </div>
                    </div>
                    {errors.admin_phone && <p className="text-red-500 text-[10px] font-bold mt-1 pl-1">{errors.admin_phone}</p>}
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
