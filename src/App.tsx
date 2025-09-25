import React, { useState, useRef } from 'react';
import { Upload, Satellite, AlertTriangle, Eye, Activity, Zap, MapPin, Clock, BarChart3, Settings, Shield, Globe } from 'lucide-react';
import ImageUploader from './components/ImageUploader';
import ChangeDetection from './components/ChangeDetection';
import AlertsPanel from './components/AlertsPanel';
import ProcessingStatus from './components/ProcessingStatus';
import SystemStats from './components/SystemStats';

function App() {
  const [beforeImage, setBeforeImage] = useState<string | null>(null);
  const [afterImage, setAfterImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [alerts, setAlerts] = useState<any[]>([]);
  const [changeScore, setChangeScore] = useState<number>(0);

  const handleProcessing = (score: number) => {
    setChangeScore(score);
    if (score > 0.3) {
      const newAlert = {
        id: Date.now(),
        type: score > 0.7 ? 'critical' : 'warning',
        message: score > 0.7 ? 'Critical environmental change detected' : 'Moderate change detected',
        timestamp: new Date(),
        location: 'Sample Region',
        score: score
      };
      setAlerts(prev => [newAlert, ...prev]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Satellite className="h-10 w-10 text-emerald-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Sentinel AI
                </h1>
                <p className="text-sm text-slate-400 font-medium">Advanced Earth Observation Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-sm">
                  <Globe className="h-4 w-4 text-blue-400" />
                  <span className="text-slate-300 font-medium">Global Coverage</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Shield className="h-4 w-4 text-emerald-400" />
                  <span className="text-slate-300 font-medium">Secure Processing</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-slate-300 font-medium">System Online</span>
              </div>
              <Settings className="h-5 w-5 text-slate-400 hover:text-emerald-400 cursor-pointer transition-colors duration-200" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* System Overview */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-emerald-900/30 via-slate-800/50 to-blue-900/30 rounded-2xl p-8 border border-emerald-500/20 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-emerald-300 mb-3">Mission Control Dashboard</h2>
                <p className="text-slate-300 text-lg font-medium">Real-time Earth observation powered by edge computing</p>
                <p className="text-slate-400 text-sm mt-1">Raspberry Pi 3 Model A • OpenCV • TensorFlow Lite</p>
              </div>
              <div className="flex items-center space-x-8 text-sm">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-1">{changeScore.toFixed(2)}</div>
                  <div className="text-slate-400 font-medium">Change Score</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-1">{alerts.length}</div>
                  <div className="text-slate-400 font-medium">Active Alerts</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-1">24/7</div>
                  <div className="text-slate-400 font-medium">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Processing Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Upload */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <Upload className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold">Satellite Image Processing</h3>
              </div>
              <ImageUploader
                beforeImage={beforeImage}
                afterImage={afterImage}
                setBeforeImage={setBeforeImage}
                setAfterImage={setAfterImage}
                onProcessStart={() => setIsProcessing(true)}
                onProcessComplete={(score) => {
                  setIsProcessing(false);
                  handleProcessing(score);
                }}
              />
            </div>

            {/* Change Detection Visualization */}
            {(beforeImage || afterImage) && (
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Eye className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold">Advanced Change Detection</h3>
                </div>
                <ChangeDetection
                  beforeImage={beforeImage}
                  afterImage={afterImage}
                  isProcessing={isProcessing}
                  changeScore={changeScore}
                />
              </div>
            )}

            {/* Processing Workflow */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Activity className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">AI Processing Pipeline</h3>
              </div>
              <ProcessingStatus isProcessing={isProcessing} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Alerts Panel */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-orange-500/20 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold">Intelligence Alerts</h3>
              </div>
              <AlertsPanel alerts={alerts} />
            </div>

            {/* System Statistics */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-indigo-500/20 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-indigo-400" />
                </div>
                <h3 className="text-lg font-bold">Performance Metrics</h3>
              </div>
              <SystemStats />
            </div>

            {/* Detection Capabilities */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                  <Zap className="h-5 w-5 text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold">Detection Capabilities</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-red-400 rounded-full shadow-lg"></div>
                  <span className="text-sm font-medium">Deforestation Detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full shadow-lg"></div>
                  <span className="text-sm font-medium">Flood Monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full shadow-lg"></div>
                  <span className="text-sm font-medium">Urban Expansion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full shadow-lg"></div>
                  <span className="text-sm font-medium">Agricultural Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/95 backdrop-blur-sm border-t border-slate-700/50 mt-16 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Satellite className="h-5 w-5 text-emerald-400" />
              <span className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Sentinel AI
              </span>
            </div>
            <p className="text-sm text-slate-300 font-medium">© 2024 B. Tharun Bala | Roll No: 610823U243059</p>
            <p className="text-xs text-slate-400 mt-1">B.Tech AI & Data Science | Perumal Manimekalai College of Engineering, Hosur</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;