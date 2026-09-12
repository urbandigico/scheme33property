import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { site } from "@/lib/site";
import "@/styles/globals.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Scheme 33 Property | Powered by MFK Builders and Developers",
    template: "%s | Scheme 33 Property",
  },
  description:
    "Explore MFK Signature Villas and Farhan Residency in Scheme 33, Karachi. Discover project details, floor plans and arrange a site visit with MFK Builders and Developers.",
  openGraph: {
    title: "Scheme 33 Property",
    description: site.attribution,
    images: ["/images/projects/farhan-hero.webp"],
    locale: "en_PK",
    type: "website",
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
