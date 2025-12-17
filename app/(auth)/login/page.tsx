"use client";

import { useActionState } from "react";
import { loginAction } from "@/lib/auth-actions"; // Kita akan buat ini sebentar lagi

interface LoginState {
  error?: string;
}

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState<LoginState, FormData>(loginAction, {});

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-tight">Admin Login</h1>
          <p className="text-sm text-gray-500 mt-2">Enter your credentials to access the lab.</p>
        </div>

        <form action={formAction} className="space-y-4">
          {state.error && (
            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg text-center">
              {state.error}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email</label>
            <input 
              name="email" 
              type="email" 
              required
              placeholder="admin@a76labs.com"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Password</label>
            <input 
              name="password" 
              type="password" 
              required 
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button 
            type="submit" 
            disabled={isPending}
            className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-all disabled:opacity-50"
          >
            {isPending ? "Verifying..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}