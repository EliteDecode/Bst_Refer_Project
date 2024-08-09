import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

// routes
import {
  Users,
  Dashboard,
  Help,
  Home,
  Login,
  Profile,
  Register,
  Settings,
  Wallet,
  AddUser,
} from "./routes";
import { AuthLayout, DashboardLayout, Layout } from "./components/layout";

//styling libraries
import "aos/dist/aos.css";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

export default function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        //General Routes
        {
          path: "/",
          element: <Navigate to="/home" />,
        },
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "/home",
              element: <Home />,
            },
          ],
        },
        //Authentication Routes
        {
          path: "auth",
          element: <AuthLayout />,
          children: [
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },

        //Dashboard Routes
        {
          path: "dashboard",
          element: <DashboardLayout />,
          children: [
            {
              path: "home",
              element: <Dashboard />,
            },
            {
              path: "users",
              element: <Users />,
            },
            {
              path: "add-user",
              element: <AddUser />,
            },
            {
              path: "wallet",
              element: <Wallet />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "settings",
              element: <Settings />,
            },
            {
              path: "help",
              element: <Help />,
            },
          ],
        },

        {
          path: "*",
          element: <Navigate to="/dashboard/home" />,
        },
      ])}
    />
  );
}
