"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-accent to-primary animate-float mx-auto flex items-center justify-center text-6xl font-bold text-primary-foreground">
              AS
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Aadi Shrivastava
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Full Stack Developer • Competitive Programmer
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            I'm a passionate Full Stack Developer and Competitive Programmer from Bhopal, India. I love building
            scalable web apps and solving algorithmic problems daily. Currently pursuing Electronics & Communication
            Engineering at UIT RGPV Bhopal (2022–2026).
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary text-primary hover:bg-primary/10"
            >
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-accent text-accent hover:bg-accent/10 bg-transparent"
            >
              <a href="/AadiFullStackResume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <Button size="icon" variant="ghost" asChild className="hover:text-primary transition-colors">
              <a href="https://github.com/aadishrivastava" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" asChild className="hover:text-primary transition-colors">
              <a href="https://linkedin.com/in/aadishrivastava" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
