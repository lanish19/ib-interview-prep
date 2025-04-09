import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import cashFlowStatementContent from '../../content/accounting/cash-flow-statement';

export default function CashFlowStatement() {
  const moduleData = {
    title: "Cash Flow Statement",
    bucket: "Accounting",
    bucketSlug: "accounting",
    overview: "The Cash Flow Statement tracks the movement of cash in and out of a company, providing critical insights into liquidity and financial health that may not be apparent from the income statement alone.",
    content: cashFlowStatementContent()
  };

  return (
    <Layout>
      <Head>
        <title>Cash Flow Statement | Investment Banking Interview Prep</title>
        <meta name="description" content="Master cash flow statement analysis for investment banking interviews" />
      </Head>
      
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
