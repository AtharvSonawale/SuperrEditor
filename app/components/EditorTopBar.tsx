// src/components/EditorTopBar.tsx
import { useRef } from "react";
import { Button } from "../components/ui/button";
import { Upload, Download, Undo2, Redo2 } from "lucide-react";
import ThemeToggle from "./theme/ThemeToggle";
import { useImageStore } from "../lib/imageStore";
import imageCompression from "browser-image-compression";

export default function EditorTopBar() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const setImage = useImageStore((state) => state.setImage);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;

    const options = {
      maxSizeMB: 1, // Maximum file size you want after compression
      maxWidthOrHeight: 1920, // Maximum width or height
      useWebWorker: true, // Use multi-threading for better performance
    };

    try {
      const compressedFile = await imageCompression(file, options);
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          setImage(img, true);
          URL.revokeObjectURL(img.src); // Cleanup memory leak
        };
        img.onerror = () => alert("Failed to load image");
        img.src = reader.result as string;
      };
      reader.readAsDataURL(compressedFile);
    } catch (error) {
      console.error("Error compressing image:", error);
      alert("Failed to compress image");
    }
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 border-b bg-card">
      <div className="text-lg font-bold">🖼️ Photo Editor</div>
      <div className="flex gap-2 items-center">
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          hidden
          onChange={handleFileChange}
        />
        <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
          <Upload className="h-4 w-4 mr-1" /> Upload
        </Button>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-1" /> Export
        </Button>
        <Button variant="ghost">
          <Undo2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost">
          <Redo2 className="h-4 w-4" />
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
}
