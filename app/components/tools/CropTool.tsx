import { useState } from "react";
import { useImageEditor } from "../../lib/useImageEditor";

export default function CropTool() {
  const { canvas, ctx, pushHistory } = useImageEditor();
  const [cropArea, setCropArea] = useState({
    x: 50,
    y: 50,
    width: 200,
    height: 200,
  });

  const handleCrop = () => {
    if (!canvas || !ctx) return;

    const cropped = ctx.getImageData(
      cropArea.x,
      cropArea.y,
      cropArea.width,
      cropArea.height
    );

    canvas.width = cropArea.width;
    canvas.height = cropArea.height;
    ctx.putImageData(cropped, 0, 0);
    pushHistory();
  };

  return (
    <div className="tool-panel">
      <button onClick={handleCrop} className="btn">
        Crop
      </button>
    </div>
  );
}
