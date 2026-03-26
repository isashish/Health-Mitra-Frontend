import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle, ArrowRight, ChevronRight, Stethoscope } from 'lucide-react'
import './Appointments.css'

const SPECIALTIES = ['General Physician', 'Cardiologist', 'Neurologist', 'Orthopedic', 'Pediatrician', 'Dermatologist', 'Psychiatrist', 'Gynecologist', 'Ophthalmologist', 'ENT Specialist']
const DOCTORS = {
  'Cardiologist': ['Dr. Priya Sharma', 'Dr. Anil Kumar'],
  'Neurologist': ['Dr. Arjun Mehta', 'Dr. Sunil Bose'],
  'Psychiatrist': ['Dr. Neha Kapoor', 'Dr. Rekha Jain'],
  'Orthopedic': ['Dr. Ravi Patel', 'Dr. Mohan Das'],
  'Pediatrician': ['Dr. Meera Iyer', 'Dr. Kavita Shah'],
  'Dermatologist': ['Dr. Sanjay Gupta', 'Dr. Asha Pillai'],
  'Gynecologist': ['Dr. Pooja Nair', 'Dr. Sunita Rao'],
  'General Physician': ['Dr. Vikram Rao', 'Dr. Anand Mishra'],
  'Ophthalmologist': ['Dr. Deepa Menon', 'Dr. Raj Khatri'],
  'ENT Specialist': ['Dr. Tarun Singh', 'Dr. Nisha Verma'],
}
const TIME_SLOTS = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '05:00 PM']
const DISABLED_SLOTS = ['10:00 AM', '11:30 AM', '03:00 PM']

const STEPS = ['Personal Info', 'Select Doctor', 'Choose Slot', 'Confirm']

