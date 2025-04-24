"use client"

import { useState, useEffect } from "react"

export default function SensorPage() {
  const [slots, setSlots] = useState(
    Array.from({ length: 12 }, () => Math.random() > 0.5)
  )

  // Simulasi update status slot parkir setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setSlots(slots.map(() => Math.random() > 0.5))
    }, 5000)

    return () => clearInterval(interval)
  }, [slots])

  return (
    <main className="min-h-screen bg-white px-4 py-10 text-gray-900">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Sensor Parkir</h1>
        <p className="text-center mb-8 text-gray-600">
          Pantau ketersediaan slot secara real-time (simulasi).
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {slots.map((isAvailable, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 text-center transition shadow-md font-semibold ${
                isAvailable ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              Slot #{index + 1}
              <p className="text-sm mt-2">
                {isAvailable ? "Tersedia" : "Terisi"}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
