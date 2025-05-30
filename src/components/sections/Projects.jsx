import { RevealOnScroll } from "../RevealOnScroll"; // Assuming RevealOnScroll adds 'revealed' class

export const Projects = () => {
  const projectsData = [
    {
      title: "AgriSense-Farmer Help Tool",
      description:
        "Developing an AI-integrated web interface for farmers to access advanced agricultural technologies. Integrated a fertilizer prediction model using ONNX inference for efficient deployment. Created an innovative IoT-based solution for optimum irrigation.",
      tags: [
        "Next.js",
        "Node.js",
        "ONNX",
        "yoloV8",
        "Stacked Ensemble Model",
        "IoT",
      ],
      link: "#", // Replace with actual link if available
    },
    {
      title: "Solar Energy Prediction Using Deep Learning",
      description:
        "Built a model to forecast solar energy generation using deep learning with 97% accuracy.",
      tags: ["Machine Learning", "LSTM", "Deep Learning", "SDG"],
      link: "#", // Replace with actual link
    },
    {
      title: "AI-Integrated SaaS Web App",
      description:
        "Full-stack SaaS application with AI features, user authentication, and subscription payments.",
      tags: [
        "Next.js",
        "React",
        "TailwindCSS",
        "Stripe",
        "Clerk Auth",
        "Prisma",
      ],
      link: "https://github.com/Manu-Seb/GeniusAI-SaaS", // Example link
    },
    {
      title: "Full-Stack Notes App",
      description:
        "A secure and efficient note-taking web application with rich text editing and organization features.",
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
        "JWT Auth",
      ],
      link: "https://github.com/Manu-Seb/scribble-notes-app", // Example link
    },
    {
      title: "VistaVoyages Website",
      description:
        "Developed a responsive tourism website for VistaVoyages, showcasing travel services in Kerala and deployed onto a public domain.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      link: "#", // Replace with actual link
    },
    {
      title: "Agrima Open Market Web App",
      description:
        "Full-stack e-commerce platform with modern UI, secure payment integration, and customizable product inventory for local farmers.",
      tags: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "PostgreSQL",
        "TailwindCSS",
        "Prisma",
      ],
      link: "https://github.com/annrose227/Agrima",
    },
    // Add more projects as needed
  ];

  return (
    <>
      <style>
        {`
          /* Re-declare or ensure these keyframes are globally available if not already */
          @keyframes darkBlueGradientShiftProjects { /* Unique name for this section's instance if needed */
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes fadeInSlideUpProjects {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          /* Initial state for elements that will be animated */
          .project-reveal-item {
            opacity: 0;
          }

          /* Animation application when RevealOnScroll wrapper becomes visible */
          /* Assumes RevealOnScroll adds 'reveal visible' to its wrapper */
          div.reveal.visible > .project-reveal-item {
            animation: fadeInSlideUpProjects 0.7s ease-out forwards;
          }

          /* Project card hover effect */
          .project-card-interactive:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 0 25px rgba(59, 130, 246, 0.3), 0 0 15px rgba(96, 165, 250, 0.2); /* Brighter blue shadow */
          }
        `}
      </style>

      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center py-16 md:py-24 text-gray-100" // Ensures text is light by default
        style={{
          background:
            "linear-gradient(60deg, #0F172A, #1E293B, #1E3A8A, #1D4ED8)", // Dark blue gradient from Home
          backgroundSize: "300% 300%",
          animation:
            "darkBlueGradientShiftProjects 12s ease infinite alternate",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <RevealOnScroll threshold={0.2}>
            <h2
              className="project-reveal-item text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center
                         bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300
                         bg-clip-text text-transparent"
              // animationDelay can be set if needed, e.g., style={{ animationDelay: "0.1s" }}
            >
              Featured Projects
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {projectsData.map((project, index) => (
              <RevealOnScroll key={project.title} threshold={0.1}>
                <div
                  className="project-reveal-item project-card-interactive h-full flex flex-col bg-slate-800/70 dark:bg-slate-800/50 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 transition-all duration-300 ease-out shadow-lg"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }} // Staggered delay for cards
                >
                  <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-sky-300 dark:text-sky-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 dark:text-gray-400 mb-4 text-sm sm:text-base leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5 mt-auto pt-2">
                    {" "}
                    {/* mt-auto pushes tags and link to bottom if card height varies */}
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-sky-500/20 dark:bg-sky-400/20 text-sky-300 dark:text-sky-300 py-1 px-3 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank" // Open in new tab
                    rel="noopener noreferrer" // Security for new tab
                    className="inline-block text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200 group text-sm sm:text-base"
                  >
                    View Project{" "}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:ml-1">
                      →
                    </span>
                  </a>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
