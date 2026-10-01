import React from 'react';
import { Helmet } from 'react-helmet-async';

interface PageMetaProps {
  title?: string;
  description?: string;
}

export function PageMeta({
  title = 'Bharosa (भरोसा) | Trust, Owned by You',
  description = 'Sovereign Identity (DID), Client-Side Encrypted IPFS Custody, and Mathematical Groth16 Zero-Knowledge Verification',
}: PageMetaProps) {
  const fullTitle = title.includes('Bharosa') ? title : `${title} | Bharosa (भरोसा)`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
