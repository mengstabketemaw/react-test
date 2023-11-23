import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Navbar from "./nav";
const homeStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '30vh',
  textAlign: 'center'
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '500px',
  margin: '20px'
};

const buttonStyle = {
  textDecoration: 'none',
  color: '#fff',
  backgroundColor: '#525252',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginRight: '10px'
};

function Home() {
  const nav = useNavigate();
  return (<div>
          <Navbar/>
          <div data-testid='home-component' style={homeStyle}>
            <div style={buttonContainerStyle}>
               {/* Hint: Implement this */}
                <button onClick={()=>nav("/candidate/registration")} data-testid="register-button" style={buttonStyle}>Register Candidate</button>
                <button onClick={()=>nav("/candidate/list")} data-testid="list-button" style={buttonStyle}>List Candidates</button>
            </div>
          </div>
      </div>
  );
}

export default Home;
