/**
 * ProjectsSection Component
 * 
 * Featured projects showcase section with project cards.
 * Displays company portfolio highlights.
 */

import Image from "next/image";

/**
 * Project data configuration
 * Defines featured projects to display
 */
const PROJECTS = [
  {
    id: "nova-analytics",
    title: "Nova Financial Analytics",
    category: "Fintech",
    image: "/projects/nova-analytics.jpg",
    gradient: "from-emerald-900 to-teal-800",
  },
  {
    id: "mediscan",
    title: "MediScan Diagnostic AI",
    category: "Healthcare",
    image: "/projects/mediscan.jpg",
    gradient: "from-blue-900 to-indigo-800",
  },
  {
    id: "echo-lifestyle",
    title: "Echo Lifestyle App",
    category: "Consumer",
    image: "/projects/echo-lifestyle.jpg",
    gradient: "from-gray-100 to-gray-200",
  },
] as const;

/**
 * ProjectsSection component showcasing featured work
 */
export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Showcasing our impact across industries through meaningful digital transformations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer"
            >
              {/* Background Gradient Placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}>
                {/* 
                  Project image placeholder
                  Replace with actual project images when available
                */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-lg bg-white/10 flex items-center justify-center">
                    <svg 
                      className={`w-12 h-12 ${project.id === "echo-lifestyle" ? "text-gray-400" : "text-white/50"}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className={`text-xs font-medium uppercase tracking-wider mb-2 block ${
                  project.id === "echo-lifestyle" ? "text-gray-500" : "text-white/70"
                }`}>
                  {project.category}
                </span>
                <h3 className={`text-lg font-semibold ${
                  project.id === "echo-lifestyle" ? "text-gray-800" : "text-white"
                }`}>
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
