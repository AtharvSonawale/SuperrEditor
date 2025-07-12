// src/components/EditorTopBar.tsx
import { Button } from "../components/ui/button";
import { Upload, Download, Undo2, Redo2 } from "lucide-react";
import ThemeToggle from "./theme/ThemeToggle";

export default function EditorTopBar() {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b bg-card">
      <div className="text-lg font-bold">🖼️ Photo Editor</div>
      <div className="flex gap-2">
        <Button variant="outline">
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
