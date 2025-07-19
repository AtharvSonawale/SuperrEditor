import { useImageEditor } from "../../lib/useImageEditor";
export default function SharpnessTool() {
  const { applySharpness } = useImageEditor();

  return (
    <div className="space-y-2">
      <label className="block font-medium">Sharpness</label>
      <input
        type="range"
        min="0"
        max="10"
        step="0.1"
        defaultValue="0"
        onChange={(e) => applySharpness(Number(e.target.value))}
      />
    </div>
  );
}
