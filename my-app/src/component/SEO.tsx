import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

const SITE_URL = "https://syedabdullahali.strivui.com";

export default function SEO({
  title = "Abdullah.CV | Senior Software Engineer",
  description = "Senior Software Engineer focused on scalable systems, AI-powered applications, cloud infrastructure, and high-performance software.",
  canonical = SITE_URL,
}: SEOProps) {
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Syed Abdullah Ali",
    url: SITE_URL,
    jobTitle: "Senior Software Engineer",
    description,
    sameAs: [
      "https://github.com/syedabdullahali",
      "https://www.linkedin.com/in/syed-abdullah-ali380/"
      // Add your LinkedIn URL here
    ],
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Abdullah.CV",
    url: SITE_URL,
  };

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <meta
        name="googlebot"
        content="index, follow"
      />

      <link
        rel="canonical"
        href={canonical}
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:site_name"
        content="Abdullah.CV"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonical}
      />

      <meta
        property="og:image"
        content={`${SITE_URL}/Thumnail.jpg`}
      />

      <meta
        property="og:image:alt"
        content="Abdullah.CV — Senior Software Engineer"
      />

      <meta
        property="og:locale"
        content="en_US"
      />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={`${SITE_URL}/Thumnail.jpg`}
      />

      <meta
        name="twitter:image:alt"
        content="Abdullah.CV — Senior Software Engineer"
      />

      {/* Person Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(personStructuredData)}
      </script>

      {/* Website Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(websiteStructuredData)}
      </script>
    </Helmet>
  );
}