import React, { useState, useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { Menu, X, HeartPulse, Search, User, Phone, Calendar, ArrowRight, LogIn, UserPlus, Shield, Settings, LogOut } from 'lucide-react'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const SEARCH_MAP = {
  'doctor': '/doctors',
  'dr': '/doctors',
  'appointment': '/appointments',
  'book': '/appointments',
  'service': '/services',
  'checkup': '/services',
  'about': '/about',
  'contact': '/contact',
  'home': '/',
  'help': '/contact',
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setUserDropdownOpen(false)
    setSearchOpen(false)
    setSearchQuery('')
  }, [location])

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      const q = searchQuery.toLowerCase().trim()
      if (!q) return

      // Find matched route from map or default to doctors search
      const matchedRoute = Object.keys(SEARCH_MAP).find(k => q.includes(k))
      if (matchedRoute) {
        navigate(SEARCH_MAP[matchedRoute])
      } else {
        // Default search behavior (could go to doctors page with query)
        navigate('/doctors')
      }
      setSearchOpen(false)
    }
  }

  const navClass = `navbar ${isHome && !scrolled ? 'transparent' : 'scrolled'}`

  return (
    <>
      <nav className={navClass}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Hamburger */}
            <button
              className="md:hidden flex hamburger items-center justify-center p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <Link to="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
              <HeartPulse size={24} className="logo-icon" />
              Health<span style={{ color: 'var(--color-accent)' }}>Mitra</span>
            </Link>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-7">
              {links.map(l => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`nav-link ${location.pathname === l.to ? 'active' : ''}`}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 ml-2 border-l pl-6 border-gray-200">
              <button 
                className="nav-icon-btn" 
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <div className="relative">
                <button 
                  className={`nav-icon-btn ${userDropdownOpen ? 'active' : ''}`}
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  aria-label="User Profile"
                >
                  <User size={20} />
                </button>
                {userDropdownOpen && (
                  <div className="user-dropdown">
                    <div className="dropdown-header">
                      <p className="user-name">Welcome, Patient</p>
                      <p className="user-email">care@healthmitra.in</p>
                    </div>
                    <div className="dropdown-body">
                      <button className="dropdown-item"><User size={16} /> My Profile</button>
                      <button className="dropdown-item" onClick={() => navigate('/records')}><Shield size={16} /> Medical Records</button>
                      <button className="dropdown-item"><Settings size={16} /> Settings</button>
                      <div className="dropdown-divider" />
                      <button className="dropdown-item logout"><LogOut size={16} /> Log Out</button>
                    </div>
                  </div>
                )}
              </div>
              <Link to="/appointments" className="nav-cta">Book Now</Link>
            </div>
          </div>

          {/* Mobile Right Icons */}
          <div className="flex md:hidden items-center gap-3">
             <button 
               className="nav-icon-btn" 
               onClick={() => setSearchOpen(true)}
               aria-label="Search"
             >
               <Search size={20} />
             </button>
             <Link to="/appointments" className="mobile-only-cta">
                <Calendar size={18} />
             </Link>
          </div>
        </div>
      </nav>

      {/* Global Search Overlay */}
      {searchOpen && (
        <div className="search-overlay">
          <div className="search-container">
            <div className="search-header">
              <div className="search-input-wrapper">
                <Search size={24} className="navbar-search-icon" />
                <input 
                  type="text" 
                  placeholder="Search doctors, symptoms, medicines..." 
                  autoFocus 
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearch}
                />
              </div>
              <button 
                className="search-close-btn" 
                onClick={() => setSearchOpen(false)}
              >
                <X size={28} />
              </button>
            </div>
            <div className="search-suggestions">
               <p className="suggestion-title">Popular Searches</p>
               <div className="suggestion-tags">
                 <button onClick={() => { setSearchQuery('Cardiologist'); navigate('/doctors'); setSearchOpen(false); }}>Cardiologist</button>
                 <button onClick={() => { setSearchQuery('Checkup'); navigate('/services'); setSearchOpen(false); }}>Full Body Checkup</button>
                 <button onClick={() => { setSearchQuery('Doctor'); navigate('/doctors'); setSearchOpen(false); }}>Top Doctors</button>
                 <button onClick={() => { setSearchQuery('Help'); navigate('/contact'); setSearchOpen(false); }}>Support</button>
               </div>
            </div>
          </div>
        </div>
      )}

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
            
            <div className="mobile-user-section pt-4 border-t border-gray-100 mt-4">
               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Your Account</p>
               <button className="mobile-nav-link flex items-center gap-3"><LogIn size={18} /> Login</button>
               <button className="mobile-nav-link flex items-center gap-3"><UserPlus size={18} /> Register</button>
            </div>
          </div>
          <div className="mobile-cta-wrapper p-6 pt-0">
            <Link 
              to="/appointments" 
              className="mobile-cta-bar"
              onClick={() => setMobileOpen(false)}
            >
              Book Now <ArrowRight size={18} />
            </Link>
            <div className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
               <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-2 flex items-center gap-2">
                 <Phone size={12} /> Emergency Support
               </p>
               <a href="tel:+911800000000" className="text-emerald-900 font-bold text-lg decoration-none">
                 +91 1800-000-0000
               </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
