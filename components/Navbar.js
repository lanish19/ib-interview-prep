import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const knowledgeBuckets = [
    { id: 'accounting', title: 'Accounting' },
    { id: 'valuation-principles', title: 'Valuation Principles' },
    { id: 'intrinsic-valuation', title: 'Intrinsic Valuation (DCF)' },
    { id: 'relative-valuation', title: 'Relative Valuation (Comps)' },
    { id: 'mergers-acquisitions', title: 'Mergers & Acquisitions' },
    { id: 'leveraged-buyouts', title: 'Leveraged Buyouts (LBO)' },
    { id: 'market-dynamics', title: 'Market Dynamics' },
    { id: 'behavioral-questions', title: 'Behavioral & Fit Questions' }
  ];
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <i className="bi bi-bank me-2"></i>
          <span>IB Interview Prep</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-controls="navbarNav" 
          aria-expanded={isMenuOpen ? "true" : "false"} 
          aria-label="Toggle navigation"
          data-testid="mobile-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link href="/" className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="knowledgeDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Knowledge Buckets
              </a>
              <ul className="dropdown-menu" aria-labelledby="knowledgeDropdown">
                {knowledgeBuckets.map(bucket => (
                  <li key={bucket.id}>
                    <Link 
                      href={`/${bucket.id}`} 
                      className={`dropdown-item ${router.pathname === `/${bucket.id}` ? 'active' : ''}`}
                    >
                      {bucket.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            
            <li className="nav-item">
              <Link href="/practice" className={`nav-link ${router.pathname === '/practice' ? 'active' : ''}`}>
                Practice
              </Link>
            </li>
            
            <li className="nav-item">
              <Link href="/tools" className={`nav-link ${router.pathname === '/tools' ? 'active' : ''}`}>
                Tools
              </Link>
            </li>
            
            <li className="nav-item">
              <Link href="/progress" className={`nav-link ${router.pathname === '/progress' ? 'active' : ''}`}>
                My Progress
              </Link>
            </li>
          </ul>
          
          <div className="d-flex">
            <div className="input-group">
              <input 
                type="search" 
                className="form-control form-control-sm" 
                placeholder="Search..." 
                aria-label="Search"
              />
              <button className="btn btn-light btn-sm" type="button">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
