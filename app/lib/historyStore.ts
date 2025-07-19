import { create } from "zustand";

interface HistoryStore {
  history: ImageData[];
  future: ImageData[];
  push: (data: ImageData) => void;
  undo: () => void;
  redo: () => void;
  current: ImageData | null;
  setCurrent: (data: ImageData) => void;
}

export const useHistoryStore = create<HistoryStore>((set, get) => ({
  history: [],
  future: [],
  current: null,
  push: (data) => {
    const { history } = get();
    set({
      history: [...history, data],
      future: [],
      current: data,
    });
  },
  undo: () => {
    const { history, future, current } = get();
    if (history.length === 0 || !current) return;
    const last = history[history.length - 1];
    set({
      history: history.slice(0, -1),
      future: [current, ...future],
      current: last,
    });
  },
  redo: () => {
    const { future, history, current } = get();
    if (future.length === 0 || !current) return;
    const next = future[0];
    set({
      history: [...history, current],
      future: future.slice(1),
      current: next,
    });
  },
  setCurrent: (data) => set({ current: data }),
}));
