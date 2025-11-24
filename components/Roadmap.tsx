"use client";

import { motion } from "framer-motion";

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Token Launch & Initial Marketing",
    description: "Token launch on Pump.fun and initial community building",
    status: "completed",
    items: [
      "Launch token on Pump.fun",
      "Official website launch",
      "Social media channels setup",
      "Initial holder recruitment",
    ],
  },
  {
    phase: "Phase 2",
    title: "Community Expansion",
    description: "Active community engagement and holder growth",
    status: "in-progress",
    items: [
      "Twitter community activation",
      "Meme contests",
      "Influencer partnerships",
      "CMC/Coingecko listing applications",
    ],
  },
  {
    phase: "Phase 3",
    title: "Exchange Listings",
    description: "Liquidity expansion through major exchange listings",
    status: "planned",
    items: [
      "Raydium DEX listing",
      "CEX listing applications (Jupiter, Orca, etc.)",
      "Liquidity pool expansion",
      "Trading volume goals",
    ],
  },
  {
    phase: "Phase 4",
    title: "Ecosystem Expansion",
    description: "Yeti Sports game and NFT project integration",
    status: "planned",
    items: [
      "Yeti Sports game remake project",
      "NFT collection launch review",
      "In-game token utility",
      "Long-term ecosystem building",
    ],
  },
];

export default function Roadmap() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-black/50 to-yeti-dark/30 overflow-x-hidden w-full max-w-full">
      <div className="container mx-auto max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 px-2">
            Roadmap 🗺️
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-200 px-2">
            Check out Yeti Sports&apos; future plans
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* 타임라인 라인 */}
          <div className="absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-yeti-light via-yeti-blue to-yeti-dark transform md:-translate-x-1/2" />

          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* 타임라인 포인트 */}
                <div className="absolute left-4 sm:left-8 md:left-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-yeti-light rounded-full border-2 sm:border-4 border-black transform md:-translate-x-1/2 z-10" />

                {/* 카드 */}
                <div
                  className={`w-full md:w-[45%] ml-4 sm:ml-8 md:ml-0 max-w-full ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <motion.div
                    className={`bg-gradient-to-br from-yeti-blue/80 to-yeti-dark/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-7 md:p-8 border-2 ${
                      item.status === "completed"
                        ? "border-green-400"
                        : item.status === "in-progress"
                        ? "border-yeti-light"
                        : "border-white/20"
                    }`}
                    whileHover={{
                      scale: 1.02,
                      rotate: [0, 1, -1, 0],
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-4 sm:mb-5">
                      <span
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold w-fit ${
                          item.status === "completed"
                            ? "bg-green-400/20 text-green-300"
                            : item.status === "in-progress"
                            ? "bg-yeti-light/20 text-yeti-light"
                            : "bg-white/10 text-white/60"
                        }`}
                      >
                        {item.status === "completed"
                          ? "✅ Completed"
                          : item.status === "in-progress"
                          ? "🚀 In Progress"
                          : "📅 Planned"}
                      </span>
                      <span className="text-xl sm:text-2xl font-bold text-white">
                        {item.phase}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-blue-200 mb-4 sm:mb-5">
                      {item.description}
                    </p>

                    <ul className="space-y-2 sm:space-y-2.5">
                      {item.items.map((listItem, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="flex items-start text-white/80 text-sm sm:text-base"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                          whileHover={{ x: 5, color: "white" }}
                        >
                          <motion.span
                            className="mr-2 flex-shrink-0"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: itemIndex * 0.2,
                            }}
                          >
                            •
                          </motion.span>
                          <span className="break-words">{listItem}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
