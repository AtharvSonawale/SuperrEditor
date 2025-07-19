import { useImageEditor } from "../../lib/useImageEditor";
export default function TextTool() {
  const { addText } = useImageEditor();

  return (
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Enter text"
        onBlur={(e) => addText(e.target.value)}
      />
    </div>
  );
}
