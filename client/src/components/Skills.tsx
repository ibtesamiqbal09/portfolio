import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      name: "Python",
      percentage: 90,
      frameworks: ["NumPy", "Pandas", "TensorFlow", "Scikit-learn"],
    },
    {
      name: "Web Development",
      percentage: 85,
      frameworks: ["HTML/CSS", "JavaScript", "Django", "Flask"],
    },
    {
      name: "Database & Cloud",
      percentage: 80,
      frameworks: ["MySQL", "MongoDB", "AWS", "Docker"],
    },
    {
      name: "Mobile & Version Control",
      percentage: 75,
      frameworks: ["Flutter", "Git", "GitHub", "CI/CD"],
    },
  ];

  const softSkills = [
    { name: "Problem Solving", percentage: 95 },
    { name: "Communication Skills", percentage: 90 },
    { name: "Critical Thinking", percentage: 88 },
    { name: "Project Management", percentage: 85 },
  ];

  const coursework = [
    {
      name: "Advanced Machine Learning",
      icon: "🤖",
      color: "text-primary-500",
    },
    { name: "Software Engineering", icon: "⚙️", color: "text-accent-green" },
    { name: "Cloud Computing", icon: "☁️", color: "text-accent-purple" },
    {
      name: "Database Management Systems",
      icon: "🗃️",
      color: "text-primary-500",
    },
    { name: "Computer Networks", icon: "🌐", color: "text-accent-green" },
    {
      name: "Data Structures & Algorithms",
      icon: "📊",
      color: "text-accent-purple",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800" ref={skillsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-primary-500">Skills</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Continuously expanding my technical toolkit to build innovative
            solutions across multiple domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Programming & Tools */}
          <div className="bg-slate-900 p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center">
              <svg
                className="w-6 h-6 text-primary-500 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Programming & Tools
            </h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-primary-500 font-mono text-sm">
                      {skill.percentage}%
                    </span>
                  </div>
                  {/* Percentage Bar */}
                  <div className="bg-slate-700 rounded-full h-4">
                    <div
                      className="bg-gradient-to-r from-accent-green to-primary-500 rounded-full h-4 transition-all duration-2000 ease-out"
                      style={{
                        width: isVisible ? `${skill.percentage}%` : "0%",
                        transitionDelay: `${index * 0.2}s`,
                      }}
                    ></div>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {skill.frameworks.map((framework) => (
                      <span
                        key={framework}
                        className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded"
                      >
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-slate-900 p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center">
              <svg
                className="w-6 h-6 text-accent-green mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Soft Skills
            </h3>

            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-accent-green font-mono text-sm">
                      {skill.percentage}%
                    </span>
                  </div>
                  {/* Percentage Bar */}
                  <div className="bg-slate-700 rounded-full h-4">
                    <div
                      className="bg-gradient-to-r from-accent-green to-primary-500 rounded-full h-4 transition-all duration-2000 ease-out"
                      style={{
                        width: isVisible ? `${skill.percentage}%` : "0%",
                        transitionDelay: `${index * 0.2}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Relevant Coursework */}
            <div className="mt-8 pt-8 border-t border-slate-700">
              <h4 className="text-lg font-bold text-slate-100 mb-4">
                Relevant Coursework
              </h4>
              <div className="space-y-3 text-sm">
                {coursework.map((course) => (
                  <div
                    key={course.name}
                    className="flex items-center text-slate-300"
                  >
                    <span className="text-lg mr-3">{course.icon}</span>
                    <span className={course.color}>{course.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
