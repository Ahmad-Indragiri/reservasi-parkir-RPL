"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function ReviewPage() {
  const [nama, setNama] = useState("")
  const [komentar, setKomentar] = useState("")
  const [rating, setRating] = useState(0)

  const [reviews, setReviews] = useState([
    { nama: "Andi", rating: 5, komentar: "Sangat membantu dan praktis!" },
    { nama: "Dewi", rating: 4, komentar: "Mudah digunakan, lokasi parkir akurat." }
  ])

  const handleSubmit = () => {
    if (nama && komentar && rating > 0) {
      setReviews([{ nama, rating, komentar }, ...reviews])
      setNama("")
      setKomentar("")
      setRating(0)
    } else {
      alert("Isi semua kolom dan berikan rating.")
    }
  }

  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-12 bg-white text-gray-900">
      <section className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">Rating & Review</h1>
        <p className="text-center mb-6 text-gray-600">
          Lihat penilaian dan ulasan dari pengguna lain atau tinggalkan reviewmu sendiri.
        </p>

        <div className="mb-10 space-y-4">
          <Input placeholder="Nama Anda" value={nama} onChange={(e) => setNama(e.target.value)} />
          <Textarea placeholder="Tulis ulasan Anda..." value={komentar} onChange={(e) => setKomentar(e.target.value)} />
          
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((bintang) => (
              <Star
                key={bintang}
                className={`w-6 h-6 cursor-pointer transition ${
                  rating >= bintang ? "text-yellow-500 fill-yellow-400" : "text-gray-400"
                }`}
                onClick={() => setRating(bintang)}
              />
            ))}
            <span className="text-sm text-gray-600 ml-2">{rating} / 5</span>
          </div>

          <Button onClick={handleSubmit} className="w-full">
            Kirim Review
          </Button>
        </div>

        <div className="space-y-4">
          {reviews.map((r, i) => (
            <div key={i} className="border rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold">{r.nama}</h3>
              <div className="flex items-center text-yellow-500 mb-1">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700">{r.komentar}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
