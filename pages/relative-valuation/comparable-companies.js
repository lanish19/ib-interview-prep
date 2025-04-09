import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import comparableCompaniesContent from '../../content/relative-valuation/comparable-companies';

export default function ComparableCompanies() {
  const moduleData = {
    title: "Comparable Companies Analysis",
    bucket: "Relative Valuation",
    bucketSlug: "relative-valuation",
    overview: "Comparable Companies Analysis is a relative valuation methodology that estimates a company's value based on how similar publicly traded companies are valued by the market.",
    content: comparableCompaniesContent()
  };

  return (
    <Layout>
      <Head>
        <title>Comparable Companies Analysis | Investment Banking Interview Prep</title>
        <meta name="description" content="Master comparable companies analysis for investment banking interviews" />
      </Head>
      
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
