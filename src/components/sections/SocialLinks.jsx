import { RevealOnScroll } from "../RevealOnScroll";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa"; // Import icons

export const SocialLinks = () => {
  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/manu-seb/", // Replace with your LinkedIn URL
      icon: <FaLinkedin size={24} />,
      color: "#0A66C2", // LinkedIn brand color
    },
    {
      name: "GitHub",
      url: "https://github.com/Manu-Seb", // Replace with your GitHub URL
      icon: <FaGithub size={24} />,
      color: "#6b7071", // GitHub brand color
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/manuseb/", // Replace with your LeetCode URL
      icon: <FaCode size={24} />,
      color: "#FFA116", // LeetCode brand color
    },
    // Add more links as needed
  ];

  return (
    <section
      id="socials"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-100 dark:bg-gray-900" // Added some basic background for differentiation
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Connect With Me
          </h2>
          <div className="flex justify-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-cyan-400 transition-colors duration-300"
              >
                <span className="sr-only">{link.name}</span> {/* For accessibility */}
                <div className="flex flex-col items-center">
                  <span style={{ color: link.color }}>{link.icon}</span>
                  <p className="text-sm mt-2">{link.name}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};