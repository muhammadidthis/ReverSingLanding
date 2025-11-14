import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-300 to-purple-300 rounded-2xl flex items-center justify-center text-2xl">
              🎤
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              ReverSing
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              How it works
            </button>
            <button onClick={() => scrollToSection('demo')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Demo
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Features
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              FAQ
            </button>
          </nav>

          <div className="hidden md:block">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <span className="mr-2">📱</span>
              Download
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-pink-50 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-pink-100">
            <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 rounded-xl transition-colors font-medium">
              How it works
            </button>
            <button onClick={() => scrollToSection('demo')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 rounded-xl transition-colors font-medium">
              Demo
            </button>
            <button onClick={() => scrollToSection('features')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 rounded-xl transition-colors font-medium">
              Features
            </button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 rounded-xl transition-colors font-medium">
              FAQ
            </button>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-2.5 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-2xl font-semibold"
            >
              <span className="mr-2">📱</span>
              Download
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
