import { useImageEditor } from "../../lib/useImageEditor";
export default function HistoryTool() {
  const { undo, redo } = useImageEditor();

  return (
    <div className="flex gap-2">
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>Redo</button>
    </div>
  );
}
