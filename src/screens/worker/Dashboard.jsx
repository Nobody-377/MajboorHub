import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Wallet, Star, ShieldCheck, Clock, MapPin, CheckCircle } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();
  const [online, setOnline] = useState(true);

  return (
    <div className="flex-col h-full w-full bg-cream overflow-y-auto pb-24">
      {/* Header */}
      <div className="header-bg" style={{ paddingBottom: '60px' }}>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <img src="/worker1.png" alt="Profile" className="avatar" />
            <div>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>Welcome back,</p>
              <h2 className="text-white" style={{ fontSize: '18px', marginBottom: 0 }}>Ramesh Kumar</h2>
            </div>
          </div>
          <div className="relative">
            <Bell size={24} color="white" />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-danger rounded-full border-2 border-primary"></div>
          </div>
        </div>

        {/* Status Toggle */}
        <div className="flex justify-between items-center p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.1)' }}>
          <div className="flex items-center gap-2">
            <div style={{ width: '10px', height: '10px', borderRadius: '5px', background: online ? 'var(--success)' : 'var(--text-light)' }}></div>
            <span className="text-white font-medium">{online ? 'Online - Accepting Jobs' : 'Offline'}</span>
          </div>
          <div 
            onClick={() => setOnline(!online)}
            style={{ 
              width: '50px', height: '28px', borderRadius: '14px', 
              background: online ? 'var(--success)' : 'var(--text-gray)',
              position: 'relative', cursor: 'pointer', transition: '0.3s'
            }}
          >
            <div style={{ 
              width: '24px', height: '24px', borderRadius: '12px', background: 'white',
              position: 'absolute', top: '2px', left: online ? '24px' : '2px', transition: '0.3s'
            }}></div>
          </div>
        </div>
      </div>

      {/* Stats Cards (overlapping header) */}
      <div className="px-4" style={{ marginTop: '-40px', position: 'relative', zIndex: 10 }}>
        <div className="flex gap-4">
          <div className="card flex-1 flex-col justify-center gap-2">
            <div className="flex items-center gap-2 text-gray">
              <Wallet size={18} />
              <span className="text-sm">Today's Earnings</span>
            </div>
            <h2 className="text-primary" style={{ fontSize: '22px', marginBottom: 0 }}>₹1,250</h2>
          </div>
          <div className="card flex-1 flex-col justify-center gap-2">
            <div className="flex items-center gap-2 text-gray">
              <Star size={18} color="var(--warning)" />
              <span className="text-sm">Overall Rating</span>
            </div>
            <h2 className="text-primary" style={{ fontSize: '22px', marginBottom: 0 }}>4.8 <span className="text-sm text-gray font-normal">(124)</span></h2>
          </div>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="p-4 mt-2">
        <div className="card flex items-center justify-between" style={{ background: 'var(--primary-blue-light)', color: 'white', border: 'none' }}>
          <div className="flex items-center gap-3">
            <ShieldCheck size={32} color="var(--success)" />
            <div>
              <h3 className="text-white mb-1">Reliability Score: 98%</h3>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>You're in the top 5% of workers!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Active Job */}
      <div className="p-4 pt-0">
        <h3 className="mb-4">Active Job</h3>
        <div className="card" style={{ borderLeft: '4px solid var(--accent-orange)' }}>
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 style={{ fontSize: '16px' }}>Bathroom Pipe Leakage</h3>
              <p className="text-sm text-gray">Customer: Anita Sharma</p>
            </div>
            <div className="badge badge-warning text-xs">In Progress</div>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray">
              <Clock size={16} />
              <span>Started at 10:30 AM (1h 15m ago)</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray">
              <MapPin size={16} />
              <span>B-402, Green Park Society, Andheri</span>
            </div>
          </div>
          <button className="btn w-full flex justify-center items-center gap-2" style={{ background: 'var(--success)', color: 'white' }}>
            <CheckCircle size={18} />
            <span>Mark as Completed</span>
          </button>
        </div>
      </div>

      {/* Recent Requests Summary */}
      <div className="p-4 pt-0">
        <div className="flex justify-between items-center mb-4">
          <h3>New Requests (3)</h3>
          <span className="text-accent text-sm font-semibold cursor-pointer" onClick={() => navigate('/worker/jobs')}>View All</span>
        </div>
        <div className="card flex justify-between items-center cursor-pointer" onClick={() => navigate('/worker/jobs')}>
          <div className="flex items-center gap-3">
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--primary-blue-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bell color="white" size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '600' }}>Water tank installation</h4>
              <p className="text-xs text-gray">2.5 km away • Today, 2:00 PM</p>
            </div>
          </div>
          <span className="font-bold text-primary">₹600</span>
        </div>
      </div>

    </div>
  );
}
