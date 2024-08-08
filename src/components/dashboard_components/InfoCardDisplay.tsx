import React, { useEffect } from "react";
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
import { usersData } from "@/utils/dashboardContents";

const InfoCardDisplay = () => {
  const HomeCardContents = [
    {
      title: "Total Teachers",
      description: 0,
      buttonText: "View Teachers",
      link: "/dashboard/teachers",
    },
    {
      title: "Total Teachers",
      description: 0,
      buttonText: "View Teachers",
      link: "/dashboard/teachers",
    },
    {
      title: "Total Student",
      description: 5,
      buttonText: "View Students",
      link: "/dashboard/students",
    },
    {
      title: "Total Parent",
      description: 7,
      buttonText: "View Parents",
      link: "/dashboard/parents",
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
                  <CardTitle className="text-[12px]">{item.title}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                {/* <Box className="p-6">
                  <img src={item.image} alt=" image" className="w-[32px]" />
                </Box> */}
              </Box>

              <CardFooter>
                <Link to={item?.link}>
                  <Button size="sm" variant="secondary">
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
            <Typography className="text-[14px] p-5 mb-5 font-semibold uppercase text-primary">
              Overview of Users
            </Typography>
            <AreaChartComp data={usersData} stroke="#87CEEB" fill="#87CEEB" />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InfoCardDisplay;
