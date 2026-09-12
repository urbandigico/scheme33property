"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site } from "@/lib/site";
export function Brand() {
  return (
    <span className="brand">
      <span className="brand-mark" aria-hidden="true">
        33
        <span />
      </span>
      <span className="brand-name">
        SCHEME 33<span>PROPERTY</span>
      </span>
    </span>
  );
}
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [open]);
  const links = [
    ["/projects", "Our projects"],
    ["/#neighborhood", "Discover Scheme 33"],
    ["/about", "About MFK"],
  ];
  return (
    <header
      className={`site-header ${scrolled || pathname !== "/" ? "solid" : ""} ${open ? "menu-open" : ""}`}
    >
      <div className="header-inner">
        <Link href="/" aria-label="Scheme 33 Property home">
          <Brand />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([url, label]) => (
            <Link
              key={url}
              href={url}
              aria-current={pathname === url ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" href="/contact">
          Let’s talk <ArrowUpRight size={17} />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className="header-attribution">{site.attribution}</div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {[...links, ["/contact", "Contact & site visits"]].map(
            ([url, label]) => (
              <Link href={url} key={url} onClick={() => setOpen(false)}>
                {label}
                <ArrowUpRight size={20} />
              </Link>
            ),
          )}
          <p>{site.attribution}</p>
        </nav>
      )}
    </header>
  );
}
