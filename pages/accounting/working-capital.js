import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import workingCapitalContent from '../../content/accounting/working-capital';

export default function WorkingCapital() {
  const moduleData = {
    title: 'Working Capital',
    bucket: 'Accounting',
    bucketSlug: 'accounting',
    overview: 'Master the components of working capital and its importance in financial modeling, liquidity analysis, and investment banking interviews.',
    content: workingCapitalContent()
  };

  return (
    <Layout>
      <Head>
        <title>Working Capital | Investment Banking Interview Prep</title>
        <meta name="description" content="Learn working capital concepts, metrics, and management strategies essential for financial modeling and investment banking interviews." />
      </Head>
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
