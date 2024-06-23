import React from 'react';

const Contact = () => (
  <section className="contact" id="contact">
    <div className="text-center" data-aos="fade-down">
      <h2>Contact <span>Me</span></h2>
    </div>
    <div className="contact-form" data-aos="zoom-in">
      <form action="">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email Address..." required />
        <textarea rows="10" cols="30" placeholder="Your Message" required></textarea>
        <input type="submit" value="Send Message" className="send-button" />
      </form>
    </div>
  </section>
);

export default Contact;
