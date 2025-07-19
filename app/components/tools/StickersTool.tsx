import { useImageEditor } from "../../lib/useImageEditor";
export default function StickersTool() {
  const { addSticker } = useImageEditor();

  return (
    <div className="space-y-2">
      <button onClick={() => addSticker("🔥")}>🔥</button>
      <button onClick={() => addSticker("🌟")}>🌟</button>
      <button onClick={() => addSticker("💎")}>💎</button>
    </div>
  );
}
