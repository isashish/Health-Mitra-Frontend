import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchRecords } from '../api/api';
import { Shield, Calendar, User, Stethoscope, Clock, FileText, ChevronRight, Loader2, AlertCircle } from 'lucide-react';
import './Records.css';

export default function Records() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadRecords();
  }, []);

  const loadRecords = async () => {
    try {
      setLoading(true);
      const data = await fetchRecords();
      setRecords(data.reverse()); // Show newest first
    } catch (err) {
      setError('Could not load medical records. Please check if the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="records-page">
      <section className="records-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Medical Records</span>
          </div>
          <h1 className="page-hero-title">Medical Records</h1>
          <p className="page-hero-sub">Securely access and manage your appointment history and health documentation.</p>
        </div>
      </section>

      <section className="records-content py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <Loader2 className="animate-spin text-primary" size={48} />
              <p className="text-gray-500 font-medium">Retrieving your secure records...</p>
            </div>
          ) : error ? (
            <div className="error-card p-12 text-center">
              <AlertCircle size={48} className="mx-auto mb-4 text-red-500" />
              <h2 className="text-xl font-bold mb-2">Connection Issues</h2>
              <p className="text-gray-600 mb-6">{error}</p>
              <button onClick={loadRecords} className="retry-btn">Try Again</button>
            </div>
          ) : records.length === 0 ? (
            <div className="empty-state p-16 text-center bg-white rounded-3xl border border-dashed border-gray-200">
              <Shield size={64} className="mx-auto mb-6 text-gray-200" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">No records found</h3>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">Your medical record history is empty. Book an appointment to start tracking your health journey.</p>
              <Link to="/appointments" className="nav-cta mx-auto inline-flex">Book Appointment</Link>
            </div>
          ) : (
            <div className="records-grid">
              {records.map((record) => (
                <div key={record.id} className="record-card">
                  <div className="record-header">
                    <div className="record-type-badge">{record.type || 'In-Person'}</div>
                    <div className={`record-status-badge ${record.status?.toLowerCase() === 'confirmed' ? 'confirmed' : ''}`}>
                      {record.status || 'Pending'}
                    </div>
                  </div>
                  
                  <div className="record-body">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="icon-box">
                        <Stethoscope size={20} />
                      </div>
                      <div>
                        <h3 className="doctor-name">{record.doctor}</h3>
                        <p className="specialty-text">{record.specialty}</p>
                      </div>
                    </div>

                    <div className="record-info-row">
                      <div className="info-item">
                        <Calendar size={14} />
                        <span>{record.bookingDate}</span>
                      </div>
                      <div className="info-item">
                        <Clock size={14} />
                        <span>{record.bookingTime}</span>
                      </div>
                    </div>

                    <div className="record-meta pt-6 border-t border-gray-50">
                      <div className="patient-snippet">
                        <User size={12} />
                        <span>{record.patientName}</span>
                      </div>
                      {record.notes && (
                      <div className="notes-snippet mt-3">
                        <FileText size={12} />
                        <span>{record.notes.length > 60 ? record.notes.substring(0, 60) + '...' : record.notes}</span>
                      </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="record-footer">
                    <button className="view-details-btn">
                      View full details <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
