import { lazy } from "react";

export const Home = lazy(() => import("../pages/Home/Home"));

//Authentication Routes
export const Login = lazy(() => import("../pages/Auth/Login"));
export const Register = lazy(() => import("../pages/Auth/Register"));
export const ConfirmCode = lazy(() => import("../pages/Auth/ConfirmCode"));
export const ForgotPassword = lazy(
  () => import("../pages/Auth/ForgotPassword")
);
export const ResetPassword = lazy(() => import("../pages/Auth/ResetPassword"));

//Dashboard Routes
export const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));

export const Settings = lazy(() => import("../pages/Dashboard/Settings"));
export const Users = lazy(() => import("../pages/Dashboard/Users"));
export const Help = lazy(() => import("../pages/Dashboard/Help"));
export const Wallet = lazy(() => import("../pages/Dashboard/Wallet"));
export const AddUser = lazy(() => import("../pages/Dashboard/AddUser"));

//Profile Routes
export const Profile = lazy(() => import("../pages/Dashboard/Profile"));
export const UpdateProfile = lazy(
  () => import("../pages/Dashboard/UpdateProfile")
);
export const VerifyEmail = lazy(() => import("../pages/Dashboard/VerifyEmail"));
