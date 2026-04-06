import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Quote } from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Doctors from './pages/Doctors'
import Appointments from './pages/Appointments'
import About from './pages/About'
import Contact from './pages/Contact'
import Records from './pages/Records'

const QUOTES = [
  { text: 'The greatest wealth is health.', author: 'Virgil' },
  { text: 'Take care of your body. It\u2019s the only place you have to live.', author: 'Jim Rohn' },
  { text: 'Health is not valued till sickness comes.', author: 'Thomas Fuller' },
  { text: 'Your health is an investment, not an expense.', author: 'Unknown' },
  { text: 'An apple a day keeps the doctor away \u2014 but so does great healthcare.', author: 'MediCare' },
]

function QuotesTicker() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [fade, setFade] = useState(true)
  const [visible, setVisible] = useState(window.innerWidth > 768)

  useEffect(() => {
    const handleResize = () => setVisible(window.innerWidth > 768)
    window.addEventListener('resize', handleResize)

    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setActiveIdx(i => (i + 1) % QUOTES.length)
        setFade(true)
      }, 400)
    }, 4500)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (!visible) return null

  return (
    <div className="quotes-ticker-container" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1100,
      background: 'linear-gradient(90deg, #0d3b35 0%, #1a9a8b 50%, #0d3b35 100%)',
      height: 28,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 1rem',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        opacity: fade ? 1 : 0,
        transition: 'opacity 0.4s ease',
        maxWidth: '1000px',
        width: '100%',
        justifyContent: 'center'
      }}>
        <Quote size={12} style={{ color: 'rgba(255,255,255,0.45)', flexShrink: 0 }} />
        <span className="ticker-text" style={{
          fontFamily: 'var(--font-accent, sans-serif)',
          fontSize: '0.74rem',
          color: 'rgba(255,255,255,0.92)',
          fontStyle: 'italic',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {QUOTES[activeIdx].text}
        </span>
        <span style={{
          fontFamily: 'var(--font-accent, sans-serif)',
          fontSize: '0.68rem',
          color: 'rgba(255,255,255,0.5)',
          fontWeight: 600,
          whiteSpace: 'nowrap',
          flexShrink: 0
        }}>
          — {QUOTES[activeIdx].author}
        </span>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <QuotesTicker />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/records" element={<Records />} />
      </Routes>
      <Footer />
    </Router>
  )
}
