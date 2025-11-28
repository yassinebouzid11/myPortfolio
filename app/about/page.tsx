export default function About() {
  return (
    <section className="max-w-4xl mx-auto space-y-12">
      <div>
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Motivated software engineering student with a strong foundation in full-stack development and
            problem-solving. Seeking an end-of-study internship to apply my technical expertise and teamwork skills in
            real-world projects. Passionate about learning, innovation, and contributing to impactful solutions.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Education</h3>
        <div className="space-y-4">
          <div className="border-l-2 border-accent pl-4">
            <h4 className="font-semibold text-foreground">Software Engineering</h4>
            <p className="text-sm text-muted-foreground">EPI SUP • 2023 – Ongoing</p>
          </div>
          <div className="border-l-2 border-accent pl-4">
            <h4 className="font-semibold text-foreground">Electronics Engineering</h4>
            <p className="text-sm text-muted-foreground">ISET Sousse • 2020 – 2023</p>
          </div>
          <div className="border-l-2 border-accent pl-4">
            <h4 className="font-semibold text-foreground">Bachelor's Degree</h4>
            <p className="text-sm text-muted-foreground">High School of Bekalta • 2020</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Programming Languages</h4>
            <div className="flex flex-wrap gap-2">
              {["C", "Python", "Java", "JavaScript", "TypeScript", "PHP"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Frameworks & Libraries</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "React Native", "Express", "Spring Boot", "Next.js", "Expo"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">State Management</h4>
            <div className="flex flex-wrap gap-2">
              {["Context API", "Redux Toolkit", "Socket.IO"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">AI & Data</h4>
            <div className="flex flex-wrap gap-2">
              {["ML","LLM", "NLP","OCR","CNN", "Scikit-learn", "TensorFlow", "Keras", "Pandas", "Matplotlib"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  {skill}
                </span> 
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">DevOps & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {["Docker", "GitHub Actions"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  {skill}
                </span> 
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Testing & Automation</h4>
            <div className="flex flex-wrap gap-2">
              {["Selenium", "Cucumber", "JUnit"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  {skill}
                </span> 
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Languages</h3>
          <div className="space-y-2">
            {["English", "French", "Arabic"].map((lang) => (
              <p key={lang} className="text-muted-foreground">
                {lang}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
