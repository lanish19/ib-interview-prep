import React from 'react';
import Layout from '../components/Layout';
import BucketTemplate from '../components/BucketTemplate';
import Head from 'next/head';

export default function Accounting() {
  const accountingBucket = {
    id: 'accounting',
    title: 'Accounting',
    description: 'Master the fundamentals of financial statements, accounting principles, and financial analysis essential for investment banking interviews.',
    modules: [
      { 
        id: 'income-statement', 
        title: 'Income Statement',
        description: 'Learn the structure, components, and analysis of the income statement, including revenue recognition, expense classification, and profitability metrics.'
      },
      { 
        id: 'balance-sheet', 
        title: 'Balance Sheet',
        description: 'Understand the organization and interpretation of the balance sheet, including assets, liabilities, and shareholders\' equity components.'
      },
      { 
        id: 'cash-flow-statement', 
        title: 'Cash Flow Statement',
        description: 'Master the three sections of the cash flow statement and learn to analyze a company\'s cash generation and usage.'
      },
      { 
        id: 'financial-ratios', 
        title: 'Financial Ratios',
        description: 'Develop proficiency in calculating and interpreting key financial ratios used in investment banking analysis.'
      },
      { 
        id: 'accounting-principles', 
        title: 'Accounting Principles',
        description: 'Understand GAAP and IFRS principles and their implications for financial statement analysis.'
      },
      { 
        id: 'financial-statement-analysis', 
        title: 'Financial Statement Analysis',
        description: 'Learn comprehensive approaches to analyzing financial statements for valuation and investment decisions.'
      },
      { 
        id: 'working-capital', 
        title: 'Working Capital',
        description: 'Master the components of working capital and its importance in financial modeling and company operations.'
      },
      { 
        id: 'advanced-accounting-topics', 
        title: 'Advanced Accounting Topics',
        description: 'Explore complex accounting issues frequently tested in investment banking interviews.'
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title>Accounting | Investment Banking Interview Prep</title>
        <meta name="description" content="Master accounting fundamentals for investment banking interviews" />
      </Head>
      
      <BucketTemplate bucket={accountingBucket} />
    </Layout>
  );
}
