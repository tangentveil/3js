import { EmailJSResponseStatus } from "@emailjs/browser";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  // service_reepbsg

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_reepbsg",
        "template_3yx4xbj",
        {
          from_name: form.name,
          to_name: "Anirudha",
          from_email: form.email,
          to_email: "anirudha0789@gmail.com",
          message: form.message,
        },
        "kAUTYKxY_5DgSikHh"
      );

      setLoading(false);
      alert("Your message has been sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="sm:px-10 px-5 my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />

        <div className="max-w-xl relative z-10 sm:px-10 px-5 mt-12">
          <h3 className="sm:text-4xl text-3xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">
            Let's talk
          </h3>

          <p className="text-lg text-[#AFB0B6]">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, i'm here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label htmlFor="name">
              <span className="text-lg text-[#AFB0B6]">Full Name</span>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-[#1C1C21] px-5 py-2 min-h-14 rounded-lg placeholder:text-[#62646C] text-lg text-[#E4E4E6] shadow-[#0E0E10] shadow-2xl focus:outline-none"
                placeholder="John Doe"
              />
            </label>

            <label htmlFor="email">
              <span className="text-lg text-[#AFB0B6]">Email</span>

              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-[#1C1C21] px-5 py-2 min-h-14 rounded-lg placeholder:text-[#62646C] text-lg text-[#E4E4E6] shadow-[#0E0E10] shadow-2xl focus:outline-none"
                placeholder="Johndoe@gmail.com"
              />
            </label>

            <label htmlFor="message">
              <span className="text-lg text-[#AFB0B6]">Your Message</span>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-[#1C1C21] px-5 py-2 min-h-14 rounded-lg placeholder:text-[#62646C] text-lg text-[#E4E4E6] shadow-[#0E0E10] shadow-2xl focus:outline-none"
                placeholder="Hi, I'm interested in..."
              />
            </label>

            <button
              className="bg-[#3A3A49] px-5 py-2 min-h-12 rounded-lg shadow-[#0E0E10] shadow-2xl flex justify-center items-center text-lg text-white gap-3"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}

              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="w-2.5 h-2.5 object-contain invert brightness-0"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
