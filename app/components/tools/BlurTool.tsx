import { useImageEditor } from "../../lib/useImageEditor";
export default function BlurTool() {
  const { applyBlur } = useImageEditor();

  return (
    <div className="space-y-2">
      <label className="block font-medium">Blur</label>
      <input
        type="range"
        min="0"
        max="10"
        step="0.1"
        defaultValue="0"
        onChange={(e) => applyBlur(Number(e.target.value))}
      />
    </div>
  );
}
