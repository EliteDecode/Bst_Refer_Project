import { Box } from "@mui/material";
import profileImage from "@/assets/images/dashboard/gospelProfile.jpg";
import { Typography } from "antd";
import usersIcon from "@/assets/icons/team.png";
import { Button } from "../ui/button";

const ProfileDetails = () => {
  return (
    <Box>
      <Box className="flex items-center justify-center -mt-20">
        <img
          src={profileImage}
          alt="profileImage"
          className="rounded-full w-36 h-36"
        />
      </Box>
      <Box>
        <Typography className="text-center text-[20px] font-semibold mt-4">
          John Samathanma
        </Typography>
        <Typography className="text-center text-[13px]  text-gray-500">
          @JohnSamathanma@gmail.com
        </Typography>
        <Typography className="text-center text-[13px]  text-gray-500">
          Software Engineer
        </Typography>
        <Typography className="text-center text-[13px]  text-gray-500">
          09019200922, 125 Ekehuan Road.
        </Typography>
      </Box>
      <Box className="grid grid-cols-3 sm:w-[50%] w-[90%] mt-10 m-auto ">
        <Box className="flex flex-col justify-center items-center space-y-2">
          <Typography className="text-center text-[13px]">
            Total Users
          </Typography>
          <Typography className="text-center font-bold text-[13px]">
            300
          </Typography>
        </Box>
        <Box className="flex flex-col justify-center items-center space-y-2 border-l border-r ">
          <Typography className="text-center text-[13px]">
            Total Matched
          </Typography>
          <Typography className="text-center font-bold text-[13px]">
            100
          </Typography>
        </Box>
        <Box className="flex flex-col justify-center items-center space-y-2">
          <Typography className="text-center text-[13px]">
            Total Earnings
          </Typography>
          <Typography className="text-center font-bold text-[13px]">
            N50,000,00.00
          </Typography>
        </Box>
      </Box>
      <Box className="flex items-center mt-10 justify-center">
        <Button size="sm">Update Profile</Button>
      </Box>
    </Box>
  );
};

export default ProfileDetails;
