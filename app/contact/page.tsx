"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check } from "lucide-react"

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false)
  const email = "bouzidyassine08@gmail.com"

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <section className="max-w-5xl mx-auto space-y-12 px-6 py-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Get in Touch</h2>
        <p className="text-muted-foreground text-lg">
          Feel free to reach out if you'd like to collaborate or just say hi.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Email Card */}
        <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center space-y-4 hover:border-accent transition-colors group">
          <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
            <Mail className="w-8 h-8 text-accent" />
          </div>
          <div className="space-y-1 w-full">
            <h3 className="text-lg font-semibold">Email</h3>
            <div className="flex gap-2  items-center ">
            <a
              href="mailto:bouzidyassine08@gmail.com"
              className="text-accent hover:underline text-sm font-medium block break-all"
            >
              {email}
            </a>
            <button
              onClick={copyEmail}
              className="flex items-center cursor-pointer gap-2  px-2 py-2 text-sm bg-accent/10 hover:bg-accent/20 text-accent rounded-md transition-colors"
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
        </div>

        {/* Phone Card */}
        <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center space-y-4 hover:border-accent transition-colors group">
          <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
            <Phone className="w-8 h-8 text-accent" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Phone</h3>
            <a
              href="tel:+21641830813"
              className="text-accent hover:underline text-sm font-medium block"
            >
              +216 41 830 813
            </a>
          </div>
        </div>

        {/* Location Card */}
        <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center space-y-4 hover:border-accent transition-colors group">
          <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
            <MapPin className="w-8 h-8 text-accent" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Location</h3>
            <p className="text-accent text-sm font-medium">
              Bekalta – Monastir<br />Tunisia
            </p>
          </div>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="pt-8">
        <h3 className="text-2xl font-semibold text-center mb-6">Connect With Me</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* LinkedIn Card */}
          <a
            href="https://linkedin.com/in/yassine-bouzid-929221253"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border rounded-lg p-6 flex items-center gap-4 hover:border-accent transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
              <Linkedin className="w-6 h-6 text-accent" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold mb-1">LinkedIn</h4>
              <p className="text-sm text-muted-foreground">Connect professionally</p>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/yassinebouzid11"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border rounded-lg p-6 flex items-center gap-4 hover:border-accent transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
              <Github className="w-6 h-6 text-accent" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold mb-1">GitHub</h4>
              <p className="text-sm text-muted-foreground">Check out my code</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}


// "use client"

// import { useState } from "react"
// import { Copy, Check } from "lucide-react"

// export default function Contact() {
//   const [emailCopied, setEmailCopied] = useState(false)
//   const email = "bouzidyassine08@gmail.com"

//   const copyEmail = () => {
//     navigator.clipboard.writeText(email)
//     setEmailCopied(true)
//     setTimeout(() => setEmailCopied(false), 2000)
//   }

//   return (
//     <section className="max-w-4xl mx-auto space-y-12 px-6 py-12">
//       <div className="text-center space-y-4">
//         <h2 className="text-4xl font-bold">Get in Touch</h2>
//         <p className="text-muted-foreground text-lg">
//           Feel free to reach out if you'd like to collaborate or just say hi.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-16 text-center">
//         <div className="space-y-10">
//           <div>
//             <h3 className="text-xl font-semibold mb-2">Email</h3>
//             <div className="flex ml-15 items-center gap-2">
//               <a
//                 href="mailto:bouzidyassine08@gmail.com"
//                 className="text-accent hover:underline text-lg font-medium cursor-pointer"
//               >
//                 bouzidyassine08@gmail.com
//               </a>
//               <button
//                 onClick={copyEmail}
//                 className="flex items-center cursor-pointer gap-2 px-3 py-1.5 text-sm bg-accent/10 hover:bg-accent/20 text-accent rounded-md transition-colors"
//               >
//                 {emailCopied ? (
//                   <>
//                     <Check size={16} />
//                   </>
//                 ) : (
//                   <>
//                     <Copy size={16} />
//                   </>
//                 )}
//               </button>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2">Location</h3>
//             <p className="text-accent font-medium">
//               Bekalta – Monastir - Tunisia
//             </p>
//           </div>
//         </div>

//         <div className="space-y-10">
//           <div>
//             <h3 className="text-xl font-semibold mb-2">Connect</h3>
//             <div className="flex justify-center space-x-4">
//               <a
//                 href="https://linkedin.com/in/yassine-bouzid-929221253"
//                 className="text-accent hover:underline font-medium cursor-pointer"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 LinkedIn
//               </a>
//               <a
//                 href="https://github.com/yassinebouzid11"
//                 className="text-accent hover:underline font-medium cursor-pointer"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2">Phone</h3>
//             <a
//               href="tel:+21641830813"
//               className="text-accent font-medium hover:underline cursor-pointer inline-block"
//             >
//               +216 41 830 813
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }