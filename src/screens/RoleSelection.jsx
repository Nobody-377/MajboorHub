import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, HardHat, CheckCircle2 } from 'lucide-react';

export default function RoleSelection() {
  const navigate = useNavigate();
  const [role, setRole] = useState(null); // 'customer' or 'worker'

  const handleContinue = () => {
    if (role === 'customer') navigate('/customer');
    if (role === 'worker') navigate('/worker');
  };

  return (
    <div className="flex-col h-full w-full bg-cream animate-fade-in p-6">
      <div className="mt-8 mb-10 text-center">
        <h1 style={{ fontSize: '28px' }}>Who are you?</h1>
        <p>Choose how you want to use MazdoorHub</p>
      </div>

      <div className="flex-col gap-4 flex-1">
        {/* Customer Option */}
        <div 
          onClick={() => setRole('customer')}
          style={{
            background: role === 'customer' ? 'rgba(249, 115, 22, 0.05)' : 'white',
            border: `2px solid ${role === 'customer' ? 'var(--accent-orange)' : '#E5E7EB'}`,
            borderRadius: '20px', padding: '24px', cursor: 'pointer',
            transition: 'all 0.2s', position: 'relative'
          }}
        >
          {role === 'customer' && (
            <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
              <CheckCircle2 color="var(--accent-orange)" size={24} />
            </div>
          )}
          <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--primary-blue-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            <User color="white" size={28} />
          </div>
          <h2 style={{ fontSize: '18px', marginBottom: '4px' }}>I am a Customer</h2>
          <p style={{ fontSize: '13px' }}>I want to hire skilled workers for my projects or daily needs.</p>
        </div>

        {/* Worker Option */}
        <div 
          onClick={() => setRole('worker')}
          style={{
            background: role === 'worker' ? 'rgba(249, 115, 22, 0.05)' : 'white',
            border: `2px solid ${role === 'worker' ? 'var(--accent-orange)' : '#E5E7EB'}`,
            borderRadius: '20px', padding: '24px', cursor: 'pointer',
            transition: 'all 0.2s', position: 'relative'
          }}
        >
          {role === 'worker' && (
            <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
              <CheckCircle2 color="var(--accent-orange)" size={24} />
            </div>
          )}
          <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--accent-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            <HardHat color="white" size={28} />
          </div>
          <h2 style={{ fontSize: '18px', marginBottom: '4px' }}>I am a Worker</h2>
          <p style={{ fontSize: '13px' }}>I want to find jobs, track hours, and earn money.</p>
        </div>
      </div>

      <button 
        className="btn btn-primary mt-auto mb-8"
        disabled={!role}
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
}
