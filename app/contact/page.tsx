import { PageIntro } from "@/components/page-intro";
import { EnquiryCoupon } from "@/components/enquiry-coupon";
import { CtaBand } from "@/components/cta-band";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/icons";
import { mailHref, prettyPhone, socials, telHref, whatsappHref } from "@/lib/contact";
import { pageMeta } from "@/lib/meta";
import { site } from "@/content/site";

export const metadata = pageMeta({
  title: "Contact Us: Speak To A Coach",
  description:
    "Get in touch with FitForm Fitness about personal training or online coaching in South Africa. Send an enquiry, WhatsApp or call to speak to a coach.",
  path: "/contact",
});

export default function ContactPage() {
  const c = site.contact;
  const wa = whatsappHref(`Hi ${site.shortName}, I'd like to find out about training.`);
  const rows: { icon: React.ReactNode; label: string; value: React.ReactNode }[] = [];
  if (wa)
    rows.push({
      icon: <WhatsAppIcon className="h-5 w-5" />,
      label: "WhatsApp",
      value: <a className="link" href={wa} target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a>,
    });
  if (telHref) rows.push({ icon: <PhoneIcon />, label: "Phone", value: <a className="link num" href={telHref}>{prettyPhone()}</a> });
  if (mailHref) rows.push({ icon: <MailIcon />, label: "Email", value: <a className="link" href={mailHref}>{c.email}</a> });
  rows.push({
    icon: <PinIcon />,
    label: c.address ? "Training location" : "Where we train",
    value: (
      <>
        {c.address ? <span className="block">{c.address}</span> : null}
        <span className="block">{c.areaServed}</span>
        {c.mapsUrl && (
          <a className="link mt-1 inline-block" href={c.mapsUrl} target="_blank" rel="noopener noreferrer">
            Open in Google Maps
          </a>
        )}
      </>
    ),
  });
  if (c.hours.length)
    rows.push({
      icon: <ClockIcon />,
      label: "Session times",
      value: (
        <ul>
          {c.hours.map((h) => (
            <li key={h.days} className="num">
              {h.days}: {h.time}
            </li>
          ))}
        </ul>
      ),
    });

  return (
    <>
      <PageIntro
        title="Speak To A Coach"
        text="Tell us about your goals, your experience and when you’re free to train. We’ll help you find the right place to start."
        image="service-2"
        imageAlt="A woman stretches on a mat while following a workout on her laptop at home"
      />

      <section aria-labelledby="details-title" className="bg-surface">
        <div className="wrap grid gap-10 py-20 sm:py-28 lg:grid-cols-12">
          <div data-reveal className="lg:col-span-4">
            <h2 id="details-title" className="text-title max-w-[10ch]">Ways To Reach Us</h2>
            {socials.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a className="link" href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <ul data-reveal className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {rows.map((r) => (
              <li key={r.label} className="flex gap-4 bg-ground p-6 sm:p-7">
                <span className="lean grid h-10 w-11 shrink-0 place-items-center bg-primary pr-1 text-on-primary" style={{ ["--lean-x" as string]: "16%" }}>
                  {r.icon}
                </span>
                <div>
                  <h3 className="text-[1.05rem] font-semibold">{r.label}</h3>
                  <div className="mt-1 text-ink-soft">{r.value}</div>
                </div>
              </li>
            ))}
            {!wa && !telHref && !mailHref && (
              <li className="flex flex-col justify-center bg-ground p-6 sm:p-7">
                <h3 className="text-[1.05rem] font-semibold">Send An Enquiry</h3>
                <p className="mt-1 text-ink-soft">The quickest way to reach us right now is the enquiry form below.</p>
              </li>
            )}
          </ul>
        </div>
      </section>

      <EnquiryCoupon title="Send Us An Enquiry" />
      <CtaBand />
    </>
  );
}
