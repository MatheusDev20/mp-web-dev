"use client"

import Bio from "./bio"
import { Landing } from "./landing"
import { Projects } from "./projects"

// import Typewriter from "../components/fancy/typewritter"

export default function Page() {
  return (
    <main className="w-full flex-col flex scroll-smooth snap-y snap-mandatory">
      <Landing />
      <Bio />
      <Projects />
      {/* Main Section */}

      {/* Experience section */}
    </main>)
}