import React from 'react';
import Breadcrumb from './Breadcrumb';
import Sidebar from './Sidebar';

const SubModuleTemplate = ({ moduleData }) => {
  if (!moduleData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: moduleData.bucket, path: `/${moduleData.bucketSlug}` },
          { label: moduleData.title, path: '#' }
        ]} 
      />
      
      <div className="row">
        <div className="col-md-3 d-none d-md-block">
          <Sidebar 
            title={moduleData.bucket}
            currentModule={moduleData.title}
            bucketSlug={moduleData.bucketSlug}
          />
        </div>
        
        <div className="col-md-9">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h1 className="card-title">{moduleData.title}</h1>
              <p className="lead">{moduleData.overview || "Learn about this important investment banking concept."}</p>
            </div>
          </div>
          
          <div className="content-section">
            {moduleData.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubModuleTemplate;
