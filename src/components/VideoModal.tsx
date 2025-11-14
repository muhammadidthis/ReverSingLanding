import { X } from 'lucide-react';
import { useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
        >
          <X size={24} className="text-gray-700" />
        </button>

        <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
          <div className="text-center space-y-4 p-8">
            <div className="text-6xl">🎬</div>
            <p className="text-xl font-semibold text-gray-700">Demo Video Coming Soon!</p>
            <p className="text-gray-600">Watch players turn "Let It Go" into "Leggo My Toe" 😂</p>
          </div>
        </div>
      </div>
    </div>
  );
}
