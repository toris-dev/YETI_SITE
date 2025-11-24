"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 애니메이션 */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-black opacity-50" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-pulse-slow">
            🏔️ YETI SPORTS 🏔️
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl text-white mb-8 font-semibold"
          >
            Launch the Penguins! 🐧
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-blue-200 mb-12 max-w-2xl mx-auto"
          >
            Relive the classic Yeti Sports game as a meme coin!
            <br />
            Available on Pump.fun
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://pump.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-yeti-light to-yeti-blue text-white font-bold text-xl rounded-full hover:scale-110 transition-transform shadow-2xl hover:shadow-blue-500/50"
            >
              🚀 Buy on Pump.fun
            </a>

            <a
              href="#token-info"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold text-xl rounded-full hover:scale-110 transition-transform border-2 border-white/20"
            >
              📊 Token Info
            </a>
          </motion.div>
        </motion.div>

        {/* 펭귄 애니메이션 */}
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-6xl">🐧</span>
        </motion.div>
      </div>
    </section>
  );
}
