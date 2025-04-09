import React from 'react';
import Link from 'next/link';
import Sidebar from './Sidebar';
import { useRouter } from 'next/router';
// Removed fs import as it's not compatible with client-side code
// import fs from 'fs';
// import path from 'path';

const BucketTemplate = ({ bucket }) => {
  if (!bucket || !bucket.modules) {
    return <div>Loading...</div>;
  }

  // Function to check if a module page exists
  // This will be used client-side only
  const moduleExists = (bucketId, moduleId) => {
    // For Buckets 1-6, we know which modules are implemented
    if (bucketId === 'accounting' && (moduleId === 'income-statement' || moduleId === 'balance-sheet')) {
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
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 d-none d-md-block">
          <Sidebar 
            title={bucket.title || "Knowledge Bucket"}
            currentModule=""
            bucketSlug={bucket.id || ""}
          />
        </div>
        
        <div className="col-md-9">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h1 className="card-title">{bucket.title || "Knowledge Bucket"}</h1>
              <p className="lead">{bucket.description || "Explore this knowledge area for investment banking interviews."}</p>
            </div>
          </div>
          
          <h2 className="mb-4">Modules</h2>
          <div className="row">
            {bucket.modules.map((module, index) => {
              const moduleImplemented = moduleExists(bucket.id, module.id);
              
              return (
                <div className="col-md-6 mb-4" key={module.id || index}>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h3 className="h5 card-title">{module.title || "Module"}</h3>
                      <p className="card-text">{module.description || "Learn about this important investment banking concept."}</p>
                      
                      {moduleImplemented ? (
                        <Link href={`/${bucket.id}/${module.id}`} className="btn btn-primary">
                          Study Now
                        </Link>
                      ) : (
                        <button className="btn btn-secondary" disabled title="Coming soon">
                          Coming Soon
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BucketTemplate;
