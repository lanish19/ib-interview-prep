import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import costOfCapitalContent from '../../content/valuation-principles/cost-of-capital';

export default function CostOfCapital() {
  const moduleData = {
    title: "Cost of Capital",
    bucket: "Valuation Principles",
    bucketSlug: "valuation-principles",
    overview: "Cost of capital represents the minimum return required by providers of capital to a business, reflecting the riskiness of the company's cash flows and serving as the discount rate in valuation.",
    content: costOfCapitalContent()
  };

  return (
    <Layout>
      <Head>
        <title>Cost of Capital | Investment Banking Interview Prep</title>
        <meta name="description" content="Master cost of capital concepts for investment banking interviews including WACC, CAPM, beta, and risk premium calculations." />
      </Head>
      
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
