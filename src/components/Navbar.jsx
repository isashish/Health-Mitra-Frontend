import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, HeartPulse } from 'lucide-react'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/appointments', label: 'Appointments' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navClass = `navbar ${isHome && !scrolled ? 'transparent' : 'scrolled'}`

  return (
    <>
      <nav className={navClass}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Hamburger */}
          <button
            className="md:hidden flex hamburger items-center justify-center p-2 mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          <Link to="/" className="nav-logo">
            <HeartPulse size={22} />
            Health<span style={{ color: 'var(--color-accent)' }}>Mitra</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`nav-link ${location.pathname === l.to ? 'active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/appointments" className="nav-link nav-cta">Book Now</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay (Sidebar) */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[1205] md:hidden" 
          onClick={() => setMobileOpen(false)}
        />
      )}
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <Link to="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
              <HeartPulse size={22} />
              Health<span style={{ color: 'var(--color-accent)' }}>Mitra</span>
            </Link>
            <button 
              className="mobile-close-btn"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="mobile-links-wrapper">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`mobile-nav-link ${location.pathname === l.to ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Link 
            to="/appointments" 
            className="mobile-cta-bar"
            onClick={() => setMobileOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  )
}
