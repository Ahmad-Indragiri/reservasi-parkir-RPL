export default function PembayaranPage() {
    return (
      <main className="min-h-screen bg-white px-4 sm:px-6 lg:px-12 py-10 text-gray-900">
        <section className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-blue-700">Pembayaran Digital</h1>
          <p className="text-gray-600 text-lg">
            Bayar dengan e-wallet favoritmu atau coba simulasi pembayaran.
          </p>
        </section>
  
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {walletOptions.map((wallet, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 flex flex-col items-center bg-white hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{wallet.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{wallet.nama}</h3>
              <p className="text-gray-500 text-sm">{wallet.deskripsi}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Bayar Sekarang
              </button>
            </div>
          ))}
        </section>
      </main>
    );
  }
  
  const walletOptions = [
    {
      icon: "💳",
      nama: "OVO",
      deskripsi: "Pembayaran cepat & aman dengan OVO.",
    },
    {
      icon: "📱",
      nama: "GoPay",
      deskripsi: "Bayar instan lewat aplikasi Gojek.",
    },
    {
      icon: "🏦",
      nama: "Bank Transfer",
      deskripsi: "Transfer melalui mobile banking kamu.",
    },
    {
      icon: "🪙",
      nama: "DANA",
      deskripsi: "Transaksi nontunai dengan DANA.",
    },
    {
      icon: "💰",
      nama: "ShopeePay",
      deskripsi: "Bayar belanja dan parkir dari Shopee.",
    },
    {
      icon: "🔐",
      nama: "Simulasi",
      deskripsi: "Coba simulasi pembayaran tanpa transaksi asli.",
    },
  ];
  