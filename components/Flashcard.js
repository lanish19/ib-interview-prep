import React, { useState } from 'react';

const Flashcard = ({ cards, onComplete }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState([]);
  const [reviewLater, setReviewLater] = useState([]);
  const [completed, setCompleted] = useState(false);

  if (!cards || cards.length === 0) {
    return (
      <div className="alert alert-warning">
        No flashcards available for this topic.
      </div>
    );
  }

  const currentCard = cards[currentCardIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKnown = () => {
    const updatedKnown = [...knownCards, currentCardIndex];
    setKnownCards(updatedKnown);
    moveToNextCard();
  };

  const handleReviewLater = () => {
    const updatedReview = [...reviewLater, currentCardIndex];
    setReviewLater(updatedReview);
    moveToNextCard();
  };

  const moveToNextCard = () => {
    setIsFlipped(false);
    
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setCompleted(true);
      if (onComplete) {
        onComplete({
          totalCards: cards.length,
          knownCards: knownCards.length,
          reviewCards: reviewLater.length
        });
      }
    }
  };

  const resetFlashcards = () => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setKnownCards([]);
    setReviewLater([]);
    setCompleted(false);
  };

  const reviewFlashcards = () => {
    if (reviewLater.length > 0) {
      setCurrentCardIndex(reviewLater[0]);
      setReviewLater(reviewLater.slice(1));
      setIsFlipped(false);
      setCompleted(false);
    }
  };

  if (completed) {
    return (
      <div className="card border-0 shadow-sm" data-testid="flashcard">
        <div className="card-body p-4">
          <h4 className="card-title mb-4">Flashcard Session Complete!</h4>
          
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card bg-light h-100">
                <div className="card-body text-center p-4">
                  <h5 className="card-title">{cards.length}</h5>
                  <p className="card-text text-muted">Total Cards</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card bg-success bg-opacity-10 h-100">
                <div className="card-body text-center p-4">
                  <h5 className="card-title">{knownCards.length}</h5>
                  <p className="card-text text-success">Known</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card bg-warning bg-opacity-10 h-100">
                <div className="card-body text-center p-4">
                  <h5 className="card-title">{reviewLater.length}</h5>
                  <p className="card-text text-warning">To Review</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="d-flex justify-content-between">
            <button 
              className="btn btn-primary" 
              onClick={resetFlashcards}
            >
              Start Over
            </button>
            
            <button 
              className="btn btn-warning"
              onClick={reviewFlashcards}
              disabled={reviewLater.length === 0}
            >
              Review Marked Cards ({reviewLater.length})
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flashcard-container" data-testid="flashcard">
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-header bg-light d-flex justify-content-between align-items-center py-3">
          <span>Card {currentCardIndex + 1} of {cards.length}</span>
          <span className="badge bg-primary">{currentCard.category || 'General'}</span>
        </div>
        
        <div 
          className={`card-body p-4 flashcard ${isFlipped ? 'flipped' : ''}`}
          onClick={handleFlip}
          style={{ cursor: 'pointer', minHeight: '200px' }}
        >
          <div className="flashcard-inner">
            <div className="flashcard-front d-flex flex-column justify-content-center align-items-center h-100">
              <h4 className="text-center mb-4">{currentCard.question}</h4>
              <p className="text-muted small">Click to reveal answer</p>
            </div>
            
            <div className="flashcard-back d-flex flex-column justify-content-center h-100">
              <h5 className="mb-3">Answer:</h5>
              <p className="mb-4">{currentCard.answer}</p>
              
              {currentCard.explanation && (
                <div className="mt-3">
                  <h6>Explanation:</h6>
                  <p className="text-muted">{currentCard.explanation}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="card-footer bg-white border-top-0 p-3">
          <div className="d-flex justify-content-between">
            <button 
              className="btn btn-success"
              onClick={handleKnown}
              disabled={!isFlipped}
            >
              <i className="bi bi-check-circle me-2"></i> I Know This
            </button>
            
            <button 
              className="btn btn-warning"
              onClick={handleReviewLater}
              disabled={!isFlipped}
            >
              <i className="bi bi-arrow-repeat me-2"></i> Review Later
            </button>
          </div>
        </div>
      </div>
      
      <div className="progress mb-4" style={{ height: '6px' }}>
        <div 
          className="progress-bar bg-primary" 
          role="progressbar" 
          style={{ width: `${((currentCardIndex + 1) / cards.length) * 100}%` }} 
          aria-valuenow={((currentCardIndex + 1) / cards.length) * 100} 
          aria-valuemin="0" 
          aria-valuemax="100"
        />
      </div>
      
      <div className="d-flex justify-content-between text-muted small">
        <div>
          <i className="bi bi-check-circle-fill text-success me-1"></i> Known: {knownCards.length}
        </div>
        <div>
          <i className="bi bi-arrow-repeat text-warning me-1"></i> To Review: {reviewLater.length}
        </div>
        <div>
          <i className="bi bi-card-list me-1"></i> Remaining: {cards.length - currentCardIndex - 1}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
