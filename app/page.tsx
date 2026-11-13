
"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  MapPin,
  CalendarDays,
  Users,
  Sparkles,
} from "lucide-react";

const INSTAGRAM_URL =
  "https://www.instagram.com/shahjahanmarqueebygoodluck/";

const MAPS_URL = "https://share.google/kejDtt4bChV9E1DOL";

// Official WhatsApp number milne par yahan add karna.
// Example: 923001234567
const WHATSAPP_NUMBER = "";

const experiences = [
  {
    number: "01",
    title: "Wedding Celebrations",
    text: "A beautiful setting for the beginning of forever.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "02",
    title: "Grand Receptions",
    text: "An evening filled with elegance and memories.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "03",
    title: "Special Events",
    text: "Bring your favourite people together in style.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleAppointment(formData: FormData) {
    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const eventType = String(formData.get("event") || "");
    const date = String(formData.get("date") || "");
    const guests = String(formData.get("guests") || "");

    const message = `Hello Shah Jahan Marquee! I would like to enquire about an event.

Name: ${name}
Phone: ${phone}
Event: ${eventType}
Preferred date: ${date}
Expected guests: ${guests}`;

    if (!WHATSAPP_NUMBER) {
      setSubmitted(true);
      return;
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main>
      <div className="announcement">
        <span>THE ART OF CELEBRATION</span>
        <span className="announcement-location">
          <MapPin size={13} /> LAHORE, PAKISTAN
        </span>
      </div>

      <header className="site-header">
        <a href="#" className="logo" onClick={closeMenu}>
          <span className="logo-symbol">SJ</span>
          <span className="logo-copy">
            <strong>SHAH JAHAN</strong>
            <small>MARQUEE</small>
          </span>
        </a>

        <nav className={menuOpen ? "main-nav nav-open" : "main-nav"}>
          <a href="#story" onClick={closeMenu}>OUR STORY</a>
          <a href="#experiences" onClick={closeMenu}>EXPERIENCES</a>
          <a href="#gallery" onClick={closeMenu}>GALLERY</a>
          <a href="#appointment" onClick={closeMenu}>APPOINTMENTS</a>
        </nav>

        <a href="#appointment" className="nav-cta">
          BOOK A VISIT <ArrowUpRight size={15} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      <section className="hero">
        <div className="hero-image" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-kicker">
            <span /> A WORLD OF ELEGANCE <span />
          </div>

          <h1>
            Where your
            <br />
            <em>forever begins.</em>
          </h1>

          <p>
            Extraordinary celebrations deserve an extraordinary setting.
            Discover the art of making moments unforgettable.
          </p>

          <div className="hero-buttons">
            <a href="#appointment" className="gold-button">
              PLAN YOUR CELEBRATION <ArrowRight size={16} />
            </a>
            <a href="#story" className="hero-secondary">
              DISCOVER OUR STORY
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>SHAH JAHAN MARQUEE · LAHORE</span>
          <a href="#story">SCROLL TO EXPLORE ↓</a>
        </div>

        <div className="hero-monogram">SJ</div>
      </section>

      <section className="intro-section section-space" id="story">
        <div>
          <span className="eyebrow">WELCOME TO SHAH JAHAN</span>
          <h2>
            More than a venue.
            <br />
            <em>A feeling.</em>
          </h2>
        </div>

        <div className="intro-right">
          <p>
            Some occasions deserve more than an ordinary setting.
            They deserve a place where every detail adds to the magic
            and every moment becomes a treasured memory.
          </p>
          <p>
            Let your most meaningful moments unfold in style.
            Discover a setting made for celebrations.
          </p>
          <a href="#appointment" className="simple-link">
            PLAN YOUR EVENT <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <section className="experience-section section-space" id="experiences">
        <div className="section-top">
          <div>
            <span className="eyebrow">CELEBRATE YOUR WAY</span>
            <h2>
              Moments worth
              <br />
              <em>remembering.</em>
            </h2>
          </div>
          <p>
            From grand wedding celebrations to special gatherings,
            make every occasion a story worth telling.
          </p>
        </div>

        <div className="event-grid">
          {experiences.map((item) => (
            <article className="event-card" key={item.number}>
              <div className="event-image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <span className="event-number">{item.number}</span>
                <span className="event-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </div>
              <div className="event-copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="event-line" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-photo" />
        <div className="feature-content">
          <span className="eyebrow">THE DETAILS MATTER</span>
          <h2>
            Made for
            <br />
            <em>the extraordinary.</em>
          </h2>
          <p>
            A celebration is made memorable by its atmosphere,
            the people and the little details that bring everything
            together.
          </p>
          <a href="#gallery" className="gold-button">
            EXPLORE THE GALLERY <ArrowRight size={16} />
          </a>
          <span className="feature-mark">SJ</span>
        </div>
      </section>

      <section className="gallery-section section-space" id="gallery">
        <div className="gallery-heading">
          <span className="eyebrow">A GLIMPSE OF ELEGANCE</span>
          <h2>
            The beauty is in
            <br />
            <em>every detail.</em>
          </h2>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item gallery-large">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85"
              alt="Wedding celebration venue"
              loading="lazy"
            />
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=85"
              alt="Wedding floral decoration"
              loading="lazy"
            />
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=85"
              alt="Elegant reception setting"
              loading="lazy"
            />
          </div>
        </div>

        <p className="gallery-note">
          DESIGN PREVIEW PHOTOGRAPHY · REPLACE WITH VENUE PHOTOS
        </p>
      </section>

      <section className="quote-section">
        <span className="quote-mark">“</span>
        <p>
          The most beautiful memories
          <br />
          deserve beautiful beginnings.
        </p>
        <span className="quote-brand">SHAH JAHAN MARQUEE</span>
      </section>

      <section className="appointment-section section-space" id="appointment">
        <div className="appointment-intro">
          <span className="eyebrow">LET'S PLAN YOUR DAY</span>
          <h2>
            Your celebration
            <br />
            starts <em>right here.</em>
          </h2>
          <p>
            Tell us a little about your upcoming event.
            Our team can help you take the next step towards
            a memorable celebration.
          </p>

          <div className="appointment-points">
            <div><CalendarDays size={18} /> Event date enquiry</div>
            <div><Users size={18} /> Guest planning</div>
            <div><Sparkles size={18} /> Venue visit request</div>
          </div>
        </div>

        <form
          className="appointment-form"
          onSubmit={(event) => {
            event.preventDefault();
            handleAppointment(new FormData(event.currentTarget));
          }}
        >
          <span className="eyebrow">APPOINTMENT REQUEST</span>
          <h3>Let's get to know your plans.</h3>

          <div className="form-row">
            <label>
              YOUR NAME
              <input name="name" required placeholder="Full name" />
            </label>
            <label>
              PHONE NUMBER
              <input
                name="phone"
                required
                type="tel"
                placeholder="03XX XXXXXXX"
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              EVENT TYPE
              <select name="event" required defaultValue="">
                <option value="" disabled>Select event</option>
                <option>Wedding</option>
                <option>Reception</option>
                <option>Engagement</option>
                <option>Other event</option>
              </select>
            </label>
            <label>
              PREFERRED DATE
              <input name="date" type="date" required />
            </label>
          </div>

          <label>
            EXPECTED GUESTS
            <select name="guests" required defaultValue="">
              <option value="" disabled>Select guest range</option>
              <option>Below 200</option>
              <option>200–400</option>
              <option>400–600</option>
              <option>600+</option>
              <option>Not decided yet</option>
            </select>
          </label>

          <button className="dark-button" type="submit">
            SEND APPOINTMENT REQUEST <ArrowRight size={16} />
          </button>

          {submitted && (
            <p className="form-message" role="status">
              Thank you! This is a preview form. The WhatsApp contact
              will be connected once the marquee number is confirmed.
            </p>
          )}

          <p className="form-footnote">
            Appointment requests will be connected to the official
            contact number after confirmation.
          </p>
        </form>
      </section>

      <section className="location-strip">
        <MapPin size={22} />
        <div>
          <span className="eyebrow">FIND YOUR WAY TO US</span>
          <p>Shah Jahan Marquee · Lahore, Pakistan</p>
        </div>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          GET DIRECTIONS <ArrowUpRight size={16} />
        </a>
      </section>

      <footer className="site-footer">
        <a href="#" className="logo footer-logo">
          <span className="logo-symbol">SJ</span>
          <span className="logo-copy">
            <strong>SHAH JAHAN</strong>
            <small>MARQUEE</small>
          </span>
        </a>

        <span className="footer-tagline">
          AN ADDRESS FOR UNFORGETTABLE CELEBRATIONS
        </span>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="instagram-link"
          aria-label="Visit Shah Jahan Marquee Instagram"
        >
          <svg
            viewBox="0 0 24 24"
            width="19"
            height="19"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle
              cx="17.5"
              cy="6.5"
              r="1"
              fill="currentColor"
              stroke="none"
            />
          </svg>
          <span>INSTAGRAM</span>
        </a>

        <span className="copyright">© 2026 SHAH JAHAN MARQUEE</span>
      </footer>
    </main>
  );
}
