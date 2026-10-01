import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Golden Cut – Haarsalon in Hamburg-Harburg";
const description =
  "Golden Cut in Hamburg-Harburg: persönliche Beratung, Haarschnitt, Bartpflege und Styling. Unverbindlicher Website-Entwurf.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Golden Cut",
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Golden Cut",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  appleWebApp: {
    capable: true,
    title: "Golden Cut",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#282321",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
