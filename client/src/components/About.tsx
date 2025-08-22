export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary-500">Me</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Driven by curiosity and a passion for problem-solving, I focus on
            backend development and AI to craft solutions that are both
            efficient and impactful. My work revolves around Python, databases,
            and cloud technologies, where I enjoy transforming complex
            challenges into reliable systems. I believe in writing clean,
            maintainable code that powers meaningful applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              Professional Profile
            </h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              I am a Computer Science student with expertise in backend
              development, Python programming, and artificial intelligence.
              Skilled in designing APIs, working with databases, and integrating
              scalable backend systems, I aim to deliver robust solutions that
              solve real-world challenges. With experience in cloud platforms,
              DevOps tools, and machine learning frameworks, I am dedicated to
              continuous growth and applying technology to create impactful
              applications.
            </p>
          </div>

          <div className="relative">
            <img
              src="/images/about.webp"
              alt="Modern tech workspace"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
