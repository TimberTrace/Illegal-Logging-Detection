import { FileX, Globe, Scale, TrendingDown } from "lucide-react"
import Image from "next/image"

const problems = [
  {
    icon: Globe,
    title: "Forests Are Huge",
    description: "You can't check millions of hectares by hand. Most activity goes untracked.",
  },
  {
    icon: FileX,
    title: "Paper Doesn't Work",
    description: "Companies rely on paperwork and slow audits. Hard to verify what's real.",
  },
  {
    icon: Scale,
    title: "New EU Rules",
    description: "The EUDR requires proof of where your wood comes from. No proof, no sale.",
  },
  {
    icon: TrendingDown,
    title: "No Visibility",
    description: "Without real data, you don't know what's happening in your supply chain.",
  },
]

const stats = [
  { value: "420K", label: "hectares of EU forest lost yearly" },
  { value: "Dec 2025", label: "EUDR enforcement begins" },
  { value: "400K+", label: "EU companies affected" },
]

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div>
            <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">The Problem</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance mb-6">
              No one knows what's going in or out
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Forest owners and timber buyers have no way to track vehicle movement in and out of forests. The EU's new
              deforestation rules require proof of where wood comes from - but most companies can't provide it.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="text-xl font-bold text-primary">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/deforestation-logging-stumps-damaged-forest-aerial.jpg"
              alt="Forest management"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
