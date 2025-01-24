import React, { useState } from 'react';
import './contactModal.css';
import emailjs from 'emailjs-com';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false); // For loading feedback
  const [successMessage, setSuccessMessage] = useState(''); // Success message
  const [errorMessage, setErrorMessage] = useState(''); // Error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage('');
    setSuccessMessage('');

    const serviceID = 'service_5fz022s';
    const templateID = 'template_t9ue7g8'; // Use the correct template ID for contact form
    const userID = '7C38sLxLX8oX27YNt';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, userID);
      setSuccessMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
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
    <div id="modal-overlay" className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Get in Touch</h2>
        <p>Please fill out the form below to discuss any work opportunities.</p>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          <label>
            Your Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Your Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Your Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button
            className="contactSubmitBtn"
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

export default ContactModal;
