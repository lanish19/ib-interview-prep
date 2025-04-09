import React from 'react';

// Component for displaying a visual aid with consistent styling
const VisualAid = ({ title, children, type = 'info' }) => {
  // Map type to color scheme
  const typeStyles = {
    info: {
      bgColor: 'bg-primary bg-opacity-10',
      borderColor: 'border-primary',
      iconClass: 'bi-info-circle-fill text-primary'
    },
    concept: {
      bgColor: 'bg-success bg-opacity-10',
      borderColor: 'border-success',
      iconClass: 'bi-lightbulb-fill text-success'
    },
    example: {
      bgColor: 'bg-warning bg-opacity-10',
      borderColor: 'border-warning',
      iconClass: 'bi-code-square text-warning'
    },
    formula: {
      bgColor: 'bg-info bg-opacity-10',
      borderColor: 'border-info',
      iconClass: 'bi-calculator-fill text-info'
    },
    note: {
      bgColor: 'bg-secondary bg-opacity-10',
      borderColor: 'border-secondary',
      iconClass: 'bi-pencil-fill text-secondary'
    },
    warning: {
      bgColor: 'bg-danger bg-opacity-10',
      borderColor: 'border-danger',
      iconClass: 'bi-exclamation-triangle-fill text-danger'
    }
  };

  const { bgColor, borderColor, iconClass } = typeStyles[type] || typeStyles.info;

  return (
    <div className={`card border-0 shadow-sm mb-4 ${bgColor}`} data-testid="visual-aid">
      <div className={`card-header d-flex align-items-center py-3 ${bgColor} border-bottom ${borderColor}`}>
        <i className={`bi ${iconClass} me-2`}></i>
        <h5 className="card-title mb-0">{title}</h5>
      </div>
      <div className="card-body p-4">
        {children}
      </div>
    </div>
  );
};

export default VisualAid;
