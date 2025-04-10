import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import accountingPrinciplesContent from '../../content/accounting/accounting-principles';

export default function AccountingPrinciples() {
  const moduleData = {
    title: 'Accounting Principles',
    bucket: 'Accounting',
    bucketSlug: 'accounting',
    overview: 'Understand the fundamental accounting principles, frameworks, and standards (GAAP vs. IFRS) that underpin financial reporting, essential for investment banking interviews and real-world analysis.',
    content: accountingPrinciplesContent()
  };

  return (
    <Layout>
      <Head>
        <title>Accounting Principles | Investment Banking Interview Prep</title>
        <meta name="description" content="Master fundamental accounting principles, GAAP vs. IFRS differences, and their impact on financial statements for investment banking interviews." />
      </Head>
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
