import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AllNews from "./Screens/AllNews";
import FindItem from "./Screens/FindItem";
import NewItem from "./Screens/NewItem";
// import SpecificDonation from "./Components/SpesificDonation.jsx";
// import NewDonation from "./Components/NewDonation.jsx";
// import AllDonations from "./Components/AllDonations.jsx";
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
        element: <AllNews />,
        exact: true,
      },
      {
        path: "/",
        element: <AllNews />,
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
