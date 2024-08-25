import { addReferralSchema } from "@/lib/schemas";
import {
  reset,
  UpdateReferralDetails,
} from "@/services/features/referral/referralSlice";
import { AppDispatch } from "@/store";
import { useFormik } from "formik";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useUpdateReferralForm = () => {
  const { isLoading, isSuccess, isError, message, singleReferral } =
    useSelector((state: any) => state.referral);

  const { referralId } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues: {
      fullname: singleReferral?.fullname || "",
      email: singleReferral?.email || "",
      phone: singleReferral?.phone || "",
      address: singleReferral?.address || "",
      course: singleReferral?.course || "",
    },
    validationSchema: addReferralSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch(UpdateReferralDetails({ ...values, _id: referralId }));
    },
  });

  useEffect(() => {
    if (isSuccess && message == "Referral updated successfully") {
      toast.success(message);
      dispatch(reset());
      formik.resetForm();
    }

    if (isError && message) {
      toast.error(message);
      dispatch(reset());
    }
  }, [isSuccess, isError, message, dispatch]);

  return { formik, isLoading };
};

export default useUpdateReferralForm;
