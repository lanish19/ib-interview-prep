import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import balanceSheetContent from '../../content/accounting/balance-sheet';

export default function BalanceSheet() {
  const moduleData = {
    title: "Balance Sheet",
    bucket: "Accounting",
    bucketSlug: "accounting",
    overview: "The balance sheet is a fundamental financial statement that provides a snapshot of a company's financial position at a specific point in time, showing its assets, liabilities, and shareholders' equity.",
    content: balanceSheetContent()
  };

  return (
    <Layout>
      <Head>
        <title>Balance Sheet | Investment Banking Interview Prep</title>
        <meta name="description" content="Master balance sheet concepts for investment banking interviews" />
      </Head>
      
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
