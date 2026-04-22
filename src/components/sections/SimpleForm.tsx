"use client";

import { FormEvent, useState } from "react";

// ─── Shared primitives ─────────────────────────────────────────────────────────

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[0.62rem] font-bold uppercase tracking-widest text-[var(--ink-400)] mb-2">
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-[var(--primary)]/10 bg-white px-4 py-3 text-sm text-[var(--ink)] placeholder:text-[var(--ink-400)] outline-none focus:border-[var(--primary)]/35 focus:ring-2 focus:ring-[var(--primary)]/8 transition-all";

function TextInput({
  id, name, type = "text", placeholder, required,
}: {
  id: string; name: string; type?: string; placeholder: string; required?: boolean;
}) {
  return <input id={id} name={name} type={type} placeholder={placeholder} required={required} className={inputCls} />;
}

function SelectInput({ id, name, children, required }: {
  id: string; name: string; children: React.ReactNode; required?: boolean;
}) {
  return (
    <select id={id} name={name} required={required} className={`${inputCls} appearance-none`}>
      {children}
    </select>
  );
}

function TextareaInput({ id, name, placeholder, rows = 4, required }: {
  id: string; name: string; placeholder: string; rows?: number; required?: boolean;
}) {
  return (
    <textarea
      id={id} name={name} placeholder={placeholder} rows={rows} required={required}
      className={`${inputCls} resize-none`}
    />
  );
}

// ─── Donate amount picker ──────────────────────────────────────────────────────

const AMOUNTS = [
  { value: "200", label: "GHS 200", sub: "Hygiene Kit" },
  { value: "500", label: "GHS 500", sub: "Starter Farm Pack", featured: true },
  { value: "2000", label: "GHS 2,000", sub: "STEM Scholarship" },
];

function AmountPicker() {
  const [selected, setSelected] = useState("500");
  const [custom, setCustom] = useState("");

  return (
    <div>
      <FieldLabel>Select amount</FieldLabel>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {AMOUNTS.map((a) => (
          <button
            key={a.value}
            type="button"
            onClick={() => { setSelected(a.value); setCustom(""); }}
            className="relative flex flex-col items-center rounded-xl border py-3 px-2 text-center transition-all hover:border-[var(--primary)]/30"
            style={{
              borderColor: selected === a.value ? "var(--primary)" : "rgba(0,80,53,0.10)",
              backgroundColor: selected === a.value ? "rgba(0,80,53,0.06)" : "white",
            }}
          >
            {a.featured && (
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--accent)] px-2 py-0.5 text-[0.5rem] font-bold uppercase tracking-wider text-white">
                Popular
              </span>
            )}
            <span className="font-bold text-sm text-[var(--ink)]">{a.label}</span>
            <span className="text-[0.6rem] text-[var(--ink-400)] mt-0.5">{a.sub}</span>
          </button>
        ))}
      </div>
      <input
        type="number"
        name="amount"
        placeholder="Or enter a custom amount (GHS)"
        value={custom || selected}
        onChange={(e) => { setCustom(e.target.value); setSelected(""); }}
        className={inputCls}
      />
    </div>
  );
}

// ─── Field sets per form type ──────────────────────────────────────────────────

function TrainingFields() {
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-4">
        <div><FieldLabel>First name</FieldLabel><TextInput id="firstname" name="firstname" placeholder="Kofi" required /></div>
        <div><FieldLabel>Last name</FieldLabel><TextInput id="lastname" name="lastname" placeholder="Mensah" required /></div>
      </div>
      <div><FieldLabel>Email address</FieldLabel><TextInput id="email" name="email" type="email" placeholder="kofi@example.com" required /></div>
      <div><FieldLabel>Phone number</FieldLabel><TextInput id="phone" name="phone" type="tel" placeholder="+233 55 000 0000" /></div>
      <div><FieldLabel>District / Community</FieldLabel><TextInput id="location" name="location" placeholder="e.g. Kulfuo, Upper West Region" /></div>
      <div>
        <FieldLabel>Programme track</FieldLabel>
        <SelectInput id="programme" name="programme" required>
          <option value="">Select a track</option>
          <option value="healthcare">Healthcare &amp; Sanitation</option>
          <option value="agribusiness">Agribusiness &amp; Rural Development</option>
        </SelectInput>
      </div>
      <div><FieldLabel>Why are you applying?</FieldLabel><TextareaInput id="message" name="message" placeholder="Tell us about your current situation and what you hope to gain…" required /></div>
    </>
  );
}

function ScholarshipFields() {
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-4">
        <div><FieldLabel>First name</FieldLabel><TextInput id="firstname" name="firstname" placeholder="Amina" required /></div>
        <div><FieldLabel>Last name</FieldLabel><TextInput id="lastname" name="lastname" placeholder="Sulemana" required /></div>
      </div>
      <div><FieldLabel>Email address</FieldLabel><TextInput id="email" name="email" type="email" placeholder="amina@example.com" required /></div>
      <div><FieldLabel>Phone number</FieldLabel><TextInput id="phone" name="phone" type="tel" placeholder="+233 55 000 0000" /></div>
      <div><FieldLabel>Current institution</FieldLabel><TextInput id="school" name="school" placeholder="School / university name" required /></div>
      <div>
        <FieldLabel>STEM field of study</FieldLabel>
        <SelectInput id="field" name="field" required>
          <option value="">Select your field</option>
          <option value="engineering">Engineering</option>
          <option value="medicine">Medicine / Health Sciences</option>
          <option value="science">Natural Sciences</option>
          <option value="technology">Technology / Computing</option>
          <option value="mathematics">Mathematics</option>
          <option value="agriculture">Agricultural Science</option>
          <option value="other">Other STEM</option>
        </SelectInput>
      </div>
      <div>
        <FieldLabel>Academic level</FieldLabel>
        <SelectInput id="level" name="level" required>
          <option value="">Select level</option>
          <option value="secondary">Secondary (SHS)</option>
          <option value="tertiary">Tertiary (University / Polytechnic)</option>
        </SelectInput>
      </div>
      <div><FieldLabel>Why should we choose you?</FieldLabel><TextareaInput id="message" name="message" placeholder="Tell us about your academic performance, goals, and circumstances…" required /></div>
    </>
  );
}

