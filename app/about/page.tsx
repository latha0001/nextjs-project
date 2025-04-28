"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Moon, Sun } from "lucide-react"

export default function About() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <div className="z-10 w-full max-w-5xl">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-700" />}
          </button>
        </div>

        <h1 className="text-4xl font-bold mb-6">About This App</h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Next.js + Capacitor</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            This is a cross-platform application built with Next.js and Capacitor. It demonstrates how to create a
            single codebase that works on:
          </p>

          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Web browsers</li>
            <li>iOS devices</li>
            <li>Android devices</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300">
            The app uses client-side React components to ensure compatibility with Capacitor, while still leveraging the
            benefits of Next.js for web deployment.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-800 dark:text-green-100">
                ✓
              </div>
              <div>
                <h3 className="font-medium">Responsive Design</h3>
                <p className="text-gray-600 dark:text-gray-400">Works on all screen sizes</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-800 dark:text-green-100">
                ✓
              </div>
              <div>
                <h3 className="font-medium">Native Device Features</h3>
                <p className="text-gray-600 dark:text-gray-400">Access to device information and capabilities</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-800 dark:text-green-100">
                ✓
              </div>
              <div>
                <h3 className="font-medium">Dark Mode Support</h3>
                <p className="text-gray-600 dark:text-gray-400">Toggle between light and dark themes</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
