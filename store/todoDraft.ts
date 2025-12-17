import { create } from 'zustand';
import type { TodoPayload } from '@/types/todo';
interface TodoDraft {
  draft: TodoPayload;
  saveDraft: (data: TodoPayload) => void;
  cleanDraft: () => void;
}
const useTodoDraft = create<TodoDraft>()(set => ({
  draft: {
    title: '',
  },
  saveDraft: data => set({ draft: data }),
  cleanDraft: () => set({ draft: { title: '' } }),
}));

export default useTodoDraft;
