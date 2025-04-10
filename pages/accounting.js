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
      { id: 'income-statement', title: 'Income Statement', description: 'Learn the structure, components, and analysis of the income statement, including revenue recognition, expense classification, and profitability metrics.' },
      { id: 'balance-sheet', title: 'Balance Sheet', description: 'Understand the organization and interpretation of the balance sheet, including assets, liabilities, and shareholders\' equity components.' },
      { id: 'cash-flow-statement', title: 'Cash Flow Statement', description: 'Master the three sections of the cash flow statement and learn to analyze a company\'s cash generation and usage.' },
      { id: 'linking-the-three-statements', title: 'Linking the Three Statements', description: 'Understand how the income statement, balance sheet, and cash flow statement connect and flow together.' },
      { id: 'financial-ratios', title: 'Financial Ratios', description: 'Develop proficiency in calculating and interpreting key financial ratios used in investment banking analysis.' },
      { id: 'accounting-principles', title: 'Accounting Principles', description: 'Understand GAAP and IFRS principles and their implications for financial statement analysis.' },
      { id: 'revenue-recognition', title: 'Revenue Recognition', description: 'Learn the principles and standards governing when and how revenue is recognized in financial statements.' },
      { id: 'financial-statement-analysis', title: 'Financial Statement Analysis', description: 'Learn comprehensive approaches to analyzing financial statements for valuation and investment decisions.' },
      { id: 'working-capital', title: 'Working Capital', description: 'Master the components of working capital and its importance in financial modeling and company operations.' },
      { id: 'understanding-depreciation-and-amortization', title: 'Understanding Depreciation and Amortization', description: 'Explore depreciation and amortization methods and their impact on financial statements.' },
      { id: 'inventory-accounting', title: 'Inventory Accounting (LIFO, FIFO)', description: 'Understand inventory valuation methods and their effects on financials.' },
      { id: 'capitalization-vs-expensing', title: 'Capitalization vs. Expensing', description: 'Learn the difference between capitalizing and expensing costs and their financial impact.' },
      { id: 'goodwill-and-intangible-assets', title: 'Goodwill and Intangible Assets', description: 'Understand accounting for goodwill and other intangible assets, including impairment.' },
      { id: 'deferred-taxes', title: 'Deferred Taxes', description: 'Learn about deferred tax assets and liabilities arising from timing differences.' },
      { id: 'lease-accounting', title: 'Lease Accounting', description: 'Understand the accounting treatment of operating and finance leases.' },
      { id: 'equity-method-accounting', title: 'Equity Method Accounting', description: 'Learn how investments in associates are accounted for under the equity method.' },
      { id: 'stockholders-equity', title: 'Stockholders\' Equity', description: 'Explore components of equity including common stock, retained earnings, and treasury stock.' },
      { id: 'impact-of-transactions', title: 'The Impact of Transactions on Financial Statements', description: 'Analyze how various transactions affect the three financial statements.' },
      { id: 'net-operating-losses', title: 'Net Operating Losses (NOLs) and Tax Considerations', description: 'Understand NOLs, their valuation, and tax implications.' },
      { id: 'advanced-accounting-topics', title: 'Advanced Accounting Topics', description: 'Explore complex accounting issues frequently tested in investment banking interviews.' }
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
