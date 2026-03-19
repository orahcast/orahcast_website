"use client";

const PROJECTS = [
  {
    id: "nest-africa-travels",
    title: "Nest Africa Travels Ltd",
    description:
      "Rwandan-based travel company crafting unforgettable experiences across Rwanda's landscapes, culture, and communities.",
    href: "https://www.nestafricatravels.com/",
    image: "/projects/nest-africa.png",
  },
  {
    id: "sme-predictor",
    title: "SME Predictor",
    description:
      "AI-powered platform predicting SME success for Rwandan businesses — 93.5% accuracy, real-time risk and growth analysis.",
    href: "",
    image: "/projects/sme-predictor.png",
  },
  {
    id: "echo-lifestyle",
    title: "Echo Lifestyle App",
    description:
      "Habit-forming wellness app built to help users track, build, and sustain healthy daily routines.",
    href: "",
    image: "",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{ background: "#f0f4f8", paddingTop: "6rem", paddingBottom: "6rem" }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-10">

        {/* ── Centered Heading ── */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Featured Projects
          </h2>

          {/* Blue underline accent */}
          <div
            className="mx-auto mb-6 rounded-full"
            style={{ width: "56px", height: "4px", background: "#1313ec" }}
          />

          <p className="text-neutral-500 max-w-xl mx-auto text-base leading-relaxed font-body">
            Explore how we deliver high-impact digital solutions for businesses
            and organisations across Africa.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: {
    id: string;
    title: string;
    description: string;
    href: string;
    image: string;
  };
}) {
  const handleClick = () => {
    if (project.href) window.open(project.href, "_blank");
  };

  return (
    <article
      className="flex flex-col overflow-hidden rounded-2xl group transition-all duration-300"
      style={{
        background: "#ffffff",
        boxShadow: "0 2px 16px 0 rgba(0,0,0,0.07)",
        cursor: project.href ? "pointer" : "default",
      }}
      onClick={handleClick}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 36px 0 rgba(0,0,0,0.13)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 2px 16px 0 rgba(0,0,0,0.07)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* ── Image ── */}
      <div
        className="w-full overflow-hidden"
        style={{ height: "210px", background: "#e2e8f0" }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          /* Placeholder when no image */
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #e0e7ff, #f0fdf4)" }}
          >
            <span
              className="text-5xl opacity-20 select-none"
              style={{ color: "#1313ec" }}
            >
              ◻
            </span>
          </div>
        )}
      </div>

      {/* ── Text ── */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-neutral-500 font-body leading-relaxed flex-1">
          {project.description}
        </p>

        {project.href && (
          <div className="mt-5 pt-4" style={{ borderTop: "1px solid #f1f5f9" }}>
            <span
              className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors duration-200"
              style={{ color: "#1313ec" }}
            >
              Visit site
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
