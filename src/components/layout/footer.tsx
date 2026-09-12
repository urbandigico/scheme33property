import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Brand } from "./header";
import { site, whatsappLink } from "@/lib/site";
export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-main">
          <div>
            <Link href="/" aria-label="Scheme 33 Property home">
              <Brand />
            </Link>
            <p className="attribution">{site.attribution}</p>
            <p>
              A place to belong.
              <br />A future in Scheme 33.
            </p>
          </div>
          <div>
            <span className="eyebrow">Explore</span>
            <Link href="/projects">Our projects</Link>
            <Link href="/#neighborhood">Discover Scheme 33</Link>
            <Link href="/about">About MFK</Link>
          </div>
          <div>
            <span className="eyebrow">Come say hello</span>
            <p>{site.address}</p>
            <a href={`tel:${site.tel}`}>
              {site.phone} <ArrowUpRight size={14} />
            </a>
            <Link href="/contact">
              Arrange a site visit <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Scheme 33 Property</span>
          <span>Karachi, Pakistan</span>
          <a
            href="https://urbandigico.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo by Urban Digi Co.
          </a>
          <Link href="/privacy">Privacy</Link>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MFK on WhatsApp"
      >
        <MessageCircle size={23} />
        <span>Chat with us</span>
      </a>
    </>
  );
}
