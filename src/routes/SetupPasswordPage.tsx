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

    // 1. Validation Checks
    if (password.length < 8) {
      setValidationError("Password must be at least 8 characters long.")
      return
    }
    if (!/[A-Z]/.test(password)) {
      setValidationError("Password must contain at least one capital letter.")
      return
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setValidationError("Password must contain at least one symbol.")
      return
    }
    if (password !== confirm_password) {
      setValidationError("Passwords do not match.")
      return
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
    <div className="min-h-screen py-20 px-6 bg-[#eefaf9] flex flex-col items-center justify-center">
      <div className="mb-12">
        <img src={logo} alt="Vorqard" className="h-14 w-auto" />
      </div>

      <div className="max-w-md w-full">
        <motion.div
           initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
           className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-2xl relative"
        >
           <h2 className="text-3xl font-black tracking-tight mb-10 text-[#0a1b39]">Set Password</h2>

           <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 transition-colors">
                    <Lock size={18} />
                  </div>
                  <input 
                    required 
                    type="password"
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full bg-white border-[1.5px] border-[#00a8b3]/30 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-[#00a8b3] transition-all text-base font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1 flex items-center gap-2">
                  Confirm Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 transition-colors">
                    <Lock size={18} />
                  </div>
                  <input 
                    required 
                    type="password"
                    autoComplete="new-password"
                    value={formData.confirm_password}
                    onChange={(e) => setFormData({...formData, confirm_password: e.target.value})}
                    className="w-full bg-white border-[1.5px] border-[#00a8b3]/30 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-[#00a8b3] transition-all text-base font-medium"
                  />
                </div>
              </div>

              {validationError && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs font-bold text-center"
                >
                  {validationError}
                </motion.p>
              )}

              <div className="pt-2">
                <button 
                  disabled={loading}
                  className="w-full bg-[#00a8b3] hover:bg-[#00929c] active:scale-[0.98] text-white rounded-xl py-4 font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-[#00a8b3]/20 text-base uppercase tracking-wider"
                >
                  {loading ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <>Activate System <ArrowRight size={20} /></>
                  )}
                </button>
              </div>
           </form>
        </motion.div>
      </div>
    </div>
  )
}
