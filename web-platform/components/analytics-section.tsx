import { TrendingUp, FileText, BarChart, Clock } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Traffic Patterns",
    description: "See when trucks come and go, and spot unusual activity.",
  },
  {
    icon: BarChart,
    title: "Volume Tracking",
    description: "Track how much timber moves through each entry point.",
  },
  {
    icon: Clock,
    title: "Time Stamps",
    description: "Every vehicle logged with exact date and time.",
  },
  {
    icon: FileText,
    title: "Easy Reports",
    description: "Download reports ready for regulators and audits.",
  },
]

export function AnalyticsSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-xl border border-border overflow-hidden shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-medium text-foreground">Weekly Vehicle Activity</h3>
                <span className="text-xs text-muted-foreground">Last 7 days</span>
              </div>

              {/* Chart visualization */}
              <div className="h-40 flex items-end justify-between gap-3 mb-6">
                {[
                  { day: "Mon", height: 60 },
                  { day: "Tue", height: 75 },
                  { day: "Wed", height: 45 },
                  { day: "Thu", height: 80 },
                  { day: "Fri", height: 90 },
                  { day: "Sat", height: 30 },
                  { day: "Sun", height: 15 },
                ].map((item, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-primary/20 rounded-t transition-all hover:bg-primary/40"
                      style={{ height: `${item.height}%` }}
                    />
                    <span className="text-xs text-muted-foreground">{item.day}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground">Vehicles</p>
                  <p className="text-lg font-semibold text-foreground">89</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Logged</p>
                  <p className="text-lg font-semibold text-primary">89</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Avg/Day</p>
                  <p className="text-lg font-semibold text-foreground">13</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">Analytics</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance mb-6">
              See everything at a glance
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Simple dashboards that show you all vehicle activity across your forest sites.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
