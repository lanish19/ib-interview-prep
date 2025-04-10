import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import UnderstandingDepreciationAndAmortizationContent from '../../content/accounting/understanding-depreciation-and-amortization';

export default function UnderstandingDepreciationAndAmortization() {
  const moduleData = {
    title: 'Understanding Depreciation and Amortization',
    bucket: 'Accounting',
    bucketSlug: 'accounting',
    overview: 'Explore depreciation and amortization methods and their impact on financial statements.',
    content: <UnderstandingDepreciationAndAmortizationContent />
  };

  return (
    <Layout>
      <Head>
        <title>Depreciation & Amortization | Investment Banking Interview Prep</title>
        <meta name="description" content="Master depreciation and amortization concepts, methods, and their impact on financial analysis." />
      </Head>
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
