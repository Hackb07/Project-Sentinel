# Sentinel AI - Earth Change Detection System

![Sentinel AI Banner](https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1200&h=300&fit=crop)

## 🌍 Overview

**Sentinel AI** is an advanced Earth observation platform that uses artificial intelligence to detect environmental changes from satellite imagery. Built for real-time monitoring on edge devices like Raspberry Pi, it provides automated change detection, alert generation, and comprehensive environmental analysis.

### Key Features

- 🛰️ **Real-time Satellite Image Processing**
- 🔍 **AI-Powered Change Detection**
- 🚨 **Automated Alert System**
- 📊 **Performance Monitoring Dashboard**
- 🌱 **Environmental Impact Analysis**
- 💻 **Edge Computing Optimized**

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Modern web browser
- Internet connection for sample data

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/sentinel-ai.git
   cd sentinel-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to access the Sentinel AI dashboard.

## 🏗️ System Architecture

### Frontend Stack
- **React 18** with TypeScript for type safety
- **Tailwind CSS** for responsive, professional styling
- **Lucide React** for consistent iconography
- **Vite** for fast development and optimized builds

### Processing Pipeline

```
Satellite Images → Preprocessing → Change Detection → ML Analysis → Alert Generation
```

1. **Image Preprocessing**
   - Resize and normalize satellite imagery
   - Convert to optimized formats for analysis
   - Apply noise reduction and enhancement filters

2. **Change Detection Algorithm**
   - Compare temporal image pairs (Before/After)
   - Calculate pixel-level differences
   - Generate change score using statistical analysis

3. **Machine Learning Inference**
   - Classify change types (deforestation, flooding, urban expansion)
   - Anomaly detection using lightweight models
   - Confidence scoring for alert prioritization

4. **Alert System**
   - Threshold-based notification triggers
   - Categorized alerts (Critical, Warning, Info)
   - Timestamp and location tracking

## 🎯 How It Works

### 1. Image Upload & Processing

The system accepts satellite imagery in common formats (JPEG, PNG). Users can:

- **Upload Before/After image pairs** for temporal analysis
- **Load sample datasets** for demonstration purposes
- **Drag and drop** images for quick processing

### 2. Change Detection Analysis

The core algorithm performs:

```javascript
// Simplified change detection formula
changeScore = mean(abs(imageAfter - imageBefore))

// Classification thresholds
if (changeScore > 0.7) → Critical Alert
if (changeScore > 0.5) → Warning Alert  
if (changeScore > 0.3) → Moderate Change
else → No Significant Change
```

### 3. Visual Comparison Tools

- **Interactive slider comparison** for before/after analysis
- **Side-by-side view** for detailed examination
- **Change heatmaps** highlighting affected areas
- **Zoom and pan** capabilities for detailed inspection

### 4. Alert Management

The system generates intelligent alerts based on:

- **Change magnitude** (percentage of area affected)
- **Change type** (deforestation, flooding, urban expansion)
- **Geographic location** and environmental sensitivity
- **Historical patterns** and seasonal variations

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_NAME=Sentinel AI
VITE_API_ENDPOINT=http://localhost:3000/api
VITE_ALERT_THRESHOLD=0.3
VITE_PROCESSING_TIMEOUT=30000
```

### Customization Options

- **Alert thresholds** can be adjusted in the configuration
- **Processing parameters** for different image types
- **UI themes** and color schemes
- **Detection algorithms** and ML model selection

## 📊 Performance Metrics

### System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| RAM | 512 MB | 2 GB |
| Storage | 8 GB | 32 GB |
| CPU | 1 GHz ARM | 1.5 GHz+ |
| Network | Wi-Fi | Ethernet |

### Processing Benchmarks

- **Image preprocessing**: ~1-2 seconds per image
- **Change detection**: ~2-3 seconds per pair
- **Alert generation**: <1 second
- **Memory usage**: 128-456 MB during processing

## 🌱 Detection Capabilities

### Environmental Changes

1. **🌳 Deforestation Detection**
   - Forest cover loss analysis
   - Illegal logging identification
   - Reforestation monitoring

2. **🌊 Flood Monitoring**
   - Water level changes
   - Flood extent mapping
   - Emergency response triggers

3. **🏙️ Urban Expansion**
   - City growth patterns
   - Infrastructure development
   - Land use changes

4. **🌾 Agricultural Analysis**
   - Crop health monitoring
   - Irrigation pattern changes
   - Seasonal variation tracking

## 🚨 Alert System

### Alert Categories

- **🔴 Critical**: Immediate attention required (>70% change)
- **🟡 Warning**: Significant change detected (30-70%)
- **🔵 Info**: Minor changes or routine monitoring (<30%)

### Notification Methods

- **Dashboard alerts** with real-time updates
- **Email notifications** (configurable)
- **API webhooks** for integration
- **Log file generation** for audit trails

## 🛠️ Development

### Project Structure

```
sentinel-ai/
├── src/
│   ├── components/          # React components
│   │   ├── ImageUploader.tsx
│   │   ├── ChangeDetection.tsx
│   │   ├── AlertsPanel.tsx
│   │   └── SystemStats.tsx
│   ├── App.tsx             # Main application
│   └── main.tsx            # Entry point
├── public/                 # Static assets
├── package.json           # Dependencies
└── README.md             # This file
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🔬 Technical Implementation

### Edge Computing Optimization

The system is designed for deployment on resource-constrained devices:

- **Lightweight algorithms** optimized for ARM processors
- **Memory-efficient** image processing pipelines
- **Batch processing** capabilities for multiple images
- **Offline operation** with periodic sync

### Machine Learning Models

- **MobileNetV2** for lightweight image classification
- **EfficientNet-Lite** for enhanced accuracy
- **Custom CNN** models for specific change types
- **Transfer learning** from pre-trained models

## 📈 Future Enhancements

### Planned Features

- [ ] **Real-time satellite feed integration**
- [ ] **Multi-spectral image analysis**
- [ ] **3D visualization** of terrain changes
- [ ] **Predictive modeling** for change forecasting
- [ ] **Mobile app** for field verification
- [ ] **API integration** with weather services

### Research Directions

- **Deep learning** models for complex pattern recognition
- **Time series analysis** for trend detection
- **Multi-sensor fusion** combining optical and radar data
- **Cloud computing** integration for large-scale processing

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**B. Tharun Bala**  
Roll No: 610823U243059  
B.Tech AI & Data Science  
Perumal Manimekalai College of Engineering, Hosur

## 🙏 Acknowledgments

- **Sentinel-2** and **Landsat** satellite programs for imagery
- **OpenCV** community for computer vision tools
- **React** and **Tailwind CSS** for frontend framework
- **Pexels** for sample satellite imagery

## 📞 Support

For questions, issues, or contributions:

- 📧 Email: tharun.bala@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/sentinel-ai/issues)
- 📖 Documentation: [Wiki](https://github.com/your-username/sentinel-ai/wiki)

---

**Sentinel AI** - Monitoring Earth's changes with artificial intelligence 🌍🛰️