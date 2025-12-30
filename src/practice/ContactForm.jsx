import React, { useState } from "react";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactForm);
    setSuccess(true); // show message
    setContactForm({ name: "", email: "", message: "" });
    setTimeout(() => setSuccess(false), 3000); // hide after 3 sec
  };

  return (
    <form
      className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Contact Me
      </h2>

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
          ✅ Message sent successfully!
        </div>
      )}

      <input
        type="text"
        name="name"
        value={contactForm.name}
        onChange={handleChange}
        placeholder="Enter your name"
        required
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="email"
        name="email"
        value={contactForm.email}
        onChange={handleChange}
        placeholder="Enter your email"
        required
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        name="message"
        value={contactForm.message}
        onChange={handleChange}
        placeholder="Enter your message"
        rows="4"
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
