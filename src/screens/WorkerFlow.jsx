import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import Dashboard from './worker/Dashboard';
import JobRequests from './worker/JobRequests';

export default function WorkerFlow() {
  return (
    <>
      <div className="flex-1 overflow-hidden" style={{ display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/jobs" element={<JobRequests />} />
        </Routes>
      </div>
      <BottomNav role="worker" />
    </>
  );
}
