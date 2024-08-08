import { Box, Grid } from "@mui/material";
import { Typography } from "antd";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { RiGlobalLine } from "react-icons/ri";
import heroImg from "@/assets/images/hero/heroImg.png";
import { Link } from "react-router-dom";

const bounceTransition = {
  type: "spring",
  damping: 8,
  stiffness: 80,
};

const Hero = () => {
  return (
    <div
      className="sm:h-[90vh]  h-[90vh]  w-full flex flex-col items-center justify-center "
      id="home">
      <Box className="custom-c ">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ...bounceTransition, delay: 0.5 }}>
              <Typography
                className=" font-black sm:mt-0 mt-48 text-[40px]"
                style={{ fontFamily: "montserrat", lineHeight: "3rem" }}>
                Join BST's Affiliate Program
              </Typography>
              <Typography className="text-[18px] mt-3  text-[#0009]">
                Refer BST to your friends and followers, and earn 10,000 Naira
                of all referred payments. There's no limit to how much you can
                earn.
              </Typography>
              <Box className="flex opacity-55 items-center mt-4 space-x-1">
                <RiGlobalLine style={{ color: "#2383e2" }} size={20} />
                <span className="font-light">
                  Share the great experiences today!
                </span>
              </Box>
              <Box className="flex mt-5 items-center space-x-1">
                <Link to="/auth/register">
                  <Button className="bg-primary flex items-center space-x-1">
                    <span>Apply Now</span>
                  </Button>
                </Link>
                <Link to="/auth/login">
                  <Button className="bg-secondary text-white flex items-center space-x-1">
                    <span>Login</span>
                  </Button>
                </Link>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="sm:my-0 my-16"
              transition={{ ...bounceTransition, delay: 0.5 }}>
              <img src={heroImg} alt="hero " />
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Hero;
