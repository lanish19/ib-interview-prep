import React from 'react';
import Layout from '../components/Layout';
import BucketTemplate from '../components/BucketTemplate';
import Head from 'next/head';

export default function RelativeValuation() {
  const relativeValuationBucket = {
    id: 'relative-valuation',
    title: 'Relative Valuation (Comps)',
    description: 'Master the art of comparable companies and precedent transactions analysis, essential tools for market-based valuation.',
    modules: [
      { 
        id: 'comparable-companies', 
        title: 'Comparable Companies Analysis',
        description: 'Learn how to select appropriate peer companies and analyze trading multiples for valuation.'
      },
      { 
        id: 'precedent-transactions', 
        title: 'Precedent Transactions Analysis',
        description: 'Understand how to use historical M&A transactions to inform current valuation.'
      },
      { 
        id: 'selecting-appropriate-comps', 
        title: 'Selecting Appropriate Comps',
        description: 'Master the methodology for identifying truly comparable companies and transactions.'
      },
      { 
        id: 'valuation-multiples-analysis', 
        title: 'Valuation Multiples Analysis',
        description: 'Learn to calculate, analyze, and apply various valuation multiples in relative valuation.'
      },
      { 
        id: 'adjusting-for-differences', 
        title: 'Adjusting for Differences',
        description: 'Understand techniques for normalizing multiples when companies have different characteristics.'
      },
      { 
        id: 'football-field-analysis', 
        title: 'Football Field Analysis',
        description: 'Learn to create and interpret valuation summary charts used in investment banking.'
      },
      { 
        id: 'industry-specific-multiples', 
        title: 'Industry-Specific Multiples',
        description: 'Explore specialized valuation metrics used in different industries.'
      },
      { 
        id: 'comps-case-studies', 
        title: 'Comps Case Studies',
        description: 'Apply relative valuation techniques to real-world scenarios across different sectors.'
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title>Relative Valuation (Comps) | Investment Banking Interview Prep</title>
        <meta name="description" content="Master comparable companies analysis for investment banking interviews" />
      </Head>
      
      <BucketTemplate bucket={relativeValuationBucket} />
    </Layout>
  );
}
