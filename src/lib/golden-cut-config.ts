export const goldenCutConfig = {
  business: {
    name: "Golden Cut",
    type: "Haarsalon",
    address: {
      street: "Schwarzenbergstraße 12",
      postalCode: "21073",
      city: "Hamburg-Harburg",
      shortLocation: "Harburg, Hamburg",
      country: "Deutschland",
    },
    phone: "040 772535",
    phoneHref: "tel:+4940772535",
    directionsHref:
      "https://www.google.com/maps/dir/?api=1&destination=Schwarzenbergstra%C3%9Fe+12%2C+21073+Hamburg",
    openingHours: {
      label: "Öffnungszeiten bitte bestätigen",
      detail: "Aktuelle Zeiten nach Rücksprache mit dem Salon ergänzen.",
      status: "provisional",
    },
    rating: {
      value: "4,3",
      reviewCount: "ca. 110",
      status: "provisional",
    },
  },
  conceptNotice: "Unverbindlicher Website-Entwurf – nicht die offizielle Website.",
  navigation: [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Galerie", href: "#galerie" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  hero: {
    eyebrow: "Haarsalon in Hamburg-Harburg",
    title: "Dein Look.\nDein Moment.",
    description:
      "Ein guter Haarschnitt verändert mehr als nur den Spiegelblick. Golden Cut steht für persönliche Beratung, modernes Styling und Zeit für dich.",
    image: {
      src: "/golden-cut/generated/hero.png",
      alt: "Editoriale Aufnahme eines kurzen dunklen Haarschnitts mit warmen Kupfertönen",
    },
  },
  services: [
    {
      number: "01",
      name: "Haarschnitt",
      description:
        "Schnitt und Form, die zu deinem Alltag, deinem Stil und deiner Haarstruktur passen.",
      detail: "Individuell beraten",
      icon: "scissors",
    },
    {
      number: "02",
      name: "Bartpflege",
      description:
        "Konturen, Pflege und ein sauberer Abschluss für einen Look, der sich gut anfühlt.",
      detail: "Mit Ruhe und Präzision",
      icon: "razor",
    },
    {
      number: "03",
      name: "Styling",
      description:
        "Für den besonderen Anlass oder einfach für heute: ein Finish, das deinen Look unterstreicht.",
      detail: "Passend zum Anlass",
      icon: "sparkle",
    },
  ],
  about: {
    eyebrow: "Nah dran. Ganz bei dir.",
    title: "Schön, wenn ein Termin sich nach Me-Time anfühlt.",
    paragraphs: [
      "Zwischen Alltag und Elbe darf es einen Ort geben, an dem du kurz aussteigst. Bei Golden Cut geht es um deinen Stil, deine Wünsche und eine Beratung, die zuhört.",
      "Ob kleine Veränderung oder neuer Look: Wir denken modern, arbeiten persönlich und nehmen uns Zeit für das, was zu dir passt.",
    ],
    image: {
      src: "/golden-cut/generated/interior.png",
      alt: "Warmer, moderner Salonbereich mit Rundspiegel und Friseurstuhl",
    },
  },
  gallery: [
    {
      src: "/golden-cut/generated/interior.png",
      alt: "Heller Salonbereich mit Rundspiegel, Holz und warmem Tageslicht",
      label: "01 / Atmosphäre",
      className: "gallery-tall",
    },
    {
      src: "/golden-cut/generated/texture.png",
      alt: "Nahaufnahme von glänzenden dunklen und kupferfarbenen Haarsträhnen",
      label: "02 / Textur",
      className: "gallery-wide",
    },
    {
      src: "/golden-cut/generated/details.png",
      alt: "Schwarze Friseurschere und goldener Kamm auf warmem Leinen",
      label: "03 / Details",
      className: "gallery-square",
    },
  ],
  contact: {
    eyebrow: "Dein nächster Termin",
    title: "Lust auf eine Veränderung?",
    description:
      "Schick uns deine Anfrage. Wir melden uns mit den nächsten Schritten – ganz unkompliziert.",
    formNote:
      "Demo-Formular: Es besteht noch keine Verbindung zum Salon. Das Absenden zeigt nur eine Demo-Bestätigung.",
    serviceOptions: ["Haarschnitt", "Bartpflege", "Styling", "Noch nicht sicher"],
  },
  legalNotice:
    "Platzhalter – rechtliche Texte müssen vor Veröffentlichung ergänzt und geprüft werden.",
} as const;

export type GoldenCutConfig = typeof goldenCutConfig;
