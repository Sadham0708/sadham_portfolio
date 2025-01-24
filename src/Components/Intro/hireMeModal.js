import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './hireMeModal.css';

const HireMeModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    interviewDate: '',
    location: '',
    additionalInfo: '',
  });

  const [isSending, setIsSending] = useState(false); 
  const [successMessage, setSuccessMessage] = useState(''); 
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage('');
    setSuccessMessage('');

    const serviceID = 'service_5fz022s';
    const templateID = 'template_c6lwx2a';
    const userID = '7C38sLxLX8oX27YNt';

    const templateParams = {
      companyName: formData.companyName,
      interviewDate: formData.interviewDate,
      location: formData.location,
      additionalInfo: formData.additionalInfo,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, userID);
      setSuccessMessage('Your information has been submitted successfully!');
      setFormData({
        companyName: '',
        interviewDate: '',
        location: '',
        additionalInfo: '',
      });
      setTimeout(onClose, 3000);
    } catch (error) {
      setErrorMessage('Failed to send your message. Please try again.');
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" aria-modal="true" role="dialog">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close Modal"
>
          &times;
        </button>
        <h2>Hire Me</h2>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          <label>
            Company Name
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Interview Date
            <input
              type="date"
              name="interviewDate"
              value={formData.interviewDate}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Location
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Additional Information (Optional)
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
            />
          </label>
          <button
            className="hireMeSubmitBtn"
            type="submit"
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HireMeModal;
