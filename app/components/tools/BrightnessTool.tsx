import { useImageEditor } from "../../lib/useImageEditor";
export default function BrightnessTool() {
  const { applyBrightness } = useImageEditor();

  return (
    <div className="space-y-2">
      <label className="block font-medium">Brightness</label>
      <input
        type="range"
        min="-100"
        max="100"
        defaultValue="0"
        onChange={(e) => applyBrightness(Number(e.target.value))}
      />
    </div>
  );
}
