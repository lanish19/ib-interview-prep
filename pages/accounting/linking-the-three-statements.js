import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import LinkingTheThreeStatementsContent from '../../content/accounting/linking-the-three-statements';

export default function LinkingTheThreeStatements() {
  const moduleData = {
    title: 'Linking the Three Statements',
    bucket: 'Accounting',
    bucketSlug: 'accounting',
    overview: 'Understand how the income statement, balance sheet, and cash flow statement connect and flow together.',
    content: <LinkingTheThreeStatementsContent />
  };

  return (
    <Layout>
      <Head>
        <title>Linking the Three Statements | Investment Banking Interview Prep</title>
        <meta name="description" content="Learn how the three core financial statements are linked for financial modeling and analysis." />
      </Head>
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
