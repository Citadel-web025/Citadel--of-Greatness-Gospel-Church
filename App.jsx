import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Sermons from './components/Sermons'
import Events from './components/Events'
import Give from './components/Give'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="site">
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <img src="/logo.svg" alt="Citadel logo" className="logo" />
            <div className="brand-text">
              <h1>Citadel of Greatness</h1>
              <p className="motto">I can do all things through Christ who strengthens me — Phil 4:13</p>
            </div>
          </div>
          <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/sermons">Sermons</Link>
            <Link to="/events">Events</Link>
            <Link to="/give" className="cta">Give</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="container main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/events" element={<Events />} />
          <Route path="/give" element={<Give />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Citadel of Greatness Gospel Church — All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
