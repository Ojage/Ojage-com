import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../../lib/constants/config';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  canonical?: string;
}

export default function SEO({
  title,
  description = SITE_CONFIG.description,
  keywords,
  image = `${SITE_CONFIG.url}/og-image.jpg`,
  url = SITE_CONFIG.url,
  type = 'website',
  noindex = false,
  canonical,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.fullName}`
    : `${SITE_CONFIG.fullName} - ${SITE_CONFIG.tagline}`;

  const fullUrl = canonical || url || SITE_CONFIG.url;
  const defaultKeywords =
    'NLP, natural language processing, Cameroon languages, African languages, open source, machine translation, text-to-speech, linguistics, language technology, OJAGE';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={`${defaultKeywords}, ${keywords}`} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
}

