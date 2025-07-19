import { useImageEditor } from "../../lib/useImageEditor";
export default function EraseTool() {
  const { enableEraser } = useImageEditor();

  return <button onClick={enableEraser}>Activate Eraser</button>;
}
