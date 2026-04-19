import { Github, ExternalLink } from "lucide-react";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            My Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Featured Projects
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Color top bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />

              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-[#a0a0b8] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-white/10 text-[#c0c0d8] text-xs rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-[#a0a0b8] hover:text-white transition-colors"
                  >
                    <Github size={15} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-[#a0a0b8] hover:text-violet-400 transition-colors"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
