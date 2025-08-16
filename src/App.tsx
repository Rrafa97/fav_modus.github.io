import React, { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { useTranslation } from 'react-i18next'
import ModelViewer from './components/ModelViewer.tsx'
import LanguageSwitcher from './components/LanguageSwitcher.tsx'
import LoadingSpinner from './components/LoadingSpinner.tsx'
import './App.css'

function App() {
  const { t } = useTranslation()
  const [models] = useState([
    { id: 1, name: 'Montana Watch', path: '/src/assets/montana_watch__free_model/scene.gltf' }
  ])
  const [selectedModel] = useState(models[0])

  return (
    <div className="app">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <div className="brand-header">
              <span className="brand-icon">○ mehrab</span>
              <LanguageSwitcher />
            </div>
            <h1 className="hero-title">
              <span className="title-main">{t('title').split(' ')[0]} </span>
              <span className="title-accent">{t('title').split(' ')[1]}</span>
              <br />
              <span className="title-accent">{t('title').split(' ')[2]}</span>
            </h1>
            <p className="hero-subtitle">{t('subtitle')}</p>
            <div className="version-info">
              <span className="version">v 0.5</span>
              <div className="status-dots">
                <span>○○○○</span>
                <span>1.1.1.1</span>
                <span>○○○○</span>
              </div>
            </div>
          </div>
          <div className="hero-model">
            <div className="model-viewer-container">
              <Canvas 
                camera={{ position: [0, 0, 5], fov: 50 }}
                style={{ background: 'transparent' }}
                gl={{ alpha: true, antialias: true }}
              >
                <ambientLight intensity={0.7} />
                <directionalLight position={[10, 10, 5]} intensity={1.2} />
                <Environment preset="studio" />
                {selectedModel && (
                  <Suspense fallback={null}>
                    <ModelViewer modelPath={selectedModel.path} />
                  </Suspense>
                )}
                <OrbitControls 
                  enablePan={true} 
                  enableZoom={true} 
                  enableRotate={true}
                  autoRotate={true}
                  autoRotateSpeed={2}
                />
              </Canvas>
              {selectedModel && (
                <div className="canvas-loading">
                  <LoadingSpinner message={t('loading')} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="geometric-element"></div>
      </div>
    </div>
  )
}

export default App
