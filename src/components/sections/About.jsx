import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "JavaScript ES6+",
    "HTML5",
    "CSS3",
    "Svelte",
  ];
  const backendSkills = [
    "Node.js",
    "Express.js",
    "Python",
    "Flask",
    "REST APIs",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
    "AWS (EC2, S3, Lambda)",
  ];
  const mlSkills = [
    "Machine Learning",
    "Deep Learning",
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "OpenCV",
    "NLP (NLTK, spaCy)",
    "LLMs",
    "Data Analysis (Pandas, NumPy)",
    "Docker for ML",
    "MLOps (basics)",
  ];

  return (
    <>
      <style>
        {`
          @keyframes fadeInSlideUpAboutPageRevised {
            0% { opacity: 0; transform: translateY(15px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes popInAboutPageRevised {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
          }

          /* This class on an element means it starts hidden */
          .content-needs-reveal {
            opacity: 0;
          }

          /*
            IMPORTANT: This selector assumes RevealOnScroll creates a wrapper like:
            <div class="reveal visible">  <-- Wrapper by RevealOnScroll
              <h2 class="content-needs-reveal">About Me</h2> <-- Your actual content element
            </div>
            Adjust 'div.reveal.visible' if your RevealOnScroll wrapper has different classes
            or if the 'visible' class is named differently (e.g., 'revealed').
          */

          /* When the RevealOnScroll WRAPPER becomes visible, animate its direct child content */
          div.reveal.visible > .content-needs-reveal, /* For direct children like h2, cards */
          div.reveal.visible .content-needs-reveal.card-content /* For content inside a card that's also revealed */
           {
            animation-name: fadeInSlideUpAboutPageRevised;
            animation-duration: 0.7s;
            animation-timing-function: ease-out;
            animation-fill-mode: forwards;
            /* opacity: 1; Ensure it becomes visible if animation doesn't set it */
          }

          /* For skill tags inside a card whose RevealOnScroll wrapper is visible */
          div.reveal.visible .skill-tag-to-animate {
            opacity: 0; /* Skill tags also start hidden */
            animation-name: popInAboutPageRevised;
            animation-duration: 0.5s;
            animation-timing-function: ease-out;
            animation-fill-mode: forwards;
          }


          /* Interactive Styles */
          .skill-tag-interactive:hover {
            box-shadow: 0 0 12px rgba(59, 130, 246, 0.6);
            transform: scale(1.08) translateY(-1px);
          }

          .about-card-interactive {
            transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
          }
          .about-card-interactive:hover {
            transform: translateY(-6px);
            box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.2), 0 8px 10px -6px rgba(59, 130, 246, 0.2);
          }
        `}
      </style>

      <section
        id="about"
        className="pt-10 pb-16 md:pt-16 md:pb-24 bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-gray-100"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* RevealOnScroll wraps the H2. H2 itself has 'content-needs-reveal'. */}
          <RevealOnScroll threshold={0.2}>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center
                         bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400
                         dark:from-blue-500 dark:via-sky-400 dark:to-cyan-300
                         bg-clip-text text-transparent content-needs-reveal"
              // No inline animationDelay needed for the first revealed item usually
            >
              About Me
            </h2>
          </RevealOnScroll>

          <div className="max-w-4xl mx-auto">
            {/* RevealOnScroll wraps the Bio Card div. Card div has 'content-needs-reveal'. */}
            <RevealOnScroll threshold={0.2}>
              <div
                className="content-needs-reveal card-content bg-white dark:bg-slate-800/70 shadow-xl rounded-xl p-6 sm:p-8 mb-10 md:mb-12 border border-transparent dark:border-slate-700 backdrop-blur-sm"
                style={{ animationDelay: "0.1s" }} // Delay relative to its wrapper becoming visible
              >
                <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                  I am a pre-final year Computer Science student at SRM IST,
                  specializing in AI & ML. With a strong passion for
                  development, I've built diverse projects in Machine Learning,
                  Deep Learning, and scalable web applications. I enjoy creating
                  innovative solutions that blend AI with real-world
                  applications, constantly exploring new technologies to enhance
                  my expertise.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* RevealOnScroll wraps the Frontend Card. Card div has 'content-needs-reveal'. */}
              <RevealOnScroll threshold={0.2}>
                <div
                  className="about-card-interactive content-needs-reveal card-content bg-white dark:bg-slate-800/70 shadow-lg rounded-xl p-6 border border-transparent dark:border-slate-700"
                  style={{ animationDelay: "0.2s" }}
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                    Frontend Development
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((skill, index) => (
                      <span
                        key={skill}
                        className="skill-tag-interactive skill-tag-to-animate bg-blue-100 dark:bg-blue-600/30 text-blue-700 dark:text-blue-300 py-1.5 px-3 rounded-full text-sm font-medium"
                        // animationDelay for skill tags is relative to their card's RevealOnScroll wrapper becoming visible
                        style={{
                          animationDelay: `${0.2 + (index + 1) * 0.07}s`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>

              {/* Backend Card */}
              <RevealOnScroll threshold={0.2}>
                <div
                  className="about-card-interactive content-needs-reveal card-content bg-white dark:bg-slate-800/70 shadow-lg rounded-xl p-6 border border-transparent dark:border-slate-700"
                  style={{ animationDelay: "0.3s" }}
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                    Backend Development
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((skill, index) => (
                      <span
                        key={skill}
                        className="skill-tag-interactive skill-tag-to-animate bg-green-100 dark:bg-green-600/30 text-green-700 dark:text-green-300 py-1.5 px-3 rounded-full text-sm font-medium"
                        style={{
                          animationDelay: `${0.3 + (index + 1) * 0.07}s`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>

              {/* AI/ML Card */}
              <RevealOnScroll threshold={0.2}>
                <div
                  className="about-card-interactive content-needs-reveal card-content md:col-span-2 bg-white dark:bg-slate-800/70 shadow-lg rounded-xl p-6 border border-transparent dark:border-slate-700"
                  style={{ animationDelay: "0.4s" }}
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                    Artificial Intelligence & ML
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {mlSkills.map((skill, index) => (
                      <span
                        key={skill}
                        className="skill-tag-interactive skill-tag-to-animate bg-purple-100 dark:bg-purple-600/30 text-purple-700 dark:text-purple-300 py-1.5 px-3 rounded-full text-sm font-medium"
                        style={{
                          animationDelay: `${0.4 + (index + 1) * 0.07}s`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Education Card */}
            <RevealOnScroll threshold={0.2}>
              <div
                className="about-card-interactive content-needs-reveal card-content h-full bg-white dark:bg-slate-800/70 shadow-lg rounded-xl p-6 border border-transparent dark:border-slate-700 flex flex-col"
                style={{ animationDelay: "0.5s" }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  <span role="img" aria-label="Graduation Cap">
                    🎓
                  </span>{" "}
                  Education
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  <li>
                    <strong>B.Tech, Computer Science (AI & ML)</strong>
                    <br />
                    SRM IST, Tiruchirapalli (2022 - 2026)
                  </li>
                  <li>
                    Relevant Coursework: Data Structures, Algorithms, Web Dev,
                    AI, ML, NLP, Cloud Computing.
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            {/* Experience Card */}
            <RevealOnScroll threshold={0.2}>
              <div
                className="about-card-interactive content-needs-reveal card-content h-full bg-white dark:bg-slate-800/70 shadow-lg rounded-xl p-6 border border-transparent dark:border-slate-700 flex flex-col"
                style={{ animationDelay: "0.6s" }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  <span role="img" aria-label="Briefcase">
                    💼
                  </span>{" "}
                  Experience
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      Intern @ Palai Social Welfare Society
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Full-Stack Developer | Remote
                    </p>
                    <p>
                      Developed a full-stack online marketplace for local
                      farmers, enhancing community commerce.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      Exchange Program Participant, Malaysia (2023)
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">
                      International Immersion
                    </p>
                    <p>
                      Gained insights into global tech ecosystems by visiting
                      government bodies and MNCs.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
};
