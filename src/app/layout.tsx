import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golden Cut – Haarsalon in Hamburg-Harburg",
  description:
    "Unverbindlicher Website-Entwurf für Golden Cut, einen Haarsalon in Hamburg-Harburg.",
  applicationName: "Golden Cut",
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
