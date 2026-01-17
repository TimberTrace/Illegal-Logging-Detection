import { Factory, Users, Briefcase, Building2, TreePine, Landmark } from "lucide-react"
import Image from "next/image"

const audiences = [
  {
    icon: TreePine,
    title: "Forest Owners",
    description: "Know who's coming onto your land. Keep records of all vehicle activity for your own protection.",
    example: "Private forest owners, timber estates",
  },
  {
    icon: Factory,
    title: "Wood & Furniture Companies",
    description: "Prove your timber comes from monitored, traceable sources. Meet EUDR requirements.",
    example: "Furniture makers, flooring companies",
  },
  {
    icon: Users,
    title: "Sustainability Teams",
    description: "Get real data for ESG reports. Show stakeholders you take sourcing seriously.",
    example: "ESG teams, compliance officers",
  },
  {
    icon: Briefcase,
    title: "Supply Chain Managers",
    description: "Track timber from forest to factory. Know exactly where your wood comes from.",
    example: "Procurement teams, logistics",
  },
  {
    icon: Building2,
    title: "Government & Regulators",
    description: "Get live monitoring data instead of just paperwork. Verify compliance easily.",
    example: "Forestry departments, customs",
  },
  {
    icon: Landmark,
    title: "Banks & Investors",
    description: "Check environmental risk before lending. See real activity data from forests.",
    example: "Green finance, ESG funds",
  },
]

export function AudienceSection() {
  return (
    <section id="audience" className="py-20 lg:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image src="/forest-trees-pattern-texture-green.jpg" alt="" fill className="object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">Who It's For</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance mb-6">
            Built for the timber industry
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From forest owners to furniture makers - anyone who needs to track timber movement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <audience.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{audience.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{audience.description}</p>
              <p className="text-xs text-primary/70 font-medium">{audience.example}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-card rounded-2xl border border-border text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">The Opportunity</h3>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">€600B+</div>
              <p className="text-sm text-muted-foreground">Global timber market</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">400K+</div>
              <p className="text-sm text-muted-foreground">EU companies need EUDR compliance</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">Dec 2025</div>
              <p className="text-sm text-muted-foreground">EUDR enforcement starts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
