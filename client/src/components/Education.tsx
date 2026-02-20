export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education <span className="text-primary-500">Journey</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Building a strong foundation in computer science and technology
            through rigorous academic pursuit.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-500"></div>

          <div className="space-y-12">
            {/* University Education */}
            <div className="relative flex items-center justify-between">
              <div className="flex-1 pr-8 text-right">
                <div className="bg-slate-800 p-6 rounded-lg card-hover">
                  <h3 className="text-xl font-bold text-slate-100 mb-2">
                    BS in Computer Science
                  </h3>
                  <p className="text-primary-500 font-semibold mb-2">
                    National University of Sciences & Technology
                  </p>
                  <p className="text-slate-400 mb-4">
                    2022 - 2026 | Islamabad, Pakistan
                  </p>
                  <div className="flex flex-wrap gap-2 justify-end">
                    <span className="tech-badge px-3 py-1 rounded-full text-sm text-primary-400">
                      Computer Science
                    </span>
                    <span className="tech-badge px-3 py-1 rounded-full text-sm text-accent-green">
                      Software Engineering
                    </span>
                    <span className="tech-badge px-3 py-1 rounded-full text-sm text-accent-purple">
                      AI & ML
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 w-4 h-4 bg-primary-500 rounded-full border-4 border-slate-900"></div>

              <div className="flex-1 pl-8"></div>
            </div>

            {/* A-Levels */}
            <div className="relative flex items-center justify-between">
              <div className="flex-1 pr-8"></div>

              <div className="relative z-10 w-4 h-4 bg-accent-green rounded-full border-4 border-slate-900"></div>

              <div className="flex-1 pl-8">
                <div className="bg-slate-800 p-6 rounded-lg card-hover">
                  <h3 className="text-xl font-bold text-slate-100 mb-2">
                    Intermediate / A-Levels
                  </h3>
                  <p className="text-accent-green font-semibold mb-2">
                    Completed 2021
                  </p>
                  <p className="text-slate-400">
                    Foundation in Mathematics, Physics, and Computer Science
                  </p>
                </div>
              </div>
            </div>

            {/* O-Levels */}
            <div className="relative flex items-center justify-between">
              <div className="flex-1 pr-8 text-right">
                <div className="bg-slate-800 p-6 rounded-lg card-hover">
                  <h3 className="text-xl font-bold text-slate-100 mb-2">
                    Matric / O-Levels
                  </h3>
                  <p className="text-accent-purple font-semibold mb-2">
                    Completed 2019
                  </p>
                  <p className="text-slate-400">
                    Strong foundation in core academic subjects
                  </p>
                </div>
              </div>

              <div className="relative z-10 w-4 h-4 bg-accent-purple rounded-full border-4 border-slate-900"></div>

              <div className="flex-1 pl-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
