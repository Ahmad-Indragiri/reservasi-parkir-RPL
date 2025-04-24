"use client";
import { useState } from "react";
import { Facebook, Twitter, MessageSquare, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function SocialReview() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submittedReviews, setSubmittedReviews] = useState([]);

  const handleShare = (platform) => {
    alert(`Pretend we're sharing to ${platform} 😊`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !comment.trim()) return alert("Please complete the form!");
    setSubmittedReviews([...submittedReviews, { rating, comment }]);
    setRating(0);
    setComment("");
  };

  return (
    <div className="mt-12 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md transition-colors">
      <h2 className="text-xl font-semibold mb-4">Share & Review</h2>

      {/* Social Sharing */}
      <div className="flex gap-4 mb-6">
        <button onClick={() => handleShare("Facebook")} className="hover:text-blue-600 transition">
          <Facebook />
        </button>
        <button onClick={() => handleShare("Twitter")} className="hover:text-sky-400 transition">
          <Twitter />
        </button>
        <button onClick={() => handleShare("WhatsApp")} className="hover:text-green-500 transition">
          <FaWhatsapp size={24} />
        </button>
      </div>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              size={24}
              className={`cursor-pointer ${i <= rating ? "text-yellow-400" : "text-gray-300"}`}
              onClick={() => setRating(i)}
            />
          ))}
        </div>
        <textarea
          rows={3}
          className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white"
          placeholder="Tulis komentar kamu..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="mt-3 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
        >
          Submit Review
        </button>
      </form>

      {/* Review List */}
      <div>
        <h3 className="font-semibold mb-2">Ulasan Pengguna:</h3>
        {submittedReviews.length === 0 && <p className="text-sm text-gray-500">Belum ada ulasan.</p>}
        {submittedReviews.map((rev, idx) => (
          <div key={idx} className="mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
            <div className="flex gap-1 mb-1">
              {[...Array(rev.rating)].map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400" fill="yellow" />
              ))}
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">{rev.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
