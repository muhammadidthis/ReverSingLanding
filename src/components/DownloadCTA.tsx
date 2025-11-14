export default function DownloadCTA() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 text-6xl animate-bounce-slow">🎵</div>
        <div className="absolute top-20 right-20 text-5xl animate-bounce-slow animation-delay-1000">✨</div>
        <div className="absolute bottom-10 left-1/4 text-4xl animate-bounce-slow animation-delay-2000">💖</div>
        <div className="absolute bottom-20 right-1/3 text-5xl animate-bounce-slow animation-delay-3000">🎤</div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ready to Reverse the Vibes?
          </h2>

          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of players making memories and spreading laughter. Download now and start your first game in seconds!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-10 py-5 bg-white text-purple-600 text-lg font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span className="mr-3 text-3xl">📱</span>
              <div className="text-left">
                <div className="text-xs text-gray-500">GET IT ON</div>
                <div className="text-lg leading-tight">Google Play</div>
              </div>
            </a>

            <button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white text-lg font-semibold rounded-2xl hover:bg-white/30 transition-all duration-300"
            >
              Learn more
            </button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-white/90 text-sm pt-4">
            <div className="flex items-center space-x-2">
              <span>✅</span>
              <span>100% Free</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✅</span>
              <span>No Ads</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✅</span>
              <span>Works Offline</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
