import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../root/Root";
import DonationCamp from "../pages/DonationCamp";
import DonationDetails from "../pages/DonationDetails";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/campaigns",
        element: <DonationCamp />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/campaigns/:id",
        element: <DonationDetails />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
