import { RevealOnScroll } from "../RevealOnScroll";
import profilePicture from "../../assets/profile-picture.jpg";

export const Home = ({ isLoaded }) => {
  return (
    <>
      {/* Add custom CSS for animations */}
      <style>
        {`
          /* Fade-in and slide-up animation for text */
          @keyframes fadeInSlideUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Zoom-in and rotate animation for the profile picture */
          @keyframes zoomInRotate {
            0% {
              opacity: 0;
              transform: scale(0.8) rotate(-10deg);
            }
            100% {
              opacity: 1;
              transform: scale(1) rotate(0deg);
            }
          }

          /* Glowing border effect on hover for the profile picture */
          .profile-picture:hover {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
            transform: translateY(-5px);
          }

          /* Background gradient animation */
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          /* Button background fill animation on hover */
          .btn-primary::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.6));
            z-index: -1;
            transition: transform 0.3s ease;
            transform: scaleX(0);
            transform-origin: left;
          }

          .btn-primary:hover::before {
            transform: scaleX(1);
          }

          .btn-secondary::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.3));
            z-index: -1;
            transition: transform 0.3s ease;
            transform: scaleX(0);
            transform-origin: left;
          }

          .btn-secondary:hover::before {
            transform: scaleX(1);
          }

          /* Animation classes triggered when revealed and loading is complete */
          .animate-on-load.revealed h1 {
            animation: fadeInSlideUp 1s ease-out forwards;
          }
          .animate-on-load.revealed p {
            animation: fadeInSlideUp 1s ease-out 0.3s forwards;
          }
          .animate-on-load.revealed .profile-picture {
            animation: zoomInRotate 1s ease-out forwards;
          }
        `}
      </style>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative bg-gray-100 dark:bg-gray-900"
        style={{
          background: 'linear-gradient(45deg, #1a202c, #2d3748, #1a202c)',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 15s ease infinite',
        }}
      >
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className={`flex flex-col md:flex-row items-center justify-between animate-on-load ${isLoaded ? 'revealed' : ''}`}>
              {/* Left side - Text content */}
              <div className="md:w-1/2 text-center md:text-left px-4 mb-8 md:mb-0">
                <h1
                  className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight opacity-0"
                >
                  Hi, I'm Manu Sebastian
                </h1>

                <p
                  className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0 opacity-0"
                >
                  I'm a full-stack developer passionate about building clean, scalable web applications. I love merging AI with real-world solutions, creating innovative projects in Machine Learning, Deep Learning, and full-stack development.
                </p>

                <div className="flex justify-center md:justify-start space-x-4">
                  <a
                    href="#projects"
                    className="btn-primary bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transform hover:scale-105 duration-300"
                  >
                    View Projects
                  </a>

                  <a
                    href="#contact"
                    className="btn-secondary border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 transform hover:scale-105"
                  >
                    Contact Me
                  </a>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="md:w-1/2 flex justify-center md:justify-center">
                <img
                  src={profilePicture}
                  alt="Manu Sebastian"
                  className="profile-picture w-64 h-64 md:w-96 md:h-96 rounded-full object-cover shadow-lg opacity-0 transition-all duration-500"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
};