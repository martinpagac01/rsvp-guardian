import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/supabaseClient';
import imageCompression from 'browser-image-compression';
import libheif from 'libheif-js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Camera, CheckCircle, AlertTriangle, PartyPopper } from 'lucide-react';

export function PhotoUploader() {
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]);
  const [uploaderName, setUploaderName] = useState('');
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
      setSuccess(false);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      setError('Prosím, vyberte aspoň jednu fotku.');
      return;
    }
    if (!uploaderName.trim()) {
      setError('Prosím, zadajte svoje meno.');
      return;
    }

    setUploading(true);
    setSuccess(false);
    setError(null);

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const decoder = new libheif.HeifDecoder();

      for (let file of files) {
        const isHeic = file.type === 'image/heic' || file.name.toLowerCase().endsWith('.heic');
        if (isHeic) {
          try {
            const arrayBuffer = await file.arrayBuffer();
            const data = decoder.decode(arrayBuffer);
            if (!data || data.length === 0) {
              throw new Error('HEIC file is empty or could not be decoded.');
            }
            const image = data[0];
            const width = image.get_width();
            const height = image.get_height();

            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');

            if (!ctx) throw new Error('Could not create canvas context');

            const imageData = ctx.createImageData(width, height);
            await new Promise<void>((resolve, reject) => {
              image.display(imageData, (displayImageData) => {
                if (!displayImageData) {
                  return reject(new Error('Failed to display HEIC image.'));
                }
                ctx.putImageData(displayImageData, 0, 0);
                resolve();
              });
            });

            const jpegBlob = await new Promise<Blob | null>((resolve) => {
              canvas.toBlob(resolve, 'image/jpeg', 0.9);
            });

            if (!jpegBlob) throw new Error('Could not convert canvas to JPEG');

            file = new File([jpegBlob], file.name.replace(/\.heic$/i, '.jpg'), { type: 'image/jpeg' });

          } catch (conversionError) {
            console.error('Could not convert HEIC file:', conversionError);
            throw new Error('Nepodarilo sa skonvertovať HEIC súbor.');
          }
        }

        const compressedFile = await imageCompression(file, options);
        const fileName = `${Date.now()}_${file.name.replace(/\s/g, '_')}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('wedding-photos')
          .upload(filePath, compressedFile);

        if (uploadError) {
          throw uploadError;
        }

        const { data: urlData } = supabase.storage
          .from('wedding-photos')
          .getPublicUrl(filePath);

        const { error: dbError } = await supabase.from('photos').insert({
          uploader_name: uploaderName.trim(),
          file_url: urlData.publicUrl,
        });

        if (dbError) {
          throw dbError;
        }
      }

      setSuccess(true);
      setFiles([]);
      setUploaderName('');
      if(fileInputRef.current) {
        fileInputRef.current.value = '';
      }

    } catch (err: any) {
      setError(`Chyba pri nahrávaní: ${err.message}`);
    } finally {
      setUploading(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center text-center space-y-4 py-8">
        <PartyPopper className="h-16 w-16 text-green-500" />
        <h3 className="text-2xl font-semibold">Ďakujeme!</h3>
        <p className="text-gray-600">Vaše fotky boli úspešne nahrané.</p>
        <div className="flex gap-4">
          <Button onClick={() => setSuccess(false)} variant="outline">Nahrať ďalšie</Button>
          <Button onClick={() => navigate('/app/gallery')}>Pozrieť si galériu</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col space-y-6">
      <p className="text-sm text-muted-foreground text-center">
        Možnosť nahrať fotky a videá v plnej kvalite bude dostupná po svadbe. Ďakujeme!
      </p>
      
      <div className="space-y-4">
        <Input
          id="uploader-name"
          type="text"
          placeholder="Vaše meno alebo prezývka"
          value={uploaderName}
          onChange={(e) => setUploaderName(e.target.value)}
          disabled={uploading}
          className="h-12 text-base border-2 border-[#9b87f5]/40 focus:border-[#9b87f5] focus:ring-[#9b87f5]"
        />

        <Input
          id="picture"
          type="file"
          multiple
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        <Button 
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="w-full h-12 text-base bg-[#9b87f5] text-white hover:bg-[#8B5CF6]"
        >
          <Camera className="mr-2 h-5 w-5" />
          Vybrať fotky
        </Button>
      </div>

      {files.length > 0 && (
        <div className="w-full text-center space-y-4 pt-2">
          <p className="text-sm text-gray-600 flex items-center justify-center">
            <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
            <span>{files.length} {files.length === 1 ? 'súbor vybraný' : 'súbory vybrané'}</span>
          </p>
          <Button
            onClick={handleUpload}
            disabled={uploading || !uploaderName.trim()}
            size="lg"
            className="w-full h-14 text-lg bg-[#9b87f5] text-white hover:bg-[#8B5CF6]"
          >
            {uploading ? `Nahrávam...` : "Nahrať fotky"}
          </Button>
        </div>
      )}

      {uploading && <p className='text-sm text-gray-500 pt-2'>Chvíľku strpenia, fotky sa optimalizujú a nahrávajú...</p>}
      
      {error && (
        <div className="flex items-center text-red-600 pt-2">
          <AlertTriangle className="mr-2 h-5 w-5" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
