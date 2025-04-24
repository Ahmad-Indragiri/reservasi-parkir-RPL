export default function NavigasiPage() {
    return (
      <main className="min-h-screen bg-white px-4 sm:px-6 lg:px-12 py-10 text-gray-900">
        <section className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-blue-700">Navigasi Lokasi Anda</h1>
          <p className="text-gray-600 text-lg">
            Arahkan ke lokasi parkir yang telah kamu pilih dengan integrasi Google Maps.
          </p>
        </section>
  
        <section className="max-w-4xl mx-auto bg-gray-100 rounded-xl overflow-hidden shadow-md">
          <div className="aspect-video bg-gray-300 flex items-center justify-center text-gray-500 text-xl">
            🗺️ Peta Lokasi (Simulasi)
          </div>
          <div className="p-6 text-center">
            <p className="mb-4 text-gray-700">Klik tombol di bawah untuk membuka Google Maps dan mendapatkan petunjuk arah ke lokasi parkir.</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
              Buka di Google Maps
            </a>
          </div>
        </section>
      </main>
    );
  }
  