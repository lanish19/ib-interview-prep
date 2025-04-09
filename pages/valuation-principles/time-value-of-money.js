import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import timeValueOfMoneyContent from '../../content/valuation-principles/time-value-of-money';

export default function TimeValueOfMoney() {
  const moduleData = {
    title: "Time Value of Money",
    bucket: "Valuation Principles",
    bucketSlug: "valuation-principles",
    overview: "The Time Value of Money is a fundamental financial concept that underpins virtually all valuation methodologies in investment banking.",
    content: timeValueOfMoneyContent()
  };

  return (
    <Layout>
      <Head>
        <title>Time Value of Money | Investment Banking Interview Prep</title>
        <meta name="description" content="Master time value of money concepts for investment banking interviews" />
      </Head>
      
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
