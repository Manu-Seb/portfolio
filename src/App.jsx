import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { SocialLinks } from "./components/sections/SocialLinks";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className="bg-white text-gray-100">
        {/* Navbar fades in immediately after loading */}
        <div
          className={`transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>

        {/* Main content sections */}
        <div
          className={`transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Home isLoaded={isLoaded} />
          <About />
          <Projects />
          <Contact />
          <SocialLinks />
        </div>
      </div>
    </>
  );
}

export default App;