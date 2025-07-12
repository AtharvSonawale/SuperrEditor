import { Outlet } from "react-router";
import EditorTopBar from "../../components/EditorTopBar";
import SideBar from "../../components/SideBar";
import BottomBar from "../../components/BottomBar";

export default function EditorLayout() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background text-foreground">
      <EditorTopBar />
      <div className="flex flex-1 overflow-hidden">
        <SideBar />
        <main className="flex-1 overflow-hidden p-4">
          <Outlet />
        </main>
      </div>
      <BottomBar />
    </div>
  );
}
