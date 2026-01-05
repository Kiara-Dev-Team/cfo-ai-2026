import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-background p-6">
      <div className="flex w-full max-w-sm flex-col items-center justify-center flex-1 gap-12">
        {/* Logo and Brand */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
              <Sparkles className="h-7 w-7 text-primary-foreground" />
            </div>
            <div className="flex flex-col items-start">
              <h1 className="text-3xl font-bold tracking-tight text-foreground">CFO.ai</h1>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-xs">Your AI-powered financial assistant</p>
        </div>

        {/* CTA Button */}
        <Link href="/auth" className="w-full">
          <Button size="lg" className="w-full h-14 text-lg font-semibold">
            Start
          </Button>
        </Link>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="font-medium">CFO, AI</span>
      </div>
    </div>
  )
}
