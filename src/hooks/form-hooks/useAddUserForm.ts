import { addUserSchema } from "@/lib/schemas";
import { useFormik } from "formik";

const useAddUserForm = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phone: "",
      address: "",
      course: "",
    },
    validationSchema: addUserSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return { formik };
};

export default useAddUserForm;
