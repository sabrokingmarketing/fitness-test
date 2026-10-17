import type { Metadata, Viewport } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Reveal } from "@/components/reveal";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/url";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | Personal Training & Online Coaching in South Africa`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

function LocalBusinessSchema() {
  const c = site.contact;
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    url: siteUrl,
    image: `${siteUrl}/og.jpg`,
    logo: `${siteUrl}/images/logo.svg`,
    areaServed: { "@type": "Country", name: "South Africa" },
    knowsAbout: site.programmes.map((p) => p.title),
  };
  if (c.phone) data.telephone = c.phone;
  if (c.email) data.email = c.email;
  if (c.address) data.address = { "@type": "PostalAddress", streetAddress: c.address, addressCountry: "ZA" };
  if (c.mapsUrl) data.hasMap = c.mapsUrl;
  const sameAs = Object.values(site.social).filter(Boolean);
  if (sameAs.length) data.sameAs = sameAs;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const brand = {
    "--c-primary": site.colours.primary,
    "--c-on-primary": site.colours.onPrimary,
    "--c-secondary": site.colours.secondary,
    "--c-accent": site.colours.accent,
  } as React.CSSProperties;

  return (
    <html lang="en-ZA" style={brand} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <LocalBusinessSchema />
      </head>
      <body id="top">
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Reveal />
      </body>
    </html>
  );
}
