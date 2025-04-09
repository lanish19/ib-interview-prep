import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import lboModelMechanicsContent from '../../content/leveraged-buyouts/lbo-model-mechanics';

export default function LBOModelMechanics() {
  const moduleData = {
    title: "LBO Model Mechanics",
    bucket: "Leveraged Buyouts",
    bucketSlug: "leveraged-buyouts",
    overview: "An LBO model is a financial representation of a leveraged buyout transaction that projects the target company's performance, debt repayment, and potential returns to equity investors.",
    content: lboModelMechanicsContent()
  };

  return (
    <Layout>
      <Head>
        <title>LBO Model Mechanics | Investment Banking Interview Prep</title>
        <meta name="description" content="Master LBO model mechanics for investment banking interviews" />
      </Head>
      
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
