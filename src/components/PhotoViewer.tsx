import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  id: string;
  file_url: string;
  uploader_name: string;
}

interface PhotoViewerProps {
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function PhotoViewer({ photos, currentIndex, onClose, onNext, onPrev }: PhotoViewerProps) {
  const photo = photos[currentIndex];

  if (!photo) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={onClose}>
      <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors z-10"
        >
          <X size={32} />
        </button>

        {/* Previous Button */}
        {currentIndex > 0 && (
          <button 
            onClick={onPrev} 
            className="absolute left-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors"
          >
            <ChevronLeft size={40} />
          </button>
        )}

        {/* Image */}
        <div className="w-full h-full flex flex-col items-center justify-center p-4">
          <img 
            src={photo.file_url} 
            alt={`Svadobná fotka od ${photo.uploader_name}`} 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl select-none"
            style={{ maxHeight: 'calc(100vh - 100px)' }}
          />
          {photo.uploader_name && (
            <p className="text-white text-center mt-4 bg-black/50 px-4 py-2 rounded-lg">
              Od: {photo.uploader_name}
            </p>
          )}
        </div>

        {/* Next Button */}
        {currentIndex < photos.length - 1 && (
          <button 
            onClick={onNext} 
            className="absolute right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors"
          >
            <ChevronRight size={40} />
          </button>
        )}
      </div>
    </div>
  );
}
