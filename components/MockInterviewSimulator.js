// Mock Interview Simulator component for the Investment Banking interview preparation website
import React, { useState, useEffect, useRef } from 'react';

const MockInterviewSimulator = ({ interviewScenario, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [interviewCompleted, setInterviewCompleted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [interviewMode, setInterviewMode] = useState('preparation'); // preparation, interview, review
  
  const timerRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  
  const currentQuestion = interviewScenario.questions[currentQuestionIndex];
  
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        mediaRecorderRef.current.stop();
      }
    };
  }, []);
  
  const startInterview = () => {
    setInterviewMode('interview');
    setCurrentQuestionIndex(0);
    setUserAnswers({});
  };
  
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];
      
      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };
      
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        
        setUserAnswers(prev => ({
          ...prev,
          [currentQuestionIndex]: {
            ...prev[currentQuestionIndex],
            audioUrl,
            audioBlob
          }
        }));
        
        // Stop all tracks on the stream to turn off the microphone
        stream.getTracks().forEach(track => track.stop());
      };
      
      mediaRecorderRef.current.start();
      setIsRecording(true);
      
      // Start timer
      setRecordingTime(0);
      timerRef.current = setInterval(() => {
        setRecordingTime(prevTime => prevTime + 1);
      }, 1000);
      
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Unable to access microphone. Please check your browser permissions.');
    }
  };
  
  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };
  
  const saveTextAnswer = (text) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: {
        ...prev[currentQuestionIndex],
        textAnswer: text
      }
    }));
  };
  
  const moveToNextQuestion = () => {
    if (isRecording) {
      stopRecording();
    }
    
    if (currentQuestionIndex < interviewScenario.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowFeedback(false);
    } else {
      completeInterview();
    }
  };
  
  const moveToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowFeedback(false);
    }
  };
  
  const completeInterview = () => {
    setInterviewCompleted(true);
    setInterviewMode('review');
    
    if (onComplete) {
      onComplete({
        scenario: interviewScenario.title,
        answers: userAnswers,
        questionsCount: interviewScenario.questions.length
      });
    }
  };
  
  const viewFeedback = () => {
    setFeedback(currentQuestion.sampleAnswer);
    setShowFeedback(true);
  };
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const renderPreparationMode = () => {
    return (
      <div className="interview-preparation p-4">
        <h3>Mock Interview: {interviewScenario.title}</h3>
        
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Interview Scenario</h5>
            <p>{interviewScenario.description}</p>
            
            <div className="interview-details mt-4">
              <div className="row">
                <div className="col-md-4">
                  <h6>Interview Type</h6>
                  <p>{interviewScenario.type}</p>
                </div>
                <div className="col-md-4">
                  <h6>Difficulty</h6>
                  <p>{interviewScenario.difficulty}</p>
                </div>
                <div className="col-md-4">
                  <h6>Questions</h6>
                  <p>{interviewScenario.questions.length} questions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="interview-tips mb-4">
          <h5>Tips for this Interview</h5>
          <ul className="list-group">
            {interviewScenario.tips.map((tip, index) => (
              <li key={index} className="list-group-item">{tip}</li>
            ))}
          </ul>
        </div>
        
        <div className="text-center mt-4">
          <button 
            className="btn btn-primary btn-lg" 
            onClick={startInterview}
          >
            Start Mock Interview
          </button>
        </div>
      </div>
    );
  };
  
  const renderInterviewMode = () => {
    return (
      <div className="interview-session p-4">
        <div className="interview-header d-flex justify-content-between align-items-center mb-4">
          <h4>{interviewScenario.title}</h4>
          <div className="question-progress">
            Question {currentQuestionIndex + 1} of {interviewScenario.questions.length}
          </div>
        </div>
        
        <div className="interview-question mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Interviewer:</h5>
              <p className="lead">{currentQuestion.question}</p>
              
              {currentQuestion.followUp && (
                <div className="follow-up-question mt-3">
                  <p><em>If you hesitate, the interviewer adds:</em> "{currentQuestion.followUp}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="answer-section mb-4">
          {isRecording ? (
            <div className="recording-indicator text-center mb-3">
              <div className="recording-badge">
                <span className="recording-dot"></span> Recording
              </div>
              <div className="recording-time mt-2">
                {formatTime(recordingTime)}
              </div>
            </div>
          ) : (
            userAnswers[currentQuestionIndex]?.audioUrl && (
              <div className="recorded-answer mb-3">
                <audio 
                  src={userAnswers[currentQuestionIndex].audioUrl} 
                  controls 
                  className="w-100"
                ></audio>
              </div>
            )
          )}
          
          <div className="text-answer mb-3">
            <textarea
              className="form-control"
              rows="5"
              placeholder="Type your answer here (optional)"
              value={userAnswers[currentQuestionIndex]?.textAnswer || ''}
              onChange={(e) => saveTextAnswer(e.target.value)}
            ></textarea>
          </div>
          
          <div className="recording-controls d-flex justify-content-center">
            {!isRecording ? (
              <button 
                className="btn btn-danger me-2" 
                onClick={startRecording}
              >
                <i className="bi bi-mic-fill me-1"></i> Record Answer
              </button>
            ) : (
              <button 
                className="btn btn-secondary me-2" 
                onClick={stopRecording}
              >
                <i className="bi bi-stop-fill me-1"></i> Stop Recording
              </button>
            )}
            
            <button 
              className="btn btn-primary" 
              onClick={viewFeedback}
            >
              View Sample Answer
            </button>
          </div>
        </div>
        
        {showFeedback && (
          <div className="feedback-section mb-4">
            <div className="card border-success">
              <div className="card-header bg-success text-white">
                Sample Answer
              </div>
              <div className="card-body">
                <p>{feedback}</p>
                
                {currentQuestion.keyPoints && (
                  <div className="key-points mt-3">
                    <h6>Key Points to Cover:</h6>
                    <ul>
                      {currentQuestion.keyPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        <div className="navigation-controls d-flex justify-content-between">
          <button 
            className="btn btn-outline-secondary" 
            onClick={moveToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous Question
          </button>
          
          <button 
            className="btn btn-primary" 
            onClick={moveToNextQuestion}
          >
            {currentQuestionIndex < interviewScenario.questions.length - 1 ? 'Next Question' : 'Complete Interview'}
          </button>
        </div>
      </div>
    );
  };
  
  const renderReviewMode = () => {
    return (
      <div className="interview-review p-4">
        <h3>Interview Review: {interviewScenario.title}</h3>
        
        <div className="completion-message alert alert-success mb-4">
          <h5 className="alert-heading">Interview Completed!</h5>
          <p>You've completed this mock interview scenario. Review your answers below and compare them with the sample answers.</p>
        </div>
        
        <div className="questions-review">
          {interviewScenario.questions.map((question, index) => (
            <div key={index} className="question-review-card mb-4">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Question {index + 1}</h5>
                  <span className="badge bg-secondary">{question.type}</span>
                </div>
                <div className="card-body">
                  <h6>Interviewer Question:</h6>
                  <p>{question.question}</p>
                  
                  <div className="your-answer mt-4">
                    <h6>Your Answer:</h6>
                    {userAnswers[index]?.audioUrl ? (
                      <div className="audio-answer mb-3">
                        <audio 
                          src={userAnswers[index].audioUrl} 
                          controls 
                          className="w-100"
                        ></audio>
                      </div>
                    ) : (
                      <p className="text-muted">No audio recording</p>
                    )}
                    
                    {userAnswers[index]?.textAnswer ? (
                      <div className="text-answer">
                        <p>{userAnswers[index].textAnswer}</p>
                      </div>
                    ) : (
                      <p className="text-muted">No text answer provided</p>
                    )}
                  </div>
                  
                  <div className="sample-answer mt-4">
                    <h6>Sample Answer:</h6>
                    <div className="card bg-light">
                      <div className="card-body">
                        <p>{question.sampleAnswer}</p>
                        
                        {question.keyPoints && (
                          <div className="key-points mt-3">
                            <h6>Key Points:</h6>
                            <ul>
                              {question.keyPoints.map((point, pointIndex) => (
                                <li key={pointIndex}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <button 
            className="btn btn-primary" 
            onClick={() => setInterviewMode('preparation')}
          >
            Restart Interview
          </button>
        </div>
      </div>
    );
  };
  
  // Render the appropriate mode
  if (interviewMode === 'preparation') {
    return renderPreparationMode();
  } else if (interviewMode === 'interview') {
    return renderInterviewMode();
  } else {
    return renderReviewMode();
  }
};

export default MockInterviewSimulator;
