"use client";

import React from "react";
import { StickFooter } from "../components/footer";
import { Header } from "../components/header";

export default function MpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navHover, setNavHover] = React.useState({ socials: false, menu: false });

  return (
    <div className="overflow-hidden flex flex-col">
      {/* Fixed Header */}
      <Header navHover={navHover} setNavHover={setNavHover} />
      {/* Main Content */}
      {children}
      <StickFooter />
    </div>
  );
}
