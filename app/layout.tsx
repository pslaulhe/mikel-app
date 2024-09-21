// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/app/components/Header";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body className={inter.className}>
              <Header/>
              <main>{children}</main>
              <footer className="bg-slate-800 text-white p-4 mt-8">
                <div className="container mx-auto text-center">
                  <p>&copy; 2024 MikelR</p>
                </div>
              </footer>
          </body>
      </html>
  )
}
