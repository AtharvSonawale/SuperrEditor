import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/HomePage.tsx"),
  route("editor", "routes/editor/layout.tsx", [
    index("routes/editor/index.tsx"), // /editor
  ]),
] satisfies RouteConfig;
