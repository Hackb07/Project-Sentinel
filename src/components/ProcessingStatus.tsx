import React from 'react';
import { CheckCircle, Clock, Zap, Image, Brain, Bell } from 'lucide-react';

interface ProcessingStatusProps {
  isProcessing: boolean;
}

const ProcessingStatus: React.FC<ProcessingStatusProps> = ({ isProcessing }) => {
  const steps = [
    {
      id: 1,
      name: 'Image Preprocessing',
      icon: Image,
      description: 'Resize, normalize, convert to .npy arrays',
    },
    {
      id: 2,
      name: 'Change Detection',
      icon: Brain,
      description: 'Image differencing and ML inference',
    },
    {
      id: 3,
      name: 'Alert Generation',
      icon: Bell,
      description: 'Threshold-based notification system',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3 mb-4">
        <div className={`w-4 h-4 rounded-full shadow-lg ${isProcessing ? 'bg-yellow-400 animate-pulse' : 'bg-emerald-400'}`}></div>
        <span className="text-sm font-bold">
          {isProcessing ? 'Processing in progress...' : 'System ready'}
        </span>
      </div>

      <div className="space-y-3">
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          const isActive = isProcessing;
          const isCompleted = !isProcessing;

          return (
            <div key={step.id} className="flex items-center space-x-3">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                isCompleted 
                  ? 'bg-emerald-500 shadow-lg' 
                  : isActive 
                    ? 'bg-yellow-500 animate-pulse shadow-lg' 
                    : 'bg-slate-600 shadow-md'
              }`}>
                {isCompleted ? (
                  <CheckCircle className="h-4 w-4 text-white" />
                ) : isActive ? (
                  <Clock className="h-4 w-4 text-white" />
                ) : (
                  <StepIcon className="h-4 w-4 text-slate-400" />
                )}
              </div>
              
              <div className="flex-1">
                <div className={`text-sm font-medium ${
                  isCompleted 
                    ? 'text-emerald-300 font-bold' 
                    : isActive 
                      ? 'text-yellow-300 font-bold' 
                      : 'text-slate-400'
                }`}>
                  {step.name}
                </div>
                <div className="text-xs text-slate-400 font-medium">{step.description}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Raspberry Pi Status */}
      <div className="mt-6 p-4 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-xl border border-slate-600/50 shadow-lg backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-bold text-slate-200">Raspberry Pi 3 Model A</div>
            <div className="text-xs text-slate-400 font-medium">1 GHz CPU, 512 MB RAM</div>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="h-4 w-4 text-emerald-400" />
            <span className="text-xs text-emerald-400 font-bold">Online</span>
          </div>
        </div>
        
        <div className="mt-3 space-y-2">
          <div className="flex justify-between text-xs font-medium">
            <span className="text-slate-400">CPU Usage</span>
            <span className="text-slate-200">{isProcessing ? '85%' : '12%'}</span>
          </div>
          <div className="w-full bg-slate-600 rounded-full h-2 shadow-inner">
            <div 
              className={`h-2 rounded-full transition-all duration-1000 shadow-lg ${
                isProcessing ? 'bg-orange-500 w-[85%]' : 'bg-emerald-500 w-[12%]'
              }`}
            ></div>
          </div>
          
          <div className="flex justify-between text-xs font-medium">
            <span className="text-slate-400">Memory</span>
            <span className="text-slate-200">{isProcessing ? '456MB' : '128MB'}</span>
          </div>
          <div className="w-full bg-slate-600 rounded-full h-2 shadow-inner">
            <div 
              className={`h-2 rounded-full transition-all duration-1000 shadow-lg ${
                isProcessing ? 'bg-orange-500 w-[89%]' : 'bg-emerald-500 w-[25%]'
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessingStatus;