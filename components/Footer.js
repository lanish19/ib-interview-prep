import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="mb-3">Investment Banking Interview Prep</h5>
            <p className="mb-3">Your comprehensive resource for mastering investment banking interviews with in-depth content across eight core knowledge areas.</p>
            <p>&copy; {new Date().getFullYear()} Investment Banking Interview Prep. All rights reserved.</p>
          </div>
          
          <div className="col-md-2">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="/" className="text-light text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link href="/practice" className="text-light text-decoration-none">Practice Questions</Link></li>
              <li className="mb-2"><Link href="/about" className="text-light text-decoration-none">About</Link></li>
            </ul>
          </div>
          
          <div className="col-md-3">
            <h5 className="mb-3">Knowledge Buckets</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="/accounting" className="text-light text-decoration-none">Accounting</Link></li>
              <li className="mb-2"><Link href="/valuation-principles" className="text-light text-decoration-none">Valuation Principles</Link></li>
              <li className="mb-2"><Link href="/intrinsic-valuation" className="text-light text-decoration-none">Intrinsic Valuation (DCF)</Link></li>
              <li className="mb-2"><Link href="/relative-valuation" className="text-light text-decoration-none">Relative Valuation (Comps)</Link></li>
            </ul>
          </div>
          
          <div className="col-md-3">
            <h5 className="mb-3">More Topics</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="/mergers-acquisitions" className="text-light text-decoration-none">Mergers & Acquisitions</Link></li>
              <li className="mb-2"><Link href="/leveraged-buyouts" className="text-light text-decoration-none">Leveraged Buyouts</Link></li>
              <li className="mb-2"><Link href="/market-dynamics" className="text-light text-decoration-none">Market Dynamics</Link></li>
              <li className="mb-2"><Link href="/behavioral-questions" className="text-light text-decoration-none">Behavioral Questions</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
