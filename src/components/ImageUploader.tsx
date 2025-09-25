import React, { useRef, useState } from 'react';
import { Upload, Image as ImageIcon, Zap } from 'lucide-react';

interface ImageUploaderProps {
  beforeImage: string | null;
  afterImage: string | null;
  setBeforeImage: (image: string | null) => void;
  setAfterImage: (image: string | null) => void;
  onProcessStart: () => void;
  onProcessComplete: (score: number) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  beforeImage,
  afterImage,
  setBeforeImage,
  setAfterImage,
  onProcessStart,
  onProcessComplete,
}) => {
  const beforeInputRef = useRef<HTMLInputElement>(null);
  const afterInputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState<string | null>(null);

  const handleFileUpload = (file: File, type: 'before' | 'after') => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (type === 'before') {
        setBeforeImage(result);
      } else {
        setAfterImage(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent, type: string) => {
    e.preventDefault();
    setDragOver(type);
  };

  const handleDragLeave = () => {
    setDragOver(null);
  };

  const handleDrop = (e: React.DragEvent, type: 'before' | 'after') => {
    e.preventDefault();
    setDragOver(null);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0], type);
    }
  };

  const processImages = () => {
    if (!beforeImage || !afterImage) return;
    
    onProcessStart();
    
    // Simulate processing time and generate a random change score
    setTimeout(() => {
      const changeScore = Math.random() * 0.9 + 0.1; // Random score between 0.1 and 1.0
      onProcessComplete(changeScore);
    }, 3000);
  };

  const loadSampleImages = () => {
    // Use sample satellite images from Pexels
    setBeforeImage('https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=512');
    setAfterImage('https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=512');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Before Image */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-slate-300">Before Image (T-1)</label>
          <div
            className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${
              dragOver === 'before'
                ? 'border-emerald-400 bg-emerald-400/20 shadow-lg'
                : beforeImage
                ? 'border-emerald-500/50 bg-emerald-500/10 shadow-md'
                : 'border-slate-600 hover:border-emerald-400/50 hover:bg-emerald-400/5'
            }`}
            onDragOver={(e) => handleDragOver(e, 'before')}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, 'before')}
          >
            {beforeImage ? (
              <div className="space-y-3">
                <img
                  src={beforeImage}
                  alt="Before"
                  className="w-full h-40 object-cover rounded-lg shadow-lg border border-slate-600"
                />
                <button
                  onClick={() => beforeInputRef.current?.click()}
                  className="text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                >
                  Change image
                </button>
              </div>
            ) : (
              <div
                className="space-y-3 cursor-pointer"
                onClick={() => beforeInputRef.current?.click()}
              >
                <div className="p-3 bg-slate-700/50 rounded-full mb-3 mx-auto w-fit">
                  <ImageIcon className="h-8 w-8 text-emerald-400" />
                </div>
                <div>
                  <p className="text-slate-300 font-medium">Upload Before Image</p>
                  <p className="text-xs text-slate-400 mt-1">PNG, JPG up to 10MB</p>
                </div>
              </div>
            )}
          </div>
          <input
            ref={beforeInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                handleFileUpload(e.target.files[0], 'before');
              }
            }}
          />
        </div>

        {/* After Image */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-slate-300">After Image (T)</label>
          <div
            className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${
              dragOver === 'after'
                ? 'border-blue-400 bg-blue-400/20 shadow-lg'
                : afterImage
                ? 'border-blue-500/50 bg-blue-500/10 shadow-md'
                : 'border-slate-600 hover:border-blue-400/50 hover:bg-blue-400/5'
            }`}
            onDragOver={(e) => handleDragOver(e, 'after')}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, 'after')}
          >
            {afterImage ? (
              <div className="space-y-3">
                <img
                  src={afterImage}
                  alt="After"
                  className="w-full h-40 object-cover rounded-lg shadow-lg border border-slate-600"
                />
                <button
                  onClick={() => afterInputRef.current?.click()}
                  className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Change image
                </button>
              </div>
            ) : (
              <div
                className="space-y-3 cursor-pointer"
                onClick={() => afterInputRef.current?.click()}
              >
                <div className="p-3 bg-slate-700/50 rounded-full mb-3 mx-auto w-fit">
                  <ImageIcon className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <p className="text-slate-300 font-medium">Upload After Image</p>
                  <p className="text-xs text-slate-400 mt-1">PNG, JPG up to 10MB</p>
                </div>
              </div>
            )}
          </div>
          <input
            ref={afterInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                handleFileUpload(e.target.files[0], 'after');
              }
            }}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={processImages}
          disabled={!beforeImage || !afterImage}
          className="flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 disabled:from-slate-600 disabled:to-slate-700 disabled:text-slate-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:shadow-none"
        >
          <Zap className="h-4 w-4" />
          <span>Analyze Changes</span>
        </button>
        <button
          onClick={loadSampleImages}
          className="flex items-center justify-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl border border-slate-600"
        >
          <Upload className="h-4 w-4" />
          <span>Load Sample Data</span>
        </button>
      </div>
    </div>
  );
};

export default ImageUploader;