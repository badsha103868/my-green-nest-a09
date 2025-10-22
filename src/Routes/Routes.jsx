import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import MyProfile from "../Pages/MyProfile";
import ErrorPage from "../ErrorPage/ErrorPage";






const router = createBrowserRouter([
  {
    id:"root",
    path:'/',
    element:<Root></Root>,
   loader: ()=>fetch('/plantCareTips.json'),
    children:[
    {
      index: true, 
      path:"/",
      element:<Home></Home>,
      
       loader: ()=> fetch('/plants.json'),
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