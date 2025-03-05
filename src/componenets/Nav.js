import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import logo from '../images/little-lemon-logo.png';

function Nav() {
  const location = useLocation();
  const isReservationsPage = location.pathname === '/reservations';
  const isHomePage = location.pathname === '/';
  const [navbarSolid, setNavbarSolid] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);


  useEffect(() => {
    const handleScroll = () => {
      setNavbarSolid(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    if (isHomePage) {
      setNavbarSolid(false); // Ensure transparency when on the homepage
      window.addEventListener('scroll', handleScroll);
    } else {
      setNavbarSolid(true); // Always solid on other pages
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isHomePage]);


  return (
    <header>
      <nav id="navbar" className={`navbar navbar-expand-lg ${
          !isHomePage || isMobile ? 'navbar-dark bg-dark' : navbarSolid ? 'navbar-solid' : 'home-page navbar-transparent'
        }`} >
        {/* <nav id="navbar" className={`navbar navbar-expand-lg ${isHomePage ? 'home-page navbar-transparent' : navbarSolid ? 'navbar-solid' : 'navbar-transparent'}`}> */}
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Little Lemon Logo" width="200" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/menu' ? 'active' : ''}`} to="/menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/reservations' ? 'active' : ''}`} to="/reservations">Reservations</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`} to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav;