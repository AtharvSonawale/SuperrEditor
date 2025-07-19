import { useImageEditor } from "../../lib/useImageEditor";
import { useState } from "react";

export default function FiltersTool() {
  const { applyBrightness, applyContrast, applySaturation, applyBlur } =
    useImageEditor();

  const [brightness, setBrightness] = useState(0);
  const [contrast, setContrast] = useState(0);
  const [saturation, setSaturation] = useState(0);
  const [blur, setBlur] = useState(0);

  return (
    <div className="tool-panel">
      <label>
        Brightness
        <input
          type="range"
          min={-100}
          max={100}
          value={brightness}
          onChange={(e) => {
            const val = +e.target.value;
            setBrightness(val);
            applyBrightness(val);
          }}
        />
      </label>

      <label>
        Contrast
        <input
          type="range"
          min={-100}
          max={100}
          value={contrast}
          onChange={(e) => {
            const val = +e.target.value;
            setContrast(val);
            applyContrast(val);
          }}
        />
      </label>

      <label>
        Saturation
        <input
          type="range"
          min={-100}
          max={100}
          value={saturation}
          onChange={(e) => {
            const val = +e.target.value;
            setSaturation(val);
            applySaturation(val);
          }}
        />
      </label>

      <label>
        Blur
        <input
          type="range"
          min={0}
          max={10}
          value={blur}
          onChange={(e) => {
            const val = +e.target.value;
            setBlur(val);
            applyBlur(val);
          }}
        />
      </label>
    </div>
  );
}
