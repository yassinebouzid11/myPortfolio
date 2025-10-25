

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto space-y-12 px-6 py-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Get in Touch</h2>
        <p className="text-gray-400 text-lg">
          Feel free to reach out if you'd like to collaborate or just say hi.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 text-center ">
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a
              href="mailto:bouzidyassine08@gmail.com"
              className="text-accent hover:underline text-lg font-medium"
            >
              bouzidyassine08@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-accent font-medium">
              Bekalta – Monastir - Tunisia
            </p>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold mb-2">Connect</h3>
            <div className="flex justify-center  space-x-4">
              <a
                href="https://linkedin.com/in/yassine-bouzid-929221253"
                className="text-accent hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/yassinebouzid11"
                className="text-accent hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-accent font-medium">+216 41 830 813</p>
          </div>
        </div>
      </div>
    </section>
  );
}
