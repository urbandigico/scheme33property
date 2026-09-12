"use client";
import { useState } from "react";
import {
  ArrowUpRight,
  Phone,
  MapPin,
  MessageCircle,
  Check,
} from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
export function ContactSection({ project = "" }: { project?: string }) {
  const [ready, setReady] = useState("");
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nameInput = e.currentTarget.elements.namedItem(
      "name",
    ) as HTMLInputElement;
    const phoneInput = e.currentTarget.elements.namedItem(
      "phone",
    ) as HTMLInputElement;
    if (!nameInput.value.trim()) {
      nameInput.setCustomValidity("Please enter your name.");
      nameInput.reportValidity();
      return;
    }
    const digits = phoneInput.value.replace(/\D/g, "");
    if (
      !/^[+\d\s()-]+$/.test(phoneInput.value) ||
      digits.length < 7 ||
      digits.length > 15
    ) {
      phoneInput.setCustomValidity(
        "Please enter a valid phone number with 7 to 15 digits.",
      );
      phoneInput.reportValidity();
      return;
    }
    const data = new FormData(e.currentTarget);
    const message = `Hello Scheme 33 Property! My name is ${String(data.get("name")).trim()}.\nPhone: ${String(data.get("phone")).trim()}\nInterested in: ${data.get("interest")}\n${String(data.get("message")).trim()}\nPlease help me with project information or a site visit.`;
    setReady(whatsappLink(message));
  }
  return (
    <section className="contact-section section" id="enquire">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">LET’S MAKE IT PERSONAL</p>
          <h2>
            Your next home
            <br />
            starts with a<br />
            <em>conversation.</em>
          </h2>
          <p className="contact-intro">
            Tell us what you have in mind. Our team will help you explore the
            projects and plan your visit.
          </p>
          <div className="contact-method">
            <Phone size={19} />
            <div>
              <small>Speak to our team</small>
              <a href={`tel:${site.tel}`}>{site.phone}</a>
            </div>
          </div>
          <div className="contact-method">
            <MapPin size={19} />
            <div>
              <small>Visit our site & head office</small>
              <p>{site.address}</p>
            </div>
          </div>
          <p className="attribution">{site.attribution}</p>
        </div>
        <form
          className="enquiry-form"
          onSubmit={submit}
          onChange={(e) => {
            setReady("");
            if (e.target instanceof HTMLInputElement)
              e.target.setCustomValidity("");
          }}
        >
          <span className="eyebrow">A HOME THAT FITS YOUR PLANS</span>
          <h3>Let’s find your place.</h3>
          <label>
            Your name
            <input
              name="name"
              autoComplete="name"
              placeholder="Full name"
              required
              maxLength={100}
            />
          </label>
          <label>
            Phone number
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="e.g. 0300 1234567"
              required
              minLength={7}
              maxLength={25}
            />
          </label>
          <label>
            I’m interested in
            <select name="interest" defaultValue={project || ""} required>
              <option value="" disabled>
                Select a project
              </option>
              <option>Farhan Residency</option>
              <option>MFK Signature Villas</option>
              <option>Panjwani Residency — upcoming updates</option>
              <option>Help me choose</option>
            </select>
          </label>
          <label>
            Anything else? <span className="optional">(optional)</span>
            <textarea
              name="message"
              placeholder="Your requirements or a preferred day to visit"
              rows={2}
              maxLength={1000}
            />
          </label>
          <p className="form-note">
            We’ll prepare your enquiry for WhatsApp. You can review and send it
            there.
          </p>
          {ready ? (
            <div className="form-ready" role="status">
              <span>
                <Check size={17} /> Your enquiry is ready.
              </span>
              <a
                className="button"
                href={ready}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open WhatsApp to send <MessageCircle size={18} />
              </a>
            </div>
          ) : (
            <button className="button" type="submit">
              Prepare my enquiry <ArrowUpRight size={18} />
            </button>
          )}
          <p className="privacy-note">
            Your details stay in this form until you choose to send them through
            WhatsApp. <a href="/privacy">Privacy policy</a>
          </p>
        </form>
      </div>
    </section>
  );
}
