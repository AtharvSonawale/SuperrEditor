import { Button } from "../components/ui/button";
import { Crop, RotateCcw, Type, Square, Image } from "lucide-react";

interface SideBarProps {
  onCrop: () => void;
  onRotate: () => void;
  onAddText: () => void;
  onDrawShape: () => void;
  onApplyFilter: () => void;
}

export default function SideBar({
  onCrop,
  onRotate,
  onAddText,
  onDrawShape,
  onApplyFilter,
}: SideBarProps) {
  return (
    <aside className="w-20 flex flex-col gap-4 items-center py-4 border-r bg-card">
      <Button size="icon" variant="ghost" onClick={onCrop}>
        <Crop className="h-5 w-5" />
      </Button>
      <Button size="icon" variant="ghost" onClick={onRotate}>
        <RotateCcw className="h-5 w-5" />
      </Button>
      <Button size="icon" variant="ghost" onClick={onAddText}>
        <Type className="h-5 w-5" />
      </Button>
      <Button size="icon" variant="ghost" onClick={onDrawShape}>
        <Square className="h-5 w-5" />
      </Button>
      <Button size="icon" variant="ghost" onClick={onApplyFilter}>
        <Image className="h-5 w-5" />
      </Button>
    </aside>
  );
}
