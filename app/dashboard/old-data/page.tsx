import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Archive, Download, Calendar, FileText } from "lucide-react"
import Link from "next/link"

export default function OldDataPage() {
  const archivedData = [
    {
      id: 1,
      title: "Q4 2023 Annual Report",
      date: "Dec 31, 2023",
      size: "2.4 MB",
      category: "Annual Reports",
    },
    {
      id: 2,
      title: "Q3 2023 Financial Summary",
      date: "Sep 30, 2023",
      size: "1.8 MB",
      category: "Quarterly",
    },
    {
      id: 3,
      title: "Tax Documents 2023",
      date: "Apr 15, 2023",
      size: "3.2 MB",
      category: "Tax Records",
    },
    {
      id: 4,
      title: "Budget Plan 2023",
      date: "Jan 1, 2023",
      size: "1.2 MB",
      category: "Planning",
    },
    {
      id: 5,
      title: "Q2 2023 Expense Report",
      date: "Jun 30, 2023",
      size: "1.5 MB",
      category: "Quarterly",
    },
  ]

  const categories = ["All", "Annual Reports", "Quarterly", "Tax Records", "Planning"]

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
            <h1 className="text-2xl font-bold">Old Data</h1>
            <p className="text-sm text-muted-foreground">Historical records and archives</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Filter Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Storage Info */}
        <Card className="bg-secondary/20 border-secondary/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">Archive Storage</div>
                <div className="text-xs text-muted-foreground">10.1 MB of 1 GB used</div>
              </div>
              <Archive className="h-8 w-8 text-secondary" />
            </div>
            <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-[10%] bg-secondary rounded-full" />
            </div>
          </CardContent>
        </Card>

        {/* Archived Files */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Archived Files</h2>
          <div className="space-y-3">
            {archivedData.map((item) => (
              <Card key={item.id} className="hover:border-secondary transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                        <FileText className="h-5 w-5 text-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{item.title}</div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {item.date}
                          </span>
                          <span>{item.size}</span>
                        </div>
                        <div className="text-xs text-secondary mt-1">{item.category}</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
