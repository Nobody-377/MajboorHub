import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Search as SearchIcon, MapPin, Star, Filter } from 'lucide-react';

const ALL_WORKERS = [
  { id: 1, name: 'Ramesh Kumar', skill: 'Expert Plumber', rating: 4.8, distance: '1.2 km', image: '/worker1.png', verified: true, price: '₹400/hr' },
  { id: 2, name: 'Suresh Singh', skill: 'Master Electrician', rating: 4.9, distance: '2.5 km', image: '/worker2.png', verified: true, price: '₹450/hr' },
];

const CATEGORIES = ['All', 'Plumber', 'Electrician', 'Painter', 'Mason', 'Carpenter'];

export default function Search() {
  const navigate = useNavigate();
  const [activeCat, setActiveCat] = useState('All');

  return (
    <div className="flex-col h-full w-full bg-cream overflow-y-auto pb-24 p-4">
      {/* Search Header */}
      <div className="flex items-center gap-3 mb-6 mt-4">
        <button className="btn-icon" onClick={() => navigate(-1)}>
          <ChevronLeft size={24} />
        </button>
        <div className="search-bar flex-1" style={{ padding: '8px 12px' }}>
          <SearchIcon size={18} color="var(--text-light)" />
          <input type="text" placeholder="Search workers..." autoFocus />
        </div>
        <button className="btn-icon" style={{ background: 'var(--primary-blue)', color: 'white', borderColor: 'var(--primary-blue)' }}>
          <Filter size={18} />
        </button>
      </div>

      {/* Categories Horizontal Scroll */}
      <div className="flex gap-2 overflow-x-auto mb-6 pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {CATEGORIES.map(cat => (
          <div 
            key={cat} 
            onClick={() => setActiveCat(cat)}
            style={{ 
              padding: '8px 16px', 
              borderRadius: '20px', 
              background: activeCat === cat ? 'var(--accent-orange)' : 'white',
              color: activeCat === cat ? 'white' : 'var(--text-gray)',
              border: `1px solid ${activeCat === cat ? 'var(--accent-orange)' : '#E5E7EB'}`,
              whiteSpace: 'nowrap',
              fontSize: '14px',
              fontWeight: activeCat === cat ? '600' : '500',
              cursor: 'pointer'
            }}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* Results */}
      <div>
        <h3 className="mb-4">Results ({ALL_WORKERS.length})</h3>
        <div className="flex-col gap-4">
          {ALL_WORKERS.map(worker => (
            <div key={worker.id} className="card flex gap-4 cursor-pointer" onClick={() => navigate(`/customer/worker/${worker.id}`)}>
              <img src={worker.image} alt={worker.name} className="avatar-lg" />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 style={{ fontSize: '15px' }}>{worker.name}</h3>
                    <p className="text-sm text-gray">{worker.skill}</p>
                  </div>
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
