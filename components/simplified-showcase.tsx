'use client'

import Image from "next/image"
import { ArrowRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const websites = [
  {
    title: "Venkat",
    subtext: "1st Year IoT EC Candidate",
    image: "/venkat.gif",
    link: "https://csesoc.vercel.app/"
  },
  {
    title: "Atharsh",
    subtext: "1st Year AI DS EC Candidate",
    image: "/atharsh.gif",
    link: "https://sites.google.com/view/atharsh4exec-council-ai-ds-1yr/home"
  },
  {
    title: "\"Website Gang\"",
    subtext: "Group of aligned individuals fighting syndicates",
    image: "/ours.gif",
    link: "https://elections.blitzdnd.com"
  },
  {
    title: "Drunken for President",
    subtext: "The man, the myth, the meme",
    image: "/drunken.gif",
    link: "https://drunken-for-president.vercel.app/"
  }
]

export function SimplifiedShowcase() {
  return (
    <div className="relative">
      <header className="h-screen flex flex-col justify-center items-center p-8 sticky top-0 bg-white z-10">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-none text-center">
          Our Community&apos;s
          <br />
          Digital Canvas
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl text-center">
          Let&apos;s put election politics and coalitions aside for some time, and appreciate what our community has built in such a short span of time. Sort of like our own, accidental hackathon.
        </p>
      </header>

      <div className="relative z-20">
        <main className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {websites.map((site) => (
                <Card key={site.title} className="flex flex-col">
                  <CardHeader className="p-0">
                    <div className="relative h-48">
                      <Image
                        src={site.image}
                        alt={`Preview of ${site.title}`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow p-6">
                    <CardTitle className="text-2xl mb-2">{site.title}</CardTitle>
                    <p className="text-gray-600 mb-4">{site.subtext}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <a href={site.link} className="w-full">
                        Visit Site
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
              
              {/* New "You could be featured here" card */}
              <Card className="flex flex-col bg-gray-200 border-dashed border-gray-400">
                <CardHeader className="p-0">
                  <div className="relative h-48 flex items-center justify-center bg-gray-300">
                    <Plus className="h-16 w-16 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <CardTitle className="text-2xl mb-2 text-gray-600">You could be featured here</CardTitle>
                  <p className="text-gray-500 mb-4">Have you built something for the community? Let us know!</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full text-gray-600" asChild>
                    <a href="#join-showcase">
                      Join the Showcase
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>

        <footer className="bg-white py-16" id="join-showcase">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Showcase</h2>
            <p className="text-xl mb-4">
              If you would like your website to be added to this wall, contact Joshua Bharathi (+91 96771 96957) on WhatsApp.
            </p>
            <p className="text-lg text-gray-600">
              This platform has nothing to do with coalitions or any politics. Everyone is welcome and encouraged to build things!
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}