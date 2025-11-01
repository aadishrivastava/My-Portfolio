"use client"

import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  const experiences = [
    {
      title: "Branch Coordinator",
      company: "Training & Placement Cell, RGPV",
      period: "Jul 2023 – Present",
      location: "Bhopal, India",
      responsibilities: [
        "Organized and executed placement drives and training programs",
        "Coordinated with 5+ companies and managed recruitment data",
        "Streamlined scheduling and communication with automated workflows",
      ],
    },
    {
      title: "Digital Marketing Intern",
      company: "Yhills",
      period: "Mar 2023 – May 2023",
      location: "Remote",
      responsibilities: [
        "Assisted in digital marketing campaigns",
        "Analyzed marketing metrics and performance",
        "Created content for social media platforms",
      ],
    },
  ]

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-20 px-4 transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent [text-shadow:0_0_30px_rgba(168,85,247,0.4),0_0_60px_rgba(168,85,247,0.2)]">
          Experiences
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.5),0_0_40px_rgba(139,92,246,0.3)] hover:border-purple-500/50"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/20">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-primary mb-2">{exp.company}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span>{exp.period}</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
