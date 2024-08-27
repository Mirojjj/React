import React, { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter as Router,
} from "react-router-dom";
import Fliter from "./pages/Fliter.jsx";
import OptimisticUpdates from "./pages/OptimisticUpdates.jsx";
import Game from "./pages/Game.jsx";
import Redux from "./pages/Redux.jsx";
import Weather from "./pages/Weather.jsx";

// const Fliter = lazy(() => import("./pages/Fliter.jsx"));

// const Game = lazy(() => import("./pages/Game.jsx"));
// const Redux = lazy(() => import("./pages/Redux.jsx"));

// const Weather = lazy(() => import("./pages/Weather.jsx"));

// const OptimisticUpdates = lazy(() => import("./pages/OptimisticUpdates.jsx"));

import { store } from "./app/store.js";
import { Provider } from "react-redux";

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
  {
    path: "/weather",
    element: <Weather />,
  },
  {
    path: "/opt",
    element: <OptimisticUpdates />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
