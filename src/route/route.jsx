import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/UserLayout/UserLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SliderData from "../components/DataForm/SliderData";
import AllPublisherData from "../components/DataForm/AllPublisherData";
import AddArticles from "../pages/AddArticles/AddArticles";
import AllArticles from "../pages/AllArticles/AllArticles";
import Subscription from "../pages/Subscriptions/Subscription";
import MyArticle from "../pages/MyArticle/MyArticle";
import PremiumArticle from "../pages/PremiumArticle/PremiumArticle";
import ForApproveArticle from "../components/DashBoard/Admin/ForApproveArticle";
import Dashboard from "../pages/DashBoard/Dashboard";
import ArticleDetails from "../components/Articles/ArticleDetails";

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
      {
        path: "/add-articles",
        element: <AddArticles></AddArticles>,
      },
      {
        path: "/all-articles",
        element: <AllArticles></AllArticles>,
      },
      {
        path: `/article/details/:name/:id`,
        element: <ArticleDetails></ArticleDetails>,
      },
      {
        path: "/subscription",
        element: <Subscription></Subscription>,
      },
      {
        path: "/my-article",
        element: <MyArticle></MyArticle>,
      },
      {
        path: "/premium-articles",
        element: <PremiumArticle></PremiumArticle>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/slider-data",
        element: <SliderData></SliderData>,
      },
      {
        path: "/dashboard/add-publisher",
        element: <AllPublisherData></AllPublisherData>,
      },
      {
        path: "/dashboard/approve-article",
        element: <ForApproveArticle></ForApproveArticle>,
      },
    ],
  },
]);

export default route;
