"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { projects } from "@/content/projects";
import { site } from "@/lib/site";
import { Reveal } from "@/components/animations/reveal";
export function ProjectGrid({ full = false }: { full?: boolean }) {
  const [filter, setFilter] = useState("All projects");
  const filtered = projects.filter(
    (p) => filter === "All projects" || p.type === filter,
  );
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">SPACES FOR YOUR NEXT CHAPTER</p>
            <h2>
              Find your kind of <em>living.</em>
            </h2>
          </div>
          <p>
            From your first apartment to a home for the whole family.
            <br />
            Explore our developments in Scheme 33.
          </p>
        </Reveal>
        <div className="project-toolbar">
          <div
            className="filters"
            role="group"
            aria-label="Filter projects by property type"
          >
            {["All projects", "Apartments", "Villas"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={f === filter}
                className={f === filter ? "active" : ""}
              >
                {f}
              </button>
            ))}
          </div>
          <span className="result-count" aria-live="polite">
            {String(filtered.length).padStart(2, "0")} developments
          </span>
        </div>
        <div className="project-grid">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link className="project-card" href={`/projects/${p.slug}`}>
                <div className="project-image">
                  <Image
                    src={p.image}
                    alt={`${p.name} — ${p.caption}`}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                  <span className="tag">{p.type}</span>
                  <span className="image-caption">{p.caption}</span>
                  <span className="round-arrow">
                    <ArrowUpRight size={22} />
                  </span>
                </div>
                <div className="project-title">
                  <h3>{p.name}</h3>
                  <span>0{projects.indexOf(p) + 1}</span>
                </div>
                <p className="project-location">
                  <MapPin size={14} />
                  {p.location}
                </p>
                <p className="card-attribution">{site.attribution}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        {full && (
          <div className="portfolio-note">
            <p className="eyebrow">FROM THE MFK PORTFOLIO</p>
            <h3>A local story, built over time.</h3>
            <p>
              MFK’s published portfolio also includes work in ROK Society, PIA
              Society, Madras Society, State Bank Society and Bab-e-Rehmat. Talk
              to the team about its experience in each community.
            </p>
            <Link className="text-link" href="/about">
              Meet the developer <ArrowUpRight size={17} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
