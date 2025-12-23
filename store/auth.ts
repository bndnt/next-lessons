import { create } from 'zustand';
import type { User } from '@/types/auth';
interface AuthStore {
  isAuthenticated: boolean;
  user: User | null;
  setUser: (user: User) => void;
  clearIsAuthenticated: () => void;
}

export const useAuthStore = create<AuthStore>()(set => ({
  isAuthenticated: false,
  user: null,
  setUser: user => {
    set(() => ({ isAuthenticated: true, user }));
  },
  clearIsAuthenticated: () => {
    set(() => ({ isAuthenticated: false, user: null }));
  },
}));

//1 - interface
/*
interface AuthStore {
  isAuthenticated: boolean;
  user: User | null;
    setUser: (user: User) => void;
  clearIsAuthenticated: () => void;
}
*/

//3
/*
export const useAuthStore = create<AuthStore>()(set => ({
  isAuthenticated: false,
  user: null,
  setUser: user => {
    set(() => ({ isAuthenticated: true, user }));
  },
  clearIsAuthenticated: () => {
    set(() => ({ isAuthenticated: false, user: null }));
  },
}));
*/
