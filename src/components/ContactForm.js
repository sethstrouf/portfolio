export default function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const notification = document.getElementById("notification")
    const sendButton = document.getElementById("submit-button")
    const spinner = document.createElement('i')
    spinner.classList.add("fas", "fa-spinner", "animate-spin")
    /* Change Send button to a spinning loading circle */
    sendButton.innerText = ""
    sendButton.append(spinner)

    window.emailjs
      .sendForm("gmail_service", "contact_template", event.target)
      .then(
        function (response) {
          document.getElementById("contact-form").reset();
          notification.classList.add("text-green-600");
          notification.textContent = "MESSAGE DELIVERED!";
          sendButton.innerText = "Send";
        },
        function (error) {
          notification.classList.add("text-red-600");
          notification.textContent = "Sorry, the message was not delivered.";
          sendButton.innerText = "Send";
        }
      )
      .finally(
        setTimeout(() => {
          notification.textContent = "Contact Me";
          if (notification.classList.contains("text-green-600")) {
            notification.classList.remove("text-green-600");
          } else {
            notification.classList.remove("text-red-600");
          }
        }, 5000)
      )
  }

  return (
    <div className="px-6 py-8 sm:px-10">
      <div>
        <p id="notification" className="text-xl font-medium text-gray-700">Contact Me</p>
      </div>

      <div className="relative mt-6">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
        </div>
      </div>

      <div className="mt-6">
        <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              placeholder="Full name"
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Email Address"
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-s"
            />
          </div>

          <div>
            <button
              id="submit-button"
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
