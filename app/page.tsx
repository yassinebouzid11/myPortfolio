import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 gap-8">
      <div className="space-y-4">
        <h1 className="text-5xl sm:text-6xl font-bold text-balance">
          Hi, I'm Yassine
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          I'm a passionate Software Engineer specializing in web development and
          artificial intelligence. I love building modern, scalable apps.
        </p>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
          Driven by curiosity and innovation, I enjoy turning complex problems
          into elegant and efficient solutions through clean code and creative
          thinking.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Link
          href="/projects"
          className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          View My Work
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
