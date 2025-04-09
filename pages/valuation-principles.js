import React from 'react';
import Layout from '../components/Layout';
import BucketTemplate from '../components/BucketTemplate';
import Head from 'next/head';

export default function ValuationPrinciples() {
  const valuationPrinciplesBucket = {
    id: 'valuation-principles',
    title: 'Valuation Principles',
    description: 'Learn the core concepts and methodologies of valuation that form the foundation of investment banking analysis.',
    modules: [
      { 
        id: 'valuation-fundamentals', 
        title: 'Valuation Fundamentals',
        description: 'Understand the key principles and approaches to business valuation used in investment banking.'
      },
      { 
        id: 'time-value-of-money', 
        title: 'Time Value of Money',
        description: 'Master the concepts of present value, future value, and their application in valuation methodologies.'
      },
      { 
        id: 'cost-of-capital', 
        title: 'Cost of Capital',
        description: 'Learn how to calculate and apply WACC and other cost of capital concepts in valuation.'
      },
      { 
        id: 'terminal-value', 
        title: 'Terminal Value',
        description: 'Understand different approaches to calculating terminal value in DCF analysis.'
      },
      { 
        id: 'valuation-multiples', 
        title: 'Valuation Multiples',
        description: 'Explore the various multiples used in relative valuation and when to apply each.'
      },
      { 
        id: 'enterprise-vs-equity-value', 
        title: 'Enterprise vs. Equity Value',
        description: 'Understand the critical distinction between enterprise value and equity value in valuation.'
      },
      { 
        id: 'sensitivity-analysis', 
        title: 'Sensitivity Analysis',
        description: 'Learn techniques for testing how changes in assumptions affect valuation outcomes.'
      },
      { 
        id: 'valuation-best-practices', 
        title: 'Valuation Best Practices',
        description: 'Master the professional standards and approaches used by investment bankers in valuation.'
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title>Valuation Principles | Investment Banking Interview Prep</title>
        <meta name="description" content="Master valuation principles for investment banking interviews" />
      </Head>
      
      <BucketTemplate bucket={valuationPrinciplesBucket} />
    </Layout>
  );
}
