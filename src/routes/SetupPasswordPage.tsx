import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Loader2, Lock, ShieldCheck, CheckCircle2, 
  ArrowRight, XCircle
} from 'lucide-react'
import logo from "@/assets/vorqard-logo.png"

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
    confirm_password: ''
  })
  const [validationError, setValidationError] = useState<string | null>(null)

  // 1. Verify Token on Load
  useEffect(() => {
    async function verify() {
      if (!token) {
        setError("Missing verification token.")
        setVerifying(false)
        return
      }

      try {
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'
        const res = await fetch(`${apiBaseUrl}/api/v1/onboarding/verify/${token}`)
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
    setValidationError(null)

    const { password, confirm_password } = formData

    // 1. Complexity Validation (8+ chars, Capital, Symbol)
    const hasCapital = /[A-Z]/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    if (password.length < 8 || !hasCapital || !hasSymbol) {
      setValidationError("Password must have at least 8 characters including a capital letter, and special symbol (&%@#!)");
      return;
    }

    // 2. Match Validation
    if (password !== confirm_password) {
      setValidationError("Please make sure both passwords match");
      return;
    }

    setLoading(true)
    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'
      const response = await fetch(`${apiBaseUrl}/api/v1/onboarding/activate`, {
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
          const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL || "http://localhost:5173"
          window.location.href = `${dashboardUrl}/login`
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
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#eefaf9]">
         <Loader2 className="w-12 h-12 text-[#00a8b3] animate-spin mb-6" />
         <p className="text-muted-foreground font-bold animate-pulse">Running Security Verification...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-[#eefaf9]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white rounded-[2rem] p-10 text-center shadow-2xl"
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
      <div className="min-h-screen flex items-center justify-center p-6 bg-[#eefaf9]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-[2rem] p-10 text-center shadow-2xl"
        >
          <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="text-3xl font-black mb-4 tracking-tight">Welcome Aboard!</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            Your VORQARD environment for <b>{hospitalData?.hospital_name}</b> has been provisioned. Redirecting to your dashboard...
          </p>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
             <motion.div 
               initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 3 }}
               className="h-full bg-[#00a8b3]" 
             />
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#eefaf9] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-[380px] flex flex-col items-center">
        {/* Compact Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <img src={logo} alt="Vorqard" className="h-10 w-auto" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }} 
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1 }}
           className="w-full bg-white rounded-[2rem] p-7 shadow-2xl border border-white/50"
        >
           <h2 className="text-xl font-black tracking-tight mb-8 text-[#0a1b39] text-center">Set Password</h2>

           <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                  New Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#00a8b3] transition-colors">
                    <Lock size={16} />
                  </div>
                  <input 
                    required 
                    type="password"
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full bg-slate-50/50 border-[1.5px] border-slate-100 rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-[#00a8b3] focus:bg-white transition-all text-sm font-medium"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                  Confirm Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#00a8b3] transition-colors">
                    <Lock size={16} />
                  </div>
                  <input 
                    required 
                    type="password"
                    autoComplete="new-password"
                    value={formData.confirm_password}
                    onChange={(e) => setFormData({...formData, confirm_password: e.target.value})}
                    className="w-full bg-slate-50/50 border-[1.5px] border-slate-100 rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-[#00a8b3] focus:bg-white transition-all text-sm font-medium"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {validationError && (
                <motion.p 
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-[9px] font-bold text-center mt-2"
                >
                  {validationError}
                </motion.p>
              )}

              <div className="pt-2">
                <button 
                  disabled={loading}
                  className="w-full gradient-primary text-white rounded-xl py-3.5 font-bold flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#00a8b3]/20 text-[11px] uppercase tracking-widest overflow-hidden relative"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin" />
                      <span>Syncing...</span>
                    </div>
                  ) : (
                    <>Activate System <ArrowRight size={16} /></>
                  )}
                </button>
              </div>
           </form>
        </motion.div>
        
        <p className="mt-6 text-[9px] text-slate-400 font-medium">
          &copy; 2026 Vorqard Technologies. All rights reserved.
        </p>
      </div>
    </div>
  )
}
