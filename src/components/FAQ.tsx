import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does ReverSing work?',
      answer: 'Player 1 sings a song line, the app reverses it, Player 2 tries to sing the reversed audio, then the app flips it again to reveal the hilarious result!'
    },
    {
      question: 'Do I need internet to play?',
      answer: 'Nope! ReverSing works completely offline. Just grab your phone and a friend, and you\'re ready to play anywhere.'
    },
    {
      question: 'How many players can join?',
      answer: 'The game is designed for 2+ players. The more friends you have, the more laughs you\'ll share!'
    },
    {
      question: 'Can I save my funny recordings?',
      answer: 'Yes! You can save your favorite clips to your camera roll and share them on social media to spread the joy.'
    },
    {
      question: 'Is ReverSing really free?',
      answer: 'Absolutely! ReverSing is 100% free to download and play. No hidden costs, no subscriptions—just pure fun.'
    },
    {
      question: 'What songs can I sing?',
      answer: 'Any song you want! Pop, rock, Disney classics, or even make up your own. The funnier the result, the better the game!'
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gradient-to-br from-white to-cyan-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-sm font-medium text-purple-600 mb-4">
            <span className="mr-2">❓</span>
            Got questions?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about ReverSing
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-white overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-gray-800 text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>

              <div
                className={`transition-all duration-300 ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="mailto:support@reversing.app"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-400 to-cyan-400 text-white font-semibold rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span className="mr-2">📧</span>
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
