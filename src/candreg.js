import React, { useState, useEffect } from 'react';
import Navbar from "./nav";

// Base styles for the component
const alertMessage = {
  marginTop: '5px'
}

const highlight = {
  border: '2px solid red',
  backgroundColor: 'red'
}


const centerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50vh',
  textAlign: 'center',
};

const addSkillButtonStyle = {
  backgroundColor: '#525252',
  border: '1px solid #333',
  color: 'white',
  borderRadius: '5px',
  marginLeft: '10px',
  cursor: 'pointer',
};

const formBoxStyle = {
  border: '1px solid #ccc',
  padding: '20px',
  backgroundColor: '#f5f5f5',
};

const formGroupStyle = {
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
};

const sharpEdgeButtonStyle = {
  backgroundColor: '#525252',
  border: '1px solid #333',
  padding: '10px 20px',
  color: 'white',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
};

const skillTagStyle = {
  backgroundColor: '#333',
  color: 'white',
  borderRadius: '0',
  padding: '5px 10px',
  margin: '0 5px',
};

const buttonGroupStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
};

function CandidateRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    skill: '',
    skills: [],
  });

  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [highlightInput, setHighlight] = useState(false); 

  const handleAddSkill = () => {
    if(formData.skills.length >=5 )
      return;
    setFormData(prev=>({...prev, skills:[...prev.skills, prev.skill]}))
    setFormData(prev=>({...prev, skill:""}))
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(candidates.find(cand => cand.email === formData.email)){
      setRegistrationStatus("Email already exists");
      setHighlight(true);
    } else {
      setCandidates(prev=>[...prev, formData]);
      setHighlight(false);
      setRegistrationStatus("Candidate profile created");
      handleReset();
    }
  };
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      role: '',
      skill: '',
      skills: [],
    });
  };
  useEffect(() => {
      const storedCandidates = localStorage.getItem('candidates');
      if (storedCandidates) {
        // Hint: Implement this
        setCandidates(JSON.parse(storedCandidates));
      }
    }, []);
  useEffect(()=>{
    localStorage.setItem('candidates', JSON.stringify(candidates));
  },[candidates])
  const getHandler = () => e => {
      setFormData(prev=>({...prev, [e.target.name] : e.target.value}))
    }

  return (
      <div>
        <Navbar candidateCount={candidates.length}/>
        <div style={centerContainerStyle}>
          <div style={formBoxStyle}>
            <div data-testid='registration-component' style={formBoxStyle}>
              <form onSubmit={handleFormSubmit} data-testid="registration-from">
                <div className="form-group" style={formGroupStyle}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Name"
                    required
                    style={inputStyle}
                    pattern="[a-zA-Z0-9\s]+"
                    onChange={getHandler()}
                    data-testid='form-input-name'
                  />
                </div>
                <div className="form-group" style={formGroupStyle}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={getHandler()}
                    placeholder="Email"
                    data-testid='form-input-email'
                    required
                    style={{ ...inputStyle, ...(highlightInput ? highlight : {}) }}
                  />
                </div>
                <div className="form-group" style={formGroupStyle}>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={getHandler()}
                    placeholder="Role"
                    data-testid='form-input-role'
                    required
                    pattern="[a-zA-Z0-9\s]+"
                    style={inputStyle}
                  />
                </div>
                <div className="form-group" style={formGroupStyle}>
                  <input
                    data-testid="form-input-skill"
                    type="text"
                    name="skill"
                    value={formData.skill}
                    onChange={getHandler()}
                    placeholder="Skill"
                    style={inputStyle}
                  />
                  <button
                    type="button"
                    data-testid="add-btn"
                    onClick={handleAddSkill}
                    style={addSkillButtonStyle}
                    disabled={!formData.skill || formData.skills.length >= 5}
                  >
                    Add Skill
                  </button>
                </div>
                <div>
                  {formData.skills.map((skill, index) => (
                    <span data-testid='skill-tag' style={skillTagStyle} key={index}>
                      {skill}
                    </span>
                  ))}
                </div>
                <div style={buttonGroupStyle}>
                  <button
                    data-testid="submit-btn"
                    type="submit"
                    style={sharpEdgeButtonStyle}
                    disabled={formData.skills.length === 0 || !(formData.email.trim() && formData.role.trim() && formData.name.trim())}
                  >
                    Register
                  </button>
                  <button
                    data-testid="reset-btn"
                    type="button"
                    style={sharpEdgeButtonStyle}
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </div>
              </form>
              {registrationStatus && (
                // Hint: Implement this
                <p data-testid="alertMessage">{registrationStatus}</p>
              )}

            </div>
          </div>
        </div>
      </div>
  );
}

export default CandidateRegistration;
