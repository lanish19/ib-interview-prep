import React from 'react';

// Component for displaying a chart or diagram with consistent styling
const ChartDisplay = ({ title, chartType, imageUrl, description, legend }) => {
  return (
    <div className="card border-0 shadow-sm mb-4" data-testid="chart-display">
      <div className="card-header d-flex align-items-center py-3 bg-warning bg-opacity-10 border-bottom border-warning">
        <i className={`bi bi-${chartType === 'pie' ? 'pie-chart-fill' : 'bar-chart-fill'} text-warning me-2`}></i>
        <h5 className="card-title mb-0">{title}</h5>
      </div>
      <div className="card-body p-4">
        {description && (
          <p className="mb-4">{description}</p>
        )}
        
        <div className="chart-container text-center mb-3">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={title} 
              className="img-fluid rounded border" 
              style={{ maxHeight: '400px' }}
            />
          ) : (
            <div className="bg-light p-5 rounded border d-flex align-items-center justify-content-center">
              <p className="text-muted mb-0">Chart visualization will appear here</p>
            </div>
          )}
        </div>
        
        {legend && legend.length > 0 && (
          <div className="legend-container">
            <h6 className="border-bottom pb-2 mb-3">Legend:</h6>
            <div className="row">
              {legend.map((item, index) => (
                <div key={index} className="col-md-6 mb-2">
                  <div className="d-flex align-items-center">
                    <div 
                      className="legend-color me-2" 
                      style={{ 
                        width: '20px', 
                        height: '20px', 
                        backgroundColor: item.color,
                        borderRadius: '3px'
                      }}
                    ></div>
                    <div className="legend-label">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChartDisplay;
