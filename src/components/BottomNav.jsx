import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, Calendar, User } from 'lucide-react';

export default function BottomNav({ role }) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  if (role === 'customer') {
    return (
      <div className="bottom-nav">
        <div className={`nav-item ${isActive('/customer') && !isActive('/customer/search') && !isActive('/customer/profile') ? 'active' : ''}`} onClick={() => navigate('/customer')}>
          <Home size={24} />
          <span>Home</span>
        </div>
        <div className={`nav-item ${isActive('/customer/search') ? 'active' : ''}`} onClick={() => navigate('/customer/search')}>
          <Search size={24} />
          <span>Search</span>
        </div>
        <div className="nav-item">
          <Calendar size={24} />
          <span>Bookings</span>
        </div>
        <div className="nav-item">
          <User size={24} />
          <span>Profile</span>
        </div>
      </div>
    );
  }

  // Worker Nav
  return (
    <div className="bottom-nav">
      <div className={`nav-item ${isActive('/worker') && !isActive('/worker/jobs') && !isActive('/worker/profile') ? 'active' : ''}`} onClick={() => navigate('/worker')}>
        <Home size={24} />
        <span>Dashboard</span>
      </div>
      <div className={`nav-item ${isActive('/worker/jobs') ? 'active' : ''}`} onClick={() => navigate('/worker/jobs')}>
        <Search size={24} />
        <span>Jobs</span>
      </div>
      <div className="nav-item">
        <Calendar size={24} />
        <span>Earnings</span>
      </div>
      <div className="nav-item">
        <User size={24} />
        <span>Profile</span>
      </div>
    </div>
  );
}
