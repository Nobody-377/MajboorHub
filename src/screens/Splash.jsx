import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HardHat } from 'lucide-react';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex-col items-center justify-center h-full w-full animate-fade-in" style={{ backgroundColor: 'var(--primary-blue)', color: 'white' }}>
      <div className="flex-col items-center gap-4">
        <div style={{ backgroundColor: 'var(--accent-orange)', padding: '20px', borderRadius: '24px', boxShadow: '0 8px 32px rgba(249, 115, 22, 0.4)' }}>
          <HardHat size={64} color="white" />
        </div>
        <h1 className="text-white mt-4" style={{ fontSize: '32px', marginBottom: 0 }}>MazdoorHub</h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', letterSpacing: '1px' }}>Build Better. Build Together.</p>
      </div>
    </div>
  );
}
