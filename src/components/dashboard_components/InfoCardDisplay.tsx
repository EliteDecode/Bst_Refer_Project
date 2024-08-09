import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import AreaChartComp from "./AreaChartComp";
import { usersDataChart } from "@/utils/dashboardContents";
import { InfoCardDisplayProps } from "@/types/majorTypes";

import usersIcon from "@/assets/icons/team.png";
import registeredUsersIcon from "@/assets/icons/document.png";
import walletIcon from "@/assets/icons/wallet.png";
import settingsIcon from "@/assets/icons/settings.png";

const InfoCardDisplay = () => {
  const HomeCardContents: InfoCardDisplayProps[] = [
    {
      title: "All Users",
      description: 0,
      buttonText: "View All Users",
      link: "/dashboard/teachers",
      image: usersIcon,
    },
    {
      title: "Registered Users",
      description: 0,
      buttonText: "View Registered Users",
      link: "/dashboard/teachers",
      image: registeredUsersIcon,
    },
    {
      title: "Wallet",
      description: (50000).toLocaleString(),
      buttonText: "View Wallet",
      link: "/dashboard/students",
      image: walletIcon,
    },
    {
      title: "Settings",
      description: 7,
      buttonText: "View Settings",
      link: "/dashboard/parents",
      image: settingsIcon,
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
              data={usersDataChart}
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
