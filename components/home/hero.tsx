import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { images } from "@/lib/images";
import { speakHref } from "@/lib/contact";
import { site } from "@/content/site";

/**
 * Hero: the brand's forward-leaning shape at giant scale in orange, cropped by the
 * edge of the screen, with the best photo cut to the same lean.
 */
export function Hero() {
  const h = site.hero;
  const [line1, line2] = splitHeadline(h.headline);
  const external = speakHref.startsWith("http");

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-ground">
      {/* the giant shape (desktop: enters from the right; phone: fills the bottom) */}
      <div aria-hidden="true" className="drift pointer-events-none absolute inset-y-0 right-0 hidden w-[50%] lg:block">
        <div className="shape-in lean-left absolute inset-0 bg-primary" style={{ ["--lean-x" as string]: "32%" }} />
      </div>

      <div className="wrap relative grid min-h-[calc(100svh-var(--header-h))] items-center gap-10 pt-8 pb-0 lg:max-h-[920px] lg:min-h-[640px] lg:grid-cols-12 lg:gap-6 lg:py-16">
        <div className="hero-rise relative z-10 lg:col-span-7">
          <h1 id="hero-title" className="text-[clamp(2.6rem,4.75vw,5.5rem)] leading-[0.98] font-bold tracking-[-0.035em] text-ink">
            <span className="block">{line1}</span>
            <span className="block">{line2}</span>
          </h1>
          <p className="text-lead mt-6 max-w-[40ch] text-ink-soft sm:mt-7">{h.subline}</p>
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            <Link href="/programmes" className="btn">
              {h.primaryButton} <ArrowIcon />
            </Link>
            <a
              href={speakHref}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="btn btn-light"
            >
              {h.secondaryButton}
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-5 lg:self-stretch">
          {/* phone: orange block behind the photo */}
          <div aria-hidden="true" className="lean-left absolute inset-x-[-16px] top-[22%] bottom-0 bg-primary lg:hidden" style={{ ["--lean-x" as string]: "18%" }} />
          <div className="relative flex h-full items-center justify-end pb-0 lg:pb-0">
            <div
              className="shutter lean relative aspect-[4/5] w-[86%] overflow-hidden bg-surface sm:w-[70%] lg:w-[92%] lg:max-w-[540px]"
              style={{ ["--lean-x" as string]: "18%" }}
            >
              <Image
                src={images[h.image]}
                alt={h.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 86vw"
                className="object-cover object-[38%_50%]"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function splitHeadline(text: string): [string, string] {
  const i = text.indexOf(". ");
  return i > -1 ? [text.slice(0, i + 1), text.slice(i + 2)] : [text, ""];
}
