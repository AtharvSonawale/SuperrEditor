// lib/useImageEditor.ts
import { create } from "zustand";

interface ImageEditorState {
  canvas: HTMLCanvasElement | null;
  ctx: CanvasRenderingContext2D | null;
  image: HTMLImageElement | null;

  history: ImageData[];
  future: ImageData[];

  // Setters
  setCanvas: (canvas: HTMLCanvasElement) => void;
  setImage: (img: HTMLImageElement) => void;

  // Tools
  applyBrightness: (value: number) => void;
  applyContrast: (value: number) => void;
  applySaturation: (value: number) => void;
  applyBlur: (value: number) => void;
  applySharpness: (value: number) => void;

  drawShape: (shape: string) => void;
  addText: (text: string) => void;
  addSticker: (emoji: string) => void;

  enableDrawing: () => void;
  enableEraser: () => void;
  setBrushSize: (size: number) => void;
  setBrushColor: (color: string) => void;

  undo: () => void;
  redo: () => void;
  pushHistory: () => void;
}

export const useImageEditor = create<ImageEditorState>((set, get) => ({
  canvas: null,
  ctx: null,
  image: null,
  history: [],
  future: [],

  setCanvas: (canvas) => {
    const ctx = canvas.getContext("2d");
    if (ctx) {
      set({ canvas, ctx });
    }
  },

  setImage: (img) => {
    const { canvas, ctx, pushHistory } = get();
    if (canvas && ctx) {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      set({ image: img });
      pushHistory();
    }
  },

  pushHistory: () => {
    const { canvas, ctx, history } = get();
    if (canvas && ctx) {
      const snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
      set({ history: [...history, snapshot], future: [] });
    }
  },

  undo: () => {
    const { history, future, ctx, canvas } = get();
    if (history.length < 2 || !ctx || !canvas) return;

    const current = history[history.length - 1];
    const prev = history[history.length - 2];
    ctx.putImageData(prev, 0, 0);
    set({
      history: history.slice(0, -1),
      future: [current, ...future],
    });
  },

  redo: () => {
    const { future, history, ctx } = get();
    if (!ctx || future.length === 0) return;

    const next = future[0];
    ctx.putImageData(next, 0, 0);
    set({
      history: [...history, next],
      future: future.slice(1),
    });
  },

  applyBrightness: (value) => {
    const { ctx, canvas, pushHistory } = get();
    if (!ctx || !canvas) return;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      data[i] += value;
      data[i + 1] += value;
      data[i + 2] += value;
    }

    ctx.putImageData(imageData, 0, 0);
    pushHistory();
  },

  applyContrast: (value) => {
    const { ctx, canvas, pushHistory } = get();
    if (!ctx || !canvas) return;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    const factor = (259 * (value + 255)) / (255 * (259 - value));

    for (let i = 0; i < data.length; i += 4) {
      data[i] = factor * (data[i] - 128) + 128;
      data[i + 1] = factor * (data[i + 1] - 128) + 128;
      data[i + 2] = factor * (data[i + 2] - 128) + 128;
    }

    ctx.putImageData(imageData, 0, 0);
    pushHistory();
  },

  applySaturation: (value) => {
    const { ctx, canvas, pushHistory } = get();
    if (!ctx || !canvas) return;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const gray = 0.3 * data[i] + 0.59 * data[i + 1] + 0.11 * data[i + 2];
      data[i] = gray + (data[i] - gray) * (1 + value / 100);
      data[i + 1] = gray + (data[i + 1] - gray) * (1 + value / 100);
      data[i + 2] = gray + (data[i + 2] - gray) * (1 + value / 100);
    }

    ctx.putImageData(imageData, 0, 0);
    pushHistory();
  },

  applyBlur: (radius) => {
    // Simplified box blur using canvas context
    const { canvas, ctx, pushHistory } = get();
    if (!canvas || !ctx) return;

    ctx.filter = `blur(${radius}px)`;
    ctx.drawImage(canvas, 0, 0);
    ctx.filter = "none";
    pushHistory();
  },

  applySharpness: (amount) => {
    // Needs WebGL or convolution matrix for proper sharpness
    console.warn("applySharpness not implemented yet.");
  },

  drawShape: (shape) => {
    const { ctx, canvas, pushHistory } = get();
    if (!ctx || !canvas) return;

    ctx.fillStyle = "rgba(0,0,0,0.3)";
    if (shape === "rect") ctx.fillRect(50, 50, 100, 100);
    if (shape === "circle") {
      ctx.beginPath();
      ctx.arc(100, 100, 50, 0, Math.PI * 2);
      ctx.fill();
    }
    pushHistory();
  },

  addText: (text) => {
    const { ctx, pushHistory } = get();
    if (!ctx) return;
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(text, 50, 50);
    pushHistory();
  },

  addSticker: (emoji) => {
    const { ctx, pushHistory } = get();
    if (!ctx) return;
    ctx.font = "40px sans-serif";
    ctx.fillText(emoji, 100, 100);
    pushHistory();
  },

  enableDrawing: () => {
    console.warn(
      "Enable drawing logic should be handled by canvas event binding in component."
    );
  },

  enableEraser: () => {
    console.warn(
      "Eraser logic should be handled by canvas context manipulation."
    );
  },

  setBrushSize: (size) => {
    const { ctx } = get();
    if (ctx) ctx.lineWidth = size;
  },

  setBrushColor: (color) => {
    const { ctx } = get();
    if (ctx) ctx.strokeStyle = color;
  },
}));
