import Loader from "@/helpers/Loader";
import useSignInOptions from "@/hooks/form-hooks/useSignInOptions";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GithubCallback = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");

  const { handleLoginWithGithub, isLoading } = useSignInOptions();

  useEffect(() => {
    if (code) {
      handleLoginWithGithub({ code });
    }
  }, []);

  return <div>{isLoading && <Loader />}</div>;
};

export default GithubCallback;
