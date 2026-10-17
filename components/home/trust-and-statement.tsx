import Image from "next/image";
import { images } from "@/lib/images";
import { site } from "@/content/site";

/** Three short, true facts under the hero. Numbers are added only once verified. */
export function TrustStrip() {
  return (
    <section aria-label="At a glance" className="bg-ink text-on-ink">
      <ul data-reveal className="wrap grid gap-x-10 gap-y-4 py-7 sm:grid-cols-3 sm:py-8">
        {site.trust.map((t) => (
          <li key={t} className="flex items-center gap-3.5 text-[1rem] font-medium">
            <span aria-hidden="true" className="lean h-4 w-6 shrink-0 bg-primary" style={{ ["--lean-x" as string]: "30%" }} />
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}

/** A statement with small photos set into the line, previewing what follows. */
export function Statement() {
  return (
    <section aria-label="Who we help" className="bg-ground">
      <div className="wrap py-24 sm:py-36 lg:py-44">
        <div data-reveal>
          <p className="text-statement mx-0 max-w-[30ch] font-semibold text-ink sm:mx-auto sm:text-center lg:max-w-[34ch]">
            {site.statement.map((part, i) =>
              "image" in part ? (
                <span
                  key={i}
                  className="lean relative mx-[0.14em] inline-block h-[0.86em] w-[1.5em] overflow-hidden bg-surface align-[-0.08em]"
                  style={{ ["--lean-x" as string]: "22%" }}
                >
                  <Image src={images[part.image]} alt={part.alt} fill sizes="80px" className="object-cover" />
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              ),
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
