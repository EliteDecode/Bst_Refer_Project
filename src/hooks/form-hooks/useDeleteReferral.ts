import {
  deleteReferralAccount,
  reset,
} from "@/services/features/referral/referralSlice";

import { AppDispatch } from "@/store";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const useDeleteReferral = () => {
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.referral
  );

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { referralId } = useParams();

  const handleDelete = () => {
    referralId && dispatch(deleteReferralAccount(referralId));
  };

  useEffect(() => {
    if (isSuccess && message == "Referral deleted successfully") {
      navigate(-1);
      toast.success(message);
      dispatch(reset());
    }

    if (isError && message) {
      toast.error(message);
      dispatch(reset());
    }
  }, [isLoading, isError, isSuccess, message]);

  return { handleDelete, isLoading };
};

export default useDeleteReferral;
