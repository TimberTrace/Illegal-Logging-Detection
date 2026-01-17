import { CheckCircle } from "lucide-react"

const benefits = [
  "Know exactly which vehicles enter your forest",
  "Get timestamps for every entry and exit",
  "Download reports for EUDR compliance",
  "See patterns - who comes, how often",
  "Get alerts for unusual activity",
  "Keep records for auditors",
]

export function ComplianceSection() {
  return (
    <section id="impact" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">Why It Matters</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance mb-6">
              Real data, not paperwork
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              EUDR requires companies to prove where their timber comes from. Our cameras give you hard evidence you can
              show to auditors.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-2xl border border-border p-8 shadow-xl">
              <div className="text-center mb-8">
                <p className="text-sm font-medium text-muted-foreground mb-3">Sample Report</p>
                <div className="text-5xl font-bold text-foreground mb-2">47</div>
                <p className="text-sm text-muted-foreground">vehicles logged this week</p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Trucks</span>
                    <span className="font-semibold text-foreground">32</span>
                  </div>
                  <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: "68%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Cars/Vans</span>
                    <span className="font-semibold text-foreground">12</span>
                  </div>
                  <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: "25%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Tractors/Equipment</span>
                    <span className="font-semibold text-foreground">3</span>
                  </div>
                  <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-500"
                      style={{ width: "7%" }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-secondary/50 rounded-xl text-center">
                <p className="text-xs text-muted-foreground">Data ready for EUDR audit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
