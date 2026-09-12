import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowUpRight, Check } from "lucide-react";
import { projects } from "@/content/projects";
import { site } from "@/lib/site";
import { ContactSection } from "@/components/sections/contact";
import { Gallery } from "@/components/sections/gallery";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return {
    title: p?.name || "Project not found",
    description: p?.description,
    alternates: { canonical: `/projects/${slug}` },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <>
      <section className="detail-hero">
        <Image
          src={p.image}
          alt={`${p.name} — ${p.caption}`}
          fill
          sizes="100vw"
          priority
        />
        <div className="detail-shade" />
        <div className="container">
          <p className="eyebrow">{p.type.toUpperCase()} · SCHEME 33, KARACHI</p>
          <h1>{p.name}</h1>
          <p>
            <MapPin size={15} />
            {p.location}
          </p>
          <p className="attribution">{site.attribution}</p>
        </div>
      </section>
      <div className="container detail-nav">
        <div>
          <a href="#overview">Overview</a>
          <a href="#amenities">Amenities</a>
          <a href="#gallery">Gallery & plans</a>
          <a href="#location">Location</a>
        </div>
        <a href="#enquire">Arrange a visit ↗</a>
      </div>
      <section id="overview" className="section">
        <div className="container detail-overview">
          <div>
            <p className="eyebrow">A CLOSER LOOK</p>
            <h2>{p.intro}</h2>
            <p>{p.description}</p>
            <p>
              Explore the plans and project imagery below, then connect with our
              team for current availability, prices and a site visit.
            </p>
          </div>
          <dl className="detail-facts">
            <div>
              <dt>Development</dt>
              <dd>{p.name}</dd>
            </div>
            <div>
              <dt>Property type</dt>
              <dd>{p.type}</dd>
            </div>
            <div>
              <dt>Neighborhood</dt>
              <dd>Scheme 33, Karachi</dd>
            </div>
            <div>
              <dt>Developer</dt>
              <dd>MFK Builders and Developers</dd>
            </div>
            <div>
              <dt>Availability & pricing</dt>
              <dd>
                <a href="#enquire">Enquire with our team ↗</a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="container" id="amenities" style={{ paddingTop: 75 }}>
          <p className="eyebrow">CONSIDERED FOR EVERYDAY LIFE</p>
          <h2>
            Room for the things
            <br />
            that <em>matter.</em>
          </h2>
          <div className="amenities">
            {p.amenities.map((a) => (
              <div className="amenity" key={a}>
                <Check size={18} />
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section gallery-section" id="gallery">
        <div className="container">
          <p className="eyebrow">EXPLORE THE DETAILS</p>
          <h2>
            Picture your <em>possibilities.</em>
          </h2>
          <Gallery items={p.gallery} name={p.name} />
          <p className="form-note">
            Published project imagery and plans from MFK. Ask the team for the
            latest specifications and construction status.
          </p>
        </div>
      </section>
      <section className="section" id="location">
        <div className="container detail-overview">
          <div>
            <p className="eyebrow">YOUR PLACE IN KARACHI</p>
            <h2>
              An address in
              <br />
              <em>Scheme 33.</em>
            </h2>
          </div>
          <div className="map-box">
            <MapPin size={28} />
            <p>{p.location}, Karachi</p>
            <a
              className="text-link"
              href={p.map}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore the location on Google Maps <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
      <ContactSection project={p.name} />
      <div className="container" style={{ padding: "30px 0" }}>
        <Link className="text-link" href="/projects">
          Explore all projects <ArrowUpRight size={17} />
        </Link>
      </div>
    </>
  );
}
