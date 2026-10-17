import { EnquiryForm } from "@/components/enquiry-form";

/** The enquiry form as a coupon to "tear off": a charcoal card with notches and a perforation. */
export function EnquiryCoupon({
  title = "Start With A Conversation",
  text = "Tell us a little about you and your goals. We’ll get back to you to talk through your options.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section id="enquiry" aria-labelledby="enquiry-title" className="bg-ground">
      <div className="wrap py-24 sm:py-32">
        <div data-reveal>
          <div className="on-dark relative bg-ink text-on-ink lg:mx-[4%]">
            {/* notches (page-coloured circles cut into the card edge) */}
            <span aria-hidden="true" className="absolute top-[-15px] left-[42%] hidden h-[30px] w-[30px] -translate-x-1/2 rounded-full bg-ground lg:block" />
            <span aria-hidden="true" className="absolute bottom-[-15px] left-[42%] hidden h-[30px] w-[30px] -translate-x-1/2 rounded-full bg-ground lg:block" />

            <div className="grid lg:grid-cols-[42%_58%]">
              <div className="relative flex flex-col justify-between gap-8 p-7 pt-10 sm:p-12">
                <h2 id="enquiry-title" className="text-[clamp(2rem,3.4vw,3.25rem)] leading-[1.04] font-bold tracking-[-0.03em] text-on-ink">
                  {title}
                </h2>
                <p className="max-w-[34ch] text-on-ink-muted">{text}</p>
                {/* phone: notches on the sides + horizontal perforation */}
                <span aria-hidden="true" className="absolute bottom-[-15px] left-[-15px] h-[30px] w-[30px] rounded-full bg-ground lg:hidden" />
                <span aria-hidden="true" className="absolute right-[-15px] bottom-[-15px] h-[30px] w-[30px] rounded-full bg-ground lg:hidden" />
              </div>
              <div className="relative p-7 pb-9 sm:p-12">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-6 top-0 h-[5px] lg:inset-x-auto lg:inset-y-8 lg:left-0 lg:h-auto lg:w-[5px]"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14'%3E%3Ccircle cx='7' cy='7' r='2.5' fill='white'/%3E%3C/svg%3E\")",
                    backgroundSize: "14px 14px",
                    backgroundPosition: "center",
                  }}
                />
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
