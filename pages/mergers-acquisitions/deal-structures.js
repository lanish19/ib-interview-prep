import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import dealStructuresContent from '../../content/mergers-acquisitions/deal-structures';

export default function DealStructures() {
  const moduleData = {
    title: "Deal Structures",
    bucket: "Mergers & Acquisitions",
    bucketSlug: "mergers-acquisitions",
    overview: "Deal structures in M&A refer to the legal, financial, and operational frameworks that define how a transaction is organized, executed, and implemented.",
    content: dealStructuresContent()
  };

  return (
    <Layout>
      <Head>
        <title>Deal Structures | Investment Banking Interview Prep</title>
        <meta name="description" content="Master M&A deal structures for investment banking interviews" />
      </Head>
      
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
