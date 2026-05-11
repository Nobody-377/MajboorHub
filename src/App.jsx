import React, { useState, useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Battery, Wifi, Signal } from 'lucide-react';
import Splash from './screens/Splash';
import Onboarding from './screens/Onboarding';
import Login from './screens/Login';
import OTP from './screens/OTP';
import RoleSelection from './screens/RoleSelection';
import CustomerFlow from './screens/CustomerFlow';
import WorkerFlow from './screens/WorkerFlow';

// A component to manage the fake mobile status bar
function StatusBar() {
  const location = useLocation();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 10000);
    return () => clearInterval(timer);
  }, []);

  // Make status bar text white on screens with dark header backgrounds
  const isDarkBg = ['/', '/customer/profile'].includes(location.pathname);
  
  return (
    <div className={`status-bar ${isDarkBg ? 'light-text' : 'dark-text'}`}>
      <div className="time">
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
      </div>
      <div className="icons" style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
        <Signal size={14} />
        <Wifi size={14} />
        <Battery size={16} />
      </div>
    </div>
  );
}

function AppContent() {
  return (
    <div className="mobile-frame">
      <div className="mobile-notch"></div>
      <StatusBar />
      <div className="screen-container">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/role" element={<RoleSelection />} />
          <Route path="/customer/*" element={<CustomerFlow />} />
          <Route path="/worker/*" element={<WorkerFlow />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
