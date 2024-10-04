import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InfoCardDisplayProps } from "@/types/majorTypes";
import { Box, Grid } from "@mui/material";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import AreaChartComp from "./AreaChartComp";

import registeredUsersIcon from "@/assets/icons/document.png";
import usersIcon from "@/assets/icons/team.png";
import walletIcon from "@/assets/icons/wallet.png";
import { modelReferralDataToChart } from "@/lib/referralChartData";
import { FaNairaSign } from "react-icons/fa6";
import { useSelector } from "react-redux";

const InfoCardDisplay = () => {
  const { referrals } = useSelector((state: any) => state.referral);
  const { wallets } = useSelector((state: any) => state.wallet);

  const referralChat = modelReferralDataToChart(referrals);

  const HomeCardContents: InfoCardDisplayProps[] = [
    {
      title: "All Referrals",
      description: referrals?.length,
      buttonText: "View All Referrals",
      link: "/dashboard/referrals",
      image: usersIcon,
    },
    {
      title: "Matched Referrals",
      description: referrals?.filter((item: any) => item.isMatched === true)
        .length,
      buttonText: "View All Referrals",
      link: "/dashboard/teachers",
      image: registeredUsersIcon,
    },
    {
      title: "Balance Wallet",
      description: (
        <Box className="flex items-center justify-center space-x-1">
          <FaNairaSign size={12} />{" "}
          <span>{wallets?.balance?.toLocaleString() || "0"}</span>
        </Box>
      ),
      buttonText: "View Wallet",
      link: "/dashboard/walletes",
      image: walletIcon,
    },
    {
      title: "Withdrawn Wallet",
      description: (
        <Box className="flex items-center justify-center space-x-1">
          <FaNairaSign size={12} />{" "}
          <span>{wallets?.withdrawn?.toLocaleString() || "0"}</span>
        </Box>
      ),
      buttonText: "View Wallet",
      link: "/dashboard/walletes",
      image: walletIcon,
    },
  ];
  return (
    <Grid item sm={12} md={9} className="">
      <Grid container spacing={2}>
        {HomeCardContents.map((item, index) => (
          <Grid item xs={12} sm={12} md={3} key={index} className="">
            <Card className="border-none">
              <Box className="flex justify-between items-center">
                <CardHeader>
                  <CardTitle
                    className="text-[12px]"
                    style={{ fontFamily: "eczar" }}>
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <Box className="p-6">
                  <img src={item.image} alt=" image" className="w-[32px]" />
                </Box>
              </Box>

              <CardFooter>
                <Link to={item?.link}>
                  <Button
                    size="sm"
                    className="bg-gray-100 shadow-none text-black">
                    {item.buttonText}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container className="mt-5">
        <Grid item xs={12} sm={12} md={12}>
          <Box className="sm:h-[55vh] h-[45vh] py-5 bg-white rounded-md">
            <Typography
              className="text-[14px] p-5 mb-5 font-semibold uppercase text-primary"
              style={{ fontFamily: "eczar" }}>
              Overview of Users
            </Typography>
            <AreaChartComp
              data={referralChat}
              stroke="#87CEEB"
              fill="#87CEEB"
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InfoCardDisplay;
