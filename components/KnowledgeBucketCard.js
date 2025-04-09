import React from 'react';
import Link from 'next/link';

const KnowledgeBucketCard = ({ id, title, description, modules, icon = 'bi-book', color = 'primary' }) => {
  return (
    <div className="card h-100 border-0 shadow-sm hover-shadow">
      <div className="card-body p-4">
        <div className={`icon-circle bg-${color} text-white mb-3`}>
          <i className={`bi ${icon}`}></i>
        </div>
        <h3 className="card-title h5 mb-3">{title}</h3>
        <p className="card-text text-muted mb-4">
          {description}
        </p>
        
        <Link href={`/${id}`} className="btn btn-outline-primary btn-sm mb-3">
          View All Modules
        </Link>
        
        <div className="module-list">
          <h6 className="text-muted mb-2">Key Modules:</h6>
          <ul className="list-unstyled">
            {modules.slice(0, 3).map((module) => (
              <li key={module.id} className="mb-1">
                <Link 
                  href={`/${id}/${module.id}`}
                  className="text-decoration-none text-dark module-link"
                >
                  <i className="bi bi-arrow-right-circle me-2 text-primary"></i>
                  {module.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBucketCard;
