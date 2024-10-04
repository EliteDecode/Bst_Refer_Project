import Loader from "@/helpers/Loader";
import useSignInOptions from "@/hooks/form-hooks/useSignInOptions";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GoogleCallback = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");

  const { handleLoginWithGoogle, isLoading } = useSignInOptions();

  useEffect(() => {
    if (code) {
      handleLoginWithGoogle({ code });
    }
  }, []);

  return <div>{isLoading && <Loader />}</div>;
};

export default GoogleCallback;
