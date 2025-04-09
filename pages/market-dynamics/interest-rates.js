import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import interestRatesContent from '../../content/market-dynamics/interest-rates';

export default function InterestRates() {
  const moduleData = {
    title: "Interest Rates",
    bucket: "Market Dynamics",
    bucketSlug: "market-dynamics",
    overview: "Interest rates are the cost of borrowing money or the return for lending money, serving as a fundamental mechanism in financial markets that influences economic activity, asset valuations, and investment decisions.",
    content: interestRatesContent()
  };

  return (
    <Layout>
      <Head>
        <title>Interest Rates | Investment Banking Interview Prep</title>
        <meta name="description" content="Master interest rates concepts for investment banking interviews" />
      </Head>
      
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
