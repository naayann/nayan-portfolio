import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { projects } from '../../data/projects'

const Projects = () => {
  return (
    <>
      <h1 className="mt-10 mb-6 text-lg md:text-xl font-bold text-text animate-fade-in animation-delay-700">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in animation-delay-700">
        {!projects ? (
          <div className="text-text/60">Loading projects...</div>
        ) : projects.map((project, i) => (
          <Link to={`/project/${i}`} key={i}>
            <div
              className="group rounded-2xl border border-border/10 bg-foreground/3 hover:bg-foreground/5 p-4 transition duration-300 hover:-translate-y-1 hover:scale-[1.01]"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-44 object-cover md:grayscale group-hover:grayscale-0 transition duration-300"
                />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between mt-4">
                <h2 className="font-semibold text-md text-text">
                  {project.title}
                </h2>

                <span className="flex items-center gap-2 text-xs text-text/60">
                  <span
                    className={`w-2 h-2 rounded-full ${project.statusColor === 'green'
                      ? 'bg-green-400'
                      : 'bg-red-400'
                      }`}
                  />
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="mt-2 text-xs md:text-sm text-text/60 leading-relaxed line-clamp-2">
                {project.desc}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map((tech, iTech) => (
                  <span
                    key={iTech}
                    className="rounded-full border border-border/15 px-3 py-1 text-[10px] md:text-xs text-text/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-5 text-sm">
                <div
                  className="flex items-center gap-1 text-xs md:text-md md:text-text/60 group-hover:text-text duration-200 hover:underline cursor-pointer"
                >
                  View Details
                  <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 send-anim" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Projects