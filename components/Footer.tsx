"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-sm border-t border-white/10 py-8 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex justify-center mb-4"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/yeticoin.png"
              alt="Yeti Coin Logo"
              width={96}
              height={96}
              className="w-20 h-20 md:w-24 md:h-24"
            />
          </motion.div>
          <motion.h3
            className="text-2xl font-bold text-white mb-2"
            whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
            transition={{ duration: 0.3 }}
          >
            ❄️ Yeti Sports ❄️
          </motion.h3>
          <motion.p className="text-blue-200" whileHover={{ scale: 1.05 }}>
            Launch the Penguins! Relive the classic game as a meme coin
          </motion.p>
        </motion.div>

        <motion.div
          className="border-t border-white/10 pt-6 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-white/60 text-sm">
            ⚠️ Investment Warning: Cryptocurrency investments carry high risks.
            Please make investment decisions carefully and only invest within
            your risk tolerance.
          </p>
          <motion.p
            className="text-white/40 text-xs mt-4"
            whileHover={{ scale: 1.05 }}
          >
            © 2024 Yeti Sports. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
