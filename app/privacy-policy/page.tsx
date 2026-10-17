import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { pageMeta } from "@/lib/meta";
import { site } from "@/content/site";

export const metadata = pageMeta({
  title: "Privacy Policy (POPIA)",
  description:
    "How FitForm Fitness collects, uses and protects your personal information in line with South Africa’s Protection of Personal Information Act (POPIA).",
  path: "/privacy-policy",
});

const updated = "17 October 2026";

export default function PrivacyPage() {
  const contactLine = site.contact.email
    ? <>email us at <a className="link" href={`mailto:${site.contact.email}`}>{site.contact.email}</a></>
    : <>contact us using the <Link className="link" href="/contact">enquiry form</Link></>;

  return (
    <>
      <section aria-labelledby="page-title" className="bg-ground">
        <div className="wrap py-16 sm:py-24">
          <div className="hero-rise max-w-[62ch]">
            <h1 id="page-title" className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1] font-bold tracking-[-0.035em]">
              Privacy Policy
            </h1>
            <p className="text-lead mt-6 text-ink-soft">
              This policy explains how {site.name} collects, uses and protects your personal information, in line with
              South Africa’s Protection of Personal Information Act, 2013 (POPIA).
            </p>
            <p className="mt-4 text-[0.95rem] text-ink-muted">Last updated: {updated}</p>
          </div>

          <div className="mt-14 max-w-[68ch] space-y-10 text-ink-soft [&_h2]:text-[1.5rem] [&_h2]:leading-snug [&_h2]:font-bold [&_h2]:tracking-[-0.01em] [&_h2]:text-ink [&_li]:pl-1 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
            <div>
              <h2>Who We Are</h2>
              <p>
                {site.name} provides personal training and fitness coaching in South Africa. For POPIA purposes we are the
                “responsible party” for the personal information you share with us.
              </p>
            </div>
            <div>
              <h2>What We Collect</h2>
              <p>When you send an enquiry, we collect only what you choose to give us:</p>
              <ul>
                <li>your name, email address and phone number;</li>
                <li>your preferred training option, main fitness goal and preferred contact time;</li>
                <li>anything else you tell us in your messages, such as your availability.</li>
              </ul>
              <p>
                If you tell us about an injury or health condition, we treat it as special personal information and only use it
                to plan safe training for you, with your consent.
              </p>
            </div>
            <div>
              <h2>How We Use It</h2>
              <ul>
                <li>to reply to your enquiry and talk through training options;</li>
                <li>to plan, deliver and adjust your training if you become a client;</li>
                <li>to arrange sessions and send you messages about your training.</li>
              </ul>
              <p>We do not sell your personal information and we do not send you marketing without your permission.</p>
            </div>
            <div>
              <h2>How Your Enquiry Reaches Us</h2>
              <p>
                This website does not store your form details. When you press “Send my enquiry”, your message opens in WhatsApp
                or your email app so you can send it to us yourself. Those services handle your message under their own privacy
                policies.
              </p>
            </div>
            <div>
              <h2>Cookies</h2>
              <p>
                This website does not use advertising or tracking cookies. Our hosting provider may keep basic technical logs
                (such as IP address and browser type) to keep the site secure and working.
              </p>
            </div>
            <div>
              <h2>How Long We Keep It And How We Protect It</h2>
              <p>
                We keep your information only for as long as we need it for the purposes above, or as the law requires. We take
                reasonable steps to keep it secure and limit who can access it.
              </p>
            </div>
            <div>
              <h2>Your Rights Under POPIA</h2>
              <p>You have the right to:</p>
              <ul>
                <li>ask whether we hold personal information about you and request a copy;</li>
                <li>ask us to correct or delete your information;</li>
                <li>object to us using your information, including for direct marketing;</li>
                <li>withdraw your consent at any time;</li>
                <li>
                  lodge a complaint with the Information Regulator (South Africa) at{" "}
                  <a className="link" href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer">
                    inforegulator.org.za
                  </a>
                  .
                </li>
              </ul>
            </div>
            <div>
              <h2>Contact Us About Privacy</h2>
              <p>To use any of these rights or ask a question about this policy, {contactLine}.</p>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
