import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import workingCapitalContent from '../../content/accounting/working-capital';

export default function WorkingCapital() {
  const moduleData = {
    title: "Working Capital",
    bucket: "Accounting",
    bucketSlug: "accounting",
    overview: "Working Capital management is crucial for understanding a company's short-term financial health and operational efficiency, with significant implications for valuation and transaction advisory.",
    content: workingCapitalContent()
  };

  return (
    <Layout>
      <Head>
        <title>Working Capital | Investment Banking Interview Prep</title>
        <meta name="description" content="Master working capital concepts for investment banking interviews" />
      </Head>
      
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
