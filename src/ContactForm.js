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
      <div>
        <label>Name</label>
      </div>
      <div>
        <input type="text" name="user_name" required className="form-element" />
      </div>

      <div>
        <label>Email</label>
      </div>
      <div>
        <input type="email" name="user_email" required required className="form-element" />
      </div>

      <div>
        <label>Message</label>
      </div>
      <div>
        <textarea name="message" required required className="form-element"></textarea>
      </div>
        <input type="submit" value="Send" />
    </form>
  )
}

export default ContactForm;
