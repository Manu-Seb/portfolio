import { useEffect } from "react";
// Assuming Navbar.css contains your custom styles like .nav-link-animate
// import './Navbar.css'; // If you moved styles to a separate file

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow || "";
    }
    return () => {
      document.body.style.overflow = originalOverflow || "";
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // SMOOTH SCROLL HANDLER
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); // Prevent default anchor jump
    const targetElement = document.getElementById(targetId.substring(1)); // Remove '#' from ID

    if (targetElement) {
      // Calculate offset if you have a fixed navbar that might obscure the section title
      // const navbarHeight = document.querySelector('nav')?.offsetHeight || 0; // Get navbar height dynamically
      // const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      // const offsetPosition = elementPosition - navbarHeight - 20; // Adjust 20 for extra space

      // window.scrollTo({
      //   top: offsetPosition,
      //   behavior: "smooth",
      // });

      // Simpler method without manual offset calculation (browser tries to handle it)
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start", // Aligns the top of the target element to the top of the viewport
      });
    }

    if (menuOpen) {
      setMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  const navLinks = [
    { href: "#home", label: "Home" }, // Ensure you have <section id="home">, etc.
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact Me" },
    { href: "#socials", label: "My Links" },
  ];

  return (
    <>
      {/* Inline CSS from previous versions - ensure .nav-link-animate is defined here if not in external CSS */}
      <style>
        {`
          .nav-link-animate { position: relative; }
          .nav-link-animate::after {
            content: ''; position: absolute; width: 0; height: 2px;
            bottom: -4px; left: 0; background-color: #3b82f6;
            transition: width 0.3s ease-out;
          }
          .nav-link-animate:hover::after, .nav-link-animate:focus::after { width: 100%; }

          .nav-logo-interactive:hover, .nav-logo-interactive:focus {
            text-shadow: 0 0 8px rgba(59, 130, 246, 0.7);
          }
        `}
      </style>

      <nav className="fixed top-0 left-0 right-0 w-full z-40 bg-slate-800/80 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "#home")} // Use smooth scroll handler
              className="nav-logo-interactive font-mono text-xl font-bold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800 rounded-sm"
            >
              {"<"}Manu<span className="text-blue-500">-seb{">"}</span>
            </a>

            <button
              type="button"
              className="md:hidden text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">
                {menuOpen ? "Close menu" : "Open menu"}
              </span>
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>

            <div className="hidden md:flex items-center space-x-5 lg:space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)} // Use smooth scroll handler
                  className="nav-link-animate text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none focus:text-white focus:ring-2 focus:ring-blue-500"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
