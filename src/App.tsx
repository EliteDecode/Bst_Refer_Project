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
  ConfirmCode,
  ForgotPassword,
  ResetPassword,
} from "./routes";
import { AuthLayout, DashboardLayout, Layout } from "./components/layout";

//styling libraries
import "aos/dist/aos.css";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { useSelector } from "react-redux";

export default function App() {
  const { token } = useSelector((state: any) => state.auth);
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
          element: token ? <Navigate to="/dashboard/home" /> : <AuthLayout />,
          children: [
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
            {
              path: "confirm",
              element: <ConfirmCode />,
            },
            {
              path: "forgot-password",
              element: <ForgotPassword />,
            },
            {
              path: "reset-password/:resetToken",
              element: <ResetPassword />,
            },
          ],
        },

        //Dashboard Routes
        {
          path: "dashboard",
          element: !token ? <Navigate to="/auth/login" /> : <DashboardLayout />,
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
