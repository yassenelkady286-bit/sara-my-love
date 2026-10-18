"use client";

import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error ?? "Something went wrong. Try again.");
        return;
      }
      window.location.reload();
    } catch {
      setError("Couldn't connect. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="login-screen">
      <div className="floating-heart heart-one">♡</div>
      <div className="floating-heart heart-two">♥</div>
      <section className="login-card">
        <div className="tiny-label">A LITTLE PLACE JUST FOR YOU</div>
        <div className="big-heart" aria-hidden="true">♡</div>
        <p className="eyebrow">To my favorite person</p>
        <h1>Hi, Sara<span>.</span></h1>
        <p className="login-copy">I made something for us.<br />Enter our little secret to come in.</p>
        <form onSubmit={submit}>
          <label className="sr-only" htmlFor="password">Our secret password</label>
          <input
            id="password"
            type="password"
            inputMode="numeric"
            autoComplete="current-password"
            placeholder="Our secret password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            maxLength={64}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Opening our world..." : "Unlock my heart  ♡"}
          </button>
        </form>
        {error && <p className="form-error" role="alert">{error}</p>}
        <p className="login-footer">made with all my love · always yours</p>
      </section>
    </main>
  );
}
