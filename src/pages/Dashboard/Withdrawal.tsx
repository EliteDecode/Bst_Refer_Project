import { WithdrawalForm } from "@/components/dashboard_components/forms/WithdrawalForm";
import WithdrawalTable from "@/components/dashboard_components/tables/WithdrawalTable";
import WalletCardDisplay from "@/components/dashboard_components/WalletCardDisplay";
import Loader from "@/helpers/Loader";
import {
  FetchUserWallet,
  FetchUserWithdrawals,
} from "@/services/features/wallet/walletSlice";
import { AppDispatch } from "@/store";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Withdrawal = () => {
  const { isLoading, wallets } = useSelector((state: any) => state.wallet);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(FetchUserWallet());
    dispatch(FetchUserWithdrawals());
  }, []);
  return (
    <Box>
      {isLoading && !wallets ? (
        <Loader />
      ) : (
        <>
          <Box className="mb-5">
            <WithdrawalForm />
          </Box>
          <Box className="space-y-4">
            <WalletCardDisplay />
            <Box className=" border-gray-200  w-full shadow-md border px-5 rounded-lg sm:overflow-x-auto overflow-x-scroll">
              <WithdrawalTable />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Withdrawal;
