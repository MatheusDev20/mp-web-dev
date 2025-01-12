"use client"

import Bio from "./bio"
import { Landing } from "./landing"
import { Projects } from "./projects"

// import Typewriter from "../components/fancy/typewritter"

export default function Page() {
  return (

    <div className="w-full p-[96px] flex-col flex scroll-smooth snap-y snap-mandatory">
      <Landing />
      <Bio />
      <Projects />
      {/* Main Section */}

      {/* Experience section */}
    </div>)
}