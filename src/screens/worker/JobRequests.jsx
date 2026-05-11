import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MapPin, Clock, Check, X } from 'lucide-react';

export default function JobRequests() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([
    { id: 1, title: 'Water tank installation', customer: 'Vikram Singh', distance: '2.5 km', time: 'Today, 2:00 PM', price: '₹600', status: 'pending' },
    { id: 2, title: 'Kitchen sink repair', customer: 'Meera Patel', distance: '4.1 km', time: 'Tomorrow, 10:00 AM', price: '₹300', status: 'pending' },
    { id: 3, title: 'Full home plumbing check', customer: 'Rajesh Gupta', distance: '1.8 km', time: 'Tomorrow, 4:00 PM', price: '₹1200', status: 'pending' },
  ]);

  const handleAction = (id, action) => {
    setRequests(requests.filter(req => req.id !== id));
    // In a real app, this would make an API call
  };

  return (
    <div className="flex-col h-full w-full bg-cream overflow-y-auto pb-24 p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 mt-4">
        <button className="btn-icon" onClick={() => navigate(-1)}>
          <ChevronLeft size={24} />
        </button>
        <h2 style={{ marginBottom: 0 }}>Job Requests</h2>
      </div>

      <div className="flex gap-2 overflow-x-auto mb-6 pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div style={{ padding: '8px 16px', borderRadius: '20px', background: 'var(--primary-blue)', color: 'white', fontSize: '14px', fontWeight: '600' }}>New (3)</div>
        <div style={{ padding: '8px 16px', borderRadius: '20px', background: 'white', color: 'var(--text-gray)', border: '1px solid #E5E7EB', fontSize: '14px', fontWeight: '500' }}>Accepted</div>
        <div style={{ padding: '8px 16px', borderRadius: '20px', background: 'white', color: 'var(--text-gray)', border: '1px solid #E5E7EB', fontSize: '14px', fontWeight: '500' }}>Completed</div>
      </div>

      {requests.length === 0 ? (
        <div className="flex-col items-center justify-center flex-1 text-gray">
          <p>No new requests.</p>
        </div>
      ) : (
        <div className="flex-col gap-4">
          {requests.map(req => (
            <div key={req.id} className="card">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 style={{ fontSize: '16px' }}>{req.title}</h3>
                  <p className="text-sm text-gray">{req.customer}</p>
                </div>
                <span className="font-bold text-primary">{req.price}</span>
              </div>
              
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray">
                  <Clock size={16} />
                  <span>{req.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray">
                  <MapPin size={16} />
                  <span>{req.distance} away</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  className="btn flex-1 flex justify-center items-center gap-2" 
                  style={{ background: 'white', color: 'var(--danger)', border: '1px solid var(--danger)', padding: '10px' }}
                  onClick={() => handleAction(req.id, 'reject')}
                >
                  <X size={18} />
                  <span>Decline</span>
                </button>
                <button 
                  className="btn flex-1 flex justify-center items-center gap-2" 
                  style={{ background: 'var(--success)', color: 'white', padding: '10px' }}
                  onClick={() => handleAction(req.id, 'accept')}
                >
                  <Check size={18} />
                  <span>Accept</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
