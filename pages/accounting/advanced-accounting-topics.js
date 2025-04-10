import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import advancedAccountingTopicsContent from '../../content/accounting/advanced-accounting-topics';

export default function AdvancedAccountingTopics() {
  const moduleData = {
    title: 'Advanced Accounting Topics',
    bucket: 'Accounting',
    bucketSlug: 'accounting',
    overview: 'Explore complex accounting issues frequently tested in investment banking interviews, including deferred taxes, leases, goodwill, equity method, and NOLs.',
    content: advancedAccountingTopicsContent()
  };

  return (
    <Layout>
      <Head>
        <title>Advanced Accounting Topics | Investment Banking Interview Prep</title>
        <meta name="description" content="Master advanced accounting topics like deferred taxes, lease accounting, goodwill, equity method, and NOLs for investment banking interviews." />
      </Head>
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
