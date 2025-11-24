'use client'

import { motion } from 'framer-motion'

const roadmapItems = [
  {
    phase: 'Phase 1',
    title: 'Token Launch & Initial Marketing',
    description: 'Token launch on Pump.fun and initial community building',
    status: 'completed',
    items: [
      'Launch token on Pump.fun',
      'Official website launch',
      'Social media channels setup',
      'Initial holder recruitment',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Community Expansion',
    description: 'Active community engagement and holder growth',
    status: 'in-progress',
    items: [
      'Twitter community activation',
      'Meme contests',
      'Influencer partnerships',
      'CMC/Coingecko listing applications',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Exchange Listings',
    description: 'Liquidity expansion through major exchange listings',
    status: 'planned',
    items: [
      'Raydium DEX listing',
      'CEX listing applications (Jupiter, Orca, etc.)',
      'Liquidity pool expansion',
      'Trading volume goals',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Ecosystem Expansion',
    description: 'Yeti Sports game and NFT project integration',
    status: 'planned',
    items: [
      'Yeti Sports game remake project',
      'NFT collection launch review',
      'In-game token utility',
      'Long-term ecosystem building',
    ],
  },
]

export default function Roadmap() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black/50 to-yeti-dark/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Roadmap 🗺️
          </h2>
          <p className="text-xl text-blue-200">
            Check out Yeti Sports' future plans
          </p>
        </motion.div>

        <div className="relative">
          {/* 타임라인 라인 */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yeti-light via-yeti-blue to-yeti-dark transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* 타임라인 포인트 */}
                <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-yeti-light rounded-full border-4 border-black transform md:-translate-x-1/2 z-10" />

                {/* 카드 */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div
                    className={`bg-gradient-to-br from-yeti-blue/80 to-yeti-dark/80 backdrop-blur-md rounded-2xl p-6 border-2 ${
                      item.status === 'completed'
                        ? 'border-green-400'
                        : item.status === 'in-progress'
                        ? 'border-yeti-light'
                        : 'border-white/20'
                    } hover:scale-105 transition-transform`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          item.status === 'completed'
                            ? 'bg-green-400/20 text-green-300'
                            : item.status === 'in-progress'
                            ? 'bg-yeti-light/20 text-yeti-light'
                            : 'bg-white/10 text-white/60'
                        }`}
                      >
                        {item.status === 'completed'
                          ? '✅ Completed'
                          : item.status === 'in-progress'
                          ? '🚀 In Progress'
                          : '📅 Planned'}
                      </span>
                      <span className="text-2xl font-bold text-white">
                        {item.phase}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-blue-200 mb-4">{item.description}</p>

                    <ul className="space-y-2">
                      {item.items.map((listItem, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start text-white/80"
                        >
                          <span className="mr-2">•</span>
                          <span>{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

