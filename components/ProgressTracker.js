// Progress Tracking component for the Investment Banking interview preparation website
import React, { useState, useEffect } from 'react';

const ProgressTracker = ({ userId, moduleData }) => {
  const [userProgress, setUserProgress] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // In a real implementation, this would fetch from an API
    // For now, we'll simulate loading progress data
    const loadProgressData = () => {
      setIsLoading(true);
      
      // Simulate API call delay
      setTimeout(() => {
        // This would normally come from a database
        const mockProgressData = generateMockProgressData(moduleData);
        setUserProgress(mockProgressData);
        setIsLoading(false);
      }, 800);
    };
    
    loadProgressData();
  }, [moduleData]);

  // Helper function to generate mock progress data
  const generateMockProgressData = (modules) => {
    const mockData = {
      overview: {
        completedModules: 0,
        totalModules: 0,
        completedQuizzes: 0,
        totalQuizzes: 0,
        completedFlashcards: 0,
        totalFlashcards: 0,
        mockInterviewsCompleted: 0,
        studyTimeMinutes: 0
      },
      buckets: {}
    };
    
    // Generate data for each knowledge bucket
    modules.forEach(bucket => {
      mockData.buckets[bucket.id] = {
        id: bucket.id,
        title: bucket.title,
        completedModules: 0,
        totalModules: bucket.modules.length,
        progress: 0,
        modules: {}
      };
      
      // Generate data for each module within the bucket
      bucket.modules.forEach(module => {
        // Randomly generate progress for demo purposes
        const completed = Math.random() > 0.7;
        const progress = completed ? 100 : Math.floor(Math.random() * 100);
        
        mockData.buckets[bucket.id].modules[module.id] = {
          id: module.id,
          title: module.title,
          completed,
          progress,
          quizCompleted: Math.random() > 0.6,
          flashcardsCompleted: Math.random() > 0.5,
          lastAccessed: new Date(Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000))
        };
        
        // Update bucket progress
        if (completed) {
          mockData.buckets[bucket.id].completedModules++;
        }
        mockData.buckets[bucket.id].progress += progress;
        
        // Update overview stats
        mockData.overview.totalModules++;
        if (completed) {
          mockData.overview.completedModules++;
        }
        mockData.overview.totalQuizzes++;
        if (mockData.buckets[bucket.id].modules[module.id].quizCompleted) {
          mockData.overview.completedQuizzes++;
        }
        mockData.overview.totalFlashcards++;
        if (mockData.buckets[bucket.id].modules[module.id].flashcardsCompleted) {
          mockData.overview.completedFlashcards++;
        }
      });
      
      // Calculate average progress for the bucket
      if (bucket.modules.length > 0) {
        mockData.buckets[bucket.id].progress = Math.floor(
          mockData.buckets[bucket.id].progress / bucket.modules.length
        );
      }
    });
    
    // Add mock interview data
    mockData.overview.mockInterviewsCompleted = Math.floor(Math.random() * 5);
    
    // Add mock study time
    mockData.overview.studyTimeMinutes = Math.floor(Math.random() * 1200);
    
    return mockData;
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    if (hours === 0) {
      return `${mins} minutes`;
    } else if (mins === 0) {
      return `${hours} hours`;
    } else {
      return `${hours} hours, ${mins} minutes`;
    }
  };

  const renderOverviewTab = () => {
    if (!userProgress) return null;
    
    const { overview } = userProgress;
    const overallProgress = overview.totalModules > 0 
      ? Math.floor((overview.completedModules / overview.totalModules) * 100)
      : 0;
    
    return (
      <div className="progress-overview">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Overall Progress</h5>
                <div className="progress-circle-container d-flex justify-content-center my-4">
                  <div className="progress-circle">
                    <div className="progress-circle-inner d-flex align-items-center justify-content-center">
                      <span className="display-4">{overallProgress}%</span>
                    </div>
                  </div>
                </div>
                <div className="progress-stats text-center">
                  <p>
                    <strong>{overview.completedModules}</strong> of <strong>{overview.totalModules}</strong> modules completed
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Study Statistics</h5>
                <div className="study-stats mt-3">
                  <div className="row">
                    <div className="col-6 mb-3">
                      <div className="stat-item text-center">
                        <div className="stat-value display-6">{overview.completedQuizzes}</div>
                        <div className="stat-label">Quizzes Completed</div>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="stat-item text-center">
                        <div className="stat-value display-6">{overview.completedFlashcards}</div>
                        <div className="stat-label">Flashcard Sets</div>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="stat-item text-center">
                        <div className="stat-value display-6">{overview.mockInterviewsCompleted}</div>
                        <div className="stat-label">Mock Interviews</div>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="stat-item text-center">
                        <div className="stat-value display-6">{formatTime(overview.studyTimeMinutes).split(',')[0]}</div>
                        <div className="stat-label">Study Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Knowledge Bucket Progress</h5>
                <div className="bucket-progress-list mt-3">
                  {Object.values(userProgress.buckets).map(bucket => (
                    <div key={bucket.id} className="bucket-progress-item mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <h6 className="mb-0">{bucket.title}</h6>
                        <span>{bucket.progress}%</span>
                      </div>
                      <div className="progress" style={{ height: '10px' }}>
                        <div 
                          className="progress-bar" 
                          role="progressbar" 
                          style={{ width: `${bucket.progress}%` }} 
                          aria-valuenow={bucket.progress} 
                          aria-valuemin="0" 
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="small text-muted mt-1">
                        {bucket.completedModules} of {bucket.totalModules} modules completed
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderBucketTab = (bucketId) => {
    if (!userProgress || !userProgress.buckets[bucketId]) return null;
    
    const bucket = userProgress.buckets[bucketId];
    
    return (
      <div className="bucket-details">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">{bucket.title}</h5>
            <div className="d-flex align-items-center mt-3">
              <div className="progress flex-grow-1 me-3" style={{ height: '15px' }}>
                <div 
                  className="progress-bar" 
                  role="progressbar" 
                  style={{ width: `${bucket.progress}%` }} 
                  aria-valuenow={bucket.progress} 
                  aria-valuemin="0" 
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress-percentage">
                <strong>{bucket.progress}%</strong>
              </div>
            </div>
            <div className="text-muted mt-2">
              {bucket.completedModules} of {bucket.totalModules} modules completed
            </div>
          </div>
        </div>
        
        <div className="module-list">
          <h5 className="mb-3">Modules</h5>
          
          <div className="list-group">
            {Object.values(bucket.modules).map(module => (
              <div key={module.id} className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between align-items-center">
                  <h6 className="mb-1">
                    {module.title}
                    {module.completed && (
                      <span className="badge bg-success ms-2">Completed</span>
                    )}
                  </h6>
                  <small>Last accessed: {formatDate(module.lastAccessed)}</small>
                </div>
                
                <div className="progress mt-2" style={{ height: '8px' }}>
                  <div 
                    className="progress-bar" 
                    role="progressbar" 
                    style={{ width: `${module.progress}%` }} 
                    aria-valuenow={module.progress} 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
                
                <div className="d-flex mt-2">
                  <div className="me-3">
                    <small className={`text-${module.quizCompleted ? 'success' : 'muted'}`}>
                      <i className={`bi bi-${module.quizCompleted ? 'check-circle-fill' : 'circle'} me-1`}></i>
                      Quiz
                    </small>
                  </div>
                  <div>
                    <small className={`text-${module.flashcardsCompleted ? 'success' : 'muted'}`}>
                      <i className={`bi bi-${module.flashcardsCompleted ? 'check-circle-fill' : 'circle'} me-1`}></i>
                      Flashcards
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="progress-tracker-loading text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading your progress data...</p>
      </div>
    );
  }

  return (
    <div className="progress-tracker">
      <div className="progress-tracker-header mb-4">
        <h3>Your Learning Progress</h3>
      </div>
      
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
        </li>
        
        {moduleData.map(bucket => (
          <li key={bucket.id} className="nav-item">
            <button 
              className={`nav-link ${activeTab === bucket.id ? 'active' : ''}`}
              onClick={() => setActiveTab(bucket.id)}
            >
              {bucket.title}
            </button>
          </li>
        ))}
      </ul>
      
      <div className="tab-content">
        {activeTab === 'overview' ? (
          renderOverviewTab()
        ) : (
          renderBucketTab(activeTab)
        )}
      </div>
    </div>
  );
};

export default ProgressTracker;
