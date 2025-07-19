// lib/ToolStore.ts
import { create } from "zustand";

export type ToolType =
  | "crop"
  | "resize"
  | "rotate"
  | "filter"
  | "text"
  | "shape"
  | null;

interface ToolStoreState {
  activeTool: ToolType;
  setTool: (tool: ToolType) => void;
}

export const useToolStore = create<ToolStoreState>((set) => ({
  activeTool: null,
  setTool: (tool) => set({ activeTool: tool }),
}));
