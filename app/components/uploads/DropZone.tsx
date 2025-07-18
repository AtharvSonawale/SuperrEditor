import { useRef, useState, useCallback } from "react";
import { useImageStore } from "../../lib/imageStore";
import { cn } from "../../lib/utils"; // shadcnui helper for classnames

export default function DropZone({ children }: { children: React.ReactNode }) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const setImage = useImageStore((state) => state.setImage);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const file = e.dataTransfer.files[0];
      if (!file || !file.type.startsWith("image/")) return;

      const img = new Image();
      img.onload = () => setImage(img);
      img.src = URL.createObjectURL(file);
    },
    [setImage]
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;

    const img = new Image();
    img.onload = () => setImage(img);
    img.src = URL.createObjectURL(file);
  };

  return (
    <div
      className={cn(
        "relative w-full h-full border-2 border-dashed rounded-md transition-colors duration-300",
        isDragging ? "border-primary bg-muted" : "border-border"
      )}
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleFileChange}
      />

      {isDragging && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-muted/50 text-muted-foreground font-semibold">
          Drop image to upload
        </div>
      )}

      {children}
    </div>
  );
}
