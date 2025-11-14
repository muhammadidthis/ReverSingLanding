export default function Demo() {
  return (
    <section id="demo" className="py-16 sm:py-24 bg-gradient-to-br from-purple-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto w-72 sm:w-96 aspect-[9/19] bg-gradient-to-br from-purple-400 to-pink-400 rounded-[3rem] p-3 shadow-2xl animate-float">
              <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                <div className="text-center space-y-4 p-6">
                  <div className="text-6xl">🎬</div>
                  <p className="text-white font-semibold">Gameplay Demo</p>
                  <div className="text-4xl">▶️</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left space-y-6">
            <span className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full text-sm font-medium text-pink-600">
              <span className="mr-2">🎥</span>
              See it in action
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Watch the Magic Happen
            </h2>

            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg border-2 border-white">
              <div className="flex items-start space-x-4 mb-4">
                <div className="text-3xl">💬</div>
                <div>
                  <p className="text-gray-700 text-lg italic mb-2">
                    "It's supposed to be 'Let It Go'… somehow became 'Leggo My Toe'."
                  </p>
                  <p className="text-gray-500 text-sm">- Every player ever 😂</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                  🎵
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">Instant reverse engine</h4>
                  <p className="text-gray-600 text-sm">No waiting, just pure fun</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-300 to-purple-400 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                  📹
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">Save & share clips</h4>
                  <p className="text-gray-600 text-sm">Export your funniest moments</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-300 to-cyan-400 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                  👥
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">Perfect for parties</h4>
                  <p className="text-gray-600 text-sm">2+ players, endless laughter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
