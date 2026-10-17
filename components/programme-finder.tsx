"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { ArrowIcon } from "@/components/icons";
import { images } from "@/lib/images";
import { site, type ProgrammeId } from "@/content/site";

type Goal = "start" | "strength" | "fitness" | "habit";
type Way = "solo" | "online" | "group";
type Level = "new" | "some" | "regular";

const goals: { v: Goal; label: string }[] = [
  { v: "start", label: "Get started" },
  { v: "strength", label: "Build strength" },
  { v: "fitness", label: "Get fitter" },
  { v: "habit", label: "Stay consistent" },
];
const ways: { v: Way; label: string }[] = [
  { v: "solo", label: "One-to-one" },
  { v: "online", label: "Online, anywhere" },
  { v: "group", label: "With a small group" },
];
const levels: { v: Level; label: string }[] = [
  { v: "new", label: "New to training" },
  { v: "some", label: "Some experience" },
  { v: "regular", label: "Train regularly" },
];

/** Suggests one of the five programmes from three quick choices. */
function suggest(goal: Goal, way: Way, level: Level): { id: ProgrammeId; why: string } {
  if (way === "online")
    return { id: "online-coaching", why: "You want to train on your own schedule, wherever you are, with a coach checking in." };
  if (way === "group")
    return {
      id: "small-group-training",
      why: level === "new" ? "Training with others keeps you motivated, and workouts scale to your level." : "The energy of a small group keeps you motivated and makes training more enjoyable.",
    };
  if (level === "new" || goal === "start")
    return { id: "beginner-programme", why: "Guided workouts help you learn the basics and build a routine that sticks." };
  if (goal === "strength")
    return { id: "strength-conditioning", why: "A structured plan to build strength and stamina, week by week." };
  return { id: "personal-training", why: "One-to-one sessions built entirely around your goals, ability and pace." };
}

function Choice<T extends string>({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: { v: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset>
      <legend className="text-[1rem] font-semibold text-ink">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => (
          <label key={o.v} className="relative cursor-pointer">
            <input
              type="radio"
              name={name}
              value={o.v}
              checked={value === o.v}
              onChange={() => onChange(o.v)}
              className="peer sr-only"
            />
            <span
              className="block bg-ground px-4 py-2.5 pr-5 text-[0.95rem] font-medium text-ink transition-colors duration-150 peer-checked:bg-ink peer-checked:text-on-ink chip-focus hover:bg-primary-soft peer-checked:hover:bg-ink"
              style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 9px) 100%, 0 100%)" }}
            >
              {o.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function ProgrammeFinder() {
  const id = useId();
  const [goal, setGoal] = useState<Goal>("strength");
  const [way, setWay] = useState<Way>("solo");
  const [level, setLevel] = useState<Level>("some");
  const result = suggest(goal, way, level);
  const p = site.programmes.find((x) => x.id === result.id)!;

  return (
    <section id="finder" aria-labelledby={`${id}-title`} className="bg-surface">
      <div className="wrap grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:gap-10 lg:py-36">
        <div data-reveal className="lg:col-span-6">
          <h2 id={`${id}-title`} className="text-title">Find Your Programme</h2>
          <p className="text-lead mt-5 max-w-[42ch] text-ink-soft">
            Three quick choices and we’ll suggest where to start. You can always change your mind with your coach.
          </p>
          <form className="mt-10 space-y-8" onSubmit={(e) => e.preventDefault()} aria-describedby={`${id}-result`}>
            <Choice legend="What’s your main goal?" name={`${id}-goal`} options={goals} value={goal} onChange={setGoal} />
            <Choice legend="How would you like to train?" name={`${id}-way`} options={ways} value={way} onChange={setWay} />
            <Choice legend="Where are you starting from?" name={`${id}-level`} options={levels} value={level} onChange={setLevel} />
          </form>
        </div>

        <div className="lg:col-span-6 lg:pl-6">
          <div id={`${id}-result`} aria-live="polite" className="lg:sticky lg:top-[calc(var(--header-h)+24px)]">
            <div key={p.id} className="finder-result bg-ground">
              <div className="lean relative aspect-[16/10] overflow-hidden" style={{ ["--lean-x" as string]: "9%" }}>
                <Image src={images[p.image]} alt={p.imageAlt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" placeholder="blur" />
              </div>
              <div className="p-7 sm:p-9">
                <p className="text-[0.95rem] font-semibold text-primary-text">We suggest</p>
                <h3 className="mt-1 text-[clamp(1.6rem,2.4vw,2.25rem)] leading-tight font-bold tracking-[-0.02em]">{p.title}</h3>
                <p className="mt-3 text-ink-soft">{result.why}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href={`/contact?programme=${p.id}#enquiry`} className="btn w-full sm:w-auto">
                    Ask about this programme <ArrowIcon />
                  </Link>
                  <Link href={`/programmes#${p.id}`} className="btn btn-light w-full sm:w-auto">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
