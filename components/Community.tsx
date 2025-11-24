"use client";

import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Twitter",
    icon: "🐦",
    url: "https://x.com/Yeti_Sports",
    description: "Latest news and updates",
  },
  {
    name: "Telegram",
    icon: "📱",
    url: "https://t.me/yeti_tel",
    description: "Real-time chat",
  },
  {
    name: "Pump.fun",
    icon: "🚀",
    url: "https://pump.fun/coin/CGevbJ3ceVXjSCnSZJjjoK1Lpx5u1vrg3BYj8kRvpump",
    description: "Trade and join community",
  },
];

export default function Community() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-yeti-dark/30 to-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Community 👥
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Join the Yeti Sports community!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-yeti-blue/80 to-yeti-dark/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-yeti-light transition-all text-center group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {link.name}
              </h3>
              <p className="text-blue-200 text-sm">{link.description}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-yeti-blue/90 to-yeti-dark/90 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Growing Together
          </h3>
          <p className="text-blue-200 text-lg mb-6 max-w-2xl mx-auto">
            Yeti Sports is a community-driven project. Your participation and
            support drive the project&apos;s growth. Create memes, share them,
            and have fun together! 🎉
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["#YetiSports", "#MemeCoin", "#Solana", "#PumpFun"].map(
              (tag, index) => (
                <motion.span
                  key={tag}
                  className="px-4 py-2 bg-white/10 rounded-full text-white cursor-pointer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    rotate: [0, -5, 5, -5, 0],
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {tag}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
