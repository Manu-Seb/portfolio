import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      {/* Add custom CSS for hover animations and background */}
      <style>
        {`
          /* Underline animation for nav links */
          .nav-link {
            position: relative;
            transition: color 0.3s ease;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: #3b82f6; /* Blue color for the underline */
            transition: width 0.3s ease;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          /* Glowing effect for the logo on hover */
          .nav-logo:hover {
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.8);
          }

          /* Custom background with transparency */
          .custom-nav-bg {
            background-color: rgba(45, 55, 72, 0.8);
          }
        `}
      </style>

      <nav className="fixed top-0 w-full z-40 custom-nav-bg backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a
              href="#home"
              className="nav-logo font-mono text-xl font-bold text-white transition-all duration-300"
            >
              {"<"}Manu<span className="text-blue-500">-seb{">"}</span>
            </a>

            <div
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white text-2xl"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              ☰
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="nav-link text-gray-300 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="nav-link text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="nav-link text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="nav-link text-gray-300 hover:text-white transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#socials"
                className="nav-link text-gray-300 hover:text-white transition-colors"
              >
                My Links
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};