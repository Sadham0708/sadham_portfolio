// Navbar.js
import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import logo from '../../assets/icons8-infinity-48.png';
import contactImg from '../../assets/contact.png';
import menuIcon from '../../assets/menu.png';
import closeIcon from '../../assets/close.png';
import ContactModal from './contactModal'

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <div className={`desktopMenu ${showMenu ? 'showMenu' : ''}`}>
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="menuListItem"
            onClick={() => setShowMenu(false)}
          >
            Welcome
          </Link>
          <Link
            activeClass="active"
            to="whoIAm"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="menuListItem"
            onClick={() => setShowMenu(false)}
          >
            Who I Am
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="menuListItem"
            onClick={() => setShowMenu(false)}
          >
            What I Do
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="menuListItem"
            onClick={() => setShowMenu(false)}
          >
            How I Work
          </Link>
        </div>
        <div className="menuBtnContainer">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="contactBtn"
            onClick={openModal}
          >
            <img src={contactImg} alt="Contact" className="contactImg" />
            Get in Touch
          </Link>
          <img
            src={showMenu ? closeIcon : menuIcon}
            alt="Menu Icon"
            className="menuIcon"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </nav>

      {/* Contact Modal */}
      {isModalOpen && <ContactModal isOpen={isModalOpen} onClose={closeModal} />}
    </>
  );
};

export default Navbar;
