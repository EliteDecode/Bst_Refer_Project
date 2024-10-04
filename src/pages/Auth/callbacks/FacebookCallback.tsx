import Loader from "@/helpers/Loader";
import useSignInOptions from "@/hooks/form-hooks/useSignInOptions";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const FacebookCallback = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");

  const { handleLoginWithFacebook, isLoading } = useSignInOptions();

  useEffect(() => {
    if (code) {
      handleLoginWithFacebook({ code });
    }
  }, []);

  return <div>{isLoading && <Loader />}</div>;
};

export default FacebookCallback;
