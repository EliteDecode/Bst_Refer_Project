import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InfoCardDisplayProps } from "@/types/majorTypes";
import { Box, Grid } from "@mui/material";

import debitIcon from "@/assets/icons/debit.png";
import earningsIcon from "@/assets/icons/earning.png";
import walletIcon from "@/assets/icons/wallet.png";
import pendingIcon from "@/assets/icons/pending.png";

import { IWithdrawal } from "@/types/wallet.types";
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";
import { useSelector } from "react-redux";

const WalletCardDisplay = () => {
  const { wallets, withdrawals } = useSelector((state: any) => state.wallet);

  // Calculate the percentages
  const total = wallets?.total || 0;
  const withdrawn = wallets?.withdrawn || 0;
  const balance = wallets?.balance || 0;
  const withdrawalbleBalance =
    wallets?.balance - 5000 < 0 ? 0 : wallets?.balance - 5000;
  const pendingWithdrawals = withdrawals
    ?.filter((withdrawal: IWithdrawal) => withdrawal?.status === "pending")
    ?.reduce((acc: number, curr: IWithdrawal) => acc + curr.amount, 0);

  const withdrawnPercentage =
    total > 0 ? ((withdrawn / total) * 100).toFixed(2) : "0.00";
  const balancePercentage =
    total > 0 ? ((balance / total) * 100).toFixed(2) : "0.00";
  const pendingWithdrawalsPercentage =
    total > 0 ? ((pendingWithdrawals / total) * 100).toFixed(2) : "0.00";

  const WalletCardContents: InfoCardDisplayProps[] = [
    {
      title: "Total Earnings",
      description: `₦ ${total?.toLocaleString()}`,
      link: "/dashboard/teachers",
      buttonText: total > 0 ? "+100%" : "0.00", // Total earnings is always 100%
      image: earningsIcon,
    },
    {
      title: "Withdrawn Cash",
      description: `₦ ${withdrawn?.toLocaleString()}`,
      link: "/dashboard/teachers",
      buttonText:
        withdrawnPercentage !== "0.00" ? `-${withdrawnPercentage}%` : "0.00",
      image: debitIcon,
    },
    {
      title: "Balance Cash",
      description: `₦ ${balance?.toLocaleString()}` || "₦ 0",
      link: "/dashboard/students",
      buttonText: `${balancePercentage}%`,
      image: walletIcon,
      withdrawableBalance: withdrawalbleBalance,
    },
    {
      title: "Pending Withdrawals",
      description: `₦ ${pendingWithdrawals?.toLocaleString()}` || "₦ 0",
      link: "/dashboard/students",
      buttonText: `-${pendingWithdrawalsPercentage}%`,
      image: pendingIcon,
    },
  ];

  return (
    <Grid container spacing={2}>
      {WalletCardContents.map((item, index) => (
        <Grid item xs={12} sm={12} md={3} key={index} className="">
          <Card className="border-none">
            <Box className="flex justify-between items-center">
              <CardHeader>
                <CardTitle
                  className="text-[12px] text-gray-500"
                  style={{ fontFamily: "eczar" }}>
                  {item.title}
                </CardTitle>
                <CardDescription className="text-primary text-[22px] font-bold">
                  {item.description} <br />
                  {item?.title === "Balance Cash" && (
                    <span className="text-[10px] text-gray-500">
                      Withdrawable Balance:{" "}
                      {item?.withdrawableBalance?.toLocaleString()}
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              <Box className="p-6">
                <img src={item.image} alt=" image" className="w-[22px]" />
              </Box>
            </Box>
            <CardFooter>
              <Box
                className={` ${parseInt(item?.buttonText) < 0 ? "bg-red-50" : "bg-green-50"} border space-x-1 py-1 px-1 flex items-center justify-center rounded-md`}>
                {parseInt(item?.buttonText) > 0 ? (
                  <IoIosTrendingUp className="text-green-500" size={10} />
                ) : (
                  <IoIosTrendingDown className="text-red-500" size={10} />
                )}
                <span
                  className={`text-[9px] ${parseInt(item?.buttonText) < 0 ? "text-red-500" : "text-green-500"}`}>
                  {item?.buttonText}
                </span>
              </Box>
            </CardFooter>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default WalletCardDisplay;