export default function Appointments() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({ name: '', email: '', phone: '', age: '', gender: '', specialty: '', doctor: '', date: '', slot: '', notes: '', type: 'in-person' })
  const [success, setSuccess] = useState(false)

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(true)
  }

  const canNext = () => {
    if (step === 0) return form.name && form.email && form.phone
    if (step === 1) return form.specialty && form.doctor
    if (step === 2) return form.date && form.slot
    return true
  }

  return (
    <main>
      {/* Hero */}
      <section className="appointments-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, fontFamily: 'var(--font-accent)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'white' }}>Appointments</span>
          </div>
          <h1 className="page-hero-title">Book an Appointment</h1>
          <p className="page-hero-sub">Schedule a consultation with a verified doctor in just a few steps. Fast, easy, and confirmed instantly.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="form-section">
                {/* Step Indicator */}
                <div className="step-indicator mb-8">
                  {STEPS.map((s, i) => (
                    <React.Fragment key={i}>
                      <div className={`step-dot ${i === step ? 'active' : i < step ? 'done' : 'pending'}`}>
                        {i < step ? <CheckCircle size={14} /> : i + 1}
                      </div>
                      {i < STEPS.length - 1 && <div className={`step-line ${i < step ? 'done' : ''}`} />}
                    </React.Fragment>
                  ))}
                </div>

                <h2 className="form-title">{STEPS[step]}</h2>
                <p className="form-subtitle">
                  {step === 0 && 'Tell us about yourself so we can serve you better.'}
                  {step === 1 && 'Choose your preferred specialty and doctor.'}
                  {step === 2 && 'Pick your preferred appointment date and time.'}
                  {step === 3 && 'Review your appointment details and confirm.'}
                </p>

                <form onSubmit={handleSubmit}>
                  {/* Step 0: Personal Info */}
                  {step === 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                      <div className="form-group sm:col-span-2">
                        <label className="form-label">Full Name <span>*</span></label>
                        <input className="form-input" placeholder="e.g. Rahul Sharma" value={form.name} onChange={e => update('name', e.target.value)} required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email Address <span>*</span></label>
                        <input type="email" className="form-input" placeholder="you@email.com" value={form.email} onChange={e => update('email', e.target.value)} required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone Number <span>*</span></label>
                        <input type="tel" className="form-input" placeholder="+91 98765 43210" value={form.phone} onChange={e => update('phone', e.target.value)} required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Age</label>
                        <input type="number" className="form-input" placeholder="e.g. 35" value={form.age} onChange={e => update('age', e.target.value)} min="1" max="120" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Gender</label>
                        <select className="form-select" value={form.gender} onChange={e => update('gender', e.target.value)}>
                          <option value="">Select gender</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                          <option>Prefer not to say</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 1: Select Doctor */}
                  {step === 1 && (
                    <div>
                      <div className="form-group">
                        <label className="form-label">Consultation Type</label>
                        <div className="flex gap-3 mb-4">
                          {['in-person', 'online', 'home-visit'].map(t => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => update('type', t)}
                              style={{
                                flex: 1, padding: '0.65rem', borderRadius: 10, border: `2px solid ${form.type === t ? 'var(--color-primary)' : '#e2e8f0'}`,
                                background: form.type === t ? 'rgba(26,154,139,0.08)' : 'white',
                                color: form.type === t ? 'var(--color-primary)' : '#4a5568',
                                fontFamily: 'var(--font-accent)', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
                                textTransform: 'capitalize'
                              }}
                            >
                              {t.replace('-', ' ')}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Specialty <span>*</span></label>
                        <select className="form-select" value={form.specialty} onChange={e => { update('specialty', e.target.value); update('doctor', '') }} required>
                          <option value="">Select specialty</option>
                          {SPECIALTIES.map(s => <option key={s}>{s}</option>)}
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Doctor <span>*</span></label>
                        <select className="form-select" value={form.doctor} onChange={e => update('doctor', e.target.value)} required disabled={!form.specialty}>
                          <option value="">Select doctor</option>
                          {form.specialty && (DOCTORS[form.specialty] || []).map(d => <option key={d}>{d}</option>)}
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Describe Your Issue</label>
                        <textarea className="form-textarea" placeholder="Brief description of your health concern..." value={form.notes} onChange={e => update('notes', e.target.value)} />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Time Slot */}
                  {step === 2 && (
                    <div>
                      <div className="form-group">
                        <label className="form-label">Preferred Date <span>*</span></label>
                        <input type="date" className="form-input" value={form.date} onChange={e => update('date', e.target.value)} min={new Date().toISOString().split('T')[0]} required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Available Time Slots</label>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {TIME_SLOTS.map(slot => (
                            <button
                              key={slot}
                              type="button"
                              disabled={DISABLED_SLOTS.includes(slot)}
                              onClick={() => update('slot', slot)}
                              className={`time-slot ${form.slot === slot ? 'selected' : ''} ${DISABLED_SLOTS.includes(slot) ? 'disabled' : ''}`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                        <p style={{ fontSize: '0.75rem', color: '#a0aec0', marginTop: 8 }}>Greyed-out slots are already booked.</p>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Confirm */}
                  {step === 3 && (
                    <div>
                      <div style={{ background: '#f8fffe', border: '1.5px solid rgba(26,154,139,0.2)', borderRadius: 16, padding: '1.5rem', marginBottom: '1.5rem' }}>
                        <h3 style={{ fontFamily: 'var(--font-accent)', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-dark)' }}>Appointment Summary</h3>
                        {[
                          { label: 'Patient', value: form.name },
                          { label: 'Contact', value: `${form.email} | ${form.phone}` },
                          { label: 'Doctor', value: `${form.doctor} (${form.specialty})` },
                          { label: 'Type', value: form.type.replace('-', ' ') },
                          { label: 'Date & Time', value: `${form.date} at ${form.slot}` },
                          { label: 'Notes', value: form.notes || 'None provided' },
                        ].map(item => (
                          <div key={item.label} style={{ display: 'flex', gap: 12, marginBottom: 10, fontSize: '0.875rem' }}>
                            <span style={{ fontWeight: 600, color: '#718096', minWidth: 100, fontFamily: 'var(--font-accent)', fontSize: '0.78rem' }}>{item.label}</span>
                            <span style={{ color: 'var(--color-dark)', textTransform: 'capitalize' }}>{item.value}</span>
                          </div>
                        ))}
                      </div>
                      <button type="submit" className="form-submit">
                        <CheckCircle size={18} /> Confirm Appointment
                      </button>
                    </div>
                  )}

                  {/* Navigation */}
                  {step < 3 && (
                    <div className="flex justify-between mt-6">
                      {step > 0 ? (
                        <button type="button" onClick={() => setStep(s => s - 1)} style={{ background: '#f1f5f9', color: '#4a5568', border: 'none', borderRadius: 10, padding: '0.75rem 1.5rem', fontFamily: 'var(--font-accent)', fontWeight: 600, cursor: 'pointer', fontSize: '0.875rem' }}>
                          Back
                        </button>
                      ) : <div />}
                      <button
                        type="button"
                        onClick={() => setStep(s => s + 1)}
                        disabled={!canNext()}
                        style={{ background: canNext() ? 'var(--color-primary)' : '#cbd5e0', color: 'white', border: 'none', borderRadius: 10, padding: '0.75rem 1.8rem', fontFamily: 'var(--font-accent)', fontWeight: 600, cursor: canNext() ? 'pointer' : 'not-allowed', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: 6, transition: 'background 0.2s' }}
                      >
                        Next <ChevronRight size={16} />
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="info-card">
                <div className="info-card-title"><Clock size={16} color="var(--color-primary)" /> Clinic Hours</div>
                {[['Mon – Fri', '8:00 AM – 8:00 PM'], ['Saturday', '9:00 AM – 5:00 PM'], ['Sunday', '10:00 AM – 2:00 PM']].map(([day, hrs]) => (
                  <div key={day} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: 8 }}>
                    <span style={{ color: '#718096' }}>{day}</span>
                    <span style={{ fontWeight: 600, color: 'var(--color-dark)' }}>{hrs}</span>
                  </div>
                ))}
              </div>
              <div className="info-card">
                <div className="info-card-title"><Stethoscope size={16} color="var(--color-primary)" /> Consultation Types</div>
                {[['In-Person', 'Visit the clinic'], ['Online', 'Video call consultation'], ['Home Visit', 'Doctor visits you']].map(([type, desc]) => (
                  <div key={type} style={{ marginBottom: 10 }}>
                    <p style={{ fontWeight: 600, fontSize: '0.82rem', color: 'var(--color-dark)' }}>{type}</p>
                    <p style={{ fontSize: '0.78rem', color: '#a0aec0' }}>{desc}</p>
                  </div>
                ))}
              </div>
              <div className="info-card" style={{ background: 'rgba(26,154,139,0.05)', border: '1px solid rgba(26,154,139,0.15)' }}>
                <div className="info-card-title" style={{ color: 'var(--color-primary)' }}>🚨 Emergency?</div>
                <p style={{ fontSize: '0.82rem', color: '#4a5568', marginBottom: 10 }}>For critical conditions, call our 24/7 emergency line immediately.</p>
                <a href="tel:+911800000000" style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', fontFamily: 'var(--font-accent)' }}>
                  📞 1800-000-0000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {success && (
        <div className="success-modal" onClick={() => setSuccess(false)}>
          <div className="success-box" onClick={e => e.stopPropagation()}>
            <div className="success-icon"><CheckCircle size={36} /></div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, marginBottom: 8 }}>Appointment Confirmed!</h2>
            <p style={{ color: '#718096', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              Your appointment with <strong>{form.doctor}</strong> has been booked for <strong>{form.date}</strong> at <strong>{form.slot}</strong>.
            </p>
            <p style={{ color: '#a0aec0', fontSize: '0.82rem', marginBottom: '2rem' }}>A confirmation has been sent to {form.email}.</p>
            <button
              onClick={() => { setSuccess(false); setStep(0); setForm({ name:'',email:'',phone:'',age:'',gender:'',specialty:'',doctor:'',date:'',slot:'',notes:'',type:'in-person' }) }}
              style={{ background: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: 10, padding: '0.75rem 2rem', fontFamily: 'var(--font-accent)', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem' }}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
