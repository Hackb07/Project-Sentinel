import React from 'react';
import { Activity, HardDrive, Wifi, Thermometer } from 'lucide-react';

const SystemStats: React.FC = () => {
  const stats = [
    {
      label: 'Uptime',
      value: '12h 34m',
      icon: Activity,
      color: 'text-emerald-400',
    },
    {
      label: 'Storage',
      value: '4.2/16 GB',
      icon: HardDrive,
      color: 'text-blue-400',
    },
    {
      label: 'Network',
      value: 'Connected',
      icon: Wifi,
      color: 'text-green-400',
    },
    {
      label: 'Temp',
      value: '45.2°C',
      icon: Thermometer,
      color: 'text-yellow-400',
    },
  ];

  const recentActivity = [
    { time: '14:32', event: 'Image processed', type: 'success' },
    { time: '14:15', event: 'Alert sent', type: 'warning' },
    { time: '13:58', event: 'System boot', type: 'info' },
    { time: '13:45', event: 'Storage cleared', type: 'info' },
  ];

  return (
    <div className="space-y-6">
      {/* System Metrics */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => {
          const StatIcon = stat.icon;
          return (
            <div key={index} className="p-4 bg-gradient-to-br from-slate-700/60 to-slate-600/40 rounded-xl border border-slate-600/50 shadow-lg backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-1">
                <StatIcon className={`h-4 w-4 ${stat.color}`} />
                <span className="text-xs text-slate-400 font-medium">{stat.label}</span>
              </div>
              <div className="text-sm font-bold text-white">{stat.value}</div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div>
        <h4 className="text-sm font-bold text-slate-200 mb-3">Recent Activity</h4>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-slate-700/40 border border-slate-600/30 shadow-sm">
              <div className="text-xs text-slate-400 font-mono font-bold w-12">{activity.time}</div>
              <div className={`w-2 h-2 rounded-full ${
                activity.type === 'success' ? 'bg-emerald-400' :
                activity.type === 'warning' ? 'bg-yellow-400' : 'bg-blue-400'
              } shadow-lg`}></div>
              <div className="text-xs text-slate-200 flex-1 font-medium">{activity.event}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Chart */}
      <div>
        <h4 className="text-sm font-bold text-slate-200 mb-3">Performance Monitor</h4>
        <div className="h-16 bg-gradient-to-r from-slate-700/40 to-slate-600/30 rounded-xl p-2 relative overflow-hidden border border-slate-600/30 shadow-lg">
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between h-12">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-emerald-500 to-emerald-400 w-1 rounded-t animate-pulse shadow-lg"
                style={{
                  height: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.1}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className="text-xs text-slate-400 mt-2 font-medium">Real-time processing metrics</div>
      </div>
    </div>
  );
};

export default SystemStats;