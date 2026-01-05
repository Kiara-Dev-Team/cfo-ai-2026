import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, Mail, MessageCircle, Book, Video, Send } from "lucide-react"
import Link from "next/link"

export default function HelpPage() {
  const helpResources = [
    {
      icon: Book,
      title: "Documentation",
      description: "Browse our comprehensive guides",
      link: "#",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Watch step-by-step walkthroughs",
      link: "#",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      link: "#",
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
            <h1 className="text-2xl font-bold">Help & Contact</h1>
            <p className="text-sm text-muted-foreground">We're here to assist you</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Help Resources */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Help</h2>
          <div className="grid gap-3">
            {helpResources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <Card key={index} className="hover:border-secondary transition-colors cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                        <Icon className="h-5 w-5 text-secondary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{resource.title}</div>
                        <div className="text-xs text-muted-foreground">{resource.description}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Send us a message
            </CardTitle>
            <CardDescription>We'll get back to you within 24 hours</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input id="name" placeholder="Your name" />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input id="subject" placeholder="How can we help?" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea id="message" placeholder="Describe your issue or question..." rows={4} />
            </div>

            <Button className="w-full" size="lg">
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="bg-muted/50">
          <CardContent className="p-4">
            <h3 className="font-medium mb-2">Other ways to reach us</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Email: support@fav.ai</p>
              <p>Hours: Mon-Fri, 9am-5pm EST</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
