import { Button } from "@/components/ui/button"
import { ArrowRight, Camera, Activity } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      <div className="absolute inset-0">
        <Image
          src="/aerial-view-of-dense-green-forest-with-sunlight-st.jpg"
          alt="Forest aerial view"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium mb-8">
            <Camera className="h-4 w-4" />
            AI Camera Monitoring
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight text-balance mb-6">
            Track Every <span className="text-primary">Truck</span> In Your Forest
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
            The EU loses around 420,000 hectares of forest each year. New rules (EUDR) mean companies must prove where
            their timber comes from.
          </p>

          <p className="text-base text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            TimberTrace puts AI cameras at forest entry points. We read license plates and log every vehicle that enters
            or leaves - giving you a clear record of all timber movement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-base px-8">
              See How It Works
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
            <div className="p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
              <Activity className="h-6 w-6 text-primary mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-foreground">24/7</div>
              <p className="text-xs text-muted-foreground mt-1">Monitoring</p>
            </div>
            <div className="p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
              <Camera className="h-6 w-6 text-primary mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-foreground">EUDR</div>
              <p className="text-xs text-muted-foreground mt-1">Ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
