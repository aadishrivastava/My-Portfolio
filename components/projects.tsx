"use client"

import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  const projects = [
    {
      title: "Vivid Lodging",
      description: "Full Stack hotel booking app with authentication, map integration, and image storage",
      tech: ["EJS", "Express.js", "MongoDB", "Passport.js", "Mapbox", "Cloudinary"],
      github: "https://github.com/aadishrivastava/vivid-lodging",
      live: "https://vivid-lodging.onrender.com/",
    },
    {
      title: "Task Management App",
      description: "Full stack task manager with React, Redux, JWT authentication, and secure backend",
      tech: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/aadishrivastava/task-manager",
      live: "https://your-personal-task-manager.netlify.app/",
    },
    {
      title: "Movie Full Stack App",
      description: "Full stack movie application built with React and Spring Boot",
      tech: ["React", "Spring Boot", "Java", "REST API"],
      github: "https://github.com/aadishrivastava/movie-fullstack",
      live: null,
    },
    {
      title: "Happy Birthday Card",
      description: "Animated frontend birthday card with smooth animations",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/aadishrivastava/Happy-Birthday-Card",
      live: "https://hbd-page.netlify.app/",
    },
    {
      title: "Simon Says Game",
      description: "Interactive memory game with progressive difficulty",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/aadishrivastava/Simon-Says-Game",
      live: "https://beginner-game-simon-says.netlify.app/",
    },
    {
      title: "MyInventory",
      description: "Backend inventory management API with CRUD operations",
      tech: ["Node.js", "Express.js", "MongoDB", "REST API"],
      github: "https://github.com/aadishrivastava/Mine-Inventory",
      live: null,
    },
    {
      title: "Weather App",
      description: "Real-time weather data application with API integration",
      tech: ["HTML", "CSS", "JavaScript", "Weather API"],
      github: "https://github.com/aadishrivastava/weather-app",
      live: null,
    },
  ]

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 px-4 transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 bg-clip-text text-transparent [text-shadow:0_0_30px_rgba(168,85,247,0.4),0_0_60px_rgba(168,85,247,0.2)]">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3),0_0_30px_rgba(168,85,247,0.2),0_0_45px_rgba(168,85,247,0.1)] flex flex-col h-[380px]"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded bg-accent/20 text-accent">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                {project.live && (
                  <Button size="sm" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
