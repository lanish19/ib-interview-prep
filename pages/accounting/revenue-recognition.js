import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import RevenueRecognitionContent from '../../content/accounting/revenue-recognition';

export default function RevenueRecognition() {
  const moduleData = {
    title: 'Revenue Recognition',
    bucket: 'Accounting',
    bucketSlug: 'accounting',
    overview: 'Learn the principles and standards governing when and how revenue is recognized in financial statements.',
    content: <RevenueRecognitionContent />
  };

  return (
    <Layout>
      <Head>
        <title>Revenue Recognition | Investment Banking Interview Prep</title>
        <meta name="description" content="Master revenue recognition rules, timing, and implications for financial analysis and modeling." />
      </Head>
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
