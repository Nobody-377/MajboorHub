import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Heart, Star, MapPin, Phone, MessageCircle, ShieldCheck, Clock, ThumbsUp } from 'lucide-react';

export default function WorkerProfile() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data for the profile
  const worker = {
    id: 1,
    name: 'Ramesh Kumar',
    skill: 'Expert Plumber',
    rating: 4.8,
    reviews: 124,
    distance: '1.2 km',
    image: '/worker1.png',
    verified: true,
    price: '₹400/hr',
    dailyRate: '₹1200/day',
    about: 'I have 8+ years of experience in all kinds of plumbing works including pipe fitting, water tank installation, and leakage repairs.',
    reliabilityScore: 98,
    completedJobs: 342,
  };

  return (
    <div className="flex-col h-full w-full bg-cream overflow-y-auto pb-24">
      {/* Header Image Area */}
      <div className="relative" style={{ height: '280px' }}>
        <img src={worker.image} alt={worker.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)' }}></div>
        
        {/* Top Nav inside image */}
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
          <button className="btn-icon" style={{ background: 'rgba(255,255,255,0.2)', border: 'none', backdropFilter: 'blur(4px)', color: 'white' }} onClick={() => navigate(-1)}>
            <ChevronLeft size={24} />
          </button>
          <button className="btn-icon" style={{ background: 'rgba(255,255,255,0.2)', border: 'none', backdropFilter: 'blur(4px)', color: 'white' }}>
            <Heart size={20} />
          </button>
        </div>
      </div>

      {/* Main Content Card (overlays the image slightly) */}
      <div style={{ background: 'var(--bg-cream)', borderTopLeftRadius: '32px', borderTopRightRadius: '32px', marginTop: '-32px', position: 'relative', zIndex: 20, padding: '24px' }}>
        
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 style={{ fontSize: '24px', marginBottom: '4px', color: 'var(--text-dark)' }}>{worker.name}</h1>
            <p className="text-gray mb-2">{worker.skill}</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star size={16} color="var(--warning)" fill="var(--warning)" />
                <span className="font-semibold">{worker.rating}</span>
                <span className="text-light text-sm">({worker.reviews} reviews)</span>
              </div>
            </div>
          </div>
          {worker.verified && (
            <div className="flex-col items-center gap-1">
              <ShieldCheck size={28} color="var(--success)" />
              <span className="text-xs text-success font-semibold">Verified</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="btn flex-1 flex items-center justify-center gap-2" style={{ background: 'var(--primary-blue-light)', color: 'white', borderRadius: '12px', padding: '12px' }}>
            <Phone size={18} />
            <span>Call</span>
          </button>
          <button className="btn flex-1 flex items-center justify-center gap-2" style={{ background: '#25D366', color: 'white', borderRadius: '12px', padding: '12px' }}>
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </button>
        </div>

        {/* Stats Row */}
        <div className="flex justify-between mb-6 pb-6" style={{ borderBottom: '1px solid #E5E7EB' }}>
          <div className="flex-col items-center">
            <h3 className="text-primary">{worker.completedJobs}</h3>
            <span className="text-xs text-gray mt-1">Jobs Done</span>
          </div>
          <div className="flex-col items-center">
            <div className="flex items-center gap-1">
              <h3 className="text-success">{worker.reliabilityScore}%</h3>
            </div>
            <span className="text-xs text-gray mt-1">Reliability</span>
          </div>
          <div className="flex-col items-center">
            <h3 className="text-primary">{worker.distance}</h3>
            <span className="text-xs text-gray mt-1">Distance</span>
          </div>
        </div>

        {/* About */}
        <div className="mb-6">
          <h3 className="mb-2">About</h3>
          <p className="text-sm">{worker.about}</p>
        </div>

        {/* Pricing */}
        <div className="mb-8">
          <h3 className="mb-4">Pricing</h3>
          <div className="flex gap-4">
            <div className="card flex-1 flex-col items-center text-center" style={{ border: '2px solid var(--accent-orange)' }}>
              <Clock size={24} color="var(--accent-orange)" className="mb-2" />
              <span className="text-xs text-gray mb-1">Hourly</span>
              <span className="font-bold text-lg text-primary">{worker.price}</span>
            </div>
            <div className="card flex-1 flex-col items-center text-center">
              <ThumbsUp size={24} color="var(--primary-blue)" className="mb-2" />
              <span className="text-xs text-gray mb-1">Daily Rate</span>
              <span className="font-bold text-lg text-primary">{worker.dailyRate}</span>
            </div>
          </div>
        </div>

        {/* Hire Button */}
        <button className="btn btn-primary" onClick={() => navigate(`/customer/book/${worker.id}`)}>
          Hire {worker.name.split(' ')[0]}
        </button>

      </div>
    </div>
  );
}
