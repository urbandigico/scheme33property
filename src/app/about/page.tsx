import type { Metadata } from "next";
import Image from "next/image";
import { ContactSection } from "@/components/sections/contact";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  title: "About MFK",
  description:
    "Meet MFK Builders and Developers, the company behind Scheme 33 Property in Karachi.",
};
export default function About() {
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <p className="eyebrow">THE PEOPLE BEHIND THE PLACES</p>
          <h1>
            Rooted in Karachi.
            <br />
            Building for <em>tomorrow.</em>
          </h1>
          <p>{site.attribution}</p>
        </div>
      </div>
      <section className="section">
        <div className="container about-grid">
          <Image
            src="/images/projects/villas-cover.webp"
            alt="MFK Builders and Developers site and sales office"
            width={1000}
            height={750}
          />
          <div>
            <p className="eyebrow">MFK BUILDERS AND DEVELOPERS</p>
            <h2>
              Local experience.
              <br />A personal <em>connection.</em>
            </h2>
            <p>
              MFK’s journey began with Farhan Estate and property consultancy,
              growing into residential and commercial development in Karachi.
            </p>
            <p>
              Led by CEO Muhammad Farhan Khan, the company brings its local
              experience to the homes and communities it builds.
            </p>
            <p>
              Scheme 33 Property is a dedicated home for MFK’s developments in
              this part of Karachi. It brings the projects, plans, and people
              together to help you take your next step.
            </p>
          </div>
        </div>
      </section>
      <section className="section neighborhood">
        <div className="container">
          <p className="eyebrow">PART OF THE LOCAL STORY</p>
          <h2>
            Experience across
            <br />
            familiar <em>communities.</em>
          </h2>
          <p style={{ maxWidth: 670, marginTop: 24, fontSize: 13 }}>
            MFK’s company history references work in the following communities.
            Speak with the team to learn about the individual developments and
            its role in each.
          </p>
          <div className="history-list">
            {[
              "Madras Society",
              "ROK Society",
              "State Bank Society",
              "Bab-e-Rehmat",
              "PIA Society",
            ].map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
