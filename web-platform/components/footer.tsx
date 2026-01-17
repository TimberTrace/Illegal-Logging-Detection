import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  product: [
    { label: "Solution", href: "#solution" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Technology", href: "#technology" },
    { label: "Analytics", href: "#analytics" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "EUDR Guide", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "API", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/gemini-generated-image-4o4s0d4o4s0d4o4s-removebg-preview-20-281-29.png"
              alt="TimberTrace"
              width={220}
              height={73}
              className="h-20 w-auto brightness-0 invert"
            />
          </Link>

          <p className="text-base text-background/70 text-center max-w-md">
            AI-powered forest monitoring for legal and sustainable timber sourcing.
          </p>

          <div className="flex gap-8 text-sm text-background/60">
            <Link href="#problem" className="hover:text-background transition-colors">
              Problem
            </Link>
            <Link href="#solution" className="hover:text-background transition-colors">
              Solution
            </Link>
            <Link href="#technology" className="hover:text-background transition-colors">
              Technology
            </Link>
            <Link href="#audience" className="hover:text-background transition-colors">
              Who It's For
            </Link>
          </div>

          <div className="w-full pt-8 border-t border-background/20 text-center">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} TimberTrace. Protecting forests with technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
