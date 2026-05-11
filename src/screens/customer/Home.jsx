import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, MapPin, Bell, Star, Wrench, Zap, PaintRoller, Hammer } from 'lucide-react';

const CATEGORIES = [
  { id: 'plumber', name: 'Plumber', icon: Wrench, color: '#3B82F6' },
  { id: 'electrician', name: 'Electrician', icon: Zap, color: '#F59E0B' },
  { id: 'painter', name: 'Painter', icon: PaintRoller, color: '#10B981' },
  { id: 'carpenter', name: 'Carpenter', icon: Hammer, color: '#8B5CF6' },
];

const NEARBY_WORKERS = [
  { id: 1, name: 'Ramesh Kumar', skill: 'Expert Plumber', rating: 4.8, distance: '1.2 km', image: '/worker1.png', verified: true, price: '₹400/hr' },
  { id: 2, name: 'Suresh Singh', skill: 'Master Electrician', rating: 4.9, distance: '2.5 km', image: '/worker2.png', verified: true, price: '₹450/hr' },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex-col h-full w-full overflow-y-auto pb-24">
      {/* Header */}
      <div className="header-bg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>Current Location</p>
            <div className="flex items-center gap-1 font-semibold text-white">
              <MapPin size={16} color="var(--accent-orange)" />
              <span>Andheri West, Mumbai</span>
            </div>
          </div>
          <div className="relative">
            <Bell size={24} color="white" />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-danger rounded-full border-2 border-primary"></div>
          </div>
        </div>

        {/* Search */}
        <div className="search-bar" onClick={() => navigate('/customer/search')} style={{ cursor: 'text' }}>
          <SearchIcon size={20} color="var(--text-light)" />
          <input type="text" placeholder="Search for plumbers, electricians..." readOnly />
        </div>
      </div>

      {/* Categories */}
      <div className="p-4 mt-2">
        <div className="flex justify-between items-center mb-4">
          <h3>Categories</h3>
          <span className="text-accent text-sm font-semibold">See All</span>
        </div>
        <div className="flex justify-between">
          {CATEGORIES.map(cat => (
            <div key={cat.id} className="flex-col items-center gap-2 cursor-pointer" onClick={() => navigate('/customer/search')}>
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: `${cat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <cat.icon size={28} color={cat.color} />
              </div>
              <span className="text-xs font-medium text-gray">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Special Offer Banner */}
      <div className="px-4 mb-6">
        <div style={{ background: 'var(--accent-orange)', borderRadius: '16px', padding: '20px', color: 'white', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 className="text-white" style={{ fontSize: '18px', marginBottom: '4px' }}>Get 20% Off</h2>
            <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>On your first booking today!</p>
            <button className="btn btn-sm" style={{ background: 'white', color: 'var(--accent-orange)', width: 'auto' }}>Book Now</button>
          </div>
          {/* Abstract circles */}
          <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', width: '100px', height: '100px', borderRadius: '50px', background: 'rgba(255,255,255,0.1)' }}></div>
          <div style={{ position: 'absolute', right: '40px', top: '-10px', width: '60px', height: '60px', borderRadius: '30px', background: 'rgba(255,255,255,0.1)' }}></div>
        </div>
      </div>

      {/* Top Rated Workers */}
      <div className="p-4 pt-0">
        <div className="flex justify-between items-center mb-4">
          <h3>Nearby Top Rated</h3>
          <span className="text-accent text-sm font-semibold">See All</span>
        </div>
        <div className="flex-col gap-4">
          {NEARBY_WORKERS.map(worker => (
            <div key={worker.id} className="card flex gap-4 cursor-pointer" onClick={() => navigate(`/customer/worker/${worker.id}`)}>
              <img src={worker.image} alt={worker.name} className="avatar-lg" />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 style={{ fontSize: '15px' }}>{worker.name}</h3>
                    <p className="text-sm text-gray">{worker.skill}</p>
                  </div>
                  {worker.verified && (
                    <div className="badge badge-blue flex items-center gap-1">
                      <span className="text-xs">Verified</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <Star size={14} color="var(--warning)" fill="var(--warning)" />
                    <span className="text-sm font-semibold">{worker.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray text-sm">
                    <MapPin size={14} />
                    <span>{worker.distance}</span>
                  </div>
                </div>
                <div className="mt-2 text-primary font-bold">{worker.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
