import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AllItems from "./Screens/AllNews";
import FindItem from "./Screens/FindItem";
import NewItem from "./Screens/NewItem";
// import ErrorNotFound from "./Components/ErrorNotFound404.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorNotFound />,
    children: [
      {
        path: "/allItems",
        element: <AllItems />,
        exact: true,
      },
      {
        path: "/",
        element: <AllItems />,
        exact: true,
      },
      {
        path: "/findItem",
        element: <FindItem />,
        exact: true,
      },
      {
        path: "/newItem",
        element: <NewItem />,
        exact: true,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
