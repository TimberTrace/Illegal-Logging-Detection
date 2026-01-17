"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Truck, Clock, Calendar } from "lucide-react"

export function DemoSection() {
  const [plateInput, setPlateInput] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState<null | {
    plate: string
    entries: { date: string; time: string; type: string; direction: string }[]
  }>(null)

  // Sample data for demo
  const sampleData: Record<string, { date: string; time: string; type: string; direction: string }[]> = {
    MT2847K: [
      { date: "15 Jan 2026", time: "08:32", type: "Logging Truck", direction: "Entry" },
      { date: "15 Jan 2026", time: "11:45", type: "Logging Truck", direction: "Exit" },
      { date: "12 Jan 2026", time: "09:15", type: "Logging Truck", direction: "Entry" },
      { date: "12 Jan 2026", time: "14:20", type: "Logging Truck", direction: "Exit" },
    ],
    AB123CD: [
      { date: "16 Jan 2026", time: "07:00", type: "Tractor", direction: "Entry" },
      { date: "16 Jan 2026", time: "16:30", type: "Tractor", direction: "Exit" },
    ],
  }

  const handleSearch = () => {
    setIsSearching(true)
    setTimeout(() => {
      const cleanPlate = plateInput.toUpperCase().replace(/[^A-Z0-9]/g, "")
      const data = sampleData[cleanPlate]
      if (data) {
        setResults({ plate: cleanPlate, entries: data })
      } else {
        setResults({ plate: cleanPlate, entries: [] })
      }
      setIsSearching(false)
    }, 800)
  }

  const handleReset = () => {
    setPlateInput("")
    setResults(null)
  }

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Try It Out
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Look Up a License Plate</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            See how TimberTrace logs vehicle activity. Try searching for a plate number.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Input Card */}
          <Card className="border-2 border-border/50 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Camera className="h-5 w-5 text-primary" />
                Search Vehicle History
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">License Plate Number</label>
                  <input
                    type="text"
                    value={plateInput}
                    onChange={(e) => setPlateInput(e.target.value)}
                    placeholder="e.g. MT2847K or AB123CD"
                    className="w-full p-4 border border-border rounded-xl text-lg font-mono tracking-wider uppercase bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <p className="text-xs text-muted-foreground mt-2">Demo plates: MT2847K, AB123CD</p>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={handleSearch}
                    disabled={!plateInput.trim() || isSearching}
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    {isSearching ? "Searching..." : "Search"}
                  </Button>
                  <Button onClick={handleReset} variant="outline" className="px-6 bg-transparent">
                    Clear
                  </Button>
                </div>
              </div>

              <div className="mt-8 p-4 bg-secondary/50 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  In real use, this searches all your camera logs instantly.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Results Card */}
          <Card className="border-2 border-border/50 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                Activity Log
              </h3>

              {!results ? (
                <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
                  <Camera className="h-16 w-16 mb-4 opacity-30" />
                  <p className="text-center">Enter a plate number to see its history</p>
                </div>
              ) : results.entries.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
                  <p className="text-center">No records found for {results.plate}</p>
                  <p className="text-sm mt-2">Try MT2847K or AB123CD</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <p className="text-sm text-muted-foreground">Vehicle</p>
                    <p className="text-2xl font-mono font-bold text-foreground">{results.plate}</p>
                    <p className="text-sm text-primary mt-1">{results.entries.length} records found</p>
                  </div>

                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {results.entries.map((entry, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-xl border ${
                          entry.direction === "Entry" ? "bg-green-50 border-green-200" : "bg-amber-50 border-amber-200"
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <span
                              className={`text-xs font-medium px-2 py-1 rounded ${
                                entry.direction === "Entry"
                                  ? "bg-green-200 text-green-800"
                                  : "bg-amber-200 text-amber-800"
                              }`}
                            >
                              {entry.direction}
                            </span>
                            <p className="text-sm font-medium mt-2">{entry.type}</p>
                          </div>
                          <div className="text-right text-sm text-muted-foreground">
                            <div className="flex items-center gap-1 justify-end">
                              <Calendar className="h-3 w-3" />
                              {entry.date}
                            </div>
                            <div className="flex items-center gap-1 justify-end mt-1">
                              <Clock className="h-3 w-3" />
                              {entry.time}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
