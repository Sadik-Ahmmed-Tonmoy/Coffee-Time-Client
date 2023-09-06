import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Menu from "../Pages/Menu/Menu/Menu";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
 
 
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signUp",
          element: <SignUp />,
        },
      ],
    },
  ]);