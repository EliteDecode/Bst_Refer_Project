import { sendComplaintSchema } from "@/lib/schemas";
import { reset, sendMessage } from "@/services/features/support/supportSlice";
import { AppDispatch } from "@/store";
import { useFormik } from "formik";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useSendComplaintForm = () => {
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state: any) => state.support
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      message: "",
      title: "",
    },
    validationSchema: sendComplaintSchema,
    onSubmit: (values) => {
      dispatch(sendMessage(values));
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success(message);
      dispatch(reset());
      navigate(0);
      formik.resetForm();
    }

    if (isError && message) {
      toast.error(message);
      dispatch(reset());
    }
  }, [isSuccess, isError, message, dispatch]);

  return { formik, isLoading };
};

export default useSendComplaintForm;
