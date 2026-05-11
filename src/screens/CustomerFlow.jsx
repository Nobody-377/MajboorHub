import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import Home from './customer/Home';
import SearchPage from './customer/Search';
import WorkerProfile from './customer/WorkerProfile';
import JobForm from './customer/JobForm';

export default function CustomerFlow() {
  return (
    <>
      <div className="flex-1 overflow-hidden" style={{ display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/worker/:id" element={<WorkerProfile />} />
          <Route path="/book/:id" element={<JobForm />} />
        </Routes>
      </div>
      <BottomNav role="customer" />
    </>
  );
}
