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
          className="my-6 py-4 mx-auto bg-white shadow-lg rounded-lg 
                     w-10/12 border border-gray-300
                     md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12">

      <div className="form-div">
        <label htmlFor="user_name">Name</label>
        <input type="text" name="user_name" placeholder="Name" required 
               className="form-element" />
      </div>

      <div className="form-div">
        <label htmlFor="user_email">Email</label>
        <input type="email" name="user_email" placeholder="Email" required 
               className="form-element" />
      </div>

      <div className="form-div">
        <label htmlFor="message">Message</label>
        <textarea name="message" placeholder="Message" required 
                  className="form-element h-48">
        </textarea>
      </div>

      <div className="form-div">
        <input type="submit" value="Send" 
              className="my-2 py-1 font-bold rounded w-full
              bg-green-100 border-2 border-green-700 hover:bg-green-200" />
      </div>
    </form>
  )
}

export default ContactForm;
