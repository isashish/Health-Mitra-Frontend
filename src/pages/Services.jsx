import React from 'react'
import { Link } from 'react-router-dom'
import {
  Calendar, Search, Pill, Globe, FileText, AlertCircle,
  Home as HomeIcon, Users, Brain, Shield, Bot, Salad, ArrowRight, ChevronRight
} from 'lucide-react'
import './Services.css'

const SERVICES = [
  {
    icon: Calendar,
    title: 'Doctor Appointment Booking',
    desc: 'Easily book appointments with verified doctors for any health concern. Get SMS/email confirmation immediately.',
    tag: 'Most Popular',
    img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80',
  },
  {
    icon: Search,
    title: 'Specialist Locator',
    desc: 'Find specialized doctors based on your condition, including fees, availability, and patient reviews.',
    tag: 'Smart Search',
    img: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=600&q=80',
  },
  {
    icon: Pill,
    title: 'Pharmacy Integration',
    desc: 'Access a comprehensive list of local pharmacies with convenient home delivery for all your medications.',
    tag: 'Home Delivery',
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
  },
  {
    icon: Globe,
    title: 'International Consultation',
    desc: 'Connect with foreign doctors for second opinions or specialized treatment planning for serious conditions.',
    tag: 'Global Access',
    img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80',
  },
  {
    icon: FileText,
    title: 'Patient History Management',
    desc: 'Automatic digital patient records so your doctor always has context for better diagnoses and care.',
    tag: 'Digital Records',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
  },
  {
    icon: AlertCircle,
    title: 'Emergency Button',
    desc: 'One-tap emergency alert instantly notifies your family doctor and emergency contacts when you need urgent care.',
    tag: '24/7 Active',
    img: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80',
  },
  {
    icon: HomeIcon,
    title: 'Home Health Checkups',
    desc: 'Schedule blood tests, urine tests, and full health screenings with trained agents coming to your doorstep.',
    tag: 'At-Home',
    img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80',
  },
  {
    icon: Users,
    title: 'Monthly Family Checkups',
    desc: 'Subscribe for regular family health checkups to catch potential issues early through preventive screening.',
    tag: 'Subscription',
    img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80',
  },
  {
    icon: Brain,
    title: 'Mental Health Support',
    desc: 'Access licensed therapists, psychologists and counselors. Address anxiety, depression, and stress confidentially.',
    tag: 'Confidential',
    img: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80',
  },
  {
    icon: Shield,
    title: 'Life Insurance Integration',
    desc: 'Protect your family financially with integrated health-linked life insurance plans tailored to your needs.',
    tag: 'Financial Safety',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
  },
  {
    icon: Bot,
    title: 'AI Health Integration',
    desc: 'AI-powered personalized health recommendations, medication reminders and early warning health alerts.',
    tag: 'AI-Powered',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
  },
  {
    icon: Salad,
    title: 'Nutritional Guidance',
    desc: 'Expert consultation on diet, obesity management, and lifestyle changes for a healthier, longer life.',
    tag: 'Wellness',
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
  },
]

const STEPS = [
  { num: '01', title: 'Create Account', desc: 'Sign up in under 2 minutes with your basic health profile.' },
  { num: '02', title: 'Choose a Service', desc: 'Browse and select the healthcare service you need.' },
  { num: '03', title: 'Book Appointment', desc: 'Pick your preferred doctor, date, and time slot.' },
  { num: '04', title: 'Receive Care', desc: 'Consult in-person, online, or get home visits as needed.' },
]

export default function Services() {
  return (
    <main>
      {/* Hero */}
      <section className="services-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span style={{ color: 'white' }}>Services</span>
          </div>
          <h1 className="page-hero-title">Our Healthcare Services</h1>
          <p className="page-hero-sub">
            Comprehensive medical solutions designed for India's diverse healthcare needs — from routine checkups to specialized international consultations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="section-tag" style={{ display: 'block', marginBottom: 8 }}>All Services</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 700, color: 'var(--color-dark)' }}>
              Everything You Need, Under One Roof
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="service-detail-card">
                <img src={s.img} alt={s.title} className="service-detail-img" />
                <div className="service-detail-body">
                  <div className="service-detail-icon"><s.icon size={22} /></div>
                  <h3 className="service-detail-title">{s.title}</h3>
                  <p className="service-detail-desc">{s.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="service-tag">{s.tag}</span>
                    <Link to="/appointments" style={{ color: 'var(--color-primary)', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
                      Book <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-primary)', display: 'block', marginBottom: 8 }}>
            Simple Process
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 700, color: 'var(--color-dark)', marginBottom: 60 }}>
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--color-primary)', color: 'white', fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  {s.num}
                </div>
                <h3 style={{ fontFamily: 'var(--font-accent)', fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#718096', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/appointments" style={{ background: 'var(--color-primary)', color: 'white', padding: '0.85rem 2.5rem', borderRadius: 50, fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, boxShadow: '0 8px 25px rgba(26,154,139,0.3)' }}>
              Get Started Today <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
