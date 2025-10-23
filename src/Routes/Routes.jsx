import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import MyProfile from "../Pages/MyProfile";
import ErrorPage from "../ErrorPage/ErrorPage";
import PlantsDetails from "../Pages/PlantsDetails";
import FormPage from "../Pages/FormPage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Root></Root>,
    loader: () => fetch('/plantCareTips.json'),
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch('/plants.json'),
      },
      {
        path: "/plants",
        element: <Plants></Plants>,
        loader: () => fetch('/plants.json')

      },
      
      {
        path: "/myProfiles",
        element: <MyProfile></MyProfile>
      },
      {
         path: '/formPage',
         element: <FormPage></FormPage>
      },
     
     
     ]
    },
      {
        path: "/plantsDetails/:id",
        element: <PlantsDetails></PlantsDetails>,
        loader: () => fetch('/plants.json')
      },
      {
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children:[
          {
          path:'/auth/login/',
          element:<Login></Login>
          },
          {
            path:'/auth/signUp/',
            element:<SignUp></SignUp>
          }
        ]
       },
       {
        path: "/*",
        element: <ErrorPage></ErrorPage>
      },
]);

export default router;
