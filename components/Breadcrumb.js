import React from 'react';

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb bg-light p-3 rounded shadow-sm">
        <li className="breadcrumb-item">
          <a href="/" className="text-decoration-none">Home</a>
        </li>
        {items.map((item, index) => (
          <li 
            key={index} 
            className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}
            aria-current={index === items.length - 1 ? 'page' : undefined}
          >
            {index === items.length - 1 ? (
              item.label
            ) : (
              <a href={item.href} className="text-decoration-none">{item.label}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
