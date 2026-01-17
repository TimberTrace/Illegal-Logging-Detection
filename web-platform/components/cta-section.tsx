import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function CtaSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/beautiful-misty-forest-with-sunlight-green-trees-n.jpg"
          alt="Forest"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-balance mb-6 text-primary-foreground">
            Start tracking your forest today
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-10">
            EUDR enforcement starts December 2025. Get your monitoring system in place now.
          </p>

          <div className="flex justify-center">
            <Button size="lg" variant="secondary" className="text-base px-8 shadow-lg">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
