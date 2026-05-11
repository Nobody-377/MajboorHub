import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ShieldCheck, Wrench } from 'lucide-react';

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="flex-col h-full w-full bg-cream animate-fade-in">
      <div className="flex-1 flex-col items-center justify-center p-6 mt-8">
        <div className="relative mb-8">
          {/* Abstract illustration using CSS and Icons */}
          <div style={{ width: '240px', height: '240px', background: 'var(--primary-blue-light)', borderRadius: '120px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'white', padding: '12px', borderRadius: '16px', boxShadow: 'var(--shadow-md)' }}>
              <ShieldCheck color="var(--success)" size={24} />
            </div>
            <div style={{ position: 'absolute', bottom: '30px', left: '10px', background: 'white', padding: '12px', borderRadius: '16px', boxShadow: 'var(--shadow-md)' }}>
              <Wrench color="var(--accent-orange)" size={24} />
            </div>
            <div style={{ background: 'white', padding: '24px', borderRadius: '24px', boxShadow: 'var(--shadow-lg)', zIndex: 10 }}>
              <Search color="var(--primary-blue)" size={48} />
            </div>
          </div>
        </div>

        <h1 className="text-center mb-4">Find Skilled Workers instantly</h1>
        <p className="text-center px-4 mb-8">
          Connect with verified plumbers, electricians, carpenters, and more in your area.
        </p>

        <div className="flex gap-2 mb-8">
          <div style={{ width: '24px', height: '6px', background: 'var(--primary-blue)', borderRadius: '4px' }}></div>
          <div style={{ width: '6px', height: '6px', background: '#D1D5DB', borderRadius: '4px' }}></div>
          <div style={{ width: '6px', height: '6px', background: '#D1D5DB', borderRadius: '4px' }}></div>
        </div>
      </div>

      <div className="p-6">
        <button className="btn btn-primary" onClick={() => navigate('/login')}>
          Get Started
        </button>
      </div>
    </div>
  );
}
