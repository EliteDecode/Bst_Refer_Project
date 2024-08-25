import { changePasswordSchema } from "@/lib/schemas";
import { reset, updateUserPassword } from "@/services/features/user/userSlice";
import { AppDispatch } from "@/store";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const useChangePasswordForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { isLoading, isSuccess, isError, message } = useSelector(
    (state: any) => state.user
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (isSuccess) {
      toast.success(message);
      dispatch(reset());
    }

    if (isError && message) {
      toast.error(message);
      dispatch(reset());
    }
  }, [isSuccess, isError, message, dispatch]);

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: changePasswordSchema,
    onSubmit: (values) => {
      dispatch(updateUserPassword(values));
      formik.resetForm();
    },
  });

  return { formik, handleTogglePasswordVisibility, showPassword, isLoading };
};

export default useChangePasswordForm;
