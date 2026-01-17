import { Camera, ScanLine, Brain, Cloud } from "lucide-react"

export function TechnologySection() {
  return (
    <section id="technology" className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary-foreground/70 text-sm font-medium tracking-wide uppercase mb-4">The Tech</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-balance mb-6">
            Smart Cameras + AI
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Our cameras watch forest entry points and use AI to read every license plate.
          </p>
        </div>

        <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-3xl p-8 lg:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mb-6">
                <Camera className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4">How the cameras work</h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                We place weatherproof cameras at the roads going into your forest. When a vehicle passes, the camera
                takes a photo automatically.
              </p>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Our AI then reads the license plate from the image and logs the time, date, and vehicle type. All this
                data goes to your dashboard.
              </p>
              <p className="text-primary-foreground/80 leading-relaxed">
                You can see exactly which trucks entered, when they came, and when they left. This gives you a clear
                record for compliance.
              </p>
            </div>

            <div className="bg-primary-foreground/5 rounded-2xl p-6 border border-primary-foreground/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-sm text-primary-foreground/60">Live Feed - Entry Point A</span>
              </div>
              <div className="aspect-video bg-primary-foreground/10 rounded-xl relative overflow-hidden mb-4">
                <img
                  src="/logging-truck-entering-forest-road-camera-view.jpg"
                  alt="Camera view of logging truck"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="border-2 border-green-400 rounded-lg w-48 h-28 relative">
                    <span className="absolute -top-6 left-0 text-xs bg-green-500 text-white px-2 py-1 rounded">
                      Vehicle Detected
                    </span>
                    <span className="absolute -bottom-6 left-0 text-xs bg-primary-foreground/20 text-primary-foreground px-2 py-1 rounded">
                      Plate: MT-2847-K
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-primary-foreground/10 rounded-lg p-3">
                  <p className="text-xl font-semibold">18</p>
                  <p className="text-xs text-primary-foreground/60">Vehicles Today</p>
                </div>
                <div className="bg-primary-foreground/10 rounded-lg p-3">
                  <p className="text-xl font-semibold">24/7</p>
                  <p className="text-xs text-primary-foreground/60">Always On</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20">
            <ScanLine className="h-7 w-7 text-primary-foreground mb-4" />
            <h4 className="font-semibold mb-2">Reads Plates</h4>
            <p className="text-sm text-primary-foreground/70">
              Works in rain, fog, and at night. Reads dirty or damaged plates too.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20">
            <Brain className="h-7 w-7 text-primary-foreground mb-4" />
            <h4 className="font-semibold mb-2">Knows Vehicle Types</h4>
            <p className="text-sm text-primary-foreground/70">
              Can tell the difference between a car, truck, or tractor.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20">
            <Camera className="h-7 w-7 text-primary-foreground mb-4" />
            <h4 className="font-semibold mb-2">Weatherproof</h4>
            <p className="text-sm text-primary-foreground/70">
              Built for outdoor use. Alerts you if something blocks the view.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20">
            <Cloud className="h-7 w-7 text-primary-foreground mb-4" />
            <h4 className="font-semibold mb-2">Cloud Storage</h4>
            <p className="text-sm text-primary-foreground/70">All photos and data saved securely online for audits.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
