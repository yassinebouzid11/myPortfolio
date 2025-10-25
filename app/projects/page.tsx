import { projects } from "@/data/projects"
import ProjectCard from "@/components/ProjectCard"

export default function Projects() {
  return (
    <section className="space-y-12">
      <h2 className="text-4xl font-bold text-center">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}
