import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import valuationMultiplesContent from '../../content/valuation-principles/valuation-multiples';

export default function ValuationMultiples() {
  const moduleData = {
    title: "Valuation Multiples",
    bucket: "Valuation Principles",
    bucketSlug: "valuation-principles",
    overview: "Valuation multiples are ratios that relate a company's market value to financial metrics, providing standardized measures to compare relative values across companies.",
    content: valuationMultiplesContent()
  };

  return (
    <Layout>
      <Head>
        <title>Valuation Multiples | Investment Banking Interview Prep</title>
        <meta name="description" content="Master valuation multiples concepts for investment banking interviews" />
      </Head>
      
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
