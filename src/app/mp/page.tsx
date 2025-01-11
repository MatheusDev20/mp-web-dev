"use client"

import Bio from "./bio"
import { Landing } from "./landing"
import { Projects } from "./projects"

// import Typewriter from "../components/fancy/typewritter"

export default function Page() {
  return (

    <div className="w-full flex-col flex">
      <Landing />
      <Bio />
      <Projects />
      {/* Main Section */}

      {/* Experience section */}
    </div>)
}