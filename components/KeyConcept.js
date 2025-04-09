import React from 'react';

// Component for displaying a key concept with consistent styling
const KeyConcept = ({ title, concept, explanation, examples, importance }) => {
  return (
    <div className="card border-0 shadow-sm mb-4" data-testid="key-concept">
      <div className="card-header d-flex align-items-center py-3 bg-success bg-opacity-10 border-bottom border-success">
        <i className="bi bi-lightbulb-fill text-success me-2"></i>
        <h5 className="card-title mb-0">{title}</h5>
      </div>
      <div className="card-body p-4">
        <div className="concept-container bg-light p-3 rounded mb-3">
          <p className="h5 mb-0">{concept}</p>
        </div>
        
        {explanation && (
          <div className="explanation-container mb-3">
            <h6 className="border-bottom pb-2 mb-3">Explanation:</h6>
            <p>{explanation}</p>
          </div>
        )}
        
        {examples && examples.length > 0 && (
          <div className="examples-container mb-3">
            <h6 className="border-bottom pb-2 mb-3">Examples:</h6>
            <ul className="list-group list-group-flush">
              {examples.map((example, index) => (
                <li key={index} className="list-group-item bg-transparent px-0">
                  <div className="d-flex">
                    <div className="me-2">
                      <i className="bi bi-arrow-right-circle text-success"></i>
                    </div>
                    <div>{example}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {importance && (
          <div className="importance-container">
            <h6 className="border-bottom pb-2 mb-3">Why It Matters in Investment Banking:</h6>
            <p className="mb-0">{importance}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default KeyConcept;
