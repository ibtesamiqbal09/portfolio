export default function Achievements() {
  const achievements = [
    {
      title: "Google Data Analytics Certificate",
      organization: "Coursera",
      description: "Comprehensive program covering data analysis, visualization, and statistical methods.",
      icon: "🎯",
      color: "text-accent-green",
      bgColor: "bg-accent-green/20",
      type: "Professional Certificate"
    },
    {
      title: "Introduction to Python: Basic to Advanced",
      organization: "FAST University",
      description: "Comprehensive Python programming course from fundamentals to advanced concepts.",
      icon: "🐍",
      color: "text-primary-500",
      bgColor: "bg-primary-500/20",
      type: "University Certificate"
    },
    {
      title: "Prompt Engineering for AI Applications",
      organization: "OpenAI",
      description: "Advanced techniques for effective AI prompt design and optimization.",
      icon: "🧠",
      color: "text-accent-purple",
      bgColor: "bg-accent-purple/20",
      type: "AI Specialization"
    },
    {
      title: "Artificial Intelligence Foundations",
      organization: "LinkedIn Learning",
      description: "Fundamental concepts and applications of artificial intelligence.",
      icon: "🤖",
      color: "text-primary-500",
      bgColor: "bg-primary-500/20",
      type: "Professional Learning"
    },
    {
      title: "Deep Learning Specialization",
      organization: "DeepLearning.AI",
      description: "Comprehensive deep learning program covering neural networks and advanced architectures.",
      icon: "🧬",
      color: "text-accent-green",
      bgColor: "bg-accent-green/20",
      type: "Specialization Program"
    },
    {
      title: "Responsive Web Development Bootcamp",
      organization: "freeCodeCamp",
      description: "Intensive program covering modern web development practices and responsive design.",
      icon: "🌐",
      color: "text-accent-purple",
      bgColor: "bg-accent-purple/20",
      type: "Bootcamp Certificate"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Achievements & <span className="text-primary-500">Certifications</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Continuously enhancing my skills through professional certifications and specialized training programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 card-hover">
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{achievement.icon}</div>
                <span className={`${achievement.bgColor} ${achievement.color} px-2 py-1 rounded text-xs font-medium`}>
                  {achievement.organization}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">{achievement.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{achievement.description}</p>
              <div className="flex items-center text-sm text-slate-500">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2L3 7v11c0 .55.45 1 1 1h3v-8h6v8h3c.55 0 1-.45 1-1V7l-7-5zM8 16H6v-2h2v2zm0-4H6v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2z" clipRule="evenodd" />
                </svg>
                {achievement.type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
