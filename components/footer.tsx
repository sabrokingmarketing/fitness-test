import Link from "next/link";
import { site } from "@/content/site";
import { mailHref, prettyPhone, socials, telHref, whatsappHref } from "@/lib/contact";
import { LogoMark } from "@/components/logo";

// The brand closes every page as a construction: each letter knocked out of its own block.
const blockStyles = [
  { bg: "var(--primary)", h: "100%" },
  { bg: "var(--surface)", h: "74%" },
  { bg: "var(--primary)", h: "88%" },
  { bg: "var(--surface)", h: "66%" },
  { bg: "var(--primary)", h: "100%" },
  { bg: "var(--surface)", h: "80%" },
  { bg: "var(--primary)", h: "92%" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const wa = whatsappHref();
  const letters = site.shortName.split("");

  return (
    <footer className="on-dark bg-ink text-on-ink">
      <div className="wrap pt-20 sm:pt-28">
        <div
          aria-hidden="true"
          className="flex h-[22svh] min-h-[150px] items-end gap-1 sm:h-[34svh] sm:min-h-[220px]"
        >
          {letters.map((ch, i) => {
            const s = blockStyles[i % blockStyles.length];
            return (
              <span
                key={i}
                className="relative flex flex-1 items-end justify-center overflow-hidden"
                style={{ background: s.bg, height: s.h }}
              >
                <span
                  className="translate-y-[0.14em] text-[clamp(3.5rem,13vw,12.5rem)] leading-[0.8] font-extrabold tracking-[-0.04em] text-ink"
                >
                  {ch}
                </span>
              </span>
            );
          })}
        </div>
        <p className="sr-only">{site.name}</p>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-[0.95rem] font-semibold text-on-ink">Programmes</p>
            <ul className="mt-4 space-y-2.5 text-[0.95rem] text-on-ink-muted">
              {site.programmes.map((p) => (
                <li key={p.id}>
                  <Link className="hover:text-on-ink" href={`/programmes#${p.id}`}>
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[0.95rem] font-semibold text-on-ink">Explore</p>
            <ul className="mt-4 space-y-2.5 text-[0.95rem] text-on-ink-muted">
              <li><Link className="hover:text-on-ink" href="/">Home</Link></li>
              <li><Link className="hover:text-on-ink" href="/#how-it-works">How it works</Link></li>
              <li><Link className="hover:text-on-ink" href="/about">Meet your coach</Link></li>
              <li><Link className="hover:text-on-ink" href="/#faqs">FAQs</Link></li>
              <li><Link className="hover:text-on-ink" href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[0.95rem] font-semibold text-on-ink">Follow and legal</p>
            <ul className="mt-4 space-y-2.5 text-[0.95rem] text-on-ink-muted">
              {socials.map((s) => (
                <li key={s.name}>
                  <a className="hover:text-on-ink" href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.name}
                  </a>
                </li>
              ))}
              <li><Link className="hover:text-on-ink" href="/privacy-policy">Privacy Policy (POPIA)</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-4">
            <p className="text-[0.95rem] font-semibold text-on-ink">Get in touch</p>
            <ul className="mt-4 space-y-2.5 text-[0.95rem] text-on-ink-muted">
              {wa && (
                <li><a className="hover:text-on-ink" href={wa} target="_blank" rel="noopener noreferrer">WhatsApp us</a></li>
              )}
              {telHref && (
                <li><a className="num hover:text-on-ink" href={telHref}>{prettyPhone()}</a></li>
              )}
              {mailHref && (
                <li><a className="hover:text-on-ink" href={mailHref}>{site.contact.email}</a></li>
              )}
              {site.contact.address && <li>{site.contact.address}</li>}
              <li>{site.contact.areaServed}</li>
              {!wa && !telHref && !mailHref && (
                <li><Link className="link text-on-ink" href="/contact#enquiry">Send an enquiry</Link></li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 pb-28 sm:flex-row sm:items-center sm:justify-between sm:pb-10">
          <div className="flex items-center gap-3 text-[0.875rem] text-on-ink-muted">
            <LogoMark className="h-6 w-6" tone="dark" />
            <span>© {year} {site.name}. All rights reserved.</span>
          </div>
          <a href="#top" className="btn btn-sm btn-white self-start sm:self-auto">
            Back to top
          </a>
        </div>
        <p className="pb-8 text-[0.8125rem] leading-relaxed text-on-ink-muted">
          Photos by Jonathan Borba, maxhome fitness, Vitaly Gariev, Jessica Streser, Sweet Life, Heidi Erickson and Annie Spratt on Unsplash. People shown are not {site.name} clients or staff.
        </p>
      </div>
    </footer>
  );
}
