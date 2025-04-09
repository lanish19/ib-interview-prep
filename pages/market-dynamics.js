import React from 'react';
import Layout from '../components/Layout';
import BucketTemplate from '../components/BucketTemplate';
import Head from 'next/head';

export default function MarketDynamics() {
  const marketDynamicsBucket = {
    id: 'market-dynamics',
    title: 'Market Dynamics',
    description: 'Gain insights into capital markets, economic indicators, and industry trends that influence investment banking activities.',
    modules: [
      { 
        id: 'macroeconomic-indicators', 
        title: 'Macroeconomic Indicators',
        description: 'Understand key economic indicators and their impact on financial markets and investment banking.'
      },
      { 
        id: 'capital-markets-overview', 
        title: 'Capital Markets Overview',
        description: 'Learn the structure and function of capital markets and their role in investment banking.'
      },
      { 
        id: 'equity-markets', 
        title: 'Equity Markets',
        description: 'Explore equity market dynamics, including IPOs, follow-on offerings, and trading considerations.'
      },
      { 
        id: 'debt-markets', 
        title: 'Debt Markets',
        description: 'Understand debt market structures, instruments, and issuance processes.'
      },
      { 
        id: 'industry-analysis', 
        title: 'Industry Analysis',
        description: 'Learn frameworks for analyzing industry dynamics and competitive positioning.'
      },
      { 
        id: 'market-cycles', 
        title: 'Market Cycles',
        description: 'Understand economic and market cycles and their impact on investment banking activities.'
      },
      { 
        id: 'global-market-considerations', 
        title: 'Global Market Considerations',
        description: 'Explore international market dynamics and cross-border transaction considerations.'
      },
      { 
        id: 'current-market-trends', 
        title: 'Current Market Trends',
        description: 'Stay updated on recent developments and emerging trends in financial markets.'
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title>Market Dynamics | Investment Banking Interview Prep</title>
        <meta name="description" content="Master market dynamics concepts for investment banking interviews" />
      </Head>
      
      <BucketTemplate bucket={marketDynamicsBucket} />
    </Layout>
  );
}
