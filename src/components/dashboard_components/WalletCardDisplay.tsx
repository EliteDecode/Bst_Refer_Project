import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Box, Grid } from "@mui/material";
import { InfoCardDisplayProps } from "@/types/majorTypes";

import earningsIcon from "@/assets/icons/earning.png";
import debitIcon from "@/assets/icons/debit.png";
import walletIcon from "@/assets/icons/wallet.png";

import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";

const WalletCardDisplay = () => {
  const WalletCardContents: InfoCardDisplayProps[] = [
    {
      title: "Total Earnings",
      description: `₦ ${(500000).toLocaleString()}`,
      link: "/dashboard/teachers",
      buttonText: "+100%",
      image: earningsIcon,
    },
    {
      title: "Withdrawn Cash",
      description: `₦ ${(450000).toLocaleString()}`,
      link: "/dashboard/teachers",
      buttonText: "-95%",
      image: debitIcon,
    },
    {
      title: "Balance Cash",
      description: `₦ ${(50000).toLocaleString()}`,
      link: "/dashboard/students",
      buttonText: "5%",
      image: walletIcon,
    },
  ];
  return (
    <Grid item sm={12} md={12} className="">
      <Grid container spacing={2}>
        {WalletCardContents.map((item, index) => (
          <Grid item xs={12} sm={12} md={12} key={index} className="">
            <Card className="border-none">
              <Box className="flex justify-between items-center">
                <CardHeader>
                  <CardTitle
                    className="text-[12px] text-gray-500"
                    style={{ fontFamily: "eczar" }}>
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-primary text-[22px] font-bold">
                    {item.description}
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
    </Grid>
  );
};

export default WalletCardDisplay;
