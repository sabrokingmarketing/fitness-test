import { Hero } from "@/components/home/hero";
import { Statement, TrustStrip } from "@/components/home/trust-and-statement";
import { ProgrammeTiles } from "@/components/home/programme-tiles";
import { ProgrammeFinder } from "@/components/programme-finder";
import { HowItWorks } from "@/components/home/how-it-works";
import { Reviews, WhyUs } from "@/components/home/why-us";
import { Faq } from "@/components/faq";
import { EnquiryCoupon } from "@/components/enquiry-coupon";
import { CtaBand } from "@/components/cta-band";
import { pageMeta } from "@/lib/meta";
import { site } from "@/content/site";

export const metadata = {
  ...pageMeta({
    title: `${site.name} | Personal Training & Online Coaching in South Africa`,
    description:
      "Build strength and confidence with personal training, online coaching, strength & conditioning, small group and beginner programmes across South Africa.",
    path: "/",
  }),
  title: { absolute: `${site.name} | Personal Training & Online Coaching in South Africa` },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Statement />
      <ProgrammeTiles />
      <ProgrammeFinder />
      <HowItWorks />
      <WhyUs />
      <Reviews />
      <Faq />
      <EnquiryCoupon />
      <CtaBand />
    </>
  );
}
