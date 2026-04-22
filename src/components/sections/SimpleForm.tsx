"use client";

import { FormEvent, useState } from "react";

export function SimpleForm({ formType }: { formType: string }) {
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const res = await fetch("/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formType, payload }),
    });
    setMessage(res.ok ? "Submitted successfully." : "Submission failed.");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 rounded-xl border bg-white p-5">
      <input name="name" required placeholder="Name" className="w-full rounded border p-2" />
      <input name="email" type="email" required placeholder="Email" className="w-full rounded border p-2" />
      <textarea name="message" required placeholder="Message" className="w-full rounded border p-2" />
      <button className="rounded-full bg-[var(--primary)] px-4 py-2 text-white">Submit</button>
      {message && <p className="text-sm">{message}</p>}
    </form>
  );
}
