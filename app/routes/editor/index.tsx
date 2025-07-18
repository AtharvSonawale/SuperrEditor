import CanvasRenderer from "../../components/canvas/CanvasRenderer";

export default function EditorPage() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="flex-1 overflow-hidden flex justify-center items-center">
        <CanvasRenderer />
      </div>
    </div>
  );
}
