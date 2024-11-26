import React from 'react';
import logo from '../images/logo.png';
import facebook from '../svgs/facebook.svg';
import insta from '../svgs/instagram.svg';
import twitter from '../svgs/twitterx.svg';
import youtube from '../svgs/youtube.svg';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section company-info">
          <img src={logo} alt="logo" height="100px" className="company-logo" />
          <h2>Wikigame</h2>
        </div>
        <div className="footer-section social-media">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a href="#"><img src={insta} alt="Instagram" /></a>
            <a href="#"><img src={facebook} alt="Facebook" /></a>
            <a href="#"><img src={twitter} alt="Twitter" /></a>
            <a href="#"><img src={youtube} alt="YouTube" /></a>
          </div>
        </div>
        <div className="footer-section donate">
          <button>Faire un don</button>
        </div>
        <div className="footer-section newsletter">
          <h3>Pour la newsletter :</h3>
          <div className="newsletter-form">
            <input type="email" placeholder="Votre adresse e-mail" />
            <button type="submit">&gt;</button>
          </div>
          <div className="conditions">
            <input type="checkbox" id="conditions" />
            <label htmlFor="conditions">J'accepte les conditions</label>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
