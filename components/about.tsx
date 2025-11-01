"use client"

import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"
import { Code2, Rocket, Users } from "lucide-react"

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 px-4 transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent [text-shadow:0_0_30px_rgba(59,130,246,0.4),0_0_60px_rgba(59,130,246,0.2)]">
          About Me
        </h2>
        <div className="glass rounded-2xl p-8 md:p-12">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I love building things for the web. My journey in software development started with a curiosity about how
            websites work, and it has evolved into a passion for creating elegant solutions to complex problems. I enjoy
            working across the full stack, from designing intuitive user interfaces to architecting robust backend
            systems.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Beyond coding, I'm deeply interested in financial literacy and long-term investing. I believe in continuous
            learning and staying updated with the latest technologies and industry trends.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-black/30 border border-white/10">
              <div className="w-16 h-16 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <Code2 className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Clean Code</h3>
              <p className="text-gray-400 text-sm">Writing maintainable solutions</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-black/30 border border-white/10">
              <div className="w-16 h-16 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <Rocket className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-400 text-sm">Exploring new technologies</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-black/30 border border-white/10">
              <div className="w-16 h-16 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
              <p className="text-gray-400 text-sm">Team player mindset</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
