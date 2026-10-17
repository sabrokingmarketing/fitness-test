import Image from "next/image";
import { images, type ImageKey } from "@/lib/images";

/** Top of inner pages: big title on white, photo cut to the lean on an orange block. */
export function PageIntro({
  title,
  text,
  image,
  imageAlt,
}: {
  title: string;
  text: string;
  image: ImageKey;
  imageAlt: string;
}) {
  return (
    <section aria-labelledby="page-title" className="relative isolate overflow-hidden bg-ground">
      <div aria-hidden="true" className="shape-in lean-left absolute top-0 right-0 bottom-0 hidden w-[38%] bg-primary lg:block" style={{ ["--lean-x" as string]: "30%" }} />
      <div className="wrap relative grid items-center gap-10 pt-10 pb-16 sm:pt-14 sm:pb-20 lg:min-h-[560px] lg:grid-cols-12 lg:py-16">
        <div className="hero-rise lg:col-span-7">
          <h1 id="page-title" className="text-[clamp(2.5rem,5vw,5rem)] leading-[1] font-bold tracking-[-0.035em]">
            {title}
          </h1>
          <p className="text-lead mt-6 max-w-[46ch] text-ink-soft">{text}</p>
        </div>
        <div className="relative lg:col-span-5">
          <div aria-hidden="true" className="lean-left absolute inset-x-[-16px] top-[30%] -bottom-16 bg-primary sm:-bottom-20 lg:hidden" style={{ ["--lean-x" as string]: "18%" }} />
          <div className="shutter lean relative ml-auto aspect-[5/4] w-[88%] overflow-hidden bg-surface lg:w-full" style={{ ["--lean-x" as string]: "14%" }}>
            <Image src={images[image]} alt={imageAlt} fill priority sizes="(min-width: 1024px) 40vw, 88vw" className="object-cover" placeholder="blur" />
          </div>
        </div>
      </div>
    </section>
  );
}
