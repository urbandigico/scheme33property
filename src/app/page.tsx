import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, House, Compass, Building2 } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { ProjectGrid } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";
import { Reveal } from "@/components/animations/reveal";
import { site, whatsappLink } from "@/lib/site";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="intro-strip">
        <div className="container">
          <span>
            ONE NEIGHBORHOOD.
            <br />
            <strong>So many possibilities.</strong>
          </span>
          <span>
            <House size={22} /> Apartments & villas
          </span>
          <span>
            <MapPin size={22} /> Scheme 33, Karachi
          </span>
          <span>
            <Building2 size={22} /> Built on MFK’s experience
          </span>
        </div>
      </div>
      <ProjectGrid />
      <section className="section neighborhood" id="neighborhood">
        <div className="container neighborhood-grid">
          <Reveal className="neighborhood-photo">
            <Image
              src="/images/projects/villas-progress.webp"
              alt="MFK Signature Villas entrance in Scheme 33, Karachi"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
            />
            <span className="photo-label">
              <MapPin size={15} /> MFK Signature Villas · Scheme 33
            </span>
            <span className="image-corner">
              KHI
              <br />
              33
            </span>
          </Reveal>
          <Reveal className="neighborhood-copy">
            <p className="eyebrow">A KARACHI ADDRESS. A WORLD OF YOUR OWN.</p>
            <h2>
              Well connected.
              <br />
              Deeply <em>rooted.</em>
            </h2>
            <p>
              There’s something about finding your place in a neighborhood that
              feels familiar. Our focus is Scheme 33—bringing your search for a
              home closer to the places and people that matter.
            </p>
            <div className="location-row">
              <Compass />
              <div>
                <h3>Find your bearings</h3>
                <p>
                  Explore our projects in PIA Housing Society and along Main
                  Maymar Avenue.
                </p>
              </div>
            </div>
            <div className="location-row">
              <House />
              <div>
                <h3>See it for yourself</h3>
                <p>
                  Walk the site, explore the surroundings, and ask the questions
                  that matter to you.
                </p>
              </div>
            </div>
            <Link className="text-link" href="/contact">
              Get to know the neighborhood <ArrowUpRight size={19} />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="developer-section section">
        <div className="container developer-grid">
          <Reveal>
            <p className="eyebrow">LOCAL KNOWLEDGE. LASTING COMMITMENT.</p>
            <h2>
              A new address.
              <br />
              An established
              <br />
              <em>name behind it.</em>
            </h2>
            <p className="attribution">{site.attribution}</p>
          </Reveal>
          <Reveal className="developer-copy">
            <span className="mfk-wordmark">
              MFK<span>BUILDERS & DEVELOPERS</span>
            </span>
            <p>
              From property consultancy to residential and commercial
              development, MFK’s story has grown alongside Karachi.
            </p>
            <p>
              Scheme 33 Property brings that experience into one place—helping
              you discover MFK’s projects and connect directly with the team
              behind them.
            </p>
            <Link className="text-link light" href="/about">
              The story behind your next home <ArrowUpRight size={19} />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="section upcoming">
        <div className="container upcoming-inner">
          <Reveal>
            <p className="eyebrow">LOOKING AHEAD</p>
            <h2>
              Something new.
              <br />
              Something to <em>look forward to.</em>
            </h2>
          </Reveal>
          <Reveal>
            <span className="upcoming-label">ON THE HORIZON</span>
            <h3>Panjwani Residency</h3>
            <p>
              Listed in MFK’s upcoming portfolio. Speak with our team for the
              latest announcement and project details.
            </p>
            <a
              className="text-link"
              href={whatsappLink(
                "Hello! Please share the latest updates and location details for Panjwani Residency.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask about upcoming projects <ArrowUpRight size={18} />
            </a>
          </Reveal>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
