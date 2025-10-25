import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  link: string
  imageUrl?: string
}

export default function ProjectCard({ id, title, description, tech, link, imageUrl }: Project) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-accent transition-colors">
      {imageUrl && (
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      )}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech &&
            tech.length > 0 &&
            tech.map((t) => (
              <span key={t} className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded font-medium">
                {t}
              </span>
            ))}
        </div>
        <Link
          href={link}
          target="_blank"
          className="inline-flex items-center text-accent hover:underline font-medium text-sm pt-2"
        >
          View Project →
        </Link>
      </div>
    </div>
  )
}
