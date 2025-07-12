import HomeTopBar from "../components/HomeTopBar";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <>
      <HomeTopBar />
      <section className="h-[calc(100vh-56px)] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Edit Photos in Your Browser</h1>
        <p className="text-lg text-muted-foreground mb-6">
          No install. No nonsense. Just beautiful edits.
        </p>
        <Link to="/editor">
          <Button size="lg">Open Editor</Button>
        </Link>
      </section>
    </>
  );
}
