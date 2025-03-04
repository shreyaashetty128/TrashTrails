import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Recycle } from "lucide-react"

import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TrashTrails - Turn Your Trash Into Cash",
  description:
    "TrashTrails rewards you for responsible waste disposal. Schedule flexible pickups and earn money for recycling.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Recycle className="h-6 w-6 text-green-600" />
              <span className="text-xl font-bold">TrashTrails</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="text-sm font-medium hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link href="#how-it-works" className="text-sm font-medium hover:text-green-600 transition-colors">
                How It Works
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-green-600 transition-colors">
                Scheduling
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-green-600 transition-colors">
                Rewards
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-green-600 transition-colors">
                About Us
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="hidden md:flex">
                Log In
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">Sign Up</Button>
            </div>
          </div>
        </header>
        {children}
        <footer className="w-full py-6 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-4">
                <Link href="/" className="flex items-center gap-2">
                  <Recycle className="h-6 w-6 text-green-600" />
                  <span className="text-xl font-bold">TrashTrails</span>
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Turn your trash into cash while helping the environment.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500 transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500 transition-colors"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500 transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500 transition-colors"
                    >
                      Press
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Support</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500 transition-colors"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500 transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500 transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Connect</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500 transition-colors"
                    >
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500 transition-colors"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500 transition-colors"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500 transition-colors"
                    >
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} TrashTrails. All rights reserved.
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link
                  href="#"
                  className="text-xs text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500 transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  href="#"
                  className="text-xs text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500 transition-colors"
                >
                  Terms
                </Link>
                <Link
                  href="#"
                  className="text-xs text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500 transition-colors"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

