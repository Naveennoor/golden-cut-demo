import type { Metadata } from "next";
import { GoldenCutDeck } from "@/components/golden-cut/deck";

const title = "Golden Cut – Website-Konzept · Präsentation";
const description =
  "Präsentation des Website-Konzepts für Golden Cut, Haarsalon in Hamburg-Harburg. Unverbindlicher Entwurf.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Golden Cut",
  },
};

export default function PresentationPage() {
  return <GoldenCutDeck />;
}
