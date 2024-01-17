import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/UserLayout/UserLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const route = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout></UserLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default route;
