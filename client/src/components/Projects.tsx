export default function Projects() {
  const projects = [
    {
      title: "Image Watermarking System",
      description:
        "Developed a web application using Machine Learning to detect, add, or remove watermarks from images for content protection.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Machine learning workspace",
      tags: ["Machine Learning", "Digital Image Processing", "Python"],
      type: "Recent Project",
      githubUrl:
        "https://github.com/muhammadharoon26/DIP_Image-Watermark-Adder__Remover_Semester-Project",
    },
    {
      title: "AI Chatbot",
      description:
        "Built a chatbot capable of understanding and responding to queries for customer support simulation using advanced NLP techniques.",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "AI chatbot development workspace",
      tags: ["Python", "NLP", "AI"],
      type: "Recent Project",
      githubUrl: "https://github.com/codlydev/Chatbot",
    },
    {
      title: "Online Dispute Resolver (ODR)",
      description:
        "Developed a comprehensive Online Dispute Resolution platform to facilitate efficient conflict resolution and mediation services through digital channels.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Legal tech and dispute resolution",
      tags: ["Web Development", "Full Stack", "Legal Tech"],
      type: "Web Application",
      githubUrl: "https://github.com/ibtesamiqbal09/Project",
    },
    {
      title: "File Compression Utility",
      description:
        "Implemented Huffman Coding algorithm to reduce file sizes and optimize storage usage, showcasing data structures expertise.",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Software development workspace",
      tags: ["C++", "Algorithms", "Data Structures"],
      type: "Academic Project",
      githubUrl: "https://github.com/muhammadharoon26/File-Compression-tool",
    },
    {
      title: "Language Translator Web App",
      description:
        "Created a multilingual translation app supporting multiple languages using Streamlit and Google Translate API integration.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Web development workspace",
      tags: ["Streamlit", "Google Translate API", "Python"],
      type: "Web Application",
      githubUrl: "https://github.com/codlydev/Translator",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-primary-500">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Showcasing innovative solutions that demonstrate my technical skills
            and passion for problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl overflow-hidden card-hover border border-slate-700"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`tech-badge px-3 py-1 rounded-full text-sm ${
                        tagIndex % 3 === 0
                          ? "text-primary-400"
                          : tagIndex % 3 === 1
                            ? "text-accent-green"
                            : "text-accent-purple"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    <svg
                      className="w-4 h-4 inline mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {project.type}
                  </span>
                  <div className="space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-400 transition-colors"
                      title="View on GitHub"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
