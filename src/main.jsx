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

import { store } from "./app/store.js";
import { Provider } from "react-redux";
import Redux from "./pages/Redux.jsx";

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
  {
    path: "/redux",
    element: <Redux />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
