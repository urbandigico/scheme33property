"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { animate, stagger } from "animejs";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { projects } from "@/content/projects";
export function Hero() {
  const [active, setActive] = useState(0);
  const heading = useRef<HTMLHeadingElement>(null);
  const project = projects[active];
  useEffect(() => {
    if (
      !heading.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const animation = animate(heading.current.querySelectorAll("span"), {
      opacity: [0, 1],
      translateY: [35, 0],
      duration: 1100,
      delay: stagger(140),
      ease: "outExpo",
    });
    return () => {
      animation.revert();
    };
  }, []);
  return (
    <section className="hero" aria-label="Welcome to Scheme 33 Property">
      <div className="hero-images">
        {projects.map((p, i) => (
          <Image
            key={p.slug}
            className={`hero-image ${active === i ? "active" : ""}`}
            src={p.image}
            alt={i === active ? `${p.name} — ${p.caption}` : ""}
            fill
            sizes="100vw"
            priority={i === 0}
            quality={90}
          />
        ))}
      </div>
      <div className="hero-shade" />
      <div className="container hero-content">
        <p className="eyebrow">
          <span className="little-line" /> ROOTED IN KARACHI. MADE FOR YOU.
        </p>
        <h1 ref={heading}>
          <span>Your next chapter.</span>
          <span>A place to call</span>
          <span className="serif italic">home.</span>
        </h1>
        <p className="hero-copy">
          Thoughtfully planned homes. A neighborhood you know.
          <br className="desktop-only" /> Discover a life that belongs in Scheme
          33.
        </p>
        <Link className="button button-white" href="/projects">
          Explore our projects <ArrowUpRight size={19} />
        </Link>
      </div>
      <div className="hero-bottom container">
        <a className="scroll-cue" href="#projects">
          <ArrowDown size={17} />
          <span>SCROLL TO DISCOVER</span>
        </a>
        <div className="hero-selector" aria-label="Featured project image">
          {projects.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={active === i ? "selected" : ""}
            >
              <span className="project-index">0{i + 1}</span>
              <span>
                {p.name}
                <small>
                  <MapPin size={11} />
                  {i === 0 ? "PIA Housing Society" : "Main Maymar Avenue"}
                </small>
              </span>
            </button>
          ))}
        </div>
        <span className="hero-caption">{project.caption}</span>
      </div>
    </section>
  );
}
