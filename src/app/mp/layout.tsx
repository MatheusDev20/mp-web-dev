"use client"

import { StickFooter } from "../components/footer"
import { Header } from "../components/header"

export default function MpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-screen 2xl:min-h-[1080px] overflow-hidden flex flex-col">
      <Header />
      <div className="flex-grow w-full flex">
        {children}
      </div>
      <StickFooter />
    </div>
  )
}
