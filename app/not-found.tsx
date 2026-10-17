import Link from "next/link";
import { CtaBand } from "@/components/cta-band";

export const metadata = { title: "Page Not Found", description: "This page doesn't exist. Head back to the FitForm Fitness home page." };

export default function NotFound() {
  return (
    <>
      <section className="bg-ground">
        <div className="wrap py-24 sm:py-36">
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1] font-bold tracking-[-0.035em]">Page Not Found</h1>
          <p className="text-lead mt-6 max-w-[40ch] text-ink-soft">The page you’re looking for has moved or doesn’t exist.</p>
          <Link href="/" className="btn mt-8">Back to home</Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
