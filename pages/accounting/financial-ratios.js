import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import financialRatiosContent from '../../content/accounting/financial-ratios';

export default function FinancialRatios() {
  const moduleData = {
    title: 'Financial Ratios',
    bucket: 'Accounting',
    bucketSlug: 'accounting',
    overview: 'Learn how to analyze a company’s profitability, liquidity, solvency, efficiency, and valuation using key financial ratios essential for investment banking interviews and real-world analysis.',
    content: financialRatiosContent()
  };

  return (
    <Layout>
      <Head>
        <title>Financial Ratios | Investment Banking Interview Prep</title>
        <meta name="description" content="Master key financial ratios for investment banking interviews, including profitability, liquidity, solvency, efficiency, and valuation metrics." />
      </Head>
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
