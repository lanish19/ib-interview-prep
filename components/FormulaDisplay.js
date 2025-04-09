import React from 'react';

// Component for displaying a financial formula with consistent styling
const FormulaDisplay = ({ title, formula, variables, example, notes }) => {
  return (
    <div className="card border-0 shadow-sm mb-4 bg-light" data-testid="formula-display">
      <div className="card-header d-flex align-items-center py-3 bg-info bg-opacity-10 border-bottom border-info">
        <i className="bi bi-calculator-fill text-info me-2"></i>
        <h5 className="card-title mb-0">{title}</h5>
      </div>
      <div className="card-body p-4">
        <div className="formula-container bg-white p-3 rounded border mb-3 text-center">
          <div className="formula-text h5">{formula}</div>
        </div>
        
        {variables && variables.length > 0 && (
          <div className="variables-container mb-3">
            <h6 className="border-bottom pb-2 mb-3">Where:</h6>
            <ul className="list-unstyled">
              {variables.map((variable, index) => (
                <li key={index} className="mb-2">
                  <strong>{variable.symbol}</strong> = {variable.description}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {example && (
          <div className="example-container mb-3">
            <h6 className="border-bottom pb-2 mb-3">Example:</h6>
            <div className="example-content bg-white p-3 rounded border">
              {example}
            </div>
          </div>
        )}
        
        {notes && (
          <div className="notes-container">
            <h6 className="border-bottom pb-2 mb-3">Notes:</h6>
            <div className="notes-content">
              {typeof notes === 'string' ? (
                <p>{notes}</p>
              ) : (
                <ul>
                  {notes.map((note, index) => (
                    <li key={index} className="mb-2">{note}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormulaDisplay;
