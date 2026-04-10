export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pinnacle Design Solutions & Manufacturing",
    "url": "https://clevercrow.in",
    "logo": "https://clevercrow.in/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No.329, Ashwathnagar",
      "addressLocality": "Shimoga",
      "addressRegion": "Karnataka",
      "postalCode": "577204",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.instagram.com/clevercrow.strategies",
      "https://www.facebook.com/people/Clever-Crow-Strategies/61579261586907/",
      "https://www.linkedin.com/company/clever-crow-strategies/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
