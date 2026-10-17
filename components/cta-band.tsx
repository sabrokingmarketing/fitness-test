import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { images, type ImageKey } from "@/lib/images";
import { prettyPhone, telHref, whatsappHref } from "@/lib/contact";
import { site } from "@/content/site";

/** The closing call to action on every page: WhatsApp or call. */
export function CtaBand({
  title = "Ready To Take The First Step?",
  text = "Tell us what you want to achieve and we’ll help you find the right way to start.",
  image = "outdoor",
  imageAlt = "A man doing push-ups on the grass outdoors",
}: {
  title?: string;
  text?: string;
  image?: ImageKey;
  imageAlt?: string;
}) {
  const wa = whatsappHref(`Hi ${site.shortName}, I'm ready to start training. Can we chat?`);
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-primary text-on-primary">
      <div className="wrap grid items-center gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:py-32">
        <div data-reveal className="lg:col-span-6">
          <h2 id="cta-title" className="text-title max-w-[14ch]">{title}</h2>
          <p className="text-lead mt-6 max-w-[42ch] font-medium">{text}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            {wa ? (
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp us
              </a>
            ) : (
              <Link href="/contact#enquiry" className="btn btn-dark">
                Send an enquiry <ArrowIcon />
              </Link>
            )}
            {telHref ? (
              <a href={telHref} className="btn btn-white">
                <PhoneIcon /> Call {prettyPhone()}
              </a>
            ) : (
              <Link href="/programmes" className="btn btn-white">
                {site.hero.primaryButton}
              </Link>
            )}
          </div>
        </div>
        <div data-reveal className="relative lg:col-span-6">
          <div className="lean relative aspect-[4/3] w-full overflow-hidden bg-primary-hover" style={{ ["--lean-x" as string]: "16%" }}>
            <Image
              src={images[image]}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
