import React from 'react';
import Layout from '../../components/Layout';
import SubModuleTemplate from '../../components/SubModuleTemplate';
import Head from 'next/head';
import tellMeAboutYourselfContent from '../../content/behavioral-questions/tell-me-about-yourself';

export default function TellMeAboutYourself() {
  const moduleData = {
    title: "Tell Me About Yourself",
    bucket: "Behavioral & Fit Questions",
    bucketSlug: "behavioral-questions",
    overview: "The 'Tell Me About Yourself' question is often the first and most important question in investment banking interviews, setting the tone for the entire conversation and allowing you to highlight your qualifications.",
    content: tellMeAboutYourselfContent()
  };

  return (
    <Layout>
      <Head>
        <title>Tell Me About Yourself | Investment Banking Interview Prep</title>
        <meta name="description" content="Master the 'Tell Me About Yourself' question for investment banking interviews" />
      </Head>
      
      <SubModuleTemplate moduleData={moduleData} />
    </Layout>
  );
}
