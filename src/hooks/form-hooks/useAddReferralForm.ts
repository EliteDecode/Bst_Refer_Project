import { addReferralSchema } from "@/lib/schemas";
import { useFormik } from "formik";
import { AppDispatch } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { Addreferral, reset } from "@/services/features/referral/referralSlice";

const useAddReferralForm = () => {
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state: any) => state.referral
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phone: "",
      address: "",
      course: "",
    },
    validationSchema: addReferralSchema,
    onSubmit: (values) => {
      dispatch(Addreferral(values));
    },
  });

  useEffect(() => {
    if (isSuccess && message == "Referral added successfully") {
      toast.success(message);
      dispatch(reset());
      navigate(-1);
      formik.resetForm();
    }

    if (isError && message) {
      toast.error(message);
      dispatch(reset());
    }
  }, [isSuccess, isError, message, dispatch]);

  return { formik, isLoading };
};

export default useAddReferralForm;
