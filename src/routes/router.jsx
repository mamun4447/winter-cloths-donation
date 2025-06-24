import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../root/Root";
import DonationCamp from "../pages/DonationCamp";
import DonationDetails from "../pages/DonationDetails";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import PrivateRoute from "../components/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard";
import HowToHelp from "../pages/HowToHelp";

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
        element: (
          <PrivateRoute>
            <DonationDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/how-to-help",
        element: <HowToHelp />,
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
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
