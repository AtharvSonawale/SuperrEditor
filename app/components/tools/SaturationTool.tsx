import { useImageEditor } from "../../lib/useImageEditor";
export default function SaturationTool() {
  const { applySaturation } = useImageEditor();

  return (
    <div className="space-y-2">
      <label className="block font-medium">Saturation</label>
      <input
        type="range"
        min="-100"
        max="100"
        defaultValue="0"
        onChange={(e) => applySaturation(Number(e.target.value))}
      />
    </div>
  );
}
