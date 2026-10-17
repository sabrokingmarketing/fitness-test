import { site } from "@/content/site";

/* A diagram drawn only with the brand's leaning shape: scattered at first (where you are now),
   pulled into one focused band (your plan), then set out in neat brand-colour rows (steady progress). */

type Shape = { u: number; v: number; tone: "pale" | "mid" | "ink" | "accent" };

function rand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function build(L: number, W: number, unit: number): Shape[] {
  const r = rand(44866);
  const out: Shape[] = [];
  const third = L / 3;
  // scatter: loose, narrowing towards the band
  for (let i = 0; i < 52; i++) {
    const u = r() * (third - unit * 2) + unit * 0.5;
    const spread = 1 - (u / third) * 0.62;
    const v = W / 2 + (r() - 0.5) * (W - unit * 3) * spread;
    out.push({ u, v, tone: r() > 0.55 ? "mid" : "pale" });
  }
  // the band: three rows, tight
  const step = unit * 1.32;
  const cols = Math.floor((third - unit) / step);
  for (let c = 0; c < cols; c++)
    for (let row = -1; row <= 1; row++) out.push({ u: third + c * step + unit * 0.3, v: W / 2 + row * step, tone: "ink" });
  // ordered rows, evenly spaced
  const rows = 5;
  const perRow = 9;
  const uStep = (third - unit * 3) / (perRow - 1);
  const vStep = (W - unit * 3) / (rows - 1);
  for (let row = 0; row < rows; row++)
    for (let c = 0; c < perRow; c++) out.push({ u: third * 2 + unit * 0.8 + c * uStep, v: unit * 1.5 + row * vStep, tone: "accent" });
  return out;
}

const fill = { pale: "var(--surface-strong)", mid: "var(--border)", ink: "var(--ink)", accent: "var(--primary)" };

function Diagram({ vertical = false }: { vertical?: boolean }) {
  const L = vertical ? 420 : 1200;
  const W = vertical ? 260 : 270;
  const unit = vertical ? 12 : 15;
  const shapes = build(L, W, unit);
  const lean = unit * 0.32;
  return (
    <svg
      viewBox={vertical ? `0 0 ${W} ${L}` : `0 0 ${L} ${W}`}
      className="h-auto w-full"
      aria-hidden="true"
      focusable="false"
    >
      {shapes.map((s, i) => {
        const x = vertical ? s.v : s.u;
        const y = vertical ? s.u : s.v;
        const d = `M${(x + lean).toFixed(1)} ${(y - unit / 2).toFixed(1)}h${unit}l${(-lean).toFixed(1)} ${unit}h${-unit}z`;
        return <path key={i} d={d} fill={fill[s.tone]} className="dg" style={{ ["--d" as string]: (s.u / L).toFixed(3) }} />;
      })}
    </svg>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="bg-ground">
      <div className="wrap py-24 sm:py-32 lg:py-40">
        <div data-reveal className="grid gap-6 lg:grid-cols-12">
          <h2 id="how-title" className="text-title max-w-[12ch] lg:col-span-5">Three Steps To Get Started</h2>
          <p className="text-lead max-w-[44ch] self-end text-ink-soft lg:col-span-5 lg:col-start-7">
            You don’t need a perfect plan to begin. You need a first step, a coach and a programme that fits.
          </p>
        </div>

        {/* desktop and tablet: left to right */}
        <div data-reveal className="mt-16 hidden sm:block">
          <div className="diagram">
            <Diagram />
          </div>
          <ol className="mt-10 grid grid-cols-3 gap-8">
            {site.steps.map((s) => (
              <li key={s.name}>
                <h3 className="text-[1.3rem] font-bold tracking-[-0.01em]">{s.title}</h3>
                <p className="mt-2 max-w-[32ch] text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* phone: top to bottom */}
        <div data-reveal className="mt-12 grid grid-cols-[38vw_1fr] gap-5 sm:hidden">
          <div className="diagram">
            <Diagram vertical />
          </div>
          <ol className="grid grid-rows-3">
            {site.steps.map((s) => (
              <li key={s.name} className="flex flex-col justify-center">
                <h3 className="text-[1.15rem] leading-snug font-bold">{s.title}</h3>
                <p className="mt-1.5 text-[1rem] text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
