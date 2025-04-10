import React from 'react';
import Link from 'next/link';

const Sidebar = ({ title, currentModule, bucketSlug }) => {
  // Default values to prevent undefined errors
  const safeTitle = title || "Knowledge Area";
  const safeBucketSlug = bucketSlug || "";
  
  // Define modules based on bucket slug to ensure we always have a valid array
  const getModules = () => {
    switch(safeBucketSlug) {
      case 'accounting':
        return [
          { id: 'income-statement', title: 'Income Statement' },
          { id: 'balance-sheet', title: 'Balance Sheet' },
          { id: 'cash-flow-statement', title: 'Cash Flow Statement' },
          { id: 'linking-the-three-statements', title: 'Linking the Three Statements' },
          { id: 'financial-ratios', title: 'Financial Ratios' },
          { id: 'accounting-principles', title: 'Accounting Principles' },
          { id: 'revenue-recognition', title: 'Revenue Recognition' },
          { id: 'financial-statement-analysis', title: 'Financial Statement Analysis' },
          { id: 'working-capital', title: 'Working Capital' },
          { id: 'understanding-depreciation-and-amortization', title: 'Understanding Depreciation and Amortization' },
          { id: 'inventory-accounting', title: 'Inventory Accounting (LIFO, FIFO)' },
          { id: 'capitalization-vs-expensing', title: 'Capitalization vs. Expensing' },
          { id: 'goodwill-and-intangible-assets', title: 'Goodwill and Intangible Assets' },
          { id: 'deferred-taxes', title: 'Deferred Taxes' },
          { id: 'lease-accounting', title: 'Lease Accounting' },
          { id: 'equity-method-accounting', title: 'Equity Method Accounting' },
          { id: 'stockholders-equity', title: 'Stockholders\' Equity' },
          { id: 'impact-of-transactions', title: 'The Impact of Transactions on Financial Statements' },
          { id: 'net-operating-losses', title: 'Net Operating Losses (NOLs) and Tax Considerations' },
          { id: 'advanced-accounting-topics', title: 'Advanced Accounting Topics' }
        ];
      case 'valuation-principles':
        return [
          { id: 'valuation-fundamentals', title: 'Valuation Fundamentals' },
          { id: 'time-value-of-money', title: 'Time Value of Money' },
          { id: 'cost-of-capital', title: 'Cost of Capital' },
          { id: 'terminal-value', title: 'Terminal Value' },
          { id: 'valuation-multiples', title: 'Valuation Multiples' },
          { id: 'enterprise-vs-equity-value', title: 'Enterprise vs. Equity Value' },
          { id: 'sensitivity-analysis', title: 'Sensitivity Analysis' },
          { id: 'valuation-best-practices', title: 'Valuation Best Practices' }
        ];
      case 'intrinsic-valuation':
        return [
          { id: 'dcf-fundamentals', title: 'DCF Fundamentals' },
          { id: 'forecasting-cash-flows', title: 'Forecasting Cash Flows' },
          { id: 'wacc-calculation', title: 'WACC Calculation' },
          { id: 'terminal-value-approaches', title: 'Terminal Value Approaches' },
          { id: 'dcf-variations', title: 'DCF Variations' },
          { id: 'sensitivity-scenario-analysis', title: 'Sensitivity & Scenario Analysis' },
          { id: 'advanced-dcf-topics', title: 'Advanced DCF Topics' },
          { id: 'dcf-case-studies', title: 'DCF Case Studies' }
        ];
      case 'relative-valuation':
        return [
          { id: 'comparable-companies', title: 'Comparable Companies Analysis' },
          { id: 'precedent-transactions', title: 'Precedent Transactions Analysis' },
          { id: 'selecting-appropriate-comps', title: 'Selecting Appropriate Comps' },
          { id: 'valuation-multiples-analysis', title: 'Valuation Multiples Analysis' },
          { id: 'adjusting-for-differences', title: 'Adjusting for Differences' },
          { id: 'football-field-analysis', title: 'Football Field Analysis' },
          { id: 'industry-specific-multiples', title: 'Industry-Specific Multiples' },
          { id: 'comps-case-studies', title: 'Comps Case Studies' }
        ];
      case 'mergers-acquisitions':
        return [
          { id: 'ma-fundamentals', title: 'M&A Fundamentals' },
          { id: 'deal-structures', title: 'Deal Structures' },
          { id: 'valuation-considerations', title: 'Valuation Considerations' },
          { id: 'accretion-dilution-analysis', title: 'Accretion/Dilution Analysis' },
          { id: 'synergy-analysis', title: 'Synergy Analysis' },
          { id: 'transaction-process', title: 'Transaction Process' },
          { id: 'regulatory-considerations', title: 'Regulatory Considerations' },
          { id: 'ma-case-studies', title: 'M&A Case Studies' }
        ];
      case 'leveraged-buyouts':
        return [
          { id: 'lbo-fundamentals', title: 'LBO Fundamentals' },
          { id: 'lbo-model-structure', title: 'LBO Model Structure' },
          { id: 'debt-structures', title: 'Debt Structures' },
          { id: 'returns-analysis', title: 'Returns Analysis' },
          { id: 'exit-strategies', title: 'Exit Strategies' },
          { id: 'lbo-candidates', title: 'LBO Candidates' },
          { id: 'sponsor-considerations', title: 'Sponsor Considerations' },
          { id: 'lbo-case-studies', title: 'LBO Case Studies' }
        ];
      case 'market-dynamics':
        return [
          { id: 'macroeconomic-indicators', title: 'Macroeconomic Indicators' },
          { id: 'capital-markets-overview', title: 'Capital Markets Overview' },
          { id: 'equity-markets', title: 'Equity Markets' },
          { id: 'debt-markets', title: 'Debt Markets' },
          { id: 'industry-analysis', title: 'Industry Analysis' },
          { id: 'market-cycles', title: 'Market Cycles' },
          { id: 'global-market-considerations', title: 'Global Market Considerations' },
          { id: 'current-market-trends', title: 'Current Market Trends' }
        ];
      case 'behavioral-questions':
        return [
          { id: 'tell-me-about-yourself', title: 'Tell Me About Yourself' },
          { id: 'why-investment-banking', title: 'Why Investment Banking' },
          { id: 'why-our-firm', title: 'Why Our Firm' },
          { id: 'strengths-and-weaknesses', title: 'Strengths and Weaknesses' },
          { id: 'leadership-examples', title: 'Leadership Examples' },
          { id: 'teamwork-scenarios', title: 'Teamwork Scenarios' },
          { id: 'handling-challenges', title: 'Handling Challenges' },
          { id: 'career-goals', title: 'Career Goals' }
        ];
      default:
        return []; // Return empty array as fallback
    }
  };

  const modules = getModules();

  // Function to check if a module page exists
  const moduleExists = (bucketId, moduleId) => {
    // For Buckets 1-6, we know which modules are implemented
    if (bucketId === 'accounting' && (
      moduleId === 'income-statement' ||
      moduleId === 'balance-sheet' ||
      moduleId === 'cash-flow-statement' ||
      moduleId === 'linking-the-three-statements' ||
      moduleId === 'financial-ratios' ||
      moduleId === 'accounting-principles' ||
      moduleId === 'revenue-recognition' ||
      moduleId === 'financial-statement-analysis' ||
      moduleId === 'working-capital' ||
      moduleId === 'understanding-depreciation-and-amortization' ||
      moduleId === 'inventory-accounting' ||
      moduleId === 'capitalization-vs-expensing' ||
      moduleId === 'goodwill-and-intangible-assets' ||
      moduleId === 'deferred-taxes' ||
      moduleId === 'lease-accounting' ||
      moduleId === 'equity-method-accounting' ||
      moduleId === 'stockholders-equity' ||
      moduleId === 'impact-of-transactions' ||
      moduleId === 'net-operating-losses' ||
      moduleId === 'advanced-accounting-topics'
    )) {
      return true;
    } else if (bucketId === 'valuation-principles' && moduleId === 'valuation-fundamentals') {
      return true;
    } else if (bucketId === 'intrinsic-valuation' && moduleId === 'dcf-fundamentals') {
      return true;
    } else if (bucketId === 'relative-valuation' && moduleId === 'comparable-companies') {
      return true;
    } else if (bucketId === 'mergers-acquisitions' && moduleId === 'ma-fundamentals') {
      return true;
    } else if (bucketId === 'leveraged-buyouts' && moduleId === 'lbo-fundamentals') {
      return true;
    } else if (bucketId === 'market-dynamics' && moduleId === 'macroeconomic-indicators') {
      return true;
    } else if (bucketId === 'behavioral-questions' && moduleId === 'tell-me-about-yourself') {
      return true;
    }
    
    return false;
  };

  return (
    <div className="sidebar mb-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">{safeTitle}</h5>
        </div>
        <div className="list-group list-group-flush">
          <Link href={`/${safeBucketSlug}`} className="list-group-item list-group-item-action">
            Overview
          </Link>
          {modules.map((module) => {
            const isImplemented = moduleExists(safeBucketSlug, module.id);
            
            return isImplemented ? (
              <Link 
                key={module.id} 
                href={`/${safeBucketSlug}/${module.id}`} 
                className={`list-group-item list-group-item-action ${module.title === currentModule ? 'active' : ''}`}
              >
                {module.title}
              </Link>
            ) : (
              <span 
                key={module.id} 
                className="list-group-item list-group-item-action disabled"
                title="Coming soon"
              >
                {module.title} <small className="text-muted">(Coming Soon)</small>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
