"use client";
import { useState } from "react";
import { Facebook, Twitter, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function SocialReview() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submittedReviews, setSubmittedReviews] = useState([]);

  const handleShare = (platform) => {
    alert(`Pretend we're sharing to ${platform} 😊`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !comment.trim()) return alert("Lengkapi ulasan kamu!");
    setSubmittedReviews([{ rating, comment }, ...submittedReviews]);
    setRating(0);
    setComment("");
  };

  return (
    <section className="mt-12 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-3xl mx-auto transition-colors duration-300 ease-in-out">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
        Berbagi & Beri Ulasan
      </h2>

      {/* Social Sharing */}
      <div className="flex justify-center gap-8 mb-8 text-gray-600 dark:text-gray-300 transition-transform">
        <button
          onClick={() => handleShare("Facebook")}
          className="hover:text-blue-600 transition transform hover:scale-110"
        >
          <Facebook size={28} />
        </button>
        <button
          onClick={() => handleShare("Twitter")}
          className="hover:text-sky-400 transition transform hover:scale-110"
        >
          <Twitter size={28} />
        </button>
        <button
          onClick={() => handleShare("WhatsApp")}
          className="hover:text-green-500 transition transform hover:scale-110"
        >
          <FaWhatsapp size={28} />
        </button>
      </div>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              size={32}
              className={`cursor-pointer transition-all duration-300 ease-in-out ${
                (hoverRating || rating) >= i
                  ? "text-yellow-500"
                  : "text-gray-300 dark:text-gray-600"
              }`}
              onMouseEnter={() => setHoverRating(i)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setRating(i)}
            />
          ))}
        </div>
        <textarea
          rows={4}
          className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900 dark:text-white transition-colors"
          placeholder="Bagikan pengalaman kamu..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          type="submit"
          className="block w-full px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition duration-300"
        >
          Kirim Ulasan
        </button>
      </form>

      {/* Review List */}
      <div className="mt-12">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Ulasan Pengguna:
        </h3>
        <AnimatePresence>
          {submittedReviews.length === 0 && (
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Belum ada ulasan.
            </p>
          )}
          {submittedReviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm transition-all duration-300"
            >
              <div className="flex gap-1 mb-2">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400" fill="yellow" />
                ))}
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{rev.comment}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
