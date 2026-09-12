import type { Metadata } from "next";
import { ProjectGrid } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";
export const metadata: Metadata = {
  title: "Our projects",
  description:
    "Explore Farhan Residency apartments and MFK Signature Villas in Scheme 33, Karachi.",
};
export default function ProjectsPage() {
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <p className="eyebrow">OUR DEVELOPMENTS · SCHEME 33, KARACHI</p>
          <h1>
            Different spaces.
            <br />
            One place to <em>belong.</em>
          </h1>
          <p>
            Get to know the projects, explore the details, and find the home
            that feels right for you.
          </p>
        </div>
      </div>
      <ProjectGrid full />
      <ContactSection />
    </>
  );
}
