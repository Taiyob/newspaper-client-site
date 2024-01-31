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
import Payment from "../pages/Payment/Payment";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddArticles></AddArticles>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-articles",
        element: (
          <PrivateRoute>
            <AllArticles></AllArticles>
          </PrivateRoute>
        ),
      },
      {
        path: `/article/details/:name/:id`,
        element: (
          <PrivateRoute>
            <ArticleDetails></ArticleDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/subscription",
        element: (
          <PrivateRoute>
            <Subscription></Subscription>
          </PrivateRoute>
        ),
      },
      {
        path: "/subscription/payment/:price",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/history",
        element: (
          <PrivateRoute>
            <PaymentHistory></PaymentHistory>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-article",
        element: (
          <PrivateRoute>
            <MyArticle></MyArticle>
          </PrivateRoute>
        ),
      },
      {
        path: "/premium-articles",
        element: (
          <PrivateRoute>
            <PremiumArticle></PremiumArticle>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/slider-data",
        element: (
          <PrivateRoute>
            <SliderData></SliderData>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-publisher",
        element: (
          <PrivateRoute>
            <AllPublisherData></AllPublisherData>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/approve-article",
        element: (
          <PrivateRoute>
            <ForApproveArticle></ForApproveArticle>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default route;
