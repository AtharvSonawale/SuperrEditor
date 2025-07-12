// src/components/BottomBar.tsx
import { Button } from "../components/ui/button";
import { ZoomIn, ZoomOut, RefreshCcw } from "lucide-react";

export default function BottomBar() {
  return (
    <footer className="flex justify-end gap-2 px-4 py-2 border-t bg-card">
      <Button variant="ghost">
        <ZoomOut className="h-4 w-4" />
      </Button>
      <Button variant="ghost">
        <ZoomIn className="h-4 w-4" />
      </Button>
      <Button variant="outline">
        <RefreshCcw className="h-4 w-4 mr-1" /> Reset
      </Button>
    </footer>
  );
}
