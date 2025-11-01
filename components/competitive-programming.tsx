"use client"

import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Code2, Trophy } from "lucide-react"

export default function CompetitiveProgramming() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section
      id="competitive-programming"
      ref={ref}
      className={`py-20 px-4 transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent [text-shadow:0_0_30px_rgba(59,130,246,0.4),0_0_60px_rgba(59,130,246,0.2)]">
          Competitive Programming Profiles
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          I believe in daily practice and logical thinking — coding is a sport.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Codeforces Card */}
          <div className="glass rounded-2xl p-8 hover:scale-[1.03] transition-all duration-300 animate-glow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-primary/20">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Codeforces</h3>
                <p className="text-muted-foreground">aadishrivastava13</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Rating</span>
                <span className="text-2xl font-bold text-primary">1250+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Problems Solved</span>
                <span className="text-xl font-semibold">300+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Global Rank</span>
                <span className="text-xl font-semibold text-accent">Top 8k</span>
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="https://codeforces.com/profile/aadishrivastava13" target="_blank" rel="noopener noreferrer">
                <Trophy className="w-4 h-4 mr-2" />
                View Profile
              </a>
            </Button>
          </div>

          {/* LeetCode Card */}
          <div className="glass rounded-2xl p-8 hover:scale-[1.03] transition-all duration-300 animate-glow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-accent/20">
                <Code2 className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">LeetCode</h3>
                <p className="text-muted-foreground">aadishrivastava</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Rating</span>
                <span className="text-2xl font-bold text-accent">1450+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Problems Solved</span>
                <span className="text-xl font-semibold">200+</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Solving problems daily and improving consistency.
              </p>
            </div>

            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a href="https://leetcode.com/u/aadishrivastava/" target="_blank" rel="noopener noreferrer">
                <Trophy className="w-4 h-4 mr-2" />
                View Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
