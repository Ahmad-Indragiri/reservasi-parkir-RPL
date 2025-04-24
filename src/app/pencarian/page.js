"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin, Search } from "lucide-react"

export default function PencarianPage() {
  const [lokasi, setLokasi] = useState("")
  const [hasil, setHasil] = useState(null)

  const cariParkir = () => {
    // Simulasi hasil pencarian
    setHasil({
      nama: "Parkiran Mall Harmoni",
      jarak: "300 meter",
      harga: "Rp5.000/jam",
    })
  }

  return (
    <main className="min-h-screen bg-white px-4 sm:px-6 lg:px-12 py-10 text-gray-900">
      <section className="max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4 text-center">
          Pencarian Lokasi Parkir
        </h1>
        <p className="text-center mb-6 text-gray-600">
          Temukan tempat parkir terdekat dari lokasi kamu secara instan.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <Input
            placeholder="Masukkan lokasi kamu..."
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
          />
          <Button onClick={cariParkir} className="flex items-center gap-2">
            <Search size={18} /> Cari
          </Button>
        </div>

        {hasil && (
          <div className="bg-gray-100 p-5 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              🎉 Ditemukan: {hasil.nama}
            </h3>
            <p>Jarak: {hasil.jarak}</p>
            <p>Harga: {hasil.harga}</p>
            <Button variant="outline" className="mt-4">
              Navigasi dengan Google Maps
            </Button>
          </div>
        )}
      </section>
    </main>
  )
}
