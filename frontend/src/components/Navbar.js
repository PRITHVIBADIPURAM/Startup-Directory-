// Navbar.js
import React from 'react';

const Navbar = ({ selectedIndustry, setSearchTerm, setSelectedIndustry, setStartups }) => {
  const handleFilterChange = (e) => {
    setSelectedIndustry(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <h1>Startup Explorer</h1>
        <p>{selectedIndustry ? `(${selectedIndustry})` : ''}</p>
      </div>
      <div className="navbar__right">
     
        <input
          type="text"
          placeholder="Search by company name"
          onChange={handleSearchChange}
        />
  
        <select
          className="filter-dropdown"
          onChange={handleFilterChange}
          value={selectedIndustry || ''}
        >
          <option value="">All Industries</option>
          <option value="Technology">Technology</option>
          <option value="eCommerce">eCommerce</option>
          <option value="Consumer Internet">Consumer Internet</option>
          <option value="Logistics">Logistics</option>
          <option value="Food & Beverage">Food & Beverage</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
