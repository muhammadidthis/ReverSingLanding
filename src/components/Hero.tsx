import { useState } from 'react';
import VideoModal from './VideoModal';

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-cyan-50">
          <div className="absolute top-20 left-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-block">
                <span className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-purple-600 shadow-sm">
                  <span className="mr-2">✨</span>
                  The cutest party game ever
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Break the Ice.
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Reverse the Fun.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
                Turn awkward silences into laughter with the cutest reverse-singing party game.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white text-lg font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center">
                    <span className="mr-3 text-2xl">📱</span>
                    Download on Google Play
                  </span>
                </a>

                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 text-lg font-semibold rounded-2xl hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-pink-200"
                >
                  <span className="mr-3 text-2xl">▶️</span>
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1">⭐⭐⭐⭐⭐</span>
                </div>
                <span>500+ downloads</span>
                <span>🎉 Free to play</span>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 animate-float">
                <div className="relative mx-auto w-64 sm:w-80 aspect-[9/19] bg-gradient-to-br from-pink-400 to-purple-400 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center text-6xl">
                      🎤
                    </div>
                  </div>
                </div>

                <div className="absolute -top-8 -right-8 text-4xl animate-bounce-slow">✨</div>
                <div className="absolute -bottom-4 -left-4 text-3xl animate-bounce-slow animation-delay-1000">💖</div>
                <div className="absolute top-1/2 -right-12 text-3xl animate-bounce-slow animation-delay-2000">🎵</div>
                <div className="absolute top-1/4 -left-8 text-2xl animate-bounce-slow animation-delay-3000">😂</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </>
  );
}
