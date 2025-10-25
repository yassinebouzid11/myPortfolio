import type React from "react"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Yassine Bouzid | Portfolio",
  description: "Software Engineer & AI Enthusiast",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <Navbar />
        <main className="min-h-screen px-4 sm:px-6 py-12 max-w-6xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html> 
  )
}