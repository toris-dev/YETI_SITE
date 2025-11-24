"use client";

import { motion } from "framer-motion";

const tokenDetails = [
  { label: "Token Name", value: "Yeti Sports" },
  { label: "Token Symbol", value: "YETI" },
  { label: "Blockchain", value: "Solana" },
  { label: "Total Supply", value: "1,000,000,000 YETI" },
];

export default function TokenInfo() {
  return (
    <section
      id="token-info"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-black/50 backdrop-blur-sm overflow-x-hidden w-full max-w-full"
    >
      <div className="container mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 px-2"
            whileInView={{ scale: [1, 1.05, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Token Information
          </motion.h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-200 px-2">
            Learn about Yeti Sports token
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-yeti-blue/90 to-yeti-dark/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 max-w-3xl mx-auto"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
          }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
            Token Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-white mb-4 sm:mb-6">
            {tokenDetails.map((detail, index) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-sm sm:text-base"
              >
                <span className="text-blue-200">{detail.label}:</span>{" "}
                <span className="font-semibold break-words">{detail.value}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4 justify-center">
            <motion.a
              href="https://pump.fun/chat/8uuHe4s3NS"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-yeti-light text-white font-semibold rounded-lg relative overflow-hidden group text-center text-sm sm:text-base"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Trade on Pump.fun</span>
              <motion.div
                className="absolute inset-0 bg-yeti-blue"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
