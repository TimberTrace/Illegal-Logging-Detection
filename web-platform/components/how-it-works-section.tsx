import { Camera, ScanLine, Cpu, LayoutDashboard, FileCheck } from "lucide-react"

const steps = [
  {
    icon: Camera,
    number: "1",
    title: "Set Up Cameras",
    description: "We install cameras at forest roads and entry points.",
  },
  {
    icon: ScanLine,
    number: "2",
    title: "Capture Vehicles",
    description: "Cameras take photos of every vehicle that passes.",
  },
  {
    icon: Cpu,
    number: "3",
    title: "AI Reads Plates",
    description: "Our AI reads the license plate and logs the time.",
  },
  {
    icon: LayoutDashboard,
    number: "4",
    title: "View Dashboard",
    description: "See all activity on a simple online dashboard.",
  },
  {
    icon: FileCheck,
    number: "5",
    title: "Get Reports",
    description: "Download reports for audits and compliance.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance mb-6">
            5 simple steps
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">From setup to reports in days, not months.</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="inline-flex flex-col items-center">
                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-sm font-bold text-primary mb-3">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
