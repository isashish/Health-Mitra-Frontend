import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Star, Clock, Award, MapPin } from 'lucide-react'
import './Doctors.css'

const ALL_DOCTORS = [
  { name: 'Dr. Priya Sharma', specialty: 'Cardiologist', exp: '14 yrs', rating: 4.9, fee: '₹800', location: 'Delhi', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80' },
  { name: 'Dr. Arjun Mehta', specialty: 'Neurologist', exp: '11 yrs', rating: 4.8, fee: '₹1,000', location: 'Mumbai', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80' },
  { name: 'Dr. Neha Kapoor', specialty: 'Psychiatrist', exp: '9 yrs', rating: 4.9, fee: '₹700', location: 'Bengaluru', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80' },
  { name: 'Dr. Ravi Patel', specialty: 'Orthopedic', exp: '16 yrs', rating: 4.7, fee: '₹900', location: 'Ahmedabad', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80' },
  { name: 'Dr. Meera Iyer', specialty: 'Pediatrician', exp: '8 yrs', rating: 4.8, fee: '₹600', location: 'Chennai', img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&q=80' },
  { name: 'Dr. Sanjay Gupta', specialty: 'Dermatologist', exp: '12 yrs', rating: 4.6, fee: '₹750', location: 'Kolkata', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80' },
  { name: 'Dr. Pooja Nair', specialty: 'Gynecologist', exp: '10 yrs', rating: 4.9, fee: '₹850', location: 'Hyderabad', img: 'https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=400&q=80' },
  { name: 'Dr. Vikram Rao', specialty: 'General Physician', exp: '7 yrs', rating: 4.7, fee: '₹400', location: 'Pune', img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80' },
]

const SPECIALTIES = ['All', 'Cardiologist', 'Neurologist', 'Psychiatrist', 'Orthopedic', 'Pediatrician', 'Dermatologist', 'Gynecologist', 'General Physician']

export default function Doctors() {
  const [search, setSearch] = useState('')
  const [specialty, setSpecialty] = useState('All')

  const filtered = ALL_DOCTORS.filter(d => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.specialty.toLowerCase().includes(search.toLowerCase())
    const matchSpec = specialty === 'All' || d.specialty === specialty
    return matchSearch && matchSpec
  })

  return (
    <main>
      <section className="doctors-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, fontFamily: 'var(--font-accent)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'white' }}>Doctors</span>
          </div>
          <h1 className="page-hero-title">Find Your Doctor</h1>
          <p className="page-hero-sub">
            Browse from 1,200+ verified, experienced doctors across 30+ specialties. Read reviews and book in seconds.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Filter Bar */}
          <div className="filter-bar">
            <div className="search-wrapper">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search doctor or specialty..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="filter-search"
                style={{ width: '100%' }}
              />
            </div>
            <select value={specialty} onChange={e => setSpecialty(e.target.value)} className="filter-select">
              {SPECIALTIES.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>

          {/* Results count */}
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.875rem', color: '#718096', marginBottom: '1.5rem' }}>
            Showing <strong style={{ color: 'var(--color-dark)' }}>{filtered.length}</strong> doctors
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((d, i) => (
              <div key={i} className="doctor-full-card">
                <div style={{ position: 'relative' }}>
                  <img src={d.img} alt={d.name} className="doctor-full-img" />
                  <div style={{ position: 'absolute', top: 12, left: 12 }}>
                    <div className="available-badge">
                      <div className="available-dot" />
                      Available
                    </div>
                  </div>
                </div>
                <div className="doctor-full-body">
                  <h3 className="doctor-name">{d.name}</h3>
                  <p className="doctor-specialty">{d.specialty}</p>
                  <div className="doctor-meta">
                    <div className="meta-item"><Award size={13} /> {d.exp}</div>
                    <div className="meta-item"><MapPin size={13} /> {d.location}</div>
                    <div className="meta-item"><Star size={13} fill="#f97316" color="#f97316" /> {d.rating}</div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <span style={{ fontFamily: 'var(--font-accent)', fontWeight: 700, color: 'var(--color-dark)', fontSize: '0.95rem' }}>{d.fee}</span>
                    <span style={{ fontSize: '0.75rem', color: '#a0aec0' }}>per consultation</span>
                  </div>
                  <Link to="/appointments" style={{ display: 'block', background: 'var(--color-primary)', color: 'white', textAlign: 'center', padding: '0.6rem', borderRadius: 10, fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', transition: 'background 0.2s' }}>
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: '#a0aec0' }}>
              <Search size={48} style={{ margin: '0 auto 1rem' }} />
              <p>No doctors found. Try a different search.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
