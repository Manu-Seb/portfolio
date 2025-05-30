import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaLinkedin,
  FaGithub,
  FaCode,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa"; // Added more icons

export const SocialLinks = () => {
  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/manu-seb/",
      icon: <FaLinkedin size={28} />, // Slightly larger icons
      hoverColorClass: "hover:text-blue-500", // Tailwind hover color
    },
    {
      name: "GitHub",
      url: "https://github.com/Manu-Seb",
      icon: <FaGithub size={28} />,
      hoverColorClass: "hover:text-gray-400", // GitHub uses shades of gray/white
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/manuseb/",
      icon: <FaCode size={28} />,
      hoverColorClass: "hover:text-yellow-500", // LeetCode's orange/yellow
    },
    {
      name: "Email",
      url: "mailto:manuseb01@gmail.com", // Your email address
      icon: <FaEnvelope size={28} />,
      hoverColorClass: "hover:text-red-500", // Common email icon color
    },
    // { // Example for a Resume link
    //   name: "Resume",
    //   url: "/path-to-your-resume.pdf", // Link to your resume PDF
    //   icon: <FaFileAlt size={28} />,
    //   hoverColorClass: "hover:text-green-500",
    // },
  ];

  return (
    <>
      <style>
        {`
          /* Ensure these keyframes are globally available or re-declare if needed */
          @keyframes darkBlueGradientShiftSocials { /* Unique name */
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes fadeInSlideUpSocials {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes popInSocialIcon {
            0% { opacity: 0; transform: scale(0.8) translateY(10px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
          }

          .socials-reveal-item {
            opacity: 0; /* Start hidden */
          }
          .social-icon-reveal-item {
            opacity: 0;
          }

          /* Assumes RevealOnScroll adds 'reveal visible' to its wrapper */
          div.reveal.visible > .socials-reveal-item { /* For the title */
            animation: fadeInSlideUpSocials 0.7s ease-out forwards;
          }

          div.reveal.visible > .social-icon-reveal-item { /* For each icon link */
            animation: popInSocialIcon 0.6s ease-out forwards;
          }

          /* Enhanced hover effect for social icons */
          .social-link-interactive {
            transition: transform 0.3s ease-out, color 0.3s ease-out;
          }
          .social-link-interactive:hover {
            transform: translateY(-5px) scale(1.1);
          }
        `}
      </style>

      <section
        id="socials"
        className="min-h-[60vh] md:min-h-[50vh] flex flex-col items-center justify-center py-16 md:py-24 text-gray-100"
        // Adjusted min-h as this section might not need full screen height
        style={{
          background:
            "linear-gradient(60deg, #0F172A, #1E293B, #1E3A8A, #1D4ED8)", // Dark blue gradient
          backgroundSize: "300% 300%",
          animation: "darkBlueGradientShiftSocials 12s ease infinite alternate",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll threshold={0.2}>
            <h2
              className="socials-reveal-item text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 md:mb-16
                         bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300
                         bg-clip-text text-transparent"
            >
              Connect With Me
            </h2>
          </RevealOnScroll>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-8 sm:gap-x-10 md:gap-x-12 lg:gap-x-16">
            {/* Increased gap for better spacing */}
            {links.map((link, index) => (
              <RevealOnScroll key={link.name} threshold={0.1}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name} // More specific aria-label
                  className={`social-icon-reveal-item social-link-interactive flex flex-col items-center group text-gray-300 dark:text-gray-400 ${
                    link.hoverColorClass
                  } dark:${link.hoverColorClass.replace(
                    "hover:text-",
                    "dark:hover:text-"
                  )}`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }} // Staggered delay for icons
                >
                  <div className="p-3 sm:p-4 rounded-full bg-slate-700/50 dark:bg-slate-800/40 group-hover:bg-slate-600/70 dark:group-hover:bg-slate-700/60 transition-all duration-300 mb-2 shadow-md group-hover:shadow-lg">
                    {/* Render the icon directly, color will be inherited or set by hoverColorClass */}
                    {link.icon}
                  </div>
                  <p className="text-xs sm:text-sm font-medium transition-colors duration-300">
                    {link.name}
                  </p>
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
