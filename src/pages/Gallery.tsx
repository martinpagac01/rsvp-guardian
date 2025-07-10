import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/supabaseClient';
import { Heart, MessageCircle } from 'lucide-react';
import { PhotoViewer } from '@/components/PhotoViewer';

interface Photo {
  id: string;
  created_at: string;
  uploader_name: string;
  file_url: string;
  likes: number;
}

export default function GalleryPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<string[]>(() => {
    const saved = localStorage.getItem('likedPhotos');
    return saved ? JSON.parse(saved) : [];
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('photos')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        setError('Nepodarilo sa načítať fotky.');
        console.error(error);
      } else {
        setPhotos(data || []);
      }
      setLoading(false);
    };

    fetchPhotos();

    const channel = supabase
      .channel('photos_realtime')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'photos' },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setPhotos(currentPhotos => [payload.new as Photo, ...currentPhotos]);
          } else if (payload.eventType === 'UPDATE') {
            setPhotos(currentPhotos =>
              currentPhotos.map(p => p.id === (payload.new as Photo).id ? payload.new as Photo : p)
            )
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleLike = async (photoId: string) => {
    if (likedPhotos.includes(photoId)) {
      return; // Already liked
    }

    const newLikedPhotos = [...likedPhotos, photoId];
    setLikedPhotos(newLikedPhotos);
    localStorage.setItem('likedPhotos', JSON.stringify(newLikedPhotos));

    // Optimistic UI update
    setPhotos(currentPhotos =>
      currentPhotos.map(p =>
        p.id === photoId ? { ...p, likes: p.likes + 1 } : p
      )
    );

    await supabase.rpc('increment_likes', { photo_id: photoId });
  };

  if (loading) {
    return <div className="text-center py-10">Načítavam galériu...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto max-w-4xl p-4">
      <div className="text-center pt-8 pb-12">
        <h1 className="font-serif text-4xl text-[#1A1F2C]">Svadobná Galéria</h1>
        <p className="font-sans text-lg text-[#4A5568] mt-2">Momentky od našich hostí v reálnom čase.</p>
      </div>

      {photos.length === 0 ? (
        <div className='text-center py-20 bg-gray-50 rounded-lg'>
          <MessageCircle className='mx-auto h-12 w-12 text-gray-400' />
          <h3 className='mt-2 text-lg font-medium text-gray-900'>Zatiaľ žiadne fotky</h3>
          <p className='mt-1 text-sm text-gray-500'>Buďte prvý, kto sa podelí o momentku!</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
          {photos.map((photo, index) => (
            <div key={photo.id} className="relative group overflow-hidden rounded-md shadow-md cursor-pointer aspect-square" onClick={() => setSelectedPhotoIndex(index)}>
              <img src={photo.file_url} alt={`Svadobná fotka od ${photo.uploader_name}`} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <p className="text-sm font-semibold truncate">{photo.uploader_name || 'Anonym'}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs">Páči sa mi to: {photo.likes}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(photo.id);
                    }}
                    disabled={likedPhotos.includes(photo.id)}
                    className="p-1 rounded-full hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Heart className={`h-5 w-5 ${likedPhotos.includes(photo.id) ? 'text-red-500 fill-current' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedPhotoIndex !== null && (
        <PhotoViewer
          photos={photos}
          currentIndex={selectedPhotoIndex}
          onClose={() => setSelectedPhotoIndex(null)}
          onNext={() => setSelectedPhotoIndex((prev) => (prev !== null && prev < photos.length - 1) ? prev + 1 : prev)}
          onPrev={() => setSelectedPhotoIndex((prev) => (prev !== null && prev > 0) ? prev - 1 : prev)}
        />
      )}
    </div>
  );
}
