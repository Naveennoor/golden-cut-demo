"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { goldenCutConfig as config } from "@/lib/golden-cut-config";

type IconName = "arrow" | "scissors" | "razor" | "sparkle" | "pin" | "phone";

function Icon({ name }: { name: IconName }) {
  if (name === "arrow") {
    return (
      <svg aria-hidden="true" className="icon" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h13M13 6l6 6-6 6" />
      </svg>
    );
  }

  if (name === "scissors") {
    return (
      <svg aria-hidden="true" className="icon icon-large" viewBox="0 0 32 32" fill="none">
        <circle cx="8.3" cy="8.2" r="3.3" />
        <circle cx="8.3" cy="23.8" r="3.3" />
        <path d="m11 10.2 14 13.6M11 21.8 25 8.2" />
      </svg>
    );
  }

  if (name === "razor") {
    return (
      <svg aria-hidden="true" className="icon icon-large" viewBox="0 0 32 32" fill="none">
        <path d="M6 9h20M8 13h16M10 17h12M12 21h8M14 25h4" />
        <path d="M6 6h20" />
      </svg>
    );
  }

  if (name === "sparkle") {
    return (
      <svg aria-hidden="true" className="icon icon-large" viewBox="0 0 32 32" fill="none">
        <path d="M16 3v26M3 16h26M7 7l18 18M25 7 7 25" />
        <circle cx="16" cy="16" r="3.5" />
      </svg>
    );
  }

  if (name === "pin") {
    return (
      <svg aria-hidden="true" className="icon" viewBox="0 0 24 24" fill="none">
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2.2" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="icon" viewBox="0 0 24 24" fill="none">
      <path d="M6.5 4h3l1.5 4-2 1.5a15.5 15.5 0 0 0 5.5 5.5l1.5-2 4 1.5v3c0 1.1-.9 2-2 2C11.4 19.5 4.5 12.6 4.5 6c0-1.1.9-2 2-2Z" />
    </svg>
  );
}

function ArrowLink({
  children,
  href,
  variant = "dark",
  external = false,
}: {
  children: ReactNode;
  href: string;
  variant?: "dark" | "light" | "outline";
  external?: boolean;
}) {
  return (
    <a
      className={`button button-${variant}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span>{children}</span>
      <Icon name="arrow" />
    </a>
  );
}

export function GoldenCutSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormSubmitted(true);
  }

  return (
    <main className="salon-site">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={`${config.business.name} – Startseite`}>
          <span className="wordmark-mark">G</span>
          <span className="wordmark-name">{config.business.name}</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menü {menuOpen ? "schließen" : "öffnen"}</span>
          <span />
          <span />
        </button>

        <nav
          className={`site-navigation ${menuOpen ? "is-open" : ""}`}
          id="site-navigation"
          aria-label="Hauptnavigation"
        >
          <div className="nav-links">
            {config.navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
          <a className="nav-cta" href="#kontakt" onClick={() => setMenuOpen(false)}>
            Termin anfragen
            <Icon name="arrow" />
          </a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">
              <span className="eyebrow-line" />
              {config.hero.eyebrow}
            </p>
            <h1 id="hero-title">
              {config.hero.title.split("\n").map((line, index) => (
                <span key={line} className={index === 1 ? "title-accent" : undefined}>
                  {line}
                  {index === 0 ? <br /> : null}
                </span>
              ))}
            </h1>
            <p className="hero-description">{config.hero.description}</p>
            <div className="hero-actions">
              <ArrowLink href="#kontakt" variant="light">Termin anfragen</ArrowLink>
              <ArrowLink href={config.business.directionsHref} variant="outline" external>
                Route öffnen
              </ArrowLink>
            </div>
          </div>

          <div className="hero-art-wrap">
            <div className="hero-art">
              <img src={config.hero.image.src} alt={config.hero.image.alt} />
              <span className="hero-art-label">01 <span>/</span> Golden Cut</span>
            </div>
            <span className="hero-scroll-hint">Scrollen <span /></span>
          </div>
        </div>
        <div className="concept-notice">{config.conceptNotice}</div>
        <div className="hero-footerline">
          <span>{config.business.address.shortLocation}</span>
          <span className="hero-footer-dot" />
          <span>Persönlich. Modern. Nah.</span>
        </div>
      </section>

      <section className="services section-shell" id="leistungen" aria-labelledby="services-title">
        <div className="section-intro">
          <p className="eyebrow"><span className="eyebrow-line" />Was wir für dich tun</p>
          <h2 id="services-title">Dein Stil, <em>deine</em> Regeln.</h2>
          <p className="section-lead">
            Von klaren Konturen bis zum neuen Lieblingslook: Wir starten mit einer guten Beratung.
          </p>
        </div>
        <div className="service-list">
          {config.services.map((service) => (
            <article className="service-card" key={service.name}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                <span className="service-icon"><Icon name={service.icon} /></span>
              </div>
              <div className="service-card-copy">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <span className="service-detail">{service.detail}</span>
              </div>
              <span className="service-arrow"><Icon name="arrow" /></span>
            </article>
          ))}
        </div>
        <p className="content-note">
          <span className="note-mark">i</span>
          Beispielinhalte – Leistungen und Preise bitte mit dem Salon bestätigen.
        </p>
      </section>

      <section className="about section-shell" id="ueber-uns" aria-labelledby="about-title">
        <div className="about-image">
          <img src={config.about.image.src} alt={config.about.image.alt} loading="lazy" />
          <span className="image-caption">Ein Raum für deinen Moment</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow"><span className="eyebrow-line" />{config.about.eyebrow}</p>
          <h2 id="about-title">{config.about.title}</h2>
          {config.about.paragraphs.map((paragraph) => (
            <p className="about-paragraph" key={paragraph}>{paragraph}</p>
          ))}
          <a className="text-link" href="#kontakt">Mehr über deinen Besuch <Icon name="arrow" /></a>
        </div>
      </section>

      <section className="gallery section-shell" id="galerie" aria-labelledby="gallery-title">
        <div className="gallery-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" />Inspiration</p>
            <h2 id="gallery-title">Looks, die<br /><em>bleiben.</em></h2>
          </div>
          <p className="gallery-intro">Ein kleiner Vorgeschmack auf die Stimmung, die dich erwartet.</p>
        </div>
        <div className="gallery-grid">
          {config.gallery.map((image) => (
            <figure className={`gallery-item ${image.className}`} key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>{image.label}</figcaption>
            </figure>
          ))}
        </div>
        <p className="content-note gallery-note">
          <span className="note-mark">i</span>
          Platzhalter-Bildwelten für diesen Entwurf – vor Veröffentlichung durch eigene, freigegebene Bilder ersetzen.
        </p>
      </section>

      <section className="visit" id="besuch" aria-labelledby="visit-title">
        <div className="visit-inner section-shell">
          <div className="visit-heading">
            <p className="eyebrow eyebrow-light"><span className="eyebrow-line" />Komm vorbei</p>
            <h2 id="visit-title">Mitten in<br /><em>Harburg.</em></h2>
          </div>
          <div className="visit-details">
            <div className="detail-block">
              <span className="detail-icon"><Icon name="pin" /></span>
              <div>
                <span className="detail-label">Adresse</span>
                <address>{config.business.address.street}<br />{config.business.address.postalCode} {config.business.address.city}</address>
              </div>
            </div>
            <div className="detail-block">
              <span className="detail-icon"><Icon name="phone" /></span>
              <div>
                <span className="detail-label">Telefon</span>
                <a href={config.business.phoneHref}>{config.business.phone}</a>
              </div>
            </div>
            <div className="hours-block">
              <span className="detail-label">Öffnungszeiten</span>
              <strong>{config.business.openingHours.label}</strong>
              <p>{config.business.openingHours.detail}</p>
            </div>
            <div className="visit-actions">
              <ArrowLink href={config.business.phoneHref} variant="light">Anrufen</ArrowLink>
              <ArrowLink href={config.business.directionsHref} variant="outline" external>Route öffnen</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="kontakt" aria-labelledby="contact-title">
        <div className="contact-heading">
          <p className="eyebrow"><span className="eyebrow-line" />{config.contact.eyebrow}</p>
          <h2 id="contact-title">{config.contact.title}</h2>
          <p>{config.contact.description}</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label><span>Name <b>*</b></span><input name="name" type="text" placeholder="Dein Name" required /></label>
            <label><span>Telefon <b>*</b></span><input name="phone" type="tel" placeholder="Deine Telefonnummer" required /></label>
          </div>
          <label>
            <span>Wunschleistung</span>
            <select name="service" defaultValue="">
              <option value="" disabled>Bitte auswählen</option>
              {config.contact.serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
          <label><span>Nachricht</span><textarea name="message" rows={4} placeholder="Erzähl uns kurz, was du dir wünschst ..." /></label>
          <div className="form-footer">
            <p>{config.contact.formNote}</p>
            <button className="button button-dark form-submit" type="submit">
              <span>{formSubmitted ? "Anfrage vorgemerkt" : "Anfrage senden"}</span>
              <Icon name="arrow" />
            </button>
          </div>
          {formSubmitted ? (
            <p className="form-success" role="status">
              Danke! Dies ist eine Demo-Interaktion – es wurde noch keine Anfrage an den Salon übermittelt.
            </p>
          ) : null}
        </form>
      </section>

      <footer className="site-footer" id="rechtliches">
        <div className="footer-top">
          <a className="wordmark wordmark-footer" href="#top">
            <span className="wordmark-mark">G</span>
            <span className="wordmark-name">{config.business.name}</span>
          </a>
          <p className="footer-tagline">Dein Look. Dein Moment.</p>
          <div className="footer-contact">
            <span>{config.business.address.city}</span>
            <a href={config.business.phoneHref}>{config.business.phone}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {config.business.name} — Konzeptentwurf</span>
          <div className="legal-links"><a href="#rechtliches">Impressum</a><a href="#rechtliches">Datenschutz</a></div>
        </div>
        <p className="legal-notice">{config.legalNotice}</p>
      </footer>
    </main>
  );
}
