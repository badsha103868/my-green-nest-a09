import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import MyProfile from "../Pages/MyProfile";
import ErrorPage from "../ErrorPage/ErrorPage";
import PlantsDetails from "../Pages/PlantsDetails";

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
        element: <Plants></Plants>
      },
      {
        path: "/plantsDetails/:id",
        element: <PlantsDetails></PlantsDetails>,
        loader: () => fetch('/plants.json')
      },
      {
        path: "/myProfiles",
        element: <MyProfile></MyProfile>
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
]);

export default router;
