import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { TodoPayload } from '@/types/todo';
interface TodoDraft {
  draft: TodoPayload;
  saveDraft: (data: TodoPayload) => void;
  cleanDraft: () => void;
}
export const useTodoDraft = create<TodoDraft>()(
  persist(
    set => ({
      draft: {
        title: '',
        completed: true,
      },
      saveDraft: data => set({ draft: data }),
      cleanDraft: () => set({ draft: { title: '' } }),
    }),
    { name: 'todo-draft' }
  )
);
