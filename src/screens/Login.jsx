import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (phone.length === 10) {
      navigate('/otp');
    }
  };

  return (
    <div className="flex-col h-full w-full bg-cream animate-fade-in p-6">
      <div className="mt-12 mb-8">
        <h1 style={{ fontSize: '28px' }}>Welcome back! 👋</h1>
        <p>Enter your phone number to continue</p>
      </div>

      <form className="flex-1 flex-col" onSubmit={handleLogin}>
        <div className="input-group mb-6">
          <label>Phone Number</label>
          <div className="relative flex items-center">
            <div className="absolute left-4 text-gray font-semibold">+91</div>
            <input 
              type="tel" 
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
              placeholder="00000 00000" 
              maxLength="10"
              style={{ paddingLeft: '56px', width: '100%' }}
            />
            <Phone className="absolute right-4 text-light" size={20} />
          </div>
        </div>

        <button 
          type="submit" 
          className="btn btn-primary mt-auto mb-8"
          disabled={phone.length !== 10}
        >
          Send OTP
        </button>
      </form>
      
      <p className="text-center text-xs text-gray mt-auto">
        By continuing, you agree to our Terms of Service & Privacy Policy.
      </p>
    </div>
  );
}
