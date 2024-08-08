import { lazy } from "react";

export const Home = lazy(() => import("../pages/Home/Home"));

//Authentication Routes
export const Login = lazy(() => import("../pages/Auth/Login"));
export const Register = lazy(() => import("../pages/Auth/Register"));

//Dashboard Routes
export const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
export const Profile = lazy(() => import("../pages/Dashboard/Profile"));
export const Settings = lazy(() => import("../pages/Dashboard/Settings"));
export const Users = lazy(() => import("../pages/Dashboard/Users"));
export const Help = lazy(() => import("../pages/Dashboard/Help"));
export const Wallet = lazy(() => import("../pages/Dashboard/Wallet"));
