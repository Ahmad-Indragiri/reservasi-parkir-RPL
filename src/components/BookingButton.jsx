"use client";
import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookingButton() {
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handleBooking = async () => {
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 2000)); // simulate API
    setStatus("success");
    setTimeout(() => setStatus("idle"), 2000); // reset
  };

  return (
    <button
      onClick={handleBooking}
      disabled={status === "loading"}
      className={`relative px-6 py-2 rounded-full text-white font-semibold transition-all duration-300
        ${status === "success" ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"}
        disabled:opacity-50 flex items-center justify-center gap-2`}
    >
      <AnimatePresence mode="wait">
        {status === "idle" && (
          <motion.span key="book" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            Book Now
          </motion.span>
        )}
        {status === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <Loader2 className="animate-spin w-4 h-4" />
            Processing...
          </motion.div>
        )}
        {status === "success" && (
          <motion.div
            key="success"
            initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }}
            className="flex items-center gap-1"
          >
            <CheckCircle className="w-5 h-5 text-white" />
            Success!
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
