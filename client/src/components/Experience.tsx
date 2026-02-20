export default function Experience() {
  const eligenceTechnologies = [
    "Flutter",
    "FastAPI",
    "MongoDB",
    "Python",
    "Flask",
    "JWT Authentication",
    "AI/LLM Integration",
    "Legal-BERT",
    "Hugging Face",
    "OCR (Tesseract)",
    "REST API",
    "GridFS",
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

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Eligence Internship */}
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-700 card-hover">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2">
                  Software Engineering Intern
                </h3>
                <p className="text-primary-500 font-semibold text-lg mb-1">
                  Full-Stack & AI Integration
                </p>
                <p className="text-slate-300 font-medium mb-2">
                  Eligence, National Science and Technology Park (NSTP)
                </p>
                <p className="text-slate-400 mb-4">
                  Jul 2025 – Sep 2025 | Islamabad, Pakistan
                </p>
              </div>
              <div className="shrink-0">
                <span className="bg-accent-green/20 text-accent-green px-3 py-1 rounded-full text-sm font-medium">
                  Completed Internship
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {/* ODR Platform Project */}
              <div>
                <h4 className="text-lg font-bold text-slate-100 mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 text-primary-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  ODR (Online Dispute Resolution) Platform
                </h4>
                <div className="ml-7 space-y-2">
                  <p className="text-slate-300">
                    <span className="font-semibold text-slate-200">
                      Technologies:
                    </span>{" "}
                    Flutter (web/mobile), FastAPI (Python), MongoDB with GridFS,
                    JWT authentication, AI with Legal-BERT embeddings and
                    Hugging Face Inference Router, OCR (Tesseract)
                  </p>
                  <p className="text-slate-300">
                    <span className="font-semibold text-slate-200">
                      Contributions:
                    </span>{" "}
                    Developed authentication and session flows, case creation,
                    and secure file upload workflows; integrated AI-driven
                    settlement suggestions; connected Flutter frontend with REST
                    APIs.
                  </p>
                  <p className="text-accent-green">
                    <span className="font-semibold">Outcome:</span> Delivered an
                    end-to-end platform enabling users to create cases, upload
                    documents, and receive AI-assisted settlement
                    recommendations.
                  </p>
                </div>
              </div>

              {/* Legal Chatbot Project */}
              <div>
                <h4 className="text-lg font-bold text-slate-100 mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 text-accent-purple mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Legal Chatbot System
                </h4>
                <div className="ml-7 space-y-2">
                  <p className="text-slate-300">
                    <span className="font-semibold text-slate-200">
                      Technologies:
                    </span>{" "}
                    Python, Flask backend, requests library, Ollama (Mistral
                    model), CLI client
                  </p>
                  <p className="text-slate-300">
                    <span className="font-semibold text-slate-200">
                      Contributions:
                    </span>{" "}
                    Built Flask APIs for chatbot communication; implemented
                    client-server-LLM integration; added error handling and
                    logging.
                  </p>
                  <p className="text-accent-green">
                    <span className="font-semibold">Outcome:</span> Delivered a
                    reliable chatbot capable of answering legal contract
                    questions via a simple CLI interface.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-700">
              <h4 className="text-sm font-semibold text-slate-400 mb-3">
                TECHNOLOGIES & SKILLS
              </h4>
              <div className="flex flex-wrap gap-2">
                {eligenceTechnologies.map((tech, index) => (
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

          {/* AIyin Inc Internship */}
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-700 card-hover">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2">
                  AI & Backend Development Intern
                </h3>
                <p className="text-slate-300 font-medium mb-2">AIyin Inc</p>
                <p className="text-slate-400 mb-4">
                  Jul 2024 – Jul 2024 | Remote
                </p>
              </div>
              <div className="shrink-0">
                <span className="bg-accent-green/20 text-accent-green px-3 py-1 rounded-full text-sm font-medium">
                  Completed Internship
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary-500 mt-1 mr-3 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-slate-300">
                  Contributed to the development and testing of RESTful APIs
                  using FastAPI, supporting data-driven and AI-enabled
                  application features.
                </p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-accent-green mt-1 mr-3 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-slate-300">
                  Assisted in AI model integration and inference workflows,
                  ensuring smooth communication between backend services and
                  intelligent components.
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
                  Collaborated with team members on debugging, performance
                  improvements, and maintaining clean, reliable code.
                </p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary-400 mt-1 mr-3 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-slate-300">
                  Participated in requirement analysis, documentation, and Agile
                  development practices within a collaborative team setting.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-700">
              <h4 className="text-sm font-semibold text-slate-400 mb-3">
                KEY TECHNOLOGIES
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge px-3 py-1 rounded-full text-sm text-primary-400">
                  Python
                </span>
                <span className="tech-badge px-3 py-1 rounded-full text-sm text-accent-green">
                  FastAPI
                </span>
                <span className="tech-badge px-3 py-1 rounded-full text-sm text-accent-purple">
                  REST API
                </span>
                <span className="tech-badge px-3 py-1 rounded-full text-sm text-primary-400">
                  AI Integration
                </span>
                <span className="tech-badge px-3 py-1 rounded-full text-sm text-accent-green">
                  Backend Development
                </span>
                <span className="tech-badge px-3 py-1 rounded-full text-sm text-accent-purple">
                  Agile
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
