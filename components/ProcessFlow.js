import React from 'react';

// Component for displaying a process flow with consistent styling
const ProcessFlow = ({ title, steps, description }) => {
  return (
    <div className="card border-0 shadow-sm mb-4" data-testid="process-flow">
      <div className="card-header d-flex align-items-center py-3 bg-success bg-opacity-10 border-bottom border-success">
        <i className="bi bi-diagram-3-fill text-success me-2"></i>
        <h5 className="card-title mb-0">{title}</h5>
      </div>
      <div className="card-body p-4">
        {description && (
          <p className="mb-4">{description}</p>
        )}
        
        <div className="process-flow-container">
          {steps.map((step, index) => (
            <div key={index} className="process-step mb-3">
              <div className="d-flex">
                <div className="process-step-number">
                  <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="process-step-connector bg-success" style={{ width: '2px', height: '30px', margin: '5px auto' }}></div>
                  )}
                </div>
                <div className="process-step-content ms-3 bg-light p-3 rounded flex-grow-1">
                  <h6 className="mb-2">{step.title}</h6>
                  <p className="mb-0">{step.description}</p>
                  {step.details && (
                    <div className="mt-2 small text-muted">
                      {step.details}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;
