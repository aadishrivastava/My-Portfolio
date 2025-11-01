"use client"

import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"
import { GraduationCap, School } from "lucide-react"

export default function Education() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  const education = [
    {
      icon: GraduationCap,
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "UIT RGPV Bhopal",
      period: "2022 - 2026",
      grade: "CGPA: 7.74",
    },
    {
      icon: School,
      degree: "12th Standard",
      institution: "JNV Badwara",
      period: "2022",
      grade: "87.2%",
    },
    {
      icon: School,
      degree: "10th Standard",
      institution: "JNV Badwara",
      period: "2020",
      grade: "88.4%",
    },
  ]

  return (
    <section
      id="education"
      ref={ref}
      className={`py-20 px-4 transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 via-purple-500/30 to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {education.map((edu, index) => {
              const Icon = edu.icon
              const isLeft = index % 2 === 0

              return (
                <div key={index} className="relative">
                  <div className="absolute left-1/2 -translate-x-1/2 top-8 w-[14px] h-[14px] rounded-full bg-purple-500 ring-4 ring-background z-10 hidden md:block" />

                  <div className={`md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}>
                    <div className="border border-white/10 bg-black/40 backdrop-blur-sm rounded-xl p-6 hover:scale-105 hover:border-purple-500/50 transition-all duration-300">
                      <div className={`flex items-start gap-4 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                        <div className="p-3 rounded-lg bg-purple-500/20 shrink-0">
                          <Icon className="w-6 h-6 text-purple-400" />
                        </div>
                        <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
                          <h3 className="text-lg font-semibold mb-2 text-white">{edu.degree}</h3>
                          <p className="text-gray-400 mb-3 text-sm">{edu.institution}</p>
                          <div className="flex flex-col gap-1 text-sm">
                            <span className="text-purple-400 font-medium">{edu.period}</span>
                            <span className="text-cyan-400 font-semibold">{edu.grade}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
