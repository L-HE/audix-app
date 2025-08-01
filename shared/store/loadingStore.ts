// shared/store/loadingStore.ts
import { create } from 'zustand';

interface LoadingState {
  isLoading: boolean;
  loadingMessage?: string;
  setLoading: (loading: boolean, message?: string) => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  loadingMessage: undefined,
  setLoading: (loading: boolean, message?: string) => 
    set({ isLoading: loading, loadingMessage: message }),
}));