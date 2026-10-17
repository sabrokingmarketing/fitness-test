import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { ProgrammeFinder } from "@/components/programme-finder";
import { CtaBand } from "@/components/cta-band";
import { ArrowIcon } from "@/components/icons";
import { images } from "@/lib/images";
import { pageMeta } from "@/lib/meta";
import { site } from "@/content/site";

export const metadata = pageMeta({
  title: "Training Programmes: Personal Training, Online Coaching & More",
  description:
    "Explore FitForm Fitness programmes: personal training, online coaching across South Africa, strength & conditioning, small group training and a beginner fitness programme.",
  path: "/programmes",
});

export default function ProgrammesPage() {
  return (
    <>
      <PageIntro
        title="Training Programmes"
        text="Five ways to train, each built around your goals, your ability and your schedule. Find the one that fits and start from there."
        image="service-3"
        imageAlt="A man and a woman press kettlebells overhead in a bright gym"
      />

      <nav aria-label="Programmes on this page" className="bg-surface">
        <ul className="wrap flex gap-2 overflow-x-auto py-4 [scrollbar-width:none]">
          {site.programmes.map((p) => (
            <li key={p.id} className="shrink-0">
              <a
                href={`#${p.id}`}
                className="block bg-ground px-4 py-2.5 pr-5 text-[0.95rem] font-medium text-ink transition-colors duration-150 hover:bg-primary-soft"
                style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 9px) 100%, 0 100%)" }}
              >
                {p.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {site.programmes.map((p, i) => {
        const flip = i % 2 === 1;
        return (
          <section
            key={p.id}
            id={p.id}
            aria-labelledby={`${p.id}-title`}
            className={i % 2 === 1 ? "bg-surface" : "bg-ground"}
          >
            <div className="wrap grid items-center gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:gap-12 lg:py-32">
              <div data-reveal className={`lg:col-span-6 ${flip ? "lg:order-2 lg:col-start-7" : ""}`}>
                <div
                  className={`${flip ? "lean-left" : "lean"} relative aspect-[4/3] overflow-hidden bg-surface`}
                  style={{ ["--lean-x" as string]: "12%" }}
                >
                  <Image src={images[p.image]} alt={p.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" placeholder="blur" />
                </div>
              </div>
              <div data-reveal className={`lg:col-span-5 ${flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"}`}>
                <h2 id={`${p.id}-title`} className="text-[clamp(2rem,3.4vw,3.25rem)] leading-[1.04] font-bold tracking-[-0.03em]">
                  {p.title}
                </h2>
                <p className="text-lead mt-5 text-ink-soft">{p.intro}</p>
                <h3 className="mt-8 text-[1.1rem] font-semibold">Who It’s For</h3>
                <p className="mt-2 text-ink-soft">{p.forWho}</p>
                <h3 className="mt-7 text-[1.1rem] font-semibold">What You Get</h3>
                <ul className="mt-3 space-y-2.5">
                  {p.includes.map((x) => (
                    <li key={x} className="flex gap-3 text-ink-soft">
                      <span aria-hidden="true" className="lean mt-[0.55em] h-2.5 w-4 shrink-0 bg-primary" style={{ ["--lean-x" as string]: "30%" }} />
                      {x}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 font-semibold">
                  {p.price ? p.price : <span className="text-ink-muted">Pricing: ask us for current packages.</span>}
                </p>
                <Link href={`/contact?programme=${p.id}#enquiry`} className="btn mt-7">
                  Ask about {p.title.toLowerCase().includes("programme") ? "this programme" : p.title} <ArrowIcon />
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      <ProgrammeFinder />
      <CtaBand title="Not Sure Where To Start?" text="Speak to a coach and we’ll help you choose the programme that fits your goals and your week." image="service-1" imageAlt="A coach kneels beside a client to guide a dumbbell row" />
    </>
  );
}
