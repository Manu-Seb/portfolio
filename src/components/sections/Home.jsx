import { RevealOnScroll } from "../RevealOnScroll";
import profilePicture from "../../assets/profile-picture.jpg";

export const Home = ({ isLoaded }) => {
  return (
    <>
      <style>
        {`
          /* Animation Keyframes */
          @keyframes fadeInSlideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes zoomInRotateSlight {
            0% { opacity: 0; transform: scale(0.9) rotate(-5deg); }
            100% { opacity: 1; transform: scale(1) rotate(0deg); }
          }

          @keyframes darkBlueGradientShift { /* Renamed for theme */
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          /* Animation Application Classes */
          .home-content-animate.revealed .home-title {
            animation: fadeInSlideUp 0.8s ease-out 0.2s forwards;
          }
          .home-content-animate.revealed .home-description {
            animation: fadeInSlideUp 0.8s ease-out 0.4s forwards;
          }
          .home-content-animate.revealed .home-buttons {
            animation: fadeInSlideUp 0.8s ease-out 0.6s forwards;
          }
          .home-content-animate.revealed .home-profile-picture {
            animation: zoomInRotateSlight 1s ease-out 0.3s forwards;
          }

          /* Initial states */
          .home-title, .home-description, .home-buttons, .home-profile-picture {
            opacity: 0;
          }

          /* Interactive Styles */
          .home-profile-picture-interactive:hover {
            box-shadow: 0 0 25px rgba(59, 130, 246, 0.5); /* Using a lighter blue for glow */
            transform: scale(1.03) translateY(-3px);
            transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
          }

          .btn-animated-bg {
            position: relative;
            z-index: 1;
            overflow: hidden;
          }

          .btn-animated-bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transform: scaleX(0);
            transform-origin: left;
          }

          /* Button fill colors use a lighter blue for contrast with the dark BG */
          .btn-animated-bg.primary-fill::before {
            background: linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.7));
          }
          .btn-animated-bg.secondary-fill::before {
             background: linear-gradient(90deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.4));
          }

          .btn-animated-bg:hover::before {
            transform: scaleX(1);
          }
        `}
      </style>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center py-16 md:py-20"
        style={{
          // Exclusively dark blue shades for the background gradient
          // These are all 100% opaque hex codes.
          // Order: Very Dark Blue -> Dark Navy -> Dark Royal Blue -> Slightly Lighter Dark Blue
          background:
            "linear-gradient(60deg, #0F172A, #1E293B, #1E3A8A, #1D4ED8)",
          // Tailwind equivalent example: slate-900, slate-800, blue-800 (custom/darker), blue-700
          // These provide subtle shifts within the dark blue spectrum.
          backgroundSize: "300% 300%", // Size can be adjusted based on desired "band" width
          animation: "darkBlueGradientShift 12s ease infinite alternate", // 12s for a noticeable but not frantic speed
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl xl:max-w-6xl">
          <RevealOnScroll threshold={0.1}>
            <div
              className={`home-content-animate flex flex-col md:flex-row items-center md:justify-center lg:justify-between gap-8 md:gap-10 lg:gap-12 ${
                isLoaded ? "revealed" : ""
              }`}
            >
              {/* Text content */}
              <div className="order-2 md:order-1 md:w-1/2 lg:w-[55%] xl:w-3/5 text-center md:text-left">
                <h1
                  className="home-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 bg-clip-text text-transparent leading-tight opacity-0"
                  // The text gradient uses lighter blues/cyans for good contrast
                >
                  Hi, I'm Manu Sebastian
                </h1>
                <p
                  className="home-description text-gray-300 text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0 opacity-0"
                  // text-gray-300 provides good contrast against the dark blue background
                >
                  I'm a full-stack developer passionate about building clean,
                  scalable web applications. I love merging AI with real-world
                  solutions, creating innovative projects in Machine Learning,
                  Deep Learning, and full-stack development.
                </p>
                <div className="home-buttons flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 opacity-0">
                  <a
                    href="#projects"
                    className="btn-animated-bg primary-fill bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                    // Buttons use lighter blues to stand out
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    className="btn-animated-bg secondary-fill border border-blue-500 text-blue-400 hover:text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-sm hover:shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                  >
                    Contact Me
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className="order-1 md:order-2 md:w-1/2 lg:w-[45%] xl:w-2/5 flex justify-center md:justify-end">
                <img
                  src={profilePicture}
                  alt="Manu Sebastian - Full Stack Developer"
                  className="home-profile-picture home-profile-picture-interactive w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] xl:w-96 xl:h-96 rounded-full object-cover border-4 border-slate-700 shadow-xl opacity-0 transition-all duration-300 ease-out"
                  // Border color (slate-700) should complement the dark blue theme
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
};
// This component is the Home section of the portfolio, featuring a hero section with a title, description, buttons, and a profile picture.