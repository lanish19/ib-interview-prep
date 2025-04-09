import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import macroeconomicIndicatorsContent from '../../content/market-dynamics/macroeconomic-indicators';

export default function MacroeconomicIndicators() {
  const moduleData = {
    title: "Macroeconomic Indicators",
    bucket: "Market Dynamics",
    bucketSlug: "market-dynamics",
    overview: "Macroeconomic indicators are statistics that provide insights into the overall health and direction of an economy, essential for understanding market dynamics in investment banking.",
    content: macroeconomicIndicatorsContent()
  };

  return (
    <Layout>
      <Head>
        <title>Macroeconomic Indicators | Investment Banking Interview Prep</title>
        <meta name="description" content="Master macroeconomic indicators for investment banking interviews" />
      </Head>
      
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
