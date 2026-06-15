import React from 'react';
import { Helmet } from 'react-helmet-async';

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AXOWEB",
  "url": "https://axoweb.in",
  "logo": "https://axoweb.in/logo-dark.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 63806 95874",
    "contactType": "Customer Service",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/axoweb"
  ]
});

export const generateProfessionalServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "AXOWEB Digital Engineering",
  "image": "https://axoweb.in/og-image.png",
  "url": "https://axoweb.in",
  "telephone": "+91 63806 95874",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot No.64, CLV Nagar 1st Street, ECR Road",
    "addressLocality": "Kanathur",
    "addressRegion": "Tamil Nadu",
    "postalCode": "603112",
    "addressCountry": "IN"
  },
  "description": "Custom web development, AI automation, internal systems, and enterprise security solutions for growing businesses."
});

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImageUrl?: string;
  type?: string;
  structuredData?: Record<string, any> | Record<string, any>[];
  includeDefaultSchemas?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl = 'https://axoweb.in',
  ogImageUrl = 'https://axoweb.in/og-image.png',
  type = 'website',
  structuredData,
  includeDefaultSchemas = true,
}) => {
  const schemas: any[] = [];

  if (includeDefaultSchemas) {
    schemas.push(generateOrganizationSchema());
    schemas.push(generateProfessionalServiceSchema());
  }

  if (structuredData) {
    if (Array.isArray(structuredData)) {
      schemas.push(...structuredData);
    } else {
      schemas.push(structuredData);
    }
  }

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImageUrl} />

      {/* JSON-LD Structured Data */}
      {schemas.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)}
        </script>
      )}
    </Helmet>
  );
};
