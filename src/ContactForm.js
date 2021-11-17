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
    <form id="contact-form" onSubmit={handleSubmit} 
          className="my-12 py-6 md:py-8 xl:py-12
                     mx-auto bg-white shadow-lg rounded-lg text-gray-500
                     w-10/12 border md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:w-6/12
                     2xl:text-2xl">

      {/* form-div and input-element @applied in index.css */}
      <div className="form-div">
        <label htmlFor="user_name">Name</label>
        <input type="text" name="user_name" required 
               className="input-element" />
      </div>

      <div className="form-div">
        <label htmlFor="user_email">Email</label>
        <input type="email" name="user_email" required 
               className="input-element" />
      </div>

      <div className="form-div">
        <label htmlFor="message">Message</label>
        <textarea name="message" required 
                  className="input-element h-48">
        </textarea>
      </div>

      <div className="form-div">
        <input type="submit" value="Send" 
              className="my-2 py-2 font-bold rounded w-full
              bg-green-100 border-2 border-green-700 hover:bg-green-200" />
      </div>
    </form>
  )
}

export default ContactForm;
