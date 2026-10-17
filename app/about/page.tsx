import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { HowItWorks } from "@/components/home/how-it-works";
import { CtaBand } from "@/components/cta-band";
import { images } from "@/lib/images";
import { pageMeta } from "@/lib/meta";
import { site } from "@/content/site";

export const metadata = pageMeta({
  title: "Meet Your Coach: Friendly, Practical Fitness Coaching",
  description:
    "Meet your FitForm Fitness coach. Personalised plans, friendly accountability and a practical approach to sustainable progress, online across South Africa.",
  path: "/about",
});

export default function AboutPage() {
  const c = site.coach;
  return (
    <>
      <PageIntro
        title="Meet Your Coach"
        text="Friendly coaching, honest accountability and a plan that respects your life outside training."
        image="stretch"
        imageAlt="A coach helps a client with an assisted leg stretch on a mat"
      />

      <section aria-labelledby="approach-title" className="bg-ground">
        <div className="wrap grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:py-40">
          <div data-reveal className="lg:col-span-5">
            <h2 id="approach-title" className="text-title max-w-[12ch]">
              {c.name ? `Hi, I’m ${c.name}` : "How Your Coach Works"}
            </h2>
          </div>
          <div data-reveal className="space-y-6 lg:col-span-6 lg:col-start-7">
            {c.bio && <p className="text-lead">{c.bio}</p>}
            {c.approach.map((t) => (
              <p key={t} className="text-lead text-ink-soft">{t}</p>
            ))}
            {c.qualifications.length > 0 && (
              <>
                <h3 className="pt-4 text-[1.2rem] font-semibold">Qualifications</h3>
                <ul className="space-y-2">
                  {c.qualifications.map((q) => (
                    <li key={q} className="text-ink-soft">{q}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </section>

      <section aria-labelledby="values-title" className="on-dark bg-ink text-on-ink">
        <div className="wrap grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:py-36">
          <div data-reveal className="lg:col-span-5">
            <h2 id="values-title" className="text-title max-w-[12ch] text-on-ink">What You Can Expect</h2>
            <div className="lean relative mt-12 aspect-[4/3] overflow-hidden" style={{ ["--lean-x" as string]: "14%" }}>
              <Image src={images.outdoor} alt="A man doing push-ups on the grass outdoors" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" placeholder="blur" />
            </div>
          </div>
          <ul data-reveal className="flex flex-col justify-center gap-12 lg:col-span-5 lg:col-start-8">
            {site.reasons.map((r) => (
              <li key={r.title}>
                <h3 className="text-[1.5rem] leading-snug font-semibold text-on-ink">
                  <span aria-hidden="true" className="lean mr-3 inline-block h-3.5 w-5 bg-primary align-[0.06em]" style={{ ["--lean-x" as string]: "30%" }} />
                  {r.title}
                </h3>
                <p className="mt-3 max-w-[40ch] text-on-ink-muted">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HowItWorks />
      <CtaBand title="Let’s Talk About Your Goals" image="service-5" imageAlt="Three people stretch together outdoors before a workout" />
    </>
  );
}
