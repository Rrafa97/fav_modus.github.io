import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import App from './App'
import Scene3D from './components/Scene3D'
import './AppRouter.css'

const AppRouter: React.FC = () => {
  return (
    <Router>
      <div className="app-router">
        {/* 导航栏 */}
        <nav className="navigation">
          <div className="nav-container">
            <div className="nav-brand">
              <span>3D Viewer</span>
            </div>
            <div className="nav-links">
              <Link to="/" className="nav-link">模型查看器</Link>
              <Link to="/scene" className="nav-link">3D场景</Link>
            </div>
          </div>
        </nav>

        {/* 路由内容 */}
        <div className="route-content">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/scene" element={<Scene3D />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default AppRouter