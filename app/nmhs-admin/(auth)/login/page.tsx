"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { Lock, Mail, AlertCircle } from "lucide-react";
import { signIn } from "../../actions";
import { school } from "@/lib/data/school";

export default function AdminLoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    setError(null);
    startTransition(async () => {
      const result = await signIn(formData);
      if (result?.error) setError(result.error);
    });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-mist px-4 py-12">
      <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-xl ring-1 ring-navy-950/5">
        <div className="flex flex-col items-center text-center">
          <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-navy-900/10">
            <Image src="/logo.png" alt={`${school.name} logo`} fill sizes="56px" className="object-cover" />
          </div>
          <h1 className="mt-4 font-display text-lg font-bold text-navy-950">
            Admin Login
          </h1>
          <p className="mt-1 text-sm text-ink-600">
            {school.name} — Notice Management
          </p>
        </div>

        <form action={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-900">
              Email
            </label>
            <div className="relative">
              <Mail size={17} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-300" />
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="username"
                className="w-full rounded-xl border border-navy-950/15 py-2.5 pl-10 pr-4 text-sm text-ink-900 outline-none transition-colors focus:border-navy-900 focus:ring-2 focus:ring-navy-900/15"
                placeholder="admin@school.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-ink-900">
              Password
            </label>
            <div className="relative">
              <Lock size={17} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-300" />
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="w-full rounded-xl border border-navy-950/15 py-2.5 pl-10 pr-4 text-sm text-ink-900 outline-none transition-colors focus:border-navy-900 focus:ring-2 focus:ring-navy-900/15"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && (
            <div className="flex items-start gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-700">
              <AlertCircle size={16} className="mt-0.5 shrink-0" />
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-full bg-navy-950 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-700 disabled:opacity-60"
          >
            {isPending ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
