import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function OTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const val = e.target.value.replace(/\D/g, '');
    if (val) {
      const newOtp = [...otp];
      newOtp[index] = val.substring(val.length - 1);
      setOtp(newOtp);
      if (index < 3) inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const isComplete = otp.every(digit => digit !== '');

  return (
    <div className="flex-col h-full w-full bg-cream animate-fade-in p-6">
      <div className="mt-4 mb-8">
        <button className="btn-icon mb-6" onClick={() => navigate(-1)}>
          <ChevronLeft size={24} />
        </button>
        <h1 style={{ fontSize: '28px' }}>Verify OTP</h1>
        <p>We've sent a 4-digit code to +91 98765 43210</p>
      </div>

      <div className="flex justify-between mb-8 px-4">
        {otp.map((digit, i) => (
          <input
            key={i}
            ref={el => inputs.current[i] = el}
            type="text"
            inputMode="numeric"
            value={digit}
            onChange={e => handleChange(e, i)}
            onKeyDown={e => handleKeyDown(e, i)}
            style={{
              width: '60px', height: '60px', fontSize: '24px', textAlign: 'center',
              fontWeight: '600', borderRadius: '16px', border: '1px solid #E5E7EB',
              background: 'white', color: 'var(--primary-blue)'
            }}
          />
        ))}
      </div>

      <div className="text-center mb-auto">
        <p className="text-sm font-medium">Didn't receive code? <span className="text-accent cursor-pointer">Resend in 00:30</span></p>
      </div>

      <button 
        className="btn btn-primary mt-auto mb-8"
        disabled={!isComplete}
        onClick={() => navigate('/role')}
      >
        Verify & Proceed
      </button>
    </div>
  );
}
