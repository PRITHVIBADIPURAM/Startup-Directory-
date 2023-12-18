// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import StartupCard from './components/StartupCard';
import Navbar from './components/Navbar'; // Import the Navbar component

const App = () => {
  const [startups, setStartups] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/data');
        const data = await response.json();
        setStartups(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredStartups = startups.filter((startup) => {
    const matchesIndustry = selectedIndustry
      ? startup.IndustryVertical === selectedIndustry
      : true;

    const matchesSearch = searchTerm
      ? startup.StartupName.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return matchesIndustry && matchesSearch;
  });

  const handleCardClick = (startup) => {
    setSelectedStartup(null);
  };

  const handleCloseButtonClick = () => {
    setSelectedStartup(null);
  };

  return (
    <div className="app-container">
      {/* Render Navbar component */}
      <Navbar
        selectedIndustry={selectedIndustry}
        setSearchTerm={setSearchTerm}
        setSelectedIndustry={setSelectedIndustry}
        setStartups={setStartups}
      />

      <div className="startup-cards-container">
        {filteredStartups.map((startup, index) => (
          <StartupCard
            key={index}
            startup={startup}
            onCardClick={handleCloseButtonClick}
            onClose={handleCloseButtonClick}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
