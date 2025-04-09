import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import sensitivityAnalysisContent from '../../content/intrinsic-valuation/sensitivity-analysis';

export default function SensitivityAnalysis() {
  const moduleData = {
    title: "Sensitivity Analysis",
    bucket: "Intrinsic Valuation",
    bucketSlug: "intrinsic-valuation",
    overview: "Sensitivity Analysis examines how changes in key inputs affect valuation outcomes, providing insight into uncertainty and identifying critical value drivers.",
    content: sensitivityAnalysisContent()
  };

  return (
    <Layout>
      <Head>
        <title>Sensitivity Analysis | Investment Banking Interview Prep</title>
        <meta name="description" content="Master sensitivity analysis concepts for investment banking interviews" />
      </Head>
      
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
