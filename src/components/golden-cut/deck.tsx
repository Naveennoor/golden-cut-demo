"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { goldenCutConfig as config } from "@/lib/golden-cut-config";

const SLIDE_W = 1920;
const SLIDE_H = 1080;

function useSlideScale() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const update = () =>
      setScale(Math.min(window.innerWidth / SLIDE_W, window.innerHeight / SLIDE_H));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return scale;
}

function Slide({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <div className={`deck-slide ${dark ? "deck-slide-dark" : ""}`}>{children}</div>;
}

function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="deck-kicker">
      <span className="deck-kicker-line" />
      {children}
    </p>
  );
}

export function GoldenCutDeck() {
  const scale = useSlideScale();
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const slides: ReactNode[] = [
    <Slide dark key="title">
      <div className="deck-center">
        <span className="deck-mark">G</span>
        <Kicker>Website-Konzept · Hamburg-Harburg</Kicker>
        <h1 className="deck-title-xl">
          Golden Cut
          <br />
          <em>im Netz.</em>
        </h1>
        <p className="deck-sub">Ein Entwurf für Ihre neue Website — persönlich, modern, nah.</p>
      </div>
      <p className="deck-foot">Unverbindlicher Konzeptentwurf · {new Date().getFullYear()}</p>
    </Slide>,

    <Slide key="why">
      <Kicker>Warum eine Website?</Kicker>
      <h2 className="deck-title">
        Ihre Kunden suchen
        <br />
        <em>zuerst online.</em>
      </h2>
      <div className="deck-cards">
        <div className="deck-card">
          <span className="deck-card-num">01</span>
          <h3>Gefunden werden</h3>
          <p>Wer „Friseur Harburg" sucht, sollte Golden Cut sofort sehen — mit Adresse, Telefon und Route.</p>
        </div>
        <div className="deck-card">
          <span className="deck-card-num">02</span>
          <h3>Vertrauen aufbauen</h3>
          <p>Ein gepflegter Auftritt zeigt Ihren Stil, bevor der erste Kunde den Salon betritt.</p>
        </div>
        <div className="deck-card">
          <span className="deck-card-num">03</span>
          <h3>Termine vereinfachen</h3>
          <p>Anfragen direkt über die Website — weniger Telefonstress, mehr Zeit für Ihre Arbeit.</p>
        </div>
      </div>
    </Slide>,

    <Slide key="concept">
      <div className="deck-split">
        <div>
          <Kicker>Das Konzept</Kicker>
          <h2 className="deck-title">
            Warm. Editorial.
            <br />
            <em>Wie Ihr Salon.</em>
          </h2>
          <p className="deck-body">
            Creme- und Goldtöne, elegante Serifen, großzügige Bilder — die Website soll sich anfühlen wie ein
            Besuch bei Ihnen: ruhig, persönlich, hochwertig.
          </p>
        </div>
        <div className="deck-arch">
          <img src={config.hero.image.src} alt={config.hero.image.alt} />
        </div>
      </div>
    </Slide>,

    <Slide key="features">
      <Kicker>Was die Seite bietet</Kicker>
      <h2 className="deck-title">
        Alles Wichtige
        <br />
        <em>auf einen Blick.</em>
      </h2>
      <ul className="deck-list">
        <li>
          <strong>Leistungen</strong> — Haarschnitt, Bartpflege, Styling klar präsentiert
        </li>
        <li>
          <strong>Über uns</strong> — Ihre Geschichte und Atmosphäre in Bild und Text
        </li>
        <li>
          <strong>Galerie</strong> — Looks und Stimmung als visuelle Visitenkarte
        </li>
        <li>
          <strong>Anfahrt & Kontakt</strong> — Adresse, Telefon, Route per Knopfdruck
        </li>
        <li>
          <strong>Terminanfrage</strong> — Formular für unkomplizierte Anfragen
        </li>
      </ul>
    </Slide>,

    <Slide key="gallery">
      <Kicker>Die Bildwelt</Kicker>
      <h2 className="deck-title">
        Looks, die <em>bleiben.</em>
      </h2>
      <div className="deck-gallery">
        {config.gallery.map((image) => (
          <figure key={image.label}>
            <img src={image.src} alt={image.alt} />
            <figcaption>{image.label}</figcaption>
          </figure>
        ))}
      </div>
      <p className="deck-note">Platzhalter-Bilder — werden durch Ihre eigenen Salon-Fotos ersetzt.</p>
    </Slide>,

    <Slide key="next">
      <Kicker>Nächste Schritte</Kicker>
      <h2 className="deck-title">
        Von hier
        <br />
        <em>zum Launch.</em>
      </h2>
      <div className="deck-steps">
        <div className="deck-step">
          <span>1</span>
          <p>Ihre Inhalte: echte Fotos, Preise, Öffnungszeiten</p>
        </div>
        <div className="deck-step">
          <span>2</span>
          <p>Rechtliches: Impressum & Datenschutz ergänzen</p>
        </div>
        <div className="deck-step">
          <span>3</span>
          <p>Feinschliff gemeinsam: Texte, Farben, Wünsche</p>
        </div>
        <div className="deck-step">
          <span>4</span>
          <p>Veröffentlichung unter Ihrer Wunschadresse</p>
        </div>
      </div>
    </Slide>,

    <Slide dark key="close">
      <div className="deck-center">
        <Kicker>Golden Cut · {config.business.address.shortLocation}</Kicker>
        <h2 className="deck-title-xl">
          Dein Look.
          <br />
          <em>Dein Moment.</em>
        </h2>
        <p className="deck-sub">
          {config.business.address.street} · {config.business.address.postalCode} {config.business.address.city}
          <br />
          {config.business.phone}
        </p>
        <a className="deck-cta" href="/">
          Live-Website ansehen
        </a>
      </div>
    </Slide>,
  ];

  const total = slides.length;
  const go = useCallback(
    (next: number) => setIndex(() => Math.min(total - 1, Math.max(0, next))),
    [total],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " " || event.key === "PageDown") {
        event.preventDefault();
        setIndex((current) => Math.min(total - 1, current + 1));
      }
      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        setIndex((current) => Math.max(0, current - 1));
      }
      if (event.key === "Home") setIndex(0);
      if (event.key === "End") setIndex(total - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  useEffect(() => {
    document.title = `${index + 1}/${total} — Golden Cut Präsentation`;
  }, [index, total]);

  return (
    <div
      className="deck-stage"
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        const endX = event.changedTouches[0]?.clientX;
        if (touchStartX.current === null || endX === undefined) return;
        const dx = endX - touchStartX.current;
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
        touchStartX.current = null;
      }}
    >
      <div className="deck-slide-wrap" style={{ transform: `translate(-50%, -50%) scale(${scale})` }}>
        {slides[index]}
      </div>

      <div className="deck-ui">
        <button type="button" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Vorherige Folie">
          ←
        </button>
        <span>
          {index + 1} / {total}
        </span>
        <button
          type="button"
          onClick={() => go(index + 1)}
          disabled={index === total - 1}
          aria-label="Nächste Folie"
        >
          →
        </button>
      </div>
    </div>
  );
}
