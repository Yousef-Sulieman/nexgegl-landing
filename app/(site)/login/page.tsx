"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { Lock } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { NexgeglLogo } from "../components/Logo";
// import { supabase } from "@/lib/supabase/client";

export default function LoginPage() {
  // const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data }) => {
  //     if (data.session) {
  //       router.replace("/portal");
  //     }
  //   });
  // }, [router]);

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError(null);
  //   setLoading(true);

  //   const { error } = await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   });

  //   setLoading(false);

  //   if (error) {
  //     setError("Invalid credentials or unauthorized access.");
  //     return;
  //   }

  //   router.replace("/portal");
  // };

  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-radial-glow opacity-60" />
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.03]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <NexgeglLogo />
        </div>

        <Card
          bordered
          className="bg-navy-800/80 backdrop-blur-xl shadow-2xl border-gold-500/20"
        >
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white">
              Access Command Center
            </h2>
            <p className="text-sm text-white/50 mt-2">
              Secure login for authorized executives only.
            </p>
          </div>

          <form  className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-gold-400 mb-2 uppercase tracking-wide">
                Client Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="executive@company.sa"
                className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white
                  focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none
                  transition-all placeholder:text-white/20"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-medium text-gold-400 mb-2 uppercase tracking-wide">
                 Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white
                    focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none
                    transition-all placeholder:text-white/20"
                />
                <Lock
                  size={16}
                  className="absolute right-1 top-1/2 -translate-y-1/2 text-white/20"
                />
              </div>
            </div>

            {/* Error */}
            {/* {error && (
              <p className="text-sm text-red-400 text-center"></p>
            )} */}

            <Button
              type="submit"
              fullWidth
              size="lg"
              // disabled={loading}
              className="mt-4"
            >
              Authenticate & Enter
              {/* {loading ? "Authenticating..." : "Authenticate & Enter"} */}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="#"
              className="text-xs text-white/30 hover:text-gold-400 transition-colors"
            >
              Contact Support for Access Issues
            </Link>
          </div>
        </Card>

        <div className="mt-8 text-center text-white/20 text-xs flex justify-center items-center gap-2">
          <Lock size={12} />
          <span>End-to-End Encrypted Session</span>
        </div>
      </motion.div>
    </div>
  );
}
