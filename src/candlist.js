import React, { useState, useEffect } from 'react';
import Navbar from "./nav";
import Profile from "./profile";

// Base styles for the component
const searchContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50vh',
  textAlign: 'center',
};



const searchBoxContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
};



const searchBoxStyle = {
  flex: '1',
  padding: '10px',
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginRight: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginRight: '10px',
};

const searchButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#525252',
  color: 'white',
  border: 'none',
};

const listAllButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#525252',
  color: 'white',
  border: 'none'
};
const skillsStyle = {
  backgroundColor: '#333',
  color: 'white',
  borderRadius: '5px',
  padding: '5px 10px',
  margin: '5px',
}
const profileCardStyle = {
  backgroundColor: '#f0f0f0',
  padding: '10px',
  maxWidth: '600px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginBottom: '10px',
};
function CandidateList() {
  const [searchText, setSearchText] = useState('');
  const [filteredCandidates, setFilteredCandidates] = useState('');
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const storedCandidates = localStorage.getItem('candidates');
    if (storedCandidates) {
      setCandidates(JSON.parse(storedCandidates))
    }
  }, []);
    

  const handleSearch = () => {
    let c = candidates.filter(cand=>cand.skills.some(skill=>skill === searchText));
    setCandidates(c);
    setFilteredCandidates(c.length);
   // Hint: Implement this
  };

  const handleListAll = () => {
    // Hint: Implement this
    const storedCandidates = localStorage.getItem('candidates');
    if (storedCandidates) {
      setCandidates(JSON.parse(storedCandidates))
    }
    setFilteredCandidates('');
  };

  return (
      <div>
      <Navbar candidateCount={candidates.length}/>
    <div style={{ ...searchContainerStyle, alignItems: 'center' }}>
      <div style={searchBoxContainerStyle}>
        <input
          type="text"
          placeholder="search skills"
          value={searchText}
          style={searchBoxStyle}
          onChange={e=>setSearchText(e.target.value)}
          data-testid="search-input"
          //Hint: Implement this
        />
        <button data-testid="search-btn" style={searchButtonStyle} onClick={handleSearch}>
          Search Button
        </button>
        <button data-testid='search-all' style={listAllButtonStyle} onClick={handleListAll}>
          List All
        </button>
      </div>
      {filteredCandidates.length !== 0 && <p data-testid="profiles-found-tag">{filteredCandidates} has been found</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
        {candidates.map(candidate=>(
            <div className="profile-card" data-testid="profile-card">
              <div key={candidate.id} style={{ ...profileCardStyle, textAlign: 'left', marginRight: '10px' }}>
                <h2 style={{ marginBottom: '10px' }}>Role: {candidate.role}</h2>
                <p>Name: {candidate.name}</p>
                <p>Email: {candidate.email}</p>
                <div>
                  <p style={{ fontWeight: 'bold' }}>Skills</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {candidate.skills.map((skill,index)=><div
                            key={index}
                            style={skillsStyle}
                        >
                          {skill}
                        </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
      </div>
  )
}

export default CandidateList;
