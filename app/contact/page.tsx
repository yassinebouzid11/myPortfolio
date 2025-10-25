"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false)
  const email = "bouzidyassine08@gmail.com"

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <section className="max-w-4xl mx-auto space-y-12 px-6 py-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Get in Touch</h2>
        <p className="text-muted-foreground text-lg">
          Feel free to reach out if you'd like to collaborate or just say hi.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 text-center">
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <div className="flex ml-15 items-center gap-2">
              <a
                href="mailto:bouzidyassine08@gmail.com"
                className="text-accent hover:underline text-lg font-medium cursor-pointer"
              >
                bouzidyassine08@gmail.com
              </a>
              <button
                onClick={copyEmail}
                className="flex items-center cursor-pointer gap-2 px-3 py-1.5 text-sm bg-accent/10 hover:bg-accent/20 text-accent rounded-md transition-colors"
              >
                {emailCopied ? (
                  <>
                    <Check size={16} />
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                  </>
                )}
              </button>
            </div>
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
            <div className="flex justify-center space-x-4">
              <a
                href="https://linkedin.com/in/yassine-bouzid-929221253"
                className="text-accent hover:underline font-medium cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/yassinebouzid11"
                className="text-accent hover:underline font-medium cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <a
              href="tel:+21641830813"
              className="text-accent font-medium hover:underline cursor-pointer inline-block"
            >
              +216 41 830 813
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}