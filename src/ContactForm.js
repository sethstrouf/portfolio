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
    <form id="contact-form" onSubmit={handleSubmit} className="p-4">

      <div className="form-div">
        <label htmlFor="user_name">Name</label>
      </div><div>
        <input type="text" name="user_name" placeholder="Name" required 
               className="form-element" />
      </div>

      <div className="form-div">
        <label htmlFor="user_email">Email</label>
      </div><div>
        <input type="email" name="user_email" required className="form-element" />
      </div>

      <div className="form-div">
        <label htmlFor="message">Message</label>
      </div><div>
        <textarea name="message" required className="form-element"></textarea>
      </div>

      <div>
        <input type="submit" value="Send" className="my-4 px-12 font-bold rounded bg-pink-100 border border-pink-700 hover:bg-pink-200" />
      </div>
    </form>
  )
}

export default ContactForm;
