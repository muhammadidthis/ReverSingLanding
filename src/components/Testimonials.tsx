export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah K.',
      avatar: '👩',
      quote: 'Best party game ever! We laughed until we cried. Everyone at our game night loved it.',
      rating: 5,
      color: 'from-pink-300 to-pink-400'
    },
    {
      name: 'Mike R.',
      avatar: '👨',
      quote: 'Finally broke the ice with my roommates. Now we play this every weekend!',
      rating: 5,
      color: 'from-purple-300 to-purple-400'
    },
    {
      name: 'Emma L.',
      avatar: '👧',
      quote: 'My friends and I are OBSESSED. The reversed audio is absolutely hilarious every time.',
      rating: 5,
      color: 'from-cyan-300 to-cyan-400'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full text-sm font-medium text-pink-600 mb-4">
            <span className="mr-2">💖</span>
            Loved by players
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent mb-4">
            Don't Just Take Our Word
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our community is saying
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-white h-full">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.color} rounded-2xl flex items-center justify-center text-3xl shadow-md`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-pink-400 text-lg">💖</span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 italic">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full">
            <span className="text-2xl">⭐</span>
            <span className="font-semibold text-gray-700">4.9/5 average rating</span>
            <span className="text-2xl">⭐</span>
          </div>
        </div>
      </div>
    </section>
  );
}
