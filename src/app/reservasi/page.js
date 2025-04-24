"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

export default function ReservasiPage() {
  const [lokasi, setLokasi] = useState("")
  const [waktu, setWaktu] = useState("")

  const handleReservasi = () => {
    alert(`Reservasi berhasil!\nLokasi: ${lokasi}\nWaktu: ${waktu}`)
  }

  return (
    <main className="min-h-screen bg-white px-4 sm:px-6 lg:px-12 py-10 text-gray-900">
      <section className="max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4 text-center">
          Reservasi Tempat Parkir
        </h1>
        <p className="text-center mb-6 text-gray-600">
          Booking slot parkir sebelum kamu sampai tujuan.
        </p>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-1">
              <MapPin size={16} /> Lokasi Parkir
            </label>
            <Input
              placeholder="Contoh: Mall Harmoni"
              value={lokasi}
              onChange={(e) => setLokasi(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-1">
              <Calendar size={16} /> Waktu Reservasi
            </label>
            <Input
              type="datetime-local"
              value={waktu}
              onChange={(e) => setWaktu(e.target.value)}
            />
          </div>

          <Button onClick={handleReservasi} className="w-full mt-4">
            Reservasi Sekarang
          </Button>
        </div>
      </section>
    </main>
  )
}