function DonateFields() {
  return (
    <>
      <AmountPicker />
      <div className="grid sm:grid-cols-2 gap-4">
        <div><FieldLabel>First name</FieldLabel><TextInput id="firstname" name="firstname" placeholder="Ama" required /></div>
        <div><FieldLabel>Last name</FieldLabel><TextInput id="lastname" name="lastname" placeholder="Boateng" required /></div>
      </div>
      <div><FieldLabel>Email address</FieldLabel><TextInput id="email" name="email" type="email" placeholder="ama@example.com" required /></div>
      <div><FieldLabel>Phone number</FieldLabel><TextInput id="phone" name="phone" type="tel" placeholder="+233 55 000 0000" /></div>
      <div>
        <FieldLabel>Designate your gift (optional)</FieldLabel>
        <SelectInput id="designation" name="designation">
          <option value="">Where it&apos;s needed most</option>
          <option value="healthcare">Healthcare &amp; Sanitation</option>
          <option value="agribusiness">Agribusiness Training</option>
          <option value="stem">STEM Scholarships</option>
        </SelectInput>
      </div>
      <div><FieldLabel>Message (optional)</FieldLabel><TextareaInput id="message" name="message" placeholder="Leave a note with your donation…" rows={3} /></div>
    </>
  );
}

function VolunteerFields() {
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-4">
        <div><FieldLabel>First name</FieldLabel><TextInput id="firstname" name="firstname" placeholder="Kwame" required /></div>
        <div><FieldLabel>Last name</FieldLabel><TextInput id="lastname" name="lastname" placeholder="Asante" required /></div>
      </div>
      <div><FieldLabel>Email address</FieldLabel><TextInput id="email" name="email" type="email" placeholder="kwame@example.com" required /></div>
      <div><FieldLabel>Phone number</FieldLabel><TextInput id="phone" name="phone" type="tel" placeholder="+233 55 000 0000" /></div>
      <div>
        <FieldLabel>Role preference</FieldLabel>
        <SelectInput id="role" name="role" required>
          <option value="">Select a role</option>
          <option value="facilitator">Programme Facilitator</option>
          <option value="liaison">Community Liaison</option>
          <option value="trainer">Skills Trainer</option>
          <option value="mentor">STEM Mentor</option>
        </SelectInput>
      </div>
      <div>
        <FieldLabel>Availability</FieldLabel>
        <SelectInput id="availability" name="availability">
          <option value="">Select availability</option>
          <option value="remote">Remote only</option>
          <option value="inperson">In-person (Upper West Region)</option>
          <option value="both">Both remote and in-person</option>
        </SelectInput>
      </div>
      <div><FieldLabel>Tell us about yourself</FieldLabel><TextareaInput id="message" name="message" placeholder="Your background, expertise, and what motivated you to volunteer…" required /></div>
    </>
  );
}

// ─── Labels & config ───────────────────────────────────────────────────────────

type FormType = "apply-training" | "apply-scholarship" | "donate" | "volunteer";

const CONFIG: Record<FormType, { submit: string; accent: string }> = {
  "apply-training":   { submit: "Submit application",  accent: "var(--primary)" },
  "apply-scholarship":{ submit: "Submit application",  accent: "var(--primary)" },
  donate:             { submit: "Complete donation",    accent: "var(--accent)" },
  volunteer:          { submit: "Submit interest",      accent: "var(--primary)" },
};

// ─── Exported component ────────────────────────────────────────────────────────

export function SimpleForm({ formType }: { formType: FormType }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const cfg = CONFIG[formType];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());
    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType, payload }),
      });
      if (res.ok) { setStatus("success"); (event.target as HTMLFormElement).reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl bg-[#fafaf9] p-7 sm:p-10 shadow-xl shadow-black/4"
      style={{ border: "1px solid rgba(0,80,53,0.08)" }}
    >
      {formType === "apply-training"    && <TrainingFields />}
      {formType === "apply-scholarship" && <ScholarshipFields />}
      {formType === "donate"            && <DonateFields />}
      {formType === "volunteer"         && <VolunteerFields />}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-xl py-3.5 text-sm font-bold text-white transition-opacity disabled:opacity-60 mt-1"
        style={{ backgroundColor: cfg.accent }}
      >
        {status === "loading" ? "Submitting…" : cfg.submit}
      </button>

      {status === "success" && (
        <p className="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-center text-sm font-medium text-emerald-700">
          Thank you — we&apos;ll be in touch within 5 business days.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-xl border border-rose-100 bg-rose-50 px-4 py-3 text-center text-sm font-medium text-rose-700">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
