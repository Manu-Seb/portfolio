import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  const mlSkills = [
    "EDA",
    "Machine Learning",
    "Deep Learning",
    "Python",
    "PyTorch",
    "OpenCV",
    "LLMs",
    "Flask",
    "Docker for ML Deployment",
  ];

  return (
    <>
      {/* Add custom CSS for animations and effects */}
      <style>
        {`
          /* Fade-in and slide-up animation for elements */
          @keyframes fadeInSlideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          /* Pop-in animation for skill tags */
          @keyframes popIn {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }

          /* Glowing effect for skill tags on hover */
          .skill-tag:hover {
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.6);
            transform: scale(1.05);
          }

          /* Glowing border for cards on hover */
          .about-card:hover {
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
          }

          /* Apply animations to elements */
          .about-title {
            animation: fadeInSlideUp 1s ease-out forwards;
          }

          .bio-card {
            animation: fadeInSlideUp 1s ease-out 0.2s forwards;
          }

          .skill-card-1 {
            animation: fadeInSlideUp 1s ease-out 0.4s forwards;
          }

          .skill-card-2 {
            animation: fadeInSlideUp 1s ease-out 0.6s forwards;
          }

          .skill-card-3 {
            animation: fadeInSlideUp 1s ease-out 0.8s forwards;
          }

          .edu-card {
            animation: fadeInSlideUp 1s ease-out 1s forwards;
          }

          .exp-card {
            animation: fadeInSlideUp 1s ease-out 1.2s forwards;
          }

          /* Pop-in animation for skill tags with staggered delays */
          .skill-tag {
            animation: popIn 0.5s ease-out forwards;
          }

          .skill-card-1 .skill-tag:nth-child(1) { animation-delay: 0.4s; }
          .skill-card-1 .skill-tag:nth-child(2) { animation-delay: 0.5s; }
          .skill-card-1 .skill-tag:nth-child(3) { animation-delay: 0.6s; }
          .skill-card-1 .skill-tag:nth-child(4) { animation-delay: 0.7s; }
          .skill-card-1 .skill-tag:nth-child(5) { animation-delay: 0.8s; }

          .skill-card-2 .skill-tag:nth-child(1) { animation-delay: 0.6s; }
          .skill-card-2 .skill-tag:nth-child(2) { animation-delay: 0.7s; }
          .skill-card-2 .skill-tag:nth-child(3) { animation-delay: 0.8s; }
          .skill-card-2 .skill-tag:nth-child(4) { animation-delay: 0.9s; }
          .skill-card-2 .skill-tag:nth-child(5) { animation-delay: 1.0s; }

          .skill-card-3 .skill-tag:nth-child(1) { animation-delay: 0.8s; }
          .skill-card-3 .skill-tag:nth-child(2) { animation-delay: 0.9s; }
          .skill-card-3 .skill-tag:nth-child(3) { animation-delay: 1.0s; }
          .skill-card-3 .skill-tag:nth-child(4) { animation-delay: 1.1s; }
          .skill-card-3 .skill-tag:nth-child(5) { animation-delay: 1.2s; }
          .skill-card-3 .skill-tag:nth-child(6) { animation-delay: 1.3s; }
          .skill-card-3 .skill-tag:nth-child(7) { animation-delay: 1.4s; }
          .skill-card-3 .skill-tag:nth-child(8) { animation-delay: 1.5s; }
          .skill-card-3 .skill-tag:nth-child(9) { animation-delay: 1.6s; }
        `}
      </style>

      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
        style={{
          background: "white",
        }}
      >
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="about-title text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              About Me
            </h2>

            <div className=" rounded-xl p-8 border-gray-200 border  transition-all bg-gray-100/50 backdrop-blur-sm">
              <p className="text-gray-800 mb-6 text-lg leading-relaxed">
                I am a pre-final year Computer Science student at SRM IST
                Tiruchirapalli, specializing in Artificial Intelligence and
                Machine Learning. With a strong passion for development, I have
                worked on multiple projects in Machine Learning and Deep
                Learning, as well as building scalable web applications. I enjoy
                creating innovative solutions that blend AI with real-world
                applications, constantly exploring new technologies to enhance my
                expertise.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-1 border-gray-200 rounded-xl p-6 bg-gray-200/30">
                <div className="skill-card-1 about-card rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="skill-tag bg-blue-600/10 text-blue-600 py-1 px-3 rounded-full text-sm transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="skill-card-2 about-card rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Backend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="skill-tag bg-blue-600/10 text-blue-600 py-1 px-3 rounded-full text-sm transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="skill-card-3 about-card rounded-xl p-6 hover:-translate-y-1 transition-all md:col-span-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    AI Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {mlSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="skill-tag bg-blue-600/10 text-blue-600 py-1 px-3 rounded-full text-sm transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="edu-card about-card p-6 text-gray-800 rounded-xl border-gray-200 border hover:-translate-y-1 transition-all bg-gray-100/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Pre-final year B.Tech Student</strong> - SRM
                    University (2022-2026)
                  </li>
                  <li>
                    Relevant Coursework: Data Structures, Web Development,
                    Artificial Intelligence, Machine Learning, Natural Language
                    Processing, Cloud Computing...
                  </li>
                </ul>
              </div>
              <div className="exp-card about-card p-6 rounded-xl border-gray-200 border hover:-translate-y-1 transition-all bg-gray-100/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  💼 Experience
                </h3>
                <div className="space-y-4 text-gray-800">
                  <div>
                    <h4 className="font-semibold">
                      Intern at Palai Social Welfare Society
                    </h4>
                    <p>
                      Developed a full-stack online marketplace for local farmers.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Attended International Exchange Program in Malaysia (2023)
                    </h4>
                    <p>
                      Experienced diverse work experiences and visited government
                      bodies and MNCs to gain insights into global technology and
                      business ecosystems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};