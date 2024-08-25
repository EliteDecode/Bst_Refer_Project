import InfoCardDisplay from "@/components/dashboard_components/InfoCardDisplay";
import Loader from "@/helpers/Loader";
import { FetchUserDetails, reset } from "@/services/features/user/userSlice";
import { AppDispatch } from "@/store";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const { isLoading, isError, isSuccess } = useSelector(
    (state: any) => state.user
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(FetchUserDetails());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch(reset());
    }, 5000);
  }, [isError, isSuccess]);

  return <div>{isLoading ? <Loader /> : <InfoCardDisplay />}</div>;
};

export default Dashboard;
