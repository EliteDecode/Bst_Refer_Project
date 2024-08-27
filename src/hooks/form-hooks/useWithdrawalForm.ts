import { withdrawalSchema } from "@/lib/schemas";
import {
  RequestWithdrawal,
  reset,
} from "@/services/features/wallet/walletSlice";
import { AppDispatch } from "@/store";
import { useFormik } from "formik";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useWithdrawalForm = () => {
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state: any) => state.wallet
  );

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess && message == "Withdrawl Placed successfully") {
      dispatch(reset());
      navigate(0);
    }

    if (isError && message) {
      toast.error(message);
      dispatch(reset());
    }
  }, [isSuccess, isError, message, dispatch]);

  const formik = useFormik({
    initialValues: {
      amount: "",
    },
    validationSchema: withdrawalSchema,
    onSubmit: (values) => {
      console.log(values);
      const amount = parseInt(values.amount);
      dispatch(RequestWithdrawal(amount));
    },
  });

  return {
    formik,
    isLoading,
  };
};

export default useWithdrawalForm;
