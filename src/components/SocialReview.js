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
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleShare = (platform) => {
    alert(`Pretend we're sharing to ${platform} 😊`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !comment.trim()) {
      setFeedbackMessage("Mohon lengkapi rating dan komentar.");
      return;
    }

    setSubmittedReviews([{ rating, comment }, ...submittedReviews]);
    setRating(0);
    setComment("");
    setFeedbackMessage("Terima kasih atas ulasanmu!");
    setTimeout(() => setFeedbackMessage(""), 3000);
  };

  return (
    <section className="mt-14 p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-3xl mx-auto transition-colors duration-300 ease-in-out">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white tracking-tight">
        Bagikan & Beri Ulasan
      </h2>

      <div className="flex justify-center gap-6 mb-10 text-gray-500 dark:text-gray-300">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleShare("Facebook")}
          aria-label="Share to Facebook"
          className="hover:text-blue-600 transition"
        >
          <Facebook size={28} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleShare("Twitter")}
          aria-label="Share to Twitter"
          className="hover:text-sky-400 transition"
        >
          <Twitter size={28} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleShare("WhatsApp")}
          aria-label="Share to WhatsApp"
          className="hover:text-green-500 transition"
        >
          <FaWhatsapp size={28} />
        </motion.button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              size={34}
              className={`cursor-pointer transition-all duration-300 ${
                (hoverRating || rating) >= i
                  ? "text-yellow-500"
                  : "text-gray-300 dark:text-gray-600"
              }`}
              onMouseEnter={() => setHoverRating(i)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setRating(i)}
              strokeWidth={1.5}
            />
          ))}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="comment"
            className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Komentar
          </label>
          <textarea
            id="comment"
            rows={4}
            className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-gray-900 dark:text-white"
            placeholder="Bagikan pengalaman kamu..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="block w-full px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm tracking-wide transition-all"
        >
          Kirim Ulasan
        </motion.button>

        {feedbackMessage && (
          <motion.p
            className="text-sm text-center text-green-600 dark:text-green-400 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {feedbackMessage}
          </motion.p>
        )}
      </form>

      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Ulasan Pengguna:
        </h3>

        <AnimatePresence>
          {submittedReviews.length === 0 && (
            <motion.p
              className="text-sm text-gray-500 dark:text-gray-400 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Belum ada ulasan.
            </motion.p>
          )}
          {submittedReviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm"
            >
              <div className="flex gap-1 mb-2">
                {Array.from({ length: rev.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400"
                    fill="yellow"
                    strokeWidth={1}
                  />
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
