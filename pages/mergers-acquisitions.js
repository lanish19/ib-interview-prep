import React from 'react';
import Layout from '../components/Layout';
import BucketTemplate from '../components/BucketTemplate';
import Head from 'next/head';

export default function MergersAcquisitions() {
  const mergersAcquisitionsBucket = {
    id: 'mergers-acquisitions',
    title: 'Mergers & Acquisitions (M&A)',
    description: 'Understand the strategic, financial, and process aspects of mergers and acquisitions from an investment banking perspective.',
    modules: [
      { 
        id: 'ma-fundamentals', 
        title: 'M&A Fundamentals',
        description: 'Learn the core concepts, strategic rationales, and key terms in mergers and acquisitions.'
      },
      { 
        id: 'deal-structures', 
        title: 'Deal Structures',
        description: 'Understand different M&A transaction structures and their implications for buyers and sellers.'
      },
      { 
        id: 'valuation-considerations', 
        title: 'Valuation Considerations',
        description: 'Explore the specific valuation methodologies and considerations in M&A transactions.'
      },
      { 
        id: 'accretion-dilution-analysis', 
        title: 'Accretion/Dilution Analysis',
        description: 'Learn to analyze the impact of M&A transactions on the acquirer\'s earnings per share.'
      },
      { 
        id: 'synergy-analysis', 
        title: 'Synergy Analysis',
        description: 'Master techniques for estimating and valuing synergies in M&A transactions.'
      },
      { 
        id: 'transaction-process', 
        title: 'Transaction Process',
        description: 'Understand the step-by-step process of executing M&A transactions from both buy-side and sell-side perspectives.'
      },
      { 
        id: 'regulatory-considerations', 
        title: 'Regulatory Considerations',
        description: 'Learn about antitrust, securities laws, and other regulatory factors affecting M&A transactions.'
      },
      { 
        id: 'ma-case-studies', 
        title: 'M&A Case Studies',
        description: 'Analyze real-world M&A transactions across different industries and deal types.'
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title>Mergers & Acquisitions | Investment Banking Interview Prep</title>
        <meta name="description" content="Master M&A concepts for investment banking interviews" />
      </Head>
      
      <BucketTemplate bucket={mergersAcquisitionsBucket} />
    </Layout>
  );
}
