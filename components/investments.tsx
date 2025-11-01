"use client"

import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"
import { TrendingUp, PieChart, DollarSign, Clock } from "lucide-react"

export default function Investments() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  const portfolioItems = [
    { name: "Small Cap Funds", icon: TrendingUp },
    { name: "Mid Cap Funds", icon: Clock },
    { name: "Large Cap Funds", icon: DollarSign },
    { name: "Gold Funds", icon: TrendingUp },
    { name: "Nifty Index Funds", icon: PieChart },
    { name: "Foreign Funds", icon: DollarSign },
  ]

  return (
    <section
      id="investments"
      ref={ref}
      className={`py-20 px-4 transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Financial Planning & Investments
          </h2>
          <p className="text-lg text-muted-foreground">Building wealth through consistent, disciplined investing</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Monthly SIP Card */}
            <div className="border border-border/50 rounded-2xl p-8 bg-background/50 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-emerald-500/20">
                  <DollarSign className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Monthly SIP Investment</h3>
                  <p className="text-3xl font-bold text-purple-400">₹6,000</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Diversified portfolio with systematic investment plan across multiple asset classes to achieve long-term
                financial goals and build sustainable wealth.
              </p>
            </div>

            {/* Portfolio Allocation */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Portfolio Allocation</h3>
              <div className="grid grid-cols-2 gap-4">
                {portfolioItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={index}
                      className="border border-border/50 rounded-xl p-4 bg-background/30 backdrop-blur-sm hover:border-purple-500/50 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-cyan-400 mb-2" />
                      <p className="font-medium">{item.name}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Quote Card */}
          <div className="border border-border/50 rounded-2xl p-8 md:p-12 bg-gradient-to-br from-purple-950/20 to-blue-950/20 backdrop-blur-sm">
            <div className="text-7xl text-purple-400/40 mb-6 font-serif">"</div>
            <blockquote className="text-2xl md:text-3xl font-bold mb-8 leading-relaxed">
              "Invest early, stay consistent — time in the market beats timing the market."
            </blockquote>
            <p className="text-muted-foreground leading-relaxed">
              My approach to investing emphasizes the power of compound growth through regular, disciplined investments.
              Rather than trying to predict market movements, I focus on staying invested for the long term and letting
              time work in my favor.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
