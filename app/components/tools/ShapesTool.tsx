import { useImageEditor } from "../../lib/useImageEditor";
export default function ShapesTool() {
  const { drawShape } = useImageEditor();

  return (
    <div className="space-y-2">
      <select onChange={(e) => drawShape(e.target.value)}>
        <option value="">Choose shape</option>
        <option value="rect">Rectangle</option>
        <option value="circle">Circle</option>
        <option value="triangle">Triangle</option>
      </select>
    </div>
  );
}
