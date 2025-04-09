import React from 'react';

const Quiz = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [showExplanation, setShowExplanation] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [completed, setCompleted] = React.useState(false);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
      if (onComplete) {
        onComplete({
          score,
          totalQuestions: questions.length
        });
      }
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setCompleted(false);
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="alert alert-warning">
        No questions available for this quiz.
      </div>
    );
  }

  if (completed) {
    return (
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <h4 className="card-title mb-4">Quiz Completed!</h4>
          <p className="mb-3">Your score: {score} out of {questions.length}</p>
          <div className="progress mb-4">
            <div 
              className="progress-bar bg-success" 
              role="progressbar" 
              style={{ width: `${(score / questions.length) * 100}%` }} 
              aria-valuenow={(score / questions.length) * 100} 
              aria-valuemin="0" 
              aria-valuemax="100"
            >
              {Math.round((score / questions.length) * 100)}%
            </div>
          </div>
          
          <div className="d-flex justify-content-between">
            <button 
              className="btn btn-primary" 
              onClick={handleRestartQuiz}
            >
              Restart Quiz
            </button>
            
            <button 
              className="btn btn-outline-primary"
              onClick={() => window.scrollTo(0, 0)}
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="card border-0 shadow-sm quiz-container" data-testid="quiz">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="card-title mb-0">Question {currentQuestion + 1} of {questions.length}</h4>
          <span className="badge bg-primary">Score: {score}</span>
        </div>
        
        <div className="progress mb-4" style={{ height: '6px' }}>
          <div 
            className="progress-bar bg-primary" 
            role="progressbar" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} 
            aria-valuenow={((currentQuestion + 1) / questions.length) * 100} 
            aria-valuemin="0" 
            aria-valuemax="100"
          />
        </div>
        
        <p className="lead mb-4">{question.question}</p>
        
        <div className="mb-4">
          {question.answers.map((answer, index) => (
            <div 
              key={index} 
              className={`card mb-2 quiz-answer ${
                selectedAnswer === index 
                  ? showExplanation 
                    ? index === question.correctAnswer 
                      ? 'border-success bg-success bg-opacity-10' 
                      : 'border-danger bg-danger bg-opacity-10' 
                    : 'border-primary' 
                  : 'border-light'
              } ${selectedAnswer === null ? 'hover-shadow' : ''}`}
              onClick={() => selectedAnswer === null && handleAnswerSelect(index)}
              style={{ cursor: selectedAnswer === null ? 'pointer' : 'default' }}
            >
              <div className="card-body py-3 px-4">
                <div className="d-flex align-items-center">
                  <div className={`answer-indicator me-3 ${
                    selectedAnswer === index 
                      ? showExplanation 
                        ? index === question.correctAnswer 
                          ? 'bg-success' 
                          : 'bg-danger' 
                        : 'bg-primary' 
                      : 'bg-light'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div>{answer}</div>
                  
                  {showExplanation && index === question.correctAnswer && (
                    <div className="ms-auto">
                      <i className="bi bi-check-circle-fill text-success fs-5"></i>
                    </div>
                  )}
                  
                  {showExplanation && selectedAnswer === index && index !== question.correctAnswer && (
                    <div className="ms-auto">
                      <i className="bi bi-x-circle-fill text-danger fs-5"></i>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {showExplanation && (
          <div className="alert alert-info mb-4">
            <h5 className="alert-heading">Explanation:</h5>
            <p className="mb-0">{question.explanation}</p>
          </div>
        )}
        
        <div className="d-flex justify-content-between">
          {!showExplanation ? (
            <button 
              className="btn btn-primary" 
              onClick={handleCheckAnswer}
              disabled={selectedAnswer === null}
            >
              Check Answer
            </button>
          ) : (
            <button 
              className="btn btn-primary" 
              onClick={handleNextQuestion}
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          )}
          
          <div className="text-muted small align-self-end">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
