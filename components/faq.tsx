import { site } from "@/content/site";

/** Questions as filled tiles; one opens at a time. Answers are in the page for search engines too. */
export function Faq() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section id="faqs" aria-labelledby="faq-title" className="bg-ground">
      <div className="wrap grid gap-10 py-24 sm:py-32 lg:grid-cols-12 lg:gap-8 lg:py-40">
        <div className="lg:col-span-4">
          <div data-reveal className="lg:sticky lg:top-[calc(var(--header-h)+32px)]">
            <h2 id="faq-title" className="text-title max-w-[10ch]">Questions, Answered</h2>
            <p className="mt-5 max-w-[30ch] text-ink-soft">Can’t see your question? Ask us when you enquire. We’re happy to help.</p>
          </div>
        </div>
        <div data-reveal className="faq flex flex-col gap-2 lg:col-span-8">
          {site.faqs.map((f, i) => (
            <details key={f.q} name="faq" open={i === 0} className="group bg-surface open:bg-primary open:text-on-primary">
              <summary className="flex min-h-[72px] items-center justify-between gap-6 px-6 py-4 text-[1.15rem] leading-snug font-semibold sm:text-[1.25rem]">
                <span>{f.q}</span>
                <span className="plus" aria-hidden="true" />
              </summary>
              <p className="max-w-[56ch] px-6 pb-7 text-[1.0625rem]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </section>
  );
}
