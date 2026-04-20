import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Loader2, Lock, ShieldCheck, CheckCircle2, 
  ArrowRight, XCircle, MapPin, Globe, 
  Building2, Navigation 
} from 'lucide-react'

export default function SetupPasswordPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const token = searchParams.get('token')

  const [verifying, setVerifying] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [hospitalData, setHospitalData] = useState<any>(null)
  
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  
  const [formData, setFormData] = useState({
    password: '',
    confirm_password: '',
    address_line: '',
    city: '',
    state: '',
    pincode: ''
  })

  // 1. Verify Token on Load
  useEffect(() => {
    async function verify() {
      if (!token) {
        setError("Missing verification token.")
        setVerifying(false)
        return
      }

      try {
        const res = await fetch(`http://localhost:8000/api/v1/onboarding/verify/${token}`)
        const data = await res.json()
        
        if (res.ok) {
          if (data.is_expired) {
            setError("This verification link has expired. Please sign up again.")
          } else {
            setHospitalData(data)
          }
        } else {
          setError(data.detail || "Invalid or link already used.")
        }
      } catch (err) {
        setError("Could not reach the server.")
      } finally {
        setVerifying(false)
      }
    }
    verify()
  }, [token])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8000/api/v1/onboarding/activate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token,
          ...formData
        })
      })
      
      if (response.ok) {
        setSuccess(true)
        // Auto redirect after 3 seconds
        setTimeout(() => {
          // Point to your main VORQARD Login Page
          window.location.href = "http://localhost:5173/login"
        }, 3000)
      } else {
        const err = await response.json()
        alert(err.detail || "Activation failed.")
      }
    } catch (error) {
      alert("Could not connect to the server.")
    } finally {
      setLoading(false)
    }
  }

  if (verifying) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 bg-slate-50">
         <Loader2 className="w-12 h-12 text-primary animate-spin mb-6" />
         <p className="text-muted-foreground font-bold animate-pulse">Running Security Verification...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-6 bg-slate-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white rounded-3xl border border-red-100 p-10 text-center shadow-xl"
        >
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <XCircle size={32} />
          </div>
          <h1 className="text-2xl font-black mb-4 tracking-tight">Activation Failed</h1>
          <p className="text-muted-foreground mb-8">{error}</p>
          <button onClick={() => navigate('/onboarding')} className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 rounded-2xl transition-colors">
            Try Again
          </button>
        </motion.div>
      </div>
    )
  }

  if (success) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-6 bg-slate-50">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-3xl border border-emerald-100 p-10 text-center shadow-2xl"
        >
          <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="text-3xl font-black mb-4 tracking-tight">Welcome Aboard!</h1>
          <p className="text-muted-foreground mb-8">
            Your VORQARD environment for <b>{hospitalData?.hospital_name}</b> has been provisioned. Redirecting to your dashboard...
          </p>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
             <motion.div 
               initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 3 }}
               className="h-full bg-emerald-500" 
             />
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-md mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
           className="bg-white rounded-[2.5rem] border border-slate-200 p-8 lg:p-10 shadow-xl relative"
        >
           <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
              <ShieldCheck size={28} />
           </div>

           <h2 className="text-2xl lg:text-3xl font-black tracking-tight mb-2">Final Step.</h2>
           <p className="text-muted-foreground font-medium mb-10 leading-relaxed">
             Security validation passed for <span className="text-foreground font-bold">{hospitalData?.hospital_name}</span>. Create your master password.
           </p>

           <form onSubmit={handleSubmit} className="space-y-6">
              {/* Organization Details Section */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="text-xs font-black text-primary uppercase tracking-widest flex items-center gap-2">
                  <Building2 size={14} /> Hospital Profile
                </h3>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Physical Address</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-primary transition-colors">
                      <MapPin size={18} />
                    </div>
                    <input 
                      required 
                      value={formData.address_line}
                      onChange={(e) => setFormData({...formData, address_line: e.target.value})}
                      className="w-full bg-slate-50 border-2 border-slate-100 focus:border-primary rounded-2xl pl-12 pr-4 py-4 focus:outline-none transition-all text-sm font-medium"
                      placeholder="e.g. 123 Healthcare St, Suite 10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">City</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-primary transition-colors">
                        <Globe size={16} />
                      </div>
                      <input 
                        required 
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-100 focus:border-primary rounded-2xl pl-12 pr-4 py-4 focus:outline-none transition-all text-sm font-medium"
                        placeholder="City"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">State</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-primary transition-colors">
                        <Navigation size={16} />
                      </div>
                      <input 
                        required 
                        value={formData.state}
                        onChange={(e) => setFormData({...formData, state: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-100 focus:border-primary rounded-2xl pl-12 pr-4 py-4 focus:outline-none transition-all text-sm font-medium"
                        placeholder="State"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Pincode / ZIP</label>
                  <input 
                    required 
                    value={formData.pincode}
                    onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                    className="w-full bg-slate-50 border-2 border-slate-100 focus:border-primary rounded-2xl px-6 py-4 focus:outline-none transition-all text-sm font-medium"
                    placeholder="e.g. 560038"
                  />
                </div>
              </div>

              {/* Security Section */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="text-xs font-black text-primary uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck size={14} /> Security Setup
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Master Password</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-primary transition-colors">
                        <Lock size={18} />
                      </div>
                      <input 
                        required 
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-100 focus:border-primary rounded-2xl pl-12 pr-4 py-4 focus:outline-none transition-all text-sm font-medium"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Confirm Password</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-primary transition-colors">
                        <Lock size={18} />
                      </div>
                      <input 
                        required 
                        type="password"
                        value={formData.confirm_password}
                        onChange={(e) => setFormData({...formData, confirm_password: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-100 focus:border-primary rounded-2xl pl-12 pr-4 py-4 focus:outline-none transition-all text-sm font-medium"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary-hover active:bg-primary-active text-white rounded-2xl py-4 font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/20"
                >
                  {loading ? <Loader2 size={24} className="animate-spin" /> : <>Save & Activate <ArrowRight size={20} /></>}
                </button>
              </div>
           </form>
        </motion.div>
        
        <p className="text-center mt-10 text-sm font-bold text-slate-400 uppercase tracking-widest bg-white/50 backdrop-blur-sm py-3 px-6 rounded-full inline-block mx-auto w-fit border border-slate-100">
           🔒 Multi-Tenant Data Isolation Active
        </p>
      </div>
    </div>
  )
}
