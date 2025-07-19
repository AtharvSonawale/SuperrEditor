import { useImageEditor } from "../../lib/useImageEditor";

export default function RotateTool() {
  const { canvas, ctx, image, pushHistory } = useImageEditor();

  const rotate = (angle: number) => {
    if (!canvas || !ctx || !image) return;

    const radians = (angle * Math.PI) / 180;
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d")!;
    const { width, height } = canvas;

    if (angle === 90 || angle === 270) {
      tempCanvas.width = height;
      tempCanvas.height = width;
    } else {
      tempCanvas.width = width;
      tempCanvas.height = height;
    }

    tempCtx.translate(tempCanvas.width / 2, tempCanvas.height / 2);
    tempCtx.rotate(radians);
    tempCtx.drawImage(canvas, -width / 2, -height / 2);

    canvas.width = tempCanvas.width;
    canvas.height = tempCanvas.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(tempCanvas, 0, 0);
    pushHistory();
  };

  return (
    <div className="tool-panel">
      <button onClick={() => rotate(90)}>↻ Rotate 90°</button>
      <button onClick={() => rotate(180)}>↻ Rotate 180°</button>
      <button onClick={() => rotate(270)}>↻ Rotate 270°</button>
    </div>
  );
}
