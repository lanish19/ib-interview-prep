import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import maFundamentalsContent from '../../content/mergers-acquisitions/ma-fundamentals';

export default function MaFundamentals() {
  const moduleData = {
    title: "M&A Fundamentals",
    bucket: "Mergers & Acquisitions",
    bucketSlug: "mergers-acquisitions",
    overview: "M&A Fundamentals covers the core concepts, strategic rationales, and key terms in mergers and acquisitions that are essential for investment banking interviews.",
    content: maFundamentalsContent()
  };

  return (
    <Layout>
      <Head>
        <title>M&A Fundamentals | Investment Banking Interview Prep</title>
        <meta name="description" content="Master M&A fundamentals for investment banking interviews" />
      </Head>
      
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
