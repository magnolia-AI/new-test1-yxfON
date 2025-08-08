"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function DemoPage() {
  const { toast } = useToast()

  const handleClick = (label: string) => {
    toast({ title: `${label} clicked` })
  }

  return (
    <div className="min-h-full">
      <section className="container mx-auto px-4 pt-24 pb-20">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Simple Demo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Four buttons showcasing the built-in variants. Click any button to
                see a toast.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => handleClick("Primary (default)")}>Primary</Button>
                <Button variant="secondary" onClick={() => handleClick("Secondary")}>Secondary</Button>
                <Button variant="outline" onClick={() => handleClick("Outline")}>Outline</Button>
                <Button variant="destructive" onClick={() => handleClick("Destructive")}>Destructive</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

