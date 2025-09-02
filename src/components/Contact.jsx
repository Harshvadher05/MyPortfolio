import React from "react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    window.location.href = `mailto:harshvadher4115@gmail.com?subject=Portfolio Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  };

  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Contact Me</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-4 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
