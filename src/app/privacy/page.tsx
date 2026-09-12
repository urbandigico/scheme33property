import type { Metadata } from "next";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Privacy" };
export default function Privacy() {
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <p className="eyebrow">SCHEME 33 PROPERTY</p>
          <h1>
            Your <em>privacy.</em>
          </h1>
        </div>
      </div>
      <article className="container prose section">
        <p>{site.attribution}</p>
        <h2>Your enquiry</h2>
        <p>
          The enquiry form prepares a message in your browser. It does not
          submit your details to this website or save them in a website
          database. Selecting “Open WhatsApp to send” opens WhatsApp with your
          message, where you can review it before sending.
        </p>
        <h2>Third-party services</h2>
        <p>
          WhatsApp processes information under its own privacy policy when you
          use its service. Google Maps links open Google Maps, which has its own
          privacy practices. These services are not embedded in this website.
        </p>
        <h2>Site operation</h2>
        <p>
          This version does not include advertising trackers or analytics
          cookies. A hosting provider may process technical request information,
          such as IP address and browser details, to serve and protect the
          website.
        </p>
        <h2>Contact</h2>
        <p>
          For questions about an enquiry you sent to MFK Builders and
          Developers, contact the team at{" "}
          <a href={`tel:${site.tel}`}>{site.phone}</a>.
        </p>
      </article>
    </>
  );
}
