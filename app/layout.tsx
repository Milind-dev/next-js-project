import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppLoaderProvider from "./providers/app-provider-screen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  // variable: "--font-geist-mono",
  // subsets: ["latin"],
  variable: "--font-bitcoin",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FoxTrades",
  description: "Trading App By Ui Bitcoins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppLoaderProvider>{children}</AppLoaderProvider>
      </body>
    </html>
  );
}
