"use client"

import { useState, useEffect } from "react"
import { Device } from "@capacitor/device"
import Link from "next/link"
import { ArrowRight, Battery, Wifi, Smartphone } from "lucide-react"

export default function Home() {
  const [deviceInfo, setDeviceInfo] = useState<{
    platform?: string
    isNative?: boolean
    batteryLevel?: number
    model?: string
  }>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getDeviceInfo() {
      try {
        const info = await Device.getInfo()
        const batteryInfo = await Device.getBatteryInfo()

        setDeviceInfo({
          platform: info.platform,
          isNative: info.isVirtual === false,
          batteryLevel: batteryInfo.batteryLevel,
          model: info.model,
        })
      } catch (error) {
        console.error("Error getting device info:", error)
        setDeviceInfo({
          platform: "web",
          isNative: false,
        })
      } finally {
        setIsLoading(false)
      }
    }

    getDeviceInfo()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">Next.js + Capacitor</h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Device Information</h2>

          {isLoading ? (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Smartphone className="h-5 w-5 text-gray-500" />
                <span className="font-medium">Platform:</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded text-blue-800 dark:text-blue-100">
                  {deviceInfo.platform || "Unknown"}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Wifi className="h-5 w-5 text-gray-500" />
                <span className="font-medium">Environment:</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded text-green-800 dark:text-green-100">
                  {deviceInfo.isNative ? "Native App" : "Web Browser"}
                </span>
              </div>

              {deviceInfo.batteryLevel !== undefined && (
                <div className="flex items-center gap-3">
                  <Battery className="h-5 w-5 text-gray-500" />
                  <span className="font-medium">Battery:</span>
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 rounded text-yellow-800 dark:text-yellow-100">
                    {Math.round(deviceInfo.batteryLevel * 100)}%
                  </span>
                </div>
              )}

              {deviceInfo.model && (
                <div className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-gray-500" />
                  <span className="font-medium">Model:</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded text-purple-800 dark:text-purple-100">
                    {deviceInfo.model}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/about"
            className="group p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold flex items-center gap-2">
              About Page
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Navigate to another page to test routing</p>
          </Link>

          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Cross-Platform App</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              This app works on Web, iOS, and Android from a single codebase!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
