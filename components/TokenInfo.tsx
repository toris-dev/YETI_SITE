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
      className="py-20 px-4 bg-black/50 backdrop-blur-sm"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            whileInView={{ scale: [1, 1.05, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Token Information
          </motion.h2>
          <p className="text-xl text-blue-200">Learn about Yeti Sports token</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-yeti-blue/90 to-yeti-dark/90 backdrop-blur-md rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
          }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Token Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white mb-6">
            {tokenDetails.map((detail, index) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span className="text-blue-200">{detail.label}:</span>{" "}
                <span className="font-semibold">{detail.value}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <motion.a
              href="https://pump.fun/coin/CGevbJ3ceVXjSCnSZJjjoK1Lpx5u1vrg3BYj8kRvpump"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-yeti-light text-white font-semibold rounded-lg relative overflow-hidden group"
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
