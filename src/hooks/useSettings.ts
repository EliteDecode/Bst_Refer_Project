import { deleteUserAccount, reset } from "@/services/features/user/userSlice";
import { AppDispatch } from "@/store";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useSettings = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.user
  );

  const copyReferralCode = () => {
    navigator.clipboard
      .writeText(user?.referralCode)
      .then(() => {
        toast.success("Referral code copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy referral code");
      });
  };

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteUserAccount(user?._id));
  };

  useEffect(() => {
    if (isSuccess && message == "User deleted successfully") {
      navigate("/auth/login");
      toast.success(message);
      setTimeout(() => {
        dispatch(reset());
      }, 2000);
    }

    if (isError && message) {
      toast.error(message);
      setTimeout(() => {
        dispatch(reset());
      }, 2000);
    }
  }, [isLoading, isError, isSuccess, message]);

  return { user, handleDelete, copyReferralCode, isLoading };
};

export default useSettings;
