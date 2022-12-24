import React from "react";
import { useRoutes } from "react-router-dom";
import Explore from "../Explore/Explore";
import Home from "../Homescreen/Home";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";

const Allroutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/explore",
      element: <Explore />,
    },
  ]);

  return element;
};

export default Allroutes;
