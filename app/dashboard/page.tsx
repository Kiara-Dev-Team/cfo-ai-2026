import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database, HelpCircle, FileText, ChevronRight } from "lucide-react"
// Adding Link for navigation
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="flex items-center justify-between p-6">
          <h1 className="text-2xl font-bold text-balance">{"Let's hustle!"}</h1>
          <Button variant="ghost" size="icon">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-4">
        {/* New Data Card */}
        {/* Made card clickable with Link wrapper */}
        <Link href="/dashboard/new-data">
          <Card className="border-2 hover:border-secondary transition-colors cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <FileText className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">New data</CardTitle>
                    <CardDescription>Recent financial insights</CardDescription>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Access your latest financial reports and AI-generated insights
              </p>
            </CardContent>
          </Card>
        </Link>

        {/* Old Data Card */}
        {/* Made card clickable with Link wrapper */}
        <Link href="/dashboard/old-data">
          <Card className="hover:border-secondary transition-colors cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Database className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Old data</CardTitle>
                    <CardDescription>Historical records</CardDescription>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Browse archived financial data and past analyses</p>
            </CardContent>
          </Card>
        </Link>

        {/* Help/Contact Card */}
        {/* Made card clickable with Link wrapper */}
        <Link href="/dashboard/help">
          <Card className="hover:border-secondary transition-colors cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <HelpCircle className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Help/Contact</CardTitle>
                    <CardDescription>Get support</CardDescription>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Need assistance? Reach out to our support team</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
