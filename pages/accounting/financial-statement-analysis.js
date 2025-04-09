import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import financialStatementAnalysisContent from '../../content/accounting/financial-statement-analysis';

export default function FinancialStatementAnalysis() {
  const moduleData = {
    title: "Financial Statement Analysis",
    bucket: "Accounting",
    bucketSlug: "accounting",
    overview: "Financial Statement Analysis examines a company's financial statements to gain insights into its financial health, operational performance, and strategic position.",
    content: financialStatementAnalysisContent()
  };

  return (
    <Layout>
      <Head>
        <title>Financial Statement Analysis | Investment Banking Interview Prep</title>
        <meta name="description" content="Master financial statement analysis for investment banking interviews" />
      </Head>
      
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
