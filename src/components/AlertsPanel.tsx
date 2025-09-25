import React from 'react';
import { AlertTriangle, Clock, MapPin, TrendingUp } from 'lucide-react';

interface Alert {
  id: number;
  type: 'critical' | 'warning' | 'info';
  message: string;
  timestamp: Date;
  location: string;
  score: number;
}

interface AlertsPanelProps {
  alerts: Alert[];
}

const AlertsPanel: React.FC<AlertsPanelProps> = ({ alerts }) => {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical':
        return <AlertTriangle className="h-4 w-4 text-red-400" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-400" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-blue-400" />;
    }
  };

  const getAlertStyle = (type: string) => {
    switch (type) {
      case 'critical':
        return 'bg-red-500/10 border-red-500/30';
      case 'warning':
        return 'bg-yellow-500/10 border-yellow-500/30';
      default:
        return 'bg-blue-500/10 border-blue-500/30';
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (alerts.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="p-4 bg-slate-700/30 rounded-full w-fit mx-auto mb-4">
          <AlertTriangle className="h-8 w-8 text-slate-400 opacity-50" />
        </div>
        <p className="text-sm text-slate-300 font-medium">No alerts detected</p>
        <p className="text-xs text-slate-400 mt-1">System monitoring active</p>
      </div>
    );
  }

  return (
    <div className="space-y-3 max-h-80 overflow-y-auto">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`p-4 rounded-xl border ${getAlertStyle(alert.type)} transition-all hover:shadow-lg backdrop-blur-sm`}
        >
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center space-x-2">
              {getAlertIcon(alert.type)}
              <span className="text-sm font-bold capitalize text-white">
                {alert.type}
              </span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-slate-400 font-medium">
              <Clock className="h-3 w-3" />
              <span>{formatTime(alert.timestamp)}</span>
            </div>
          </div>
          
          <p className="text-sm text-slate-200 mb-3 font-medium">{alert.message}</p>
          
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <div className="flex items-center space-x-1">
              <MapPin className="h-3 w-3" />
              <span>{alert.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <TrendingUp className="h-3 w-3" />
              <span>{(alert.score * 100).toFixed(1)}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlertsPanel;