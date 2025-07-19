import { useImageEditor } from "../../lib/useImageEditor";
export default function DrawTool() {
  const { enableDrawing, setBrushSize, setBrushColor } = useImageEditor();

  return (
    <div className="space-y-2">
      <label className="block font-medium">Brush Size</label>
      <input
        type="range"
        min="1"
        max="50"
        onChange={(e) => setBrushSize(Number(e.target.value))}
      />
      <label className="block font-medium">Brush Color</label>
      <input type="color" onChange={(e) => setBrushColor(e.target.value)} />
      <button onClick={enableDrawing}>Start Drawing</button>
    </div>
  );
}
