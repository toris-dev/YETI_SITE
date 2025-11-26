"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(
    useTransform(mouseX, (latest) => latest / 20),
    springConfig
  );
  const y = useSpring(
    useTransform(mouseY, (latest) => latest / 20),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full max-w-full"
      onMouseMove={handleMouseMove}
    >
      {/* 배경 애니메이션 */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-black opacity-50"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* 마우스 트래킹 효과 */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        style={{ x, y }}
      />

      {/* 메인 이미지 배경 */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-10 md:opacity-20 pointer-events-none w-full max-w-full overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0.1, 0.15, 0.1], scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/yeticoin_full.png"
          alt="Yeti Coin"
          width={800}
          height={600}
          className="max-w-full md:max-w-4xl w-full h-auto object-contain px-4"
          priority
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 로고 */}
          <motion.div
            className="flex justify-center mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
          >
            <Image
              src="/yeticoin.png"
              alt="Yeti Coin Logo"
              width={160}
              height={160}
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]"
              priority
            />
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold mb-4 md:mb-6 flex items-center justify-center gap-2 sm:gap-4 flex-wrap px-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] flex-shrink-0">
              ❄️
            </span>
            <motion.span
              className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent text-4xl sm:text-5xl md:text-7xl lg:text-9xl flex-shrink-0"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
                textShadow:
                  "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)",
              }}
            >
              YETI
            </motion.span>
            <span className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] flex-shrink-0">
              ❄️
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-4 md:mb-8 font-semibold px-2"
            whileHover={{
              scale: 1.1,
              rotate: [0, -2, 2, -2, 0],
              transition: { duration: 0.5 },
            }}
          >
            Launch the Penguins! 🐧
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-blue-200 mb-8 md:mb-12 max-w-2xl mx-auto px-2"
            whileHover={{ scale: 1.05 }}
          >
            Relive the classic YETI game as a meme coin!
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Available on Pump.fun
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center relative z-20 px-2"
          >
            <motion.a
              href="https://pump.fun/coin/CGevbJ3ceVXjSCnSZJjjoK1Lpx5u1vrg3BYj8kRvpump"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yeti-light to-yeti-blue text-white font-bold text-base sm:text-lg md:text-xl rounded-full shadow-2xl relative overflow-hidden group text-center"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">🚀 Buy on Pump.fun</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yeti-blue to-yeti-light"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#token-info"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md text-white font-bold text-base sm:text-lg md:text-xl rounded-full border-2 border-white/20 relative overflow-hidden group text-center"
              whileHover={{
                scale: 1.1,
                borderColor: "rgba(255, 255, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">📊 Token Info</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* 펭귄 애니메이션 */}
        <motion.div
          className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 md:right-20 cursor-pointer z-0"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            scale: 1.5,
            rotate: [0, 10, -10, 0],
            y: [0, -30, 0],
          }}
          whileTap={{ scale: 1.2 }}
        >
          <span className="text-4xl sm:text-5xl md:text-6xl block drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            🐧
          </span>
        </motion.div>
      </div>
    </section>
  );
}
