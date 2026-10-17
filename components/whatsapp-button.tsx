import { WhatsAppIcon } from "@/components/icons";
import { whatsappHref } from "@/lib/contact";
import { site } from "@/content/site";

/** Floating button, bottom right on every page. Opens WhatsApp once the number is added in content/site.ts. */
export function WhatsAppButton() {
  const href = whatsappHref(`Hi ${site.shortName}, I'd like to find out about training.`);
  const label = href ? "Chat with us on WhatsApp" : "Send us an enquiry";
  return (
    <a
      href={href ?? "/contact#enquiry"}
      {...(href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={label}
      title={label}
      className="group fixed right-4 bottom-4 z-40 grid h-14 w-14 place-items-center bg-[#1f7a4a] text-white transition-transform duration-150 ease-out active:scale-95 sm:right-6 sm:bottom-6 sm:h-16 sm:w-16"
      style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%)" }}
    >
      <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}
