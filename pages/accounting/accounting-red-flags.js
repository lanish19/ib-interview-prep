import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import accountingRedFlagsContent from '../../content/accounting/accounting-red-flags';

export default function AccountingRedFlags() {
  const moduleData = {
    title: 'Accounting Red Flags',
    bucket: 'Accounting',
    bucketSlug: 'accounting',
    overview: 'Learn to identify warning signs in financial statements that may indicate aggressive accounting, manipulation, or fraud—crucial skills for investment banking interviews and real-world analysis.',
    content: accountingRedFlagsContent()
  };

  return (
    <Layout>
      <Head>
        <title>Accounting Red Flags | Investment Banking Interview Prep</title>
        <meta name="description" content="Master how to detect accounting red flags, aggressive practices, and potential fraud in financial statements for investment banking interviews." />
      </Head>
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
