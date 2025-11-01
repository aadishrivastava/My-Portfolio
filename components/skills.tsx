"use client"

import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  const skillCategories = [
    {
      category: "Languages",
      skills: [
        {
          name: "Java",
          icon: (
            <svg viewBox="0 0 384 512" className="w-16 h-16" fill="currentColor">
              <path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z" />
            </svg>
          ),
          color: "text-orange-600",
        },
        { name: "JavaScript", icon: "JS", color: "text-yellow-400", bg: "bg-yellow-400" },
        { name: "C++", icon: "C++", color: "text-blue-400" },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: "⚛️", color: "text-cyan-400" },
        { name: "HTML", icon: "HTML", color: "text-orange-500", bg: "bg-orange-500" },
        { name: "CSS", icon: "CSS", color: "text-blue-400", bg: "bg-blue-400" },
        { name: "Tailwind CSS", icon: "🎨", color: "text-cyan-400" },
        { name: "Bootstrap", icon: "B", color: "text-purple-500", bg: "bg-purple-500" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: "Node", color: "text-green-500" },
        { name: "Express.js", icon: "Ex", color: "text-gray-300" },
        { name: "RESTful APIs", icon: "🔌", color: "text-blue-400" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", icon: "🐬", color: "text-blue-400" },
        {
          name: "MongoDB",
          icon: (
            <svg viewBox="0 0 32 32" className="w-16 h-16" fill="currentColor">
              <path d="M15.9.087l.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 .21-.436.488-.436.82v3.797c-.07.14-.105.27-.105.418 0 .21.07.384.21.558.14.174.314.244.524.244h.07c.21 0 .384-.07.558-.21.174-.14.244-.314.244-.524v-3.797c0-.332-.14-.61-.436-.82-.56-.402-1.082-.854-1.57-1.342-2.988-3.085-4.47-6.797-4.4-11.12.017-1.446.244-2.876.662-4.27.697-2.282 1.673-4.392 3.12-6.292.61-.802 1.29-1.55 2.004-2.266.244-.244.453-.506.645-.802L15.9.087z" />
            </svg>
          ),
          color: "text-green-500",
        },
      ],
    },
    {
      category: "Developer Tools",
      skills: [
        { name: "VS Code", icon: "💻", color: "text-blue-400" },
        { name: "Git", icon: "Git", color: "text-orange-500" },
        {
          name: "GitHub",
          icon: (
            <svg viewBox="0 0 16 16" className="w-16 h-16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          ),
          color: "text-white",
        },
      ],
    },
    {
      category: "API Testing Tools",
      skills: [
        { name: "Postman", icon: "📮", color: "text-orange-500" },
        { name: "Insomnia", icon: "💤", color: "text-purple-500" },
        { name: "Thunder Client", icon: "⚡", color: "text-yellow-400" },
      ],
    },
  ]

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 px-4 transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="space-y-12">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold text-white mb-6">{category.category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:scale-105 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex flex-col items-center justify-center space-y-4">
                      {/* Icon */}
                      <div className="text-5xl">
                        {skill.bg ? (
                          <div
                            className={`${skill.bg} text-white font-bold text-2xl w-16 h-16 rounded-lg flex items-center justify-center`}
                          >
                            {skill.icon}
                          </div>
                        ) : typeof skill.icon === "string" ? (
                          <span className={skill.color}>{skill.icon}</span>
                        ) : (
                          <div className={skill.color}>{skill.icon}</div>
                        )}
                      </div>
                      {/* Name */}
                      <p className="text-white font-medium text-center">{skill.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
