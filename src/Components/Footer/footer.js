import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footerContent">
        <p>&copy; {new Date().getFullYear()} Sadham0708. All Rights Reserved.</p>
        <div className="socialLinks">
        <a href="https://github.com/sadham0708" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub">GitHub</a>
        <a href="https://www.linkedin.com/in/sadham0708/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:msadham0708@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
