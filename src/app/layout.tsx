import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Mono, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const RobotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
})

const roboto = Roboto({
  weight: '400',
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Matheus de Paula - Web Developer",
  description: "Matheus de Paula - Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${RobotoMono.variable} ${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
