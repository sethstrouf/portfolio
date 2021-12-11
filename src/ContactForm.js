import React from "react";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const notification = document.getElementById("notification");
    const sendButton = document.getElementById("sendButton")
    sendButton.value = "Sending..."
    sendButton.classList.add("animate-bounce")

    window.emailjs
      .sendForm("gmail_service", "contact_template", event.target)
      .then(
        function (response) {
          document.getElementById("contact-form").reset();
          notification.classList.add("text-green-500");
          notification.textContent = "MESSAGE DELIVERED!";
          sendButton.value = "Send";
          sendButton.classList.remove("animate-bounce");
        },
        function (error) {
          notification.classList.add("text-red-500");
          notification.textContent = "Sorry, the message was not delivered.";
          sendButton.value = "Send";
          sendButton.classList.remove("animate-bounce");
        }
      );
  };

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="my-12 xl:my-24 py-6 md:py-8 xl:py-12
                     mx-auto bg-white rounded-md text-gray-500
                     border border-gray-400 hover:shadow-lg
                     w-10/12 md:w-8/12 lg:w-7/12 xl:w-6/12"
    >
      {/* form-div and input-element @applied in index.css */}
      <div id="notification" className="font-bold"></div>
      <div className="form-div">
        <label htmlFor="user_name">Name</label>
        <input
          type="text"
          name="user_name"
          required
          className="input-element focused"
        />
      </div>

      <div className="form-div">
        <label htmlFor="user_email">Email</label>
        <input
          type="email"
          name="user_email"
          required
          className="input-element focused"
        />
      </div>

      <div className="form-div">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          required
          className="input-element h-48 focused"
        ></textarea>
      </div>

      <div className="form-div">
        <input
          id="sendButton"
          type="submit"
          value="Send"
          className="py-1 md:py-2 w-full rounded bg-green-400 
              hover:bg-green-300 font-bold text-gray-800 focused"
        />
      </div>
    </form>
  );
};

export default ContactForm;
