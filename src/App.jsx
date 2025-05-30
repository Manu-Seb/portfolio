import { useState, useEffect } from "react"; // Added useEffect for potential side effects
import "./App.css"; // For App-specific styles
// Consider moving index.css to your main.tsx or index.tsx for truly global styles
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { SocialLinks } from "./components/sections/SocialLinks";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Optional: Manage body scroll when the mobile menu is open or during loading
  useEffect(() => {
    if (menuOpen || !isLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function to restore scroll on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen, isLoaded]);

  return (
    <>
      {/* Loading Screen: Renders only when isLoaded is false */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      {/* Main application wrapper */}
      <div className="min-h-screen bg-white text-gray-900">
        {" "}
        {/* 1 & 2 */}
        {/* Navbar and Mobile Menu Container */}
        <div
          className={`
            transition-opacity duration-500 ease-in-out
            ${isLoaded ? "opacity-100" : "opacity-0 pointer-events-none"}
          `} /* 3 & 4 */
        >
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
        {/* Main content sections container */}
        <main // 5. Use <main> for semantic HTML
          className={`
            transition-opacity duration-700 ease-in-out
            ${
              isLoaded
                ? "opacity-100 delay-200"
                : "opacity-0 pointer-events-none"
            }
          `} /* 3, 4 & 6 */
        >
          {/*
            The `isLoaded` prop for Home is useful if Home itself has animations
            that should only start *after* the initial page load sequence and
            its own parent's fade-in is complete.
          */}
          <Home isLoaded={isLoaded} />
          <About />
          <Projects />
          <Contact />
          <SocialLinks />{" "}
          {/* Consider if this should be part of a Footer component */}
        </main>
      </div>
    </>
  );
}

export default App;
