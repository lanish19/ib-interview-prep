import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import financialStatementAnalysisContent from '../../content/accounting/financial-statement-analysis';

export default function FinancialStatementAnalysis() {
  const moduleData = {
    title: 'Financial Statement Analysis',
    bucket: 'Accounting',
    bucketSlug: 'accounting',
    overview: 'Learn comprehensive approaches to analyzing financial statements for valuation, risk assessment, and investment banking interviews.',
    content: financialStatementAnalysisContent()
  };

  return (
    <Layout>
      <Head>
        <title>Financial Statement Analysis | Investment Banking Interview Prep</title>
        <meta name="description" content="Master financial statement analysis techniques including trend, common-size, ratio, and cash flow analysis for investment banking interviews." />
      </Head>
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
