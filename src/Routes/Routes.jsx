import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import MyProfile from "../Pages/MyProfile";
import ErrorPage from "../ErrorPage/ErrorPage";






const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
    {
      index: true,
      path:"/",
      element:<Home></Home>,
      loader: ()=> fetch('/plants.json')
     },
     {
      path:"/plants",
      Component:Plants
     },
     
     {
      path:'/myProfiles',
      Component: MyProfile
     },
     {
        path:'*',
        Component:ErrorPage
       }
  ]
  }
])

export default router