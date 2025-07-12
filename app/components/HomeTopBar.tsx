// src/components/HomeTopBar.tsx
import { Link } from "react-router";
import ThemeToggle from "../components/theme/ThemeToggle";

export default function HomeTopBar() {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b bg-card">
      <Link to="/" className="text-lg font-bold hover:underline">
        🖼️ Photo Editor
      </Link>
      <ThemeToggle />
    </header>
  );
}
