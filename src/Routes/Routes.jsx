import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import MyProfile from "../Pages/MyProfile";





const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
    {
      index: true,
      path:"/",
      element:<Home></Home>
     },
     {
      path:"/plants",
      Component:Plants
     },
     {
      path:'/myProfiles',
      Component: MyProfile
     }
  ]
  }
])

export default router