import { changePasswordSchema } from "@/lib/schemas";
import { useFormik } from "formik";
import { useState } from "react";

const useChangePasswordForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: changePasswordSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return { formik, handleTogglePasswordVisibility, showPassword };
};

export default useChangePasswordForm;
