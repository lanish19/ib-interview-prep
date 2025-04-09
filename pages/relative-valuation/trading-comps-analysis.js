import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import tradingCompsAnalysisContent from '../../content/relative-valuation/trading-comps-analysis';

export default function TradingCompsAnalysis() {
  const moduleData = {
    title: "Trading Comps Analysis",
    bucket: "Relative Valuation",
    bucketSlug: "relative-valuation",
    overview: "Trading Comparables Analysis estimates a company's value by comparing its financial metrics to those of similar publicly traded companies.",
    content: tradingCompsAnalysisContent()
  };

  return (
    <Layout>
      <Head>
        <title>Trading Comps Analysis | Investment Banking Interview Prep</title>
        <meta name="description" content="Master trading comparables analysis for investment banking interviews" />
      </Head>
      
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
