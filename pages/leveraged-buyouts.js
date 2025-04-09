import React from 'react';
import Layout from '../components/Layout';
import BucketTemplate from '../components/BucketTemplate';
import Head from 'next/head';

export default function LeveragedBuyouts() {
  const leveragedBuyoutsBucket = {
    id: 'leveraged-buyouts',
    title: 'Leveraged Buyouts (LBO)',
    description: 'Develop proficiency in LBO analysis, understanding how financial sponsors evaluate and structure leveraged transactions.',
    modules: [
      { 
        id: 'lbo-fundamentals', 
        title: 'LBO Fundamentals',
        description: 'Learn the core concepts, structures, and key considerations in leveraged buyout transactions.'
      },
      { 
        id: 'lbo-model-structure', 
        title: 'LBO Model Structure',
        description: 'Master the components and mechanics of building an LBO model.'
      },
      { 
        id: 'debt-structures', 
        title: 'Debt Structures',
        description: 'Understand different debt instruments and financing structures used in LBO transactions.'
      },
      { 
        id: 'returns-analysis', 
        title: 'Returns Analysis',
        description: 'Learn to calculate and interpret IRR, MOIC, and other return metrics used by financial sponsors.'
      },
      { 
        id: 'exit-strategies', 
        title: 'Exit Strategies',
        description: 'Explore different exit options for LBO investments and their impact on returns.'
      },
      { 
        id: 'lbo-candidates', 
        title: 'LBO Candidates',
        description: 'Understand the characteristics that make a company an attractive LBO target.'
      },
      { 
        id: 'sponsor-considerations', 
        title: 'Sponsor Considerations',
        description: 'Learn how private equity firms evaluate potential investments and structure transactions.'
      },
      { 
        id: 'lbo-case-studies', 
        title: 'LBO Case Studies',
        description: 'Analyze real-world leveraged buyout transactions across different industries.'
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title>Leveraged Buyouts | Investment Banking Interview Prep</title>
        <meta name="description" content="Master LBO analysis for investment banking interviews" />
      </Head>
      
      <BucketTemplate bucket={leveragedBuyoutsBucket} />
    </Layout>
  );
}
