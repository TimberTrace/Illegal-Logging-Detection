import { Camera, Database, BarChart3, Bell, Activity, MapPin } from "lucide-react"

export function SolutionSection() {
  return (
    <section id="solution" className="py-20 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">Our Solution</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance mb-6">
              See every vehicle, know every trip
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We put smart cameras at forest entry points. Our AI reads license plates and logs every vehicle - trucks,
              tractors, cars. You get a complete record of who goes in and out.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Camera, label: "AI Cameras" },
                { icon: Database, label: "All Data Logged" },
                { icon: BarChart3, label: "Live Dashboard" },
                { icon: Bell, label: "Get Alerts" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-card-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-2xl border border-border p-6 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">TimberTrace Dashboard</span>
              </div>

              <div className="relative h-40 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 rounded-xl mb-4 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <MapPin className="h-8 w-8 text-primary animate-pulse" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                </div>
                <div className="absolute top-6 left-8 w-2 h-2 bg-primary rounded-full" />
                <div className="absolute top-12 right-12 w-2 h-2 bg-primary rounded-full" />
                <div className="absolute bottom-8 left-16 w-2 h-2 bg-accent rounded-full" />
                <div className="absolute bottom-12 right-8 w-2 h-2 bg-primary rounded-full" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-secondary rounded-xl text-center">
                  <p className="text-xs text-muted-foreground mb-1">Cameras</p>
                  <p className="text-xl font-bold text-foreground">4</p>
                </div>
                <div className="p-3 bg-secondary rounded-xl text-center">
                  <p className="text-xs text-muted-foreground mb-1">Today</p>
                  <p className="text-xl font-bold text-accent">12</p>
                </div>
                <div className="p-3 bg-secondary rounded-xl text-center">
                  <p className="text-xs text-muted-foreground mb-1">Status</p>
                  <p className="text-xl font-bold text-primary">Live</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl border border-border p-4 shadow-lg hidden lg:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Activity className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-card-foreground">Truck Logged</p>
                <p className="text-xs text-muted-foreground">Entry Point A • Just now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
