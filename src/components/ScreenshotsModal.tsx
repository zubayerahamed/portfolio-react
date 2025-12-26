import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';

interface Screenshot {
  id: string;
  image_url: string;
  order_index: number;
}

interface ScreenshotsModalProps {
  isOpen: boolean;
  screenshots: Screenshot[];
  projectTitle: string;
  onClose: () => void;
}

export default function ScreenshotsModal({
  isOpen,
  screenshots,
  projectTitle,
  onClose,
}: ScreenshotsModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1
    );
  };

  if (!isOpen || screenshots.length === 0) return null;

  const currentScreenshot = screenshots[currentIndex];

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">{projectTitle} - Screenshots</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gray-50">
          <div className="relative w-full h-[60vh] flex items-center justify-center">
            <img
              src={currentScreenshot.image_url}
              alt={`${projectTitle} screenshot ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>

        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-white">
          <button
            onClick={handlePrevious}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 disabled:opacity-50"
            disabled={screenshots.length === 1}
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex items-center gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 disabled:opacity-50"
            disabled={screenshots.length === 1}
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="px-6 pb-6 text-center text-sm text-gray-500">
          {currentIndex + 1} / {screenshots.length}
        </div>
      </div>
    </div>
  );
}