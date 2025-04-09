import React from 'react';

// Component for displaying a comparison table with consistent styling
const ComparisonTable = ({ title, headers, rows, description }) => {
  return (
    <div className="card border-0 shadow-sm mb-4" data-testid="comparison-table">
      <div className="card-header d-flex align-items-center py-3 bg-primary bg-opacity-10 border-bottom border-primary">
        <i className="bi bi-table text-primary me-2"></i>
        <h5 className="card-title mb-0">{title}</h5>
      </div>
      <div className="card-body p-4">
        {description && (
          <p className="mb-4">{description}</p>
        )}
        
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-light">
              <tr>
                {headers.map((header, index) => (
                  <th key={index} scope="col">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
