import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Send, ChevronDown, CheckCircle, MessageCircle } from 'lucide-react'
import './Contact.css'

const FAQS = [
  { q: 'How do I book an appointment?', a: 'Visit our Appointments page, choose your specialty, select a doctor, pick your date and time slot, and confirm. You will receive an email confirmation instantly.' },
  { q: 'Can I consult a doctor online?', a: 'Yes! We offer video consultations, phone calls, and in-person visits. Choose your preferred type when booking.' },
  { q: 'Is my health data private and secure?', a: 'Absolutely. All your data is encrypted end-to-end and complies with India\'s health data protection regulations. We never sell your data.' },
  { q: 'Do you offer home visits for elderly patients?', a: 'Yes, our Home Health Checkup service sends trained medical professionals to your doorstep for tests and routine checkups.' },
  { q: 'What is the family subscription plan?', a: 'Our family plan covers monthly checkups, priority bookings, yoga sessions and AI health monitoring for up to 6 family members.' },
]

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <main>
      {/* Hero */}
      <section className="contact-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, fontFamily: 'var(--font-accent)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'white' }}>Contact</span>
          </div>
          <h1 className="page-hero-title">Get In Touch</h1>
          <p className="page-hero-sub">We're here to help. Reach out to us for anything from appointment queries to medical emergencies.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left: Contact info + map */}
            <div>
              <div className="contact-info-card">
                <div className="contact-info-icon"><Phone size={22} /></div>
                <div>
                  <div className="contact-info-label">Phone</div>
                  <div className="contact-info-value">1800-000-0000</div>
                  <div className="contact-info-sub">Toll-free, 24/7 Emergency Line</div>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon"><Mail size={22} /></div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">care@healthmitra.in</div>
                  <div className="contact-info-sub">Response within 2 business hours</div>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon"><MapPin size={22} /></div>
                <div>
                  <div className="contact-info-label">Head Office</div>
                  <div className="contact-info-value">12 Health Avenue, Connaught Place</div>
                  <div className="contact-info-sub">New Delhi – 110001, India</div>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon"><Clock size={22} /></div>
                <div>
                  <div className="contact-info-label">Office Hours</div>
                  <div className="contact-info-value">Mon–Fri: 8 AM – 8 PM</div>
                  <div className="contact-info-sub">Sat–Sun: 9 AM – 4 PM</div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="map-placeholder mt-4">
                <MapPin size={20} />
                Interactive Map — New Delhi, India
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <div className="contact-form-wrap">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <MessageCircle size={22} color="var(--color-primary)" />
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.7rem', fontWeight: 700 }}>Send Us a Message</h2>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#718096', marginBottom: '2rem' }}>Fill in the form below and our team will get back to you within 2 hours.</p>

                {sent && (
                  <div style={{ background: 'rgba(26,154,139,0.1)', border: '1.5px solid rgba(26,154,139,0.25)', borderRadius: 12, padding: '1rem 1.2rem', display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem', color: 'var(--color-primary)', fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: '0.875rem' }}>
                    <CheckCircle size={18} /> Message sent! We'll reply within 2 hours.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                    <div className="form-group">
                      <label className="form-label">Your Name</label>
                      <input className="form-input" placeholder="Full name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input type="email" className="form-input" placeholder="you@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <select className="form-select" value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} required>
                      <option value="">Select a topic</option>
                      <option>Appointment Query</option>
                      <option>Technical Support</option>
                      <option>Billing & Payments</option>
                      <option>Doctor Partnership</option>
                      <option>Feedback / Complaint</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea className="form-textarea" placeholder="Describe your query in detail..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} required style={{ minHeight: 140 }} />
                  </div>
                  <button type="submit" className="form-submit">
                    <Send size={18} /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-primary)' }}>FAQ</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem,4vw,2.2rem)', fontWeight: 700, color: 'var(--color-dark)', marginTop: 8 }}>Frequently Asked Questions</h2>
          </div>
          {FAQS.map((faq, i) => (
            <div key={i} className="faq-item">
              <button className={`faq-question ${openFaq === i ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {faq.q}
                <ChevronDown size={18} style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s', flexShrink: 0 }} />
              </button>
              <div className={`faq-answer ${openFaq === i ? 'open' : ''}`}>{faq.a}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
