import React from 'react';

const ContactForm = () => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    window.emailjs.sendForm('gmail_service', 'contact_template', event.target)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required></textarea>
        <input type="submit" value="Send" />
    </form>
  )
}

export default ContactForm;
