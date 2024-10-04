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
export const Referrals = lazy(() => import("../pages/Dashboard/Referrals"));
export const ViewReferral = lazy(
  () => import("../pages/Dashboard/ViewReferral")
);
export const AddReferral = lazy(() => import("../pages/Dashboard/AddReferral"));
export const Help = lazy(() => import("../pages/Dashboard/Help"));
export const Wallet = lazy(() => import("../pages/Dashboard/Wallet"));
export const Withdrawal = lazy(() => import("../pages/Dashboard/Withdrawal"));

//Profile Routes
export const Profile = lazy(() => import("../pages/Dashboard/Profile"));
export const UpdateProfile = lazy(
  () => import("../pages/Dashboard/UpdateProfile")
);
export const VerifyEmail = lazy(() => import("../pages/Dashboard/VerifyEmail"));

//Callbacks
export const GoogleCallback = lazy(
  () => import("../pages/Auth/callbacks/GoogleCallback")
);
export const FacebookCallback = lazy(
  () => import("../pages/Auth/callbacks/FacebookCallback")
);
export const GithubCallback = lazy(
  () => import("../pages/Auth/callbacks/GithubCallback")
);
