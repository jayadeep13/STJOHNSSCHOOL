"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Incorrect password.");
        setLoading(false);
        return;
      }
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm ring-1 ring-ink/10"
    >
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-indigo/10">
        <Lock className="h-5 w-5 text-indigo" strokeWidth={1.75} />
      </div>
      <h1 className="mt-4 text-center font-display text-xl font-semibold text-indigo">Admin sign in</h1>
      <p className="mt-1 text-center text-sm text-ink/60">Manage the school gallery.</p>

      <label className="mt-6 block text-xs font-semibold uppercase tracking-wide text-ink/50">
        Password
      </label>
      <input
        type="password"
        autoFocus
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-ink/15 px-3 py-2.5 text-sm text-ink outline-none focus:border-brick focus:ring-1 focus:ring-brick"
      />

      {error && <p className="mt-3 text-sm text-brick">{error}</p>}

      <button
        type="submit"
        disabled={loading || !password}
        className="mt-6 w-full rounded-full bg-brick px-4 py-2.5 text-sm font-semibold text-paper shadow-sm transition-colors hover:bg-brick-dark disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
