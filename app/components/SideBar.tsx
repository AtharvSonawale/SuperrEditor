// components/SideBar.tsx
import { Button } from "../components/ui/button";
import { Crop, RotateCcw, Type, Square, Image } from "lucide-react";
import { useToolStore } from "../lib/toolStore";
import clsx from "clsx";

export default function SideBar() {
  const { activeTool, setTool } = useToolStore();

  const handleClick = (tool: typeof activeTool) => {
    setTool(activeTool === tool ? null : tool);
  };

  return (
    <aside className="w-20 flex flex-col gap-4 items-center py-4 border-r bg-card">
      <Button
        size="icon"
        variant="ghost"
        onClick={() => handleClick("crop")}
        className={clsx({ "bg-muted": activeTool === "crop" })}
      >
        <Crop className="h-5 w-5" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => handleClick("rotate")}
        className={clsx({ "bg-muted": activeTool === "rotate" })}
      >
        <RotateCcw className="h-5 w-5" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => handleClick("text")}
        className={clsx({ "bg-muted": activeTool === "text" })}
      >
        <Type className="h-5 w-5" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => handleClick("shape")}
        className={clsx({ "bg-muted": activeTool === "shape" })}
      >
        <Square className="h-5 w-5" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => handleClick("filter")}
        className={clsx({ "bg-muted": activeTool === "filter" })}
      >
        <Image className="h-5 w-5" />
      </Button>
    </aside>
  );
}
