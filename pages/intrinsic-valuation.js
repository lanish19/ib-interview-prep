import React from 'react';
import Layout from '../components/Layout';
import BucketTemplate from '../components/BucketTemplate';
import Head from 'next/head';

export default function IntrinsicValuation() {
  const intrinsicValuationBucket = {
    id: 'intrinsic-valuation',
    title: 'Intrinsic Valuation (DCF)',
    description: 'Develop expertise in Discounted Cash Flow analysis, the most fundamental intrinsic valuation methodology in investment banking.',
    modules: [
      { 
        id: 'dcf-fundamentals', 
        title: 'DCF Fundamentals',
        description: 'Understand the core principles and structure of Discounted Cash Flow analysis.'
      },
      { 
        id: 'forecasting-cash-flows', 
        title: 'Forecasting Cash Flows',
        description: 'Learn methodologies for projecting future cash flows in DCF models.'
      },
      { 
        id: 'wacc-calculation', 
        title: 'WACC Calculation',
        description: 'Master the calculation and application of Weighted Average Cost of Capital in DCF analysis.'
      },
      { 
        id: 'terminal-value-approaches', 
        title: 'Terminal Value Approaches',
        description: 'Explore different methods for calculating terminal value in DCF models.'
      },
      { 
        id: 'dcf-variations', 
        title: 'DCF Variations',
        description: 'Understand different DCF methodologies including Unlevered FCF, Levered FCF, and Dividend Discount Models.'
      },
      { 
        id: 'sensitivity-scenario-analysis', 
        title: 'Sensitivity & Scenario Analysis',
        description: 'Learn techniques for testing how changes in assumptions affect DCF valuation outcomes.'
      },
      { 
        id: 'advanced-dcf-topics', 
        title: 'Advanced DCF Topics',
        description: 'Explore complex DCF issues including mid-year convention, stub periods, and non-calendar fiscal years.'
      },
      { 
        id: 'dcf-case-studies', 
        title: 'DCF Case Studies',
        description: 'Apply DCF analysis to real-world valuation scenarios across different industries.'
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title>Intrinsic Valuation (DCF) | Investment Banking Interview Prep</title>
        <meta name="description" content="Master DCF analysis for investment banking interviews" />
      </Head>
      
      <BucketTemplate bucket={intrinsicValuationBucket} />
    </Layout>
  );
}
