import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(""); // "success", "error", ""

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("EmailJS Success:", result.text);
          setSubmitStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setSubmitStatus(""), 3000);
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setSubmitStatus("error");
          setTimeout(() => setSubmitStatus(""), 3000);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <style>
        {`
          /* Keyframes for content reveal animation */
          @keyframes fadeInSlideUpContactPage { /* Unique name */
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .contact-reveal-item {
            opacity: 0; /* Start hidden */
          }

          /* Assumes RevealOnScroll adds 'reveal visible' to its wrapper */
          /* Make sure your RevealOnScroll component does this, or adjust selector */
          div.reveal.visible > .contact-reveal-item {
            animation: fadeInSlideUpContactPage 0.7s ease-out forwards;
          }

          /* Custom focus style for inputs on dark background */
          .form-input-custom:focus {
            border-color: #3b82f6; /* blue-500 */
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3); /* blue-500 with opacity */
          }
        `}
      </style>

      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center py-16 md:py-24 
                   bg-slate-900 text-gray-100" // Static dark background
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center w-full">
          {" "}
          {/* Added w-full here */}
          <RevealOnScroll threshold={0.2}>
            <h2
              className="contact-reveal-item text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 md:mb-12 text-center
                         bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300
                         bg-clip-text text-transparent"
            >
              Get In Touch
            </h2>
          </RevealOnScroll>
          <RevealOnScroll threshold={0.1}>
            <div
              // ***** MODIFIED LINE FOR WIDTH AND PADDING *****
              className="contact-reveal-item w-full max-w-3xl bg-slate-800/70 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl border border-slate-700/60"
              // Changed max-w-lg to max-w-2xl
              // Added md:p-10 for more padding on larger form
              style={{ animationDelay: "0.2s" }} // Delay for the form container
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-sky-300 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name" // Essential for EmailJS
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input-custom w-full bg-slate-700/60 border border-slate-600 rounded-md px-4 py-3 text-gray-100 transition duration-150 ease-in-out focus:outline-none placeholder-gray-400"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-sky-300 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email" // Essential for EmailJS
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input-custom w-full bg-slate-700/60 border border-slate-600 rounded-md px-4 py-3 text-gray-100 transition duration-150 ease-in-out focus:outline-none placeholder-gray-400"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-sky-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message" // Essential for EmailJS
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input-custom w-full bg-slate-700/60 border border-slate-600 rounded-md px-4 py-3 text-gray-100 transition duration-150 ease-in-out focus:outline-none placeholder-gray-400"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-semibold transition duration-150 ease-in-out relative overflow-hidden
                              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800
                              hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
                              disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
                {submitStatus === "success" && (
                  <p className="text-sm text-green-400 text-center mt-3">
                    Message sent successfully! Thanks for reaching out.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-sm text-red-400 text-center mt-3">
                    Oops! Something went wrong. Please try again or contact me
                    directly.
                  </p>
                )}
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
};
