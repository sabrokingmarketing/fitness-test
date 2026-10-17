import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { images } from "@/lib/images";
import { site } from "@/content/site";

const fields = ["bg-surface", "bg-primary-soft", "bg-primary"];

/** Each programme as a photo on its own colour tile. */
export function ProgrammeTiles() {
  return (
    <section id="programmes" aria-labelledby="programmes-title" className="bg-ground">
      <div className="wrap grid gap-10 pb-24 sm:pb-32 lg:grid-cols-12 lg:gap-8 lg:pb-40">
        <div data-reveal className="lg:col-span-3">
          <h2 id="programmes-title" className="text-[clamp(2rem,3.2vw,3.25rem)] leading-[1.04] font-bold tracking-[-0.03em]">
            Five Ways To Train
          </h2>
          <p className="mt-5 max-w-[30ch] text-ink-soft">
            One-to-one, online, in a small group or as a complete beginner. Pick the way that suits your life.
          </p>
          <Link href="/programmes" className="btn btn-dark mt-8">
            {site.hero.primaryButton} <ArrowIcon />
          </Link>
        </div>

        <ul data-reveal className="grid grid-cols-2 gap-x-2.5 gap-y-8 sm:grid-cols-3 lg:col-span-9">
          {site.programmes.map((p, i) => {
            const wide = i === 1;
            return (
              <li key={p.id} className={wide ? "col-span-2 order-first sm:order-none" : ""}>
                <Link href={`/programmes#${p.id}`} className="group block">
                  <div
                    className={`img-zoom relative overflow-hidden ${fields[i % 3]} ${wide ? "aspect-[8/5]" : "aspect-[4/5]"}`}
                  >
                    <div
                      className="lean absolute inset-[9%] overflow-hidden"
                      style={{ ["--lean-x" as string]: wide ? "10%" : "18%" }}
                    >
                      <Image
                        src={images[p.image]}
                        alt={p.imageAlt}
                        fill
                        sizes={wide ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                        className="object-cover"
                        placeholder="blur"
                      />
                    </div>
                  </div>
                  <h3 className="mt-4 text-[1.2rem] leading-snug font-semibold tracking-[-0.01em] group-hover:text-primary-text">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-[0.98rem] leading-relaxed text-ink-muted">{p.short}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
