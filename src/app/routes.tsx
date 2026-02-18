import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { MediaPlayer } from "./pages/MediaPlayer";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "saated", Component: MediaPlayer },
    ],
  },
]);
