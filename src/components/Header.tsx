import React from 'react'
import './Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-text">mehrab</span>
        </div>
        <nav className="nav">
          <div className="nav-item active">Models</div>
          <div className="nav-item">Gallery</div>
          <div className="nav-item">Settings</div>
        </nav>
        <div className="header-right">
          <div className="time-display">4:05</div>
          <div className="status-indicators">
            <div className="status-dot"></div>
            <div className="status-text">0000</div>
            <div className="status-text">1111</div>
            <div className="status-text">0000</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header