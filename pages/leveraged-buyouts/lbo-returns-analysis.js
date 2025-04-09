import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import lboReturnsAnalysisContent from '../../content/leveraged-buyouts/lbo-returns-analysis';

export default function LBOReturnsAnalysis() {
  const moduleData = {
    title: "LBO Returns Analysis",
    bucket: "Leveraged Buyouts",
    bucketSlug: "leveraged-buyouts",
    overview: "LBO Returns Analysis evaluates the potential investment returns from a leveraged buyout transaction, focusing on key metrics like IRR, multiple of money, and the drivers of value creation.",
    content: lboReturnsAnalysisContent()
  };

  return (
    <Layout>
      <Head>
        <title>LBO Returns Analysis | Investment Banking Interview Prep</title>
        <meta name="description" content="Master LBO returns analysis for investment banking interviews" />
      </Head>
      
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
