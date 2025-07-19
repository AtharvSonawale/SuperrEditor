import { useToolStore } from "../../lib/toolStore";
import { Button } from "../ui/button";

const tools = ["crop", "resize", "rotate", "filter"] as const;

export default function ToolPanel() {
  const { activeTool, setTool } = useToolStore();

  return (
    <div className="flex gap-2 p-2 border-t border-muted bg-muted">
      {tools.map((tool) => (
        <Button
          key={tool}
          variant={activeTool === tool ? "default" : "outline"}
          onClick={() => setTool(activeTool === tool ? null : tool)}
        >
          {tool.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
