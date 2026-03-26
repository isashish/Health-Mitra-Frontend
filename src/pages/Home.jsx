import React from 'react'
import { Link } from 'react-router-dom'
import {
  Calendar, Search, Pill, Globe, FileText, AlertCircle,
  Home as HomeIcon, Users, Brain, Shield, Bot, Salad,
  ArrowRight, Star, CheckCircle, Phone, ChevronRight,
  Activity, Heart
} from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import './Home.css'

const QUOTES = [
  { text: "The greatest wealth is health.", author: "Virgil" },
  { text: "Take care of your body. It's the only place you have to live.", author: "Jim Rohn" },
  { text: "Health is not valued till sickness comes.", author: "Thomas Fuller" },
  { text: "An apple a day keeps the doctor away — but so does great healthcare.", author: "MediCare" },
  { text: "Your health is an investment, not an expense.", author: "Unknown" },
]

const HERO_SLIDES = [
  {
    img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1400&q=80',
    tag: 'Advanced Healthcare',
    title: 'Your Health, Our Priority',
    sub: 'Book appointments with top doctors, access home checkups, and get AI-powered health guidance — all in one place.',
  },
  {
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80',
    tag: 'Specialist Network',
    title: 'Connect with Expert Specialists',
    sub: 'From cardiologists to neurologists — find the right specialist for your health needs with verified credentials.',
  },
  {
    img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=1400&q=80',
    tag: 'Mental Wellness',
    title: 'Mental Health Matters',
    sub: 'Access certified therapists and counselors from the privacy of your home. Your well-being is our mission.',
  },
]

const SERVICES = [
  { icon: Calendar, title: 'Doctor Appointments', desc: 'Book instant or scheduled appointments with top verified doctors near you.' },
  { icon: Search, title: 'Specialist Locator', desc: 'Find specialists by condition, location, availability, and consultation fees.' },
  { icon: Pill, title: 'Pharmacy Delivery', desc: 'Order medicines online with home delivery from certified local pharmacies.' },
  { icon: Globe, title: 'International Consultation', desc: 'Seek second opinions from global specialists for serious health conditions.' },
  { icon: HomeIcon, title: 'Home Health Checkups', desc: 'Schedule blood tests, vitals monitoring and health screenings at home.' },
  { icon: Brain, title: 'Mental Health Support', desc: 'Counseling, therapy and mental wellness resources at your fingertips.' },
  { icon: Bot, title: 'AI Health Advisor', desc: 'Personalized AI-driven health insights, reminders and medication tracking.' },
  { icon: AlertCircle, title: 'Emergency Button', desc: 'One-tap emergency alert to your family doctor for critical situations.' },
]

