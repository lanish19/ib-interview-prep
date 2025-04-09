import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import Script from 'next/script';

const Layout = ({ children, title = 'Investment Banking Interview Prep', description = 'Comprehensive preparation platform for Investment Banking interviews' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" />
      </Head>
      
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        
        <main className="flex-grow-1">
          {children}
        </main>
        
        <Footer />
      </div>
      
      {/* Bootstrap JS */}
      <Script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default Layout;
