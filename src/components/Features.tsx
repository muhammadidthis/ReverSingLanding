export default function Features() {
  const features = [
    {
      emoji: '👥',
      title: 'Two-player local mode',
      description: 'Play anywhere, anytime. No internet needed, just bring a friend and your phone.',
      color: 'from-pink-300 to-pink-400',
      hoverColor: 'group-hover:from-pink-400 group-hover:to-pink-500'
    },
    {
      emoji: '⚡',
      title: 'One-tap reverse engine',
      description: 'Lightning-fast audio processing. Record, reverse, and reveal in seconds.',
      color: 'from-purple-300 to-purple-400',
      hoverColor: 'group-hover:from-purple-400 group-hover:to-purple-500'
    },
    {
      emoji: '📱',
      title: 'Save & share',
      description: 'Export your funniest clips to camera roll. Share the laughter on social media.',
      color: 'from-cyan-300 to-cyan-400',
      hoverColor: 'group-hover:from-cyan-400 group-hover:to-cyan-500'
    },
    {
      emoji: '🎉',
      title: 'Perfect icebreaker',
      description: 'Break awkward silence instantly. Make new friends, bond with old ones.',
      color: 'from-pink-300 to-purple-400',
      hoverColor: 'group-hover:from-pink-400 group-hover:to-purple-500'
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-gradient-to-br from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-cyan-100 rounded-full text-sm font-medium text-cyan-600 mb-4">
            <span className="mr-2">⭐</span>
            Why you'll love it
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Features That Spark Joy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to turn any gathering into a party
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-white h-full">
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${feature.color} ${feature.hoverColor} rounded-t-3xl transition-all duration-300`}></div>

                <div className="mb-6 relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <span className="text-3xl">{feature.emoji}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ✨
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
            <span>🎨</span>
            <span>Beautiful design</span>
            <span>•</span>
            <span>🚀</span>
            <span>Lightning fast</span>
            <span>•</span>
            <span>💯</span>
            <span>100% free</span>
          </div>
        </div>
      </div>
    </section>
  );
}
