"use client"

import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"
import { Award, Code, GitBranch, Star } from "lucide-react"

export default function Achievements() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  const achievements = [
    {
      title: "HackerRank Certifications",
      description: "Earned REST API (Intermediate) and Java (Basics) certifications in problem-solving",
      icon: <Code className="w-12 h-12" />,
      iconBg: "bg-emerald-500",
      link: "https://www.hackerrank.com/certificates/fe1e5bd4e0a1",
    },
    {
      title: "Sololearn JavaScript Certificate",
      description: "Completed comprehensive JavaScript course with distinction",
      icon: <Award className="w-12 h-12" />,
      iconBg: "bg-purple-500",
      link: "https://www.sololearn.com/certificates/CC-KGBNATLP",
    },
    {
      title: "GitHub Daily Contributions",
      description: "Maintaining consistent daily contributions with practiceQue repository for Codeforces solutions",
      icon: <GitBranch className="w-12 h-12" />,
      iconBg: "bg-cyan-500",
      link: "https://github.com/aadishrivastava/practiceQue",
    },
    {
      title: "Competitive Programming",
      description: "Active participant on Codeforces (1250+ rating, top 8k) and LeetCode (1450+ rating) platforms",
      icon: <Star className="w-12 h-12" />,
      iconBg: "bg-purple-500",
      link: "https://codeforces.com/profile/aadishrivastava",
    },
  ]

  return (
    <section
      id="achievements"
      ref={ref}
      className={`py-20 px-4 transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Achievements & Certifications
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">Milestones and recognitions in my learning journey</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <a
              key={index}
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 hover:scale-105 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className={`${achievement.iconBg} rounded-xl p-4 w-fit mb-6 text-white`}>{achievement.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">
                {achievement.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
