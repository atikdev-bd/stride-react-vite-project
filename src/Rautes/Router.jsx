import { createBrowserRouter } from "react-router-dom";
import DashbordLayout from "../layout/DashbordLayout";
import MainLayout from "../layout/MainLayout";
import DashbordPage from "../pages/DashbordPage";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Register from "../pages/Register";
import About from "./../pages/About";
import Login from "./../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashbord",
    element: <DashbordLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <DashbordPage />,
      },
    ],
  },
]);
