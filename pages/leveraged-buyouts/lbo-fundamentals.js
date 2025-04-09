import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import lboFundamentalsContent from '../../content/leveraged-buyouts/lbo-fundamentals';

export default function LboFundamentals() {
  const moduleData = {
    title: "LBO Fundamentals",
    bucket: "Leveraged Buyouts",
    bucketSlug: "leveraged-buyouts",
    overview: "LBO Fundamentals covers the core concepts, structures, and key considerations in leveraged buyout transactions that are essential for investment banking interviews.",
    content: lboFundamentalsContent()
  };

  return (
    <Layout>
      <Head>
        <title>LBO Fundamentals | Investment Banking Interview Prep</title>
        <meta name="description" content="Master LBO fundamentals for investment banking interviews" />
      </Head>
      
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
