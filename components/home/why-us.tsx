import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { images } from "@/lib/images";
import { site } from "@/content/site";

/** Why choose us: a deep panel with the three reasons from the brief. */
export function WhyUs() {
  return (
    <section aria-labelledby="why-title" className="bg-ground px-2.5 pb-2.5 sm:px-5 sm:pb-5">
      <div className="on-dark relative overflow-hidden bg-ink text-on-ink">
        <div className="grid min-h-[min(100svh,860px)] gap-12 p-7 pt-14 sm:p-14 lg:grid-cols-12 lg:gap-8">
          <div className="relative flex flex-col lg:col-span-7">
            <div data-reveal>
              <h2 id="why-title" className="text-title max-w-[13ch] text-on-ink">Coaching That Fits Your Life</h2>
            </div>
            <div
              className="lean relative mt-12 aspect-[5/4] w-full overflow-hidden lg:absolute lg:-bottom-14 lg:left-0 lg:mt-0 lg:w-[86%] lg:translate-y-[18%]"
              style={{ ["--lean-x" as string]: "16%" }}
            >
              <Image
                src={images.coach}
                alt="A row of kettlebells lined up on a gym floor"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </div>

          <div data-reveal className="flex flex-col gap-12 lg:col-span-4 lg:col-start-9 lg:pt-2">
            {site.reasons.map((r) => (
              <div key={r.title} className="max-w-[34ch]">
                <h3 className="text-[1.375rem] leading-snug font-semibold tracking-[-0.01em] text-on-ink">
                  <span aria-hidden="true" className="lean mr-3 inline-block h-3.5 w-5 bg-primary align-[0.06em]" style={{ ["--lean-x" as string]: "30%" }} />
                  {r.title}
                </h3>
                <p className="mt-3 text-on-ink-muted">{r.text}</p>
              </div>
            ))}
            <Link href="/about" className="btn self-start">
              Meet your coach <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Reviews appear automatically once genuine testimonials are added to content/site.ts. */
export function Reviews() {
  if (site.reviews.length === 0) return null;
  return (
    <section aria-labelledby="reviews-title" className="bg-ground">
      <div className="wrap py-24 sm:py-32">
        <h2 id="reviews-title" className="text-title">What Clients Say</h2>
        <ul data-reveal className="mt-12 grid gap-10 md:grid-cols-2">
          {site.reviews.map((r) => (
            <li key={r.name} className="bg-surface p-8 sm:p-10">
              <blockquote className="text-statement font-medium">“{r.quote}”</blockquote>
              <p className="mt-6 font-semibold">
                {r.name}
                {r.programme && <span className="font-normal text-ink-muted">, {r.programme}</span>}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
