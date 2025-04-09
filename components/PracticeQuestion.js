import React from 'react';

const PracticeQuestion = ({ question, difficulty = 'medium' }) => {
  const [showSolution, setShowSolution] = React.useState(false);
  
  // Map difficulty to color
  const difficultyColor = {
    easy: 'success',
    medium: 'warning',
    hard: 'danger'
  };
  
  const color = difficultyColor[difficulty] || 'primary';
  
  return (
    <div className="card border-0 shadow-sm mb-4" data-testid="practice-question">
      <div className="card-header bg-light d-flex justify-content-between align-items-center py-3">
        <h5 className="card-title mb-0">Practice Question</h5>
        <span className={`badge bg-${color}`}>
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </span>
      </div>
      
      <div className="card-body p-4">
        <p className="lead mb-4">{question.question}</p>
        
        {question.hint && (
          <div className="alert alert-info mb-4">
            <h6 className="alert-heading">Hint:</h6>
            <p className="mb-0">{question.hint}</p>
          </div>
        )}
        
        <button 
          className="btn btn-primary"
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? 'Hide Solution' : 'Show Solution'}
        </button>
        
        {showSolution && (
          <div className="mt-4 solution-container">
            <h5 className="border-bottom pb-2 mb-3">Solution</h5>
            <div className="solution-content">
              {question.solution}
            </div>
            
            {question.explanation && (
              <div className="mt-4">
                <h6 className="border-bottom pb-2 mb-3">Explanation</h6>
                <div className="explanation-content">
                  {question.explanation}
                </div>
              </div>
            )}
            
            {question.keyTakeaways && (
              <div className="mt-4">
                <h6 className="border-bottom pb-2 mb-3">Key Takeaways</h6>
                <ul className="key-takeaways">
                  {question.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="mb-2">{takeaway}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {question.relatedConcepts && (
              <div className="mt-4">
                <h6 className="border-bottom pb-2 mb-3">Related Concepts</h6>
                <ul className="related-concepts">
                  {question.relatedConcepts.map((concept, index) => (
                    <li key={index} className="mb-2">
                      <a href={concept.link} className="text-decoration-none">
                        {concept.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeQuestion;
