import React, { useState } from 'react';
import './intro.css';
import btnImg from '../../assets/hireme.png';
import HireMeModal from './hireMeModal'; // Import the modal component

const Intro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hey there!, </span>
        <span className="introText">
          I'm <span className="introName">Sadham</span>, <br /> a <span className="introName">Web Developer</span> 
        </span>
        <p className="introPara">
          who loves turning ideas into interactive and beautiful websites.
        </p>
        <p className="introPara">
          I work with <span className="skills">HTML</span>,{' '}
          <span className="skills">CSS</span>, <span className="skills">JavaScript</span>,{' '}
          <span className="skills">MySQL</span>, <span className="skills">MongoDB</span>,{' '}
          <span className="skills">GitHub</span>, and I’m diving deeper into{' '}
          <span className="skills">React</span>.
        </p>
        <p className="introPara">to build even more dynamic experiences.</p>
        <p className="introPara">
          Take a look around, explore my projects, and let’s connect if you think
          we can create something awesome together!
        </p>

        {/* Hire Me Button */}
        <button className="btn" onClick={openModal}>
          <img src={btnImg} alt="Hire Me" className="btnImg" />
          Hire Me
        </button>
      </div>
      {/* <img src="" alt="Profile Background" className="bg" /> */}

      {/* Modal Component */}
      {isModalOpen && <HireMeModal isOpen={isModalOpen} onClose={closeModal} />}
    </section>
  );
};

export default Intro;
