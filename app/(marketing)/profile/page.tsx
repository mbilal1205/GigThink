"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Next.js Router for Secure Redirection
// 1. Purana client hatakar hamara banaya hua secure browser client import karein
import { getSupabaseBrowserClient } from "@/utils/supabase/client";
import { User, Mail, CreditCard, ShieldCheck, RefreshCw, Sparkles, CheckCircle2, LogOut } from "lucide-react";

// 2. Global shared instance call karein taaki session dubaara crash na ho
const supabase = getSupabaseBrowserClient();

interface ProfileData {
  id: string;
  name: string;
  email: string;
  subscription_plan: string;
  subscription_status: string;
  trial_starts_at: string;
  trial_ends_at: string;
  created_at: string;
  paddle_customer_id: string | null;
  paddle_subscription_id: string | null;
  subscription_end_date: string | null;
}

export default function ProfilePage() {
  const router = useRouter(); 
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      setLoading(true);
      
      // 3. Sahi active session fetch engine ka wait karein
      const { data: { session }, error: authError } = await supabase.auth.getSession();
      
      if (authError || !session || !session.user) {
        console.warn("âš ï¸ Session verification deferred or missing. Redirecting user to gateway...");
        router.push("/app.gigthink.com/auth/login"); 
        return;
      }

      const user = session.user;

      // 4. User profile data table sync call mapping
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .maybeSingle(); // single() ki jagah maybeSingle() lagayein taaki empty data par page blank na ho

      if (error) throw error;

      if (data) {
        // Supabase standard user email fallback assignment
        setProfile({
          ...data,
          email: user.email || data.email || "No email assigned"
        });
        setEditedName(data.name || "");
      } else {
        // Agar record na miley toh fallback create karein taaki page blank na rahe
        setProfile({
          id: user.id,
          name: "New User",
          email: user.email || "",
          subscription_plan: "free",
          subscription_status: "active",
          trial_starts_at: "",
          trial_ends_at: "",
          created_at: new Date().toISOString(),
          paddle_customer_id: null,
          paddle_subscription_id: null,
          subscription_end_date: null
        });
        setEditedName("New User");
      }
    } catch (err: any) {
      console.error("âŒ Profile Fetch Exception Catch Block:", err.message);
      setStatusMessage({ type: "error", text: "Unable to sync profile credentials with database." });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateName = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile || !editedName.trim() || editedName === profile.name) return;

    try {
      setUpdating(true);
      setStatusMessage(null);

      const { error } = await supabase
        .from("profiles")
        .update({ name: editedName.trim(), updated_at: new Date().toISOString() })
        .eq("id", profile.id);

      if (error) throw error;

      setProfile((prev) => prev ? { ...prev, name: editedName.trim() } : null);
      setStatusMessage({ type: "success", text: "Profile identity parameters updated successfully." });
    } catch (err: any) {
      setStatusMessage({ type: "error", text: err.message || "Failed to update structural changes." });
    } finally {
      setUpdating(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/app.gigthink.com/auth/login");
  };

  if (loading) {
    return (
      <div className="flex flex-col gap-3 items-center justify-center bg-zinc-950 min-h-screen text-zinc-500">
        <RefreshCw className="w-5 h-5 text-white animate-spin" />
        <p className="text-[11px] font-medium tracking-wide">Verifying Secure Token Identity...</p>
      </div>
    );
  }

  if (!profile) return null;

  return (
    <div className="flex-1 bg-zinc-950 min-h-screen text-zinc-200 overflow-y-auto p-4 sm:p-6 md:p-8 antialiased">
      <div className="max-w-3xl mx-auto space-y-6">
        
        <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">Account Parameters</h1>
            <p className="text-xs text-zinc-400 mt-0.5">Control your premium profile identities and ongoing database credentials.</p>
          </div>
          <button 
            onClick={handleSignOut}
            className="inline-flex items-center gap-1.5 text-xs bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-red-400 border border-zinc-800 px-3 py-1.5 rounded-lg transition-all cursor-pointer active:scale-95"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>

        {statusMessage && (
          <div className={`p-3 rounded-lg text-xs font-medium border ${
            statusMessage.type === "success" 
              ? "bg-emerald-950/20 border-emerald-800/60 text-emerald-400" 
              : "bg-red-950/20 border-red-800/60 text-red-400"
          }`}>
            {statusMessage.text}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-zinc-900/40 border border-zinc-850 rounded-xl p-5 shadow-xs">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-zinc-800/60">
                <User className="w-4 h-4 text-zinc-400" />
                <h2 className="text-sm font-bold text-white">Identity Details</h2>
              </div>

              <form onSubmit={handleUpdateName} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Email Address</label>
                  <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-850 rounded-lg px-3 py-2 text-sm text-zinc-500 select-none cursor-not-allowed">
                    <Mail className="w-4 h-4 text-zinc-700" />
                    <span>{profile?.email}</span>
                  </div>
                  <p className="text-[10px] text-zinc-600 mt-1">Account authentication emails cannot be altered directly.</p>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Full Registered Name</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                      className="flex-1 bg-zinc-950 border border-zinc-850 focus:border-zinc-700 outline-none rounded-lg px-3 py-1.5 text-sm text-white transition-all placeholder:text-zinc-700"
                      placeholder="Enter profile full name"
                      required
                    />
                    <button
                      type="submit"
                      disabled={updating || !editedName.trim() || editedName === profile?.name}
                      className="bg-white text-black text-xs font-bold px-4 py-1.5 rounded-lg hover:bg-zinc-200 transition-all disabled:bg-zinc-900 disabled:text-zinc-600 cursor-pointer disabled:cursor-not-allowed border border-transparent"
                    >
                      {updating ? "Saving..." : "Save"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          {/* Right Column / Sidebar Info area (Optional placeholder to close layout syntax gracefully) */}
          <div className="bg-zinc-900/40 border border-zinc-850 rounded-xl p-5 h-fit space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-zinc-800/60">
              <ShieldCheck className="w-4 h-4 text-zinc-400" />
              <h2 className="text-sm font-bold text-white">Tier Plan</h2>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-zinc-400 capitalize">{profile.subscription_plan} Account</span>
              <span className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded border border-zinc-700 uppercase font-semibold">
                {profile.subscription_status}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
