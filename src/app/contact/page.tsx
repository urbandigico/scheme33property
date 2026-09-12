import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact";
export const metadata: Metadata = {
  title: "Contact & site visits",
  description:
    "Contact MFK Builders and Developers to explore Scheme 33 properties and arrange a site visit in Karachi.",
};
export default function Contact() {
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <p className="eyebrow">ONE CONVERSATION CLOSER</p>
          <h1>
            Let’s talk about
            <br />
            your <em>next move.</em>
          </h1>
          <p>
            Project details, available homes, or a visit to the site. Start
            here.
          </p>
        </div>
      </div>
      <ContactSection />
    </>
  );
}
