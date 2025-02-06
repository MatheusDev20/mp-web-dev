import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { ApplicationProvider } from "./providers/application";
import { getLocale, getMessages } from "next-intl/server";

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
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matheus de Paula - Web Developer",
  description: "Matheus de Paula - Web Developer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale} className="scroll-smooth scroll-pt-[92px]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${RobotoMono.variable} ${roboto.className} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ApplicationProvider>{children}</ApplicationProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
