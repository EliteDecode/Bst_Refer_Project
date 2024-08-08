import { loginSchema } from "@/lib/schemas";
import { useFormik } from "formik";
import { useState } from "react";

const useLoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return { formik, handleTogglePasswordVisibility, showPassword };
};

export default useLoginForm;
