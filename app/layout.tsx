// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/app/components/Header";
import React from "react";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

interface Props {
    children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
      <html lang="en">
          <body className={inter.className}>
              <Header/>
              <main>
                  {children}
                  <Analytics />
                  <SpeedInsights />
              </main>
              <footer className="bg-slate-800 text-white p-4 mt-8">
                <div className="container mx-auto text-center">
                  <p>&copy; 2024 MikelR</p>
                </div>
              </footer>
          </body>
      </html>
  )
}
