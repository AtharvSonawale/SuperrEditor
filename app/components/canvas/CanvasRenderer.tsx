// src/components/CanvasRenderer.tsx
import { useEffect, useRef } from "react";
import { useImageStore } from "../../lib/imageStore";
import { useToolStore } from "../../lib/toolStore";

export default function CanvasRenderer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const image = useImageStore((state) => state.image);
  const { activeTool } = useToolStore();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

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

    // === Apply transformations based on activeTool ===
    switch (activeTool) {
      case "crop":
        // Demo crop to center square region
        const cropSize = Math.min(image.width, image.height) / 2;
        ctx.drawImage(
          image,
          image.width / 4,
          image.height / 4,
          cropSize,
          cropSize,
          0,
          0,
          width,
          height
        );
        break;

      case "rotate":
        ctx.save();
        ctx.translate(width / 2, height / 2);
        ctx.rotate((90 * Math.PI) / 180); // 90 degrees rotation
        ctx.drawImage(image, -width / 2, -height / 2, width, height);
        ctx.restore();
        break;

      case "flip":
        ctx.save();
        ctx.translate(width, 0);
        ctx.scale(-1, 1); // horizontal flip
        ctx.drawImage(image, 0, 0, width, height);
        ctx.restore();
        break;

      case "grayscale":
        ctx.drawImage(image, 0, 0, width, height);
        const imgData = ctx.getImageData(0, 0, width, height);
        for (let i = 0; i < imgData.data.length; i += 4) {
          const avg =
            (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3;
          imgData.data[i] = imgData.data[i + 1] = imgData.data[i + 2] = avg;
        }
        ctx.putImageData(imgData, 0, 0);
        break;

      case "text":
        ctx.drawImage(image, 0, 0, width, height);
        ctx.font = "24px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("Hello 👋", width / 2 - 40, height / 2); // hardcoded position
        break;

      case "shape":
        ctx.drawImage(image, 0, 0, width, height);
        ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
        ctx.fillRect(width / 4, height / 4, 100, 100); // example blue square
        break;

      default:
        ctx.drawImage(image, 0, 0, width, height); // default render
        break;
    }
  }, [image, activeTool]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "100%",
        display: "block",
        borderRadius: "8px",
      }}
    />
  );
}