const DOCTORS = [
  { name: 'Dr. Priya Sharma', specialty: 'Cardiologist', exp: '14 yrs', rating: 4.9, img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80' },
  { name: 'Dr. Arjun Mehta', specialty: 'Neurologist', exp: '11 yrs', rating: 4.8, img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80' },
  { name: 'Dr. Neha Kapoor', specialty: 'Psychiatrist', exp: '9 yrs', rating: 4.9, img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80' },
  { name: 'Dr. Ravi Patel', specialty: 'Orthopedic', exp: '16 yrs', rating: 4.7, img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80' },
]

const TESTIMONIALS = [
  { name: 'Sita Verma', city: 'Mumbai', text: 'The home checkup feature was a lifesaver for my elderly parents. Agents were professional and results came quickly.', rating: 5, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80' },
  { name: 'Rahul Joshi', city: 'Bengaluru', text: "MediCare's AI health advisor caught an anomaly in my routine data and recommended I see a cardiologist. Couldn't be more grateful.", rating: 5, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80' },
  { name: 'Ananya Singh', city: 'Delhi', text: 'I booked an international consultation in minutes. The experience was seamless and the doctor was incredibly thorough.', rating: 5, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80' },
]

export default function Home() {
  return (
    <main className="home-main">

      {/* ===== HERO SLIDER ===== */}
      <section className="hero-section">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="hero-swiper"
        >
          {HERO_SLIDES.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="hero-slide">
                <img
                  src={s.img}
                  alt={s.title}
                  className="hero-slide-img"
                />
                <div className="slide-overlay" />
                <div className="slide-content">
                  <div className="max-w-7xl mx-auto px-6 w-full">
                    <div className="slide-text-block">
                      <div className="hero-badge">
                        <Activity size={12} /> {s.tag}
                      </div>
                      <h1 className="hero-title">{s.title}</h1>
                      <p className="hero-desc">{s.sub}</p>
                      <div className="hero-actions">
                        <Link to="/appointments" className="btn-primary">
                          Book Appointment <ArrowRight size={16} />
                        </Link>
                        <Link to="/services" className="btn-outline">
                          Our Services
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section className="stats-strip">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '50,000+', label: 'Patients Served' },
              { num: '1,200+', label: 'Verified Doctors' },
              { num: '24/7', label: 'Emergency Support' },
              { num: '98%', label: 'Satisfaction Rate' },
            ].map((s, i) => (
              <div key={i} className="stat-item">
                <div className="stat-number">{s.num}</div>
                <div className="stat-text">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title mx-auto">Comprehensive Healthcare Services</h2>
            <p className="section-subtitle mx-auto text-center">
              Everything you need for complete health management — from specialist consultations to emergency care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon"><s.icon size={26} /></div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HEALTH QUOTE BANNER ===== */}
      <section className="quote-banner-section">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Heart size={36} className="quote-banner-icon" />
          <blockquote className="quote-banner-text">
            "Healing is a matter of time, but it is sometimes also a matter of opportunity."
          </blockquote>
          <cite className="quote-banner-author">— Hippocrates</cite>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="py-24 section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=700&q=80"
                alt="Doctor with patient"
                className="why-us-img"
              />
            </div>
            <div>
              <span className="section-tag">Why HealthMitra?</span>
              <h2 className="section-title">Healthcare Reimagined for Every Indian</h2>
              <p className="why-us-desc">
                We bridge the gap between India's healthcare needs and world-class medical services, making quality care accessible from urban metros to rural villages.
              </p>
              <div className="space-y-4">
                {[
                  'AI-powered health recommendations and alerts',
                  'Access to 1,200+ verified doctors nationwide',
                  'International second-opinion consultations',
                  'Family subscription with monthly checkups',
                  'Mental health resources and counseling',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={20} color="#1a9a8b" className="shrink-0" />
                    <span className="feature-text">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/about" className="btn-primary" style={{ display: 'inline-flex' }}>
                  Learn More <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DOCTORS ===== */}
      <section className="py-24 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <span className="section-tag">Our Team</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Top Rated Doctors</h2>
            </div>
            <Link to="/doctors" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
              View All Doctors <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOCTORS.map((d, i) => (
              <div key={i} className="doctor-card">
                <div style={{ position: 'relative' }}>
                  <img src={d.img} alt={d.name} className="doctor-img" />
                  <span className="doctor-badge">{d.exp} exp</span>
                </div>
                <div className="p-4">
                  <h3 className="doctor-name">{d.name}</h3>
                  <p className="doctor-specialty">{d.specialty}</p>
                  <div className="flex items-center gap-1">
                    <Star size={14} fill="#f97316" color="#f97316" />
                    <span className="doctor-rating">{d.rating}</span>
                    <span className="doctor-reviews">(200+ reviews)</span>
                  </div>
                  <Link to="/appointments" className="btn-primary doctor-book-btn">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SLIDER ===== */}
      <section className="py-24 section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="section-tag">Patient Stories</span>
            <h2 className="section-title">What Our Patients Say</h2>
          </div>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            style={{ paddingBottom: '3rem' }}
          >
            {TESTIMONIALS.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p className="testimonial-text">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="avatar-ring" />
                    <div>
                      <p className="testimonial-name">{t.name}</p>
                      <p className="testimonial-city">{t.city}</p>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} size={12} fill="#f97316" color="#f97316" />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="section-tag" style={{ color: '#5ecabb' }}>Take Action Today</span>
          <h2 className="section-title" style={{ color: 'white' }}>Start Your Health Journey Now</h2>
          <p className="cta-desc">
            Join 50,000+ Indians who trust HealthMitra for their healthcare. Your first consultation is just one click away.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/appointments" className="btn-primary">
              Book Free Consultation <ArrowRight size={16} />
            </Link>
            <a href="tel:+911800000000" className="btn-outline">
              <Phone size={16} /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
