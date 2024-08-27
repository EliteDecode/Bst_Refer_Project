import InfoCardDisplay from "@/components/dashboard_components/InfoCardDisplay";
import Loader from "@/helpers/Loader";
import { FetchReferralDetails } from "@/services/features/referral/referralSlice";
import { FetchUserDetails, reset } from "@/services/features/user/userSlice";
import { FetchUserWallet } from "@/services/features/wallet/walletSlice";
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
    dispatch(FetchReferralDetails());
    dispatch(FetchUserWallet());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch(reset());
    }, 5000);
  }, [isError, isSuccess]);

  return <div>{isLoading ? <Loader /> : <InfoCardDisplay />}</div>;
};

export default Dashboard;
