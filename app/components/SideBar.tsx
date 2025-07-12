// src/components/SideBar.tsx
import { Button } from "../components/ui/button";
import { Crop, RotateCcw, Type, Square, Image } from "lucide-react";

export default function SideBar() {
  return (
    <aside className="w-20 flex flex-col gap-4 items-center py-4 border-r bg-card">
      <Button size="icon" variant="ghost">
        <Crop className="h-5 w-5" />
      </Button>
      <Button size="icon" variant="ghost">
        <RotateCcw className="h-5 w-5" />
      </Button>
      <Button size="icon" variant="ghost">
        <Type className="h-5 w-5" />
      </Button>
      <Button size="icon" variant="ghost">
        <Square className="h-5 w-5" />
      </Button>
      <Button size="icon" variant="ghost">
        <Image className="h-5 w-5" />
      </Button>
    </aside>
  );
}
