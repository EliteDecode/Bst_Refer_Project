import { Box, Grid } from "@mui/material";
import TitleText from "../common/TitleText";
import { ServicesRendered } from "@/utils/contents";
import { Typography } from "antd";

const Courses = () => {
  return (
    <Box className="bg-tetiary py-16" id="Courses">
      <Box className="custom-c p-5 relative rounded-md">
        <TitleText title="Courses Offered" />
        <Box className="mt-5">
          <Grid container spacing={2}>
            {ServicesRendered?.map((service, index) => (
              <Grid item md={4} key={index}>
                <Box className="bg-white shadow-md p-5 rounded-lg">
                  <img
                    src={service?.icon}
                    alt={service?.title}
                    className="w-[10%]"
                  />
                  <Typography className="text-[#000000] text-[16px] mt-3 font-bold capitalize">
                    {service?.title}
                  </Typography>
                  <Typography
                    className=" text-[12px] opacity-70"
                    style={{ fontFamily: "calistoga" }}>
                    {service?.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Courses;
