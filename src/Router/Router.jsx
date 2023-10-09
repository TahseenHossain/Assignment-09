import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Error from "../Components/Error/Error";
import Details from "../Components/Details/Details";
import AboutUs from "../Components/AboutUs/AboutUs";
import Careers from "../Components/Careers/Careers";
import LogIn from "../Components/LogIn/LogIn";
import SignIn from "../Components/SignIn/SignIn";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: '/service/:id',
            element:<PrivateRoute><Details></Details></PrivateRoute>,
            loader: () => fetch('../Services.json')
        },
        {
            path: "/AboutUs",
            element:<PrivateRoute><AboutUs></AboutUs></PrivateRoute> 
        },
        {
            path: "/Careers",
            element:<PrivateRoute><Careers></Careers></PrivateRoute> 
        },
        {
            path: "/LogIn",
            element: <LogIn></LogIn>
        },
        {
            path: "/SignIn",
            element: <SignIn></SignIn>
        },
      ]

    },
  ]);

export default router;