import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [isFading, setIsFading] = useState(false); // State to control fade-out
  const fullText = "<Hello World />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        // Start fade-out animation
        setTimeout(() => {
          setIsFading(true);
        }, 500); // Reduced delay before fade-out for smoother transition

        // Call onComplete after fade-out animation completes
        setTimeout(() => {
          onComplete();
        }, 1500); // Total delay: 500ms (wait) + 1000ms (fade-out duration)
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <>
      {/* Add custom CSS for animations */}
      <style>
        {`
          /* Glowing text effect */
          .glowing-text {
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.4);
          }

          /* Blinking cursor */
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 0.8s step-end infinite;
          }

          /* Gradient loading bar with pulse */
          @keyframes loadingBar {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(250%); }
          }
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.5); }
            50% { box-shadow: 0 0 25px rgba(59, 130, 246, 1); }
          }
          .animate-loading-bar {
            background: linear-gradient(90deg, #3b82f6, #60a5fa, #3b82f6);
            background-size: 200%;
            animation: loadingBar 2s ease-in-out infinite, pulseGlow 1.5s ease-in-out infinite;
          }

          /* Fade-out animation */
          @keyframes fadeOut {
            0% { opacity: 1; }
            100% { opacity: 0; }
          }
          .fade-out {
            animation: fadeOut 1s ease forwards;
          }
        `}
      </style>

      <div
        className={`fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center transition-opacity duration-1000 ${
          isFading ? "fade-out" : ""
        }`}
      >
        <div className="mb-4 text-4xl font-mono font-bold glowing-text">
          {text} <span className="animate-blink ml-1"> | </span>
        </div>

        <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
          <div className="w-[40%] h-full animate-loading-bar"></div>
        </div>
      </div>
    </>
  );
};