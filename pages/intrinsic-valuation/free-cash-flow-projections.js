import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import freeCashFlowProjectionsContent from '../../content/intrinsic-valuation/free-cash-flow-projections';

export default function FreeCashFlowProjections() {
  const moduleData = {
    title: "Free Cash Flow and Projections",
    bucket: "Intrinsic Valuation",
    bucketSlug: "intrinsic-valuation",
    overview: "Free Cash Flow represents the cash a company generates after accounting for operating expenses and capital expenditures, serving as the foundation for DCF valuation.",
    content: freeCashFlowProjectionsContent()
  };

  return (
    <Layout>
      <Head>
        <title>Free Cash Flow and Projections | Investment Banking Interview Prep</title>
        <meta name="description" content="Master free cash flow concepts and projections for investment banking interviews" />
      </Head>
      
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
