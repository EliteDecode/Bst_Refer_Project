import { registrationSchema } from "@/lib/schemas";
import { useFormik } from "formik";
import { useState } from "react";

const useRegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registrationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return { formik, handleTogglePasswordVisibility, showPassword };
};

export default useRegisterForm;
