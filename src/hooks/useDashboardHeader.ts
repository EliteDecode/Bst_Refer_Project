import { getDashboardTitle } from "@/lib/functions";
import { LogoutUser, reset } from "@/services/features/auth/authSlice";
import { AppDispatch } from "@/store";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const useDashboardHeader = () => {
  const location = useLocation();
  const pathanme = location.pathname;
  const dashboardTitle = getDashboardTitle(pathanme);
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.auth
  );

  const handleLogout = () => {
    dispatch(LogoutUser());
  };

  useEffect(() => {
    if (isSuccess && message == "Logout successfully") {
      toast.success(message);
      dispatch(reset());
    }

    if (isError && message) {
      toast.error(message);
      dispatch(reset());
    }
  }, [isSuccess, isError, message, dispatch]);

  return { handleLogout, dashboardTitle, isLoading };
};

export default useDashboardHeader;
