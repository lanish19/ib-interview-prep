import React from 'react';
import Link from 'next/link';

const SubModuleCard = ({ module }) => {
  // Add default values to prevent undefined errors
  const {
    id = '',
    title = '',
    description = '',
    difficulty = 'medium',
    progress = 0,
    estimatedTime = 30
  } = module || {};

  // Map difficulty to color
  const difficultyColor = {
    easy: 'success',
    medium: 'warning',
    hard: 'danger'
  };

  const color = difficultyColor[difficulty] || 'primary';

  return (
    <div className="card h-100 border-0 shadow-sm hover-shadow">
      <div className="card-body p-4">
        <div className={`badge bg-${color} mb-2`}>
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </div>
        <h3 className="card-title h5 mb-3">{title}</h3>
        <p className="card-text text-muted mb-4">
          {description}
        </p>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <div className="small text-muted">
            <i className="bi bi-clock me-1"></i> {estimatedTime} min
          </div>
          <div className="progress" style={{ height: '5px', width: '60%' }}>
            <div 
              className="progress-bar bg-primary" 
              role="progressbar" 
              style={{ width: `${progress}%` }} 
              aria-valuenow={progress} 
              aria-valuemin="0" 
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubModuleCard;
