export default function Experience() {
  const technologies = [
    "Large Language Models",
    "NLP",
    "JavaScript",
    "HTML/CSS",
    "Backend Development",
    "AI Integration",
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-primary-500">Experience</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Gaining hands-on experience in cutting-edge technology through
            internships and real-world projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-700 card-hover">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2">
                  AI & Web Development Intern
                </h3>
                <p className="text-primary-500 font-semibold text-lg mb-2">
                  Eligient, National Science and Technology Park (NSTP)
                </p>
                <p className="text-slate-400 mb-4">
                  Jun 2025 – Sep 2025 | Islamabad, Pakistan
                </p>
              </div>
              <div className="shrink-0">
                <span className="bg-accent-green/20 text-accent-green px-3 py-1 rounded-full text-sm font-medium">
                  Completed Internship
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary-500 mt-1 mr-3 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-slate-300">
                  Worked on Large Language Model (LLM) integration for various
                  applications, gaining expertise in AI model deployment and
                  optimization.
                </p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-accent-green mt-1 mr-3 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-slate-300">
                  Developed and maintained an AI-powered chatbot for customer
                  interaction, implementing natural language processing and
                  conversational AI techniques.
                </p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-accent-purple mt-1 mr-3 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-slate-300">
                  Contributed to front-end development using HTML, CSS,
                  JavaScript, and backend technologies, creating full-stack web
                  solutions.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-700">
              <h4 className="text-sm font-semibold text-slate-400 mb-3">
                TECHNOLOGIES USED
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className={`tech-badge px-3 py-1 rounded-full text-sm ${
                      index % 3 === 0
                        ? "text-primary-400"
                        : index % 3 === 1
                          ? "text-accent-green"
                          : "text-accent-purple"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
