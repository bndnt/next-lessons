import { create } from 'zustand';
interface Counter {
  value: number;
  increment: (num: number) => void;
  decrement: (num: number) => void;
}
export const useCounter = create<Counter>()(set => ({
  value: 0,
  increment: num => set(prev => ({ value: prev.value + num })),
  decrement: num => set(prev => ({ value: prev.value - num })),
}));
