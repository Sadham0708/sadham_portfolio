import React, { useState } from 'react';
import resume from '../../assets/SadhamResume.pdf';
import './resumeButton.css';

const ResumeButton = () => {
  const [showModal, setShowModal] = useState(false);

  // Toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {/* Floating Resume Button */}
      <button className="resumeButton" onClick={toggleModal}>
        Resume
      </button>

      {/* Modal for showing the Resume */}
      {showModal && (
        <div className="resumeModal" onClick={toggleModal}>
          <div
            className="modalContent"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal on inner clicks
          >
            <button className="closeBtn" onClick={toggleModal}>
              &times;
            </button>
            <h2>My Resume</h2>
            <p>Feel free to view or download my resume.</p>
            <a
              href={resume}
              download="SadhamResume.pdf"
              className="downloadBtn"
            >
              Download Resume
            </a>
            <iframe
              src={resume}
              width="100%"
              height="500px"
              title="Resume"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeButton;
