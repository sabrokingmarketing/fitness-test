"use client";

import Link from "next/link";
import { useId, useState, useSyncExternalStore } from "react";
import { site } from "@/content/site";
import { whatsappHref } from "@/lib/contact";

type Values = { name: string; email: string; phone: string; programme: string; goal: string; time: string };
type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = { name: "", email: "", phone: "", programme: "", goal: "", time: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.phone.replace(/\D/g, "").length < 9) e.phone = "Please enter a phone number we can reach you on.";
  if (!v.programme) e.programme = "Please choose a training option.";
  if (!v.goal) e.goal = "Please choose your main goal.";
  return e;
}

function compose(v: Values) {
  const p = site.programmes.find((x) => x.id === v.programme)?.title ?? v.programme;
  return [
    `Hi ${site.shortName}, I'd like to enquire about training.`,
    ``,
    `Name: ${v.name}`,
    `Email: ${v.email}`,
    `Phone: ${v.phone}`,
    `Preferred training option: ${p}`,
    `Main fitness goal: ${v.goal}`,
    `Preferred contact time: ${v.time || "Any time"}`,
  ].join("\n");
}

/**
 * The enquiry form. There is no server or paid service: on send, it opens WhatsApp
 * (or the visitor's email app) with their details filled in, ready to send to you.
 */
export function EnquiryForm({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const id = useId();
  const [v, setV] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sent" | "unavailable">("idle");

  // pre-select a programme when arriving from "Ask about this programme"
  const search = useSyncExternalStore(
    () => () => {},
    () => window.location.search,
    () => "",
  );
  const fromUrl = new URLSearchParams(search).get("programme");
  const [picked, setPicked] = useState(false);
  if (!picked && !v.programme && fromUrl && site.programmes.some((p) => p.id === fromUrl)) {
    setPicked(true);
    setV((s) => ({ ...s, programme: fromUrl }));
  }

  const set = (k: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setV((s) => ({ ...s, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
  };

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(v);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }
    const text = compose(v);
    const wa = whatsappHref(text);
    if (wa) {
      window.open(wa, "_blank", "noopener,noreferrer");
      setStatus("sent");
    } else if (site.contact.email) {
      window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent("Training enquiry")}&body=${encodeURIComponent(text)}`;
      setStatus("sent");
    } else {
      setStatus("unavailable");
    }
  }

  const dark = tone === "dark";
  const label = `block text-[0.95rem] font-medium ${dark ? "text-on-ink" : "text-ink"}`;
  const err = `mt-1.5 text-[0.9rem] font-medium ${dark ? "text-primary-on-dark" : "text-[#b42318]"}`;

  const field = (k: keyof Values, text: string, input: React.ReactNode, full = false) => (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={`${id}-${k}`} className={label}>
        {text}
      </label>
      <div className="mt-1.5">{input}</div>
      {errors[k] && (
        <p id={`${id}-${k}-err`} className={err}>
          {errors[k]}
        </p>
      )}
    </div>
  );

  const aria = (k: keyof Values) => ({
    id: `${id}-${k}`,
    name: k,
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${id}-${k}-err` : undefined,
  });

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" aria-label="Enquiry form">
      {field("name", "Name", <input {...aria("name")} className="field" autoComplete="name" value={v.name} onChange={set("name")} />)}
      {field("email", "Email", <input {...aria("email")} type="email" className="field" autoComplete="email" value={v.email} onChange={set("email")} />)}
      {field("phone", "Phone number", <input {...aria("phone")} type="tel" className="field" autoComplete="tel" inputMode="tel" value={v.phone} onChange={set("phone")} />)}
      {field(
        "programme",
        "Preferred training option",
        <select {...aria("programme")} className="field" value={v.programme} onChange={set("programme")}>
          <option value="">Choose an option</option>
          {site.programmes.map((p) => (
            <option key={p.id} value={p.id}>
              {p.title}
            </option>
          ))}
          <option value="not-sure">Not sure yet</option>
        </select>,
      )}
      {field(
        "goal",
        "Main fitness goal",
        <select {...aria("goal")} className="field" value={v.goal} onChange={set("goal")}>
          <option value="">Choose your goal</option>
          {site.form.goals.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>,
      )}
      {field(
        "time",
        "Preferred contact time",
        <select {...aria("time")} className="field" value={v.time} onChange={set("time")}>
          <option value="">Any time</option>
          {site.form.contactTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>,
      )}

      <div className="sm:col-span-2">
        <button type="submit" className={`btn w-full ${dark ? "" : "btn-dark"}`} style={{ minHeight: 56 }}>
          Send my enquiry
        </button>
        <p className={`mt-3 text-[0.875rem] leading-relaxed ${dark ? "text-on-ink-muted" : "text-ink-muted"}`}>
          We only use your details to reply to your enquiry. See our{" "}
          <Link href="/privacy-policy" className={`link ${dark ? "text-on-ink" : "text-ink"}`}>
            Privacy Policy
          </Link>
          .
        </p>
        <div aria-live="polite" className="mt-2 min-h-[1.5em]">
          {status === "sent" && (
            <p className={`font-medium ${dark ? "text-on-ink" : "text-ink"}`}>
              Thanks, {v.name.split(" ")[0]}. Your message is ready to send in the app that just opened.
            </p>
          )}
          {status === "unavailable" && (
            <p className={`font-medium ${dark ? "text-on-ink" : "text-ink"}`}>
              Thanks! Online enquiries open very soon. Please check back shortly.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
