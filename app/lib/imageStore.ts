// src/lib/imageStore.ts
import { create } from "zustand";

interface ImageState {
  image: HTMLImageElement | null;
  setImage: (img: HTMLImageElement | null, persist?: boolean) => void;
  loadPersistedImage: () => void;
}

export const useImageStore = create<ImageState>((set) => ({
  image: null,
  setImage: (img, persist = true) => {
    if (persist && typeof window !== "undefined" && img?.src) {
      localStorage.setItem("imageDataUrl", img.src);
    } else if (typeof window !== "undefined") {
      localStorage.removeItem("imageDataUrl");
    }
    set({ image: img });
  },
  loadPersistedImage: () => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("imageDataUrl");
    if (saved) {
      const img = new Image();
      img.onload = () => set({ image: img });
      img.src = saved;
    }
  },
}));
