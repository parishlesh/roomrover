import React, { useState } from 'react';
import '../styles/contactus.css'; // Import the CSS file

const ContactUs = () => {
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const validate = (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.length < 3) {
      setError('Your name should be at least 3 characters long.');
      return;
    }

    if (!(email.includes('.') && email.includes('@'))) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!emailIsValid(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (message.length < 15) {
      setError('Please write a longer message.');
      return;
    }

    setError('');
    setSuccessMsg('Thank you! I will get back to you as soon as possible.');

    setTimeout(() => {
      setSuccessMsg('');
      document.getElementById('contact-form').reset();
    }, 6000);
  };

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="contact-container">
      <div className="left-col">
        <img className="logo" src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/logo.png" alt="Logo" />
      </div>
      <div className="right-col">
        <h1>Contact us</h1>
        <p>Planning to visit Indonesia soon? Get insider tips on where to go, things to do and find best deals for your next adventure.</p>
        <form id="contact-form" onSubmit={validate}>
          <label htmlFor="name">Full name</label>
          <input type="text" id="name" name="name" placeholder="Your Full Name" required />
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Your Email Address" required />
          <label htmlFor="message">Message</label>
          <textarea rows="6" placeholder="Your Message" id="message" name="message" required></textarea>
          <button type="submit" id="submit" name="submit">Send</button>
        </form>
        <div id="error">{error}</div>
        <div id="success-msg">{successMsg}</div>
      </div>
    </div>
  );
};

export default ContactUs;
