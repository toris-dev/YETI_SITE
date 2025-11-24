export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-sm border-t border-white/10 py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white mb-2">
            🏔️ Yeti Sports 🏔️
          </h3>
          <p className="text-blue-200">
            Launch the Penguins! Relive the classic game as a meme coin
          </p>
        </div>
        
        <div className="border-t border-white/10 pt-6 mt-6">
          <p className="text-white/60 text-sm">
            ⚠️ Investment Warning: Cryptocurrency investments carry high risks.
            Please make investment decisions carefully and only invest within
            your risk tolerance.
          </p>
          <p className="text-white/40 text-xs mt-4">
            © 2024 Yeti Sports. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

