import { create } from 'zustand';

const useStore = create((set) => ({
  user: null, // { uid, role: 'customer' | 'worker', phone }
  setUser: (user) => set({ user }),
  role: null,
  setRole: (role) => set({ role }),
  isAuthenticated: false,
  setAuthenticated: (status) => set({ isAuthenticated: status }),
}));

export default useStore;
