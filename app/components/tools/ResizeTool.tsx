import { useState } from "react";
import { useImageEditor } from "../../lib/useImageEditor";

export default function ResizeTool() {
  const { canvas, ctx, image, pushHistory } = useImageEditor();
  const [width, setWidth] = useState(image?.width || 300);
  const [height, setHeight] = useState(image?.height || 300);

  const handleResize = () => {
    if (!canvas || !ctx || !image) return;

    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = width;
    tempCanvas.height = height;

    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return;

    tempCtx.drawImage(image, 0, 0, width, height);

    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(tempCanvas, 0, 0);
    pushHistory();
  };

  return (
    <div className="tool-panel">
      <input
        type="number"
        value={width}
        onChange={(e) => setWidth(+e.target.value)}
      />
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(+e.target.value)}
      />
      <button onClick={handleResize} className="btn">
        Resize
      </button>
    </div>
  );
}
