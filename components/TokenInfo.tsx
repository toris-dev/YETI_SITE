'use client'

import { motion } from 'framer-motion'

export default function TokenInfo() {
  return (
    <section id="token-info" className="py-20 px-4 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Token Information
          </h2>
          <p className="text-xl text-blue-200">
            Learn about Yeti Sports token
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-yeti-blue/90 to-yeti-dark/90 backdrop-blur-md rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Token Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white mb-6">
            <div>
              <span className="text-blue-200">Token Name:</span> Yeti Sports
            </div>
            <div>
              <span className="text-blue-200">Token Symbol:</span> YETI
            </div>
            <div>
              <span className="text-blue-200">Blockchain:</span> Solana
            </div>
            <div>
              <span className="text-blue-200">Total Supply:</span> 1,000,000,000 YETI
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <a
              href="https://pump.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-yeti-light text-white font-semibold rounded-lg hover:bg-yeti-blue transition-colors"
            >
              Trade on Pump.fun
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

