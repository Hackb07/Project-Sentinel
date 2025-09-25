import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, TrendingUp, MapPin } from 'lucide-react';

interface ChangeDetectionProps {
  beforeImage: string | null;
  afterImage: string | null;
  isProcessing: boolean;
  changeScore: number;
}

const ChangeDetection: React.FC<ChangeDetectionProps> = ({
  beforeImage,
  afterImage,
  isProcessing,
  changeScore,
}) => {
  const [showComparison, setShowComparison] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [detectionType, setDetectionType] = useState<string>('');

  useEffect(() => {
    if (changeScore > 0.7) {
      setDetectionType('Deforestation');
    } else if (changeScore > 0.5) {
      setDetectionType('Urban Expansion');
    } else if (changeScore > 0.3) {
      setDetectionType('Flooding');
    } else {
      setDetectionType('No significant change');
    }
  }, [changeScore]);

  const getScoreColor = (score: number) => {
    if (score > 0.7) return 'text-red-400';
    if (score > 0.5) return 'text-orange-400';
    if (score > 0.3) return 'text-yellow-400';
    return 'text-emerald-400';
  };

  const getScoreBackground = (score: number) => {
    if (score > 0.7) return 'bg-red-500';
    if (score > 0.5) return 'bg-orange-500';
    if (score > 0.3) return 'bg-yellow-500';
    return 'bg-emerald-500';
  };

  if (isProcessing) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-400"></div>
        <div className="mt-4">
          <p className="text-slate-300">Processing satellite imagery...</p>
          <p className="text-sm text-slate-400 mt-2">Running change detection algorithms</p>
        </div>
      </div>
    );
  }

  if (!beforeImage && !afterImage) {
    return (
      <div className="text-center py-12 text-slate-400">
        <Eye className="h-12 w-12 mx-auto mb-4" />
        <p>Upload satellite images to begin analysis</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Detection Results */}
      {changeScore > 0 && (
        <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-xl p-6 border border-slate-600/50 shadow-xl backdrop-blur-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <TrendingUp className="h-5 w-5 text-blue-400" />
              </div>
              <h4 className="font-bold text-lg">Analysis Results</h4>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-slate-400" />
              <span className="text-sm text-slate-400 font-medium">Sample Region</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-600/30">
              <div className={`text-2xl font-bold ${getScoreColor(changeScore)}`}>
                {(changeScore * 100).toFixed(1)}%
              </div>
              <div className="text-sm text-slate-400 font-medium mt-1">Change Score</div>
            </div>
            <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-600/30">
              <div className="text-xl font-bold text-purple-400">{detectionType}</div>
              <div className="text-sm text-slate-400 font-medium mt-1">Detected Change</div>
            </div>
            <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-600/30">
              <div className="text-2xl font-bold text-indigo-400">
                {changeScore > 0.5 ? 'Critical' : changeScore > 0.3 ? 'Moderate' : 'Low'}
              </div>
              <div className="text-sm text-slate-400 font-medium mt-1">Alert Level</div>
            </div>
          </div>

          {/* Progress bar for change score */}
          <div className="mt-4">
            <div className="flex justify-between text-sm text-slate-300 mb-2 font-medium">
              <span>Change Intensity</span>
              <span>{(changeScore * 100).toFixed(1)}%</span>
            </div>
            <div className="w-full bg-slate-600 rounded-full h-3 shadow-inner">
              <div
                className={`h-3 rounded-full transition-all duration-1000 shadow-lg ${getScoreBackground(changeScore)}`}
                style={{ width: `${changeScore * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Image Comparison */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-lg">Comparative Analysis</h4>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="flex items-center space-x-2 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors px-3 py-1 rounded-lg hover:bg-blue-400/10"
            >
              {showComparison ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span>{showComparison ? 'Hide' : 'Show'} Comparison</span>
            </button>
          </div>
        </div>

        {showComparison ? (
          <div className="relative">
            {/* Slider Comparison */}
            <div className="relative overflow-hidden rounded-xl bg-slate-700 shadow-2xl border border-slate-600">
              <div className="relative h-64 sm:h-80">
                {afterImage && (
                  <img
                    src={afterImage}
                    alt="After"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                {beforeImage && (
                  <img
                    src={beforeImage}
                    alt="Before"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                    }}
                  />
                )}
                
                {/* Slider control */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize shadow-lg"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-2 border-slate-800 flex items-center justify-center shadow-lg">
                    <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize"
              />
            </div>

            <div className="flex justify-between text-sm text-slate-300 mt-3 font-medium">
              <span>Before (T-1)</span>
              <span>After (T)</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {beforeImage && (
              <div className="space-y-2">
                <img
                  src={beforeImage}
                  alt="Before"
                  className="w-full h-48 object-cover rounded-xl border border-slate-600 shadow-lg"
                />
                <p className="text-sm text-slate-300 text-center font-medium">Before (T-1)</p>
              </div>
            )}
            {afterImage && (
              <div className="space-y-2">
                <img
                  src={afterImage}
                  alt="After"
                  className="w-full h-48 object-cover rounded-xl border border-slate-600 shadow-lg"
                />
                <p className="text-sm text-slate-300 text-center font-medium">After (T)</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangeDetection;