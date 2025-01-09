"use client"

import { Header } from "../components/header"

export default function MpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        {children}
      </div>
      <footer>Future Footer</footer>
    </div>
  )
}