import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Mail, 
  Lock, 
  User, 
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Zap
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import loginBg from "figma:asset/login-bg.png"; // Placeholder if I had one, but I'll use the unsplash tool one.

export default function LoginMVP() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate auth
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("sixlabs_session", "true");
      toast.success(isLogin ? "Welcome back to SixLabs" : "Account created successfully", {
        description: "Redirecting to your workspace..."
      });
      navigate("/app");
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-white font-body text-[#101828] overflow-hidden">
      {/* Left side: Content & Form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32 relative z-10 bg-white">
        <div className="max-w-md w-full mx-auto space-y-10">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="size-10 bg-[#101828] rounded-xl flex items-center justify-center text-white shadow-sm ring-1 ring-[#101828]/5">
              <Zap className="size-5 fill-current text-signal" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight text-[#101828]">SixLabs</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-display font-bold tracking-tight">
              {isLogin ? "Welcome back" : "Create your account"}
            </h1>
            <p className="text-[#667085] text-[15px] font-medium leading-relaxed">
              {isLogin 
                ? "Continue your performance creative journey." 
                : "Join the next generation of AI-native marketing platforms."}
            </p>
          </div>

          <div className="space-y-4">
            <Button 
              type="button"
              variant="outline"
              onClick={handleAuth}
              disabled={loading}
              className="w-full h-12 bg-white text-[#101828] border-[#F2F0EB] hover:bg-[#F9FAFB] rounded-xl font-bold shadow-sm flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
            >
              <svg className="size-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span>Continue with Google</span>
            </Button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#F2F0EB]"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold text-[#98A2B3]">
                <span className="bg-white px-3">or use email</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleAuth} className="space-y-6">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  <Label className="text-[12px] font-bold uppercase tracking-widest text-[#667085]">Full Name</Label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-[#98A2B3] group-focus-within:text-signal transition-colors" />
                    <Input 
                      placeholder="Jane Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-12 pl-11 rounded-xl border-[#F2F0EB] bg-[#F9FAFB] focus:bg-white transition-all shadow-sm"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <Label className="text-[12px] font-bold uppercase tracking-widest text-[#667085]">Email Address</Label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-[#98A2B3] group-focus-within:text-signal transition-colors" />
                <Input 
                  type="email"
                  placeholder="name@company.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="h-12 pl-11 rounded-xl border-[#F2F0EB] bg-[#F9FAFB] focus:bg-white transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-[12px] font-bold uppercase tracking-widest text-[#667085]">Password</Label>
                {isLogin && (
                  <button type="button" className="text-[12px] font-bold text-signal hover:underline underline-offset-4">Forgot password?</button>
                )}
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-[#98A2B3] group-focus-within:text-signal transition-colors" />
                <Input 
                  type="password"
                  placeholder="••••••••"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="h-12 pl-11 rounded-xl border-[#F2F0EB] bg-[#F9FAFB] focus:bg-white transition-all shadow-sm"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={loading}
              className="w-full h-12 bg-[#101828] text-white hover:bg-[#101828]/90 rounded-xl font-bold shadow-lg shadow-[#101828]/10 group transition-all"
            >
              {loading ? (
                <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <span className="flex items-center gap-2">
                  {isLogin ? "Sign in" : "Create account"}
                  <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              )}
            </Button>
          </form>

          <div className="text-center pt-2">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-[14px] font-medium text-[#667085]"
            >
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <span className="text-signal font-bold hover:underline underline-offset-4">
                {isLogin ? "Sign up" : "Sign in"}
              </span>
            </button>
          </div>

          {/* Social Auth Placeholder */}
          <div className="relative py-4">
            
            
          </div>
        </div>

        {/* Footer info */}
        
      </div>

      {/* Right side: Image/Visual */}
      <div className="hidden lg:flex flex-1 bg-[#F9FAFB] relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYWJzdHJhY3QlMjBnbGFzc21vcnBoaXNtfGVufDF8fHx8MTc4MDc3ODc1Mnww&ixlib=rb-4.1.0&q=80&w=1080" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent" />
        </div>

        {/* Floating Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 w-full max-w-sm bg-white/70 backdrop-blur-xl border border-white/40 rounded-[32px] p-8 shadow-2xl shadow-indigo-500/10"
        >
          <div className="space-y-6">
            <div className="size-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-[#F2F0EB]">
              <Zap className="size-7 text-signal fill-current" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-display font-bold text-[#101828] leading-tight">AI-Native Performance Marketing</h3>
              <p className="text-[14px] text-[#475467] leading-relaxed">
                Connect your brand assets and let our engine generate high-converting Meta ad creatives in seconds.
              </p>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="size-8 rounded-full border-2 border-white bg-[#F2F0EB] overflow-hidden">
                  <ImageWithFallback src={`https://i.pravatar.cc/100?img=${i + 10}`} />
                </div>
              ))}
              <div className="size-8 rounded-full border-2 border-white bg-[#101828] flex items-center justify-center text-[10px] font-bold text-white">
                +2k
              </div>
            </div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 size-64 bg-signal/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 left-20 size-80 bg-indigo-500/5 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}
