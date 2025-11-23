import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Count from "./components/Count.jsx";
import Counter from "./components/Counter.jsx";
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/count", element: <Count /> },
  { path: "/counter", element: <Counter /> },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>
);
