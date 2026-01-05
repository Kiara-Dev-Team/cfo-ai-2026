import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { ChevronLeft, TrendingUp, DollarSign, BarChart3, Calendar } from "lucide-react"
import Link from "next/link"

export default function NewDataPage() {
  const recentData = [
    {
      id: 1,
      title: "Q1 Revenue Report",
      date: "2 hours ago",
      value: "$145,320",
      change: "+12.5%",
      status: "positive",
    },
    {
      id: 2,
      title: "Expense Analysis",
      date: "5 hours ago",
      value: "$32,450",
      change: "-8.2%",
      status: "positive",
    },
    {
      id: 3,
      title: "Cash Flow Forecast",
      date: "1 day ago",
      value: "$98,200",
      change: "+5.1%",
      status: "positive",
    },
    {
      id: 4,
      title: "Profit Margin Update",
      date: "2 days ago",
      value: "23.4%",
      change: "+2.1%",
      status: "positive",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="flex items-center gap-4 p-6">
          <Link href="/dashboard">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">New Data</h1>
            <p className="text-sm text-muted-foreground">Recent financial insights</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-secondary" />
                <CardDescription className="text-xs">Revenue</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$145K</div>
              <p className="text-xs text-green-500">+12.5% this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-secondary" />
                <CardDescription className="text-xs">Expenses</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$32K</div>
              <p className="text-xs text-green-500">-8.2% this week</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Reports */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Recent Reports</h2>
          <div className="space-y-3">
            {recentData.map((item) => (
              <Card key={item.id} className="hover:border-secondary transition-colors cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                        <BarChart3 className="h-5 w-5 text-secondary-foreground" />
                      </div>
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {item.date}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{item.value}</div>
                      <div className="text-xs text-green-500">{item.change}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <Button className="w-full" size="lg">
          Generate New Report
        </Button>
      </div>
    </div>
  )
}
