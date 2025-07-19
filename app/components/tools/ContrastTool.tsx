import { useImageEditor } from "../../lib/useImageEditor";
export default function ContrastTool() {
  const { applyContrast } = useImageEditor();

  return (
    <div className="space-y-2">
      <label className="block font-medium">Contrast</label>
      <input
        type="range"
        min="-100"
        max="100"
        defaultValue="0"
        onChange={(e) => applyContrast(Number(e.target.value))}
      />
    </div>
  );
}
