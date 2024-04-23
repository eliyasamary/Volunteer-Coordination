import AllItems from "./Screens/AllItems";
import Messages from "./Screens/Messages";
// import NewItem from "./Screens/NewItem";
import Dashboard from "./Screens/Dashboard";
import ItemPage from "./Screens/ItemPage";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Template from "./Template";
import ErrorNotFound from "./Screens/ErrorNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    default: true,
    errorElement: <ErrorNotFound />,
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
        path: "/messages",
        element: <Messages />,
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

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
