import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // '', 'loading', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        "service_ts7rc4u",
        "template_653hc3b",
        form.current,
        "VJVosFd2BNJ_QR7P7"
      )
      .then(
        (result) => {
          console.log("✅ Email sent successfully:", result.text);
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.error(
            "❌ Email failed:",
            error?.text || error?.message || error
          );
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-16 bg-white dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
        Contact Me
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto grid gap-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="border rounded-xl px-4 py-3 w-full dark:bg-gray-900 dark:text-white"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="border rounded-xl px-4 py-3 w-full dark:bg-gray-900 dark:text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="4"
          className="border rounded-xl px-4 py-3 w-full dark:bg-gray-900 dark:text-white"
        ></textarea>
        <button
          type="submit"
          disabled={status === "loading"}
          className={`px-6 py-3 rounded-xl transition-colors text-white ${
            status === "loading"
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {/* Status Message */}
        {status === "success" && (
          <p className="text-green-600 mt-2 text-center">
            ✅ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-2 text-center">
            ❌ Failed to send message. Please try again.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
