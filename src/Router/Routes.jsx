import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

import Home from "../Pages/FullHome/Home/Home";
import Error from "../Components/Shared/Error";


const myCreateRoutes= createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
      ]
    }
  ])

export default myCreateRoutes;