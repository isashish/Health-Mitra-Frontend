import React from 'react'
import { Link } from 'react-router-dom'
import { HeartPulse, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="footer-brand">
              <HeartPulse size={22} color="#1a9a8b" />
              Health<span style={{ color: '#f97316' }}>Mitra</span>
            </div>
            <p className="footer-desc">
              Empowering India's health through accessible, technology-driven healthcare solutions for every family.
            </p>
            <div className="flex gap-2 mt-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <div key={i} className="social-icon"><Icon size={16} /></div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            {['Home', 'Services', 'Doctors', 'Appointments', 'About', 'Contact'].map(item => (
              <Link key={item} to={`/${item === 'Home' ? '' : item.toLowerCase()}`} className="footer-link">
                {item}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-heading">Services</h4>
            {['Doctor Appointments', 'Home Checkups', 'Pharmacy Delivery', 'Mental Health', 'AI Health Advisor', 'Emergency Care'].map(s => (
              <a key={s} href="#" className="footer-link">{s}</a>
            ))}
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="footer-heading">Stay Updated</h4>
            <div className="flex gap-2 mb-5">
              <input className="newsletter-input" placeholder="Your email address" />
              <button className="newsletter-btn">Subscribe</button>
            </div>
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-3 text-sm">
                <Phone size={15} color="#1a9a8b" />
                <span>+91 1800-000-0000</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={15} color="#1a9a8b" />
                <span>care@healthmitra.in</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={15} color="#1a9a8b" className="mt-0.5 shrink-0" />
                <span>12 Health Avenue, New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 HealthMitra Healthcare Management. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="footer-link" style={{ marginBottom: 0 }}>Privacy Policy</a>
            <a href="#" className="footer-link" style={{ marginBottom: 0 }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
