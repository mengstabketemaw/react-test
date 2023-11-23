import React from 'react';
import {Link, Outlet, useLocation} from 'react-router-dom';

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  backgroundColor: '#525252',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginRight: '10px',
};

const centerHeadingStyle = {
  marginLeft: '625px',
  flex: '1', // Allow it to take up the remaining space
};

function Navbar({ candidateCount }) {
  const location = useLocation();
  const [currentPage, setCurrentPage] = React.useState(location.pathname);

  useLocation().pathname !== currentPage && setCurrentPage(location.pathname);

  return (
      <div>
          <div style={navbarStyle}>
            <div style={centerHeadingStyle}>
              <h1 className="header-title" data-testid='header-title'>Job Portal</h1>
            </div>
            <div>
              {currentPage !== "/" && <Link to="/" data-testid="nav-home-btn" style={linkStyle}>Home</Link>}
              {currentPage === '/candidate/registration' ? (
                <Link to="/candidate/list" style={linkStyle} data-testid="nav-list-btn ">
                  Candidate List {candidateCount}
                </Link>
              ) : currentPage !== "/" && (
                <Link to="/candidate/registration" style={linkStyle} data-testid="nav-registration-btn">
                  Candidate Registration
                </Link>
              )}
            </div>
          </div>
          <Outlet/>
      </div>
  );
}

export default Navbar;
