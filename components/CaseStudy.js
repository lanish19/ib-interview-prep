import React from 'react';

// Component for displaying a case study with consistent styling
const CaseStudy = ({ title, scenario, questions, analysis, conclusion, takeaways }) => {
  return (
    <div className="card border-0 shadow-sm mb-4" data-testid="case-study">
      <div className="card-header d-flex align-items-center py-3 bg-info bg-opacity-10 border-bottom border-info">
        <i className="bi bi-journal-text text-info me-2"></i>
        <h5 className="card-title mb-0">{title}</h5>
      </div>
      <div className="card-body p-4">
        <div className="scenario-container mb-4">
          <h6 className="border-bottom pb-2 mb-3">Scenario:</h6>
          <p>{scenario}</p>
        </div>
        
        {questions && questions.length > 0 && (
          <div className="questions-container mb-4">
            <h6 className="border-bottom pb-2 mb-3">Questions to Consider:</h6>
            <ol className="ps-3">
              {questions.map((question, index) => (
                <li key={index} className="mb-2">{question}</li>
              ))}
            </ol>
          </div>
        )}
        
        {analysis && (
          <div className="analysis-container mb-4">
            <h6 className="border-bottom pb-2 mb-3">Analysis:</h6>
            <div className="bg-light p-3 rounded">
              {typeof analysis === 'string' ? (
                <p className="mb-0">{analysis}</p>
              ) : (
                analysis
              )}
            </div>
          </div>
        )}
        
        {conclusion && (
          <div className="conclusion-container mb-4">
            <h6 className="border-bottom pb-2 mb-3">Conclusion:</h6>
            <p>{conclusion}</p>
          </div>
        )}
        
        {takeaways && takeaways.length > 0 && (
          <div className="takeaways-container">
            <h6 className="border-bottom pb-2 mb-3">Key Takeaways:</h6>
            <ul className="list-group list-group-flush">
              {takeaways.map((takeaway, index) => (
                <li key={index} className="list-group-item bg-transparent px-0">
                  <div className="d-flex">
                    <div className="me-2">
                      <i className="bi bi-check-circle-fill text-success"></i>
                    </div>
                    <div>{takeaway}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudy;
