import { GoldenCutSite } from "@/components/golden-cut/site";
import { goldenCutConfig as config } from "@/lib/golden-cut-config";

const salonJsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: config.business.name,
  telephone: config.business.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: config.business.address.street,
    postalCode: config.business.address.postalCode,
    addressLocality: config.business.address.city,
    addressCountry: "DE",
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(salonJsonLd) }} />
      <GoldenCutSite />
    </>
  );
}
