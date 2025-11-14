export default function HowItWorks() {
  const steps = [
    {
      emoji: '🎤',
      title: 'Player 1 sings a line',
      description: 'Pick any song and sing it your way',
      color: 'from-pink-300 to-pink-400'
    },
    {
      emoji: '🔁',
      title: 'App reverses it',
      description: 'Our magic engine flips the audio instantly',
      color: 'from-purple-300 to-purple-400'
    },
    {
      emoji: '😳',
      title: 'Player 2 sings the reversed audio',
      description: 'Try to mimic the backwards sound',
      color: 'from-cyan-300 to-cyan-400'
    },
    {
      emoji: '😂',
      title: 'App flips it again — reveal & laughs',
      description: 'Hear the hilarious result and burst out laughing',
      color: 'from-pink-300 to-purple-400'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-gradient-to-br from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-sm font-medium text-purple-600 mb-4">
            <span className="mr-2">🎯</span>
            Simple & Fun
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Four simple steps to endless laughter
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-white">
                <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                  {index + 1}
                </div>

                <div className="text-5xl sm:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.emoji}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-3xl text-purple-300">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
