import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/little-lemon-white-logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className='row'>
          <div className='col-sm-12 col-md-3 footer-section footer-logo'>
            <img src={logo} alt="Little Lemon Logo" />
          </div>
          <div className='col-sm-12 col-md-3 footer-section footer-nav '>
            <h4>Navigation</h4>
            <ul>
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reservations">Reservations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-3 footer-section footer-contact">
            <h4>Contact Us</h4>
            <p>123 Lemon Street, Chicago, IL</p>
            <p>(123) 456-7890</p>
            <p><a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a></p>
          </div>
          <div className="col-sm-12 col-md-3 footer-section footer-social">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="https://www.facebook.com/facebook/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>

      </div>
      <hr className="footer-divider" />
      <div className="container footer-bottom">
        <p>&copy; {currentYear} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;