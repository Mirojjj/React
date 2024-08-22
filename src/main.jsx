import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter as Router,
} from "react-router-dom";
import Fliter from "./pages/Fliter.jsx";
import Game from "./pages/Game.jsx";

const router = Router([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/filter",
    element: <Fliter />,
  },
  {
    path: "/game",
    element: <Game />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
