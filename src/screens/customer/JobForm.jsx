import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Calendar as CalendarIcon, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export default function JobForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex-col items-center justify-center h-full w-full bg-cream p-6 text-center animate-fade-in">
        <div style={{ width: '80px', height: '80px', background: 'var(--success)', borderRadius: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0 8px 32px rgba(16, 185, 129, 0.4)' }}>
          <CheckCircle2 size={40} color="white" />
        </div>
        <h1 className="mb-2">Booking Confirmed!</h1>
        <p className="mb-8">Your request has been sent to the worker. They will contact you shortly.</p>
        
        <div className="card w-full mb-8 text-left">
          <div className="flex justify-between items-center mb-4 pb-4" style={{ borderBottom: '1px dashed #E5E7EB' }}>
            <span className="text-gray">Booking ID</span>
            <span className="font-bold">#MH-8429</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray">Worker</span>
            <span className="font-semibold">Ramesh Kumar</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray">Estimated Cost</span>
            <span className="font-semibold text-primary">₹400 / hr</span>
          </div>
        </div>

        <button className="btn btn-primary" onClick={() => navigate('/customer')}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="flex-col h-full w-full bg-cream overflow-y-auto pb-24 p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 mt-4">
        <button className="btn-icon" onClick={() => navigate(-1)}>
          <ChevronLeft size={24} />
        </button>
        <h2 style={{ marginBottom: 0 }}>Request Service</h2>
      </div>

      <div className="card mb-6 flex gap-4 items-center">
        <img src="/worker1.png" alt="Worker" style={{ width: '48px', height: '48px', borderRadius: '24px', objectFit: 'cover' }} />
        <div>
          <h3 style={{ fontSize: '15px' }}>Ramesh Kumar</h3>
          <p className="text-sm text-gray">Expert Plumber • ₹400/hr</p>
        </div>
      </div>

      <div className="input-group">
        <label>Job Title / Problem</label>
        <input type="text" placeholder="e.g., Leaking bathroom pipe" />
      </div>

      <div className="input-group">
        <label>Date</label>
        <div className="relative flex items-center">
          <CalendarIcon className="absolute left-4 text-gray" size={20} />
          <input type="date" style={{ paddingLeft: '44px', width: '100%' }} />
        </div>
      </div>

      <div className="input-group">
        <label>Time slot</label>
        <div className="relative flex items-center">
          <Clock className="absolute left-4 text-gray" size={20} />
          <select style={{ paddingLeft: '44px', width: '100%' }}>
            <option>10:00 AM - 12:00 PM</option>
            <option>01:00 PM - 03:00 PM</option>
            <option>04:00 PM - 06:00 PM</option>
          </select>
        </div>
      </div>

      <div className="input-group">
        <label>Address</label>
        <div className="relative flex items-start">
          <MapPin className="absolute left-4 top-4 text-gray" size={20} />
          <textarea rows="3" placeholder="Enter your full address" style={{ paddingLeft: '44px', width: '100%', resize: 'none' }}></textarea>
        </div>
      </div>

      <div className="input-group">
        <label>Add Photos (Optional)</label>
        <div style={{ height: '100px', border: '2px dashed #D1D5DB', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-light)', background: '#F9FAFB' }}>
          + Upload Images of the problem
        </div>
      </div>

      <button className="btn btn-primary mt-4" onClick={() => setSubmitted(true)}>
        Confirm Booking
      </button>
    </div>
  );
}
