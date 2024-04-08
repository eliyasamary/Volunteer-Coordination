import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AllItems from "./Screens/AllItems";
import FindItem from "./Screens/FindItem";
// import NewItem from "./Screens/NewItem";
import Dashboard from "./Screens/Dashboard";
import ItemPage from "./Screens/ItemPage";
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
        path: "/dashboard",
        element: <Dashboard />,
        exact: true,
      },
      {
        path: "/ItemPage/:itemId",
        element: <ItemPage />,
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
