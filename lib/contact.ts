import { site } from "@/content/site";

const c = site.contact;

/** Tap-to-call link, or null when no phone number is set yet. */
export const telHref = c.phone ? `tel:${c.phone.replace(/\s+/g, "")}` : null;

/** Phone number written for people to read, e.g. +27 82 123 4567. */
export function prettyPhone(phone: string = c.phone): string {
  const digits = phone.replace(/[^\d+]/g, "");
  const m = digits.match(/^\+27(\d{2})(\d{3})(\d{4})$/);
  return m ? `+27 ${m[1]} ${m[2]} ${m[3]}` : phone;
}

/** WhatsApp link (international format, no leading 0), or null when not set yet. */
export function whatsappHref(message?: string): string | null {
  if (!c.whatsapp) return null;
  const n = c.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${n}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
}

export const mailHref = c.email ? `mailto:${c.email}` : null;

/** Where "Speak to a coach" goes: WhatsApp if available, otherwise the enquiry form. */
export const speakHref = whatsappHref(`Hi ${site.shortName}, I'd like to speak to a coach.`) ?? "/contact#enquiry";

export const socials = Object.entries(site.social)
  .filter(([, url]) => Boolean(url))
  .map(([name, url]) => ({ name: name.charAt(0).toUpperCase() + name.slice(1), url }));
