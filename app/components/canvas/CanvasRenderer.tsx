// src/components/CanvasRenderer.tsx
import { useEffect, useRef } from "react";
import { useImageStore } from "../../lib/imageStore";
import { useCanvasTools } from "../../lib/useCanvasTools";

export default function CanvasRenderer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const image = useImageStore((state) => state.image);
  const { activeTool } = useCanvasTools();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || !image) return;

    const container = canvas.parentElement;
    if (!container) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const scale = Math.min(
      containerWidth / image.width,
      containerHeight / image.height
    );
    const width = image.width * scale;
    const height = image.height * scale;

    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(image, 0, 0, width, height);

    // Apply active tool operations here
    switch (activeTool) {
      case "crop":
        // Implement crop logic
        break;
      case "rotate":
        // Implement rotate logic
        break;
      case "flip":
        // Implement flip logic
        break;
      case "grayscale":
        // Implement grayscale filter logic
        break;
      case "text":
        // Implement add text logic
        break;
      case "shape":
        // Implement draw shape logic
        break;
      default:
        break;
    }
  }, [image, activeTool]);

  return <canvas ref={canvasRef} style={{ width: "auto", height: "auto" }} />;
}
