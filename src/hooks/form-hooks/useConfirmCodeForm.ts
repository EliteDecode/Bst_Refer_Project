import { confirmCodeSchema } from "@/lib/schemas";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { AppDispatch } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { reset, VerifyUser } from "@/services/features/auth/authSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useConfirmCodeForm = () => {
  type IRegUser = {
    _id: string;
    email: string;
  };

  const [user, setUser] = useState<IRegUser>();

  const fetchUserData = () => {
    const data = localStorage.getItem("BST_reg_data");
    if (data) {
      setUser(JSON.parse(data));
    }
  };
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      localStorage.removeItem("BST_reg_data");
      toast.success(message);
      dispatch(reset());
      navigate("/auth/login");
    }

    if (isError) {
      toast.error(message);
      dispatch(reset());
    }
  }, [isLoading, isSuccess, isError, message]);

  const formik = useFormik({
    initialValues: {
      pin: "",
    },
    validationSchema: confirmCodeSchema,
    onSubmit: (values) => {
      user &&
        dispatch(
          VerifyUser({ _id: user?._id, authCode: parseInt(values.pin) })
        );
    },
  });

  return { formik, user, isLoading };
};

export default useConfirmCodeForm;
