import TitleText from "../common/TitleText";
import { Box, Grid } from "@mui/material";
import { HowItWorksDetails } from "@/utils/contents";
import { Typography } from "antd";

const HowItWorks = () => {
  return (
    <Box className="bg-white py-16 " id="How It Works">
      <Box className="custom-c p-5 relative rounded-md">
        <TitleText title="How It Works" />{" "}
        <Box className="sm:mt-16 mt-2">
          <Grid container spacing={10}>
            {HowItWorksDetails?.map((item, index) => (
              <Grid item sm={12} md={12} key={index}>
                <Grid container>
                  <Grid
                    item
                    sm={12}
                    md={6}
                    className="flex justify-center items-center">
                    <Box>
                      <Typography className="text-[20px] font-bold">
                        {item?.title}
                      </Typography>
                      <Typography className="text-[14px] text-[#0009]">
                        {item?.description}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Box className="flex sm:justify-end justify-center">
                      <img
                        src={item?.image}
                        alt={item?.title}
                        className="sm:w-[55%] w-[50%] sm:mt-0 mt-5"
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>{" "}
    </Box>
  );
};

export default HowItWorks;
