// src/lib/useCanvasTools.ts
import { useState } from "react";

export const useCanvasTools = () => {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const handleToolSelect = (tool: string) => {
    setActiveTool(tool);
  };

  return { activeTool, handleToolSelect };
};
