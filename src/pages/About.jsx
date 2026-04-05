import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Target, Eye, Award, Users, Globe, Shield, ArrowRight } from 'lucide-react'
import './About.css'

const TEAM = [
  { name: 'Dr. Anil Verma', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80' },
  { name: 'Dr. Sunita Rao', role: 'Chief Medical Officer', img: 'https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=400&q=80' },
  { name: 'Kiran Mehta', role: 'CTO & Co-founder', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'Priya Nambiar', role: 'Head of Operations', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
]

const MISSIONS = [
  { icon: Heart, title: 'Patient First', desc: 'Every decision we make puts patient welfare and dignity at the center.' },
  { icon: Target, title: 'Precision Care', desc: 'AI-driven personalized recommendations for accurate, targeted healthcare.' },
  { icon: Eye, title: 'Transparency', desc: 'Open, honest communication about costs, treatments, and outcomes.' },
  { icon: Shield, title: 'Privacy & Security', desc: 'Your health data is encrypted and protected with the highest standards.' },
]

const TIMELINE = [
  { year: '2019', title: 'MediCare Founded', desc: 'Started with a mission to democratize healthcare across India.' },
  { year: '2020', title: 'First 10,000 Patients', desc: 'Reached our first milestone during the COVID-19 pandemic, providing telehealth at scale.' },
  { year: '2022', title: 'AI Integration Launch', desc: 'Launched our proprietary AI health advisory system with personalized health insights.' },
  { year: '2023', title: 'National Expansion', desc: 'Expanded to 150+ cities with 1,200+ verified doctors and 500+ partner pharmacies.' },
  { year: '2025', title: '50,000+ Patients', desc: 'Celebrated serving over 50,000 patients with a 98% satisfaction rate.' },
]

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, fontFamily: 'var(--font-accent)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'white' }}>About</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="page-hero-title">Redefining Healthcare for Every Indian</h1>
              <p className="page-hero-sub">
                Health Mitra was born from a simple belief: quality healthcare should not be a privilege. We're building the infrastructure to make it a right for every Indian, regardless of location or income.
              </p>
            </div>
            <div className="about-stats-grid grid grid-cols-2 gap-4">
              {[
                { num: '50K+', label: 'Patients Served' },
                { num: '1,200+', label: 'Verified Doctors' },
                { num: '150+', label: 'Cities Covered' },
                { num: '98%', label: 'Satisfaction Rate' },
              ].map((s, i) => (
                <div key={i} className="about-stat-card">
                  <div className="about-stat-num">{s.num}</div>
                  <div className="about-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-primary)' }}>Our Values</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 700, color: 'var(--color-dark)', marginTop: 8 }}>What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MISSIONS.map((m, i) => (
              <div key={i} className="mission-card">
                <div className="mission-icon"><m.icon size={26} /></div>
                <h3 style={{ fontFamily: 'var(--font-accent)', fontWeight: 700, marginBottom: 8 }}>{m.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#718096', lineHeight: 1.7 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story + Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-primary)' }}>Our Story</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 700, color: 'var(--color-dark)', margin: '0.5rem 0 1.5rem' }}>From Idea to Impact</h2>
              <p style={{ color: '#718096', lineHeight: 1.8, marginBottom: '1rem' }}>
                HealthMitra was founded in 2019 by Dr. Anil Verma, a cardiologist who witnessed firsthand how patients in Tier-2 and Tier-3 cities struggled to access specialist care. The COVID-19 pandemic accelerated our mission, proving that telehealth could scale across India.
              </p>
              <p style={{ color: '#718096', lineHeight: 1.8 }}>
                Today we operate in 150+ cities, power 1,200+ doctor profiles, and use AI to give personalized health guidance to over 50,000 patients — making HealthMitra one of India's most trusted health platforms.
              </p>
            </div>
            <div>
              {TIMELINE.map((t, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-year">{t.year}</div>
                  <div className="timeline-content">
                    <h4 style={{ fontFamily: 'var(--font-accent)', fontWeight: 700, color: 'var(--color-dark)', marginBottom: 4 }}>{t.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: '#718096' }}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-primary)' }}>The People</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 700, color: 'var(--color-dark)', marginTop: 8 }}>Meet Our Leadership</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((t, i) => (
              <div key={i} className="team-card">
                <img src={t.img} alt={t.name} className="team-img" />
                <div className="team-body">
                  <p className="team-name">{t.name}</p>
                  <p className="team-role">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0a1628, #134e49)', padding: '80px 0', textAlign: 'center' }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
            Join the HealthMitra Family
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2rem', lineHeight: 1.75 }}>
            Take the first step toward better health today. Book your consultation and experience India's most trusted healthcare platform.
          </p>
          <Link to="/appointments" className="btn-primary" style={{ display: 'inline-flex', padding: '1rem 3rem' }}>
            Book Appointment <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
