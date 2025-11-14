export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-purple-50 py-12 border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-300 to-purple-300 rounded-2xl flex items-center justify-center text-2xl">
                🎤
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                ReverSing
              </span>
            </div>
            <p className="text-gray-600 mb-4 max-w-sm">
              Turn awkward silences into laughter with the cutest reverse-singing party game. Built with love for party people everywhere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:scale-110 transition-transform duration-300">📱</a>
              <a href="#" className="text-2xl hover:scale-110 transition-transform duration-300">💌</a>
              <a href="#" className="text-2xl hover:scale-110 transition-transform duration-300">🐦</a>
              <a href="#" className="text-2xl hover:scale-110 transition-transform duration-300">📸</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-pink-500 transition-colors">
                  How it works
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-pink-500 transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-pink-500 transition-colors">
                  Demo
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-pink-500 transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="mailto:support@reversing.app" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-purple-100 text-center text-gray-600">
          <p>
            © {currentYear} ReverSing. Built with 💖 by party people, for party people.
          </p>
        </div>
      </div>
    </footer>
  );
}
